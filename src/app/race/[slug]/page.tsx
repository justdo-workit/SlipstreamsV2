import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RaceHero } from '@/components/racing/RaceHero';
import { RaceSchedule } from '@/components/racing/RaceSchedule';
import { RaceFacts } from '@/components/racing/RaceFacts';
import { f1Calendar2026 } from '@/data/f1-calendar-2026';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return f1Calendar2026.map((race) => ({
        slug: race.country.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export default async function GrandPrixPage({ params }: PageProps) {
    const { slug } = await params;

    // Find race data
    const race = f1Calendar2026.find(
        (r) => r.country.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!race) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background  text-foreground selection:bg-[hsl(var(--brand-red))] selection:text-white">
            <Navbar />

            <main>
                <RaceHero race={race} />
                <RaceSchedule race={race} />
                <RaceFacts race={race} />
            </main>

            <Footer />
        </div>
    );
}
