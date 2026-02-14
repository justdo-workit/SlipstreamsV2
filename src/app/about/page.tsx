import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            ABOUT <span className="text-gradient-red">SLIPSTREAMS</span>
                        </h1>
                        <p className="text-xl text-foreground-muted">
                            The ultimate destination for F1 enthusiasts providing race schedules,
                            insights, and community engagement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Mission */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-[hsl(var(--brand-red))]"></span>
                                Our Mission
                            </h2>
                            <div className="card p-8">
                                <p className="text-lg text-foreground-muted leading-relaxed">
                                    SlipStreams is dedicated to Formula 1 enthusiasts, providing race schedules, insights,
                                    and community engagement. Our platform is designed to bring fans closer to the action with
                                    real-time data, accurate race information, and a premium streaming experience.
                                </p>
                            </div>
                        </div>

                        {/* What We Offer */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-[hsl(var(--brand-red))]"></span>
                                What We Offer
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="card p-6">
                                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] mb-4">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Live Streaming</h3>
                                    <p className="text-foreground-muted">
                                        Watch every Grand Prix, Qualifying, and Practice session live with HD quality streaming.
                                    </p>
                                </div>

                                <div className="card p-6">
                                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] mb-4">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Race Schedules</h3>
                                    <p className="text-foreground-muted">
                                        Complete 2026 F1 calendar with accurate session times in multiple timezones.
                                    </p>
                                </div>

                                <div className="card p-6">
                                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] mb-4">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Circuit Facts</h3>
                                    <p className="text-foreground-muted">
                                        Detailed circuit information, lap records, and track characteristics for every race.
                                    </p>
                                </div>

                                <div className="card p-6">
                                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] mb-4">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Community</h3>
                                    <p className="text-foreground-muted">
                                        Join our Discord community to connect with fellow F1 fans and discuss races live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-[hsl(var(--brand-red))]"></span>
                                Our Values
                            </h2>
                            <div className="space-y-4">
                                <div className="card p-6">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                        <span className="text-[hsl(var(--brand-red))]">01</span>
                                        Accuracy First
                                    </h3>
                                    <p className="text-foreground-muted">
                                        We ensure 100% accuracy of race schedules, session times, and circuit facts.
                                        No approximations, no guesswork.
                                    </p>
                                </div>

                                <div className="card p-6">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                        <span className="text-[hsl(var(--brand-red))]">02</span>
                                        Premium Experience
                                    </h3>
                                    <p className="text-foreground-muted">
                                        Clean, fast, motorsport-grade design that puts content first and delivers
                                        a professional broadcast feel.
                                    </p>
                                </div>

                                <div className="card p-6">
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                                        <span className="text-[hsl(var(--brand-red))]">03</span>
                                        User-Centric
                                    </h3>
                                    <p className="text-foreground-muted">
                                        Built for long viewing sessions with smart ad placement that never interrupts
                                        critical content or the viewing experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="card p-8 bg-gradient-to-r from-[hsl(var(--brand-red))]/10 to-transparent border-[hsl(var(--brand-red))]/20">
                            <h3 className="text-2xl font-bold mb-4">Join the SlipStreams Community</h3>
                            <p className="text-foreground-muted mb-6">
                                Connect with thousands of F1 fans, discuss races live, and never miss a moment of the action.
                            </p>
                            <Link href="/" className="btn-primary inline-flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                                </svg>
                                Join Our Discord
                            </Link>
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
