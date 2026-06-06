# Amit Bhardwaj — Salesforce Architect & Developer Portfolio

An interactive, high-fidelity developer portfolio website designed for **Amit Bhardwaj**, Certified Salesforce Architect, Developer, and Systems Designer based in London, UK.

---

## Features

- **Dynamic Timeline & Card Loops** — Interactive timeline for professional experience history (Genpact, HCL, Infomatrix) and grid systems for projects dynamically loaded from translation resources.
- **English-Only Presentation** — Unilingual presentation across all routes and locales, ensuring completely clean English delivery without language mismatch errors.
- **6 Detailed Case Studies & Articles** — Modular case study sections with structured metadata:
  - **Enterprise Architecture**: Salesforce ↔ SAP Integration, AI Agent Architecture
  - **Technical Blog**: Salesforce DevOps Best Practices, The Rise of AI Agents in Enterprise Systems
  - **R&D Systems Labs**: Network & Infrastructure Lab, Unified Monitoring System
- **SSR Prerendering & Hydration** — Custom post-build server-side pre-rendering script that generates critical CSS and hydrates the React DOM on the client without CLS (Cumulative Layout Shift).
- **SEO & GEO Validation** — Automated build validation step that audits title tags, description lengths, heading structures, canonical URLs, and schema validation.
- **LLM Crawling-Ready** — Automatically generates an AI-friendly `llms.txt` file and sitemap.

---

## Tech Stack

- **Framework**: React 19 (Strict Mode + Hydration)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Bundler**: Vite
- **Animations**: Motion
- **Router**: React Router DOM (v7)

---

## Quick Start

### 1. Installation

```bash
git clone https://github.com/sfdcai/portfolio.git
cd portfolio
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Validation

The build pipeline performs TypeScript validation, client bundling, sitemap generation, markdown article checking, and SSR pre-rendering:

```bash
npm run build
```

---

## Project Structure

```
├── content/                     # Markdown source files for profile, projects, and articles
│   ├── profile/                 # Biography and skills markdown
│   ├── projects/                # Featured work markdown
│   ├── labs/                    # R&D system lab documentation
│   ├── architecture/            # Enterprise architecture case studies
│   └── blog/                    # Technical blog posts
├── scripts/                     # Node build and validation scripts
│   ├── generate-sitemap.ts      # Automated sitemap generation
│   ├── prerender.tsx            # Static HTML generation for target routes
│   ├── validate-articles.ts     # SEO and registry validation
│   └── validate-prerender.ts    # Structural hydration checks
├── src/
│   ├── App.tsx                  # Core layout, experience timeline, and project sections
│   ├── i18n.ts                  # Centralized portfolio data dictionary
│   ├── markdown-parser.ts       # Parses content markdown into typed state objects
│   ├── GenericMarkdownArticle.tsx # Universal rendering engine for markdown case studies
│   └── articles/
│       ├── registry.ts          # Centralized configuration for all portfolio routes
│       └── components.tsx       # Reusable layout and navigation components
```

---

## License

MIT
