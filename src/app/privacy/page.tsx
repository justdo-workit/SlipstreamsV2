import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-black mb-4">
                            PRIVACY <span className="text-gradient-red">POLICY</span>
                        </h1>
                        <p className="text-fore ground-muted text-sm uppercase tracking-wide">
                            Last Updated: May 24, 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Sidebar Navigation */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 card p-4">
                                <h3 className="text-sm font-bold uppercase tracking-wide mb-4">NAVIGATE</h3>
                                <nav className="space-y-2">
                                    <a href="#collect" className="block text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors py-1">
                                        Information We Collect
                                    </a>
                                    <a href="#cookies" className="block text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors py-1">
                                        Cookies
                                    </a>
                                    <a href="#third-party" className="block text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors py-1">
                                        Third-Party Services
                                    </a>
                                    <a href="#consent" className="block text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors py-1">
                                        Consent
                                    </a>
                                    <a href="#rights" className="block text-sm text-foreground-muted hover:text-[hsl(var(--brand-red))] transition-colors py-1">
                                        Legal Rights
                                    </a>
                                    <Link href="/contact" className="block text-sm text-[hsl(var(--brand-red))] font-semibold hover:underline py-1">
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="lg:col-span-3 space-y-8">
                            <div className="card p-8">
                                <p className="text-foreground-muted leading-relaxed">
                                    At Slipstreams, we are committed to maintaining the trust and confidence of our visitors to
                                    our web site. In this Privacy Policy, we've provided detailed information on when and why we
                                    collect your personal information, how we use it, and how we keep it secure.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div id="collect" className="space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                    INFORMATION WE COLLECT
                                </h2>
                                <div className="card p-6">
                                    <p className="text-foreground-muted mb-4">
                                        We collect several types of information from and about users of our Website, including
                                        information by which you may be personally identified:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-foreground-muted">
                                                <strong className="text-foreground">Identity Data:</strong> Includes your name, username or similar identifier, etc.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-foreground-muted">
                                                <strong className="text-foreground">Contact Data:</strong> Includes email address and telephone numbers, only if  youre communicate with us.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-foreground-muted">
                                                <strong className="text-foreground">Usage Data:</strong> Includes information about how you use our website, including timestamps,ularly dashboards, and telemetry usage data.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cookies */}
                            <div id="cookies" className="space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                    COOKIES
                                </h2>
                                <div className="card p-6 space-y-4">
                                    <p className="text-foreground-muted">
                                        Our website uses cookies to distinguish you from other users of our website. This helps us to
                                        provide you with a good experience when you browse our website and also allows us to improve our site.
                                    </p>
                                    <div className="bg-[hsl(var(--background-subtle))] p-4 rounded-lg">
                                        <h3 className="font-bold mb-2">Types of Cookies We Use:</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[hsl(var(--brand-red))]">•</span>
                                                <span className="text-foreground-muted">
                                                    <strong>Session cookies:</strong> to maintain your login state throughout your session
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[hsl(var(--brand-red))]">•</span>
                                                <span className="text-foreground-muted">
                                                    <strong>Preference cookies:</strong> to remember your favorite teams and driver accounts
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[hsl(var(--brand-red))]">•</span>
                                                <span className="text-foreground-muted">
                                                    <strong>Analytics cookies:</strong> to understand which race tracks and statistics are most popular
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Services */}
                            <div id="third-party" className="space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                    THIRD-PARTY SERVICES
                                </h2>
                                <div className="card p-6">
                                    <p className="text-foreground-muted mb-4">
                                        We may use third-party Service Providers to monitor and analyze the use of our Service. These
                                        parties have access to your Personal Data only to perform these tasks on our behalf and are obligated
                                        not to disclose or use it for any other purpose.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                            <div>
                                                <strong className="text-foreground">Analytics:</strong>
                                                <span className="text-foreground-muted"> We use various standard tracking to measure site traffic and performance telemetry.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                            <div>
                                                <strong className="text-foreground">External integrations:</strong>
                                                <span className="text-foreground-muted"> If you connect your Discord account, we access basic information to streamline our community links.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-[hsl(var(--brand-red))] rounded-full mt-2"></span>
                                            <div>
                                                <strong className="text-foreground">Advertising Partners:</strong>
                                                <span className="text-foreground-muted"> All opt-outs via partners to show you relevant motorsport and offers.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Consent */}
                            <div id="consent" className="space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                    CONSENT
                                </h2>
                                <div className="card p-6">
                                    <p className="text-foreground-muted">
                                        By using our site, you hereby consent to our Privacy Policy and agree to its terms. If we
                                        decide to change our privacy policy, we will post those changes on this page and or update the
                                        Privacy Policy modification date at the top. Policy changes will apply only to information collected
                                        after the date of the change.
                                    </p>
                                    <div className="mt-4 p-4 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-lg">
                                        <p className="text-sm text-foreground-muted">
                                            If you have any questions or concerns about our Privacy Policy, do not hesitate to contact
                                            us at{' '}
                                            <a href="mailto:privacy@slipstreams.io" className="text-[hsl(var(--brand-red))] hover:underline font-semibold">
                                                privacy@slipstreams.io
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Rights */}
                            <div id="rights" className="space-y-4">
                                <h2 className="text-3xl font-bold flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-[hsl(var(--brand-red))] rounded-full"></span>
                                    Legal Rights
                                </h2>
                                <div className="card p-6 bg-[hsl(var(--background-subtle))]">
                                    <p className="text-foreground-muted mb-4">
                                        You, Me, and-for most of us, readers based in, easylands of, or citizen/s of a privacy-
                                        forward juridiction-are all rights reserved to access some regarding controls of all. Contact with our
                                        legal team via contact above if you for you wish to execute any of the for following:
                                    </p>
                                    <ul className="space-y-2 text-sm text-foreground-muted">
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>Request access to your personal data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>Request correction of your personal data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>Request erasure of your personal data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>Object to processing of your personal data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span>•</span>
                                            <span>Request restriction of processing your personal data</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
