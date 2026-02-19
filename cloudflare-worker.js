export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const targetUrl = url.searchParams.get('url');

        if (!targetUrl) {
            return new Response('Missing "url" parameter', { status: 400 });
        }

        try {
            // Spoof the headers to look like the allowed site
            const modifiedRequest = new Request(targetUrl, {
                method: request.method,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Referer': 'https://westreamf1.com/',
                    'Origin': 'https://westreamf1.com'
                }
            });

            const response = await fetch(modifiedRequest);

            // Create a new response with CORS headers allowed
            const newHeaders = new Headers(response.headers);
            newHeaders.set('Access-Control-Allow-Origin', '*');
            newHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

            // Check if it's the playlist (m3u8) to rewrite URLs
            const contentType = response.headers.get('Content-Type') || '';
            if (contentType.includes('mpegurl') || targetUrl.endsWith('.m3u8')) {
                let text = await response.text();

                // Rewrite absolute URLs to point back to THIS worker
                // We use the worker's own origin as the base
                const workerOrigin = url.origin;
                text = text.split('\n').map(line => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('http') && !trimmed.startsWith('#')) {
                        return `${workerOrigin}?url=${encodeURIComponent(trimmed)}`;
                    }
                    return line;
                }).join('\n');

                return new Response(text, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders
                });
            }

            // Return binary data as-is (with new CORS headers)
            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders
            });

        } catch (e) {
            return new Response(`Proxy error: ${e.message}`, { status: 500 });
        }
    }
};
