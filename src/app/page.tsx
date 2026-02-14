import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureRace } from '@/components/home/FeatureRace';
import { UpcomingRaces } from '@/components/home/UpcomingRaces';
import { StandingsSection } from '@/components/home/StandingsSection';
import { getUpcomingRaces, f1Calendar2026, getCurrentRaceWeekend, getNextRace } from '@/data/f1-calendar-2026';
import { driverStandings2026, constructorStandings2026 } from '@/data/standings-2026';

export default function HomePage() {
  // Determine the feature race: Current live weekend OR the next upcoming race
  const currentRace = getCurrentRaceWeekend();
  const nextRace = getNextRace();
  const featureRace = currentRace || nextRace || f1Calendar2026[0];

  // Get all races for the carousel (it will handle fast-forwarding to current)
  const allRaces = f1Calendar2026;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Featured Race Hero (Dynamic) */}
        <FeatureRace race={featureRace} />

        {/* Upcoming Races Carousel */}
        <UpcomingRaces races={allRaces} />

        {/* Standings Section */}
        <StandingsSection
          drivers={driverStandings2026}
          teams={constructorStandings2026}
        />
      </main>

      <Footer />
    </div>
  );
}
