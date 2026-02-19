'use client';

import { useState } from 'react';
import { DriverStanding, ConstructorStanding } from '@/data/standings-2026';

interface StandingsTabsProps {
    drivers: DriverStanding[];
    teams: ConstructorStanding[];
}

export function StandingsTabs({ drivers, teams }: StandingsTabsProps) {
    const [activeTab, setActiveTab] = useState<'drivers' | 'constructors'>('drivers');

    return (
        <div className="container-custom py-12">
            {/* Tabs Navigation */}
            <div className="flex items-center gap-8 border-b border-[hsl(var(--border-subtle))] mb-8">
                <button
                    onClick={() => setActiveTab('drivers')}
                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'drivers'
                            ? 'text-[hsl(var(--brand-red))] border-b-2 border-[hsl(var(--brand-red))]'
                            : 'text-foreground-muted hover:text-foreground'
                        }`}
                >
                    Driver
                </button>
                <button
                    onClick={() => setActiveTab('constructors')}
                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'constructors'
                            ? 'text-[hsl(var(--brand-red))] border-b-2 border-[hsl(var(--brand-red))]'
                            : 'text-foreground-muted hover:text-foreground'
                        }`}
                >
                    Constructor
                </button>
            </div>

            {/* Content Heading */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-wide">
                    {activeTab === 'drivers' ? "2026 Drivers' Standings" : "2026 Team Standings"}
                </h2>
            </div>

            {/* Driver Standings Table */}
            {activeTab === 'drivers' && (
                <div className="bg-[hsl(var(--background-elevated))] rounded-xl border border-[hsl(var(--border-subtle))] p-6 md:p-8">
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
                </div>
            )}

            {/* Constructor Standings Table */}
            {activeTab === 'constructors' && (
                <div className="bg-[hsl(var(--background-elevated))] rounded-xl border border-[hsl(var(--border-subtle))] p-6 md:p-8">
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
                </div>
            )}
        </div>
    );
}
