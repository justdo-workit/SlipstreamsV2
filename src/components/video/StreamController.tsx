'use client';

import { useState, useEffect, useRef } from 'react';
import { HLSPlayer } from '@/components/video/HLSPlayer';

const STREAMS = {
    // DEFAULT: `https://slipstreams.just-do-work-it.workers.dev/?url=${encodeURIComponent('https://baki.wearehere.site/logo.m3u8')}`, // Preserved for future use
    DEFAULT: 'https://westreamf1.com/westreamf1.php',
    BACKUP_1: 'https://hakunamatata5.org/sky-main-event/clean.html',
    BACKUP_2: 'https://streamcrichd.com/update/skyf1.php',
    BACKUP_3: 'https://dlhd.link/stream/stream-60.php',
};

export function StreamController() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStream, setActiveStream] = useState<string>(STREAMS.DEFAULT);
    const [activeButton, setActiveButton] = useState<'DEFAULT' | 'BACKUP_1' | 'BACKUP_2' | 'BACKUP_3'>('DEFAULT');
    const [isTVMode, setIsTVMode] = useState(false);
    const [isHDLocked, setIsHDLocked] = useState(true);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsTVMode(!!document.fullscreenElement);
        };

        // Check if HD is already unlocked in this session
        const hasUnlocked = sessionStorage.getItem('hd_unlocked');
        if (hasUnlocked === 'true') {
            setIsHDLocked(false);
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const toggleTVMode = async () => {
        try {
            if (!isTVMode) {
                await containerRef.current?.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error("Fullscreen error:", err);
        }
    };

    const handleStreamChange = (stream: string, btn: 'DEFAULT' | 'BACKUP_1' | 'BACKUP_2' | 'BACKUP_3') => {
        setActiveStream(stream);
        setActiveButton(btn);
    };

    const handleUnlockHD = () => {
        // Unlock locally first for immediate feedback
        setIsHDLocked(false);

        const hasUnlocked = sessionStorage.getItem('hd_unlocked');
        if (!hasUnlocked) {
            sessionStorage.setItem('hd_unlocked', 'true');
            window.open('https://www.effectivegatecpm.com/sfcvmas1x?key=219634b42ca63a03a9aed8c122378c4e', '_blank');
        }
    };

    return (
        <div className="space-y-4">
            {/* Video Player - Full Width, No Ads Touching */}
            <div
                ref={containerRef}
                className={`card p-0 overflow-hidden border-[hsl(var(--brand-red))]/30 bg-black transition-all duration-300 ${isTVMode ? 'fixed inset-0 z-50 rounded-none border-0 w-full h-full' : ''
                    }`}
            >
                {isTVMode && (
                    <button
                        onClick={toggleTVMode}
                        className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-[hsl(var(--brand-red))] text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                        title="Exit TV Mode (Esc)"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                <div className={`${isTVMode ? 'w-full h-full' : (activeButton === 'BACKUP_1' ? 'w-full h-[600px] md:h-auto md:aspect-video' : 'aspect-video w-full h-full')} relative`}>
                    {/* HD Lock Shade Overlay - Inside relative video container */}
                    {isHDLocked && (
                        <div className="absolute inset-0 z-30 bg-black/60 pointer-events-none transition-opacity duration-500" />
                    )}

                    {activeButton === 'BACKUP_1' ? (
                        <iframe
                            title="Live"
                            src={activeStream}
                            className=" w-[100%] h-[100%] md:w-[100%] md:h-[100%]"
                            allowFullScreen
                            sandbox="allow-same-origin allow-scripts allow-popups"
                        />
                    ) : activeButton === 'BACKUP_3' ? (
                        <iframe
                            src={activeStream}
                            className="w-full h-full border-0 absolute inset-0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            scrolling="no"
                            style={{ overflow: 'hidden' }}
                        />
                    ) : (
                        <HLSPlayer
                            key={activeStream}
                            src={activeStream}
                            autoplay={false}
                            muted={false}
                            controls={true}
                            className="w-full h-full"
                            isTVMode={isTVMode}
                        />
                    )}
                </div>
            </div>

            {/* Stream Control Buttons */}
            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={() => handleStreamChange(STREAMS.DEFAULT, 'DEFAULT')}
                    className={`px-4 py-2 cursor-pointer font-bold rounded text-sm uppercase tracking-wide transition-colors ${activeButton === 'DEFAULT'
                        ? 'bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white'
                        : 'bg-[hsl(var(--surface-elevated))] hover:bg-[hsl(var(--surface-highlight))] text-foreground border border-white/10'
                        }`}
                >
                    Default
                </button>
                <button
                    onClick={() => handleStreamChange(STREAMS.BACKUP_1, 'BACKUP_1')}
                    className={`px-4 py-2 cursor-pointer font-semibold rounded text-sm uppercase tracking-wide transition-colors ${activeButton === 'BACKUP_1'
                        ? 'bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white'
                        : 'bg-[hsl(var(--surface-elevated))] hover:bg-[hsl(var(--surface-highlight))] text-foreground border border-white/10'
                        }`}
                >
                    Backup 1
                </button>
                <button
                    onClick={() => handleStreamChange(STREAMS.BACKUP_2, 'BACKUP_2')}
                    className={`px-4 py-2 cursor-pointer font-semibold rounded text-sm uppercase tracking-wide transition-colors ${activeButton === 'BACKUP_2'
                        ? 'bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white'
                        : 'bg-[hsl(var(--surface-elevated))] hover:bg-[hsl(var(--surface-highlight))] text-foreground border border-white/10'
                        }`}
                >
                    Backup 2
                </button>
                <button
                    onClick={() => handleStreamChange(STREAMS.BACKUP_3, 'BACKUP_3')}
                    className={`px-4 py-2 cursor-pointer font-semibold rounded text-sm uppercase tracking-wide transition-colors ${activeButton === 'BACKUP_3'
                        ? 'bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red))]/90 text-white'
                        : 'bg-[hsl(var(--surface-elevated))] hover:bg-[hsl(var(--surface-highlight))] text-foreground border border-white/10'
                        }`}
                >
                    Backup 3
                </button>


                <div className="ml-auto flex items-center gap-2">
                    <button
                        onClick={toggleTVMode}
                        className={`cursor-pointer flex items-center gap-2 px-3 py-2 transition-colors text-sm font-medium ${isTVMode ? 'text-[hsl(var(--brand-red))]' : 'text-foreground-muted hover:text-white'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="hidden sm:inline">{isTVMode ? 'Exit TV Mode' : 'TV Mode'}</span>
                    </button>
                    {!isTVMode && isHDLocked && (
                        <button
                            onClick={handleUnlockHD}
                            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#F5C518] hover:bg-[#E2B616] text-black font-bold rounded text-sm transition-colors animate-pulse"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Unlock HD
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
