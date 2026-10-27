import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Send, Bot, Sparkles, ArrowUpRight, ShieldCheck, Server } from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: string
  chips?: string[]
}

const AMIT_KNOWLEDGE_BASE = {
  profile: {
    name: 'Amit Bhardwaj',
    title: 'Certified Salesforce Technical Architect & Systems Designer',
    location: 'London, United Kingdom',
    experienceYears: '15+',
    linkedin: 'https://www.linkedin.com/in/salesforce-technical-architect/',
    github: 'https://github.com/sfdcai',
    email: 'amit_bhardwaj@live.com',
    specialties: [
      'Enterprise Salesforce Architecture & Multi-Org Strategy',
      'Salesforce DevOps & CI/CD Pipelines (SFDX, Metadata API, CLI)',
      'Salesforce ↔ SAP & ERP Integrations (Event-driven, REST/SOAP)',
      'Autonomous AI Agent Orchestration (n8n, Groq, Ollama, LangChain)',
      'Bare-Metal Infrastructure & SRE (Proxmox VE 9.2, Linux Kernel, LXC/KVM)',
      'Edge Networking & Zero-Trust Security (Cloudflare Zero Trust, OpenWrt, Wi-Fi 6)'
    ]
  },
  salesforce: {
    roles: 'Has led enterprise digital transformations across global companies including Genpact, HCL, and Infomatrix.',
    devops: 'Architected modern source-driven pipelines replacing legacy change sets with automated SFDX validations, scratch orgs, and rollback gates.',
    limitFramework: 'Created LImitDashboard: an enterprise Apex observability framework monitoring governor limits, API consumption, and async apex queues.',
    integrations: 'Deep expertise integrating Salesforce with SAP, Oracle, Stripe, and internal data lakes via real-time streaming, CDC, and microservices.'
  },
  homelab: {
    hypervisor: 'Proxmox VE 9.2 on a Dell Precision 5520 headless server (Linux kernel 7.0.2-4-pve, Intel Core i7-6820HQ, 16GB RAM).',
    containers: 'Runs 12+ micro-segmented LXC containers and QEMU VMs including Home Assistant OS, Immich, Jellyfin, AdGuard Home, Central Hub, and n8n.',
    gpu: 'Intel HD 530 iGPU passed directly to unprivileged LXCs (/dev/dri/renderD128) for AI facial recognition and QuickSync hardware transcoding; NVIDIA Quadro M1200 suspended in D3cold (0W) for energy efficiency.',
    security: 'Zero open public inbound ports; ingress is governed entirely via Cloudflare Zero Trust Tunnels (QUIC/TLS) with DNS sinkholing via AdGuard Home.',
    storage: 'Tiered NVMe PCIe Gen3 for high-IOPS databases, external UAS TB16 pools (4TB ext4, 6TB ext4, 256GB SSD scratch), and ZRAM memory compression.',
    network: 'Netgear WAX206 OpenWrt Gateway with hardware PPE NAT offload, Cudy TR3000 Wi-Fi 6 AP with usteerd client roaming, and strict dual-bridge isolation.'
  },
  aiAgents: {
    emailBrain: 'Smart Email Brain: Ingests automated parent and school emails via Cloudflare Email Routing without open ports, runs n8n workflow extraction, processes semantic dates via Groq Qwen 27B, syncs Google Calendar, and broadcasts ambient HUD alerts to an Android Fotocube frame via PiPup.',
    localSLM: 'Self-hosted Ollama engine running Qwen 2.5 3B directly on CPU on LXC 115 for zero-cloud token economics and edge privacy.',
    frameHarden: 'Custom RK3326 IoT Smart Frame (DPF1501) with zero-teardown automated recovery, pre-authorized root ADB watchdog, and ImmichFrame integration.'
  },
  openSource: {
    showcases: [
      'salesforce-devops-hub: Enterprise CI/CD metadata automation and validation hub.',
      'sfdx-toolkit: Next.js 14 web platform for streamlined Salesforce CLI workflows.',
      'LImitDashboard: Apex governor limits and observability monitoring framework.',
      'curated-bookmarks: Directory of 70+ open-source AI agents, homelab tools, and utilities.',
      'homelab-infrastructure: Centralized Git monorepo tracking 2,700+ commits of live PVE states.'
    ]
  }
}

const DEFAULT_SUGGESTIONS = [
  "What is Amit's architectural experience?",
  "Tell me about his private cloud homelab.",
  "What AI agents has Amit built?",
  "How can I get in touch with Amit?"
]

function getBotResponse(rawQuery: string): { text: string; chips?: string[] } {
  const query = rawQuery.toLowerCase().trim()

  // Guardrail check: Is the query completely off-topic?
  const offTopicTriggers = [
    'poem', 'recipe', 'cook', 'pasta', 'weather', 'crypto to buy',
    'joke about dogs', 'who is the president', 'translate to french',
    'homework', 'solve this math', 'capital of'
  ]
  if (offTopicTriggers.some(t => query.includes(t))) {
    return {
      text: "I am Amit's specialized Digital Twin AI, designed strictly to answer inquiries regarding Amit Bhardwaj's engineering background, enterprise Salesforce architecture, AI agent systems, and homelab infrastructure.\n\nWould you like to explore his technical experience, his published open-source tools, or discuss collaborating?",
      chips: [
        "Amit's Salesforce Architecture",
        "How his Homelab works",
        "AI Agent projects",
        "Contact Information"
      ]
    }
  }

  // Contact & Hiring
  if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('touch') || query.includes('reach') || query.includes('linkedin')) {
    return {
      text: `You can reach Amit Bhardwaj directly:\n\n• **Email**: [${AMIT_KNOWLEDGE_BASE.profile.email}](mailto:${AMIT_KNOWLEDGE_BASE.profile.email})\n• **LinkedIn**: [linkedin.com/in/salesforce-technical-architect](https://www.linkedin.com/in/salesforce-technical-architect/)\n• **GitHub**: [github.com/sfdcai](https://github.com/sfdcai)\n• **Location**: London, United Kingdom\n\nAmit is open to architecture consultations, fractional advisory, and enterprise systems leadership roles.`,
      chips: ["Tell me about his architecture experience", "Explore his GitHub tools"]
    }
  }

  // Salesforce & Enterprise Architecture
  if (query.includes('salesforce') || query.includes('architect') || query.includes('sfdx') || query.includes('apex') || query.includes('devops') || query.includes('sap')) {
    return {
      text: `Amit Bhardwaj is a **Certified Salesforce Technical Architect** with over 15 years of deep enterprise experience:\n\n• **Core Focus**: Enterprise-scale multi-org strategies, governance limit management, and source-driven DevOps.\n• **DevOps & CI/CD**: Standardized automated metadata validations (` + '`sf project deploy validate`' + `) and custom CLI accelerators (` + '`salesforce-devops-hub`' + ` & ` + '`sfdx-toolkit`' + `).\n• **Observability**: Built ` + '`LImitDashboard`' + `, a deployable Apex framework providing real-time telemetry on API consumption, async jobs, and CDC usage.\n• **Enterprise Integrations**: Architected mission-critical event-driven bridges connecting Salesforce with SAP ERP and financial accounting systems.`,
      chips: ["Tell me about his homelab infrastructure", "What AI agents has Amit built?"]
    }
  }

  // Homelab, Proxmox & SRE
  if (query.includes('homelab') || query.includes('proxmox') || query.includes('server') || query.includes('hardware') || query.includes('pve') || query.includes('network') || query.includes('gpu') || query.includes('cloudflare')) {
    return {
      text: `Amit operates an enterprise-grade private cloud and SRE homelab on a headless Dell Precision 5520 server:\n\n• **Hypervisor**: Proxmox VE 9.2 (Debian 13 Trixie kernel 7.0.2-4-pve) running 14+ containerized micro-services and VMs.\n• **Hardware Acceleration**: Intel HD 530 iGPU passed directly to unprivileged LXC containers (` + '`/dev/dri/renderD128`' + `) for AI vector search and hardware video transcoding.\n• **Zero Public Inbound Ports**: Ingress is securely handled through Cloudflare Zero Trust Tunnels (QUIC/TLS) with DNS sinkholing via AdGuard Home.\n• **Storage Tiering**: PCIe Gen3 NVMe for high-IOPS databases, external UAS USB pools (4TB & 6TB), and ZRAM memory compression.\n• **Self-Documenting SRE Engine**: Centralized monorepo with 2,700+ atomic conventional commits synchronized to private GitHub repository ` + '`sfdcai/homelab-infrastructure`' + `.`,
      chips: ["What is the Smart Email Brain?", "How does he manage networking?"]
    }
  }

  // AI Agents, LLMs & Automation
  if (query.includes('agent') || query.includes('ai') || query.includes('llm') || query.includes('brain') || query.includes('n8n') || query.includes('qwen') || query.includes('ollama')) {
    return {
      text: `Amit designs autonomous, production-hardened AI agent systems:\n\n• **Smart Email Brain**: Real-time event extraction engine. Ingests school/parent emails via Cloudflare Email Routing without open ports, routes through n8n, extracts dates & locations using Groq Qwen 27B, schedules Google Calendar events, and sends ambient alerts to an Android IoT frame.\n• **Local SLM Inference**: Runs Ollama with Qwen 2.5 3B on a dedicated unprivileged LXC (115) for offline privacy and zero API token costs.\n• **Agentic Observability & RAG**: Implements structured multi-agent loops, jailbreak firewalls, and self-healing evaluation suites.\n• **IoT Frame Integration**: Custom Android Fotocube frame (RK3326 SoC) with a 3-strike bootloop watchdog and automated zero-teardown recovery.`,
      chips: ["How can I contact Amit?", "Show me his open source projects"]
    }
  }

  // Open Source & GitHub
  if (query.includes('github') || query.includes('repo') || query.includes('open source') || query.includes('project') || query.includes('code')) {
    return {
      text: `Amit maintains several curated open-source repositories on GitHub under [github.com/sfdcai](https://github.com/sfdcai):\n\n1. **portfolio**: This very website, featuring React 19, Vite, Tailwind v4, and Cloudflare Pages edge optimizations.\n2. **salesforce-devops-hub**: Centralized hub for enterprise Salesforce DevOps tools and Vitest automated test suites.\n3. **sfdx-toolkit**: Modern Next.js 14 web platform for synchronous Salesforce CLI workflows.\n4. **LImitDashboard**: Production-ready Apex observability framework for Salesforce governor limits.\n5. **curated-bookmarks**: Curated directory of 70+ open-source AI agents, homelab tools, and developer utilities.`,
      chips: ["Tell me about his Salesforce experience", "How to hire Amit?"]
    }
  }

  // Default Fallback
  return {
    text: `Hello! I am Amit's Digital Twin AI.\n\nI can answer questions regarding Amit Bhardwaj's **15+ years of Salesforce Architecture experience**, his **private cloud homelab & SRE infrastructure**, his **autonomous AI agent workflows**, and how to contact him.\n\nWhat would you like to explore?`,
    chips: DEFAULT_SUGGESTIONS
  }
}

export default function AmitAiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: "👋 Hi! I'm Amit Bhardwaj's Digital Twin AI. Ask me anything about Amit's Salesforce Technical Architecture experience, autonomous AI agents, or his private cloud homelab systems!",
      timestamp: 'Just now',
      chips: DEFAULT_SUGGESTIONS
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Listen for global openChat event (triggered from nav or buttons)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('openChat', handleOpen)
    return () => window.removeEventListener('openChat', handleOpen)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const messageIdRef = useRef(0)

  const handleSend = useCallback((textToSend?: string) => {
    const text = (textToSend || inputValue).trim()
    if (!text) return

    messageIdRef.current += 1
    const currentId = messageIdRef.current
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const userMsg: Message = {
      id: `user-${currentId}`,
      sender: 'user',
      text,
      timestamp: timeStr
    }

    setMessages(prev => [...prev, userMsg])
    if (!textToSend) setInputValue('')
    setIsTyping(true)

    // Simulate realistic digital twin typing cadence (350ms - 650ms)
    setTimeout(() => {
      const response = getBotResponse(text)
      const botMsg: Message = {
        id: `bot-${currentId}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: response.chips
      }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 450)
  }, [inputValue])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Action Badge / Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open Amit AI Chat"
              className="relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-theme text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all border border-white/20"
            >
              <div className="relative">
                <img
                  src="/foto-avatar-sm.webp"
                  alt="Amit Bhardwaj"
                  className="w-7 h-7 rounded-full object-cover border border-white/50"
                  onError={(e) => {
                    // Fallback to bot icon if image fails
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-primary animate-pulse" />
              </div>
              <span className="text-sm font-semibold tracking-wide">Ask Amit AI</span>
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-in Chatbot Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 z-50 w-[94vw] sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/foto-avatar-sm.webp"
                    alt="Amit Bhardwaj"
                    className="w-9 h-9 rounded-full object-cover border-2 border-primary/40 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-card" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm text-foreground">Amit's Digital Twin</h3>
                    <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-primary/20 text-primary border border-primary/30">
                      AI Guardrailed
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500 inline" /> Answers strictly regarding Amit
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-end gap-2 max-w-[88%]">
                    {m.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-1 border border-primary/30">
                        <Bot className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-sm ${
                        m.sender === 'user'
                          ? 'bg-gradient-theme text-white rounded-br-xs font-medium'
                          : 'bg-muted/70 text-foreground border border-border/60 rounded-bl-xs'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground/60 px-1 mt-1">
                    {m.timestamp}
                  </span>

                  {/* Quick-Prompt Suggestion Chips */}
                  {m.chips && m.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 pl-8 max-w-[95%]">
                      {m.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(chip)}
                          className="text-xs px-2.5 py-1 rounded-full bg-card hover:bg-primary/10 text-primary border border-primary/30 hover:border-primary transition-all text-left flex items-center gap-1 shadow-xs"
                        >
                          <span>{chip}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-muted-foreground text-xs pl-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <span className="text-[11px] text-muted-foreground ml-1">Amit AI is thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-card border-t border-border">
              <div className="flex items-center gap-2 bg-muted/50 rounded-xl px-3 py-2 border border-border focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Amit's Salesforce, AI, or homelab..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-hidden"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-1.5 rounded-lg bg-primary text-white hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground/70 mt-1.5 px-1">
                <span>Direct inquiry assistant for Amit Bhardwaj</span>
                <span className="flex items-center gap-1">
                  <Server className="w-2.5 h-2.5 text-primary" /> Edge Inferred
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
