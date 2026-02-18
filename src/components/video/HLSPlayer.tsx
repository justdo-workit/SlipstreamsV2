'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

export type HLSPlayerProps = {
    src: string; // .m3u8, .mp4, or embed URL
    poster?: string;
    autoplay?: boolean;
    muted?: boolean;
    controls?: boolean;
    className?: string;
    isTVMode?: boolean;
    onReady?: () => void;
    onError?: (error: any) => void;
}

export function HLSPlayer({
    src,
    poster,
    autoplay = false,
    muted = true,
    controls = true,
    className = '',
    isTVMode = false,
    onReady,
    onError,
}: HLSPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSrc, setCurrentSrc] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Determine if source is likely an embed (iframe) rather than direct video
    // If it doesn't match known video extensions and isn't HLS mime type, treat as embed
    const isEmbed = !/\.(m3u8|mp4|webm|ogg|mov)$/i.test(src) && !src.includes('application/vnd.apple.mpegurl');

    useEffect(() => {
        // If it's an embed, we don't need HLS/Video logic
        if (isEmbed) {
            setIsLoading(false);
            onReady?.();
            return;
        }

        const video = videoRef.current;
        if (!video) return;

        // Reset state on source change
        setIsLoading(true);
        setError(null);
        setCurrentSrc('');
        setIsPlaying(false);

        // Cleanup function
        const cleanup = () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }

            // Revoke blob URL if it exists
            if (currentSrc && currentSrc.startsWith('blob:')) {
                URL.revokeObjectURL(currentSrc);
            }

            // Remove event listeners
            video.removeAttribute('src');
            video.load();
        };

        // Determine if source is HLS
        const isHLS = src.includes('.m3u8') || src.includes('application/vnd.apple.mpegurl');

        if (isHLS) {
            // Priority: Check HLS.js support FIRST for better error handling & headers support
            if (Hls.isSupported()) {
                const hls = new Hls({
                    enableWorker: false,
                    lowLatencyMode: false,
                    backBufferLength: 90,
                    xhrSetup: function (xhr, url) {
                        xhr.withCredentials = false;
                    },
                });

                hlsRef.current = hls;
                hls.attachMedia(video);

                hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                    hls.loadSource(src);
                });

                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    setIsLoading(false);
                    onReady?.();
                    if (autoplay) video.play().catch(console.warn);
                });

                hls.on(Hls.Events.ERROR, (event, data) => {
                    console.error('HLS Error:', data);
                    if (data.fatal) {
                        switch (data.type) {
                            case Hls.ErrorTypes.NETWORK_ERROR:
                                setError(`Network Error: ${data.details}`);
                                hls.startLoad();
                                break;
                            case Hls.ErrorTypes.MEDIA_ERROR:
                                setError(`Media Error: ${data.details}`);
                                hls.recoverMediaError();
                                break;
                            default:
                                setError(`Fatal: ${data.details}`);
                                if (onError) onError(data);
                                hls.destroy();
                                break;
                        }
                    }
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Fallback to Native HLS (mainly for iOS Safari)
                video.src = src;
                setCurrentSrc(src);
                setIsLoading(false);

                const onLoadedMetadata = () => onReady?.();
                const onError = (e: Event) => {
                    // Try to get more specific error info if possible, though native video error is limited
                    const err = (e.target as HTMLVideoElement).error;
                    setError(`Native Playback Error: ${err?.message || err?.code || 'Unknown'}`);
                    if (onError) onError(e);
                };

                video.addEventListener('loadedmetadata', onLoadedMetadata);
                video.addEventListener('error', onError);
            } else {
                const msg = 'HLS is not supported in this browser';
                setError(msg);
                if (onError) onError(new Error(msg));
            }
        } else {
            // Direct Video File (MP4, WebM, etc.)
            video.src = src;
            setCurrentSrc(src);

            const onCanPlay = () => {
                setIsLoading(false);
                onReady?.();
            };

            const onError = (e: Event) => {
                setError('Error loading video file');
                if (onError) onError(e);
            };

            video.addEventListener('canplay', onCanPlay);
            video.addEventListener('error', onError);
            video.load();

            if (autoplay) video.play().catch(console.warn);
        }

        return cleanup;
    }, [src, autoplay, onReady, onError, isEmbed]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(console.error);
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            setIsPlaying(!videoRef.current.paused);
        }
    };

    // Render Iframe for embeds
    if (isEmbed) {
        return (
            <div className={`relative ${className} w-full h-full bg-black`}>
                <iframe
                    src={src}
                    className="w-full h-full border-0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ border: 'none' }}
                />
            </div>
        );
    }

    // Render Video Player for HLS/Direct files
    return (
        <div
            className={`relative ${className} group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 pointer-events-none">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-[hsl(var(--brand-red))] border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm text-foreground-muted">Loading stream...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-20 pointer-events-none">
                    <div className="text-center p-6">
                        <div className="text-[hsl(var(--error))] text-xl mb-2">⚠️ Playback Error</div>
                        <p className="text-foreground-muted">{error}</p>
                    </div>
                </div>
            )}

            {/* Play/Pause Overlay */}
            {!isLoading && !error && (
                <div
                    className={`absolute inset-0 z-10 flex transition-opacity duration-300 ${!isPlaying || isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } ${isTVMode ? 'items-end justify-end pb-16 pr-16' : 'items-center justify-center'}`}
                    onClick={togglePlay}
                >
                    <button
                        className="w-20 h-20 bg-black/50 hover:bg-[hsl(var(--brand-red))] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-110 shadow-lg"
                        aria-label={isPlaying ? "Pause" : "Play"}
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePlay();
                        }}
                    >
                        {isPlaying ? (
                            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-10 h-10 fill-current pl-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                </div>
            )}

            <video
                ref={videoRef}
                className="w-full h-full bg-black cursor-pointer"
                poster={poster}
                controls={controls} // Note: User might want to hide default controls if using custom overlay, but keeping for now as requested
                muted={muted}
                playsInline
                preload="metadata"
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay} // Also toggle on video click
                // @ts-expect-error - referrerPolicy is valid HTML but missing from React types
                referrerPolicy="no-referrer"
            />
        </div>
    );
}
