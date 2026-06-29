# Website Portfolio Architecture
## Static Pre-rendering, Typographic Harmony & Observability

## 1. Context
A personal portfolio website (`amitbhardwaj.co.uk`) should be a demonstration of engineering standards, not just a static resume. This project details the design and deployment of my portfolio.

## 2. Technical Stack
* **Frontend:** React 19, TypeScript, Tailwind v4
* **Build System:** Vite, custom prerender scripts
* **Observability:** Langfuse, email notifications (Resend)
* **Hosting:** Cloudflare Pages / GitHub Pages

## 3. Core Capabilities

### Static Prerendering (SSG)
* Configured a custom Node.js pre-rendering engine that compiles React routes into optimized static HTML files during the build phase. This ensures near-zero First Contentful Paint (FCP) and optimal SEO parsing.

### Conversational Chatbot & Observability
* Integrated an AI chatbot running Claude 3.5 Sonnet.
* **Langfuse Tracing:** Traces every decision (RAG database queries, vector embeddings, re-ranking steps) as generation spans to track costs and accuracy.
* **Online Evaluation:** Evaluates safety and quality on every response in the background.

### Premium Design Aesthetics
* Utilizes Outfit and Inter typography from Google Fonts.
* Styled with HSL CSS variables, smooth gradient fills, glassmorphism containers, and interactive dot grids.

## 4. Engineering Impact
* **Page Load Speed:** <200ms TTFB globally via Cloudflare CDN.
* **Search Engine Optimization:** 100/100 Lighthouse SEO score.
