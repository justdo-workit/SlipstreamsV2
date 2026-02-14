'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function HighPerformanceAd() {
    return (
        <div className="flex justify-center items-center bg-[hsl(var(--background-subtle))] min-h-[600px] min-w-[160px]">
            <SafeAdFrame
                adKey="7479520c1072db34477b30fbb579a05f"
                width={160}
                height={600}
            />
        </div>
    );
}
