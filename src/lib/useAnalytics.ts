"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

/**
 * Fires a `page_view` event whenever the Next.js route changes.
 * Call this once inside a client component that wraps your layout.
 */
export function usePageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        analytics.then((a) => {
            if (!a) return;
            logEvent(a, "page_view", {
                page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
                page_title: document.title,
            });
        });
    }, [pathname, searchParams]);
}

/**
 * Helper to log any named Firebase Analytics event from anywhere in the app.
 * Usage: logAnalyticsEvent("stream_started", { race_slug: "bahrain-2026" })
 */
export async function logAnalyticsEvent(
    eventName: string,
    params?: Record<string, unknown>
) {
    const a = await analytics;
    if (!a) return;
    logEvent(a, eventName, params);
}
