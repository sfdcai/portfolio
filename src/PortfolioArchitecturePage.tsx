import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Server,
  Zap,
  ShieldCheck,
  Bot,
  Layers,
  ExternalLink,
  House,
  Sparkles,
  Terminal
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function PortfolioArchitecturePage() {
  useEffect(() => {
    document.title = 'Portfolio Architecture & Multi-Engine Edge AI | Amit Bhardwaj'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <House className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-semibold">Portfolio Edge Architecture</li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-12 border-b border-border/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Edge-Native Production Architecture · ADR-009
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering amitbhardwaj.co.uk: Multi-Engine Edge AI, Static SSR & Serverless SRE
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A comprehensive architectural blueprint explaining how this production portfolio and AI Digital Twin was conceived, engineered, and deployed by Amit Bhardwaj—featuring zero-cold-start edge hosting, multi-LLM automated failover, and strict vector RAG grounding.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="https://github.com/sfdcai/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-primary/20"
            >
              <Terminal className="w-3.5 h-3.5" />
              Explore Open Source Codebase
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openChat', { detail: { query: 'How was this portfolio and its edge AI architecture built?' } }))}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-primary/30 hover:bg-primary/10 text-primary font-semibold text-xs transition-all cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              Ask AI Twin About Architecture
            </button>
          </div>
        </header>

        {/* Key Architectural Metric Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14">
          <div className="p-4 rounded-xl bg-card/80 border border-border/80">
            <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">Time to First Token (TTFT)</span>
            <span className="text-2xl font-bold font-display text-cyan-400">&lt; 450ms</span>
            <span className="text-[11px] text-muted-foreground block mt-1">Streaming SSE Edge Response</span>
          </div>

          <div className="p-4 rounded-xl bg-card/80 border border-border/80">
            <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">Hosting Cold-Start</span>
            <span className="text-2xl font-bold font-display text-emerald-400">0.00ms</span>
            <span className="text-[11px] text-muted-foreground block mt-1">Cloudflare Global Edge</span>
          </div>

          <div className="p-4 rounded-xl bg-card/80 border border-border/80">
            <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">SSR Prerendered Pages</span>
            <span className="text-2xl font-bold font-display text-purple-400">22 Pages</span>
            <span className="text-[11px] text-muted-foreground block mt-1">Static Node.js Prerendering</span>
          </div>

          <div className="p-4 rounded-xl bg-card/80 border border-border/80">
            <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">AI Failover Mesh</span>
            <span className="text-2xl font-bold font-display text-amber-400">3 Engines</span>
            <span className="text-[11px] text-muted-foreground block mt-1">Workers AI + Gemini + Groq</span>
          </div>
        </div>

        {/* High-Level Architecture Diagram Canvas */}
        <section className="mb-14">
          <div className="p-6 rounded-2xl bg-card/90 border border-primary/30 shadow-lg">
            <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
              <h2 className="text-lg font-bold font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                End-to-End System Topology: Edge AI & Static SSR Pipeline
              </h2>
              <span className="text-xs font-mono text-emerald-400 font-semibold hidden sm:inline">
                Zero Data Egress · Grounded RAG
              </span>
            </div>

            <div className="overflow-x-auto py-2">
              <div className="min-w-[650px]">
                <svg viewBox="0 0 720 150" className="w-full h-auto text-xs font-mono">
                  <defs>
                    <linearGradient id="grad-cf" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0.85" />
                    </linearGradient>
                    <linearGradient id="grad-ai" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Step 1 */}
                  <rect x="10" y="25" width="130" height="75" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="75" y="55" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Client Device</text>
                  <text x="75" y="73" fill="#94a3b8" textAnchor="middle" fontSize="10">React 19 / Vite</text>
                  <text x="75" y="88" fill="#38bdf8" textAnchor="middle" fontSize="9">Pointer Halo Lerp</text>

                  <path d="M 140 62 L 180 62" stroke="#38bdf8" strokeWidth="2" />

                  {/* Step 2 */}
                  <rect x="185" y="25" width="145" height="75" rx="8" fill="url(#grad-cf)" />
                  <text x="257" y="55" fill="#ffffff" textAnchor="middle" fontWeight="bold">Cloudflare Edge</text>
                  <text x="257" y="73" fill="#ffffff" textAnchor="middle" fontSize="10">Anycast CDN / Tunnels</text>
                  <text x="257" y="88" fill="#ffffff" textAnchor="middle" fontSize="9">_routes.json Edge Rules</text>

                  <path d="M 330 62 L 370 62" stroke="#f59e0b" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="375" y="25" width="155" height="75" rx="8" fill="url(#grad-ai)" />
                  <text x="452" y="53" fill="#ffffff" textAnchor="middle" fontWeight="bold">Multi-Engine Router</text>
                  <text x="452" y="70" fill="#ffffff" textAnchor="middle" fontSize="10">Workers AI (Primary)</text>
                  <text x="452" y="85" fill="#ffffff" textAnchor="middle" fontSize="9">Gemini + Groq Fallback</text>

                  <path d="M 530 62 L 570 62" stroke="#a855f7" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="575" y="25" width="135" height="75" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                  <text x="642" y="55" fill="#10b981" textAnchor="middle" fontWeight="bold">Master RAG Dossier</text>
                  <text x="642" y="73" fill="#94a3b8" textAnchor="middle" fontSize="10">Grounded Career Corpus</text>
                  <text x="642" y="88" fill="#10b981" textAnchor="middle" fontSize="9">Zero Hallucination</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Deep Dive Architectural Pillars */}
        <div className="space-y-10">

          {/* Pillar 1 */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">1. Multi-Engine Serverless Edge AI & Automated Failover Mesh</h3>
                <span className="text-xs font-mono text-cyan-400">Worker Router (worker.ts) · Zero Single Point of Failure</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Single LLM API architectures are inherently fragile in production due to upstream provider rate limits, regional outages, or billing quotas. To achieve five-nines availability, the AI Digital Twin runs an edge orchestration worker on Cloudflare (<code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">worker.ts</code>) implementing an automated multi-engine fallback mesh:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-4">
              <div className="p-3 rounded-lg bg-background/80 border border-border/80">
                <span className="text-emerald-400 font-bold block mb-1">Tier 1: Workers AI</span>
                <span className="text-muted-foreground">@cf/meta/llama-3.1-8b-instruct running on Cloudflare's GPU edge nodes. Lowest latency, zero external API hops.</span>
              </div>

              <div className="p-3 rounded-lg bg-background/80 border border-border/80">
                <span className="text-cyan-400 font-bold block mb-1">Tier 2: Google Gemini</span>
                <span className="text-muted-foreground">Gemini 2.5 Flash API fallback for deep contextual multi-turn reasoning and complex architectural comparisons.</span>
              </div>

              <div className="p-3 rounded-lg bg-background/80 border border-border/80">
                <span className="text-purple-400 font-bold block mb-1">Tier 3: Groq LPU</span>
                <span className="text-muted-foreground">Groq Qwen 2.5 32B running on custom LPU tensor accelerators for ultra-fast fallback token streaming.</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              All responses stream directly to the client browser over Server-Sent Events (SSE) with an average Time-to-First-Token under 450 milliseconds.
            </p>
          </SpotlightCard>

          {/* Pillar 2 */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2. Pre-Rendered Static SSR with Client Hydration (22 Pages)</h3>
                <span className="text-xs font-mono text-purple-400">scripts/prerender.tsx · 100/100 Lighthouse Performance</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Rather than forcing search engine bots and AI crawlers to execute client-side JavaScript, the build pipeline executes a custom headless Node.js pre-rendering harness (<code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">scripts/prerender.tsx</code>) using React 19's <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">renderToString</code>.
            </p>

            <ul className="space-y-2 text-xs text-muted-foreground mb-4 list-disc pl-5">
              <li><strong>Zero Layout Shift (CLS):</strong> Fully rendered semantic HTML is served on initial byte arrival, followed by seamless React hydration (<code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">hydrateRoot</code>).</li>
              <li><strong>AI Engine Optimization (GEO):</strong> Every page includes structured JSON-LD schemas (<code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">TechArticle</code>, <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">Person</code>, <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">BreadcrumbList</code>) ensuring full visibility for Perplexity, Claude, ChatGPT, and Google.</li>
              <li><strong>Critical CSS Inlining:</strong> Built-in <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">critters</code> inliner extracts and embeds critical path CSS, eliminating render-blocking stylesheets.</li>
            </ul>
          </SpotlightCard>

          {/* Pillar 3 */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">3. Zero-Hallucination Vector RAG & Strict Career Grounding</h3>
                <span className="text-xs font-mono text-emerald-400">ADR-002 Grounding · Authoritative Knowledge Corpus</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI assistants commonly hallucinate credentials, past employers, and architecture metrics. The AI Digital Twin operates under strict RAG boundary conditions:
            </p>

            <div className="p-4 rounded-xl bg-background/80 border border-border/80 font-mono text-xs space-y-2 mb-4">
              <div className="text-emerald-400">✓ Grounded strictly against Amit's 18+ year master career dossier and verified project logs.</div>
              <div className="text-emerald-400">✓ Enforces explicit distinction between Genpact enterprise consulting and independent ventures (Rescuematic, sfdx-toolkit).</div>
              <div className="text-rose-400">✕ Refuses to invent unverified project roles, false client names, or speculative certifications.</div>
            </div>

            <p className="text-xs text-muted-foreground">
              When an enterprise visitor asks technical questions regarding FCA redress, SAP decoupling, or MQTTS IoT brokers, the model retrieves verified architectural facts directly from the corpus.
            </p>
          </SpotlightCard>

          {/* Pillar 4 */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">4. Frontend Micro-Interactions & Hardware-Accelerated Physics</h3>
                <span className="text-xs font-mono text-amber-400">TailwindCSS v4 · Lerp Pointer Halo · Spotlight Cards</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The user experience is engineered with GPU-accelerated micro-interactions inspired by Linear, Stripe, and Vercel:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-lg bg-background/80 border border-border/80">
                <span className="text-primary font-bold block mb-1">Smooth Cursor Halo (CursorHalo.tsx)</span>
                <span className="text-muted-foreground">Tracks mouse coordinates with spring-lag linear interpolation (lerp) via requestAnimationFrame. Uses hardware translate3d to avoid layout thrashing.</span>
              </div>

              <div className="p-3.5 rounded-lg bg-background/80 border border-border/80">
                <span className="text-primary font-bold block mb-1">Spotlight Physics (SpotlightCard.tsx)</span>
                <span className="text-muted-foreground">Radial gradient cursor illumination dynamically calculated on mousemove over cards, creating a tactile hardware-level light response.</span>
              </div>
            </div>
          </SpotlightCard>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-border/80 pt-10">
          <h3 className="font-display text-2xl font-bold mb-2">Want to Discuss Platform Engineering or Cloud SRE?</h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
            Get in touch to discuss enterprise architecture, cloud continuity, or large-scale squad governance.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/#contact"
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-primary/20"
            >
              Contact Amit Bhardwaj
            </Link>
            <Link
              to="/"
              className="px-6 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted/50 transition-all"
            >
              Return to Homepage
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
