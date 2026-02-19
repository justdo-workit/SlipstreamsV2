import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FeatureRace } from '@/components/home/FeatureRace';
import { UpcomingRaces } from '@/components/home/UpcomingRaces';
import { HomeBannerAd } from '@/components/ads/HomeBannerAd';
import { HomeUpcomingBottomAd } from '@/components/ads/HomeUpcomingBottomAd';
import { StandingsSection } from '@/components/home/StandingsSection';
import { getUpcomingRaces, f1Calendar2026, getCurrentRaceWeekend, getNextRace } from '@/data/f1-calendar-2026';
import { getDriverStandings, getConstructorStandings } from '@/lib/openf1';

export default async function HomePage() {
  // Determine the feature race: Current live weekend OR the next upcoming race
  const currentRace = getCurrentRaceWeekend();
  const nextRace = getNextRace();
  const featureRace = currentRace || nextRace || f1Calendar2026[0];

  // Get all races for the carousel (it will handle fast-forwarding to current)
  const allRaces = f1Calendar2026;

  // Fetch dynamic standings (OpenF1 or Fallback)
  const driverStandings = await getDriverStandings();
  const constructorStandings = await getConstructorStandings();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Featured Race Hero (Dynamic) */}
        <FeatureRace race={featureRace} />

        {/* Banner Ad centered above Upcoming Races */}
        <HomeBannerAd />

        {/* Upcoming Races Carousel */}
        <UpcomingRaces races={allRaces} />

        {/* Banner Ad centered below Upcoming Races */}
        <HomeUpcomingBottomAd />

        {/* Standings Section */}
        <StandingsSection
          drivers={driverStandings}
          teams={constructorStandings}
        />
      </main>

      <Footer />
    </div>
  );
}
