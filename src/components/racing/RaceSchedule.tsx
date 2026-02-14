'use client';

import { GrandPrix } from '@/data/f1-calendar-2026';

interface RaceScheduleProps {
    race: GrandPrix;
}

export function RaceSchedule({ race }: RaceScheduleProps) {
    const sessions = [
        { name: 'Friday', items: [race.sessions.fp1, race.sessions.fp2].filter(Boolean) },
        { name: 'Saturday', items: [race.sessions.fp3, race.sessions.sprint, race.sessions.qualifying].filter(Boolean) },
        { name: 'Sunday', items: [race.sessions.race].filter(Boolean) },
    ];

    return (
        <section className="py-20 bg-[hsl(var(--background))]">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Schedule
                    </h2>
                    <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mt-4" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sessions.map((day, dayIndex) => (
                        <div key={day.name} className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold uppercase tracking-wider text-[hsl(var(--brand-red))] border-b border-[hsl(var(--border-subtle))] pb-4">
                                {day.name}
                            </h3>

                            {day.items.map((session: any, index) => (
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
                                            <div className="w-full bg-[hsl(var(--background-subtle))] h-8 rounded flex items-center justify-center border border-[hsl(var(--border-subtle))]">
                                                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                                                    Completed
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-red))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
