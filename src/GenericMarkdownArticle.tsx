import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { parseMarkdown } from './markdown-parser'
import { useArticleSeo } from './articles/use-article-seo'
import { ArticleLayout } from './articles/components'
import ReactMarkdown from 'react-markdown'
import { ArrowRight, Terminal, Network, Cpu, Layers, Database } from 'lucide-react'

// Custom premium SVG for Salesforce <-> SAP Integration
function SalesforceSapDiagram() {
  return (
    <div className="my-8 p-6 rounded-2xl bg-card border border-border/80 shadow-xl max-w-xl mx-auto">
      <h4 className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
        Integration Data Flow
      </h4>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Salesforce Node */}
        <div className="flex flex-col items-center p-4 rounded-xl bg-primary/10 border border-primary/30 w-36 text-center">
          <Layers className="w-8 h-8 text-primary mb-2" />
          <span className="font-semibold text-sm">Salesforce</span>
          <span className="text-[10px] text-muted-foreground">CRM Platform</span>
        </div>

        {/* Bi-directional arrows */}
        <div className="flex sm:flex-col items-center gap-1 text-muted-foreground">
          <ArrowRight className="w-5 h-5 hidden sm:block rotate-0" />
          <span className="text-xs font-mono font-bold text-accent">REST/Event</span>
          <ArrowRight className="w-5 h-5 rotate-180 hidden sm:block" />
          <span className="sm:hidden text-lg font-bold">⇄</span>
        </div>

        {/* Middleware Node */}
        <div className="flex flex-col items-center p-4 rounded-xl bg-accent/10 border border-accent/30 w-36 text-center shadow-lg shadow-accent/5">
          <Network className="w-8 h-8 text-accent mb-2 animate-pulse" />
          <span className="font-semibold text-sm">Middleware</span>
          <span className="text-[10px] text-muted-foreground">ESB / Mulesoft</span>
        </div>

        {/* Bi-directional arrows */}
        <div className="flex sm:flex-col items-center gap-1 text-muted-foreground">
          <ArrowRight className="w-5 h-5 hidden sm:block" />
          <span className="text-xs font-mono font-bold text-primary">OData/RFC</span>
          <ArrowRight className="w-5 h-5 rotate-180 hidden sm:block" />
          <span className="sm:hidden text-lg font-bold">⇄</span>
        </div>

        {/* SAP Node */}
        <div className="flex flex-col items-center p-4 rounded-xl bg-muted border border-border w-36 text-center">
          <Cpu className="w-8 h-8 text-muted-foreground mb-2" />
          <span className="font-semibold text-sm">SAP ERP</span>
          <span className="text-[10px] text-muted-foreground">Enterprise Core</span>
        </div>
      </div>
    </div>
  )
}

// Custom premium SVG for AI Agent Architecture
function AiAgentDiagram() {
  return (
    <div className="my-8 p-6 rounded-2xl bg-card border border-border/80 shadow-xl max-w-2xl mx-auto">
      <h4 className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
        Agent Execution Pipeline
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* User Input */}
        <div className="flex flex-col items-center p-4 rounded-xl bg-muted border border-border text-center">
          <Terminal className="w-8 h-8 text-muted-foreground mb-2" />
          <span className="font-semibold text-sm">User</span>
          <span className="text-[10px] text-muted-foreground">Prompt / Event</span>
        </div>

        {/* Central Orchestrator Agent */}
        <div className="flex flex-col items-center p-5 rounded-xl bg-primary/10 border border-primary/40 text-center shadow-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-[9px] uppercase tracking-wider font-semibold text-primary">
            Orchestrator
          </div>
          <Cpu className="w-10 h-10 text-primary mb-2 animate-[spin_10s_linear_infinite]" />
          <span className="font-semibold text-sm">AI Agent</span>
          <span className="text-[10px] text-muted-foreground">LLM Reasoning Loop</span>
        </div>

        {/* Resources Group */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <Network className="w-5 h-5 text-accent shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs">Tools & APIs</div>
              <div className="text-[9px] text-muted-foreground">Salesforce / External integrations</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-border">
            <Layers className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs">Memory System</div>
              <div className="text-[9px] text-muted-foreground">Semantic context & state</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom premium SVG for Monitoring
function MonitoringDiagram() {
  return (
    <div className="my-8 p-6 rounded-2xl bg-card border border-border/80 shadow-xl max-w-3xl mx-auto">
      <h4 className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
        Telemetry & Observability Pipeline
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Column: Data Sources */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/60 border border-border">
            <Cpu className="w-4 h-4 text-primary shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">Proxmox Host</div>
              <div className="text-[9px] text-muted-foreground">Netdata Agent (1s resolution)</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/60 border border-border">
            <Layers className="w-4 h-4 text-accent shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">VMs & LXC Nodes</div>
              <div className="text-[9px] text-muted-foreground">Node Exporters (sys metrics)</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/60 border border-border">
            <Terminal className="w-4 h-4 text-muted-foreground shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">Home Assistant</div>
              <div className="text-[9px] text-muted-foreground">Smart plugs & thermal sensors</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/60 border border-border">
            <Network className="w-4 h-4 text-muted-foreground shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">Network Switches</div>
              <div className="text-[9px] text-muted-foreground">SNMP Exporter metrics</div>
            </div>
          </div>
        </div>

        {/* Center: Collector (Prometheus) */}
        <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-primary/5 border border-primary/30 w-full text-center relative shadow-lg shadow-primary/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] uppercase tracking-wider font-semibold text-primary">
            Metrics Storage
          </div>
          <Database className="w-10 h-10 text-primary mb-3 animate-[pulse_2s_infinite]" />
          <span className="font-semibold text-sm">Prometheus Server</span>
          <span className="text-[10px] text-muted-foreground mt-1">TSDB Metrics Ingestion</span>
        </div>

        {/* Right Column: Visualization & Alerts */}
        <div className="flex flex-col gap-4">
          {/* Grafana */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20">
            <Layers className="w-5 h-5 text-accent shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">Grafana Dashboards</div>
              <div className="text-[9px] text-muted-foreground">Unified visualization panels</div>
            </div>
          </div>

          {/* AlertManager */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
            <Terminal className="w-5 h-5 text-destructive shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-xs text-foreground">AlertManager</div>
              <div className="text-[9px] text-muted-foreground">Triggers & Notifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GenericMarkdownArticleProps {
  filePath: string
  title?: string
}

export default function GenericMarkdownArticle({ filePath }: GenericMarkdownArticleProps) {
  const { pathname } = useLocation()
  
  // Resolve article lang & slug from path
  const lang = 'en'
  
  // Load and parse the markdown content
  const { frontmatter, body } = useMemo(() => {
    try {
      return parseMarkdown(filePath)
    } catch (err) {
      console.error(`Failed to parse markdown file ${filePath}:`, err)
      return {
        frontmatter: { title: 'Not Found', description: 'Article not found' },
        body: '# Article Not Found\nThe requested document could not be loaded.'
      }
    }
  }, [filePath])

  const slug = pathname.substring(1)

  // Configure SEO
  useArticleSeo({
    lang,
    slug,
    altSlug: slug,
    title: `${frontmatter.title} | Amit Bhardwaj`,
    description: frontmatter.description || `Read ${frontmatter.title} by Amit Bhardwaj.`,
    publishedTime: frontmatter.date || '2026-06-06',
    articleTags: Array.isArray(frontmatter.tags) ? frontmatter.tags.join(', ') : 'Salesforce, Architect, DevOps',
    xDefaultSlug: slug,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: frontmatter.title,
      description: frontmatter.description || `Read ${frontmatter.title} by Amit Bhardwaj.`,
    },
  })

  // Format custom markdown components (like code blocks)
  const components = {
    code({ node, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      const codeString = String(children).replace(/\n$/, '')
      
      if (match && match[1] === 'mermaid') {
        if (codeString.includes('Salesforce') && codeString.includes('SAP')) {
          return <SalesforceSapDiagram />
        }
        if (codeString.includes('User') && codeString.includes('Agent')) {
          return <AiAgentDiagram />
        }
        if (codeString.includes('PM_Host') || codeString.includes('Netdata Agent') || codeString.includes('Prometheus')) {
          return <MonitoringDiagram />
        }
        return (
          <pre className="p-4 rounded-xl bg-card border border-border overflow-x-auto text-xs font-mono">
            {codeString}
          </pre>
        )
      }
      
      return (
        <pre className="p-4 rounded-xl bg-muted border border-border overflow-x-auto text-sm font-mono text-foreground mb-4">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      )
    }
  }

  return (
    <ArticleLayout lang={lang}>
      <header className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6 group"
        >
          <span>← Back to portfolio</span>
        </Link>
        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {frontmatter.title}
        </h1>
        {frontmatter.date && (
          <p className="text-xs font-mono text-muted-foreground">
            Published on {frontmatter.date}
          </p>
        )}
      </header>

      <article className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown components={components}>
          {body}
        </ReactMarkdown>
      </article>

      <div className="mt-16 pt-8 border-t border-border/60">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
        >
          ← Back to home
        </Link>
      </div>
    </ArticleLayout>
  )
}
