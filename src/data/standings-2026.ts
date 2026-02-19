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
    { rank: 1, driver: 'Max Verstappen', code: 'VER', team: 'Red Bull Racing', points: 0, trend: 'same' },
    { rank: 2, driver: 'Lewis Hamilton', code: 'HAM', team: 'Ferrari', points: 0, trend: 'same' },
    { rank: 3, driver: 'Lando Norris', code: 'NOR', team: 'McLaren', points: 0, trend: 'same' },
    { rank: 4, driver: 'Charles Leclerc', code: 'LEC', team: 'Ferrari', points: 0, trend: 'same' },
    { rank: 5, driver: 'George Russell', code: 'RUS', team: 'Mercedes', points: 0, trend: 'same' },
    { rank: 6, driver: 'Oscar Piastri', code: 'PIA', team: 'McLaren', points: 0, trend: 'same' },
    { rank: 7, driver: 'Fernando Alonso', code: 'ALO', team: 'Aston Martin', points: 0, trend: 'same' },
    { rank: 8, driver: 'Alex Albon', code: 'ALB', team: 'Williams', points: 0, trend: 'same' },
    { rank: 9, driver: 'Carlos Sainz', code: 'SAI', team: 'Williams', points: 0, trend: 'same' },
    { rank: 10, driver: 'Pierre Gasly', code: 'GAS', team: 'Alpine', points: 0, trend: 'same' },
    { rank: 11, driver: 'Lance Stroll', code: 'STR', team: 'Aston Martin', points: 0, trend: 'same' },
    { rank: 12, driver: 'Esteban Ocon', code: 'OCO', team: 'Haas', points: 0, trend: 'same' },
    { rank: 13, driver: 'Nico Hulkenberg', code: 'HUL', team: 'Audi', points: 0, trend: 'same' },
    { rank: 14, driver: 'Sergio Perez', code: 'PER', team: 'Cadillac', points: 0, trend: 'same' },
    { rank: 15, driver: 'Valtteri Bottas', code: 'BOT', team: 'Cadillac', points: 0, trend: 'same' },
    { rank: 16, driver: 'Liam Lawson', code: 'LAW', team: 'Racing Bulls', points: 0, trend: 'same' },
    { rank: 17, driver: 'Isack Hadjar', code: 'HAD', team: 'Red Bull Racing', points: 0, trend: 'same' },
    { rank: 18, driver: 'Gabriel Bortoleto', code: 'BOR', team: 'Audi', points: 0, trend: 'same' },
    { rank: 19, driver: 'Andrea Kimi Antonelli', code: 'ANT', team: 'Mercedes', points: 0, trend: 'same' },
    { rank: 20, driver: 'Oliver Bearman', code: 'BEA', team: 'Haas', points: 0, trend: 'same' },
    { rank: 21, driver: 'Franco Colapinto', code: 'COL', team: 'Alpine', points: 0, trend: 'same' },
    { rank: 22, driver: 'Arvid Lindblad', code: 'LIN', team: 'Racing Bulls', points: 0, trend: 'same' },
];

export const fallbackConstructorStandings: ConstructorStanding[] = [
    {
        rank: 1,
        team: 'Red Bull Racing',
        points: 0,
        drivers: [{ code: 'VER', points: 0 }, { code: 'HAD', points: 0 }],
        trend: 'same'
    },
    {
        rank: 2,
        team: 'Ferrari',
        points: 0,
        drivers: [{ code: 'LEC', points: 0 }, { code: 'HAM', points: 0 }],
        trend: 'same'
    },
    {
        rank: 3,
        team: 'McLaren',
        points: 0,
        drivers: [{ code: 'NOR', points: 0 }, { code: 'PIA', points: 0 }],
        trend: 'same'
    },
    {
        rank: 4,
        team: 'Mercedes',
        points: 0,
        drivers: [{ code: 'RUS', points: 0 }, { code: 'ANT', points: 0 }],
        trend: 'same'
    },
    {
        rank: 5,
        team: 'Aston Martin',
        points: 0,
        drivers: [{ code: 'ALO', points: 0 }, { code: 'STR', points: 0 }],
        trend: 'same'
    },
    {
        rank: 6,
        team: 'Williams',
        points: 0,
        drivers: [{ code: 'ALB', points: 0 }, { code: 'SAI', points: 0 }],
        trend: 'same'
    },
    {
        rank: 7,
        team: 'Alpine',
        points: 0,
        drivers: [{ code: 'GAS', points: 0 }, { code: 'COL', points: 0 }],
        trend: 'same'
    },
    {
        rank: 8,
        team: 'Racing Bulls',
        points: 0,
        drivers: [{ code: 'LAW', points: 0 }, { code: 'LIN', points: 0 }],
        trend: 'same'
    },
    {
        rank: 9,
        team: 'Haas', // Assuming Haas remains Haas
        points: 0,
        drivers: [{ code: 'OCO', points: 0 }, { code: 'BEA', points: 0 }],
        trend: 'same'
    },
    {
        rank: 10,
        team: 'Audi',
        points: 0,
        drivers: [{ code: 'HUL', points: 0 }, { code: 'BOR', points: 0 }],
        trend: 'same'
    },
    {
        rank: 11,
        team: 'Cadillac',
        points: 0,
        drivers: [{ code: 'PER', points: 0 }, { code: 'BOT', points: 0 }],
        trend: 'same'
    },
];
