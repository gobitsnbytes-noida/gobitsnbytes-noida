# Bits&Bytes Noida

The Noida city fork of [Bits&Bytes](https://gobitsnbytes.org) — a teen-led community where young builders ship publicly.

This fork runs independently in Noida. It shares the Bits&Bytes floor — the Code of Conduct, the founding principles, the non-negotiables — and builds everything else for this city.

> This is a fork, not the parent org. For the canonical Bits&Bytes repo, see [gobitsnbytes/bitsnbytes](https://github.com/gobitsnbytes/bitsnbytes).

---

## What This Fork Is

Bits&Bytes Noida is a local instantiation of the Bits&Bytes idea: get teens building and shipping publicly, in their own city, on their own terms.

We are teen-led. We ship publicly. Everything else is up to us.

For the full network protocol — what every fork preserves and what it must adapt — read the [Fork Protocol](https://perfect-dinghy-781.notion.site/Fork-Protocol-34049ed2fc33814da57ac2f3f704e519).

---

## What This Repo Powers

- Next.js App Router website for community pages, events, projects, join, and contact
- AI assistant API with SSE streaming responses and tool-calling flows
- Semantic search (RAG) over selected site content using embeddings
- Supabase-backed forms and chat session persistence
- Production-oriented frontend with 3D/interactive UI components

## Tech Stack

- **Framework:** Next.js 15, React 19, TypeScript 5
- **Styling/UI:** Tailwind CSS 4, Radix UI, custom animated components
- **Data:** Supabase (PostgreSQL)
- **AI:** OpenAI SDK against Hack Club proxy endpoints
- **Deployment:** Vercel
- **Package manager:** pnpm

---

## Getting Started

### 1. Prerequisites

- Node.js 20+
- pnpm 9+
- A Supabase project
- A Hack Club proxy API key for AI endpoints

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
HACKCLUB_PROXY_API_KEY=...
GOOGLE_SITE_VERIFICATION=...
```

Optional:

```env
NVIDIA_KEY=        # only needed for Stable Diffusion image generation
```

### 4. Run Locally

```bash
pnpm dev
```

App runs at `http://localhost:3000`.

---

## Available Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Run development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages and API routes
│   ├── api/
│   │   ├── assistant/      # AI assistant, feedback, image, voice
│   │   ├── join/           # Join form ingestion
│   │   └── discord/        # Discord-related endpoints
│   └── about/ contact/ events/ impact/ join/ projects/ faq/ ...
├── components/             # Shared and UI components
├── lib/                    # RAG, Supabase, rate limit, sentiment, team logic
├── public/                 # Static assets (images, llms.txt, sitemap, etc.)
├── scripts/
│   └── embed-site.ts       # Embeds selected docs into site_embeddings table
└── types/
```

---

## API Overview

### `POST /api/assistant`

Main AI assistant endpoint.

- **Input:** user message history, current pathname, session ID
- **Output:** `text/event-stream` (SSE) with token streaming and final action payload
- Rate limited to 10 requests/min/IP
- Includes intent bypass, tool-calling loop, model fallback, and optional semantic response cache

### `POST /api/join`

Stores join requests in Supabase `join_requests`.

Required: `name`, `email`, `message`  
Optional: `school`, `experience`, `interests[]`

### `POST /api/assistant/feedback`

Appends per-message feedback into `chat_sessions.feedback` in Supabase.

### `POST /api/assistant/image`

Image generation used by assistant tools. Uses NVIDIA endpoint (`NVIDIA_KEY`) or Hack Club proxy (`HACKCLUB_PROXY_API_KEY`).

---

## Database (Supabase)

Tables expected:

- `join_requests`
- `chat_sessions`
- `site_embeddings` (with vector search support for RAG)
- `contacts`
- `sponsor_leads`

See `TECHNICAL_DOCUMENTATION.md` for schema and function details.

---

## Embedding Site Content for RAG

The script `scripts/embed-site.ts` reads `public/llms.txt` and `agents.md`, generates embeddings, and inserts chunks into `site_embeddings`.

```bash
pnpm tsx scripts/embed-site.ts
```

---

## Deployment

Configured for Vercel via `vercel.json`.

- Install: `pnpm install`
- Build: `pnpm run build`
- Framework: Next.js

Git metadata is injected at build time via `next.config.mjs`.

---

## Known Issues

- `next.config.mjs` has `typescript.ignoreBuildErrors: true` — type errors won't block builds but can hide production issues. Fix in progress.
- Rate limiting in `lib/rate-limit.ts` is in-memory and resets on each deployment. Not suitable for multi-instance production; should move to Redis or an edge-compatible store.

---

## Contributing

1. Create a feature branch
2. Make focused changes
3. Run `pnpm lint` and `pnpm build` locally
4. Open a PR with context and screenshots for any UI work

---

## Code of Conduct

This fork follows the Bits&Bytes Code of Conduct exactly as written.  
Read it at [gobitsnbytes.org/coc](https://gobitsnbytes.org/coc).

---

## License

This repository does not currently include a license file.

---

*Bits&Bytes Noida is a city fork of Bits&Bytes. It is not the parent organization.*
