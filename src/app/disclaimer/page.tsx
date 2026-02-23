import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-black mb-6">
                            DISCLAIMER
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Legal Notice */}
                        <div className="card p-8 border-[hsl(var(--brand-red))]/30 bg-[hsl(var(--brand-red))]/5">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))]/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-3">Legal Notice regarding Video Content</h2>
                                    <p className="text-lg text-foreground-muted leading-relaxed">
                                        This website <strong className="text-foreground">does not host, upload, or stream</strong> any video content. All
                                        racing footage and media shown are embedded from external platforms or are the property
                                        of their respective rights holders.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div id="ip" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                Intellectual Property
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed mb-4">
                                    The content on Slipstreams, including text, logos, graphics, and layout designs, is protected by
                                    copyright and intellectual property laws. Unauthorized reproduction or distribution of any site-
                                    specific assets is strictly prohibited.
                                </p>
                                <div className="bg-[hsl(var(--background-subtle))] p-6 rounded-lg space-y-3">
                                    <h3 className="font-bold text-lg mb-3">TRADEMARK NOTICES</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <p className="text-foreground-muted">
                                                <strong className="text-foreground">Formula 1®, F1®,</strong> and all related marks are trademarks of their respective owners.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <p className="text-foreground-muted">
                                                <strong className="text-foreground">This website is unofficial</strong> and is not associated in any way with the Formula 1 companies.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <p className="text-foreground-muted">
                                                <strong className="text-foreground">All team names, driver names, and sponsor logos</strong> are the property of their respective owners.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* External Links & Content */}
                        <div id="external" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                External Links & Content
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed mb-4">
                                    Slipstreams contains links to external websites, including race media channels and social
                                    networks. We have no control over the nature, content, and availability of those sites. The inclusion
                                    of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                                </p>
                                <div className="p-4 bg-[hsl(var(--background-subtle))] rounded-lg">
                                    <p className="text-sm text-foreground-muted">
                                        <strong className="text-foreground">Note:</strong> Every effort is made to keep the website up and running smoothly.
                                        However, Slipstreams takes no responsibility for, and will not be liable for, the website being
                                        temporarily unavailable due to technical issues beyond our control.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accuracy of Information */}
                        <div id="accuracy" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                Accuracy of Information
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed">
                                    While we endeavor to keep the information up to date and correct, we make no representations or
                                    warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability,
                                    or availability with respect to the website or the information, schedules, or results contained on
                                    the website for any purpose.
                                </p>
                                <div className="mt-4 p-4 bg-[hsl(var(--accent-orange))]/10 border border-[hsl(var(--accent-orange))]/20 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[hsl(var(--accent-orange))] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm text-foreground-muted">
                                            Race times, session schedules, and driver standings are sourced from reliable third-party channels but
                                            may be subject to change. Always verify critical information from reputable sources.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Copyright Concerns */}
                        <div className="card p-8 bg-gradient-to-br from-[hsl(var(--brand-red))]/10 to-transparent border-[hsl(var(--brand-red))]/20">
                            <h3 className="text-2xl font-bold mb-4">Copyright Concerns?</h3>
                            <p className="text-foreground-muted mb-6 leading-relaxed">
                                Please contact our compliance team for rapid review. We respond to all legitimate copyright
                                concerns within 48 hours and will remove any infringing content immediately upon verification.
                            </p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Contact Compliance
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
