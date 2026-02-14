import { Navbar } from '@/components/layout/Navbar';

// Mock standings data for 2026 season
const constructorStandings = [
    { pos: 1, team: 'Oracle Red Bull Racing', drivers: ['Max Verstappen', 'Sergio Perez'], points: 583, logo: '🏎️', color: '#1E3A8A' },
    { pos: 2, team: 'McLaren Formula 1 Team', drivers: ['Lando Norris', 'Oscar Piastri'], points: 466, logo: '🏎️', color: '#FF8700' },
    { pos: 3, team: 'Scuderia Ferrari', drivers: ['Charles Leclerc', 'Carlos Sainz'], points: 425, logo: '🏎️', color: '#DC0000' },
    { pos: 4, team: 'Mercedes-AMG Petronas', drivers: ['Lewis Hamilton', 'George Russell'], points: 309, logo: '🏎️', color: '#00D2BE' },
    { pos: 5, team: 'Aston Martin Aramco', drivers: ['Fernando Alonso', 'Lance Stroll'], points: 82, logo: '🏎️', color: '#006F62' },
    { pos: 6, team: 'Visa Cash App RB', drivers: ['Yuki Tsunoda', 'Daniel Ricciardo'], points: 34, logo: '🏎️', color: '#2B4562' },
    { pos: 7, team: 'MoneyGram Haas F1', drivers: ['Nico Hulkenberg', 'Kevin Magnussen'], points: 28, logo: '🏎️', color: '#B6BABD' },
    { pos: 8, team: 'BWT Alpine F1 Team', drivers: ['Pierre Gasly', 'Esteban Ocon'], points: 13, logo: '🏎️', color: '#0090FF' },
    { pos: 9, team: 'Williams Racing', drivers: ['Alex Albon', 'Franco Colapinto'], points: 10, logo: '🏎️', color: '#005AFF' },
    { pos: 10, team: 'Stake F1 Team Kick Sauber', drivers: ['Valtteri Bottas', 'Zhou Guanyu'], points: 0, logo: '🏎️', color: '#00E756' },
];

const driverStandings = [
    { pos: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 362, nationality: '🇳🇱' },
    { pos: 2, name: 'Lando Norris', team: 'McLaren', points: 315, nationality: '🇬🇧' },
    { pos: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 291, nationality: '🇲🇨' },
    { pos: 4, name: 'Oscar Piastri', team: 'McLaren', points: 251, nationality: '🇦🇺' },
    { pos: 5, name: 'Carlos Sainz', team: 'Ferrari', points: 240, nationality: '🇪🇸' },
    { pos: 6, name: 'Lewis Hamilton', team: 'Mercedes', points: 189, nationality: '🇬🇧' },
    { pos: 7, name: 'George Russell', team: 'Mercedes', points: 177, nationality: '🇬🇧' },
    { pos: 8, name: 'Sergio Perez', team: 'Red Bull Racing', points: 152, nationality: '🇲🇽' },
];

export default function StandingsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-10" />
                <div className="container-custom relative z-10">
                    <div className="max-w-6xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--brand-red))]/10 border border-[hsl(var(--brand-red))]/20 rounded-full mb-6">
                            <svg className="w-5 h-5 text-[hsl(var(--brand-red))]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-semibold text-[hsl(var(--brand-red))] uppercase tracking-wide">
                                2026 Season
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 italic tracking-wide">
                            WORLD CONSTRUCTORS'<br />
                            <span className="text-gradient-red">CHAMPIONSHIP</span>
                        </h1>
                        <p className="text-lg text-foreground-muted">
                            Official 2026 Season Standings & Team Data
                        </p>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-8 border-b border-[hsl(var(--border-subtle))]">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto flex items-center gap-8">
                        <button className="pb-3 border-b-2 border-[hsl(var(--brand-red))] text-foreground font-bold uppercase text-sm tracking-wider">
                            Team Standings
                        </button>
                        <button className="pb-3 border-b-2 border-transparent text-foreground-muted hover:text-foreground font-bold uppercase text-sm tracking-wider transition-colors">
                            Driver Standings
                        </button>
                    </div>
                </div>
            </section>

            {/* Constructor Standings */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="card overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-[hsl(var(--background-elevated))] px-6 py-4 grid grid-cols-12 gap-4 text-xs uppercase tracking-wider text-foreground-muted font-bold border-b border-[hsl(var(--border-subtle))]">
                                <div className="col-span-1">POS</div>
                                <div className="col-span-5">Team Constructor</div>
                                <div className="col-span-4">Drivers</div>
                                <div className="col-span-2 text-right">Points</div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-[hsl(var(--border-subtle))]">
                                {constructorStandings.map((team, index) => (
                                    <div
                                        key={team.pos}
                                        className="px-6 py-5 grid grid-cols-12 gap-4 items-center hover:bg-[hsl(var(--background-subtle))] transition-colors"
                                    >
                                        {/* Position */}
                                        <div className="col-span-1">
                                            <div className="text-2xl font-black italic" style={{
                                                background: index < 3 ? 'linear-gradient(135deg, #FF1801 0%, #C41E3A 100%)' : 'transparent',
                                                WebkitBackgroundClip: index < 3 ? 'text' : 'initial',
                                                WebkitTextFillColor: index < 3 ? 'transparent' : 'inherit',
                                                backgroundClip: index < 3 ? 'text' : 'initial',
                                            }}>
                                                {String(team.pos).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Team */}
                                        <div className="col-span-5 flex items-center gap-4">
                                            <div
                                                className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl"
                                                style={{ backgroundColor: `${team.color}20` }}
                                            >
                                                {team.logo}
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{team.team}</div>
                                            </div>
                                        </div>

                                        {/* Drivers */}
                                        <div className="col-span-4">
                                            <div className="space-y-1 text-sm text-foreground-muted">
                                                {team.drivers.map((driver, i) => (
                                                    <div key={i}>{driver}</div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Points */}
                                        <div className="col-span-2 text-right">
                                            <div className="text-4xl font-black font-mono">{team.points}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Season Info */}
                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            <div className="card p-6 text-center">
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Races Completed
                                </div>
                                <div className="text-4xl font-black text-gradient-red">8</div>
                                <div className="text-xs text-foreground-subtle mt-1">of 24</div>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Points Leader
                                </div>
                                <div className="text-2xl font-bold">Red Bull Racing</div>
                                <div className="text-xs text-foreground-subtle mt-1">583 points</div>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-sm uppercase tracking-wider text-foreground-muted mb-2">
                                    Next Race
                                </div>
                                <div className="text-2xl font-bold">Spanish GP</div>
                                <div className="text-xs text-foreground-subtle mt-1">Barcelona</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driver Standings Preview */}
            <section className="py-12 bg-[hsl(var(--background-subtle))]">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Driver Standings</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {driverStandings.slice(0, 6).map((driver) => (
                                <div key={driver.pos} className="card p-6 flex items-center gap-4">
                                    <div className="text-3xl font-black text-gradient-red w-12">
                                        {driver.pos}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-2xl">{driver.nationality}</span>
                                            <div className="font-bold text-lg">{driver.name}</div>
                                        </div>
                                        <div className="text-sm text-foreground-muted">{driver.team}</div>
                                    </div>
                                    <div className="text-3xl font-black font-mono">{driver.points}</div>
                                </div>
                            ))}
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
