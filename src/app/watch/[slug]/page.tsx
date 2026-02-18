import { notFound } from 'next/navigation';
import { WatchNavbar } from '@/components/layout/WatchNavbar';
import { StreamController } from '@/components/video/StreamController';
import { HighPerformanceAd } from '@/components/ads/HighPerformanceAd';
import { HighPerformanceBanner } from '@/components/ads/HighPerformanceBanner';
import { SidebarAd } from '@/components/ads/SidebarAd';
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

    return (
        <div className="min-h-screen bg-background">
            <WatchNavbar title={`${race.country} Grand Prix`} backUrl={`/race/${slug}`} />

            {/* Main Streaming Section */}
            <section className="pt-20 md:pt-24 pb-8">
                <div className="w-full px-1">

                    {/* Video Player Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_180px] gap-4">

                        {/* Left Column: Polls */}
                        <div className="space-y-4 order-2 lg:order-1">
                            {/* Polls / Voting Section */}
                            <div className="card p-4 border border-white/10 bg-[hsl(var(--background-elevated))]">
                                <h3 className="font-bold mb-4 uppercase tracking-wide text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[hsl(var(--brand-red))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Fan Poll
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-sm font-medium">Who will win today?</p>
                                    <div className="space-y-2">
                                        <button className="w-full text-left px-3 py-2 rounded bg-[hsl(var(--background))] hover:bg-[hsl(var(--brand-red))]/10 border border-white/5 hover:border-[hsl(var(--brand-red))]/50 transition-all text-sm group">
                                            <div className="flex justify-between items-center">
                                                <span>Max Verstappen</span>
                                                <span className="text-xs text-foreground-muted group-hover:text-[hsl(var(--brand-red))]">45%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full bg-[hsl(var(--brand-red))]" style={{ width: '45%' }}></div>
                                            </div>
                                        </button>
                                        <button className="w-full text-left px-3 py-2 rounded bg-[hsl(var(--background))] hover:bg-[hsl(var(--brand-red))]/10 border border-white/5 hover:border-[hsl(var(--brand-red))]/50 transition-all text-sm group">
                                            <div className="flex justify-between items-center">
                                                <span>Lando Norris</span>
                                                <span className="text-xs text-foreground-muted group-hover:text-[hsl(var(--brand-red))]">32%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full bg-[hsl(var(--brand-red))]" style={{ width: '32%' }}></div>
                                            </div>
                                        </button>
                                        <button className="w-full text-left px-3 py-2 rounded bg-[hsl(var(--background))] hover:bg-[hsl(var(--brand-red))]/10 border border-white/5 hover:border-[hsl(var(--brand-red))]/50 transition-all text-sm group">
                                            <div className="flex justify-between items-center">
                                                <span>Lewis Hamilton</span>
                                                <span className="text-xs text-foreground-muted group-hover:text-[hsl(var(--brand-red))]">23%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full bg-[hsl(var(--brand-red))]" style={{ width: '23%' }}></div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links (Moved from Right) */}
                            <div className="card p-4 border border-white/10 bg-[hsl(var(--background-elevated))]">
                                <h3 className="font-bold mb-3 uppercase tracking-wide text-xs text-foreground-muted">Quick Links</h3>
                                <div className="space-y-2">
                                    <Link
                                        href={`/race/${slug}`}
                                        className="flex items-center gap-2 text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Race Schedule
                                    </Link>
                                    <Link
                                        href={`/race/${slug}`}
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

                            {/* Sidebar Ad */}
                            <SidebarAd />
                        </div>

                        {/* Center Column: Player Area */}
                        <div className="space-y-4 order-1 lg:order-2">

                            {/* Interactive Stream Controller */}
                            <StreamController />

                            {/* Banner Ad Below Video Controller */}
                            <HighPerformanceBanner />


                        </div>

                        {/* Right Column: Ads */}
                        <div className="space-y-6 order-3 lg:order-3">
                            {/* Sticky Vertical Ad */}
                            <div className="sticky top-24">
                                <div className="ad-container">
                                    <div className="flex justify-center">
                                        <HighPerformanceAd />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[hsl(var(--border-subtle))] py-8 mt-12 bg-black/50">
                <div className="container-custom">
                    <div className="text-center text-foreground-subtle text-xs">
                        <p>© 2026 SlipStreams. All rights reserved. Formula 1® is a trademark of Formula One Licensing BV.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
