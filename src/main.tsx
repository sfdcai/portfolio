import { StrictMode, lazy, Suspense, useState, useEffect, useRef, type ReactNode, type ComponentType } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import GlobalNav from './GlobalNav.tsx'
import { articleRegistry } from './articles/registry'

const MusicToggle = lazy(() => import('./MusicToggle'))
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'))
const AboutPage = lazy(() => import('./AboutPage'))
const AwardsPage = lazy(() => import('./AwardsPage'))
const CaseStudiesPage = lazy(() => import('./CaseStudiesPage'))
const PortfolioArchitecturePage = lazy(() => import('./PortfolioArchitecturePage'))
const AmitAiChatbot = lazy(() => import('./AmitAiChatbot'))
import CursorHalo from './CursorHalo.tsx'

// Lazy-load article components from registry
const articleComponents: Record<string, React.LazyExoticComponent<ComponentType<{ lang: 'es' | 'en' }>>> = {}
for (const article of articleRegistry) {
  articleComponents[article.id] = lazy(article.component)
}

/** Reset scroll + fade-in on route change (no animation on initial load to match prerender) */
function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const { pathname } = location
  const initialPathname = useRef(pathname)
  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect(() => {
    if (pathname !== initialPathname.current) {
      setHasNavigated(true)
    }

    if (location.hash) {
      // Hash scroll: multi-pass to handle async rendering + highlight on final pass
      const hash = location.hash
      const scroll = () => {
        const el = document.querySelector(hash)
        el?.scrollIntoView({ behavior: 'instant' })
        return el
      }
      const t1 = setTimeout(scroll, 50)
      const t2 = setTimeout(scroll, 300)
      const t3 = setTimeout(() => {
        const el = scroll()
        if (el instanceof HTMLElement) {
          el.classList.add('hash-highlight')
          el.addEventListener('animationend', () => el.classList.remove('hash-highlight'), { once: true })
        }
      }, 800)
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, location.hash, location.key])

  return (
    <div key={pathname} style={hasNavigated ? { animation: 'page-fade-in 0.25s ease-out' } : undefined}>
      {children}
    </div>
  )
}

function GlobalChat() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  if (!hydrated) return null
  return (
    <Suspense fallback={null}>
      <AmitAiChatbot />
    </Suspense>
  )
}

function GlobalMusic() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  if (!hydrated) return null
  return (
    <Suspense fallback={null}>
      <MusicToggle />
    </Suspense>
  )
}

function ConditionalNav() {
  return <GlobalNav />
}

// Console easter egg
const ASCII_ART = `\n  █████╗ ███╗   ███╗██╗████████╗    ██████╗ ██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗    ██╗ █████╗    ██╗\n ██╔══██╗████╗ ████║██║╚══██╔══╝    ██╔══██╗██║  ██║██╔══██╗██╔══██╗██╔══██╗██║    ██║██╔══██╗   ██║\n ███████║██╔████╔██║██║   ██║       ██████╔╝███████║███████║██████╔╝██║  ██║██║ █╗ ██║███████║   ██║\n ██╔══██║██║╚██╔╝██║██║   ██║       ██╔══██╗██╔══██║██╔══██║██╔══██╗██║  ██║██║███╗██║██╔══██║   ██║\n ██║  ██║██║ ╚═╝ ██║██║   ██║       ██████╔╝██║  ██║██║  ██║██║  ██║██████╔╝╚███╔███╔╝██║  ██║█████╔╝\n ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝       ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚════╝ \n`
console.log(`%c${ASCII_ART}`, 'color: #f97316; font-size: 12px; font-family: monospace;')
console.log('%c Most people scroll. You inspect. I like that. ', 'background: #f97316; color: #1a1a1a; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 3px;')
console.log('%cThe %cbest %cwork %cis %cinvisible.', 'color: #94a3b8; font-size: 13px;', 'color: #7e8d9d; font-size: 13px;', 'color: #687882; font-size: 13px;', 'color: #526268; font-size: 13px;', 'color: #3d4d52; font-size: 13px;')
console.log('%cYou just found some of it.', 'color: #94a3b8; font-size: 13px;')
console.log('%c I build the details. Let\'s solve something hard → hiamitbhardwaj@gmail.com ', 'background: #f97316; color: #1a1a1a; font-size: 13px; font-weight: bold; padding: 4px 8px; border-radius: 3px;')

// Debug API for technical recruiters — type window.__amitbhardwaj in console
Object.defineProperty(window, '__amitbhardwaj', {
  value: Object.freeze({
    stack: 'React 19 + TypeScript + Vite + Tailwind v4 + Motion',
    llm: 'Multi-Engine Serverless Edge AI (Cloudflare Workers AI + Gemini 2.5 Flash + Groq Qwen 2.5 32B fallback mesh)',
    security: 'Cloudflare Pages Global Edge + Zero-Trust Tunnels + Strict CSP',
    evals: 'Authoritative RAG Grounding against Master Career Corpus (ADR-002 zero hallucination)',
    observability: 'Cloudflare Edge Analytics + Prometheus/Loki telemetry',
    render: 'Pre-rendered HTML (22 pages) + client hydration',
    perf: () => { const n = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; console.table({ TTFB: `${Math.round(n.responseStart - n.requestStart)}ms`, DOMContentLoaded: `${Math.round(n.domContentLoadedEventEnd - n.startTime)}ms`, Load: `${Math.round(n.loadEventEnd - n.startTime)}ms` }); },
    hire_me: 'https://www.linkedin.com/in/salesforce-technical-architect/',
  }),
  configurable: false,
})

function NotFound() {
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots) }
    robots.content = 'noindex, nofollow'
    document.title = '404 — Page not found | amitbhardwaj.co.uk'
    return () => { robots.content = 'index, follow' }
  }, [])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-8xl font-display font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-display font-semibold text-foreground mb-2">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  )
}

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <CursorHalo />
      <ConditionalNav />
      <PageTransition>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage lang="en" />} />
            <Route path="/privacy" element={<PrivacyPolicy lang="en" />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/portfolio-architecture" element={<PortfolioArchitecturePage />} />
            {articleRegistry.map((article) => {
              const ArticleComponent = articleComponents[article.id]
              return (
                <Route key={`${article.id}-en`} path={`/${article.slugs.en}`} element={<ArticleComponent lang="en" />} />
              )
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <GlobalChat />
      <GlobalMusic />
    </BrowserRouter>
  </StrictMode>
)

// Hydrate if pre-rendered content exists, createRoot for dev mode
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
