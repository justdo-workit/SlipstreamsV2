"use client";

import { usePageView } from "@/lib/useAnalytics";

/**
 * Drop this anywhere in your layout tree (inside a Suspense boundary).
 * It renders nothing — it only tracks page views via Firebase Analytics.
 */
export default function Analytics() {
    usePageView();
    return null;
}
