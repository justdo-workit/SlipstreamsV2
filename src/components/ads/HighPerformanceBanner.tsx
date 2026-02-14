'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function HighPerformanceBanner() {
    return (
        <div className="flex justify-center items-center bg-[hsl(var(--background-subtle))] min-h-[90px] w-full max-w-[728px] mx-auto overflow-hidden my-4">
            <SafeAdFrame
                adKey="912074aa3de30a2f3cb2b3432d994606"
                width={728}
                height={90}
            />
        </div>
    );
}
