import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-black mb-4">
                            TERMS & <span className="text-gradient-red">CONDITIONS</span>
                        </h1>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="px-3 py-1 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-full text-[hsl(var(--brand-red))] font-semibold uppercase tracking-wide">
                                Version 1.01
                            </span>
                            <span className="text-foreground-muted">Effective Date: October 24, 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Use of Website */}
                        <div id="use" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                USE OF WEBSITE
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed mb-4">
                                    Welcome to Slipstreams. By accessing or using our platform, including our website and
                                    mobile applications, you agree to comply with and be bound by these Terms and Conditions.
                                    Our platform is designed for Formula 1enthusiasts to track races, analyze data, and engage
                                    with the community.
                                </p>
                                <p className="text-foreground-muted leading-relaxed">
                                    You are granted a limited, non-exclusive, non-transferable license to access the content for
                                    personal, non-commercial use. Any unauthorized reselling, data mining, or commercial
                                    redistribution of racing statistics provided on Slipstreams is strictly prohibited.
                                </p>
                            </div>
                        </div>

                        {/* External Content Disclaimer */}
                        <div id="external" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                EXTERNAL CONTENT DISCLAIMER
                            </h2>
                            <div className="card p-8 border-[hsl(var(--brand-red))]/20 bg-[hsl(var(--brand-red))]/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))]/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3">Slipstreams does not host, upload, or store any video content on its own servers.</h3>
                                        <p className="text-foreground-muted mb-4 leading-relaxed">
                                            All video materials, race highlights, and livestream embeds found on the platform are
                                            provided via third-party services (such as YouTube, Vimeo, or other media broadcast
                                            mirrors). Slipstreams acts solely as an aggregator. We are not responsible
                                            for the availability, legality, or copyright compliance of content hosted on external domains.
                                        </p>
                                        <div className="p-4 bg-[hsl(var(--background))] rounded-lg border border-[hsl(var(--border-subtle))]">
                                            <p className="text-sm text-[hsl(var(--brand-red))] font-semibold uppercase tracking-wide mb-1">
                                                ⚠ DMCA DISCLAIMER & THIRD-PARTY PROVIDERS
                                            </p>
                                            <p className="text-sm text-foreground-muted">
                                                Embedded content is the responsibility of its original host. If you believe any embedded
                                                material violates copyright, please contact the source platform directly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* User Conduct & Termination */}
                        <div id="conduct" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                USER CONDUCT & TERMINATION
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed mb-4">
                                    We maintain a zero-tolerance policy for harassment, hate speech, or the distribution of
                                    malicious software. Users who engage in "trolling" during live race commentary or
                                    circumvent platform security will face immediate account suspension.
                                </p>
                                <p className="text-foreground-muted leading-relaxed">
                                    Slipstreams reserves the right, in its sole discretion, to terminate your access to the Website
                                    and the related services or portion thereof at any time, without notice, for any reason whatsoever.
                                </p>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div id="ip" className="space-y-4">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                INTELLECTUAL PROPERTY
                            </h2>
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed mb-4">
                                    The "Slipstreams" name, logo, and all elements are the exclusive property of
                                    Slipstreams Media Group. Formula 1®, Grand Prix, and related marks are trademarks of
                                    their respective owners. This site is unofficial and is not associated
                                    in any way with the Formula 1 companies.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                        <span className="text-foreground-muted">
                                            <strong className="text-foreground">F1® is a registered trademark</strong> of its respective owners
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                        <span className="text-foreground-muted">
                                            <strong className="text-foreground">This website is unofficial</strong> and is not associated in any way with the Formula 1 companies
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                        <span className="text-foreground-muted">
                                            <strong className="text-foreground">All team names, driver names, and sponsor logos</strong> are the property of their respective owners
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Legal */}
                        <div className="card p-8 bg-[hsl(var(--background-subtle))]">
                            <h3 className="text-xl font-bold mb-3">Have questions about these terms?</h3>
                            <p className="text-foreground-muted mb-4">
                                Our legal team is available for clarification.
                            </p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                </svg>
                                Contact Legal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
