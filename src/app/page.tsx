import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureRace } from '@/components/home/FeatureRace';
import { UpcomingRaces } from '@/components/home/UpcomingRaces';
import { HomeUpcomingBottomAd } from '@/components/ads/HomeUpcomingBottomAd';
import { StandingsSection } from '@/components/home/StandingsSection';
import { f1Calendar2026, getCurrentRaceWeekend, getNextRace } from '@/data/f1-calendar-2026';

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

        {/* Ad centered above Upcoming Races */}
        <HomeUpcomingBottomAd />

        {/* Upcoming Races Carousel */}
        <UpcomingRaces races={allRaces} />

        {/* Standings Section — fetches its own data client-side */}
        <StandingsSection />
      </main>

      <Footer />
    </div>
  );
}
