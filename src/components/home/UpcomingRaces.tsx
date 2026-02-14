'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GrandPrix } from '@/data/f1-calendar-2026';
import { RaceCard } from '@/components/racing/RaceCard';

interface UpcomingRacesProps {
    races: GrandPrix[];
}

export function UpcomingRaces({ races }: UpcomingRacesProps) {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Initial check and event listener for screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const itemsPerPage = isMobile ? 1 : 3;

    // Initialize start index to the first upcoming race
    useEffect(() => {
        const now = new Date();
        const firstUpcomingIndex = races.findIndex(r => new Date(r.weekendStart) > now);
        // If found, set it. If not (end of season), show last few. 
        if (firstUpcomingIndex !== -1) {
            setStartIndex(firstUpcomingIndex);
        } else {
            setStartIndex(Math.max(0, races.length - itemsPerPage));
        }
    }, [races, itemsPerPage]);

    const visibleRaces = races.slice(startIndex, startIndex + itemsPerPage);
    // Adjusted check logic: can we advance by itemsPerPage?
    // Actually, we usually want to be able to advance as long as there is *something* next.
    // Standard carousel logic: if we are at index i, and i + itemsPerPage < length, we can go next?
    // If we have 10 items. Page 3. Index 0.
    // Visible: 0, 1, 2.
    // Next -> Index 3. Visible 3, 4, 5.
    // ... Index 6. Visible 6, 7, 8.
    // Next -> Index 9. Visible 9. (1 item). valid?
    // If we want to prevent partial pages, we check differently.
    // But basic "hasNext" check:
    const hasNext = startIndex + itemsPerPage < races.length;
    const hasPrev = startIndex > 0;

    const handleNext = () => {
        if (hasNext) {
            setStartIndex(prev => prev + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (hasPrev) {
            setStartIndex(prev => Math.max(0, prev - itemsPerPage));
        }
    };

    const NavigationArrows = ({ className = "" }: { className?: string }) => (
        <div className={`flex gap-2 ${className}`}>
            <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center border transition-all ${!hasPrev ? 'border-gray-800 text-gray-800 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white/10 hover:border-white'}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={handleNext}
                disabled={!hasNext}
                className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center border transition-all ${!hasNext ? 'border-gray-800 text-gray-800 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white/10 hover:border-white'}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );

    return (
        <section className="py-20 bg-black">
            <div className="container-custom">
                {/* Header */}
                <div className="flex items-center justify-between mb-10 border-l-4 border-[hsl(var(--brand-red))] pl-6">
                    <h2 className="text-4xl font-bold text-white">
                        Upcoming Races
                    </h2>
                    <div className="flex items-center gap-6">
                        {/* Desktop Arrows */}
                        <div className="hidden md:block">
                            <NavigationArrows />
                        </div>

                        <Link
                            href="/schedule"
                            className="text-[hsl(var(--brand-red))] font-bold uppercase tracking-wider text-sm hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            View Calendar
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Races Grid / Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleRaces.map((race) => (
                        <div key={race.round} className="min-w-0 animate-fade-in">
                            <RaceCard race={race} variant="immersive" />
                        </div>
                    ))}
                </div>

                {/* Mobile Arrows */}
                <div className="flex md:hidden justify-center mt-8">
                    <NavigationArrows />
                </div>
            </div>
        </section>
    );
}
