import { ShieldCheck, UserCheck, Cpu, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export type PersonaType = 'all' | 'cto' | 'recruiter' | 'architect'

interface PersonaSwitcherProps {
  activePersona: PersonaType
  onSelectPersona: (p: PersonaType) => void
}

const PERSONA_CONFIG: Record<PersonaType, {
  label: string
  shortLabel: string
  icon: typeof Sparkles
  description: string
  highlightSummary: string
}> = {
  all: {
    label: 'All Highlights',
    shortLabel: 'All',
    icon: Sparkles,
    description: 'Comprehensive overview of executive architecture, cloud platforms, and hands-on systems engineering.',
    highlightSummary: 'Showing full executive dossier across enterprise architecture, crisis turnarounds, and cloud platforms.'
  },
  cto: {
    label: 'VP / CTO / Head of Eng',
    shortLabel: 'CTO / VP',
    icon: ShieldCheck,
    description: 'Enterprise governance (EAB/ARB), crisis program turnarounds (RED to GREEN), 80-engineer squad steering, and decoupled SAP S/4HANA architecture.',
    highlightSummary: '🎯 Tailored for Tech Executives: Highlighting Architecture Review Boards (EAB), crisis turnarounds (RED to GREEN in 6mo), ~80 engineer governance, and zero-loss core systems decoupling.'
  },
  recruiter: {
    label: 'Enterprise Recruiter',
    shortLabel: 'Recruiter',
    icon: UserCheck,
    description: '18+ years experience, 8+ years at Genpact (Senior Salesforce Architect), UK & European mandate, London-based British Citizen.',
    highlightSummary: '💼 Tailored for Recruiters: Highlighting UK & Europe delivery mandate, Genpact Principal tenure, British citizenship (Right to Work in UK), and core enterprise leadership qualifications.'
  },
  architect: {
    label: 'Principal Architect / Builder',
    shortLabel: 'Architect',
    icon: Cpu,
    description: 'Metal-to-cloud foundations, Proxmox Linux kernel SRE, high-concurrency MQTTS broker, and zero-spoofing IoT telemetry.',
    highlightSummary: '⚡ Tailored for Architects & SREs: Highlighting metal-to-cloud foundation, zero-spoofing IoT robotics telemetry (ADR-002), high-throughput MQTTS :8883 brokers, and custom IDP platforms.'
  }
}

export default function PersonaSwitcher({ activePersona, onSelectPersona }: PersonaSwitcherProps) {
  const current = PERSONA_CONFIG[activePersona]

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Selector Container */}
      <div className="p-1.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2 py-1 mb-1">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Curate website for your role:
          </span>
          {activePersona !== 'all' && (
            <button
              onClick={() => onSelectPersona('all')}
              className="text-xs text-primary hover:underline font-medium cursor-pointer"
            >
              Reset to all highlights
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {(Object.keys(PERSONA_CONFIG) as PersonaType[]).map((key) => {
            const config = PERSONA_CONFIG[key]
            const Icon = config.icon
            const isSelected = activePersona === key

            return (
              <button
                key={key}
                onClick={() => onSelectPersona(key)}
                className={`relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-primary-foreground font-semibold shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activePersonaPill"
                    className="absolute inset-0 rounded-xl bg-gradient-theme shadow-md shadow-primary/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                  <span className="hidden md:inline">{config.label}</span>
                  <span className="md:hidden">{config.shortLabel}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Dynamic Persona Callout Banner */}
      {activePersona !== 'all' && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-3 p-3.5 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-start gap-2.5 text-xs sm:text-sm text-foreground"
        >
          <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 animate-ping" />
          <p className="leading-relaxed">
            {current.highlightSummary}
          </p>
        </motion.div>
      )}
    </div>
  )
}
