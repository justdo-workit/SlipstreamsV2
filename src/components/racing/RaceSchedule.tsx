'use client';

import { GrandPrix } from '@/data/f1-calendar-2026';
import { SafeAdFrame } from '@/components/ads/SafeAdFrame';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface RaceScheduleProps {
    race: GrandPrix;
}

type SessionStatus = 'upcoming' | 'live' | 'completed';

export function RaceSchedule({ race }: RaceScheduleProps) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const getSessionStatus = (sessionDate: string, sessionTime: string): SessionStatus => {
        try {
            // Extract timezone offset from weekendStart (e.g., "+11:00" or "-04:00" or "Z")
            // format is usually YYYY-MM-DDTHH:mm:ss+HH:mm
            const offsetMatch = race.weekendStart.match(/([+-]\d{2}:\d{2}|Z)$/);
            const offset = offsetMatch ? offsetMatch[0] : 'Z';

            // Construct ISO string for the session start
            const sessionIso = `${sessionDate}T${sessionTime}:00${offset}`;
            const start = new Date(sessionIso);

            // Session duration ~2 hours
            // "Live" status continues for 1 hour AFTER the session completion
            // Total "Live" window = 2 hours duration + 1 hour buffer = 3 hours
            const liveWindowDurationMs = (2 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000);
            const end = new Date(start.getTime() + liveWindowDurationMs);

            if (now < start) return 'upcoming';
            if (now >= start && now <= end) return 'live';
            return 'completed';
        } catch (e) {
            console.error('Error parsing date:', e);
            return 'upcoming'; // Fallback
        }
    };

    const getStatusStyle = (status: SessionStatus) => {
        switch (status) {
            case 'live':
                return 'bg-[#22c55e] text-white animate-pulse hover:bg-[#16a34a] transition-colors shadow-lg shadow-green-500/20'; // Green
            case 'completed':
                return 'bg-[hsl(var(--background-subtle))] text-foreground-subtle border border-[hsl(var(--border-subtle))]'; // Gray/Subtle
            default: // upcoming
                return 'bg-[hsl(var(--brand-red))] text-white font-bold tracking-wider'; // Red
        }
    };

    const getStatusLabel = (status: SessionStatus) => {
        switch (status) {
            case 'live': return 'WATCH LIVE';
            case 'completed': return 'Completed';
            default: return 'Upcoming';
        }
    };

    const isSprint = !!race.sessions.sprintQualifying;

    const sessions = isSprint
        ? [
            { name: 'Friday', items: [race.sessions.fp1, race.sessions.sprintQualifying].filter(Boolean) },
            { name: 'Saturday', items: [race.sessions.sprint, race.sessions.qualifying].filter(Boolean) },
            { name: 'Sunday', items: [race.sessions.race].filter(Boolean) },
        ]
        : [
            { name: 'Friday', items: [race.sessions.fp1, race.sessions.fp2].filter(Boolean) },
            { name: 'Saturday', items: [race.sessions.fp3, race.sessions.qualifying].filter(Boolean) },
            { name: 'Sunday', items: [race.sessions.race].filter(Boolean) },
        ];

    const slug = race.country.toLowerCase().replace(/\s+/g, '-');

    return (
        <section className="py-20 bg-[hsl(var(--background))]">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
                        Schedule
                    </h2>
                    <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mt-4" />

                    <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 text-[hsl(var(--brand-red))] animate-fade-in-up">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-bold uppercase tracking-wider">
                            Live Streams Open 30 Mins Before Session Start
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sessions.map((day) => (
                        <div key={day.name} className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold uppercase tracking-wider text-[hsl(var(--brand-red))] border-b border-[hsl(var(--border-subtle))] pb-4">
                                {day.name}
                            </h3>

                            {day.items.map((session: any, index) => {
                                const status = getSessionStatus(session.date, session.time);
                                const isLive = status === 'live';

                                const StatusBadge = (
                                    <div className={`w-full h-10 rounded flex items-center justify-center ${getStatusStyle(status)} ${isLive ? 'cursor-pointer' : ''}`}>
                                        <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                            {isLive && (
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                                </span>
                                            )}
                                            {getStatusLabel(status)}
                                        </span>
                                    </div>
                                );

                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-[hsl(var(--background-elevated))] border border-[hsl(var(--border-subtle))] rounded-lg overflow-hidden hover:border-[hsl(var(--brand-red))] transition-all duration-300"
                                    >
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="font-bold text-lg uppercase tracking-wide group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                                    {session.name}
                                                </span>
                                                <span className="text-xs font-mono text-foreground-muted bg-[hsl(var(--background-subtle))] px-2 py-1 rounded">
                                                    {session.time}
                                                </span>
                                            </div>

                                            <div className="mt-4">
                                                {isLive ? (
                                                    <Link href={`/watch/${slug}`}>
                                                        {StatusBadge}
                                                    </Link>
                                                ) : (
                                                    StatusBadge
                                                )}
                                            </div>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-red))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                );
                            })}

                            {/* Sunday Ad */}
                            {day.name === 'Sunday' && (
                                <div className="mt-6 flex justify-center">
                                    <SafeAdFrame
                                        adKey="3ff3fb1f818fe806eddec9e76ce0c4d6"
                                        width={468}
                                        height={60}
                                        className="bg-[hsl(var(--background-subtle))] rounded-lg overflow-hidden shadow-sm"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
