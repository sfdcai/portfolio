import { parse as parseYaml } from 'yaml'

const markdownFiles: Record<string, string> = {}

// Detect if running in Node.js environment
const isNode = typeof window === 'undefined'


if (isNode) {
  // Running in Node.js (e.g., tsx scripts/prerender.tsx)
  try {
    const fsModule = 'node:fs'
    const pathModule = 'node:path'
    const urlModule = 'node:url'
    const fs = await import(/* @vite-ignore */ fsModule)
    const path = await import(/* @vite-ignore */ pathModule)
    const { fileURLToPath } = await import(/* @vite-ignore */ urlModule)

    const currentFile = fileURLToPath(import.meta.url)
    const contentPath = path.resolve(path.dirname(currentFile), '../content')

    const readDirRecursive = (dir: string) => {
      if (!fs.existsSync(dir)) return
      const entries = fs.readdirSync(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          readDirRecursive(fullPath)
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          const relativeKey = '../content/' + path.relative(contentPath, fullPath).replace(/\\/g, '/')
          markdownFiles[relativeKey] = fs.readFileSync(fullPath, 'utf-8')
        }
      }
    }
    readDirRecursive(contentPath)
  } catch (err) {
    console.error('Failed to load markdown files in Node:', err)
  }
} else {
  // Running in Vite browser environment
  // @ts-ignore
  const globFiles = import.meta.glob('../content/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })
  Object.assign(markdownFiles, globFiles)
}

export interface ParsedMarkdown {
  frontmatter: Record<string, any>
  body: string
}

export function parseMarkdown(filePath: string): ParsedMarkdown {
  const keys = Object.keys(markdownFiles)
  const matchingKey = keys.find((key) => key.endsWith(filePath))

  if (!matchingKey) {
    throw new Error(`Markdown file not found in content glob: ${filePath}`)
  }

  const rawContent = markdownFiles[matchingKey]
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, body: rawContent }
  }

  try {
    const frontmatter = parseYaml(match[1]) || {}
    return { frontmatter, body: match[2] }
  } catch (err) {
    console.error(`Error parsing frontmatter in ${filePath}:`, err)
    return { frontmatter: {}, body: match[2] }
  }
}

export function getHomeContent(_lang?: 'es' | 'en') {
  const { frontmatter } = parseMarkdown(`home-en.md`)
  return frontmatter
}

export function getAboutContent(_lang?: 'es' | 'en') {
  const { frontmatter } = parseMarkdown(`about-en.md`)
  return frontmatter
}

export function getPrivacyContent(_lang?: 'es' | 'en') {
  const { frontmatter } = parseMarkdown(`privacy-en.md`)
  return frontmatter
}

export function getArticleContent(id: string, _lang?: 'es' | 'en') {
  const { frontmatter } = parseMarkdown(`articles/${id}-en.md`)
  return frontmatter
}

export function getExperienceItems(_lang?: 'es' | 'en') {
  const items: Record<string, any> = {}
  const jobs = ['amitbhardwaj-irepair']
  for (const job of jobs) {
    try {
      const { frontmatter, body } = parseMarkdown(`home/experience/${job}-en.md`)
      items[job] = {
        ...frontmatter,
        desc: body.trim(),
      }
    } catch {
      // Ignore
    }
  }
  return items
}

export function getProjectItems(_lang?: 'es' | 'en') {
  const items: any[] = []
  const keys = Object.keys(markdownFiles)
  const projectKeys = keys.filter((k) => k.includes(`/home/projects/`) && k.endsWith(`-en.md`))

  for (const key of projectKeys) {
    const rawContent = markdownFiles[key]
    const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
    if (match) {
      try {
        const fm = parseYaml(match[1]) || {}
        items.push({
          ...fm,
          desc: match[2].trim(),
        })
      } catch (err) {
        console.error(`Error parsing project: ${key}`, err)
      }
    }
  }
  return items
}
