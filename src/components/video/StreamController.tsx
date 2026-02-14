'use client';

import { useState } from 'react';
import { HLSPlayer } from '@/components/video/HLSPlayer';

const STREAMS = {
    DEFAULT: 'https://embedsports.me/fia-f1/sky-sports-f1-sky-f1-stream-1',
    BACKUP_1: 'https://streamcrichd.com/update/skyf1.php',
    BACKUP_2: 'https://dlhd.link/stream/stream-60.php',
};

export function StreamController() {
    const [activeStream, setActiveStream] = useState<string>(STREAMS.DEFAULT);
    const [activeButton, setActiveButton] = useState<'DEFAULT' | 'BACKUP_1' | 'BACKUP_2'>('DEFAULT');

    const handleStreamChange = (stream: string, btn: 'DEFAULT' | 'BACKUP_1' | 'BACKUP_2') => {
        setActiveStream(stream);
        setActiveButton(btn);
    };

    return (
        <div className="space-y-4">
            {/* Video Player - Full Width, No Ads Touching */}
            <div className="card p-0 overflow-hidden border-[hsl(var(--brand-red))]/30 bg-black">
                <div className="aspect-video">
                    <HLSPlayer
                        key={activeStream} // Force re-mount on stream change to ensure clean state
                        src={activeStream}
                        autoplay={false}
                        muted={false}
                        controls={true}
                        className="w-full h-full"
                    />
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

                <div className="ml-auto flex items-center gap-2">
                    <button className="cursor-pointer flex items-center gap-2 px-3 py-2 text-foreground-muted hover:text-white transition-colors text-sm font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="hidden sm:inline">TV Mode</span>
                    </button>
                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#F5C518] hover:bg-[#E2B616] text-black font-bold rounded text-sm transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Unlock HD
                    </button>
                </div>
            </div>
        </div>
    );
}
