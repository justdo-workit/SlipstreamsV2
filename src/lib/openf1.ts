import { DriverStanding, ConstructorStanding, fallbackDriverStandings, fallbackConstructorStandings } from '@/data/standings-2026';

// OpenF1 Base URL
const BASE_URL = 'https://api.openf1.org/v1';

// Cache configuration (24 hours in seconds)
const REVALIDATE_TIME = 86400;

interface OpenF1Session {
    session_key: number;
    meeting_key: number;
    session_name: string;
    year: number;
}

interface OpenF1DriverStanding {
    driver_number: number;
    points: number;
    session_key: number;
    meeting_key: number;
}

// NOTE: Team standings structure logic is inferred since it's a beta endpoint
// If it's not available, we might need to aggregate driver points manually.
interface OpenF1TeamStanding {
    team_name: string; // or team_id
    points: number;
}

/**
 * Fetches the latest completed race session for the current year.
 */
async function getLatestSessionKey(year: number = 2026): Promise<number | null> {
    try {
        // Fetch sessions regarding "Race" type
        const res = await fetch(`${BASE_URL}/sessions?year=${year}&session_name=Race`, {
            next: { revalidate: REVALIDATE_TIME },
        });

        if (!res.ok) return null;

        const sessions: OpenF1Session[] = await res.json();
        if (!sessions || sessions.length === 0) return null;

        // Sort by session_key (usually increasing) or date if available to get the last one
        // Assuming session_key increases with time
        const latestSession = sessions.sort((a, b) => b.session_key - a.session_key)[0];

        return latestSession.session_key;
    } catch (error) {
        console.error('Error fetching OpenF1 sessions:', error);
        return null;
    }
}

/**
 * Fetches driver standings for the latest session.
 */
export async function getDriverStandings(): Promise<DriverStanding[]> {
    const sessionKey = await getLatestSessionKey();

    if (!sessionKey) {
        return fallbackDriverStandings;
    }

    try {
        // Currently OpenF1 `championship_drivers` might need session_key
        //Docs: curl "https://api.openf1.org/v1/championship_drivers?session_key=9839"
        const res = await fetch(`${BASE_URL}/championship_drivers?session_key=${sessionKey}`, {
            next: { revalidate: REVALIDATE_TIME },
        });

        if (!res.ok) throw new Error('Failed to fetch driver standings');

        // Expected response: array of { driver_number, points, ... }
        // We need to map driver_number to Name/Team.
        // OpenF1 has a /drivers endpoint to get details.

        // For now, if the season hasn't started, we won't get here because sessionKey will be null.
        // If we DO get here, we need to map the data.

        // Since mapping driver numbers to names requires another call or a static map, 
        // and reliability is key, for now we will return generic structure or 
        // try to fetch driver info.

        // Simplification: In a real app, we'd fetch `/drivers` once and map.
        // Given the constraints and the fact it's 2026 (future), we likely won't get data.
        // So this logic effectively prepares for it.

        // TODO: Implement full mapping when data is available. 
        // returning fallback for safety in this iteration as 2026 data is empty.
        return fallbackDriverStandings;

    } catch (error) {
        console.error('Error fetching driver standings:', error);
        return fallbackDriverStandings;
    }
}

/**
 * Fetches constructor standings.
 */
export async function getConstructorStandings(): Promise<ConstructorStanding[]> {
    const sessionKey = await getLatestSessionKey();

    if (!sessionKey) {
        return fallbackConstructorStandings;
    }

    try {
        // Similar logic for teams
        return fallbackConstructorStandings;
    } catch (error) {
        console.error('Error fetching constructor standings:', error);
        return fallbackConstructorStandings;
    }
}
