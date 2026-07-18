# Cloudflare Deployment Guide

This project consists of two components:
1. **Next.js Web App** (Frontend): Deployed to **Cloudflare Pages** as a static website.
2. **CORS/HLS Proxy Worker** (`cloudflare-worker.js`): Deployed to **Cloudflare Workers**.

---

## 1. CORS Proxy (Cloudflare Worker)

The file `cloudflare-worker.js` is a Cloudflare Worker used to proxy streams and add CORS headers.

### Deploying via CLI
To deploy the worker, make sure you have authenticated your Wrangler CLI first:

```bash
# Log in to your Cloudflare account
npx wrangler login

# Deploy the worker
npm run deploy:worker
```

Once deployed, Cloudflare will output the URL of the worker (e.g., `https://slipstreams-proxy.<your-subdomain>.workers.dev`). You can update the `STREAMS.DEFAULT` URL in `src/components/video/StreamController.tsx` with this URL if needed.

---

## 2. Next.js Web Application (Cloudflare Pages)

Because `next.config.ts` is configured with `output: 'export'`, the Next.js app builds into static files in the `out/` directory.

There are two ways to deploy the Next.js frontend to Cloudflare Pages:

### Method A: Git Integration (Recommended)
This automatically redeploys your site every time you push to your Git repository:

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure the build settings as follows:
   * **Framework preset**: `Next.js (Static HTML Export)`
   * **Build command**: `npm run build`
   * **Build output directory**: `out`
4. Click **Save and Deploy**.

### Method B: Command Line (CLI)
You can deploy directly from your local terminal:

```bash
# Log in to your Cloudflare account (if not already logged in)
npx wrangler login

# Build and deploy the application
npm run deploy:pages
```

When running `deploy:pages` for the first time, Wrangler will ask if you want to create a new project. Select yes and follow the prompts.
