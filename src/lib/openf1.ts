import {
    DriverStanding,
    ConstructorStanding,
    fallbackDriverStandings,
    fallbackConstructorStandings,
} from '@/data/standings-2026';

// Jolpica F1 API (Ergast-compatible, free, no key required)
const BASE_URL = 'https://api.jolpi.ca/ergast/f1';

// Revalidate every 7 days (weekly, Monday refresh after Sunday races)
// Next.js ISR will automatically serve stale data instantly and refresh in background.
const REVALIDATE_SECONDS = 604800; // 7 days

// ─── Jolpica Response Types ────────────────────────────────────────────────────

interface JolpicaDriverStanding {
    position: string;
    points: string;
    wins: string;
    Driver: {
        driverId: string;
        code: string;
        givenName: string;
        familyName: string;
        nationality: string;
    };
    Constructors: {
        constructorId: string;
        name: string;
    }[];
}

interface JolpicaConstructorStanding {
    position: string;
    points: string;
    wins: string;
    Constructor: {
        constructorId: string;
        name: string;
        nationality: string;
    };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns a set of 3-letter driver codes from our fallback list for name
 * disambiguation — Jolpica gives a `code` field for most drivers.
 */
function resolveCode(code: string | undefined, familyName: string): string {
    if (code && code.length === 3) return code.toUpperCase();
    return familyName.slice(0, 3).toUpperCase();
}

/**
 * Finds which drivers (from the driver standings) belong to a given constructor,
 * so we can populate the constructor `drivers` breakdown.
 */
function buildConstructorDrivers(
    constructorName: string,
    driverStandings: DriverStanding[]
): { code: string; points: number }[] {
    return driverStandings
        .filter((d) => d.team.toLowerCase() === constructorName.toLowerCase())
        .map((d) => ({ code: d.code, points: d.points }));
}

// ─── Driver Standings ─────────────────────────────────────────────────────────

export async function getDriverStandings(): Promise<DriverStanding[]> {
    try {
        const res = await fetch(
            `${BASE_URL}/2026/driverStandings.json`,
            { next: { revalidate: REVALIDATE_SECONDS } }
        );

        if (!res.ok) throw new Error(`Jolpica driver standings returned ${res.status}`);

        const json = await res.json();
        const standingsTable = json?.MRData?.StandingsTable;
        const standingsLists: JolpicaDriverStanding[] | undefined =
            standingsTable?.StandingsLists?.[0]?.DriverStandings;

        if (!standingsLists || standingsLists.length === 0) {
            console.warn('[Standings] No driver standings data from Jolpica — using fallback');
            return fallbackDriverStandings;
        }

        const mapped: DriverStanding[] = standingsLists.map((entry) => ({
            rank: parseInt(entry.position, 10),
            driver: `${entry.Driver.givenName} ${entry.Driver.familyName}`,
            code: resolveCode(entry.Driver.code, entry.Driver.familyName),
            team: entry.Constructors[0]?.name ?? 'Unknown',
            points: parseFloat(entry.points),
            wins: parseInt(entry.wins, 10),
            nationality: entry.Driver.nationality,
        }));

        return mapped;
    } catch (error) {
        console.error('[Standings] Error fetching driver standings from Jolpica:', error);
        return fallbackDriverStandings;
    }
}

// ─── Constructor Standings ────────────────────────────────────────────────────

export async function getConstructorStandings(): Promise<ConstructorStanding[]> {
    try {
        // Fetch both constructor & driver standings in parallel so we can enrich
        // the constructor rows with a driver points breakdown.
        const [constructorRes, driverStandings] = await Promise.all([
            fetch(`${BASE_URL}/2026/constructorStandings.json`, {
                next: { revalidate: REVALIDATE_SECONDS },
            }),
            getDriverStandings(),
        ]);

        if (!constructorRes.ok)
            throw new Error(`Jolpica constructor standings returned ${constructorRes.status}`);

        const json = await constructorRes.json();
        const standingsLists: JolpicaConstructorStanding[] | undefined =
            json?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings;

        if (!standingsLists || standingsLists.length === 0) {
            console.warn('[Standings] No constructor standings data from Jolpica — using fallback');
            return fallbackConstructorStandings;
        }

        const mapped: ConstructorStanding[] = standingsLists.map((entry) => ({
            rank: parseInt(entry.position, 10),
            team: entry.Constructor.name,
            points: parseFloat(entry.points),
            wins: parseInt(entry.wins, 10),
            drivers: buildConstructorDrivers(entry.Constructor.name, driverStandings),
        }));

        return mapped;
    } catch (error) {
        console.error('[Standings] Error fetching constructor standings from Jolpica:', error);
        return fallbackConstructorStandings;
    }
}
