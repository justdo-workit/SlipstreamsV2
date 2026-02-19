import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StandingsTabs } from '@/components/standings/StandingsTabs';
import { getDriverStandings, getConstructorStandings } from '@/lib/openf1';

export default async function StandingsPage() {
    // Fetch dynamic standings
    const driverStandings = await getDriverStandings();
    const constructorStandings = await getConstructorStandings();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-full mb-6">
                            <svg className="w-5 h-5 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-semibold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                                Official F1 Data
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase">
                            2026 Season Standings
                        </h1>
                        <p className="text-xl text-foreground-muted">
                            Track the battle for the championship
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main>
                <StandingsTabs
                    drivers={driverStandings}
                    teams={constructorStandings}
                />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
