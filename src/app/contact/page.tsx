import { Navbar } from '@/components/layout/Navbar';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-6xl md:text-7xl font-black mb-6">
                            CONTACT <span className="text-gradient-red">US</span>
                        </h1>
                        <p className="text-xl text-foreground-muted">
                            We value feedback, questions, and concerns from our users.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* DMCA Inquiry */}
                            <button className="card p-8 hover:border-[hsl(var(--brand-red))] transition-all text-left group">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            DMCA INQUIRY
                                        </h3>
                                        <p className="text-foreground-muted">
                                            Report copyright infringement or content concerns
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {/* Technical Support */}
                            <button className="card p-8 hover:border-[hsl(var(--brand-red))] transition-all text-left group">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            TECHNICAL SUPPORT
                                        </h3>
                                        <p className="text-foreground-muted">
                                            Get help with streaming, playback, or technical issues
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {/* Advertising */}
                            <button className="card p-8 hover:border-[hsl(var(--brand-red))] transition-all text-left group">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            ADVERTISING
                                        </h3>
                                        <p className="text-foreground-muted">
                                            Inquire about advertising opportunities and partnerships
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {/* General Inquiry */}
                            <button className="card p-8 hover:border-[hsl(var(--brand-red))] transition-all text-left group">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))]/10 flex items-center justify-center text-[hsl(var(--brand-red))] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-red))] transition-colors">
                                            GENERAL INQUIRY
                                        </h3>
                                        <p className="text-foreground-muted">
                                            General questions, feedback, or suggestions
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Direct Communication */}
                        <div className="card p-12 bg-gradient-to-br from-[hsl(var(--brand-red))]/5 to-transparent border-[hsl(var(--brand-red))]/20 text-center">
                            <div className="mb-6">
                                <h2 className="text-sm uppercase tracking-wider text-foreground-muted mb-4">
                                    Direct Communication Line
                                </h2>
                                <a
                                    href="mailto:your@email.com"
                                    className="text-4xl md:text-5xl font-black text-gradient-red hover:opacity-80 transition-opacity"
                                >
                                    your@email.com
                                </a>
                            </div>
                            <p className="text-foreground-muted italic">
                                Average response time: &lt; 24 hours
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 text-center">
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">
                                Connect With Us
                            </h3>
                            <div className="flex items-center justify-center gap-4">
                                <button className="w-12 h-12 rounded-lg bg-[hsl(var(--background-elevated))] hover:bg-[hsl(var(--brand-red))] border border-[hsl(var(--border-subtle))] hover:border-[hsl(var(--brand-red))] flex items-center justify-center transition-all hover:scale-110">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                                    </svg>
                                </button>
                                <button className="w-12 h-12 rounded-lg bg-[hsl(var(--background-elevated))] hover:bg-[hsl(var(--brand-red))] border border-[hsl(var(--border-subtle))] hover:border-[hsl(var(--brand-red))] flex items-center justify-center transition-all hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </button>
                                <button className="w-12 h-12 rounded-lg bg-[hsl(var(--background-elevated))] hover:bg-[hsl(var(--brand-red))] border border-[hsl(var(--border-subtle))] hover:border-[hsl(var(--brand-red))] flex items-center justify-center transition-all hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                </button>
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
