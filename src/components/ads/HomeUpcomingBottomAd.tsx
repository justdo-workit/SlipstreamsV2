'use client';

import { useEffect, useRef } from 'react';

export function HomeUpcomingBottomAd() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Prevent double-injection on React StrictMode double-render
        if (container.querySelector('script')) return;

        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src =
            'https://pl28151163.effectivecpmnetwork.com/e743572c2957a48ebf63faa5bb820382/invoke.js';
        container.appendChild(script);

        return () => {
            if (container.contains(script)) container.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full py-3 flex justify-center items-center overflow-hidden">
            {/*
              Outer clip box: limits the rendered ad to a compact horizontal strip.
              max-height clips any oversized vertical content the ad network injects.
              overflow-hidden prevents it from blowing out the layout.
            */}
            <div
                style={{
                    maxWidth: '728px',
                    width: '100%',
                    maxHeight: '300px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    ref={containerRef}
                    id="container-e743572c2957a48ebf63faa5bb820382"
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}
                />
            </div>
        </div>
    );
}
