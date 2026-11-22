import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  House,
  Bot,
  ArrowRight,
  Zap
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'

// Reusable SVG Architecture Diagram Component
function ArchitectureDiagramSvg({ type }: { type: 'banking' | 'fca' | 'fmcg' | 'mandate' | 'provisioning' | 'governance' }) {
  if (type === 'banking') {
    return (
      <div className="p-4 rounded-xl bg-background/90 border border-border/80 my-4 overflow-x-auto">
        <div className="min-w-[500px]">
          <span className="text-[11px] font-mono text-primary font-semibold block mb-2">
            HIGH-LEVEL ARCHITECTURE: DECOUPLED MICRO-FRONTEND & KYC TRIAGE
          </span>
          <svg viewBox="0 0 680 140" className="w-full h-auto text-xs font-mono">
            <defs>
              <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Box 1 */}
            <rect x="10" y="25" width="130" height="70" rx="8" fill="url(#grad-blue)" />
            <text x="75" y="55" fill="#ffffff" textAnchor="middle" fontWeight="bold">Intermediary</text>
            <text x="75" y="72" fill="#ffffff" textAnchor="middle" fontSize="10">Experience Cloud</text>

            <path d="M 140 60 L 175 60" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Box 2 */}
            <rect x="180" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="250" y="55" fill="#38bdf8" textAnchor="middle" fontWeight="bold">OmniStudio</text>
            <text x="250" y="72" fill="#94a3b8" textAnchor="middle" fontSize="10">Micro-Frontends</text>

            <path d="M 320 60 L 355 60" stroke="#38bdf8" strokeWidth="2" />

            {/* Box 3 */}
            <rect x="360" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <text x="430" y="52" fill="#10b981" textAnchor="middle" fontWeight="bold">Asynchronous</text>
            <text x="430" y="68" fill="#94a3b8" textAnchor="middle" fontSize="10">KYC Validation</text>
            <text x="430" y="82" fill="#10b981" textAnchor="middle" fontSize="9">76% → 1% Escalations</text>

            <path d="M 500 60 L 535 60" stroke="#10b981" strokeWidth="2" />

            {/* Box 4 */}
            <rect x="540" y="25" width="130" height="70" rx="8" fill="url(#grad-green)" />
            <text x="605" y="55" fill="#ffffff" textAnchor="middle" fontWeight="bold">Core Banking</text>
            <text x="605" y="72" fill="#ffffff" textAnchor="middle" fontSize="10">Mainframe Sync</text>
          </svg>
        </div>
      </div>
    )
  }

  if (type === 'fca') {
    return (
      <div className="p-4 rounded-xl bg-background/90 border border-border/80 my-4 overflow-x-auto">
        <div className="min-w-[500px]">
          <span className="text-[11px] font-mono text-purple-400 font-semibold block mb-2">
            HIGH-LEVEL ARCHITECTURE: REGULATORY AUDIT LEDGER & TOKENIZED IDV
          </span>
          <svg viewBox="0 0 680 140" className="w-full h-auto text-xs font-mono">
            <defs>
              <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Box 1 */}
            <rect x="10" y="25" width="130" height="70" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <text x="75" y="52" fill="#a855f7" textAnchor="middle" fontWeight="bold">Ingestion Lake</text>
            <text x="75" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">1.03M Contracts</text>

            <path d="M 140 60 L 175 60" stroke="#a855f7" strokeWidth="2" />

            {/* Box 2 */}
            <rect x="180" y="25" width="140" height="70" rx="8" fill="url(#grad-purple)" />
            <text x="250" y="52" fill="#ffffff" textAnchor="middle" fontWeight="bold">Audit Ledger</text>
            <text x="250" y="70" fill="#ffffff" textAnchor="middle" fontSize="10">0.00% Drift Engine</text>

            <path d="M 320 60 L 355 60" stroke="#a855f7" strokeWidth="2" />

            {/* Box 3 */}
            <rect x="360" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="430" y="52" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Passwordless</text>
            <text x="430" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">3-Token IDV</text>

            <path d="M 500 60 L 535 60" stroke="#38bdf8" strokeWidth="2" />

            {/* Box 4 */}
            <rect x="540" y="25" width="130" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <text x="605" y="52" fill="#10b981" textAnchor="middle" fontWeight="bold">MuleSoft Bus</text>
            <text x="605" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">22 API Endpoints</text>
          </svg>
        </div>
      </div>
    )
  }

  if (type === 'fmcg') {
    return (
      <div className="p-4 rounded-xl bg-background/90 border border-border/80 my-4 overflow-x-auto">
        <div className="min-w-[500px]">
          <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-2">
            HIGH-LEVEL ARCHITECTURE: TRANSACTIONAL OUTBOX & SAP S/4HANA DECOUPLING
          </span>
          <svg viewBox="0 0 680 140" className="w-full h-auto text-xs font-mono">
            {/* Box 1 */}
            <rect x="10" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="80" y="52" fill="#38bdf8" textAnchor="middle" fontWeight="bold">Salesforce UI</text>
            <text x="80" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">CORA Order Assist</text>

            <path d="M 150 60 L 185 60" stroke="#38bdf8" strokeWidth="2" />

            {/* Box 2 */}
            <rect x="190" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
            <text x="260" y="52" fill="#eab308" textAnchor="middle" fontWeight="bold">Outbox Pattern</text>
            <text x="260" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">Zero-Lock Buffer</text>

            <path d="M 330 60 L 365 60" stroke="#eab308" strokeWidth="2" />

            {/* Box 3 */}
            <rect x="370" y="25" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <text x="440" y="52" fill="#10b981" textAnchor="middle" fontWeight="bold">MuleSoft Mesh</text>
            <text x="440" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">Event-Driven Queue</text>

            <path d="M 510 60 L 545 60" stroke="#10b981" strokeWidth="2" />

            {/* Box 4 */}
            <rect x="550" y="25" width="120" height="70" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
            <text x="610" y="52" fill="#f97316" textAnchor="middle" fontWeight="bold">SAP S/4HANA</text>
            <text x="610" y="70" fill="#94a3b8" textAnchor="middle" fontSize="10">System-of-Record</text>
          </svg>
        </div>
      </div>
    )
  }

  return null
}

interface CaseStudy {
  id: string
  title: string
  alias: string
  industry: 'Banking & Wealth' | 'Automotive Finance' | 'Consumer Goods (FMCG)' | 'Corporate Banking' | 'Automotive SaaS' | 'Platform Governance'
  role: string
  diagramType?: 'banking' | 'fca' | 'fmcg' | 'mandate' | 'provisioning' | 'governance'
  challenge: string
  solution: string[]
  outcomes: { label: string; value: string; detail?: string }[]
  technologies: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-banking-turnaround',
    title: 'Major UK Private Bank Commercial Onboarding Turnaround',
    alias: 'Major UK Private Banking & Wealth Management Institution (Santander / Cater Allen)',
    industry: 'Banking & Wealth',
    role: 'Solutions Architect & Programme Recovery Lead',
    diagramType: 'banking',
    challenge: 'The private bank\'s intermediary account opening portal was severely distressed (graded RED). Intermediary wealth brokers experienced clunky forms and manual offline KYC validation, taking an average of 36 days to open an account. Compliance review escalations were running at an unsustainable 76%, causing client attrition and regulatory scrutiny.',
    solution: [
      'Performed deep-dive root-cause analysis across frontend workflows, integration bottlenecks, and KYC validation rules.',
      'Architected decoupled micro-frontends with OmniStudio and Financial Services Cloud, featuring progressive form hydration.',
      'Replaced synchronous upload blocks with an asynchronous document processing pipeline decoupled from intermediary browser sessions.',
      'Engineered automated fincrime and KYC triage rules at the ingestion tier, filtering out spurious escalations and routing genuine compliance edge-cases to human risk officers.'
    ],
    outcomes: [
      { label: 'Programme Recovery', value: 'RED to GREEN', detail: 'Turned around in 6 months' },
      { label: 'Onboarding Cycle', value: '36d → 10d', detail: 'Slashed by 72%' },
      { label: 'Fincrime Escalations', value: '76% → 1%', detail: 'Eliminated bottlenecks' },
      { label: 'Intermediary CSAT', value: '4.9 / 5.0', detail: 'Executive QBR highlight' }
    ],
    technologies: ['Salesforce Financial Services Cloud', 'OmniStudio', 'Micro-Frontends', 'Core Banking APIs', 'Asynchronous KYC Triage']
  },
  {
    id: 'case-fca-redress',
    title: 'FCA Statutory Regulatory Redress Calculation Engine',
    alias: 'Major European Automotive Captive Finance Provider (MBFS)',
    industry: 'Automotive Finance',
    role: 'Platform Architect & Regulatory Tech Lead',
    diagramType: 'fca',
    challenge: 'Statutory FCA deadlines required the reconciliation and interest restitution across 1.03 million vehicle financing contracts subject to discretionary commission arrangements (DCA). The platform required immutable calculation auditing with absolute mathematical precision and zero calculation discrepancy under regulatory inspection.',
    solution: [
      'Architected a high-throughput calculation engine executing multi-tier APR and interest redress models against millions of agreement rows.',
      'Designed an immutable calculation audit ledger providing cryptographic trace verification for statutory compliance examiners.',
      'Engineered passwordless 3-attribute tokenized identity verification (DOB, Agreement Number, Postcode) providing frictionless consumer access without credential leaks.',
      'Orchestrated 22 upstream and downstream enterprise interfaces via MuleSoft for automated disbursement and restitution claims.'
    ],
    outcomes: [
      { label: 'Regulatory Compliance', value: '100% On-Time', detail: 'Delivered ahead of statutory date' },
      { label: 'Contracts Reconciled', value: '1,030,000+', detail: 'Zero discrepancy' },
      { label: 'Calculation Drift', value: '0.00%', detail: '100% statutory audit pass' },
      { label: 'Security Tier', value: 'Passwordless', detail: 'Tokenized 3-attribute IDV' }
    ],
    technologies: ['Salesforce Service & Experience Cloud', 'MuleSoft Bus (22 Endpoints)', 'Immutable Audit Ledger', 'Tokenized IDV', 'Data Lake Ingestion']
  },
  {
    id: 'case-fmcg-decoupling',
    title: 'Global FMCG Front-End Order Assist & SAP S/4HANA Decoupling',
    alias: 'Global FMCG & Food Manufacturing Enterprise (Danone)',
    industry: 'Consumer Goods (FMCG)',
    role: 'Enterprise Integration Architect',
    diagramType: 'fmcg',
    challenge: 'Order disputes, claims, and invoice deductions were trapped across SAP S/4HANA ERP modules. Customer service representatives performed slow, manual swivel-chair operations across multiple ERP screens, triggering transaction locks and dragging dispute cycle times.',
    solution: [
      'Architected Genpact\'s first-ever Order Assist (CORA) front-end on Salesforce, unifying order reconciliation, claims, and dispute resolution.',
      'Implemented the Transactional Outbox pattern on Salesforce to buffer ERP writes and eliminate cross-system database deadlocks.',
      'Engineered an asynchronous event-driven integration mesh via MuleSoft connecting to SAP S/4HANA ERP and Master Data Management (MDM).',
      'Standardized the solution into a repeatable SaaS platform sold across international business units.'
    ],
    outcomes: [
      { label: 'Dispute Cycle Time', value: '-50%', detail: 'Cut in half' },
      { label: 'ERP Swivel-Chairing', value: 'Eliminated', detail: 'Single unified console' },
      { label: 'Go-Live UAT', value: '56 / 56 Clean', detail: '0 major defects at launch' },
      { label: 'Industry Commendation', value: 'Team Cheers', detail: 'Awarded May 2026' }
    ],
    technologies: ['Salesforce Service Cloud', 'SAP S/4HANA ERP', 'MuleSoft Event Mesh', 'Transactional Outbox', 'Master Data Management (MDM)']
  },
  {
    id: 'case-corporate-mandate',
    title: 'Corporate Banking Signatory Mandate Blueprint (Milky Way 2.0)',
    alias: 'UK Corporate & Commercial Banking Institution',
    industry: 'Corporate Banking',
    role: 'Principal Solutions Architect (Future-State Architecture)',
    challenge: 'Opening corporate, trust, and multi-currency commercial accounts required navigating intricate multi-tier signatory mandates, board resolution verifications, and cross-border identity hierarchies. Branch staff relied on physical paper signature cards causing weeks of verification latency.',
    solution: [
      'Authored the target-state architectural blueprint (BP-1) for complex corporate account opening and multi-party mandate resolution.',
      'Designed a dynamic mandate rules engine that automatically verifies signing authority combinations (e.g. "Any 2 Directors or 1 Director + Company Secretary").',
      'Engineered decoupled event-driven integration patterns connecting digital capture front-ends with mainframe core banking registers.'
    ],
    outcomes: [
      { label: 'Target Blueprint', value: 'Adopted (BP-1)', detail: 'Enterprise architectural standard' },
      { label: 'Mandate Automation', value: '100% Digital', detail: 'Replaced manual signature cards' },
      { label: 'Audit Trail', value: 'Cryptographic', detail: 'Statutory compliance ready' }
    ],
    technologies: ['Corporate Mandate Engine', 'Multi-Party Digital Signing', 'Mainframe Core Banking Sync', 'Architecture Blueprinting']
  },
  {
    id: 'case-automotive-saas',
    title: 'Automotive Retail SaaS Dealership Provisioning Engine',
    alias: 'Tier-1 Automotive Retail SaaS Provider (10,000+ Dealerships)',
    industry: 'Automotive SaaS',
    role: 'Enterprise Platform Architect',
    challenge: 'Onboarding new franchise dealership rooftops required days of manual, error-prone software package installations, configuration scripting, and custom integration alignments across 10,000+ car dealerships across North America, resulting in high onboarding churn.',
    solution: [
      'Designed a centralized, declarative metadata-driven provisioning orchestrator that automated the complete onboarding lifecycle of dealership tenants.',
      'Engineered asynchronous message queues and REST/WebSocket integration pipelines connecting cloud configuration stores to localized dealership server agents.',
      'Implemented deterministic state-machine workflows with automated rollback hooks, ensuring that any failed provisioning step restored the tenant to a known-clean baseline.'
    ],
    outcomes: [
      { label: 'Onboarding Lead Time', value: '-65%', detail: 'Days reduced to hours' },
      { label: 'Scale Covered', value: '10,000+ Rooftops', detail: 'Across North America' },
      { label: 'Cutover Downtime', value: '0 Hours', detail: 'Seamless background deployment' }
    ],
    technologies: ['Declarative Metadata Orchestrator', 'WebSockets / REST Queues', 'Deterministic State Engine', 'Automated Rollback Hooks']
  },
  {
    id: 'case-platform-gov',
    title: 'Enterprise Platform Engineering & Architecture Review Board',
    alias: 'Global Professional Services & Digital Operations Firm (Genpact)',
    industry: 'Platform Governance',
    role: 'Senior Salesforce Architect & Chair, Architecture Review Board (EAB)',
    challenge: 'Governing 100+ parallel business initiatives across global engineering delivery organizations (~80 resources) while preventing technical debt accumulation, managing Copado CI/CD release gating, and satisfying stringent InfoSec, SOC II, and GDPR compliance mandates.',
    solution: [
      'Chaired the Enterprise Architecture Review Board (EAB) and InfoSec design reviews, enforcing standardized design sign-off gates.',
      'Designed reusable component models, golden paths, and automated CI/CD pipelines using Copado and GitHub Actions.',
      'Built custom Internal Developer Platform tooling (sfdx-toolkit) for metadata diffing, AST dependency visualization, and sub-second manifest generation.'
    ],
    outcomes: [
      { label: 'Initiatives Governed', value: '100+ Projects', detail: 'Across UK, Europe & US squads' },
      { label: 'Engineering Squads', value: '~80 Engineers', detail: 'Cross-functional delivery teams' },
      { label: 'Corporate Honors', value: 'Diamond Award', detail: 'Highest annual corporate honor' }
    ],
    technologies: ['Enterprise Architecture Governance (EAB)', 'Copado CI/CD', 'Shield Platform Encryption', 'SOC II / GDPR', 'sfdx-toolkit IDP']
  }
]

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All')

  useEffect(() => {
    document.documentElement.lang = 'en'
    document.title = 'Enterprise Architecture Case Studies | Amit Bhardwaj'

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = 'In-depth enterprise platform architecture case studies: crisis turnarounds, statutory FCA redress, and decoupled SAP S/4HANA systems designed and operated by Amit Bhardwaj.'

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://amitbhardwaj.co.uk/case-studies'

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = selectedIndustry === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.industry === selectedIndustry)

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
          <span className="text-foreground font-medium">Enterprise Case Studies</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4 shadow-sm">
            <Layers className="w-4 h-4 text-primary" />
            Verified Enterprise Case Studies & ADRs
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Enterprise Architecture Case Studies
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real-world enterprise system designs, crisis program turnarounds, and decoupled integrations. Client identities are protected under standard enterprise NDA aliases.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Banking & Wealth', 'Automotive Finance', 'Consumer Goods (FMCG)', 'Corporate Banking', 'Platform Governance'].map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedIndustry === ind
                  ? 'bg-gradient-theme text-primary-foreground font-semibold shadow-md shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {filtered.map((study) => (
            <SpotlightCard key={study.id} className="p-6 sm:p-8">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 font-mono">
                    {study.industry}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    Role: {study.role}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {study.title}
                </h2>
                <p className="text-xs text-primary/90 font-mono mb-6">
                  {study.alias}
                </p>

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    The Architectural Challenge:
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* High-Level Architecture Diagram */}
                {study.diagramType && (
                  <ArchitectureDiagramSvg type={study.diagramType} />
                )}

                {/* Solutions & ADRs */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-primary" />
                    Architectural Solutions & Decisions (ADRs):
                  </h3>
                  <ul className="space-y-2">
                    {study.solution.map((sol, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scorecard Outcomes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-background/80 border border-border/80 mb-6">
                  {study.outcomes.map((o, oIdx) => (
                    <div key={oIdx}>
                      <span className="block text-[10px] text-muted-foreground uppercase font-mono">{o.label}</span>
                      <span className="text-base sm:text-lg font-bold text-foreground">{o.value}</span>
                      {o.detail && <span className="block text-[10px] text-primary">{o.detail}</span>}
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs bg-muted text-muted-foreground border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Contextual AI Trigger */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => triggerChat(`Explain the architectural decisions and outcomes of: ${study.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium cursor-pointer"
                  >
                    <Bot className="w-4 h-4" />
                    Ask AI about this architecture
                  </button>
                  <Link
                    to="/awards"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Related Honors <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            Interested in Platform Leadership or Architecture Advisory?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Amit is open to conversations regarding Head of Platform Engineering, Enterprise Architect, and Technology Director appointments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hiamitbhardwaj@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-md shadow-primary/25"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
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
