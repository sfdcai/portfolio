import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Network, Cpu, Zap, 
  Play, AlertTriangle, Terminal, 
  ArrowRight
} from 'lucide-react'
import { getTechIcon } from './tech-icons'

type FlowMode = 'enterprise' | 'agentforce' | 'rescuematic'

interface FlowConfig {
  id: FlowMode
  title: string
  subtitle: string
  badge: string
  nodes: {
    id: string
    name: string
    type: string
    tech: string
    details: string
    color: string
  }[]
  sampleEvents: {
    name: string
    payload: Record<string, unknown>
  }[]
}

const FLOWS: Record<FlowMode, FlowConfig> = {
  enterprise: {
    id: 'enterprise',
    title: 'Enterprise Multi-Cloud Event Mesh',
    subtitle: 'Decoupled, event-driven topology bridging Cloud CRM with SAP S/4HANA ERP SoR',
    badge: '100+ Enterprise Deployments',
    nodes: [
      { id: 'crm', name: 'Salesforce Core', type: 'Source / Ingress', tech: 'Salesforce', details: 'Platform Events / CDC (Change Data Capture)', color: '#00A1E0' },
      { id: 'gw', name: 'MuleSoft API Gateway', type: 'Orchestrator', tech: 'MuleSoft', details: 'OAuth JWT · Rate Limiting · Policy Engine', color: '#00A1DF' },
      { id: 'stream', name: 'Kafka Event Stream', type: 'Distributed Bus', tech: 'Kafka', details: 'Partitioned message log · Replay buffer', color: '#E57000' },
      { id: 'sap', name: 'SAP S/4HANA ERP', type: 'System of Record', tech: 'SAP', details: 'Idoc / OData SoR · Financial Postings', color: '#008FD3' },
      { id: 'lake', name: 'AWS Lakehouse', type: 'Analytics Vault', tech: 'AWS', details: 'S3 Parquet · Athena · Zero-Copy Data Cloud', color: '#FF9900' }
    ],
    sampleEvents: [
      { name: 'Order_Dispute__e', payload: { eventId: 'evt_98234', orderNumber: 'ORD-8921-X', disputeType: 'DamagedGoods', amount: 1420.50, currency: 'GBP', status: 'DISPATCHED' } },
      { name: 'Payment_Reconciled__e', payload: { eventId: 'evt_98235', invoiceId: 'INV-4412-Z', sapDocNum: '1900049281', clearedAmount: 1420.50, timestamp: '2026-11-22T19:00:00Z' } },
      { name: 'Inventory_Sync__e', payload: { eventId: 'evt_98236', sku: 'SKU-TURBINE-W9', stockDelta: -2, warehouse: 'UK-NORTH-01', balanceAfter: 148 } }
    ]
  },
  agentforce: {
    id: 'agentforce',
    title: 'Agentforce & Beacon Local MCP Assistant',
    subtitle: 'Autonomous AI Agent with Model Context Protocol & Zero-Egress Air-Gapped RAG',
    badge: 'Sub-Second Local RAG',
    nodes: [
      { id: 'client', name: 'Omni-Channel / Portal', type: 'Ingress UI', tech: 'React', details: 'Natural Language Prompts · WebSocket', color: '#61DAFB' },
      { id: 'agent', name: 'Agentforce Runtime', type: 'Autonomous Agent', tech: 'Agentforce', details: 'Intent Planning · Tool Selection · Guardrails', color: '#00A1E0' },
      { id: 'mcp', name: 'FastMCP Bridge', type: 'Protocol Server', tech: 'FastMCP', details: 'Model Context Protocol · Sub-second dispatch', color: '#D97757' },
      { id: 'chroma', name: 'ChromaDB Local Store', type: 'Vector Database', tech: 'ChromaDB', details: '180+ Enterprise Docs · 0% Cloud Egress', color: '#FF6B6B' },
      { id: 'hitl', name: 'Human-in-the-Loop', type: 'Governance Gate', tech: 'Copado', details: 'Policy Enforcement · Audit Logs', color: '#00B0FF' }
    ],
    sampleEvents: [
      { name: 'Agent_Query_Dispatch', payload: { query: 'Analyze FCA contract redress formula discrepancies across 1.03M agreements', toolRequested: 'beacon_vector_search', topK: 5, latencyMs: 142 } },
      { name: 'FastMCP_Tool_Executed', payload: { status: 'SUCCESS', matchesFound: 12, citations: ['ADR-004-Redress.md', 'FCA-PS26-3-Guidance.pdf'], tokenCount: 840 } },
      { name: 'Autonomous_Action_Validated', payload: { confidence: 0.985, policyViolations: 0, humanReviewRequired: false, action: 'AutoDraft_Summary' } }
    ]
  },
  rescuematic: {
    id: 'rescuematic',
    title: 'Rescuematic IoT Edge-to-Cloud Telemetry',
    subtitle: 'Reverse-engineered MQTTS fleet continuity platform for 100,000+ flatbread appliances',
    badge: 'Port 8883 MQTTS TLS',
    nodes: [
      { id: 'edge', name: 'Rotimatic Robot', type: 'Physical Appliance', tech: 'Linux', details: 'Serial RT8966B085 · 3,871 rotis baked', color: '#FCC624' },
      { id: 'broker', name: 'AWS MQTTS Broker', type: 'Edge Core', tech: 'AWS', details: 'EC2 100.28.34.179 · TLS Handshake :8883', color: '#FF9900' },
      { id: 'fastapi', name: 'FastAPI Telemetry SRE', type: 'Backend API', tech: 'FastAPI', details: 'Python 3.11 · Keepalive & PID loop monitor', color: '#009688' },
      { id: 'redis', name: 'Redis 6 State Store', type: 'In-Memory Cache', tech: 'Redis', details: 'Sub-millisecond state · SQLite WAL sync', color: '#DC382D' },
      { id: 'edgeui', name: 'Cloudflare Pages UI', type: 'Global Edge', tech: 'Cloudflare', details: 'Zero-Spoofing (ADR-002) · Live dashboard', color: '#F38020' }
    ],
    sampleEvents: [
      { name: 'MQTTS_Keepalive_Ping', payload: { serial: 'RT8966B085', keepaliveInterval: 180, platenTempTop: 0.0, platenTempBottom: 0.0, state: 'STANDBY', odometer: 3871 } },
      { name: 'Baking_Telemetry_Telemetry', payload: { recipeId: 'Atta-WholeWheat-Gold', flourWaterRatio: '1.24:1', pressCycleSeconds: 84, heaterActive: true, pidConfidence: 0.992 } },
      { name: 'Zero_Spoofing_Assertion', payload: { adr: 'ADR-002', offlinePlatenRender: '— (dash)', fakeTempInjected: false, verifiedBy: 'RescueEngine_v2' } }
    ]
  }
}

const MASTERED_TECHS = [
  { name: 'Salesforce Core', category: 'CRM & Enterprise Architecture', level: '16+ Yrs · 100+ Projects', desc: 'Sales, Service, Experience, Revenue Cloud, Shield Encryption, Complex Governance' },
  { name: 'Agentforce', category: 'Autonomous AI Agents', level: 'Production Ready', desc: 'Autonomous agent design, Human-in-the-Loop policy enforcement, prompt engineering' },
  { name: 'Data Cloud', category: 'Enterprise Data Mesh', level: 'Architect', desc: 'Zero-Copy architecture, unified customer profile 360, streaming ingest' },
  { name: 'FastMCP', category: 'Model Context Protocol', level: 'Production Lead', desc: 'Creator of Beacon AI assistant, FastMCP RAG servers, sub-second latency' },
  { name: 'MuleSoft', category: 'API-Led Connectivity', level: 'Enterprise Lead', desc: 'API-led 3-tier architectures, JWT security, asynchronous error queues' },
  { name: 'SAP', category: 'ERP System of Record', level: 'Integration Architect', desc: 'S/4HANA ERP decoupling, OData/IDoc synchronization, Order-to-Cash flows' },
  { name: 'Copado', category: 'DevOps & Release Mgmt', level: 'Certified Consultant', desc: 'Automated CI/CD pipelines, scratch org branching, multi-tier compliance gates' },
  { name: 'AWS', category: 'Cloud Infrastructure', level: 'Architect', desc: 'EC2, S3, Athena, IAM, IoT Core, production fleet SRE hosting' },
  { name: 'Kafka', category: 'Event Streaming', level: 'Streaming Lead', desc: 'High-throughput event logs, consumer group partitioning, retry dead-letter queues' },
  { name: 'Python', category: 'Systems & Data Engineering', level: 'Production Lead', desc: 'FastAPI microservices, MQTTS brokers, automated documentation generators' },
  { name: 'ChromaDB', category: 'Local Vector Store', level: 'Local RAG Lead', desc: 'Air-gapped enterprise embeddings, sub-second vector search, zero data egress' },
  { name: 'Linux', category: 'Operating Systems & Bare-Metal', level: '18+ Yrs Foundations', desc: 'Kernel tuning, systemd units, BIND DNS, Proxmox hypervisor clusters' }
]

export default function LiveArchitectureFlow() {
  const [activeMode, setActiveMode] = useState<FlowMode>('enterprise')
  const [pulseStep, setPulseStep] = useState<number>(0)
  const [logs, setLogs] = useState<string[]>([])
  const [isSimulatingFailure, setIsSimulatingFailure] = useState<boolean>(false)

  const activeFlow = FLOWS[activeMode]

  // Animate pulse position across nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseStep(prev => (prev + 1) % activeFlow.nodes.length)
    }, 1200)
    return () => clearInterval(timer)
  }, [activeFlow.nodes.length])

  // Auto-log initial event
  useEffect(() => {
    const initialEvent = activeFlow.sampleEvents[0]
    setLogs([
      `[${new Date().toLocaleTimeString()}] INGRESS: Initialized ${activeFlow.title}`,
      `[${new Date().toLocaleTimeString()}] EVENT: ${initialEvent.name} -> ${JSON.stringify(initialEvent.payload)}`
    ])
    setIsSimulatingFailure(false)
  }, [activeMode])

  const handleEmitEvent = () => {
    const randomEvent = activeFlow.sampleEvents[Math.floor(Math.random() * activeFlow.sampleEvents.length)]
    const newLog = `[${new Date().toLocaleTimeString()}] EMITTED: ${randomEvent.name} -> ${JSON.stringify(randomEvent.payload)}`
    setLogs(prev => [newLog, ...prev.slice(0, 5)])
  }

  const handleSimulateFault = () => {
    setIsSimulatingFailure(true)
    const faultLog = `[${new Date().toLocaleTimeString()}] ALERT: Network transient fault simulated on node 2! Triggering Dead-Letter Queue (DLQ) & retry exponential backoff...`
    const recoveryLog = `[${new Date().toLocaleTimeString()}] RESOLVED: Message retried from DLQ buffer. Transaction preserved with ZERO state loss (Fault-Tolerant Pattern).`
    setLogs(prev => [recoveryLog, faultLog, ...prev.slice(0, 4)])
    setTimeout(() => setIsSimulatingFailure(false), 3000)
  }

  return (
    <section id="live-architecture" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>Interactive Architectural Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Live Working Architecture & Data-Flow Visualizer
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Watch real-time architectural event payloads move across distributed environments, demonstrating decoupled integration patterns, local air-gapped AI agents, and IoT edge resilience.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
        {(Object.keys(FLOWS) as FlowMode[]).map(mode => {
          const flow = FLOWS[mode]
          const isSelected = activeMode === mode
          return (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-theme text-white border-transparent shadow-lg shadow-primary/25 scale-[1.02]'
                  : 'bg-card hover:bg-muted text-muted-foreground hover:text-foreground border-border'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>{flow.title}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'}`}>
                {flow.badge}
              </span>
            </button>
          )
        })}
      </div>

      {/* Architecture Canvas Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden mb-12">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar with Title and Simulator Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6 mb-8 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{activeFlow.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{activeFlow.subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleEmitEvent}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all cursor-pointer shadow-md hover:scale-105"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Emit Test Event</span>
            </button>
            <button
              onClick={handleSimulateFault}
              disabled={isSimulatingFailure}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-destructive/10 text-destructive border border-destructive/30 text-xs font-semibold hover:bg-destructive/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isSimulatingFailure ? 'Self-Healing Active...' : 'Simulate Fault & DLQ'}</span>
            </button>
          </div>
        </div>

        {/* The Live Flow Diagram Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 my-8">
          {activeFlow.nodes.map((node, index) => {
            const isPulse = pulseStep === index
            const isTarget = isSimulatingFailure && index === 2
            const techIcon = getTechIcon(node.tech)

            return (
              <div key={node.id} className="relative flex flex-col items-center">
                {/* Visual Conduit Connector Line (between desktop nodes) */}
                {index < activeFlow.nodes.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[3px] bg-border z-0">
                    {/* Animated moving pulse packet */}
                    {isPulse && (
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                        initial={{ width: '0%', left: '0%' }}
                        animate={{ width: '100%', left: '0%' }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                      />
                    )}
                  </div>
                )}

                {/* Node Box */}
                <div
                  className={`w-full p-5 rounded-2xl border transition-all duration-300 relative z-10 flex flex-col justify-between h-48 ${
                    isTarget
                      ? 'bg-destructive/10 border-destructive shadow-lg shadow-destructive/20 scale-105'
                      : isPulse
                      ? 'bg-card border-primary shadow-xl shadow-primary/20 scale-105 ring-2 ring-primary/40'
                      : 'bg-card/70 border-border/80 hover:border-primary/40'
                  }`}
                >
                  {/* Node Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Hop 0{index + 1}
                    </span>
                    {techIcon && (
                      <div className="w-6 h-6 rounded-lg bg-muted/60 p-1 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill={techIcon.color}>
                          <path d={techIcon.path} />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Node Name & Type */}
                  <div className="my-2">
                    <h4 className="font-bold text-base text-foreground leading-tight">{node.name}</h4>
                    <span className="text-xs text-primary font-medium block mt-0.5">{node.type}</span>
                  </div>

                  {/* Technical Spec / Role */}
                  <div className="pt-2 border-t border-border/60">
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{node.details}</p>
                  </div>

                  {/* Active Indicator Pulse Dot */}
                  <div className="absolute -top-1.5 -right-1.5">
                    {isPulse ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    ) : (
                      <span className="block h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    )}
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {index < activeFlow.nodes.length - 1 && (
                  <div className="md:hidden my-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Live Terminal / Telemetry Event Feed */}
        <div className="mt-8 rounded-2xl bg-neutral-950 p-4 border border-neutral-800 text-xs font-mono text-neutral-300 relative z-10 shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-neutral-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-neutral-200">Live Enterprise Event Bus Log</span>
            </div>
            <span className="text-[10px] text-neutral-400">Buffered In-Flight Messages</span>
          </div>

          <div className="space-y-1.5 overflow-x-auto max-h-36">
            <AnimatePresence initial={false}>
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${idx === 0 ? 'text-emerald-400 font-semibold' : 'text-neutral-400'}`}
                >
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Technologies Mastered Showcase with Verified Impact */}
      <div className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Technologies & Platforms Mastered
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Verified enterprise production track record across 100+ multi-cloud, AI, and distributed systems implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MASTERED_TECHS.map(tech => {
            const icon = getTechIcon(tech.name)
            return (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-muted/60 p-2 flex items-center justify-center">
                      {icon ? (
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill={icon.color}>
                          <path d={icon.path} />
                        </svg>
                      ) : (
                        <Cpu className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                      {tech.level}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground text-base">{tech.name}</h4>
                  <span className="text-xs text-primary font-medium">{tech.category}</span>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
