import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Mission */}
            <section className="pt-32 pb-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            <span className="w-1 h-8 bg-[hsl(var(--brand-red))]"></span>
                            Our Mission
                        </h2>
                        <div className="card p-8">
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                SlipStreams is dedicated to Formula 1 enthusiasts, providing race schedules, insights,
                                and community engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="pb-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="card p-8 border-[hsl(var(--brand-red))]/20 bg-[hsl(var(--brand-red))]/5">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Unofficial Fan Platform
                            </h3>
                            <p className="text-foreground-muted leading-relaxed text-sm">
                                This website is unofficial and is not associated in any way with the Formula 1 companies.
                                F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks
                                are trade marks of Formula One Licensing B.V.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
