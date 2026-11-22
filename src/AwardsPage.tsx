import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  Bot,
  ChevronRight,
  House,
  Star,
  Quote
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

interface AwardItem {
  id: string
  title: string
  year: string
  category: 'Corporate Excellence' | 'Delivery & Turnaround' | 'Leadership & Integrity'
  badge: string
  badgeColor: string
  organization: string
  description: string
  citation?: string
  citationAuthor?: string
  citationRole?: string
}

const AWARDS: AwardItem[] = [
  {
    id: 'diamond-2018',
    title: 'Diamond Award',
    year: '2018',
    category: 'Corporate Excellence',
    badge: 'Highest Global Honor',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    organization: 'Genpact Global',
    description: 'The highest annual individual corporate excellence recognition at Genpact, awarded for extraordinary contribution to global enterprise architecture standards, strategic technology governance, and cross-functional leadership.',
    citation: 'Awarded for extraordinary technical leadership, raising the engineering bar, and architecting resilient platforms across global squads.'
  },
  {
    id: 'incisive-2021',
    title: 'INCISIVE Award — Intellectual Agility',
    year: '2020 / 2021',
    category: 'Corporate Excellence',
    badge: 'Intellectual Agility',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    organization: 'Genpact UK & Europe',
    description: 'Conferred for exceptional intellectual agility, creative problem-solving, and cross-disciplinary architecture mastery navigating complex, deadlocked enterprise client landscapes and high-stakes transformation programs.',
    citation: 'For outstanding ability to decompose ambiguous enterprise deadlocks into elegant, decoupled technical architectures.'
  },
  {
    id: 'excellence-marketing-2021',
    title: 'Excellence Award — Operating Infrastructure',
    year: '2020 / 2021',
    category: 'Corporate Excellence',
    badge: 'Platform Architecture',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    organization: 'Genpact Corporate Systems',
    description: 'Commended for complete architecture ownership, InfoSec and SOC II / GDPR compliance approvals, and multi-tool platform integration governing Genpact\'s global corporate marketing and CRM operating estate.',
    citation: 'Commended for rigorous architectural governance, zero-compromise security posture, and seamless enterprise integration.'
  },
  {
    id: 'gold-2019-2023',
    title: 'Gold Awards (4x Recipient)',
    year: '2019, 2021, 2022, 2023',
    category: 'Delivery & Turnaround',
    badge: '4x Gold Winner',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    organization: 'Genpact UK & Europe',
    description: 'Quadruple recipient of Genpact\'s annual Gold Excellence Award for continuous technical delivery assurance, mission-critical program turnarounds, and engineering squad mentorship (~80 engineers).',
    citation: 'Sustained platform engineering delivery excellence across major UK and European corporate transformation accounts.'
  },
  {
    id: 'silver-2021',
    title: 'Silver Award — Delivery & Mentorship',
    year: '2021',
    category: 'Delivery & Turnaround',
    badge: 'Delivery Excellence',
    badgeColor: 'border-slate-400/30 bg-slate-400/10 text-slate-300',
    organization: 'Genpact',
    description: 'Recognized for establishing engineering golden paths, developer platform tooling, and elevating cross-functional squad velocity across distributed teams.'
  },
  {
    id: 'spot-cheers-2025',
    title: 'Spot Cheers — Private Bank Turnaround',
    year: 'Sep 2025',
    category: 'Delivery & Turnaround',
    badge: 'Executive Commendation',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    organization: 'Client Delivery Leadership',
    description: 'Awarded by client delivery leadership for steering the Cater Allen / Santander private banking intermediary onboarding platform from RED to GREEN, slashing cycle times from 36 to 10 days and cutting fincrime escalations from 76% to 1%.',
    citation: 'Thank you so much for all the hard work in the Cater Allen project and making it an unequivocal success. A true game changer.',
    citationAuthor: 'Lalit Tyagi',
    citationRole: 'Delivery Leader, Financial Services Practice'
  },
  {
    id: 'bronze-cheers-2025',
    title: 'Bronze Cheers — Integrity & Risk Transparency',
    year: 'Dec 2025',
    category: 'Leadership & Integrity',
    badge: 'Integrity Category',
    badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
    organization: 'Genpact Leadership',
    description: 'Conferred under the corporate "INTEGRITY" pillar for transparent risk flagging, early architectural warning mechanisms, and honest client advisory preventing premature go-lives on legally challenged schemes.',
    citation: 'Recognizing unyielding professional integrity, risk transparency, and outstanding contributions across critical enterprise engagements.'
  },
  {
    id: 'team-cheers-2026',
    title: 'Team Rewards Cheers — Danone Order Assist',
    year: 'May 2026',
    category: 'Leadership & Integrity',
    badge: 'Innovation Award',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    organization: 'Enterprise Transformation Practice',
    description: 'Commended for architecting Genpact\'s first-ever Order Assist solution on Salesforce bridging SAP S/4HANA ERP for Danone North America, owning the MuleSoft/SAP/MDM decoupled integration track.',
    citation: 'This team led the implementation of our very first Order Assist solution on Salesforce... collaborating daily with the customer and helping them re-discover their enterprise systems and processes.',
    citationAuthor: 'Enterprise Client Leadership'
  }
]

const TESTIMONIALS = [
  {
    quote: 'Average end-to-end lead time reduced from 36 days to 10 days; applications returned to customer reduced from 65% to 29%; straight through processing increased from 11% to 70%... exceptional work training and providing guidance to a team of developers.',
    author: 'Julian Villalta',
    role: 'Delivery Lead, Major UK Private Bank Transformation'
  },
  {
    quote: 'Raised by Santander at its executive QBR as a key project in the "digital first with a human touch" pillar. Genpact was named on stage at Santander\'s supplier summit.',
    author: 'Rohan DeSouza',
    role: 'Enterprise Accounts Practice Lead'
  },
  {
    quote: 'A visionary Salesforce Architect who combines deep technical expertise with the ability to lead and inspire teams toward excellence.',
    author: 'Abhay Sharma',
    role: 'Lead Consultant, Enterprise Systems'
  },
  {
    quote: 'There hasn\'t been a time when he did not have an elegant, robust solution to an architectural problem thrown at him.',
    author: 'Jayoti Mitra',
    role: 'AVP, Technology Consulting'
  }
]

export default function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    document.documentElement.lang = 'en'
    document.title = 'Executive Awards, Honors & Recognitions | Amit Bhardwaj'

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = 'Official corporate awards, client commendations, and delivery honors won by Amit Bhardwaj across 8+ years at Genpact and major UK enterprise programs.'

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://amitbhardwaj.co.uk/awards'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filteredAwards = selectedCategory === 'All'
    ? AWARDS
    : AWARDS.filter((a) => a.category === selectedCategory)

  const triggerChat = (prompt: string) => {
    window.dispatchEvent(new CustomEvent('openChat', { detail: { query: prompt } }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground bg-[length:24px_24px] [background-image:radial-gradient(circle,hsl(var(--dot-grid))_1px,transparent_1px)]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <House className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
          <span className="text-foreground font-medium">Awards & Honors</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4 shadow-sm">
            <Award className="w-4 h-4 text-primary" />
            Corporate Honors & Commendations
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Awards & Executive Recognitions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A comprehensive record of annual corporate excellence awards, crisis turnaround commendations, client summit recognitions, and peer testimonials earned over 8+ years at Genpact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Corporate Excellence', 'Delivery & Turnaround', 'Leadership & Integrity'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-theme text-primary-foreground font-semibold shadow-md shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredAwards.map((item) => (
            <SpotlightCard key={item.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary block mb-1">
                      {item.year} · {item.organization}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {item.title}
                    </h2>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border shrink-0 ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                {item.citation && (
                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 text-xs text-muted-foreground italic mb-4">
                    <Quote className="w-3.5 h-3.5 text-primary mb-1 not-italic opacity-70" />
                    "{item.citation}"
                    {item.citationAuthor && (
                      <span className="block mt-2 not-italic font-semibold text-foreground text-[11px]">
                        — {item.citationAuthor}{item.citationRole ? `, ${item.citationRole}` : ''}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">
                  {item.category}
                </span>
                <button
                  onClick={() => triggerChat(`Tell me more about Amit's ${item.title} (${item.year}) and what he delivered to win it.`)}
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  Ask AI About Award
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Leadership & Peer Testimonials Section */}
        <div className="mt-16 pt-12 border-t border-border/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              Executive Endorsements & Quotes
            </h2>
            <p className="text-sm text-muted-foreground">
              What delivery vice presidents, practice heads, and colleagues say about Amit's architectural execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between">
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-border/40">
                  <span className="text-sm font-bold text-foreground block">{t.author}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            Explore Enterprise Architecture Case Studies
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            See the exact systems design, decoupled integration topologies, and problem-solving methodologies that earned these commendations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-md shadow-primary/25"
            >
              View Case Studies & Architecture <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-muted/40 transition-colors"
            >
              ← Back to Overview
            </Link>
          </div>
        </div>

      </main>
    </div>
  )
}
