'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function SidebarAd() {
    return (
        <div className="flex justify-center my-4 w-full">
            <SafeAdFrame
                adKey="2ca695d250827a3fdcdadd8d2028c103"
                width={160}
                height={300}
            />
        </div>
    );
}
