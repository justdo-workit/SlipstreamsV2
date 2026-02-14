'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
    src: string; // .m3u8 URL
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

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

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
        };

        // Check if browser natively supports HLS (Safari/iOS)
        const canPlayHLS = video.canPlayType('application/vnd.apple.mpegurl');

        if (canPlayHLS) {
            // Native HLS support (Safari/iOS)
            video.src = src;
            setCurrentSrc(src);
            setIsLoading(false);

            video.addEventListener('loadedmetadata', () => {
                onReady?.();
            });

            video.addEventListener('error', (e) => {
                const errorMessage = 'Video playback error';
                setError(errorMessage);
                onError?.(e);
            });
        } else if (Hls.isSupported()) {
            // Use hls.js for browsers that don't support HLS natively
            const hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90,
                maxBufferLength: 30,
                maxMaxBufferLength: 60,
                // Progressive download
                progressive: true,
            });

            hlsRef.current = hls;

            // Attach HLS to video element
            hls.attachMedia(video);

            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                console.log('HLS: Media attached');
                hls.loadSource(src);
            });

            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                console.log('HLS: Manifest parsed', data);
                setIsLoading(false);
                onReady?.();

                // Autoplay if enabled
                if (autoplay) {
                    video.play().catch((e) => {
                        console.warn('Autoplay failed:', e);
                        // Autoplay was prevented, likely due to browser policy
                    });
                }
            });

            hls.on(Hls.Events.FRAG_LOADED, (event, data) => {
                // Fragment loaded successfully
                // The video element will have a blob: URL as its src from MediaSource
                if (video.src && video.src.startsWith('blob:')) {
                    setCurrentSrc(video.src);
                }
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS Error:', data);

                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.error('Fatal network error, trying to recover');
                            hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.error('Fatal media error, trying to recover');
                            hls.recoverMediaError();
                            break;
                        default:
                            const errorMessage = 'Fatal error, cannot recover stream';
                            setError(errorMessage);
                            onError?.(data);
                            hls.destroy();
                            break;
                    }
                }
            });

            hls.on(Hls.Events.BUFFER_APPENDING, () => {
                // Segments are being appended to MediaSource buffer
                // At this point, video.src will be a blob: URL
            });
        } else {
            const errorMessage = 'HLS is not supported in this browser';
            setError(errorMessage);
            onError?.(new Error(errorMessage));
        }

        // Cleanup on unmount
        return cleanup;
    }, [src, autoplay, onReady, onError]);

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
            />
        </div>
    );
}
