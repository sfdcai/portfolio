import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ExternalLink,
  ChevronRight,
  Bot,
  Activity,
  FolderGit2,
  Award
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

export default function BentoProjects() {
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

  return (
    <section id="projects" className="py-16 md:py-24" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1500px' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              Production Platforms & Architecture Bento
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Production systems, architecture crisis turnarounds, and hands-on developer infrastructure designed and operated by Amit Bhardwaj.
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Flagship Card: Rescuematic IoT Robotics Fleet & Cloud Continuity (Wide: 2 cols) */}
          <SpotlightCard className="md:col-span-2 p-6 sm:p-8">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                      Live Cloud Platform · Fleet SRE
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    AWS EC2 + Cloudflare Edge
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Rescuematic — Rotimatic Fleet SRE & Cloud Continuity
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  24/7 cloud continuity, diagnostic telemetry, and fleet SRE platform on AWS EC2 rescuing over <strong className="text-foreground">100,000 orphaned Rotimatic robotic flatbread appliances</strong> worldwide. Features high-concurrency MQTTS broker (port 8883) with mutual TLS, async Python FastAPI, Redis state store, and Cloudflare Pages edge.
                </p>

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
                      {pingActive ? 'Transmitting...' : '⚡ Ping Heartbeat'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-muted-foreground">
                    <div>
                      <span className="block text-[10px] uppercase text-muted-foreground/80">Master Counter</span>
                      <span className="text-foreground font-bold text-sm">3,871 Rotis</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-muted-foreground/80">Platen Temp</span>
                      <span className="text-foreground font-bold text-sm">0.0°C (—)</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-muted-foreground/80">Keepalive Broker</span>
                      <span className="text-emerald-400 font-bold text-sm">180s Active</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-muted-foreground/80">MQTTS Port</span>
                      <span className="text-primary font-bold text-sm">:8883 TLS</span>
                    </div>
                  </div>

                  {pingAck && (
                    <div className="mt-3 pt-2 border-t border-border/40 text-[11px] text-primary animate-in fade-in">
                      {pingAck}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python FastAPI', 'MQTTS Mutual TLS (:8883)', 'Redis', 'AWS EC2', 'Cloudflare Pages', 'IoT Robotics'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-muted text-muted-foreground border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Contextual AI */}
              <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <button
                  onClick={() => triggerChat('How does Rescuematic enforce zero-spoofing IoT telemetry and cloud continuity for 100k+ robots?')}
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium group cursor-pointer transition-colors"
                >
                  <Bot className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                  Ask AI: How does Rescuematic operate zero-spoofing telemetry?
                </button>

                <a
                  href="https://rescuematic.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-primary/20"
                >
                  Explore Platform
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </SpotlightCard>

          {/* 2. sfdx-toolkit (Internal Developer Platform) */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge px-2.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                  DevEx & Tooling
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
                    className={`px-2 py-0.5 rounded ${activeTab === 'diff' ? 'bg-primary/20 text-primary font-bold' : ''}`}
                  >
                    sf metadata:diff
                  </button>
                  <button
                    onClick={() => setActiveTab('manifest')}
                    className={`px-2 py-0.5 rounded ${activeTab === 'manifest' ? 'bg-primary/20 text-primary font-bold' : ''}`}
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

          {/* 3. Major UK Private Bank Onboarding Turnaround */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/20">
                  Banking · Turnaround
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">RED → GREEN (6mo)</span>
              </div>

              <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors mb-2">
                UK Private Bank Onboarding Turnaround
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Turned a distressed multi-million-pound private banking onboarding program from RED to GREEN in 6 months, slashing commercial onboarding lead times and eliminating compliance bottlenecks.
              </p>

              {/* Scorecard Widget */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-background/80 border border-border text-center mb-4">
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Lead Time</span>
                  <span className="text-xs font-bold text-emerald-400">36d → 10d</span>
                  <span className="text-[9px] text-emerald-500 block">(-72%)</span>
                </div>
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Escalations</span>
                  <span className="text-xs font-bold text-emerald-400">76% → 1%</span>
                  <span className="text-[9px] text-emerald-500 block">Compliant</span>
                </div>
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Client CSAT</span>
                  <span className="text-xs font-bold text-primary">4.9 / 5.0</span>
                  <span className="text-[9px] text-muted-foreground block">Top Tier</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {['OmniStudio', 'Core Banking APIs', 'KYC/AML Pipeline', 'Architecture Turnaround'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
              <button
                onClick={() => triggerChat('Explain how Amit turned around the UK private banking commercial onboarding program in 6 months')}
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

          {/* 4. FCA Regulatory Redress Calculation Engine */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge px-2.5 py-0.5 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                  Captive Finance · RegTech
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

          {/* 5. Bare-Metal Hypervisor & SRE Stack (Homelab) */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge px-2.5 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full border border-orange-500/20">
                  DevOps · Metal-to-Cloud
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
                to="/homelab-network"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 shrink-0"
              >
                Explore Lab <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SpotlightCard>

          {/* 6. Beacon — Production AI Knowledge Assistant (Wide on lg: 2 cols) */}
          <SpotlightCard
            className="md:col-span-2 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="badge px-2.5 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                  Model Context Protocol (MCP) · Local RAG
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

          {/* 7. VisionVox AI Companion */}
          <SpotlightCard
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="badge px-2.5 py-0.5 bg-rose-500/10 text-rose-400 text-xs font-semibold rounded-full border border-rose-500/20">
                  Multimodal AI · Accessibility
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

          {/* 8. Executive Awards & Honors Showcase Bento Card */}
          <SpotlightCard
            className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between border-amber-500/30 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-lg shadow-amber-500/5"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="badge px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Executive Honors & Corporate Recognitions
                </span>
                <span className="text-xs font-mono text-muted-foreground">8+ Years at Genpact</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Diamond Award, Intellectual Agility & Client Commendations
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Conferred Genpact's highest individual annual corporate excellence recognition globally (Diamond Award 2018), cross-disciplinary problem-solving honors (INCISIVE Award 2021), quadruple Gold Awards, and client delivery leadership commendations for high-stakes banking program recoveries.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-background/80 border border-border/80 text-xs font-mono mb-6">
                <div className="border-l-2 border-cyan-400 pl-2.5">
                  <span className="text-cyan-400 font-bold block">Diamond Award</span>
                  <span className="text-[10px] text-muted-foreground">Highest Global Honor</span>
                </div>
                <div className="border-l-2 border-purple-400 pl-2.5">
                  <span className="text-purple-400 font-bold block">INCISIVE Award</span>
                  <span className="text-[10px] text-muted-foreground">Intellectual Agility</span>
                </div>
                <div className="border-l-2 border-amber-400 pl-2.5">
                  <span className="text-amber-400 font-bold block">4x Gold Awards</span>
                  <span className="text-[10px] text-muted-foreground">Annual Delivery</span>
                </div>
                <div className="border-l-2 border-emerald-400 pl-2.5">
                  <span className="text-emerald-400 font-bold block">Spot Cheers</span>
                  <span className="text-[10px] text-muted-foreground">Bank Recovery</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => triggerChat("What corporate awards and honors has Amit won at Genpact and on client engagements?")}
                className="text-xs text-primary hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <Bot className="w-3.5 h-3.5" />
                Ask AI: Awards record & citations?
              </button>
              <Link
                to="/awards"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/40 font-semibold text-xs transition-all shadow-sm"
              >
                Explore All 8 Honors & Citations <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  )
}
