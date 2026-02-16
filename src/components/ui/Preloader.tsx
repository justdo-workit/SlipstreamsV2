'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay to ensure smooth transition
            setTimeout(() => setIsLoading(false), 500);
        };

        // Check if document is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    // Also trigger loading on route changes (optional, but good for "every page" feel)
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => setIsLoading(false), 500); // Simulate page load on nav
        return () => clearTimeout(timeout);
    }, [pathname, searchParams]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[hsl(var(--brand-red))] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-[hsl(var(--brand-red))] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-[hsl(var(--brand-red))] rounded-full animate-bounce"></div>
            </div>
        </div>
    );
}
