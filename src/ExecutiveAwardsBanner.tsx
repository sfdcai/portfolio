import { Link } from 'react-router-dom'
import { Trophy, Sparkles, ChevronRight, Star, Bot } from 'lucide-react'

export default function ExecutiveAwardsBanner() {
  const triggerChat = (prompt: string) => {
    window.dispatchEvent(new CustomEvent('openChat', { detail: { query: prompt } }))
  }

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-6 mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/10 via-card to-amber-500/5 border border-amber-500/30 p-5 sm:p-6 shadow-xl shadow-amber-500/5 backdrop-blur-md">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-24 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Executive Honors & Corporate Recognition
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400/90 border border-amber-500/20 hidden sm:inline">
                  8+ Years at Genpact
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                Conferred Genpact's Highest Global Accolades
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => triggerChat('What corporate awards and honors has Amit won at Genpact and on client engagements?')}
              className="px-3 py-1.5 rounded-lg bg-card/80 hover:bg-amber-500/10 text-muted-foreground hover:text-amber-400 border border-border/80 hover:border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Ask AI Citations</span>
            </button>
            <Link
              to="/awards"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:brightness-110 active:brightness-95 transition-all shadow-md shadow-amber-500/20 shrink-0"
            >
              <span>Explore All 8 Honors</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Honors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">

          {/* 1. Diamond Award */}
          <div className="p-3.5 rounded-xl bg-card/80 border border-amber-500/25 hover:border-amber-500/50 transition-all shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                Highest Global Honor
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">2018</span>
            </div>
            <div className="text-sm font-bold text-foreground group-hover:text-amber-400 transition-colors flex items-center gap-1.5 mb-1">
              <span>💎 Diamond Award</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Genpact's highest individual annual corporate excellence recognition globally, conferred for crisis program turnarounds.
            </p>
          </div>

          {/* 2. INCISIVE Award */}
          <div className="p-3.5 rounded-xl bg-card/80 border border-amber-500/25 hover:border-amber-500/50 transition-all shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
                Intellectual Agility
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">2021</span>
            </div>
            <div className="text-sm font-bold text-foreground group-hover:text-amber-400 transition-colors flex items-center gap-1.5 mb-1">
              <span>💡 INCISIVE Award</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Awarded for solving complex multi-cloud architecture challenges and rapid SAP S/4HANA decoupled orchestrations.
            </p>
          </div>

          {/* 3. Quadruple Gold Awards */}
          <div className="p-3.5 rounded-xl bg-card/80 border border-amber-500/25 hover:border-amber-500/50 transition-all shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                4x Recipient
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">2018–2022</span>
            </div>
            <div className="text-sm font-bold text-foreground group-hover:text-amber-400 transition-colors flex items-center gap-1.5 mb-1">
              <span>🥇 4x Gold Awards</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Four-time annual delivery excellence award for governing ~80 engineers and steering client renewals across UK & Europe.
            </p>
          </div>

          {/* 4. Client Commendation */}
          <div className="p-3.5 rounded-xl bg-card/80 border border-amber-500/25 hover:border-amber-500/50 transition-all shadow-sm group">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Private Banking
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">RED → GREEN</span>
            </div>
            <div className="text-sm font-bold text-foreground group-hover:text-amber-400 transition-colors flex items-center gap-1.5 mb-1">
              <span>⭐ Client Commendation</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Recognized by Tier-1 UK Private Banking executive leadership for slashing commercial onboarding from 36d to 10d.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
