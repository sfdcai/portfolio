import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArticleLayout } from './articles/components'
import { getPrivacyContent } from './markdown-parser'

export default function PrivacyPolicy({ lang = 'en' }: { lang?: 'es' | 'en' }) {
  const t = getPrivacyContent(lang) as any

  useEffect(() => {
    document.title = `${t.title} | sfdcai.github.io/portfolio`

    // noindex
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    robots.content = 'noindex, nofollow'

    // Fix canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (canonical) canonical.href = `https://sfdcai.github.io/portfolio/privacy`

    // Fix meta description
    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (desc) desc.content = t.description

    return () => {
      robots.content = 'index, follow'
    }
  }, [lang, t])

  return (
    <ArticleLayout lang={lang}>
      <header className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {t.title}
        </h1>
      </header>

      <article className="prose-custom">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-wrap">
          {t.content}
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            ← Back to home
          </Link>
        </div>
      </article>
    </ArticleLayout>
  )
}
