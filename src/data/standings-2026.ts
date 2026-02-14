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

export const driverStandings2026: DriverStanding[] = [
    { rank: 1, driver: 'Max Verstappen', code: 'VER', team: 'Red Bull Racing', points: 161, trend: 'same' },
    { rank: 2, driver: 'Charles Leclerc', code: 'LEC', team: 'Ferrari', points: 113, trend: 'up' },
    { rank: 3, driver: 'Lando Norris', code: 'NOR', team: 'McLaren', points: 101, trend: 'down' },
    { rank: 4, driver: 'Carlos Sainz', code: 'SAI', team: 'Ferrari', points: 93, trend: 'same' },
    { rank: 5, driver: 'Sergio Perez', code: 'PER', team: 'Red Bull Racing', points: 89, trend: 'same' },
];

export const constructorStandings2026: ConstructorStanding[] = [
    {
        rank: 1,
        team: 'Red Bull Racing',
        points: 250,
        drivers: [{ code: 'VER', points: 161 }, { code: 'PER', points: 89 }],
        trend: 'same'
    },
    {
        rank: 2,
        team: 'Ferrari',
        points: 206,
        drivers: [{ code: 'LEC', points: 113 }, { code: 'SAI', points: 93 }],
        trend: 'up'
    },
    {
        rank: 3,
        team: 'McLaren',
        points: 154,
        drivers: [{ code: 'NOR', points: 101 }, { code: 'PIA', points: 53 }],
        trend: 'down'
    },
    {
        rank: 4,
        team: 'Mercedes',
        points: 79,
        drivers: [{ code: 'RUS', points: 45 }, { code: 'ANT', points: 34 }],
        trend: 'same'
    },
    {
        rank: 5,
        team: 'Aston Martin',
        points: 44,
        drivers: [{ code: 'ALO', points: 30 }, { code: 'STR', points: 14 }],
        trend: 'same'
    },
];
