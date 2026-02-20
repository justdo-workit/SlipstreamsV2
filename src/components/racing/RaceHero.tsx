'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrandPrix } from '@/data/f1-calendar-2026';
import { getCountdownToSession } from '@/lib/utils/timezone';

interface RaceHeroProps {
    race: GrandPrix;
}

export function RaceHero({ race }: RaceHeroProps) {
    const [countdown, setCountdown] = useState<ReturnType<typeof getCountdownToSession> | null>(null);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const checkLiveStatus = () => {
            const now = new Date();

            // Extract timezone offset from weekendStart (e.g., "+11:00" from "2026-03-06T00:00:00+11:00")
            // specific format: YYYY-MM-DDTHH:mm:ss+HH:MM
            const offsetMatch = race.weekendStart.match(/([+-]\d{2}:\d{2})$/);
            const offset = offsetMatch ? offsetMatch[1] : 'Z';

            const sessions = Object.values(race.sessions).filter(s => s !== undefined) as { name: string; date: string; time: string }[];

            let live = false;

            for (const session of sessions) {
                // Construct session start time with correct timezone
                const sessionStart = new Date(`${session.date}T${session.time}:00${offset}`);

                // Determine duration based on session type
                // Race: 120 mins approx limit/window
                // Others: 60 mins
                let durationMinutes = 60;
                if (session.name.toLowerCase().includes('race')) {
                    durationMinutes = 120;
                } else if (session.name.toLowerCase().includes('sprint') && !session.name.toLowerCase().includes('qualifying')) {
                    // Sprint race is approx 30-40 mins, allocate 60 to be safe
                    durationMinutes = 60;
                }

                // Window:
                // Open: -30 mins before start
                // Close: +60 mins after end (End = Start + Duration)
                const openTime = new Date(sessionStart.getTime() - 30 * 60 * 1000);
                const endTime = new Date(sessionStart.getTime() + durationMinutes * 60 * 1000);
                const closeTime = new Date(endTime.getTime() + 60 * 60 * 1000);

                if (now >= openTime && now <= closeTime) {
                    live = true;
                    break;
                }
            }

            // In development, always enable (bypass time restriction) for testing purposes
            if (process.env.NODE_ENV === 'development') {
                live = true;
            }

            setIsLive(live);
        };

        const updateCountdown = () => {
            // Target the race session
            // We need to construct the proper Date object for the race using the offset too, 
            // otherwise 'new Date("YYYY-MM-DDTHH:mm:ss")' assumes local browser time, 
            // which might overlap nicely if the offset extraction wasn't used before, 
            // but for consistency we should use the offset if possible or stick to the previous working method if it relied on local parsing.
            // 
            // Previous code: new Date(`${race.sessions.race.date}T${race.sessions.race.time}:00`)
            // This interprets the string as local time if no Z/offset is present.
            // BUT f1-calendar-2026 has local times. 
            // TO DO ACCURATELY: We should parse it as the Event's Local Time, then convert to User's Local Time?
            // actually getCountdownToSession takes a target Date object. 
            // If we want the countdown to be accurate to the absolute moment, we MUST use the timezone offset.

            const offsetMatch = race.weekendStart.match(/([+-]\d{2}:\d{2})$/);
            const offset = offsetMatch ? offsetMatch[1] : '';
            // If we add offset to the string, Date.parse handles it correctly as an absolute time.

            const targetDate = new Date(`${race.sessions.race.date}T${race.sessions.race.time}:00${offset}`);

            const newCountdown = getCountdownToSession(targetDate);
            setCountdown(newCountdown);
        };

        checkLiveStatus();
        updateCountdown();
        const interval = setInterval(() => {
            checkLiveStatus();
            updateCountdown();
        }, 1000);

        return () => clearInterval(interval);
    }, [race]);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={race.coverImage || 'https://i.pinimg.com/1200x/ec/c2/f5/ecc2f523c4bde102f8048939e0bb7813.jpg'}
                    alt={`${race.country} Grand Prix Background`}
                    fill
                    className="object-cover object-bottom"
                    priority
                />

                {/* Dark Overlay Gradients matching FeatureRace design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-28 text-center w-full">
                {/* Round Info Badge */}
                <div className="inline-flex items-center gap-2 mb-8">
                    <span className="bg-[hsl(var(--brand-red))] text-white font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">
                        Round {race.round}
                    </span>
                    <span className="text-foreground font-semibold uppercase tracking-widest text-sm">
                        {race.country} • 2026
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-7xl lg:text-7xl font-black uppercase tracking-wide mb-4 text-shadow-strong">
                    <span className="block ">
                        {race.country}
                    </span>
                    <span className="block text-[hsl(var(--brand-red))]">
                        Grand Prix
                    </span>
                </h1>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-[hsl(var(--brand-red))] font-bold uppercase tracking-widest text-sm md:text-base mb-16">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {race.circuit}
                </div>

                {/* Countdown Timer */}
                <div className="mb-12">
                    <p className="text-foreground-muted uppercase tracking-[0.2em] text-xs font-semibold mb-6">Light Out In</p>
                    {countdown && (
                        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
                            {[
                                { value: countdown.days, label: 'Days' },
                                { value: countdown.hours, label: 'Hrs' },
                                { value: countdown.minutes, label: 'Min' },
                                { value: countdown.seconds, label: 'Sec', className: 'text-[hsl(var(--brand-red))]' }
                            ].map((item, index) => (
                                <div key={item.label} className="bg-[hsl(var(--background-elevated))]/30 backdrop-blur-md border border-white/10 rounded-lg p-2 md:p-4">
                                    <div className={`text-2xl md:text-4xl font-bold font-mono ${item.className || ''}`}>
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-foreground-muted mt-2">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* CTA */}
                <div className="animate-fade-in delay-300">
                    {isLive ? (
                        <Link
                            href={`/watch/${race.country.toLowerCase()}`}
                            className="btn-primary text-lg px-12 py-4 inline-flex items-center gap-3 hover-glow-red hover:scale-105 transition-all text-shadow-medium"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Live
                        </Link>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <button
                                disabled
                                className="bg-gray-800/50 border border-gray-700 text-gray-400 text-lg px-12 py-4 inline-flex items-center gap-3 rounded-md cursor-not-allowed backdrop-blur-sm"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Watch Live
                            </button>
                            <span className="text-xs text-red-500 font-medium uppercase tracking-wider animate-pulse">
                                Opens 30 mins before session
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Background F1 Car (Optional Decorative Element) */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-20 pointer-events-none z-0">
                {/* Placeholder for F1 Car Image if available */}
            </div>
        </section>
    );
}
