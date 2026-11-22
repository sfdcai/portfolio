import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  X,
  Mail,
  Sun,
  Moon,
  Bot,
  ShieldCheck,
  UserCheck,
  Cpu,
  Sparkles,
  ArrowRight,
  Terminal,
  Database,
  ExternalLink,
  Layers,
  Activity,
  Briefcase,
  Award
} from 'lucide-react'
import type { PersonaType } from './PersonaSwitcher'

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: 'Actions' | 'Personas' | 'Case Studies' | 'Ask Amit AI' | 'Tools & Labs'
  icon: typeof Search
  action: () => void
  keywords?: string[]
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  onSelectPersona?: (p: PersonaType) => void
}

export default function CommandPalette({ isOpen, onClose, onSelectPersona }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Reset query and focus on open
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Handle escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const triggerChat = useCallback((question?: string) => {
    onClose()
    if (question) {
      window.dispatchEvent(new CustomEvent('openChat', { detail: { query: question } }))
    } else {
      window.dispatchEvent(new Event('openChat'))
    }
  }, [onClose])

  const toggleTheme = useCallback(() => {
    if (typeof document === 'undefined') return
    const isDark = document.documentElement.classList.contains('dark')
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    onClose()
  }, [onClose])

  const isDarkMode = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')

  const items: CommandItem[] = useMemo(() => [
    // Quick Actions
    {
      id: 'action-email',
      title: 'Send Email to Amit',
      subtitle: 'hiamitbhardwaj@gmail.com',
      category: 'Actions',
      icon: Mail,
      action: () => {
        if (typeof window !== 'undefined') window.location.href = 'mailto:hiamitbhardwaj@gmail.com'
        onClose()
      },
      keywords: ['contact', 'hire', 'message', 'reach']
    },
    {
      id: 'action-case-studies',
      title: 'Enterprise Architecture Case Studies',
      subtitle: 'Explore 6 verified enterprise crisis turnarounds, FCA redress & SAP S/4HANA decoupling',
      category: 'Actions',
      icon: Layers,
      action: () => {
        navigate('/case-studies')
        onClose()
      },
      keywords: ['cases', 'projects', 'genpact', 'santander', 'danone', 'fca', 'architecture', 'adr']
    },
    {
      id: 'action-awards',
      title: 'Executive Awards & Recognitions',
      subtitle: 'Diamond Award, INCISIVE Award, 4x Gold Awards, and client commendations',
      category: 'Actions',
      icon: Award,
      action: () => {
        navigate('/awards')
        onClose()
      },
      keywords: ['awards', 'honors', 'diamond', 'gold', 'cheers', 'commendation', 'recognition']
    },
    {
      id: 'action-chat',
      title: 'Launch Amit AI Assistant',
      subtitle: 'Chat with digital twin trained on 18+ years of enterprise experience',
      category: 'Actions',
      icon: Bot,
      action: () => triggerChat(),
      keywords: ['bot', 'twin', 'ask', 'interview', 'assistant']
    },
    {
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect on LinkedIn',
      category: 'Actions',
      icon: ExternalLink,
      action: () => {
        if (typeof window !== 'undefined') window.open('https://www.linkedin.com/in/salesforce-technical-architect/', '_blank', 'noopener,noreferrer')
        onClose()
      },
      keywords: ['social', 'network', 'connect']
    },
    {
      id: 'action-theme',
      title: 'Toggle Color Theme',
      subtitle: 'Switch between dark and light mode',
      category: 'Actions',
      icon: isDarkMode ? Sun : Moon,
      action: toggleTheme,
      keywords: ['dark', 'light', 'mode', 'theme', 'color']
    },

    // Persona Views
    {
      id: 'persona-cto',
      title: 'Curate for VP / CTO / Head of Eng',
      subtitle: 'Focus on governance (EAB), crisis turnarounds, and 80-engineer squads',
      category: 'Personas',
      icon: ShieldCheck,
      action: () => {
        onSelectPersona?.('cto')
        onClose()
        if (typeof document !== 'undefined') {
          const el = document.getElementById('projects')
          el?.scrollIntoView({ behavior: 'smooth' })
        }
      },
      keywords: ['executive', 'leadership', 'governance', 'turnaround', 'eab']
    },
    {
      id: 'persona-recruiter',
      title: 'Curate for Enterprise Recruiter',
      subtitle: 'Focus on Genpact Principal tenure, UK/Europe mandate, and right to work',
      category: 'Personas',
      icon: UserCheck,
      action: () => {
        onSelectPersona?.('recruiter')
        onClose()
        if (typeof document !== 'undefined') {
          const el = document.getElementById('experience')
          el?.scrollIntoView({ behavior: 'smooth' })
        }
      },
      keywords: ['hiring', 'recruitment', 'experience', 'tenure', 'contract']
    },
    {
      id: 'persona-architect',
      title: 'Curate for Principal Architect / Builder',
      subtitle: 'Focus on metal-to-cloud, zero-spoofing IoT, and MQTTS brokers',
      category: 'Personas',
      icon: Cpu,
      action: () => {
        onSelectPersona?.('architect')
        onClose()
        if (typeof document !== 'undefined') {
          const el = document.getElementById('projects')
          el?.scrollIntoView({ behavior: 'smooth' })
        }
      },
      keywords: ['systems', 'hardware', 'sre', 'devops', 'kernel', 'proxmox']
    },
    {
      id: 'persona-all',
      title: 'View All Highlights',
      subtitle: 'Reset persona filtering to full portfolio',
      category: 'Personas',
      icon: Sparkles,
      action: () => {
        onSelectPersona?.('all')
        onClose()
      },
      keywords: ['reset', 'everything', 'clear']
    },

    // Case Studies & Deep Dives
    {
      id: 'case-banking',
      title: 'Private Banking Onboarding Turnaround',
      subtitle: 'Commercial onboarding lead times reduced from 36d to 10d (RED to GREEN in 6mo)',
      category: 'Case Studies',
      icon: Briefcase,
      action: () => {
        navigate('/case-studies')
        onClose()
      },
      keywords: ['bank', 'financial', 'redress', 'lead time', 'omnistudio', 'aml', 'kyc']
    },
    {
      id: 'case-fca',
      title: 'FCA Statutory Regulatory Redress Engine',
      subtitle: '1.03M vehicle contracts reconciled with 0 discrepancies & passwordless tokenized IDV',
      category: 'Case Studies',
      icon: ShieldCheck,
      action: () => {
        navigate('/case-studies')
        onClose()
      },
      keywords: ['fca', 'mbfs', 'redress', 'dca', 'finance', 'automotive', 'regulatory']
    },
    {
      id: 'case-sap-decoupling',
      title: 'Global FMCG Order Assist & SAP S/4HANA Decoupling',
      subtitle: 'Transactional outbox pattern and asynchronous order orchestration protecting Core SoR',
      category: 'Case Studies',
      icon: Layers,
      action: () => {
        navigate('/case-studies')
        onClose()
      },
      keywords: ['sap', 's4hana', 'erp', 'mulesoft', 'integration', 'decoupling', 'danone']
    },
    {
      id: 'case-rescuematic',
      title: 'Rescuematic IoT Robotics & Fleet SRE',
      subtitle: '24/7 AWS EC2 & Cloudflare edge platform rescuing 100k+ Rotimatic machines',
      category: 'Case Studies',
      icon: Activity,
      action: () => {
        window.open('https://rescuematic.co.uk', '_blank', 'noopener,noreferrer')
        onClose()
      },
      keywords: ['rotimatic', 'mqtts', 'robotics', 'zero-spoofing', 'ec2']
    },
    {
      id: 'case-homelab',
      title: 'Bare-Metal Proxmox SRE Stack & Network Lab',
      subtitle: 'Dell Precision 5520, Linux 7.0 kernel, ZRAM, and Prometheus/Loki observability',
      category: 'Case Studies',
      icon: Database,
      action: () => {
        navigate('/homelab-network')
        onClose()
      },
      keywords: ['homelab', 'proxmox', 'dell', 'linux', 'kernel', 'lxc']
    },

    // Tools & Labs
    {
      id: 'tool-sfdx',
      title: 'sfdx-toolkit (Internal Developer Platform)',
      subtitle: 'Full-stack React/TypeScript IDP for Salesforce metadata diffing and AST parsing',
      category: 'Tools & Labs',
      icon: Terminal,
      action: () => {
        window.open('https://toolkit.amitbhardwaj.co.uk', '_blank', 'noopener,noreferrer')
        onClose()
      },
      keywords: ['cli', 'toolkit', 'ast', 'idp', 'developer experience']
    },
    {
      id: 'tool-visionvox',
      title: 'VisionVox AI Companion',
      subtitle: 'Real-time multimodal Gemini Live API assistant for the visually impaired',
      category: 'Tools & Labs',
      icon: Bot,
      action: () => {
        window.open('https://visionvox.amitbhardwaj.co.uk', '_blank', 'noopener,noreferrer')
        onClose()
      },
      keywords: ['gemini', 'live', 'websockets', 'accessibility', 'voice']
    },

    // Contextual Ask Amit AI Queries
    {
      id: 'ask-turnaround',
      title: 'Ask AI: How did Amit turn around the private banking onboarding?',
      subtitle: 'Get detailed architectural answer about the 6-month crisis turnaround',
      category: 'Ask Amit AI',
      icon: Bot,
      action: () => triggerChat('Explain the private banking onboarding turnaround in detail'),
      keywords: ['turnaround', 'crisis', 'banking', 'question']
    },
    {
      id: 'ask-leadership',
      title: 'Ask AI: Why hire Amit as Head of Platform Engineering?',
      subtitle: 'Review leadership qualifications, team steering (~80 engineers), and vision',
      category: 'Ask Amit AI',
      icon: Bot,
      action: () => triggerChat('Why hire Amit as Head of Platform Engineering?'),
      keywords: ['head', 'director', 'vp', 'leadership', 'why']
    },
    {
      id: 'ask-rescuematic',
      title: 'Ask AI: How does Rescuematic operate zero-spoofing IoT telemetry?',
      subtitle: 'Learn about ADR-002, MQTTS TLS port 8883, and fleet continuity',
      category: 'Ask Amit AI',
      icon: Bot,
      action: () => triggerChat('How does Rescuematic enforce zero-spoofing IoT telemetry?'),
      keywords: ['rescuematic', 'iot', 'adr', 'spoofing', 'telemetry']
    },
    {
      id: 'ask-foundation',
      title: 'Ask AI: Tell me about Amit\'s experience prior to Genpact',
      subtitle: 'Explore the 11-year foundation in hardware, networking, and early systems',
      category: 'Ask Amit AI',
      icon: Bot,
      action: () => triggerChat('Tell me about his experience prior to Genpact'),
      keywords: ['background', 'history', 'hardware', 'foundation']
    }
  ], [navigate, onClose, onSelectPersona, toggleTheme, triggerChat])

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items

    return items.filter((item) => {
      if (item.title.toLowerCase().includes(q)) return true
      if (item.subtitle && item.subtitle.toLowerCase().includes(q)) return true
      if (item.category.toLowerCase().includes(q)) return true
      if (item.keywords && item.keywords.some((k) => k.toLowerCase().includes(q))) return true
      return false
    })
  }, [items, query])

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0)
  }, [filteredItems])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const selected = filteredItems[selectedIndex]
      if (selected) {
        selected.action()
      }
    }
  }

  // Scroll active item into view
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const activeEl = list.querySelector(`[data-index="${selectedIndex}"]`)
    if (activeEl instanceof HTMLElement) {
      activeEl.scrollIntoView({ block: 'nearest' })
    }
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-card/80">
          <Search className="w-5 h-5 text-primary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, case studies, personas, or ask AI... (↑ ↓ Enter)"
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm sm:text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground border border-border">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-2 divide-y divide-border/20">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              <Bot className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
              <p>No direct match found for "{query}".</p>
              <button
                onClick={() => triggerChat(query)}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold cursor-pointer transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Ask Amit AI about "{query}"
              </button>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon
              const isSelected = index === selectedIndex

              return (
                <div
                  key={item.id}
                  data-index={index}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors duration-150 ${
                    isSelected
                      ? 'bg-primary/15 text-foreground ring-1 ring-primary/40'
                      : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-foreground truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-muted text-muted-foreground border border-border/50 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-xs text-muted-foreground">
                    {isSelected && (
                      <span className="flex items-center gap-1 font-mono text-[11px] text-primary">
                        Jump <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-border bg-muted/20 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
          <div className="flex items-center gap-3">
            <span>↑ ↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-primary font-medium">amitbhardwaj.co.uk</span>
        </div>
      </div>
    </div>
  )
}
