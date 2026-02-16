'use client';

import { GrandPrix } from '@/data/f1-calendar-2026';
import Image from 'next/image';
import { SafeAdFrame } from '@/components/ads/SafeAdFrame';

interface RaceFactsProps {
    race: GrandPrix;
}

export function RaceFacts({ race }: RaceFactsProps) {
    const stats = [
        { label: 'First Grand Prix', value: race.facts.firstGrandPrix },
        { label: 'Number of Laps', value: race.facts.laps },
        { label: 'Circuit Length', value: `${race.facts.circuitLength} km` },
        { label: 'Race Distance', value: `${race.facts.raceDistance} km` },
        { label: 'Lap Record', value: race.facts.lapRecord ? race.facts.lapRecord.time : 'N/A', subtext: race.facts.lapRecord?.driver },
    ];

    return (
        <section className="py-20 bg-[hsl(var(--background-subtle))]">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
                        Race Facts
                    </h2>
                    <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Track Map (Left) */}
                    <div className="relative aspect-square md:aspect-[4/3] bg-[hsl(var(--background-elevated))] rounded-2xl border border-[hsl(var(--border-subtle))] p-8 flex items-center justify-center overflow-hidden group">
                        {/* Grid Background */}
                        <div className="absolute inset-0 grid-background opacity-20" />



                        {/* Track Map Content */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                            {race.trackImage ? (
                                <Image
                                    src={race.trackImage}
                                    alt={`${race.circuit} Layout`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            ) : (
                                <span className="text-foreground-subtle uppercase tracking-widest font-bold text-xl">
                                    {race.circuit} Layout
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Stats Grid (Right) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Featured Stat - Length */}
                        <div className="sm:col-span-2 bg-[hsl(var(--background-elevated))] border border-[hsl(var(--border-subtle))] rounded-xl p-8 hover:border-[hsl(var(--brand-red))] transition-colors group">
                            <div className="text-sm text-foreground-muted uppercase tracking-wider mb-2 border-l-2 border-[hsl(var(--brand-red))] pl-3">
                                Circuit Length
                            </div>
                            <div className="text-5xl md:text-7xl font-black">
                                {race.facts.circuitLength} <span className="text-2xl text-[hsl(var(--brand-red))]">KM</span>
                            </div>
                        </div>

                        {/* Other Stats */}
                        {stats.filter(s => s.label !== 'Circuit Length').map((stat, index) => (
                            <div key={index} className="bg-[hsl(var(--background-elevated))] border border-[hsl(var(--border-subtle))] rounded-xl p-6 hover:border-[hsl(var(--brand-red))] transition-colors group">
                                <div className="text-xs text-foreground-muted uppercase tracking-wider mb-2 border-l-2 border-[hsl(var(--foreground-subtle))] pl-2 group-hover:border-[hsl(var(--brand-red))] transition-colors">
                                    {stat.label}
                                </div>
                                <div className="text-2xl md:text-3xl font-bold">
                                    {stat.value}
                                </div>
                                {stat.subtext && (
                                    <div className="text-sm text-[hsl(var(--brand-red))] font-semibold mt-1">
                                        {stat.subtext}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Placement */}
                <div className="mt-16 flex justify-center">
                    <SafeAdFrame
                        adKey="9942bce170e25aead636127279479c68"
                        width={300}
                        height={250}
                        className="bg-[hsl(var(--background-elevated))] rounded-lg overflow-hidden shadow-sm border border-[hsl(var(--border-subtle))]"
                    />
                </div>
            </div>
        </section>
    );
}
