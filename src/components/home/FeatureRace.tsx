'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GrandPrix } from '@/data/f1-calendar-2026';

interface FeatureRaceProps {
    race: GrandPrix;
}

export function FeatureRace({ race }: FeatureRaceProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center mt- pt-30">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Use a high quality car image or track image if available. For now using placeholder or race track image */}
                <Image
                    src={race.coverImage || 'https://i.pinimg.com/1200x/ec/c2/f5/ecc2f523c4bde102f8048939e0bb7813.jpg'}
                    alt="F1 Hero Background"
                    fill
                    className="object-cover object-bottom "
                    priority
                />

                {/* Dark Overlay Gradients matching design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>

            <div className="container-custom -mt-20 relative z-10 w-full">
                <div className="max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#FF1E1E]/20 border border-[#FF1E1E] px-4 py-1.5 rounded text-sm font-bold uppercase tracking-wider text-[#FF1E1E] mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#FF1E1E] rounded-full animate-pulse" />
                        Current Grand Prix
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-7xl font-black mb-6 text-white leading-[0.9] tracking-wide uppercase">
                        {race.country}  <br />
                        <span className="text-white"> Grand Prix</span>
                    </h1>

                    {/* Location & Date */}
                    <div className="flex items-center gap-6 text-sm md:text-2xl text-white/90 font-medium mb-12">
                        <div className="flex items-center gap-3">
                            <svg className="w-7 h-7 text-[#FF1E1E]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {race.circuit}
                        </div>
                        <span className="text-[#FF1E1E] text-3xl font-light">|</span>
                        <div>{race.dateRange}</div>
                    </div>

                    {/* CTA */}
                    <Link
                        href={`/race/${race.country.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-[#FF1E1E] text-white text-xl font-bold px-12 py-6 rounded transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-4 hover:shadow-[0_0_30px_rgba(255,30,30,0.5)] uppercase tracking-wide"
                    >
                        Watch Live
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
