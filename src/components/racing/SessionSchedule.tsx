'use client';

import { useEffect, useState } from 'react';
import type { GrandPrix } from '@/data/f1-calendar-2026';
import { convertToMultipleTimezones, getCountdownToSession, formatCountdown } from '@/lib/utils/timezone';

interface SessionScheduleProps {
    race: GrandPrix;
}

export function SessionSchedule({ race }: SessionScheduleProps) {
    const [activeCountdown, setActiveCountdown] = useState<{
        name: string;
        countdown: ReturnType<typeof getCountdownToSession>;
    } | null>(null);

    useEffect(() => {
        const updateCountdown = () => {
            // Find the next upcoming session
            const sessions = [
                race.sessions.fp1,
                race.sessions.fp2,
                race.sessions.fp3,
                race.sessions.sprintQualifying,
                race.sessions.sprint,
                race.sessions.qualifying,
                race.sessions.race,
            ].filter(Boolean);

            const now = new Date();

            for (const session of sessions) {
                if (!session) continue;

                const sessionDate = new Date(`${session.date}T${session.time}:00`);
                if (sessionDate > now) {
                    const countdown = getCountdownToSession(sessionDate);
                    setActiveCountdown({
                        name: session.name,
                        countdown,
                    });
                    return;
                }
            }

            setActiveCountdown(null);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [race]);

    const formatSessionTime = (session: { date: string; time: string; name: string } | undefined) => {
        if (!session) return null;

        const timezones = convertToMultipleTimezones(session.date, session.time, race.timezone);

        return (
            <div className="space-y-2">
                {timezones.map((tz, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-foreground-muted font-medium">{tz.label}</span>
                        <span className="text-foreground font-mono font-bold">{tz.time}</span>
                    </div>
                ))}
            </div>
        );
    };

    const sessions = [
        { key: 'fp1', session: race.sessions.fp1, label: 'Practice 1' },
        { key: 'fp2', session: race.sessions.fp2, label: 'Practice 2' },
        { key: 'fp3', session: race.sessions.fp3, label: 'Practice 3' },
        { key: 'sprintQualifying', session: race.sessions.sprintQualifying, label: 'Sprint Qualifying' },
        { key: 'sprint', session: race.sessions.sprint, label: 'Sprint Race' },
        { key: 'qualifying', session: race.sessions.qualifying, label: 'Qualifying' },
        { key: 'race', session: race.sessions.race, label: 'Race' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Weekend Schedule</h2>
                {activeCountdown && activeCountdown.countdown.totalSeconds > 0 && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-full">
                        <svg className="w-4 h-4 text-[hsl(var(--brand-red))] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="8" />
                        </svg>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-xs text-foreground-muted uppercase tracking-wider">Next: {activeCountdown.name}</span>
                            <span className="text-base font-bold text-[hsl(var(--brand-red))] font-mono">
                                {formatCountdown(activeCountdown.countdown)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                {sessions.map(({ key, session, label }) => {
                    if (!session) return null;

                    const isNextSession = activeCountdown?.name === session.name && activeCountdown.countdown.totalSeconds > 0;

                    return (
                        <div
                            key={key}
                            className={`card p-6 transition-all ${isNextSession
                                ? 'border-[hsl(var(--brand-red))] bg-[hsl(var(--brand-red))]/5'
                                : ''
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                {/* Session Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-xl font-bold text-foreground">{session.name}</h3>
                                        {isNextSession && (
                                            <span className="badge-live text-xs px-2 py-0.5">Up Next</span>
                                        )}
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-foreground-muted mb-4">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium">
                                            {new Date(session.date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </span>
                                    </div>

                                    {/* Multi-timezone Display */}
                                    {formatSessionTime(session)}
                                </div>

                                {/* Local Time Badge */}
                                <div className="flex-shrink-0">
                                    <div className="text-right">
                                        <div className="text-xs uppercase tracking-wider text-foreground-subtle mb-1">
                                            Circuit Local Time
                                        </div>
                                        <div className="text-3xl font-bold text-gradient-red font-mono">
                                            {session.time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Timezone Note */}
            <div className="mt-6 p-4 bg-[hsl(var(--background-subtle))] rounded-lg border border-[hsl(var(--border-subtle))]">
                <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm">
                        <p className="text-foreground-muted">
                            <strong className="text-foreground">Times shown:</strong> All times are displayed in IST (India), UK, and US timezones for your convenience.
                            Circuit local time is shown on the right.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
