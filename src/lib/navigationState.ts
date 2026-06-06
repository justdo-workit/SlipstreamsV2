let visitedHome = false;

/**
 * Sets the visited home page flag.
 * Only runs on the client side (window is defined).
 */
export function setVisitedHome(val: boolean) {
    if (typeof window !== 'undefined') {
        visitedHome = val;
    }
}

/**
 * Retrieves the visited home page flag.
 * Safely returns false on the server/SSR.
 */
export function getVisitedHome(): boolean {
    if (typeof window !== 'undefined') {
        return visitedHome;
    }
    return false;
}
