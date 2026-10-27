import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Shield, Cpu, Network, Layers,
  Bot, Terminal, Activity, CheckCircle2, Lock
} from 'lucide-react'

interface SystemNode {
  id: string
  name: string
  category: 'edge' | 'hypervisor' | 'workloads' | 'ai' | 'iot'
  badge: string
  role: string
  specs: string
  ports?: string
  ingress?: string
  invariant: string
  details: string[]
}

const SYSTEM_NODES: Record<string, SystemNode> = {
  // Edge Layer
  cloudflare: {
    id: 'cloudflare',
    name: 'Cloudflare Zero Trust Edge',
    category: 'edge',
    badge: 'QUIC / Zero Inbound Ports',
    role: 'Global CDN edge, DDoS mitigation, and outbound-only encrypted tunnel ingress.',
    specs: 'Cloudflare Tunnel (cloudflared) on LXC 100',
    ingress: 'https://*.amitbhardwaj.co.uk',
    invariant: 'Zero public inbound ports opened on router or hypervisor. Eliminates public internet port exposure entirely.',
    details: [
      'Encrypted outbound QUIC/TLS tunnels to nearest Cloudflare edge PoPs (London LHR)',
      'Automated SSL termination & modern HTTP/3 transport',
      'Protects internal services: grafana.amitbhardwaj.co.uk, maps.amitbhardwaj.co.uk, email.amitbhardwaj.co.uk'
    ]
  },
  adguard: {
    id: 'adguard',
    name: 'AdGuard Home DNS Sinkhole',
    category: 'edge',
    badge: 'DNS Security / Adblocking',
    role: 'Network-wide DNS sinkholing, malware blocking, and local split-horizon DNS routing.',
    specs: 'LXC 101 | 1 vCPU / 256MB RAM (192.168.1.5:53)',
    ports: 'Port 53 (DNS), Port 3000 (Web UI)',
    invariant: 'Split-horizon DNS rewrites for *.lab.amitbhardwaj.co.uk to internal IP (192.168.1.9) avoids hairpin NAT.',
    details: [
      'Filters 100,000+ ad and tracking domains network-wide',
      'Upstream DNS over HTTPS (DoH) with Quad9 and Cloudflare for encryption',
      'Local DHCP and DNS resolution for all homelab VLANs'
    ]
  },

  // Hypervisor Layer
  pve: {
    id: 'pve',
    name: 'Proxmox VE 9.2 (Bare-Metal)',
    category: 'hypervisor',
    badge: 'Host Hypervisor / Precision 5520',
    role: 'Primary headless bare-metal hypervisor powering all virtualized workloads.',
    specs: 'Intel Core i7-6820HQ (4C/8T @ 3.6 GHz) | 16 GB DDR4 | Linux Kernel 7.0.2-4-pve',
    invariant: 'Preserves strictly >=2.5 GB unallocated RAM for hypervisor kernel operation and ZRAM compression.',
    details: [
      'Host: Dell Precision 5520 headless mobile workstation server with built-in battery/UPS',
      'Automatic shutdown safety guard via pve-battery-monitor.service if battery discharges <= 15%',
      'ZRAM swap (7.7G zstd @ prio 100) handles guest memory compression'
    ]
  },
  igpu: {
    id: 'igpu',
    name: 'Intel HD 530 iGPU & Quadro M1200',
    category: 'hypervisor',
    badge: 'Dual-GPU Orchestration',
    role: 'Hardware QuickSync video transcoding & AI vector search with 0W dGPU standby.',
    specs: 'Intel HD 530 (/dev/dri/renderD128) + NVIDIA Quadro M1200 (D3cold)',
    invariant: 'Intel iGPU is securely mapped to unprivileged LXC containers without giving root host escalation; Quadro dGPU is suspended in D3cold (0W) to prevent heat & power draw.',
    details: [
      'LXC 125 (Immich): Intel QuickSync acceleration for face detection and CLIP neural search',
      'LXC 121 (Jellyfin): 4K HEVC / H.264 real-time hardware transcoding',
      'Quadro M1200 dGPU dynamically enters ACPI D3cold power state drawing 0W at idle'
    ]
  },
  storage: {
    id: 'storage',
    name: 'Multi-Tiered Storage Pools',
    category: 'hypervisor',
    badge: 'Tiered NVMe & UAS Pools',
    role: 'Tiered storage combining ultra-high IOPS databases with multi-terabyte mass archives.',
    specs: 'NVMe Gen3 512GB (local-nvme) + TB16 USB 3.1 Pools (4TB ext4 + 6TB ext4 + 256GB SSD)',
    invariant: 'All external storage drives referenced strictly by UUID in /etc/fstab with nofail and 15s timeout to avoid boot stalls.',
    details: [
      'local-nvme: NVMe-backed rootfs and PostgreSQL databases for Immich and Home Assistant',
      'local-lvm: SATA SSD storage pool for VM templates and core containers',
      '/mnt/hdd4tb & /mnt/hdd6tb: Mass storage archive mounted into CasaOS and SndroidSync'
    ]
  },

  // Active Workloads
  central: {
    id: 'central',
    name: 'Central Hub (LXC 100)',
    category: 'workloads',
    badge: 'Core Services Ingress',
    role: 'Mission control dashboard, documentation wiki, metrics collector, and telemetry.',
    specs: 'LXC 100 | 2 vCPU / 4GB RAM (192.168.1.9)',
    ports: ':80 (Homepage), :3030 (SilverBullet), :3000 (Grafana), :9090 (Prometheus)',
    invariant: 'Homepage dashboard dynamically rebuilt every 5 minutes from live cluster states via homepage_builder.py.',
    details: [
      'SilverBullet: Markdown live knowledge base bound to /opt/homelab-docs with POSIX ACLs',
      'Grafana & Prometheus: Real-time telemetry monitoring vCPU, RAM, thermals, and network bridges',
      'Email Brain UI: Live inbox monitoring and AI workflow inspection'
    ]
  },
  immich: {
    id: 'immich',
    name: 'Immich Server (LXC 125)',
    category: 'workloads',
    badge: 'AI Photo Cloud',
    role: 'Self-hosted Google Photos alternative with AI facial recognition and semantic search.',
    specs: 'LXC 125 | 8 vCPU / 4GB RAM (192.168.1.110:2283)',
    ports: ':2283 (Immich Web & API)',
    invariant: 'High-speed vector DB stored on NVMe storage pool while media binaries stream from multi-terabyte mass archives.',
    details: [
      'Intel QuickSync hardware acceleration enabled for video transcoding',
      'Local machine learning container handles CLIP semantic search and facial clustering',
      'Feeds automated photo streams to Fotocube ambient frame client (:8080)'
    ]
  },
  haos: {
    id: 'haos',
    name: 'Home Assistant OS (VM 120)',
    category: 'workloads',
    badge: 'Smart Home Hub',
    role: 'Automated home management, presence detection, smart energy, and environmental telemetry.',
    specs: 'QEMU VM 120 | 2 vCPU / 4GB RAM (192.168.1.10:8123)',
    ports: ':8123 (Home Assistant)',
    invariant: 'Automatic configuration snapshotting directly extracts configuration.yaml & automations.yaml into the central monorepo.',
    details: [
      'Integrates smart lighting, energy meters, climate sensors, and automated schedules',
      'Bridges with Fotocube ambient Android frame for family calendar alerts',
      'Nightly vzdump backups to fast scratch SSD pool'
    ]
  },

  // AI & Autonomous Pipelines
  emailBrain: {
    id: 'emailBrain',
    name: 'Smart Email Brain Pipeline',
    category: 'ai',
    badge: 'Autonomous AI Ingestion',
    role: 'Zero-inbound autonomous parent/school email parser, event extractor, and calendar scheduler.',
    specs: 'Cloudflare Email Routing ➔ n8n (LXC 102) ➔ Groq Qwen 27B ➔ Google Calendar API',
    invariant: 'Zero mail server ports exposed on host. Entirely event-driven via Cloudflare Edge Webhooks and n8n.',
    details: [
      'Cloudflare Email Routing receives school messages at school@amitbhardwaj.co.uk and pushes payloads via webhook',
      'n8n workflow extracts messy text, tables, and attachments',
      'Groq Qwen 27B model parses dates, times, uniform requirements, and event locations into strict JSON',
      'Google Calendar creates rich event entries and triggers ambient notifications to IoT displays'
    ]
  },
  ollama: {
    id: 'ollama',
    name: 'Ollama Engine (LXC 115)',
    category: 'ai',
    badge: 'Local SLM Inference',
    role: 'Offline, private language model inference running directly on CPU without cloud token cost.',
    specs: 'LXC 115 | 4 vCPU / 3GB RAM (192.168.1.15:11434)',
    ports: ':11434 (Ollama API)',
    invariant: 'Qwen 2.5 3B quantized model optimized for 4 vCPU execution, achieving 18+ tokens/sec on Intel mobile silicon.',
    details: [
      'Provides local semantic embeddings and summarization for internal homelab services',
      '100% private: Zero prompt data or personal information ever leaves the local network',
      'Token budget governance ensures minimal CPU thermal footprint'
    ]
  },

  // IoT & Network Nodes
  openwrt: {
    id: 'openwrt',
    name: 'OpenWrt Wi-Fi 6 Gateway & Mesh',
    category: 'iot',
    badge: 'Network Infrastructure',
    role: 'Core routing, NAT hardware offload, and multi-node Wi-Fi 6 roaming mesh.',
    specs: 'Netgear WAX206 (MT7622) 2.5GbE WAN + Cudy TR3000 (MT7981) Wi-Fi 6 AP',
    invariant: 'Hardware PPE NAT offload enables full 1Gbps line-rate throughput at <2% CPU utilization; Happy Eyeballs CGNAT IPv6 guardrails prevent client latency stalls.',
    details: [
      'Strict separation of LAN (vmbr0) and Router WAN (vmbr1)',
      'usteerd daemon orchestrates seamless 802.11k/v client band steering across APs',
      'Dynamic DHCP reservation flush script prevents stale IP lease conflicts'
    ]
  },
  fotocube: {
    id: 'fotocube',
    name: 'Fotocube Smart Frame (DPF1501)',
    category: 'iot',
    badge: 'Hardened IoT Display',
    role: '15.6" ambient wall display running Immich photo memories and PiPup alert HUD.',
    specs: 'Rockchip RK3326 Quad-Core SoC | 2GB RAM | Android OS (192.168.1.205:5555)',
    invariant: 'Hardened against bootloops: /system kept strictly read-only, pre-authorized root ADB recovery, and 3-strike watchdog script.',
    details: [
      'PiPup service (:7979) receives real-time modal alerts from Smart Email Brain & Home Assistant',
      'ImmichFrame client (:8080) streams curated family memories over LAN',
      'frame-ctl CLI tool provides software-level Loader Mode recovery without physical casing teardown'
    ]
  }
}

const CATEGORIES = [
  { id: 'edge', name: 'Zero-Trust Edge', icon: Shield, count: '2 Services' },
  { id: 'hypervisor', name: 'Proxmox Hypervisor', icon: Cpu, count: 'Precision 5520' },
  { id: 'workloads', name: 'Active Workloads', icon: Layers, count: '14+ Guests' },
  { id: 'ai', name: 'AI & Autonomous Agents', icon: Bot, count: 'Multi-Agent' },
  { id: 'iot', name: 'Hardware & IoT Nodes', icon: Network, count: 'Wi-Fi 6 & RK3326' }
] as const

type CategoryId = typeof CATEGORIES[number]['id']

export default function SystemsArchitecture() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('edge')
  const [selectedNodeId, setSelectedNodeId] = useState<string>('cloudflare')

  const activeNodes = Object.values(SYSTEM_NODES).filter(n => n.category === selectedCategory)
  const activeNode = SYSTEM_NODES[selectedNodeId] || activeNodes[0]

  return (
    <section id="architecture" className="relative py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Infrastructure & Systems Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Autonomous Systems, Hypervisors & Edge Architecture
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Beyond enterprise software, explore the live bare-metal infrastructure, autonomous AI event pipelines, and zero-trust private cloud designed and operated by Amit Bhardwaj.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon
          const isSelected = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id)
                const first = Object.values(SYSTEM_NODES).find(n => n.category === cat.id)
                if (first) setSelectedNodeId(first.id)
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-theme text-white border-transparent shadow-lg shadow-primary/25 scale-[1.02]'
                  : 'bg-card hover:bg-muted/70 text-muted-foreground hover:text-foreground border-border'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'}`}>
                {cat.count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Main Interactive Grid: Node Selector + Live Telemetry Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Node Selection Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between px-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Select Component Node</span>
            <span className="text-xs text-primary flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" /> Live System State
            </span>
          </div>

          <div className="space-y-2.5">
            {activeNodes.map(node => {
              const isActive = selectedNodeId === node.id
              return (
                <motion.button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isActive
                      ? 'bg-card border-primary ring-2 ring-primary/20 shadow-md shadow-primary/10'
                      : 'bg-card/60 hover:bg-card border-border hover:border-border/80 text-muted-foreground'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold text-sm ${isActive ? 'text-primary' : 'text-foreground'}`}>
                        {node.name}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        {node.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                      {node.role}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full shrink-0 mt-1 border-2 ${isActive ? 'bg-emerald-500 border-emerald-300' : 'bg-transparent border-muted-foreground/40'}`} />
                </motion.button>
              )
            })}
          </div>

          {/* Quick Monorepo Tracking Invariant Banner */}
          <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
              <Lock className="w-3.5 h-3.5 text-primary" />
              <span>SRE Governance & Git Monorepo</span>
            </div>
            All guest configs, udev rules, systemd units, and network UCI files are tracked and auto-snapshot every 10 mins into a private Git monorepo linked to GitHub.
          </div>
        </div>

        {/* Right Column: Deep Architectural Node Inspector */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-xl space-y-6"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <h3 className="text-xl font-bold text-foreground">{activeNode.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{activeNode.role}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/30">
                  {activeNode.badge}
                </span>
              </div>

              {/* Hardware / Ingress Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Resource / Hardware Spec
                  </span>
                  <span className="text-xs font-mono font-medium text-foreground block">
                    {activeNode.specs}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Ingress & Routing
                  </span>
                  <span className="text-xs font-mono font-medium text-foreground block truncate">
                    {activeNode.ingress || activeNode.ports || 'Internal Isolated Network'}
                  </span>
                </div>
              </div>

              {/* Architectural Invariant & Problem Solved */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
                <span className="font-bold text-amber-500 uppercase tracking-wider block mb-1">
                  Architectural Guardrail & Invariant
                </span>
                <p className="text-foreground leading-relaxed">
                  {activeNode.invariant}
                </p>
              </div>

              {/* Engineering Details Checklist */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                  Implementation Highlights
                </span>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  {activeNode.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-foreground/90">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
