'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { GrandPrix } from '@/data/f1-calendar-2026';
import { getCountdownToSession, formatCountdown } from '@/lib/utils/timezone';

interface RaceCardProps {
    race: GrandPrix;
    variant?: 'current' | 'upcoming' | 'completed' | 'immersive';
    className?: string;
}

export function RaceCard({ race, variant = 'upcoming', className = '' }: RaceCardProps) {
    const [countdown, setCountdown] = useState<ReturnType<typeof getCountdownToSession> | null>(null);

    useEffect(() => {
        if (variant === 'completed') return;

        const updateCountdown = () => {
            const targetDate = new Date(race.weekendStart);
            const newCountdown = getCountdownToSession(targetDate);
            setCountdown(newCountdown);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [race.weekendStart, variant]);

    const getFlagEmoji = (countryCode: string): string => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    const cardVariantStyles = {
        current: 'border-[hsl(var(--brand-red))] shadow-lg shadow-[hsl(var(--brand-red))]/20 scale-105',
        upcoming: 'border-[hsl(var(--border-subtle))] hover:border-[hsl(var(--brand-red))] hover:shadow-lg hover:shadow-[hsl(var(--brand-red))]/10',
        completed: 'border-[hsl(var(--border-subtle))] opacity-60 hover:opacity-80',
        immersive: 'aspect-square border-none shadow-xl hover:shadow-2xl hover:shadow-black/50',
    };

    if (variant === 'immersive') {
        const isCompleted = new Date(race.weekendEnd) < new Date();

        return (
            <Link
                href={`/race/${race.country.toLowerCase().replace(/\s+/g, '-')}`}
                className={`card relative overflow-hidden group block h-full ${cardVariantStyles[variant]} ${className} ${isCompleted ? 'grayscale hover:grayscale-0 transition-all duration-500' : ''}`}
            >
                {/* Full Background Image */}
                {/* Full Background Image */}
                {race.gpImage ? (
                    <Image
                        src={race.gpImage}
                        alt={`${race.circuit}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-8xl opacity-20">{getFlagEmoji(race.countryCode)}</span>
                    </div>
                )}

                {/* Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t opacity-90 ${isCompleted ? 'from-gray-900 via-gray-900/50' : 'from-black via-black/20'} to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent opacity-60 h-32" />

                {/* Badge (Top Left) */}
                <div className="absolute top-6 left-6">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg ${isCompleted ? 'bg-gray-600' : 'bg-[#FF1E1E]'}`}>
                        {isCompleted ? 'Completed' : `Round ${String(race.round).padStart(2, '0')}`}
                    </span>
                </div>

                {/* Content Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-3xl font-black text-white uppercase mb-1 leading-none tracking-tight group-hover:underline decoration-2 underline-offset-4">
                        {race.country} GP
                    </h3>
                    <div className="flex flex-col text-sm text-gray-300 font-medium tracking-wide gap-0.5">
                        <span className="opacity-90">{race.circuit}</span>
                        <span className="text-white font-bold uppercase">{race.dateRange}</span>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/race/${race.country.toLowerCase().replace(/\s+/g, '-')}`}
            className={`card ${cardVariantStyles[variant]} transition-all duration-300 overflow-hidden group block ${className}`}
        >
            {/* Track Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-[hsl(var(--background-subtle))]">
                {race.gpImage ? (
                    <Image
                        src={race.gpImage}
                        alt={`${race.circuit}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                        {getFlagEmoji(race.countryCode)}
                    </div>
                )}

                {/* Overlay with status */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    {variant === 'current' && <span className="badge-live">Live Weekend</span>}
                    {variant === 'upcoming' && <span className="badge-upcoming">Upcoming</span>}
                    {variant === 'completed' && <span className="badge-completed">Completed</span>}
                </div>

                {/* Round Number */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-md">
                    <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider">
                        Round {race.round}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Country & Location */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getFlagEmoji(race.countryCode)}</span>
                    <div>
                        <h3 className="text-lg font-bold text-foreground">{race.country} Grand Prix</h3>
                        <p className="text-sm text-foreground-muted">{race.circuit}</p>
                    </div>
                </div>

                {/* Date Range */}
                <div className="flex items-center gap-2 text-sm text-foreground-muted mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium uppercase tracking-wide">{race.dateRange}</span>
                </div>

                {/* Countdown or Completed */}
                {variant !== 'completed' && countdown && countdown.totalSeconds > 0 ? (
                    <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--background-subtle))] rounded-md">
                        <svg className="w-4 h-4 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm text-foreground-muted">Lights out in:</span>
                            <span className="text-base font-bold text-[hsl(var(--brand-red))] font-mono">
                                {formatCountdown(countdown)}
                            </span>
                        </div>
                    </div>
                ) : variant === 'completed' ? (
                    <div className="px-3 py-2 bg-[hsl(var(--background-subtle))] rounded-md">
                        <span className="text-sm text-foreground-subtle">Race Completed</span>
                    </div>
                ) : null}

                {/* View Details CTA */}
                <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-[hsl(var(--brand-red))] font-semibold uppercase tracking-wide group-hover:gap-2 flex items-center gap-1 transition-all">
                        View Details
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
