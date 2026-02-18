'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
    src: string; // .m3u8, .mp4, or embed URL
    poster?: string;
    autoplay?: boolean;
    muted?: boolean;
    controls?: boolean;
    className?: string;
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
    onReady,
    onError,
}: HLSPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSrc, setCurrentSrc] = useState<string>('');

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
                // HLS.js support
                const hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90,
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
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 border-4 border-[hsl(var(--brand-red))] border-t-transparent rounded-full animate-spin" />
                        <p className="text-sm text-foreground-muted">Loading stream...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-10">
                    <div className="text-center p-6">
                        <div className="text-[hsl(var(--error))] text-xl mb-2">⚠️ Playback Error</div>
                        <p className="text-foreground-muted">{error}</p>
                    </div>
                </div>
            )}

            <video
                ref={videoRef}
                className="w-full h-full bg-black"
                poster={poster}
                controls={controls}
                muted={muted}
                playsInline
                preload="metadata"
                // @ts-expect-error - referrerPolicy is valid HTML but missing from React types
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
            />
        </div>
    );
}
