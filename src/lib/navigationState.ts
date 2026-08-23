let visitedHome = false;

export const NAVIGATION_CONFIG = {
    /**
     * Master switch to enable or disable the Home Page Watch Live reload gate.
     * When true: 1st click reloads the home page (2nd load), 2nd click proceeds to the Race page with full reload.
     * When false: 1st click navigates directly to the Race page.
     */
    enableHomeReloadGate: true,

    /**
     * Number of reloads required on the home page before unlocking navigation to the Race page.
     * Default: 1 (Landed = 1st load, 1st click reloads = 2nd load, 2nd click proceeds to Page 2).
     */
    requiredHomeReloads: 1,
};

const RELOAD_COUNT_KEY = 'slipstreams_home_watch_reload_count';
const VISITED_HOME_KEY = 'slipstreams_visited_home';

/**
 * Sets the visited home page flag.
 * Only runs on the client side (window is defined).
 */
export function setVisitedHome(val: boolean) {
    if (typeof window !== 'undefined') {
        visitedHome = val;
        try {
            if (val) {
                sessionStorage.setItem(VISITED_HOME_KEY, 'true');
            } else {
                sessionStorage.removeItem(VISITED_HOME_KEY);
            }
        } catch {
            // Ignore storage quota/permission issues
        }
    }
}

/**
 * Retrieves the visited home page flag.
 * Safely returns false on the server/SSR.
 */
export function getVisitedHome(): boolean {
    if (typeof window !== 'undefined') {
        if (visitedHome) return true;
        try {
            return sessionStorage.getItem(VISITED_HOME_KEY) === 'true';
        } catch {
            return false;
        }
    }
    return false;
}

/**
 * Gets the current count of home page reloads for the Watch Live gate.
 */
export function getHomeWatchReloadCount(): number {
    if (typeof window === 'undefined') return 0;
    try {
        const val = sessionStorage.getItem(RELOAD_COUNT_KEY);
        return val ? parseInt(val, 10) : 0;
    } catch {
        return 0;
    }
}

/**
 * Increments the reload count for the Watch Live gate.
 */
export function incrementHomeWatchReloadCount(): number {
    if (typeof window === 'undefined') return 0;
    try {
        const next = getHomeWatchReloadCount() + 1;
        sessionStorage.setItem(RELOAD_COUNT_KEY, next.toString());
        return next;
    } catch {
        return 0;
    }
}

/**
 * Resets the reload count.
 */
export function resetHomeWatchReloadCount(): void {
    if (typeof window === 'undefined') return;
    try {
        sessionStorage.removeItem(RELOAD_COUNT_KEY);
    } catch {
        // Ignore
    }
}

/**
 * Handles clicks on the Watch Live button on the Home Page.
 * Implements the 2-step reload logic and does a full browser reload navigation
 * to the Race Page (Page 2) instead of keeping SPA client state.
 */
export function handleWatchLiveClick(
    targetUrl: string,
    router?: { push: (url: string) => void }
) {
    if (typeof window === 'undefined') return;

    if (!NAVIGATION_CONFIG.enableHomeReloadGate) {
        setVisitedHome(true);
        window.location.href = targetUrl;
        return;
    }

    const currentReloads = getHomeWatchReloadCount();

    if (currentReloads < NAVIGATION_CONFIG.requiredHomeReloads) {
        // 1st click: Increment reload count and reload the Home Page (producing 2nd load)
        incrementHomeWatchReloadCount();
        window.location.reload();
    } else {
        // 2nd click: Target threshold reached -> full browser reload navigation to Page 2 (Race details)
        setVisitedHome(true);
        // Reset counter so future visits/manual refreshes start the 2-step cycle afresh
        resetHomeWatchReloadCount();
        window.location.href = targetUrl;
    }
}
