'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function HighPerformanceBanner() {
    return (
        /* Mobile: fixed sticky bottom bar with bg + border
           Desktop (md+): inline static block below the CTA */
        <div className="
            fixed bottom-0 left-0 right-0 z-50
            flex justify-center items-center
            bg-[hsl(var(--background-elevated))]/95 backdrop-blur-sm
            border-t border-[hsl(var(--brand-red))]/40
            py-2 px-2
            pointer-events-auto
            md:relative md:bottom-auto md:left-auto md:right-auto md:z-auto
            md:bg-transparent md:border-0 md:backdrop-blur-none
            md:mt-8 md:mb-4 md:py-0 md:px-0
        ">
            {/* Inner: scale 728×90 down to fit mobile screens, full-size on desktop */}
            <div className="
                origin-center
                scale-[0.99] sm:scale-[0.85] md:scale-100
                flex justify-center items-center
                h-[90px] w-[728px]
                overflow-hidden
                rounded md:rounded-none
                border border-[hsl(var(--border-subtle))] md:border-0
            ">
                <SafeAdFrame
                    adKey="912074aa3de30a2f3cb2b3432d994606"
                    width={728}
                    height={90}
                />
            </div>
        </div>
    );
}
