export interface DriverStanding {
    rank: number;
    driver: string;
    code: string;
    team: string;
    points: number;
    trend?: 'up' | 'down' | 'same';
}

export interface ConstructorStanding {
    rank: number;
    team: string;
    points: number;
    drivers: { code: string; points: number }[];
    trend?: 'up' | 'down' | 'same';
}

export const fallbackDriverStandings: DriverStanding[] = [
    { rank: 1, driver: 'George Russell', code: 'RUS', team: 'Mercedes', points: 25, trend: 'up' },
    { rank: 2, driver: 'Andrea Kimi Antonelli', code: 'ANT', team: 'Mercedes', points: 18, trend: 'up' },
    { rank: 3, driver: 'Charles Leclerc', code: 'LEC', team: 'Ferrari', points: 15, trend: 'up' },
    { rank: 4, driver: 'Lewis Hamilton', code: 'HAM', team: 'Ferrari', points: 12, trend: 'up' },
    { rank: 5, driver: 'Lando Norris', code: 'NOR', team: 'McLaren', points: 10, trend: 'up' },
    { rank: 6, driver: 'Max Verstappen', code: 'VER', team: 'Red Bull Racing', points: 8, trend: 'down' },
    { rank: 7, driver: 'Oliver Bearman', code: 'BEA', team: 'Haas', points: 6, trend: 'up' },
    { rank: 8, driver: 'Arvid Lindblad', code: 'LIN', team: 'Racing Bulls', points: 4, trend: 'up' },
    { rank: 9, driver: 'Gabriel Bortoleto', code: 'BOR', team: 'Audi', points: 2, trend: 'up' },
    { rank: 10, driver: 'Pierre Gasly', code: 'GAS', team: 'Alpine', points: 1, trend: 'up' },
    { rank: 11, driver: 'Esteban Ocon', code: 'OCO', team: 'Haas', points: 0, trend: 'same' },
    { rank: 12, driver: 'Alex Albon', code: 'ALB', team: 'Williams', points: 0, trend: 'same' },
    { rank: 13, driver: 'Liam Lawson', code: 'LAW', team: 'Racing Bulls', points: 0, trend: 'same' },
    { rank: 14, driver: 'Franco Colapinto', code: 'COL', team: 'Alpine', points: 0, trend: 'same' },
    { rank: 15, driver: 'Carlos Sainz', code: 'SAI', team: 'Williams', points: 0, trend: 'same' },
    { rank: 16, driver: 'Sergio Perez', code: 'PER', team: 'Cadillac', points: 0, trend: 'same' },
    { rank: 17, driver: 'Lance Stroll', code: 'STR', team: 'Aston Martin', points: 0, trend: 'same' },
    { rank: 18, driver: 'Fernando Alonso', code: 'ALO', team: 'Aston Martin', points: 0, trend: 'same' },
    { rank: 19, driver: 'Valtteri Bottas', code: 'BOT', team: 'Cadillac', points: 0, trend: 'same' },
    { rank: 20, driver: 'Isack Hadjar', code: 'HAD', team: 'Red Bull Racing', points: 0, trend: 'same' },
    { rank: 21, driver: 'Oscar Piastri', code: 'PIA', team: 'McLaren', points: 0, trend: 'down' },
    { rank: 22, driver: 'Nico Hulkenberg', code: 'HUL', team: 'Audi', points: 0, trend: 'down' },
];

export const fallbackConstructorStandings: ConstructorStanding[] = [
    {
        rank: 1,
        team: 'Mercedes',
        points: 43,
        drivers: [{ code: 'RUS', points: 25 }, { code: 'ANT', points: 18 }],
        trend: 'up'
    },
    {
        rank: 2,
        team: 'Ferrari',
        points: 27,
        drivers: [{ code: 'LEC', points: 15 }, { code: 'HAM', points: 12 }],
        trend: 'up'
    },
    {
        rank: 3,
        team: 'McLaren',
        points: 10,
        drivers: [{ code: 'NOR', points: 10 }, { code: 'PIA', points: 0 }],
        trend: 'down'
    },
    {
        rank: 4,
        team: 'Red Bull Racing',
        points: 8,
        drivers: [{ code: 'VER', points: 8 }, { code: 'HAD', points: 0 }],
        trend: 'down'
    },
    {
        rank: 5,
        team: 'Haas',
        points: 6,
        drivers: [{ code: 'BEA', points: 6 }, { code: 'OCO', points: 0 }],
        trend: 'up'
    },
    {
        rank: 6,
        team: 'Racing Bulls',
        points: 4,
        drivers: [{ code: 'LIN', points: 4 }, { code: 'LAW', points: 0 }],
        trend: 'up'
    },
    {
        rank: 7,
        team: 'Audi',
        points: 2,
        drivers: [{ code: 'BOR', points: 2 }, { code: 'HUL', points: 0 }],
        trend: 'up'
    },
    {
        rank: 8,
        team: 'Alpine',
        points: 1,
        drivers: [{ code: 'GAS', points: 1 }, { code: 'COL', points: 0 }],
        trend: 'same'
    },
    {
        rank: 9,
        team: 'Williams',
        points: 0,
        drivers: [{ code: 'ALB', points: 0 }, { code: 'SAI', points: 0 }],
        trend: 'same'
    },
    {
        rank: 10,
        team: 'Cadillac',
        points: 0,
        drivers: [{ code: 'PER', points: 0 }, { code: 'BOT', points: 0 }],
        trend: 'same'
    },
    {
        rank: 11,
        team: 'Aston Martin',
        points: 0,
        drivers: [{ code: 'ALO', points: 0 }, { code: 'STR', points: 0 }],
        trend: 'down'
    },
];
