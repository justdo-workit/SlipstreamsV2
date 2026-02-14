'use client';

import { DriverStanding, ConstructorStanding } from '@/data/standings-2026';

interface StandingsSectionProps {
    drivers: DriverStanding[];
    teams: ConstructorStanding[];
}

export function StandingsSection({ drivers, teams }: StandingsSectionProps) {
    return (
        <section className="py-20 bg-[hsl(var(--background-subtle))]">
            <div className="container-custom">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold uppercase tracking-wide">2026 Season Standings</h2>
                    <p className="text-foreground-muted mt-2">Track the battle for the championship</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Driver Standings */}
                    <div className="bg-[hsl(var(--background-elevated))] rounded-xl border border-[hsl(var(--border-subtle))] p-6 md:p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold uppercase tracking-wide">Driver Standings</h3>
                            <button className="text-[hsl(var(--brand-red))] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {drivers.map((driver) => (
                                <div key={driver.rank} className="flex items-center justify-between py-3 border-b border-[hsl(var(--border-subtle))] last:border-0 hover:bg-[hsl(var(--background))] px-2 rounded transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 text-xl font-bold text-foreground-muted group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            {driver.rank}
                                        </div>
                                        <div className="w-1 h-8 bg-[hsl(var(--brand-red))]" />
                                        <div>
                                            <div className="font-bold text-lg">{driver.driver}</div>
                                            <div className="text-xs text-foreground-muted uppercase tracking-wider">{driver.team}</div>
                                        </div>
                                    </div>
                                    <div className="font-mono font-bold text-xl text-[hsl(var(--brand-red))]">
                                        {driver.points} <span className="text-xs text-foreground-muted ml-1">PTS</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-4 border border-[hsl(var(--brand-red))] text-[hsl(var(--brand-red))] font-bold uppercase tracking-widest text-sm hover:bg-[hsl(var(--brand-red))] hover:text-white transition-all rounded">
                            View Full Standings
                        </button>
                    </div>

                    {/* Team Standings */}
                    <div className="bg-[hsl(var(--background-elevated))] rounded-xl border border-[hsl(var(--border-subtle))] p-6 md:p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold uppercase tracking-wide">Team Standings</h3>
                            <button className="text-[hsl(var(--brand-red))] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {teams.map((team) => (
                                <div key={team.rank} className="flex items-center justify-between py-3 border-b border-[hsl(var(--border-subtle))] last:border-0 hover:bg-[hsl(var(--background))] px-2 rounded transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 text-xl font-bold text-foreground-muted group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            {team.rank}
                                        </div>
                                        <div className="w-1 h-8 bg-[hsl(var(--brand-red))]" />
                                        <div>
                                            <div className="font-bold text-lg">{team.team}</div>
                                            <div className="flex gap-3 text-xs mt-1 text-foreground-muted">
                                                {team.drivers.map((d) => (
                                                    <span key={d.code}>
                                                        <strong className="text-foreground">{d.code}</strong> {d.points}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font-mono font-bold text-xl text-[hsl(var(--brand-red))]">
                                        {team.points} <span className="text-xs text-foreground-muted ml-1">PTS</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-4 border border-[hsl(var(--brand-red))] text-[hsl(var(--brand-red))] font-bold uppercase tracking-widest text-sm hover:bg-[hsl(var(--brand-red))] hover:text-white transition-all rounded">
                            View Full Standings
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
