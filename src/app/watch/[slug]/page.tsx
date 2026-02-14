import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { HLSPlayer } from '@/components/video/HLSPlayer';
import { f1Calendar2026 } from '@/data/f1-calendar-2026';
import Link from 'next/link';

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

export default async function StreamingPage({ params }: PageProps) {
    const { slug } = await params;
    const race = f1Calendar2026.find(
        (r) => r.country.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!race) {
        notFound();
    }

    const getFlagEmoji = (countryCode: string): string => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    // Demo HLS stream URL - replace with actual stream
    const streamUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Main Streaming Section */}
            <section className="pt-20">
                <div className="container-custom">
                    {/* Race Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{getFlagEmoji(race.countryCode)}</span>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-3xl md:text-4xl font-black">
                                        {race.country} Grand Prix
                                    </h1>
                                    <span className="badge-live">Live Stream</span>
                                </div>
                                <p className="text-foreground-muted mt-1">
                                    {race.circuit} • {race.dateRange}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Video Player Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Main Player Area */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Video Player - Full Width, No Ads Touching */}
                            <div className="card p-0 overflow-hidden border-[hsl(var(--brand-red))]/30">
                                <div className="aspect-video bg-black">
                                    <HLSPlayer
                                        src={streamUrl}
                                        autoplay={false}
                                        muted={false}
                                        controls={true}
                                        className="w-full h-full"
                                    />
                                </div>

                                {/* Player Info Bar */}
                                <div className="p-4 bg-[hsl(var(--background-elevated))] border-t border-[hsl(var(--border-subtle))]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full animate-pulse"></span>
                                                <span className="text-sm font-semibold uppercase tracking-wide">
                                                    Live Broadcast
                                                </span>
                                            </div>
                                            <span className="text-foreground-muted text-sm">•</span>
                                            <span className="text-sm text-foreground-muted">
                                                1080p HD
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="p-2 hover:bg-[hsl(var(--background))] rounded-md transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                </svg>
                                            </button>
                                            <button className="p-2 hover:bg-[hsl(var(--background))] rounded-md transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* High-Value Native Ad Below Player - MUST NOT PUSH PLAYER ON LOAD */}
                            <div className="ad-container">
                                <div className="ad-label">Sponsored Content</div>
                                <div className="p-6 bg-[hsl(var(--background-elevated))]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-24 bg-[hsl(var(--background-subtle))] rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-foreground-subtle">Ad</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-1">Premium Sponsor</h3>
                                            <p className="text-sm text-foreground-muted mb-2">
                                                High-value native advertisement content appears here
                                            </p>
                                            <button className="text-sm text-[hsl(var(--brand-red))] hover:underline font-semibold">
                                                Learn More →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stream Tabs */}
                            <div className="card p-6">
                                <div className="flex items-center gap-6 border-b border-[hsl(var(--border-subtle))] mb-6">
                                    <button className="pb-3 border-b-2 border-[hsl(var(--brand-red))] text-foreground font-semibold uppercase text-sm tracking-wide">
                                        Live Feed
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-muted hover:text-foreground font-semibold uppercase text-sm tracking-wide transition-colors">
                                        Driver Onboard
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-muted hover:text-foreground font-semibold uppercase text-sm tracking-wide transition-colors">
                                        Map & Data
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-muted hover:text-foreground font-semibold uppercase text-sm tracking-wide transition-colors">
                                        Team Radio
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <h3 className="font-semibold mb-1">Premium Telemetry Active</h3>
                                            <p className="text-sm text-foreground-muted">
                                                You are viewing high-precision sector data with real-time telemetry updates.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[hsl(var(--border-subtle))]">
                                        <div>
                                            <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                                                Track Temp
                                            </div>
                                            <div className="text-2xl font-bold text-[hsl(var(--accent-orange))]">
                                                42°C
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                                                Air Temp
                                            </div>
                                            <div className="text-2xl font-bold text-[hsl(var(--accent-blue))]">
                                                28°C
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                                                Humidity
                                            </div>
                                            <div className="text-2xl font-bold">
                                                54%
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                                                Wind
                                            </div>
                                            <div className="text-2xl font-bold">
                                                12km/h
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coming Up Next */}
                            <div className="card p-6 bg-[hsl(var(--background-subtle))]">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    Coming Up Next
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm text-foreground-muted mb-1">Next Race</div>
                                        <div className="font-bold">Spanish Grand Prix</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-foreground-muted mb-1">In</div>
                                        <div className="text-lg font-bold text-[hsl(var(--brand-red))] font-mono">
                                            14d 04h 32m
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Desktop Only */}
                        <div className="hidden lg:block lg:col-span-1 space-y-6">
                            {/* Sticky Vertical Ad */}
                            <div className="sticky top-24 space-y-6">
                                <div className="ad-container">
                                    <div className="ad-label">Advertisement</div>
                                    <div className="flex items-center justify-center h-[600px] bg-[hsl(var(--background-subtle))]">
                                        <span className="text-foreground-subtle text-sm -rotate-90">
                                            Vertical Ad (160x600)
                                        </span>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="card p-5">
                                    <h3 className="font-bold mb-4 uppercase tracking-wide text-sm">Quick Links</h3>
                                    <div className="space-y-3">
                                        <Link
                                            href={`/race/${params.slug}`}
                                            className="flex items-center gap-2 text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Race Schedule
                                        </Link>
                                        <Link
                                            href={`/race/${params.slug}`}
                                            className="flex items-center gap-2 text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Race Facts
                                        </Link>
                                        <Link
                                            href="/"
                                            className="flex items-center gap-2 text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                            Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-Scroll Native Ad - Lazy Loaded */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="ad-container max-w-4xl mx-auto">
                        <div className="ad-label">Sponsored Content</div>
                        <div className="p-8 bg-[hsl(var(--background-elevated))]">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="aspect-video bg-[hsl(var(--background-subtle))] rounded-lg flex items-center justify-center">
                                    <span className="text-foreground-subtle text-sm">Ad Creative</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-3">Mid-Scroll Native Ad</h3>
                                    <p className="text-foreground-muted mb-4">
                                        This ad loads after the user scrolls, ensuring the player remains stable and visible.
                                    </p>
                                    <button className="btn-secondary w-fit">
                                        Learn More
                                    </button>
                                </div>
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
