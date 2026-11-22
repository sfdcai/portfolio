import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ExternalLink,
  ChevronRight,
  Bot,
  Activity,
  FolderGit2,
  Award,
  Rocket,
  Building2,
  Terminal,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function BentoProjects() {
  const [filter, setFilter] = useState<'all' | 'independent' | 'enterprise'>('all')

  // Simulated IoT Ping State for Rescuematic
  const [pingActive, setPingActive] = useState(false)
  const [pingAck, setPingAck] = useState<string | null>(null)

  // DevEx Terminal active tab for sfdx-toolkit
  const [activeTab, setActiveTab] = useState<'diff' | 'manifest'>('diff')

  const triggerChat = useCallback((question: string) => {
    window.dispatchEvent(new CustomEvent('openChat', { detail: { query: question } }))
  }, [])

  const handleSimulatePing = () => {
    setPingActive(true)
    setPingAck('Sending MQTT SUBSCRIBE (Port 8883)...')
    setTimeout(() => {
      setPingAck('✓ SUBACK received: [Sub, SysSub, FwuS] · 22ms latency')
      setPingActive(false)
    }, 600)
  }

  const showIndependent = filter === 'all' || filter === 'independent'
  const showEnterprise = filter === 'all' || filter === 'enterprise'

  return (
    <section id="projects" className="py-16 md:py-24" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1500px' }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              Systems Architecture, Ventures & Enterprise Portfolio
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Explore hands-on production systems, independent IoT ventures, and Fortune 500 enterprise client transformations delivered by Amit Bhardwaj.
            </p>
          </div>
          <a
            href="https://github.com/sfdcai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card/80 hover:bg-primary/5 hover:border-primary/50 text-xs font-semibold transition-all duration-200 self-start sm:self-auto shrink-0 shadow-sm"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-primary" />
            GitHub Profile
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </a>
        </div>

        {/* Category Filter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-card/70 border border-border/70 backdrop-blur-md shadow-sm w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
            }`}
          >
            All Work (9)
          </button>
          <button
            onClick={() => setFilter('independent')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              filter === 'independent'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            Independent Ventures & OSS (6)
          </button>
          <button
            onClick={() => setFilter('enterprise')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              filter === 'enterprise'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Client Engagements · Genpact (3)
          </button>
        </div>

        {/* SECTION 1: Independent Engineering Ventures & Open Source */}
        {showIndependent && (
          <div className="mb-14">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
              <div>
                <h3 className="font-display text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Rocket className="w-4 h-4" />
                  </span>
                  Independent Engineering Ventures & Open Source
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 max-w-3xl">
                  First-principles IoT protocol reverse engineering, bare-metal Linux SRE, and developer tooling architected, built, and operated independently by Amit Bhardwaj outside of corporate client consulting.
                </p>
              </div>
              <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto shrink-0">
                6 Production Systems & AI Platforms
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* 1. Flagship Card: Rescuematic IoT Robotics Fleet & Cloud Continuity (Wide: 2 cols) */}
              <SpotlightCard className="md:col-span-2 p-6 sm:p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                          <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                          Independent Venture · Production IoT SaaS
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:inline" />
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                        AWS EC2 + Cloudflare Edge
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Rescuematic — Rotimatic Fleet SRE & Cloud Continuity
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      24/7 cloud continuity, diagnostic telemetry, and fleet SRE platform on AWS EC2 rescuing over <strong className="text-foreground">100,000 orphaned Rotimatic robotic flatbread appliances</strong> worldwide. Features high-concurrency MQTTS broker (port 8883) with mutual TLS, async Python FastAPI, Redis state store, and Cloudflare Pages edge.
                    </p>

                    {/* Independent Distinction Callout */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground bg-muted/40 px-3 py-2 rounded-lg border border-border/50 mb-6">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><strong>Independent Platform:</strong> Conceived & built independently to rescue orphaned household robotics after manufacturer liquidation. Not affiliated with Genpact or Zimplistic.</span>
                    </div>

                    {/* Live Simulated Telemetry Dashboard Widget */}
                    <div className="p-4 rounded-xl bg-background/80 border border-border/80 shadow-inner mb-6 font-mono text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <span className="text-foreground font-semibold">Live Telemetry Simulator (ADR-002 Zero-Spoofing)</span>
                        </div>
                        <button
                          onClick={handleSimulatePing}
                          disabled={pingActive}
                          className="px-2.5 py-1 rounded bg-primary/15 hover:bg-primary/25 text-primary text-[11px] font-sans font-semibold transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {pingActive ? 'Simulating Broker Ping...' : '▶ Ping MQTTS :8883'}
                        </button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-muted-foreground">
                        <div>
                          <span className="text-[10px] uppercase block">Appliance Serial</span>
                          <span className="text-foreground font-bold">RT8966B085</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase block">Hardware ID</span>
                          <span className="text-foreground font-bold">ZM82406MEB085</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase block">Culinary Counter</span>
                          <span className="text-emerald-400 font-bold">3,871 Rotis</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase block">Broker Keepalive</span>
                          <span className="text-foreground font-bold">180s (3-Topic)</span>
                        </div>
                      </div>

                      {pingAck && (
                        <div className="mt-3 pt-2 border-t border-border/40 text-emerald-400 text-[11px] animate-fadeIn">
                          {pingAck}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {['MQTTS Port 8883', 'AWS EC2', 'Python FastAPI', 'Redis 6', 'Cloudflare Pages', 'Zero-Spoofing ADR-002'].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-secondary text-secondary-foreground font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => triggerChat('How does Rescuematic enforce zero-spoofing IoT telemetry and cloud continuity for 100k+ robots?')}
                      className="text-xs text-primary hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
                    >
                      <Bot className="w-3.5 h-3.5" />
                      Ask AI: How does Rescuematic operate zero-spoofing telemetry?
                    </button>
                    <a
                      href="https://rescuematic.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-primary/20"
                    >
                      Visit Rescuematic.co.uk <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              {/* 2. sfdx-toolkit (Internal Developer Platform) */}
              <SpotlightCard className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20 flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-blue-400" />
                      Independent Open Source
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">&lt; 42ms AST Parse</span>
                  </div>

                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    sfdx-toolkit (Internal Developer Platform)
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Full-stack TypeScript/React Internal Developer Platform (IDP) for Salesforce metadata dependency visualization, permission set diffing, package manifest generation, and deployment automation.
                  </p>

                  {/* Mini DevEx Terminal Mock */}
                  <div className="rounded-lg bg-background/90 border border-border p-3 font-mono text-[11px] mb-4">
                    <div className="flex items-center gap-2 border-b border-border/50 pb-1.5 mb-2 text-muted-foreground">
                      <button
                        onClick={() => setActiveTab('diff')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${activeTab === 'diff' ? 'bg-primary/20 text-primary font-bold' : ''}`}
                      >
                        sf metadata:diff
                      </button>
                      <button
                        onClick={() => setActiveTab('manifest')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${activeTab === 'manifest' ? 'bg-primary/20 text-primary font-bold' : ''}`}
                      >
                        package.xml gen
                      </button>
                    </div>
                    {activeTab === 'diff' ? (
                      <div className="text-muted-foreground">
                        <span className="text-emerald-400">$ sf-toolkit diff --env staging</span><br />
                        <span>✓ 142 metadata types indexed (38ms)</span><br />
                        <span className="text-primary">✓ 0 circular dependencies detected</span>
                      </div>
                    ) : (
                      <div className="text-muted-foreground">
                        <span className="text-emerald-400">$ sf-toolkit manifest:build</span><br />
                        <span>✓ Wildcard expanded for CustomField</span><br />
                        <span className="text-primary">✓ package.xml written (1.2KB)</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['TypeScript', 'React', 'Vite', 'AST Parsing', 'Caddy'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('Why did Amit build sfdx-toolkit and how does it optimize enterprise Salesforce developer experience?')}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: Why build an IDP?
                  </button>
                  <a
                    href="https://toolkit.amitbhardwaj.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
                  >
                    Try App <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>

              {/* 3. Bare-Metal Hypervisor & SRE Stack (Homelab) */}
              <SpotlightCard className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/20 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-orange-400" />
                      Independent Lab · Bare-Metal SRE
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">Linux 7.0 Kernel</span>
                  </div>

                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    Bare-Metal Hypervisor & SRE Stack
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Production-grade Dell Precision headless server running Proxmox VE 9.2, ZRAM memory compression, Intel QuickSync iGPU transcoding, and an integrated Prometheus, Grafana, and Loki observability pipeline.
                  </p>

                  {/* Hardware & Node specs widget */}
                  <div className="p-3 rounded-lg bg-background/80 border border-border space-y-1.5 font-mono text-[11px] mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Compute:</span>
                      <span className="text-foreground font-semibold">i7-6820HQ (8T) · 16GB ZRAM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hypervisor:</span>
                      <span className="text-primary font-semibold">Proxmox VE 9.2 (Debian 13)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Observability:</span>
                      <span className="text-emerald-400 font-semibold">Prometheus + Loki + Grafana</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Proxmox VE', 'Linux Kernel SRE', 'Prometheus', 'Grafana', 'Loki'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('Why does Amit maintain a bare-metal homelab and how does it support his enterprise architecture work?')}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: Why bare metal?
                  </button>
                  <Link
                    to="/articles/homelab-network"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
                  >
                    Explore Lab <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>

              {/* 4. Beacon — Production AI Knowledge Assistant (Wide on lg: 2 cols) */}
              <SpotlightCard className="md:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Independent AI Platform · FastMCP RAG
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">180+ Enterprise Documents</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                    Beacon — Production AI Knowledge Assistant
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Production AI Knowledge Assistant connecting large enterprise document libraries to Claude via Model Context Protocol (FastMCP) and local ChromaDB RAG. Processes 180+ project documents with sub-second query latency and zero data leaving the client environment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-background/80 border border-border font-mono text-xs mb-4">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">Protocol</span>
                      <span className="text-cyan-400 font-bold">FastMCP Standard</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">Vector Store</span>
                      <span className="text-foreground font-bold">Local ChromaDB RAG</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">Privacy Boundary</span>
                      <span className="text-emerald-400 font-bold">Zero Data Egress</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['FastMCP', 'Claude Desktop', 'ChromaDB', 'Local RAG', 'Python', 'Enterprise Privacy'].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-xs bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('What is Model Context Protocol (MCP) and how does Beacon implement local RAG without data egress?')}
                    className="text-xs text-primary hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    Ask AI: How does Beacon implement MCP RAG?
                  </button>
                  <a
                    href="https://toolkit.amitbhardwaj.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"
                  >
                    View Architecture <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>

              {/* 5. VisionVox AI Companion */}
              <SpotlightCard className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-rose-500/10 text-rose-400 text-xs font-semibold rounded-full border border-rose-500/20 flex items-center gap-1.5">
                      <Bot className="w-3 h-3 text-rose-400" />
                      Independent AI · Multimodal Live
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">Gemini Live API</span>
                  </div>

                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    VisionVox AI Companion
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Low-latency, real-time voice and vision assistant for the visually impaired. Built using Gemini Multimodal Live API over WebSockets, performing spatial quadrant scans, real-time OCR, and proactive safety hazard alerts.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Gemini Live API', 'WebSockets', 'React', 'Spatial Audio', 'Real-Time OCR'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('How does VisionVox assist visually impaired users using multimodal Gemini Live WebSockets?')}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: VisionVox mechanics?
                  </button>
                  <a
                    href="https://visionvox.amitbhardwaj.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
                  >
                    Try Live <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>

              {/* 6. Portfolio Edge AI Digital Twin (Wide: 2 cols) */}
              <SpotlightCard className="md:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Independent Venture · Serverless Edge Architecture
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Zero Cloud Cold-Start · TTFT &lt; 450ms</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                    Portfolio Edge AI Digital Twin & High-Performance Architecture
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The very production application you are experiencing right now. Engineered as an edge-native portfolio with React 19, 22-page pre-rendered static SSR, and an automated multi-engine AI streaming backend (Cloudflare Workers AI, Google Gemini 2.5 Flash, and Groq Qwen 2.5 32B fallback).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-background/80 border border-border font-mono text-xs mb-4">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">Hosting & CDN</span>
                      <span className="text-foreground font-bold">Cloudflare Pages Edge</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">AI Fallback Mesh</span>
                      <span className="text-cyan-400 font-bold">Workers AI + Gemini + Groq</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block">Grounding Mode</span>
                      <span className="text-emerald-400 font-bold">Strict RAG · 0 Hallucination</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['React 19', 'Cloudflare Pages', 'Workers AI', 'Gemini 2.5 Flash', 'Groq', 'RAG Vector Grounding', 'TailwindCSS'].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-xs bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('How was this portfolio website and its multi-engine AI digital twin built?')}
                    className="text-xs text-primary hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    Ask AI: How does this portfolio work?
                  </button>
                  <a
                    href="https://github.com/sfdcai/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"
                  >
                    View GitHub Repo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </SpotlightCard>

            </div>
          </div>
        )}

        {/* SECTION 2: Enterprise Client Transformations (Genpact Tenure) */}
        {showEnterprise && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
              <div>
                <h3 className="font-display text-xl font-bold flex items-center gap-2 text-foreground">
                  <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Building2 className="w-4 h-4" />
                  </span>
                  Enterprise Client Transformations (Genpact Tenure)
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 max-w-3xl">
                  High-stakes regulatory turnarounds, Architecture Review Board (EAB) governance, and large-scale squad leadership (~80 engineers) delivered for Fortune 500 & FTSE 100 enterprise clients during 8+ years at Genpact.
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  NDA Sanitized
                </span>
                <Link
                  to="/case-studies"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  All 6 Case Studies <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* 1. Major UK Private Bank Onboarding Turnaround */}
              <SpotlightCard className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-blue-400" />
                      Enterprise Client (Genpact)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">RED → GREEN (6mo)</span>
                  </div>

                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    UK Private Bank Onboarding Turnaround
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Turned a distressed multi-million-pound private banking onboarding program from RED to GREEN in 6 months, slashing commercial onboarding lead times and eliminating compliance bottlenecks.
                  </p>

                  {/* Architecture Metrics */}
                  <div className="p-3 rounded-lg bg-background/80 border border-border space-y-1.5 font-mono text-[11px] mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Onboarding Speed:</span>
                      <span className="text-foreground font-semibold">36 days → 10 days (-72%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Compliance SLA:</span>
                      <span className="text-primary font-semibold">100% On-Time Delivery</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Audit Exception:</span>
                      <span className="text-emerald-400 font-semibold">Zero critical findings</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Private Wealth', 'FCA Compliance', 'KYC/AML', 'Micro-Frontends', 'OmniStudio'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('How did Amit turn around the UK private bank commercial onboarding program in 6 months?')}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: Turnaround strategy?
                  </button>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
                  >
                    View Case Study <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>

              {/* 2. FCA Regulatory Redress Calculation Engine */}
              <SpotlightCard className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20 flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-purple-400" />
                      Enterprise Client (Genpact)
                    </span>
                    <span className="text-[11px] font-mono text-purple-400">1.03M Contracts</span>
                  </div>

                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    FCA Regulatory Redress Engine
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Architected the statutory calculation and customer restitution platform reconciling over 1.03 million vehicle financing agreements under strict FCA deadlines with zero calculation discrepancies.
                  </p>

                  {/* Metric stats */}
                  <div className="p-3 rounded-lg bg-background/80 border border-border space-y-1.5 font-mono text-[11px] mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reconciliation Scale:</span>
                      <span className="text-foreground font-semibold">1,030,000+ files</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IDV Security:</span>
                      <span className="text-primary font-semibold">Tokenized 3-attribute</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Calculation Drift:</span>
                      <span className="text-emerald-400 font-semibold">0.00% (100% Audit pass)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['High-Throughput Ingestion', 'Audit Ledger', 'Tokenized IDV', 'Experience Cloud'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat('How was the FCA regulatory redress calculation engine architected to prevent discrepancies?')}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: RegTech architecture?
                  </button>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
                  >
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>

              {/* 3. Executive Awards & Honors Showcase Bento Card */}
              <SpotlightCard className="md:col-span-2 lg:col-span-1 p-6 flex flex-col justify-between border-amber-500/30 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-lg shadow-amber-500/5">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Corporate Honors · Genpact Tenure
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">8+ Years at Genpact</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Diamond Award, INCISIVE & Global Honors
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    Conferred Genpact's highest individual annual corporate excellence recognition globally (Diamond Award 2018), intellectual agility honors (INCISIVE 2021), quadruple Gold Awards, and banking program recoveries.
                  </p>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-background/80 border border-border/80 text-xs font-mono mb-4">
                    <div className="border-l-2 border-cyan-400 pl-2">
                      <span className="text-cyan-400 font-bold block text-[11px]">Diamond Award</span>
                      <span className="text-[10px] text-muted-foreground">Highest Global Honor</span>
                    </div>
                    <div className="border-l-2 border-purple-400 pl-2">
                      <span className="text-purple-400 font-bold block text-[11px]">INCISIVE Award</span>
                      <span className="text-[10px] text-muted-foreground">Intellectual Agility</span>
                    </div>
                    <div className="border-l-2 border-amber-400 pl-2">
                      <span className="text-amber-400 font-bold block text-[11px]">4x Gold Awards</span>
                      <span className="text-[10px] text-muted-foreground">Annual Excellence</span>
                    </div>
                    <div className="border-l-2 border-emerald-400 pl-2">
                      <span className="text-emerald-400 font-bold block text-[11px]">Spot Cheers</span>
                      <span className="text-[10px] text-muted-foreground">Bank Recovery</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => triggerChat("What corporate awards and honors has Amit won at Genpact and on client engagements?")}
                    className="text-[11px] text-primary hover:underline flex items-center gap-1 cursor-pointer truncate font-medium"
                  >
                    <Bot className="w-3 h-3 shrink-0" />
                    Ask AI: Awards record?
                  </button>
                  <Link
                    to="/awards"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 shrink-0"
                  >
                    All 8 Honors <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
