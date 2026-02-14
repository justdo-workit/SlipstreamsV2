'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WatchNavbarProps {
    title: string;
    backUrl?: string;
}

export function WatchNavbar({ title, backUrl = '/' }: WatchNavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="container-custom h-full flex items-center justify-between relative">
                {/* Left: Back Button */}
                <div className="z-10">
                    <Link
                        href={backUrl}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg md:bg-transparent bg-[hsl(var(--brand-red))]/20 md:hover:bg-transparent hover:bg-[hsl(var(--brand-red))]/30 md:border-none border border-[hsl(var(--brand-red))]/30"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        <span className="font-medium hidden md:inline">Back</span>
                    </Link>
                </div>

                {/* Center: GP Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider text-center px-4">
                        {title}
                    </h1>
                </div>

                {/* Right: Placeholder for balance or future controls */}
                <div className="w-[88px] flex justify-end">
                    {/* Add any right-side controls here if needed */}
                </div>
            </div>
        </nav>
    );
}
