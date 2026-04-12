// 2026 F1 Season Standings
// Fallback data — used when the live Jolpica API is unavailable.
// Last manually updated: After Round 3 — Japanese Grand Prix (2026-03-29)

export interface DriverStanding {
    rank: number;
    driver: string;
    code: string;
    team: string;
    points: number;
    wins?: number;
    nationality?: string;
    trend?: 'up' | 'down' | 'same';
}

export interface ConstructorStanding {
    rank: number;
    team: string;
    points: number;
    wins?: number;
    drivers: { code: string; points: number }[];
    trend?: 'up' | 'down' | 'same';
}

export const fallbackDriverStandings: DriverStanding[] = [
    { rank: 1,  driver: 'George Russell',        code: 'RUS', team: 'Mercedes',       points: 62, wins: 2, trend: 'up' },
    { rank: 2,  driver: 'Lando Norris',           code: 'NOR', team: 'McLaren',        points: 54, wins: 1, trend: 'up' },
    { rank: 3,  driver: 'Andrea Kimi Antonelli', code: 'ANT', team: 'Mercedes',       points: 48, wins: 0, trend: 'up' },
    { rank: 4,  driver: 'Oscar Piastri',          code: 'PIA', team: 'McLaren',        points: 41, wins: 0, trend: 'up' },
    { rank: 5,  driver: 'Charles Leclerc',        code: 'LEC', team: 'Ferrari',        points: 36, wins: 0, trend: 'up' },
    { rank: 6,  driver: 'Lewis Hamilton',         code: 'HAM', team: 'Ferrari',        points: 30, wins: 0, trend: 'same' },
    { rank: 7,  driver: 'Max Verstappen',         code: 'VER', team: 'Red Bull Racing',points: 20, wins: 0, trend: 'down' },
    { rank: 8,  driver: 'Isack Hadjar',           code: 'HAD', team: 'Red Bull Racing',points: 18, wins: 0, trend: 'up' },
    { rank: 9,  driver: 'Oliver Bearman',         code: 'BEA', team: 'Haas',           points: 14, wins: 0, trend: 'up' },
    { rank: 10, driver: 'Esteban Ocon',           code: 'OCO', team: 'Haas',           points: 12, wins: 0, trend: 'up' },
    { rank: 11, driver: 'Carlos Sainz',           code: 'SAI', team: 'Williams',       points: 10, wins: 0, trend: 'same' },
    { rank: 12, driver: 'Alex Albon',             code: 'ALB', team: 'Williams',       points: 8,  wins: 0, trend: 'same' },
    { rank: 13, driver: 'Pierre Gasly',           code: 'GAS', team: 'Alpine',         points: 6,  wins: 0, trend: 'same' },
    { rank: 14, driver: 'Franco Colapinto',       code: 'COL', team: 'Alpine',         points: 4,  wins: 0, trend: 'up' },
    { rank: 15, driver: 'Gabriel Bortoleto',      code: 'BOR', team: 'Audi',           points: 4,  wins: 0, trend: 'same' },
    { rank: 16, driver: 'Nico Hulkenberg',        code: 'HUL', team: 'Audi',           points: 2,  wins: 0, trend: 'same' },
    { rank: 17, driver: 'Arvid Lindblad',         code: 'LIN', team: 'Racing Bulls',   points: 2,  wins: 0, trend: 'same' },
    { rank: 18, driver: 'Liam Lawson',            code: 'LAW', team: 'Racing Bulls',   points: 0,  wins: 0, trend: 'same' },
    { rank: 19, driver: 'Fernando Alonso',        code: 'ALO', team: 'Aston Martin',   points: 0,  wins: 0, trend: 'same' },
    { rank: 20, driver: 'Lance Stroll',           code: 'STR', team: 'Aston Martin',   points: 0,  wins: 0, trend: 'same' },
    { rank: 21, driver: 'Sergio Perez',           code: 'PER', team: 'Cadillac',       points: 0,  wins: 0, trend: 'same' },
    { rank: 22, driver: 'Valtteri Bottas',        code: 'BOT', team: 'Cadillac',       points: 0,  wins: 0, trend: 'same' },
];

export const fallbackConstructorStandings: ConstructorStanding[] = [
    {
        rank: 1,
        team: 'Mercedes',
        points: 110,
        wins: 2,
        drivers: [{ code: 'RUS', points: 62 }, { code: 'ANT', points: 48 }],
        trend: 'up',
    },
    {
        rank: 2,
        team: 'McLaren',
        points: 95,
        wins: 1,
        drivers: [{ code: 'NOR', points: 54 }, { code: 'PIA', points: 41 }],
        trend: 'up',
    },
    {
        rank: 3,
        team: 'Ferrari',
        points: 66,
        wins: 0,
        drivers: [{ code: 'LEC', points: 36 }, { code: 'HAM', points: 30 }],
        trend: 'up',
    },
    {
        rank: 4,
        team: 'Red Bull Racing',
        points: 38,
        wins: 0,
        drivers: [{ code: 'VER', points: 20 }, { code: 'HAD', points: 18 }],
        trend: 'down',
    },
    {
        rank: 5,
        team: 'Haas',
        points: 26,
        wins: 0,
        drivers: [{ code: 'BEA', points: 14 }, { code: 'OCO', points: 12 }],
        trend: 'up',
    },
    {
        rank: 6,
        team: 'Williams',
        points: 18,
        wins: 0,
        drivers: [{ code: 'SAI', points: 10 }, { code: 'ALB', points: 8 }],
        trend: 'same',
    },
    {
        rank: 7,
        team: 'Alpine',
        points: 10,
        wins: 0,
        drivers: [{ code: 'GAS', points: 6 }, { code: 'COL', points: 4 }],
        trend: 'same',
    },
    {
        rank: 8,
        team: 'Audi',
        points: 6,
        wins: 0,
        drivers: [{ code: 'BOR', points: 4 }, { code: 'HUL', points: 2 }],
        trend: 'up',
    },
    {
        rank: 9,
        team: 'Racing Bulls',
        points: 2,
        wins: 0,
        drivers: [{ code: 'LIN', points: 2 }, { code: 'LAW', points: 0 }],
        trend: 'same',
    },
    {
        rank: 10,
        team: 'Aston Martin',
        points: 0,
        wins: 0,
        drivers: [{ code: 'ALO', points: 0 }, { code: 'STR', points: 0 }],
        trend: 'same',
    },
    {
        rank: 11,
        team: 'Cadillac',
        points: 0,
        wins: 0,
        drivers: [{ code: 'PER', points: 0 }, { code: 'BOT', points: 0 }],
        trend: 'same',
    },
];
