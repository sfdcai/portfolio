import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Network, Bot, ChevronRight, Layers, Building2, ExternalLink } from 'lucide-react'

type DiagramType = 'banking' | 'fmcg' | 'ai-digital-twin'

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<DiagramType>('banking')

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-6 mb-16" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
      <div className="p-6 sm:p-8 rounded-3xl bg-card/90 border border-primary/25 shadow-xl shadow-primary/5 backdrop-blur-md">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-border/70">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                <Network className="w-3.5 h-3.5" />
                High-Level Architecture Previews
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Production Architecture Diagrams & Topologies
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              Examine the actual event-driven decouple patterns, zero-lock outboxes, and serverless edge AI architectures engineered by Amit Bhardwaj.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-xs font-semibold transition-all self-start sm:self-auto shrink-0 shadow-sm"
          >
            <span>All 6 Enterprise Case Studies</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('banking')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'banking'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>UK Private Banking Turnaround</span>
            <span className="text-[10px] font-mono opacity-80">(36d → 10d)</span>
          </button>

          <button
            onClick={() => setActiveTab('fmcg')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'fmcg'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SAP S/4HANA Decoupling</span>
            <span className="text-[10px] font-mono opacity-80">(Outbox Pattern)</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-digital-twin')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'ai-digital-twin'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-muted/50 text-muted-foreground hover:text-cyan-400 hover:bg-muted'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>This Portfolio's Edge AI Twin</span>
            <span className="text-[10px] font-mono opacity-80">(Multi-LLM RAG)</span>
          </button>
        </div>

        {/* Dynamic Diagram Canvas */}
        <div className="p-4 sm:p-6 rounded-2xl bg-background/95 border border-border/80 shadow-inner overflow-x-auto">
          {activeTab === 'banking' && (
            <div className="min-w-[620px]">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-primary font-bold">
                  DECOUPLED MICRO-FRONTEND & ASYNC KYC TRIAGE TOPOLOGY
                </span>
                <span className="text-emerald-400">Escalations: 76% → 1%</span>
              </div>
              <svg viewBox="0 0 680 130" className="w-full h-auto text-xs font-mono">
                <defs>
                  <linearGradient id="grad-blue-home" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="grad-green-home" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* Box 1 */}
                <rect x="10" y="20" width="130" height="70" rx="8" fill="url(#grad-blue-home)" />
                <text x="75" y="50" fill="#ffffff" textAnchor="middle" fontWeight="bold">Intermediary</text>
                <text x="75" y="68" fill="#ffffff" textAnchor="middle" fontSize="10">Experience Cloud</text>

                <path d="M 140 55 L 175 55" stroke="#0ea5e9" strokeWidth="2" />

                {/* Box 2 */}
                <rect x="180" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="250" y="50" fill="#38bdf8" textAnchor="middle" fontWeight="bold">OmniStudio</text>
                <text x="250" y="68" fill="#94a3b8" textAnchor="middle" fontSize="10">Micro-Frontends</text>

                <path d="M 320 55 L 355 55" stroke="#38bdf8" strokeWidth="2" />

                {/* Box 3 */}
                <rect x="360" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                <text x="430" y="48" fill="#10b981" textAnchor="middle" fontWeight="bold">Asynchronous</text>
                <text x="430" y="65" fill="#94a3b8" textAnchor="middle" fontSize="10">KYC Validation</text>
                <text x="430" y="80" fill="#10b981" textAnchor="middle" fontSize="9">76% → 1% Escalations</text>

                <path d="M 500 55 L 535 55" stroke="#10b981" strokeWidth="2" />

                {/* Box 4 */}
                <rect x="540" y="20" width="130" height="70" rx="8" fill="url(#grad-green-home)" />
                <text x="605" y="50" fill="#ffffff" textAnchor="middle" fontWeight="bold">Core Banking</text>
                <text x="605" y="68" fill="#ffffff" textAnchor="middle" fontSize="10">Mainframe Sync</text>
              </svg>
              <div className="mt-3 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-2.5">
                <span>Outcome: Onboarding compressed from 36 days to 10 days (-72%). RED audit turned to GREEN in 6 months.</span>
                <Link to="/case-studies" className="text-primary hover:underline font-semibold flex items-center gap-1">
                  Full Case Study <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'fmcg' && (
            <div className="min-w-[620px]">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-amber-400 font-bold">
                  TRANSACTIONAL OUTBOX PATTERN & SAP S/4HANA CORE DECOUPLING
                </span>
                <span className="text-emerald-400">Lock Drift: 0.00%</span>
              </div>
              <svg viewBox="0 0 680 130" className="w-full h-auto text-xs font-mono">
                {/* Box 1 */}
                <rect x="10" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="80" y="48" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Salesforce UI</text>
                <text x="80" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">CORA Order Assist</text>

                <path d="M 150 55 L 185 55" stroke="#38bdf8" strokeWidth="2" />

                {/* Box 2 */}
                <rect x="190" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
                <text x="260" y="48" fill="#eab308" textAnchor="middle" fontWeight="bold">Outbox Pattern</text>
                <text x="260" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">Zero-Lock Buffer</text>

                <path d="M 330 55 L 365 55" stroke="#eab308" strokeWidth="2" />

                {/* Box 3 */}
                <rect x="370" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                <text x="440" y="48" fill="#10b981" textAnchor="middle" fontWeight="bold">MuleSoft Mesh</text>
                <text x="440" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">Event-Driven Queue</text>

                <path d="M 510 55 L 545 55" stroke="#10b981" strokeWidth="2" />

                {/* Box 4 */}
                <rect x="550" y="20" width="120" height="70" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
                <text x="610" y="48" fill="#f97316" textAnchor="middle" fontWeight="bold">SAP S/4HANA</text>
                <text x="610" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">System-of-Record</text>
              </svg>
              <div className="mt-3 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-2.5">
                <span>Outcome: Decoupled Salesforce UI from SAP transactional locks, ensuring zero SoR deadlock during peak ordering.</span>
                <Link to="/case-studies" className="text-primary hover:underline font-semibold flex items-center gap-1">
                  Full Case Study <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'ai-digital-twin' && (
            <div className="min-w-[620px]">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-cyan-400 font-bold">
                  MULTI-ENGINE SERVERLESS EDGE AI & VECTOR RAG TOPOLOGY (AMITBHARDWAJ.CO.UK)
                </span>
                <span className="text-emerald-400">TTFT &lt; 450ms · Zero Cloud Cold-Start</span>
              </div>
              <svg viewBox="0 0 680 130" className="w-full h-auto text-xs font-mono">
                {/* Box 1 */}
                <rect x="10" y="20" width="130" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="75" y="48" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Client Input</text>
                <text x="75" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">React 19 / SPA</text>

                <path d="M 140 55 L 175 55" stroke="#38bdf8" strokeWidth="2" />

                {/* Box 2 */}
                <rect x="180" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="250" y="48" fill="#f59e0b" textAnchor="middle" fontWeight="bold">Cloudflare Edge</text>
                <text x="250" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">0ms Cold-Start Edge</text>

                <path d="M 320 55 L 355 55" stroke="#f59e0b" strokeWidth="2" />

                {/* Box 3 */}
                <rect x="360" y="20" width="140" height="70" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
                <text x="430" y="45" fill="#a855f7" textAnchor="middle" fontWeight="bold">Multi-Engine AI</text>
                <text x="430" y="62" fill="#94a3b8" textAnchor="middle" fontSize="10">Workers / Gemini / Groq</text>
                <text x="430" y="78" fill="#a855f7" textAnchor="middle" fontSize="9">Automatic Fallback</text>

                <path d="M 500 55 L 535 55" stroke="#a855f7" strokeWidth="2" />

                {/* Box 4 */}
                <rect x="540" y="20" width="130" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                <text x="605" y="48" fill="#10b981" textAnchor="middle" fontWeight="bold">RAG Master Dossier</text>
                <text x="605" y="66" fill="#94a3b8" textAnchor="middle" fontSize="10">Zero-Hallucination</text>
              </svg>
              <div className="mt-3 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-2.5">
                <span>Architecture: Powers the live chat on this site using Cloudflare Workers AI + Gemini 2.5 Flash + Groq fallback with grounded vector RAG.</span>
                <a href="https://github.com/sfdcai/portfolio" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold flex items-center gap-1">
                  GitHub Codebase <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
