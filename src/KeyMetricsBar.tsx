import { Layers, Users, Database, Zap } from 'lucide-react'

const METRICS = [
  {
    value: '18+ Years',
    label: 'Enterprise & Systems Depth',
    sublabel: '8+ yrs Genpact Principal Architect · 11-yr systems foundation',
    icon: Layers,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/25 hover:border-cyan-500/50',
    bgLight: 'bg-cyan-500/10'
  },
  {
    value: '~80 Squad',
    label: 'Global Governance (EAB)',
    sublabel: 'Chaired Architecture Review Boards & InfoSec design reviews',
    icon: Users,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/25 hover:border-purple-500/50',
    bgLight: 'bg-purple-500/10'
  },
  {
    value: '1.03M',
    label: 'FCA RegTech Contracts',
    sublabel: 'Statutory redress calculated with 0.00% drift · 100% Big 4 audit',
    icon: Database,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/25 hover:border-amber-500/50',
    bgLight: 'bg-amber-500/10'
  },
  {
    value: '-72%',
    label: 'Banking Onboarding Lead Time',
    sublabel: 'Slashing commercial KYC from 36d to 10d (RED to GREEN in 6mo)',
    icon: Zap,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/25 hover:border-emerald-500/50',
    bgLight: 'bg-emerald-500/10'
  }
]

export default function KeyMetricsBar() {
  return (
    <section className="relative z-20 max-w-5xl mx-auto px-6 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon
          return (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-card/85 backdrop-blur-md border ${metric.borderColor} shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-lg ${metric.bgLight} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div>
                <div className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground leading-snug mb-1">
                  {metric.label}
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed hidden sm:block">
                  {metric.sublabel}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
