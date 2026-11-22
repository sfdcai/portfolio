import { useState, useCallback } from 'react'
import { Bot, Send, Sparkles, ArrowRight } from 'lucide-react'

const SUGGESTED_QUESTIONS = [
  { label: '🚀 Independent Ventures vs Genpact', query: 'What is the difference between your enterprise work at Genpact and independent ventures like Rescuematic?' },
  { label: '⚡ Private Banking Turnaround', query: 'How did you turn around the UK private banking onboarding in 6 months?' },
  { label: '💎 Diamond Award & Honors', query: 'What corporate awards and honors have you won at Genpact?' },
  { label: '🏛️ SAP S/4HANA Decoupling', query: 'Explain how you decoupled Salesforce from SAP S/4HANA without transaction locks.' },
  { label: '🛠️ Bare-Metal Homelab', query: 'Why do you maintain a bare-metal Linux hypervisor and what runs on it?' }
]

export default function HeroChatInput() {
  const [query, setQuery] = useState('')

  const handleSend = useCallback((textToSend?: string) => {
    const q = (textToSend || query).trim()
    if (!q) {
      // If empty, just open chat drawer
      window.dispatchEvent(new Event('openChat'))
      return
    }

    // Dispatch openChat with custom query
    window.dispatchEvent(new CustomEvent('openChat', { detail: { query: q } }))
    setQuery('')
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-2">
      <div className="p-3 sm:p-4 rounded-2xl bg-card/85 backdrop-blur-md border border-primary/30 shadow-xl shadow-primary/5 hover:border-primary/50 transition-all duration-300">

        {/* Live Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-primary" />
              Amit AI Digital Twin
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:inline">
              · Ask anything directly
            </span>
          </div>
          <span className="text-[10px] font-mono text-primary/80 uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
            Trained on 18+ Years Experience
          </span>
        </div>

        {/* Interactive Chat Input Bar */}
        <div className="relative flex items-center bg-background/90 rounded-xl border border-border/80 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-inner">
          <div className="pl-3.5 pr-2 py-3 text-primary">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Amit AI anything... (e.g. 'How did you turn around the private bank?' or 'Tell me about your awards')"
            className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 outline-none pr-3 py-2.5"
            aria-label="Ask Amit AI Digital Twin"
          />
          <button
            onClick={() => handleSend()}
            aria-label="Send query to Amit AI"
            className="mr-2 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-primary/25 cursor-pointer shrink-0"
          >
            <span className="hidden sm:inline">Ask AI</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Suggested Quick Prompt Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-border/40">
          <span className="text-[11px] text-muted-foreground font-medium mr-1 hidden sm:inline">
            Suggested:
          </span>
          {SUGGESTED_QUESTIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(item.query)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-primary/15 hover:border-primary/40 border border-transparent transition-all cursor-pointer text-left"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-2.5 h-2.5 opacity-60" />
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
