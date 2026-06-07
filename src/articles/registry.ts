import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'n8n-for-pms',
    slugs: { es: 'n8n-para-pms', en: 'n8n-for-pms' },
    titles: { es: 'n8n para PMs', en: 'n8n for PMs' },
    seo: {
      es: {
        title: 'n8n para PMs: Cheat Sheet + Templates IA Gratis | amitbhardwaj.co.uk',
        description: 'Cheat sheet de n8n para Product Managers: automatiza sprint reports y clasifica feedback con IA. 2 templates importables gratis. Tutorial paso a paso.',
      },
      en: {
        title: 'n8n for PMs: Cheat Sheet + Free AI Templates | amitbhardwaj.co.uk',
        description: 'n8n cheat sheet for Product Managers: automate sprint reports and classify feedback with AI. 2 free importable workflow templates. Step-by-step tutorial.',
      },
    },
    sectionLabels: {
      es: {
        'time-sinks': 'Tareas que Roban Tiempo',
        'workflow-1': 'Workflow 1',
        'workflow-2': 'Workflow 2',
        'the-pattern': 'El Patrón',
        'get-started': 'Empieza',
        'lessons': 'Lecciones',
        'faq': 'FAQ',
        'import': 'Importar',
        'resources': 'Recursos',
      },
      en: {
        'time-sinks': 'Time Sinks',
        'workflow-1': 'Workflow 1',
        'workflow-2': 'Workflow 2',
        'the-pattern': 'The Pattern',
        'get-started': 'Get Started',
        'lessons': 'Lessons',
        'faq': 'FAQ',
        'import': 'Import',
        'resources': 'Resources',
      },
    },
    type: 'collab',
    ragReady: true,
    i18nFile: 'src/n8n-i18n.ts',
    ogImage: 'https://amitbhardwaj.co.uk/workflows/n8n-ai-feedback-classification-workflow.webp',
    heroImage: 'https://amitbhardwaj.co.uk/workflows/n8n-sprint-report-automation-workflow.webp',
    component: () => import('../N8nForPMs.tsx'),
    seoMeta: {
      datePublished: '2026-02-24',
      dateModified: '2026-06-07',
      keywords: ['n8n', 'n8n tutorial', 'n8n templates', 'n8n AI', 'n8n workflow', 'n8n automation', 'n8n cheat sheet', 'product manager', 'AI workflow automation', 'sprint report automation', 'feedback classification AI', 'no-code automation', 'n8n for product managers', 'workflow templates free'],
      articleType: 'TechArticle',
      articleTags: 'n8n,product manager,automation,AI,workflow,no-code',
      images: ['https://amitbhardwaj.co.uk/workflows/n8n-sprint-report-automation-workflow.webp', 'https://amitbhardwaj.co.uk/workflows/n8n-ai-feedback-classification-workflow.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io', applicationCategory: 'Workflow Automation' },
        { '@type': 'Thing', name: 'Product Management Automation' },
      ],
      extra: { proficiencyLevel: 'Beginner', dependencies: 'n8n Cloud (free tier), Airtable, Slack' },
      isBasedOn: {
        '@type': 'Course',
        name: 'Masterclass: n8n for PMs',
        provider: { '@type': 'Organization', name: 'AI Product Academy', url: 'https://maven.com/marily-nika' },
        instructor: { '@type': 'Person', name: 'Dr. Marily Nika', sameAs: 'https://www.wikidata.org/wiki/Q107463356', jobTitle: 'Gen AI Product Lead', worksFor: { '@type': 'Organization', name: 'Google' } },
        url: 'https://maven.com/p/52fc7d/masterclass-n8n-for-p-ms',
      },
      citation: [
        { '@type': 'WebPage', name: 'Asana Anatomy of Work Index 2025', url: 'https://asana.com/work-index' },
        { '@type': 'WebPage', name: 'n8n Documentation', url: 'https://docs.n8n.io' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io' },
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com' },
      ],
      video: {
        '@type': 'VideoObject',
        name: 'Masterclass: n8n for PMs — Lightning Session',
        description: 'Live 60-minute session teaching Product Managers how to automate workflows with n8n and AI. 201 students enrolled.',
        contentUrl: 'https://maven.com/p/52fc7d/masterclass-n8n-for-p-ms',
        uploadDate: '2026-03-10',
        duration: 'PT60M',
        performer: { '@id': 'https://amitbhardwaj.co.uk/#person' },
        publisher: { '@type': 'Organization', name: 'AI Product Academy', url: 'https://maven.com/marily-nika' },
      },
      subjectOf: {
        '@type': 'EducationEvent',
        name: 'Masterclass: n8n for PMs',
        description: 'Lightning session on workflow automation for Product Managers with n8n and AI.',
        startDate: '2026-03-10',
        location: { '@type': 'VirtualLocation', url: 'https://maven.com/p/52fc7d/masterclass-n8n-for-p-ms' },
        organizer: { '@type': 'Organization', name: 'AI Product Academy', url: 'https://maven.com/marily-nika', founder: { '@type': 'Person', name: 'Dr. Marily Nika', sameAs: 'https://www.wikidata.org/wiki/Q107463356' } },
        performer: { '@id': 'https://amitbhardwaj.co.uk/#person' },
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
      },
    },
  },
  {
    id: 'jacobo',
    slugs: { es: 'agente-ia-jacobo', en: 'ai-agent-jacobo' },
    titles: { es: 'Agente IA Jacobo', en: 'AI Agent Jacobo' },
    seo: {
      es: {
        title: 'Jacobo: Agente IA Omnicanal — 90% Autoservicio',
        description: 'Case study: agente IA omnicanal con sub-agentes, tool calling y orquestación multi-modelo (n8n + ElevenLabs). 90% autoservicio.',
      },
      en: {
        title: 'Jacobo: Multi-Agent AI — 90% Self-Service',
        description: 'Case study: omnichannel AI agent with sub-agents, tool calling & multi-model orchestration (n8n + ElevenLabs). 90% self-service.',
      },
    },
    sectionLabels: {
      es: {
        'the-problem': 'El Problema',
        'architecture': 'Arquitectura',
        'e2e-flows': 'Flujos E2E',
        'main-router': 'Los Dos Cerebros',
        'natural-language-booking': 'Deep Dive: Citas',
        'deep-dive-quotes': 'Deep Dive: Presupuestos',
        'deep-dive-others': 'Deep Dive: Tools',
        'results': 'Resultados',
        'decisions': 'ADRs',
        'platform-evolution': 'Evolución',
        'what-id-do-differently': 'Lecciones',
        'enterprise-patterns': 'Patrones',
        'run-it-yourself': 'Workflows',
        'faq': 'FAQ',
        'resources': 'Recursos',
      },
      en: {
        'the-problem': 'The Problem',
        'architecture': 'Architecture',
        'e2e-flows': 'E2E Flows',
        'main-router': 'The Two Brains',
        'natural-language-booking': 'Deep Dive: Booking',
        'deep-dive-quotes': 'Deep Dive: Quotes',
        'deep-dive-others': 'Deep Dive: Tools',
        'results': 'Results',
        'decisions': 'ADRs',
        'platform-evolution': 'Evolution',
        'what-id-do-differently': 'Lessons',
        'enterprise-patterns': 'Patterns',
        'run-it-yourself': 'Workflows',
        'faq': 'FAQ',
        'resources': 'Resources',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/jacobo-i18n.ts',
    ogImage: 'https://amitbhardwaj.co.uk/jacobo/og-jacobo-agent.webp',
    heroImage: 'https://amitbhardwaj.co.uk/jacobo/amitbhardwaj-headphones-thinking.webp',
    component: () => import('../JacoboAgent.tsx'),
    seoMeta: {
      datePublished: '2026-02-25',
      dateModified: '2026-06-07',
      keywords: ['multi-agent AI', 'multi agent orchestration', 'AI agent', 'sub-agent architecture', 'tool calling production', 'n8n workflows', 'n8n ai agent', 'ai agent case study', 'customer service AI', 'WhatsApp AI agent', 'ElevenLabs voice agent', 'voice AI', 'HITL', 'human in the loop', 'ia para pymes', 'agente ia whatsapp', 'multi-model orchestration', 'OpenRouter', 'FDE portfolio', 'solutions architect AI', 'AI production manager', 'enterprise AI patterns', 'voice AI platform', 'conversational AI case study', 'agentic workflows'],
      articleType: 'TechArticle',
      articleTags: 'AI agent,multi-agent,n8n,ElevenLabs,HITL,tool calling,WhatsApp,voice AI',
      images: ['https://amitbhardwaj.co.uk/jacobo/og-jacobo-agent.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io', applicationCategory: 'Workflow Automation' },
        { '@type': 'SoftwareApplication', name: 'ElevenLabs', url: 'https://elevenlabs.io', applicationCategory: 'Voice AI' },
        { '@type': 'Thing', name: 'Multi-Agent Orchestration' },
        { '@type': 'Thing', name: 'AI Customer Service' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'n8n, OpenRouter, ElevenLabs, WATI, Airtable, Aircall, YouCanBookMe' },
      citation: [
        { '@type': 'WebPage', name: 'n8n Documentation', url: 'https://docs.n8n.io' },
        { '@type': 'WebPage', name: 'ElevenLabs Voice AI Documentation', url: 'https://elevenlabs.io/docs' },
        { '@type': 'WebPage', name: 'OpenRouter API Documentation', url: 'https://openrouter.ai/docs' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io' },
        { '@type': 'SoftwareApplication', name: 'ElevenLabs', url: 'https://elevenlabs.io' },
        { '@type': 'SoftwareApplication', name: 'OpenRouter', url: 'https://openrouter.ai' },
        { '@type': 'SoftwareApplication', name: 'WATI', url: 'https://www.wati.io' },
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com' },
      ],
      discussionUrl: 'https://www.reddit.com/r/n8n/comments/1sc3i30/i_built_a_whatsapp_voice_ai_agent_in_n8n_that/',
    },
  },
  {
    id: 'business-os',
    slugs: { es: 'business-os-para-airtable', en: 'business-os-for-airtable' },
    titles: { es: 'Business OS', en: 'Business OS' },
    seo: {
      es: {
        title: 'Business OS Custom: Airtable + n8n — 170h/Mes',
        description: 'Case study: Business OS custom con 12 bases Airtable, 2100 campos y n8n que ahorra 170h/mes en reparación de móviles.',
      },
      en: {
        title: 'Custom Business OS: Airtable + n8n — 170h/Mo',
        description: 'Case study: custom Business OS with 12 Airtable bases, 2100 fields, and n8n saving 170h/month at a phone repair business.',
      },
    },
    sectionLabels: {
      es: {
        'why-custom': '¿Por Qué Custom?',
        'overview': 'Vista General',
        'e2e-flows': 'Flujos E2E',
        'cross-cutting': 'Transversales',
        'day-in-life': 'Un Día',
        'before-after': 'Antes/Después',
        'impact': 'Impacto',
        'decisions': 'ADRs',
        'platform-evolution': 'Evolución',
        'lessons': 'Lecciones',
        'replicability': 'Patrones',
        'faq': 'FAQ',
        'resources': 'Recursos',
      },
      en: {
        'why-custom': 'Why Custom?',
        'overview': 'Overview',
        'e2e-flows': 'E2E Flows',
        'cross-cutting': 'Cross-Cutting',
        'day-in-life': 'A Day',
        'before-after': 'Before/After',
        'impact': 'Impact',
        'decisions': 'ADRs',
        'platform-evolution': 'Evolution',
        'lessons': 'Lessons',
        'replicability': 'Patterns',
        'faq': 'FAQ',
        'resources': 'Resources',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/business-os-i18n.ts',
    ogImage: 'https://amitbhardwaj.co.uk/business-os/og-business-os.webp',
    heroImage: 'https://amitbhardwaj.co.uk/business-os/web-landing-hero.webp',
    component: () => import('../BusinessOS.tsx'),
    seoMeta: {
      datePublished: '2026-02-25',
      dateModified: '2026-06-07',
      keywords: ['Business OS', 'Airtable ERP', 'Airtable as ERP', 'no-code ERP', 'Airtable automation', 'CRM gamification', 'phone repair', 'inventory management', 'custom ERP case study', 'repair shop management', 'programmatic SEO', 'Airtable CRM', 'single source of truth', 'business operating system', 'multi-base architecture'],
      articleType: 'TechArticle',
      articleTags: 'Business OS,Airtable,n8n,ERP,CRM,automation,phone repair',
      images: ['https://amitbhardwaj.co.uk/business-os/og-business-os.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com', applicationCategory: 'Database Platform' },
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io', applicationCategory: 'Workflow Automation' },
        { '@type': 'Thing', name: 'Enterprise Resource Planning' },
        { '@type': 'Thing', name: 'Business Process Automation' },
      ],
      extra: { proficiencyLevel: 'Advanced', dependencies: 'Airtable Pro, n8n, YouCanBookMe, WATI (WhatsApp API), DataForSEO' },
      citation: [
        { '@type': 'WebPage', name: 'Airtable Enterprise Platform', url: 'https://airtable.com/platform' },
        { '@type': 'TechArticle', name: 'Airtable Web API Reference', url: 'https://airtable.com/developers/web/api/introduction' },
        { '@type': 'TechArticle', name: 'n8n Documentation', url: 'https://docs.n8n.io' },
        { '@type': 'TechArticle', name: 'Anthropic Claude API Documentation', url: 'https://docs.anthropic.com' },
        { '@type': 'WebPage', name: 'Make.com Automation Platform', url: 'https://www.make.com' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com' },
        { '@type': 'SoftwareApplication', name: 'n8n', url: 'https://n8n.io' },
      ],
    },
  },
  {
    id: 'programmatic-seo',
    slugs: { es: 'seo-programatico', en: 'programmatic-seo' },
    titles: { es: 'SEO Programático', en: 'Programmatic SEO' },
    seo: {
      es: {
        title: 'SEO Programático: 4.000+ Páginas desde un ERP | amitbhardwaj.co.uk',
        description: 'Case study: cómo generé 4.730 landing pages estáticas con Airtable, DataForSEO y crawl budget optimization. 2M+ impresiones, 19K+ clicks.',
      },
      en: {
        title: 'Programmatic SEO: 4,000+ Pages from an ERP | amitbhardwaj.co.uk',
        description: 'Case study: 4,730 static landing pages from Airtable as headless CMS with DataForSEO crawl budget optimization and Astro SSG. 2M+ impressions, 19K+ clicks.',
      },
    },
    sectionLabels: {
      es: {
        'opportunity': 'La Oportunidad',
        'the-numbers': 'Los Números',
        'two-strategies': 'Dos Estrategias',
        'architecture': 'La Arquitectura',
        'url-taxonomy': 'Taxonomía URLs',
        'cms-deep-dive': 'El CMS',
        'page-anatomy': 'Anatomía de Página',
        'decision-engine': 'Motor de Decisión',
        'crawl-budget': 'Crawl Budget',
        'pipeline': 'Pipeline',
        'content-automation': 'Automatización',
        'image-pipeline': 'Pipeline de Imágenes',
        'reviews-pipeline': 'Pipeline de Reseñas',
        'before-after-pipeline': 'Pipeline Antes/Después',
        'growth': 'Crecimiento',
        'results': 'Resultados',
        'starting-point': 'El Punto de Partida',
        'stack': 'Stack',
        'lessons': 'Lecciones',
        'faq': 'FAQ',
        'resources': 'Recursos',
      },
      en: {
        'opportunity': 'The Opportunity',
        'the-numbers': 'The Numbers',
        'two-strategies': 'Two Strategies',
        'architecture': 'The Architecture',
        'url-taxonomy': 'URL Taxonomy',
        'cms-deep-dive': 'The CMS',
        'page-anatomy': 'Page Anatomy',
        'decision-engine': 'Decision Engine',
        'crawl-budget': 'Crawl Budget',
        'pipeline': 'Pipeline',
        'content-automation': 'Automation',
        'image-pipeline': 'Image Pipeline',
        'reviews-pipeline': 'Reviews Pipeline',
        'before-after-pipeline': 'Before/After Pipeline',
        'growth': 'Growth',
        'results': 'Results',
        'starting-point': 'The Starting Point',
        'stack': 'Stack',
        'lessons': 'Lessons',
        'faq': 'FAQ',
        'resources': 'Resources',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/pseo-i18n.ts',
    ogImage: 'https://amitbhardwaj.co.uk/pseo/og-programmatic-seo.webp',
    heroImage: 'https://amitbhardwaj.co.uk/pseo/ss-repair-page-hero.webp',
    component: () => import('../ProgrammaticSeo.tsx'),
    seoMeta: {
      datePublished: '2026-02-25',
      dateModified: '2026-06-07',
      keywords: ['programmatic SEO', 'Airtable', 'headless CMS', 'Astro', 'DataForSEO', 'crawl budget', 'phone repair', 'static site generation', 'local SEO', 'ERP'],
      articleType: 'TechArticle',
      articleTags: 'programmatic SEO,Airtable,Astro,DataForSEO,crawl budget,phone repair,ERP,local SEO',
      images: ['https://amitbhardwaj.co.uk/pseo/og-programmatic-seo.png'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com', applicationCategory: 'Database Platform' },
        { '@type': 'SoftwareApplication', name: 'Astro', url: 'https://astro.build', applicationCategory: 'Static Site Generator' },
        { '@type': 'SoftwareApplication', name: 'DataForSEO', url: 'https://dataforseo.com', applicationCategory: 'SEO Data API' },
      ],
      extra: { proficiencyLevel: 'Intermediate', dependencies: 'Airtable, Astro, DataForSEO API, Node.js' },
      citation: [
        { '@type': 'WebPage', name: 'Google Search Central: Crawl Budget', url: 'https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget' },
        { '@type': 'TechArticle', name: 'DataForSEO API Documentation', url: 'https://docs.dataforseo.com' },
        { '@type': 'TechArticle', name: 'Astro Content Collections', url: 'https://docs.astro.build/en/guides/content-collections/' },
        { '@type': 'WebPage', name: 'Google Search Central: Programmatic Content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
        { '@type': 'TechArticle', name: 'Airtable Web API Reference', url: 'https://airtable.com/developers/web/api/introduction' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Airtable', url: 'https://airtable.com' },
        { '@type': 'SoftwareApplication', name: 'Astro', url: 'https://astro.build' },
        { '@type': 'SoftwareApplication', name: 'DataForSEO', url: 'https://dataforseo.com' },
      ],
    },
  },
  {
    id: 'self-healing-chatbot',
    slugs: { es: 'chatbot-que-se-cura-solo', en: 'self-healing-chatbot' },
    titles: { es: 'El Chatbot Que Se Cura Solo', en: 'The Self-Healing Chatbot' },
    seo: {
      es: {
        title: 'El Chatbot Que Se Cura Solo: De Widget a LLMOps en Producción',
        description: 'Case study: cómo evolucioné un chatbot de 50 líneas a un sistema LLMOps con RAG agéntico, defensa de jailbreak en 6 capas, 71 evals y closed-loop automático.',
      },
      en: {
        title: 'The Self-Healing Chatbot: From Widget to Production LLMOps',
        description: 'Case study: production LLMOps with agentic observability, 6-layer defense, 71 evals, voice mode, and a closed-loop that generates tests from real failures.',
      },
    },
    sectionLabels: {
      es: {
        'genesis': 'La Génesis',
        'evolution': 'La Evolución',
        'architecture': 'Arquitectura',
        'how-it-was-built': 'Cómo Se Construyó',
        'rag': 'RAG Agéntico',
        'defense': 'Defensa',
        'agentic-observability': 'Observabilidad Agéntica',
        'evals': 'Los 71 Tests',
        'closed-loop': 'El Loop Cerrado',
        'cost': 'Coste Real',
        'voice': 'Modo Voz',
        'lessons': 'Lecciones',
        'faq': 'FAQ',
      },
      en: {
        'genesis': 'The Genesis',
        'evolution': 'The Evolution',
        'architecture': 'Architecture',
        'how-it-was-built': 'How It Was Built',
        'rag': 'Agentic RAG',
        'defense': 'Defense',
        'agentic-observability': 'Agentic Observability',
        'evals': 'The 71 Tests',
        'closed-loop': 'The Closed Loop',
        'cost': 'Real Cost',
        'voice': 'Voice Mode',
        'lessons': 'Lessons',
        'faq': 'FAQ',
      },
    },
    type: 'case-study',
    ragReady: true,
    i18nFile: 'src/chatbot-i18n.ts',
    ogImage: 'https://amitbhardwaj.co.uk/chatbot/og-self-healing-chatbot.webp',
    heroImage: 'https://amitbhardwaj.co.uk/chatbot/hero-self-healing-chatbot.webp',
    component: () => import('../SelfHealingChatbot.tsx'),
    seoMeta: {
      datePublished: '2026-03-11',
      dateModified: '2026-06-07',
      keywords: ['LLMOps', 'self-healing chatbot', 'agentic RAG', 'jailbreak defense', 'prompt injection', 'LLM evaluation', 'closed loop LLM', 'Langfuse', 'prompt versioning', 'adversarial testing', 'trace-to-eval', 'hybrid search pgvector', 'AI portfolio', 'chatbot evals', 'CI gate LLM', 'voice mode chatbot', 'OpenAI Realtime API', 'speech-to-speech AI', 'agentic observability', 'developer feedback loop', 'AI maintaining AI'],
      articleType: 'TechArticle',
      articleTags: 'LLMOps,self-healing chatbot,agentic RAG,jailbreak defense,Langfuse,evals,closed-loop,prompt injection',
      images: ['https://amitbhardwaj.co.uk/chatbot/og-self-healing-chatbot.webp'],
      about: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com', applicationCategory: 'LLM Observability' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com', applicationCategory: 'Database' },
        { '@type': 'Thing', name: 'LLMOps' },
        { '@type': 'Thing', name: 'Retrieval-Augmented Generation' },
      ],
      extra: { proficiencyLevel: 'Expert', dependencies: 'Claude, Langfuse, Supabase, Vercel, OpenAI, Resend, GitHub Actions' },
      citation: [
        { '@type': 'SocialMediaPosting', name: 'Han hackeado a mi chatbot — LinkedIn post (300+ reactions)', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7421984735024816128/' },
        { '@type': 'WebPage', name: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
        { '@type': 'TechArticle', name: 'Anthropic Tool Use Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
        { '@type': 'TechArticle', name: 'Langfuse — Open Source LLM Engineering Platform', url: 'https://langfuse.com/docs' },
        { '@type': 'TechArticle', name: 'Supabase pgvector — Vector Embeddings Documentation', url: 'https://supabase.com/docs/guides/ai/vector-embeddings' },
        { '@type': 'TechArticle', name: 'Anthropic — Defending Against Prompt Injection', url: 'https://www.anthropic.com/news/prompt-injections' },
        { '@type': 'WebPage', name: 'Prompt Injection (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Prompt_injection' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Langfuse', url: 'https://langfuse.com' },
        { '@type': 'SoftwareApplication', name: 'Supabase', url: 'https://supabase.com' },
        { '@type': 'SoftwareApplication', name: 'OpenAI Realtime API', url: 'https://platform.openai.com' },
        { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://claude.ai' },
        { '@type': 'SoftwareApplication', name: 'Vercel', url: 'https://vercel.com' },
      ],
    },
  },

  {
    id: 'amitbhardwaj-irepair',
    slugs: { es: 'amitbhardwaj-irepair', en: 'amitbhardwaj-irepair-founder' },
    titles: { es: 'Amit Bhardwaj iRepair', en: 'Amit Bhardwaj iRepair' },
    seo: {
      es: {
        title: 'Amit Bhardwaj iRepair Sevilla | Reparación de Móviles desde 2009',
        description: 'La tienda de reparación de móviles fundada por Amit en 2009 sigue abierta en Sevilla. 30.000+ reparaciones. Encuentra la tienda o conoce al fundador.',
      },
      en: {
        title: 'Amit Bhardwaj iRepair Seville | Phone Repair since 2009',
        description: 'The phone repair shop founded by Amit in 2009 is still open in Seville, Spain. 30,000+ repairs. Find the shop or meet the founder.',
      },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'bridge',
    component: () => import('../AmitBhardwajIRepair.tsx'),
    xDefaultSlug: 'amitbhardwaj-irepair',
  },
  {
    id: 'salesforce-sap',
    slugs: { es: 'salesforce-sap', en: 'salesforce-sap' },
    titles: { es: 'Salesforce ↔ SAP Integration', en: 'Salesforce ↔ SAP Integration' },
    seo: {
      es: { title: 'Integración Salesforce ↔ SAP', description: 'Arquitectura de integración para Salesforce y SAP.' },
      en: { title: 'Salesforce ↔ SAP Integration | Amit Bhardwaj', description: 'Scalable event-driven integration patterns connecting Salesforce with enterprise SAP systems.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../SalesforceSapArticle.tsx'),
    xDefaultSlug: 'salesforce-sap',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['salesforce sap integration', 'salesforce sap architecture', 'mulesoft integration', 'event-driven architecture'],
      articleType: 'TechArticle',
      articleTags: 'Salesforce, SAP, Integration, Architecture',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'Salesforce SAP Integration' }],
    }
  },
  {
    id: 'ai-agents-arch',
    slugs: { es: 'ai-agents-arch', en: 'ai-agents-arch' },
    titles: { es: 'AI Agent Architecture', en: 'AI Agent Architecture' },
    seo: {
      es: { title: 'Arquitectura de Agentes IA', description: 'Diseño de sistemas multi-agente usando LLMs.' },
      en: { title: 'AI Agent Architecture | Amit Bhardwaj', description: 'Conceptual designs and memory system orchestration for multi-agent enterprise setups.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../AiAgentsArchArticle.tsx'),
    xDefaultSlug: 'ai-agents-arch',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['ai agent architecture', 'multi agent systems', 'agent orchestration', 'llm agents'],
      articleType: 'TechArticle',
      articleTags: 'AI, Architecture, Multi-Agent, LLM',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'AI Agent Architecture' }],
    }
  },
  {
    id: 'salesforce-devops',
    slugs: { es: 'salesforce-devops', en: 'salesforce-devops' },
    titles: { es: 'Salesforce DevOps Best Practices', en: 'Salesforce DevOps Best Practices' },
    seo: {
      es: { title: 'Mejores Prácticas de DevOps en Salesforce', description: 'Automatización y versionado en la entrega de Salesforce.' },
      en: { title: 'Salesforce DevOps Best Practices | Amit Bhardwaj', description: 'Discover source-driven development, branching models, and deployment automation for Salesforce.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../SalesforceDevOpsArticle.tsx'),
    xDefaultSlug: 'salesforce-devops',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['salesforce devops', 'copado', 'azure devops salesforce', 'salesforce cicd'],
      articleType: 'TechArticle',
      articleTags: 'Salesforce, DevOps, CI/CD, Copado',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'Salesforce DevOps' }],
    }
  },
  {
    id: 'ai-agents-blog',
    slugs: { es: 'ai-agents-blog', en: 'ai-agents-blog' },
    titles: { es: 'The Rise of AI Agents in Enterprise Systems', en: 'The Rise of AI Agents in Enterprise Systems' },
    seo: {
      es: { title: 'El Auge de los Agentes IA en Empresas', description: 'Cómo los agentes de IA cambian el software empresarial.' },
      en: { title: 'The Rise of AI Agents in Enterprise Systems | Amit Bhardwaj', description: 'Read about the impact of tool-using models, multi-agent systems, and memory context in enterprise.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../AiAgentsBlogArticle.tsx'),
    xDefaultSlug: 'ai-agents-blog',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['enterprise ai agents', 'ai agents in enterprise', 'agentic workflows', 'tool-using models'],
      articleType: 'TechArticle',
      articleTags: 'AI, Enterprise, Automation',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'AI Agents' }],
    }
  },
  {
    id: 'homelab-network',
    slugs: { es: 'homelab-network', en: 'homelab-network' },
    titles: { es: 'Network & Infrastructure Lab', en: 'Network & Infrastructure Lab' },
    seo: {
      es: { title: 'Laboratorio de Redes e Infraestructura', description: 'Segmentación de red y firewalls auto-hospedados.' },
      en: { title: 'Network & Infrastructure Lab | Amit Bhardwaj', description: 'Hands-on network design, VLAN segmentation, and traffic monitoring in home labs.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../HomelabNetworkArticle.tsx'),
    xDefaultSlug: 'homelab-network',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['homelab network', 'openwrt vlan', 'pfsense firewall', 'network segmentation'],
      articleType: 'TechArticle',
      articleTags: 'Networking, Homelab, OpenWRT, pfSense',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'Network & Infrastructure Lab' }],
    }
  },
  {
    id: 'monitoring',
    slugs: { es: 'monitoring', en: 'monitoring' },
    titles: { es: 'Unified Monitoring System', en: 'Unified Monitoring System' },
    seo: {
      es: { title: 'Sistema de Monitoreo Unificado', description: 'Monitoreo en tiempo real de Proxmox y servidores.' },
      en: { title: 'Unified Monitoring System | Amit Bhardwaj', description: 'Centralized observability setup combining multiple virtualized infrastructure sources.' },
    },
    sectionLabels: { es: {}, en: {} },
    type: 'case-study',
    component: () => import('../MonitoringArticle.tsx'),
    xDefaultSlug: 'monitoring',
    seoMeta: {
      datePublished: '2026-06-06',
      dateModified: '2026-06-06',
      keywords: ['unified monitoring', 'proxmox netdata', 'homelab observability', 'system health tracking'],
      articleType: 'TechArticle',
      articleTags: 'Monitoring, Observability, Proxmox, Netdata',
      images: ['https://amitbhardwaj.co.uk/Gemini_Generated_Image_4eklr94eklr94ekl.png'],
      about: [{ '@type': 'Thing', name: 'Unified Monitoring System' }],
    }
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = `/${article.slugs.en}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': "Amit Bhardwaj's Portfolio",
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

export function getEsSlugs(): Set<string> {
  return new Set<string>()
}
