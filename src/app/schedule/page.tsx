import { Navbar } from '@/components/layout/Navbar';
import { RaceCard } from '@/components/racing/RaceCard';
import { f1Calendar2026, getCompletedRaces, getUpcomingRaces, getCurrentRaceWeekend } from '@/data/f1-calendar-2026';

export default function SchedulePage() {
    const currentRace = getCurrentRaceWeekend();
    const completedRaces = getCompletedRaces();
    const upcomingRaces = getUpcomingRaces(24);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-full mb-6">
                            <svg className="w-5 h-5 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                                2026 Season Calendar
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            RACE SCHEDULE
                        </h1>
                        <p className="text-xl text-foreground-muted mb-8">
                            Complete 2026 Formula 1 World Championship calendar with all 24 Grand Prix races.
                            Never miss a session with multi-timezone support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Current Race Weekend */}
            {currentRace && (
                <section className="py-8 bg-[hsl(var(--background-subtle))]">
                    <div className="container-custom">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-3 h-3 bg-[hsl(var(--brand-red))] rounded-full animate-pulse"></span>
                                Live This Weekend
                            </h2>
                        </div>
                        <div className="max-w-2xl">
                            <RaceCard race={currentRace} variant="current" />
                        </div>
                    </div>
                </section>
            )}

            {/* Upcoming Races */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">Upcoming Races</h2>
                        <p className="text-foreground-muted">
                            {upcomingRaces.length} races remaining in the 2026 season
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingRaces.map((race) => (
                            <RaceCard
                                key={race.round}
                                race={race}
                                variant={currentRace?.round === race.round ? 'current' : 'upcoming'}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Placement */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="ad-container max-w-4xl mx-auto">
                        <div className="ad-label">Advertisement</div>
                        <div className="flex items-center justify-center h-24 bg-[hsl(var(--background-subtle))]">
                            <span className="text-foreground-subtle text-sm">Leaderboard Ad (728x90)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Completed Races */}
            {completedRaces.length > 0 && (
                <section className="py-16 bg-[hsl(var(--background-subtle))]">
                    <div className="container-custom">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2">Completed Races</h2>
                            <p className="text-foreground-muted">
                                {completedRaces.length} races completed
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {completedRaces.map((race) => (
                                <RaceCard key={race.round} race={race} variant="completed" />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Season Info */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="card p-8 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Total Races
                                </div>
                                <div className="text-5xl font-black text-gradient-red">24</div>
                            </div>
                            <div>
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Countries
                                </div>
                                <div className="text-5xl font-black text-gradient-red">21</div>
                            </div>
                            <div>
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Season Duration
                                </div>
                                <div className="text-5xl font-black text-gradient-red">9</div>
                                <div className="text-sm text-foreground-muted mt-1">Months</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[hsl(var(--border-subtle))] py-12 mt-20">
                <div className="container-custom">
                    <div className="text-center text-foreground-subtle text-sm">
                        <p>© 2026 SlipStreams. All rights reserved. Formula 1® is a trademark of Formula One Licensing BV.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
