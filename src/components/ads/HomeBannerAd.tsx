'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function HomeBannerAd() {
    return (
        /* Mobile: full-width sticky bottom bar with bg + border
           Desktop (md+): inline static block below the video */
        <div className="
            fixed bottom-0 left-0 right-0 z-50
            flex justify-center items-center
            bg-[hsl(var(--background-elevated))]/95 backdrop-blur-sm
            border-t border-[hsl(var(--brand-red))]/40
            py-2 px-1
            pointer-events-auto
            md:relative md:bottom-auto md:left-auto md:right-auto md:z-auto
            md:bg-transparent md:border-0 md:backdrop-blur-none
            md:py-4 md:px-0
        ">
            <div className="
                flex justify-center items-center
                rounded md:rounded-none
                border border-[hsl(var(--border-subtle))] md:border-0
                overflow-hidden
            ">
                <SafeAdFrame
                    adKey="9b55b82dfa1e69f2170125824c19fd15"
                    width={320}
                    height={50}
                />
            </div>
        </div>
    );
}
