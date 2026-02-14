'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/schedule', label: 'Schedule' },
        { href: '/races', label: 'Races' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-[hsl(var(--border-subtle))]' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[hsl(var(--brand-red))] rounded flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-5 h-5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" stroke="none" />
                            </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-wide uppercase">
                            Slip<span className="text-[hsl(var(--brand-red))]">Streams</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-semibold uppercase tracking-wide hover:text-[hsl(var(--brand-red))] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/schedule"
                            className="text-sm font-semibold uppercase tracking-wide hover:text-[hsl(var(--brand-red))] transition-colors"
                        >
                            Schedule
                        </Link>
                        <Link
                            href="/standings"
                            className="text-sm font-semibold uppercase tracking-wide hover:text-[hsl(var(--brand-red))] transition-colors"
                        >
                            Standings
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-semibold uppercase tracking-wide hover:text-[hsl(var(--brand-red))] transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold uppercase tracking-wide hover:text-[hsl(var(--brand-red))] transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Discord Button */}
                    <div className="hidden md:block">
                        <button className="btn-primary flex items-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            Discord
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-[hsl(var(--background-elevated))] rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-6 border-t border-[hsl(var(--border-subtle))] animate-fade-in">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[hsl(var(--background-elevated))] hover:text-[hsl(var(--brand-red))] transition-colors rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/schedule"
                                className="block px-4 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[hsl(var(--background-elevated))] hover:text-[hsl(var(--brand-red))] transition-colors rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Schedule
                            </Link>
                            <Link
                                href="/standings"
                                className="block px-4 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[hsl(var(--background-elevated))] hover:text-[hsl(var(--brand-red))] transition-colors rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Standings
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[hsl(var(--background-elevated))] hover:text-[hsl(var(--brand-red))] transition-colors rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[hsl(var(--background-elevated))] hover:text-[hsl(var(--brand-red))] transition-colors rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <button className="btn-primary w-full mt-4">
                                Discord
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
