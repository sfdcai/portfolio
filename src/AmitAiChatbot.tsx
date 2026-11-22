import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Send, Bot, Sparkles, ArrowUpRight, ShieldCheck, Server, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: string
  chips?: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPREHENSIVE PRIVATE DOSSIER KNOWLEDGE BASE
// Derived directly from Amit Bhardwaj's verified professional archives
// ─────────────────────────────────────────────────────────────────────────────

interface KnowledgeEntry {
  id: string
  keywords: string[]
  title: string
  summary: string
  content: string
  followUps: string[]
}

const DOSSIER_ENTRIES: KnowledgeEntry[] = [
  // 1. EXECUTIVE PROFILE & POSITIONING
  {
    id: 'profile',
    keywords: ['about', 'who is', 'overview', 'summary', 'profile', 'bio', 'background', 'amit'],
    title: 'Executive Biography & Professional Positioning',
    summary: 'Enterprise Platform & Engineering Leader with 18+ years of experience and 8 years as Senior Manager at Genpact.',
    content: `**Amit Bhardwaj** is an **Enterprise Platform Architect and Systems Engineering Leader** with over 18 years of progressive technical experience, including approximately eight years as a **Senior Manager & Solutions Architect** at **Genpact** in London.

### Professional Positioning
**Enterprise Platform & Engineering Leader | Enterprise Architect | Cloud & Integration Architecture | Technology Governance & Strategy**

### Core Capabilities:
• **Strategic Enterprise Governance**: Directing technology strategy, chairing Architecture Review Boards (EAB) & InfoSec design reviews, governing 100+ portfolio initiatives, and guiding engineering delivery organizations of ~80 resources.
• **First-Principles Systems Engineering**: Hands-on architecture and execution across AWS EC2 cloud infrastructure, zero-trust edge networking (Cloudflare Tunnels), custom Internal Developer Platforms ([sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk)), bare-metal Linux hypervisors (Proxmox VE / Linux 7.0 kernel), and agentic AI runtimes (MCP, local quantized SLMs).
• **Enterprise Integrations**: Decoupled multi-platform integration bridging Salesforce, SAP ERP, MuleSoft, AWS, and bespoke event streams while enforcing strict System-of-Record (SoR) boundaries.
• **Crisis Recovery**: Proven track record of turning distressed, multi-million-pound programs from Red to Green (Santander/Cater Allen Phase 2, high-stakes Bayer deployments).

📍 **Location**: London, United Kingdom | Open to senior technology leadership, Head of Platform Engineering, Director of Engineering, and Chief Architect appointments.`,
    followUps: [
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact",
      "Tell me about his work at CDK Global",
      "Explain the Santander / Cater Allen turnaround"
    ]
  },

  // 2. EXPERIENCE PRIOR TO GENPACT (DEEP DIVE 2007 - 2018)
  {
    id: 'prior-to-genpact',
    keywords: [
      'prior genpact', 'prior to genpact', 'before genpact', 'pre-genpact', 'before 2018',
      'early career', 'earlier career', 'previous roles', 'past roles', 'start career',
      'chandra', 'infomatrix', 'cirrologix', 'hcl', 'directi', 'spectrum'
    ],
    title: 'Comprehensive Career Journey Prior to Genpact (2007 – 2018)',
    summary: '11 years across Chandra Credit, Infomatrix, Cirrologix, HCL, Directi, and Spectrum Infogain.',
    content: `### Amit Bhardwaj — Career Journey Prior to Genpact (2007 – 2018)

Before joining Genpact in 2018, Amit built an 11-year progressive engineering career across financial credit systems, IT consulting, enterprise CRM delivery, and foundational Linux/networking infrastructure:

---

#### 1. Chandra Credit Ltd. (2017 – 2018) | Salesforce Architect & IT Systems Lead
• **Underwriting & Credit Modernization**: Architected and deployed an end-to-end Salesforce platform modernizing commercial loan origination, credit risk scoring, and underwriting workflows.
• **Legacy Data Migration**: Led the extraction, transformation, normalization, and migration of legacy on-premises relational databases into Salesforce, enforcing field-level encryption and strict audit tracking.
• **Regulatory Governance**: Engineered compliance validation rules and KYC document pipelines aligned with financial lending regulations.
• **DevOps & Standards**: Established initial source-driven repository practices, sandbox management protocols, and regression test suites.

---

#### 2. Infomatrix Inc. (2015 – 2017) | Salesforce Architect
• **Enterprise Architecture & Pre-Sales**: Led technical solution design, pre-sales architectural blueprints, and effort estimations for enterprise client RFPs.
• **ERP & Financial Integrations**: Architected real-time REST and SOAP API-led integration bridges connecting Salesforce CRM with enterprise ERP, billing, and accounting systems.
• **Engineering Leadership & Mentorship**: Led, mentored, and conducted code reviews for a team of 10+ developers and consultants; enforced Apex design patterns, governor limit best practices, and trigger frameworks.
• **Security & Data Modeling**: Designed complex role hierarchies, sharing sets, custom object relationships, and granular profile permissions.

---

#### 3. Cirrologix Pvt Ltd (2014 – 2015) | Salesforce Consultant
• **Custom Solution Architecture**: Engineered custom Apex triggers, Visualforce pages, batch processors, and automated workflow solutions for commercial enterprise clients.
• **Business Process Translation**: Conducted technical discovery workshops with business stakeholders, converting complex operational requirements into scalable technical specifications.
• **Deployment & Release Management**: Standardized deployment tracking across multi-tiered sandbox environments, eliminating metadata dependency deadlocks and optimizing unit test code coverage (>85%).

---

#### 4. HCL Technologies (2013 – 2014) | Salesforce Consultant / Technical Engineer
• **Enterprise Core Engineering**: Developed high-volume asynchronous Apex classes, scheduled batch jobs, and queueable interfaces for global accounts across Life Sciences and Financial Services.
• **Third-Party Integrations**: Built and maintained secure REST/SOAP web service integrations exchanging transactional customer data with external legacy systems.
• **Production Support & Cutover**: Participated in major client go-lives, deployment dry-runs, data migrations, and production hypercare.

---

#### 5. Directi (2009 – 2010) | Linux System Administrator
• **Infrastructure Hardening & 99.9% Uptime**: Built, secured, and maintained production Linux server fleets (CentOS, RedHat, Debian) and network gateways hosting mission-critical web applications.
• **Core Internet Protocols**:
  - **DNS**: Managed master/slave BIND DNS servers, authoritative forward/reverse lookup zones, and TTL tuning.
  - **Mail Infrastructure**: Administered Postfix and Exim mail routers with SPF, DKIM, anti-relay enforcement, and spam filtering.
  - **Web Servers**: Configured Apache HTTP virtual hosts, SSL/TLS certificate chains, and load balancing.
• **Systems Automation**: Authored Bash and Perl automation scripts for automated log auditing, disk threshold alerts, and automated daemon recovery, reducing manual sysadmin workload by 40%.

---

#### 6. Spectrum Infogain Services (2007 – 2009) | System Engineer
• **Physical Hardware Diagnostics**: Diagnosed, disassembled, and repaired enterprise workstations, motherboards, RAM modules, and power supplies.
• **Operating Systems & Storage**: Installed and patched Linux and Windows Server environments, configured filesystem partitioning (Ext3, NTFS), and configured hardware RAID arrays (RAID 0, 1, 5).
• **Networking Layer**: Terminated Ethernet cabling, configured managed switches, established VLANs, resolved IP conflicts, and routed local corporate subnets.

---

### 💡 Why Amit's Prior Experience Matters to Engineering Leaders:
Amit did not learn platform architecture in an abstract vacuum. His career began at the **physical hardware, network packet, and Linux kernel layers** before mastering enterprise software development and CRM architecture. This rare first-principles foundation enables him to diagnose deep performance bottlenecks, design resilient decoupled architectures, and lead full-stack platform engineering teams with authentic technical authority.`,
    followUps: [
      "Tell me about his work at Directi",
      "Tell me about Chandra Credit",
      "Tell me about Infomatrix",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 3. TARGET ROLE: HEAD OF PLATFORM ENGINEERING / CLOUD PLATFORMS
  {
    id: 'platform-leadership',
    keywords: [
      'head of platform', 'platform engineering', 'cloud platform', 'cox automotive',
      'platform thinking', 'reusable', 'idp', 'internal developer platform', 'devex',
      'developer experience', 'golden paths', 'why hire'
    ],
    title: 'Head of Platform Engineering & Cloud Leadership Fit',
    summary: 'Platform thinking, reusable capabilities, internal developer platform tooling, and large-scale delivery leadership.',
    content: `Amit is uniquely equipped for **Head of Platform Engineering** and **Cloud Platform Leadership** roles (such as at **Cox Automotive**):

### 1. Platform Thinking & Reusable Capabilities (CDK Global)
• At **CDK Global (MyInstall)**, an automotive retail platform, Amit transformed digital onboarding by championing a **reusable platform capability model** over one-off custom feature development.
• Led the technical evaluation of **Titan DXP** for Phase 3, assessing extensibility, security baselines, and integration friction against automotive retail roadmaps.

### 2. Internal Developer Platform (IDP) & DevEx Tooling
• Engineered [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk), a production self-service developer platform featuring automated manifest generation across 120+ metadata types, side-by-side visual AST/XML diffing, background CLI update daemons, and embedded **Model Context Protocol (MCP)** AI agents.
• Reduced deployment friction and replaced legacy change sets with automated source-driven GitHub Actions and Copado CI/CD release pipelines.

### 3. Enterprise Cloud & Production SRE Depth
• Built and operates [Rescuematic](https://rescuematic.co.uk) on **AWS EC2 (Amazon Linux 2023)** with Redis caching, FastAPI microservices, MQTTS telemetry (port 8883 with mutual TLS and 180s keepalive), and Cloudflare Pages edge CDN.
• Architects bare-metal private cloud infrastructure (Dell Precision 5520, Proxmox VE 9.2, Linux 7.0 kernel) with Prometheus, Loki, and Grafana telemetry.

### 4. Large-Scale Engineering Leadership
• Governed technical delivery for **100+ projects** and guided distributed engineering teams of **~80 resources** across onshore, nearshore, and offshore squads.`,
    followUps: [
      "Tell me about CDK Global MyInstall",
      "Explore the sfdx-toolkit platform",
      "How does Amit handle team governance?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 4. CDK GLOBAL (MYINSTALL)
  {
    id: 'cdk',
    keywords: ['cdk', 'cdk global', 'myinstall', 'titan', 'titan dxp', 'automotive retail', 'dealer'],
    title: 'CDK Global — MyInstall (Automotive Retail Platform)',
    summary: 'Reusable platform capabilities, Titan DXP technical evaluation, and automotive dealership onboarding.',
    content: `### CDK Global — MyInstall Programme
**Client**: CDK Global (Automotive Retail Technology)  
**Programme**: MyInstall  
**Role**: Senior Technical / Solution Architect (Platform Enablement & Strategy Contributor)

### Strategic Architectural Contributions:
1. **Reusable Platform Architecture vs. One-Off Features**:
   • Advocated for a reusable capability model, proving that treating each automotive dealer requirement as an independent feature created unsustainable technical debt.
   • Designed modular software patterns enabling core onboarding steps (dealer profile configuration, document verification, site audit) to be reused across future phases and dealer networks.

2. **Digital Platform Evaluation — Titan DXP (Phase 3)**:
   • Led technical assessment of **Titan DXP** as a prospective digital experience platform capability for Phase 3.
   • Evaluated extensibility, data governance, security posture, and maintainability against CDK's architectural roadmap; participated in vendor RFP technical alignment.

3. **High-Volume PDF Generation Architecture**:
   • Deep architectural review of PDF rendering configurations, eliminating timeout errors during high-volume dealer contract generation.

4. **Automotive Ecosystem Alignment**:
   • Deep familiarity with automotive dealership workflows, franchise management, and retail enablement ecosystems.`,
    followUps: [
      "What did Amit do at Santander / Cater Allen?",
      "Tell me about MBFS / Mercedes-Benz Financial Services",
      "How does Amit evaluate platforms and RFPs?"
    ]
  },

  // 5. SANTANDER / CATER ALLEN PROGRAMME RECOVERY
  {
    id: 'santander',
    keywords: [
      'santander', 'cater allen', 'turnaround', 'recovery', 'red to green',
      'omnidtuio', 'omnistudio', 'omniscript', 'banking', 'onboarding'
    ],
    title: 'Cater Allen / Santander — Phase 2 Onboarding Turnaround',
    summary: 'Red-to-Green turnaround, resolved data model deadlocks, OmniStudio journeys, and 75% faster CI/CD.',
    content: `### Cater Allen / Santander — Customer Onboarding Transformation
**Client**: Cater Allen / Santander Private Banking  
**Programme**: Phase 2 Customer Onboarding Transformation  
**Role**: Senior Technical Architect / Architecture Leadership (Turnaround Lead)  
**Award**: Praised with **Santander Client Commendation**

### Crisis & Architectural Turnaround:
1. **Red-to-Green Delivery Rescue**:
   • Stepped into an escalated, multi-million-pound transformation that had stalled in "Red" status due to structural delivery impasses, conflicting stakeholder requirements, and data model disputes.
   • Re-established consensus between business, enterprise risk, and technical teams.

2. **Data Model Architecture Rescue**:
   • Diagnosed and overhauled the customer onboarding data model; secured formal sign-off from enterprise risk authorities.
   • Refined sharing rules, sharing sets, and custom permission sets to guarantee strict data segregation under banking regulatory standards.

3. **Salesforce OmniStudio Implementation**:
   • Directed the engineering implementation of digital onboarding flows using **OmniStudio (OmniScripts & Integration Procedures)**, abstracting complex backend logic.

4. **Automated CI/CD Release Pipeline (75% Faster Deployments)**:
   • Designed and implemented an automated **GitHub Actions CI/CD pipeline** with automated unit tests, linting, and delta package validation, reducing deployment cycle times by **75%**.`,
    followUps: [
      "What other awards has Amit received?",
      "Tell me about Danone SAP integration",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 6. DANONE — SAP, MULESOFT & MCP AI
  {
    id: 'danone',
    keywords: ['danone', 'sap', 'mulesoft', 'sor', 'system of record', 'order assist', 'mcp', 'model context protocol'],
    title: 'Danone — Enterprise Order Assist & Service Architecture',
    summary: 'Strict SAP System-of-Record boundaries, MuleSoft integration, and MCP AI agent front-end PoC.',
    content: `### Danone — Order Assist & Enterprise Service Architecture
**Client**: Danone (Global Consumer Goods)  
**Programme**: Order Assist / Global Service Architecture  
**Role**: Solution Architect / Enterprise Technical Architecture Lead (Led onsite US discovery)

### Key Architectural Contributions:
1. **Strict System-of-Record (SoR) Demarcation**:
   • Established clear architectural boundaries: **SAP ERP** remained the single source of truth for order master data, pricing, and fulfillment.
   • Positioned Salesforce strictly as the engagement and case-management tier, synchronizing updates via **MuleSoft** without duplicating transaction logic in CRM.

2. **Decoupled Backend Processing Patterns**:
   • Designed asynchronous backend processors to separate heavy operational order logic from customer service consoles, preserving sub-second UI responsiveness.
   • Architected automated Email-to-Case ingestion for high-volume customer correspondence.

3. **Model Context Protocol (MCP) Front-End Exploration**:
   • Architected a proof-of-concept utilizing **Model Context Protocol (MCP)** to explore intelligent agentic interfaces for reading and updating orders through secure APIs, demonstrating potential to decouple service teams from expensive seat licensing.`,
    followUps: [
      "Tell me about MBFS / FCA Redress Platform",
      "What is Amit's experience with Corporate Genpact?",
      "What AI agents has Amit built?"
    ]
  },

  // 7. MBFS / FCA FINANCIAL REDRESS PLATFORM
  {
    id: 'mbfs',
    keywords: [
      'mbfs', 'mercedes', 'mercedes-benz', 'fca', 'redress', 'regulatory',
      'idv', 'passwordless', 'person accounts', 'bpid', 'financial services'
    ],
    title: 'MBFS / FCA — Financial Services Customer Redress Platform',
    summary: 'Passwordless IDV, BPID-to-Person Account 1:N federation, and >5,000 daily high-volume email ingestion.',
    content: `### MBFS / FCA — Regulatory Customer Redress Platform
**Client**: Mercedes-Benz Financial Services (MBFS)  
**Technology**: Salesforce, MuleSoft, Experience Cloud, Twilio, Genesys, Phoenix API  
**Role**: Solution Architecture / Lead Enterprise Integration Architect

### Key Architectural Contributions:
1. **Passwordless Identity Verification (IDV)**:
   • Engineered a custom Apex controller matching three encrypted customer attributes: **Agreement Number, Postcode, and Surname**.
   • Authorized access to Experience Cloud with time-limited cryptographic session tokens, eliminating account registration friction while adhering to strict FCA regulatory standards.
   • Implemented IP rate-limiting, audit logging, and brute-force prevention without intrusive third-party CAPTCHA/bot walls.

2. **Decoupled Journey Orchestration**:
   • Kept Salesforce focused strictly on customer journey orchestration and evidence lifecycles, offloading complex actuarial calculations to legacy backends.

3. **Complex Identity Federation (BPID & Person Accounts)**:
   • Architected a 1:N data federation model where a single **Business Partner ID (BPID)** mapped across multiple Person Accounts and financial agreements.

4. **High-Volume Asynchronous Ingestion (>5,000 Emails/Day)**:
   • Built an automated ingestion engine processing >5,000 inbound emails daily via Email-to-Case with automated bounce management and regulatory timeline triggers (Day -5, Day 7, Day 30, Day 60).`,
    followUps: [
      "Tell me about Amit's Genpact leadership scope",
      "What is his experience with DevOps?",
      "How can I contact Amit?"
    ]
  },

  // 8. CORPORATE GENPACT & ENTERPRISE GOVERNANCE
  {
    id: 'genpact',
    keywords: [
      'genpact', 'corporate genpact', 'senior manager', 'ea', 'infosec',
      'governance', 'architecture review board', 'portfolio', '80 resources', 'team size'
    ],
    title: 'Corporate Genpact — Enterprise Architecture Governance & Leadership',
    summary: 'Senior Manager for ~8 years, governing 100+ projects and leading ~80 engineering resources across global delivery.',
    content: `### Genpact — Senior Manager & Solutions Architect (2018 – Present, ~8 Years)
Amit operates as both an organizational delivery leader and the senior technical authority across client engagements and internal corporate platform towers:

### 1. Enterprise Architecture Board (EAB) & InfoSec Governance
• Regular member of Corporate Enterprise Architecture and Information Security review boards, evaluating system integration proposals against security baselines, data residency regulations, and scalability standards.
• Governed an internal portfolio of **100+ digital and business initiatives** across the Sales & Marketing Technology Tower.

### 2. Multi-Vendor Enterprise Ecosystem
Governed integration patterns and API contracts across a complex enterprise stack:
• **Salesforce** (Sales, Service, Experience Cloud)
• **Marketo & 6sense** (Marketing Automation & ABM)
• **Copado** (Enterprise CI/CD & DevOps Governance)
• **DocuSign & Conga** (Digital Agreement Automation)
• **Informatica & Clearbit** (Data Quality & Enrichment)
• **Bizible, Allocadia, RingDNA, Poppulo, LinkedIn**

### 3. Large-Scale Engineering Leadership
• Provided architectural leadership, technical direction, and delivery assurance across distributed teams of up to **~80 resources** across onshore (UK), nearshore, and offshore squads.
• Governed delivery across Agile (Scrum/Kanban), Waterfall, and Hybrid frameworks.
• Mentored technical leads, established architecture review communities, and instituted formal Architectural Decision Records (ADRs).`,
    followUps: [
      "What awards has Amit received at Genpact?",
      "Tell me about his experience prior to Genpact",
      "Tell me about his RFP wins"
    ]
  },

  // 9. CERTIFICATIONS & FORMAL EDUCATION
  {
    id: 'certifications',
    keywords: [
      'certifications', 'certified', 'system architect', 'application architect',
      'solution architect', 'pd2', 'pd1', 'copado', 'education', 'degree', 'university', 'b.e.'
    ],
    title: 'Formal Education, Certifications & Credentials',
    summary: 'B.E. in Electronics & Communications, Salesforce System/Application Architect, Copado DevOps Consultant.',
    content: `### Education & Formal Qualifications:
• **Bachelor of Engineering (B.E.) in Electronics & Communications / Systems & Computing**  
  *2003 – 2007* | Rigorous foundation in systems engineering, digital communications, networking protocols, hardware architecture, and operating systems.

### Professional Certifications:
• **Salesforce Certified System Architect**
• **Salesforce Certified Application Architect**
• **Salesforce Certified Solution Architect**
• **Salesforce Certified Platform Developer II (PD2)**
• **Salesforce Certified Platform Developer I (PD1)**
• **Salesforce Certified Platform App Builder**
• **Salesforce Certified Administrator**
• **Copado Certified Fundamentals I & II**
• **Copado Certified Consultant (DevOps & Release Management)**

🔗 **Trailblazer Profile**: [trailblazer.me/id/hiamitbhardwaj](https://trailblazer.me/id/hiamitbhardwaj)`,
    followUps: [
      "What awards and commendations has he received?",
      "Tell me about his RFP wins",
      "Explore his open source tools"
    ]
  },

  // 10. AWARDS, COMMENDATIONS & RFP WINS
  {
    id: 'awards',
    keywords: [
      'awards', 'commendation', 'recognition', 'rfp', 'bayer', 'santander commendation',
      'bradshaw', 'wheels', 'teva', 'galderma', 'tke', 'asgn', 'wins'
    ],
    title: 'Executive Awards, Commendations & Major RFP Wins',
    summary: 'Genpact VP Commendation, Santander Client Commendation, and multi-million enterprise RFP wins.',
    content: `### Executive Recognitions & Industry Awards:
1. **Genpact VP-Level Leadership Commendation**:
   • Formally commended by executive leadership for decisive technical intervention, crisis management, and deployment stabilization during a critical production release escalation for a global conglomerate (**Bayer / Energy**).

2. **Santander / Cater Allen Client Commendation**:
   • Formally commended by Santander technology leadership for turning around the Phase 2 onboarding program from "Red" to "Green", unblocking the data model, and engineering automated CI/CD pipelines that reduced release cycle times by **75%**.

3. **Competitive RFP Technical Lead Wins**:
   • Served as lead solution architect authoring technical narratives, architecture blueprints, and delivery models that secured major enterprise client wins:
   • **Project Bradshaw**
   • **Wheels**
   • **Teva**
   • **Galderma**
   • **TKE (Thyssenkrupp Elevator)**
   • **ASGN**`,
    followUps: [
      "Tell me about Cater Allen / Santander turnaround",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 11. SIDE PROJECTS & PRODUCTION SYSTEMS
  {
    id: 'projects',
    keywords: [
      'projects', 'side projects', 'rescuematic', 'sfdx-toolkit', 'toolkit',
      'visionvox', 'email brain', 'homelab', 'proxmox', 'portfolio', 'iot'
    ],
    title: 'Applied Systems Engineering & Production Platforms',
    summary: 'Rescuematic SaaS on AWS, sfdx-toolkit IDP, VisionVox AI, Smart Email Brain, and bare-metal Proxmox hypervisor.',
    content: `### Live Production Platforms & Systems Built by Amit:

1. **[sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) — Internal Developer Platform (IDP)**
   • Next.js 14, Caddy TLS, PM2 process supervision, and Model Context Protocol (MCP) server.
   • Features self-service manifest creation (120+ metadata types), visual AST diffing, validated dry-run deployments, and background CLI update daemons.

2. **[Rescuematic](https://rescuematic.co.uk) — Cloud SaaS Core & IoT Fleet Platform**
   • AWS EC2 (Amazon Linux 2023) running FastAPI, Redis, and Python 3.11 runtimes behind Cloudflare Tunnel ingress.
   • IoT MQTTS protocol engine on port 8883 with mutual TLS, 180s keepalive, and strict 3-topic SUBACK handshakes.
   • Governed by ADR-002 (Zero-Spoofing: zero fake telemetry) and ADR-007 (atomic cross-platform schema sync).

3. **[VisionVox](https://visionvox.amitbhardwaj.co.uk) — Multimodal AI Assistant**
   • React 18, Nginx reverse proxy with TLS termination, Gemini Live WebSocket streaming for real-time camera-to-voice accessibility for visually impaired users.

4. **Smart Email Brain & Calendar Automation**
   • Cloudflare Email Routing for \`school@amitbhardwaj.co.uk\`, n8n automation, Groq Qwen 27B semantic extraction, Google Calendar sync, and PiPup ambient HUD alerts.

5. **Bare-Metal Proxmox Hypervisor & SRE Stack**
   • Headless Dell Precision 5520 running Proxmox VE 9.2 (Linux 7.0 kernel), Intel HD 530 iGPU passthrough (\`/dev/dri/renderD128\`), Prometheus, Loki, and [Grafana](https://grafana.amitbhardwaj.co.uk).

6. **Local SLM Engine (LXC 115)**
   • CPU vector-accelerated Qwen 2.5 3B (AVX2/FMA) running at 18–29 tok/s with zero cloud token cost.`,
    followUps: [
      "Tell me about sfdx-toolkit architecture",
      "What is Rescuematic?",
      "How does his homelab work?"
    ]
  },

  // 12. CONTACT & HIRING INQUIRIES
  {
    id: 'contact',
    keywords: [
      'contact', 'hire', 'email', 'phone', 'reach', 'linkedin', 'location',
      'notice period', 'salary', 'rates', 'interview', 'london'
    ],
    title: 'Contact Details, Availability & Recruiter Info',
    summary: 'Direct contact info, London location, right to work in the UK, and advisory/leadership availability.',
    content: `### Recruiter & Hiring Information for Amit Bhardwaj:

• **Email**: [amit_bhardwaj@live.com](mailto:amit_bhardwaj@live.com)  
• **LinkedIn**: [linkedin.com/in/salesforce-technical-architect](https://www.linkedin.com/in/salesforce-technical-architect/)  
• **Personal Website**: [amitbhardwaj.co.uk](https://amitbhardwaj.co.uk)  
• **GitHub**: [github.com/sfdcai](https://github.com/sfdcai)  
• **Trailblazer**: [trailblazer.me/id/hiamitbhardwaj](https://trailblazer.me/id/hiamitbhardwaj)  
• **Location**: London, United Kingdom (Full UK right to work / British citizen)  
• **Target Roles**: Head of Platform Engineering, Head of Cloud Platform, Enterprise Architect, Director of Engineering, Technology Principal.  
• **Availability**: Open to leadership interviews, executive consultations, and fractional architecture advisory.`,
    followUps: [
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact",
      "What is his experience with Genpact?"
    ]
  }
]

const DEFAULT_SUGGESTIONS = [
  "Tell me about his experience prior to Genpact",
  "Why hire Amit as Head of Platform Engineering?",
  "Tell me about CDK Global MyInstall",
  "Explain the Santander / Cater Allen turnaround"
]

// ─────────────────────────────────────────────────────────────────────────────
// INTELLIGENT RETRIEVAL & QUERY SCORING ENGINE
// Matches queries against all topics, case studies, technologies, and metrics
// ─────────────────────────────────────────────────────────────────────────────

function findBestResponse(rawQuery: string): { text: string; chips?: string[] } {
  const query = rawQuery.toLowerCase().trim()

  // Guardrail: Irrelevant off-topic inquiries
  const offTopicTriggers = [
    'recipe', 'cook', 'pasta', 'bake a cake', 'crypto to buy', 'bitcoin price',
    'joke about dogs', 'who is the president', 'translate to french', 'homework',
    'solve this math', 'capital of france'
  ]
  if (offTopicTriggers.some(t => query.includes(t))) {
    return {
      text: `I am Amit Bhardwaj's specialized **Digital Twin AI**, designed specifically to answer inquiries regarding Amit's **18+ years in Enterprise Platform Architecture, Platform Engineering, Cloud Infrastructure, and Technical Leadership**.

Would you like to explore:
• His deep **11-year career prior to Genpact** (Chandra Credit, Infomatrix, Cirrologix, HCL, Directi, Spectrum Infogain)
• His platform engineering leadership at **CDK Global** or **Cox Automotive alignment**
• His crisis recovery at **Santander / Cater Allen** (Red-to-Green turnaround)
• His enterprise governance at **Corporate Genpact** (~80 engineers, 100+ projects)
• His production cloud systems (**Rescuematic**, **sfdx-toolkit**, **VisionVox**)?`,
      chips: DEFAULT_SUGGESTIONS
    }
  }

  // 1. HIGH-PRIORITY INTENT: Prior to Genpact / Early Career / Pre-Genpact
  const isPriorToGenpact = (
    (query.includes('prior') || query.includes('before') || query.includes('pre-') || query.includes('early') || query.includes('start') || query.includes('background') || query.includes('history')) &&
    query.includes('genpact')
  ) || query.includes('before genpact') || query.includes('prior genpact') || query.includes('prior to genpact') ||
     query.includes('before 2018') || query.includes('early career') || query.includes('earlier career') ||
     query.includes('chandra') || query.includes('infomatrix') || query.includes('cirrologix') ||
     query.includes('directi') || query.includes('spectrum infogain') || query.includes('sysadmin') || query.includes('system admin')

  if (isPriorToGenpact) {
    const priorEntry = DOSSIER_ENTRIES.find(e => e.id === 'prior-to-genpact')!
    return {
      text: priorEntry.content,
      chips: priorEntry.followUps
    }
  }

  // 2. Score each dossier entry based on keyword hits and exact phrase matching
  let bestEntry: KnowledgeEntry | null = null
  let maxScore = 0

  const tokens = query.split(/\s+/).filter(t => t.length > 2)

  for (const entry of DOSSIER_ENTRIES) {
    let score = 0

    // Exact keyword or phrase match (high weight)
    for (const kw of entry.keywords) {
      if (query === kw) {
        score += 25
      } else if (query.includes(kw)) {
        score += kw.includes(' ') ? 15 : 8
      }
    }

    // Token overlap
    for (const token of tokens) {
      if (entry.title.toLowerCase().includes(token)) score += 5
      if (entry.summary.toLowerCase().includes(token)) score += 3
      if (entry.content.toLowerCase().includes(token)) score += 1
    }

    if (score > maxScore) {
      maxScore = score
      bestEntry = entry
    }
  }

  // If we found a confident match (score threshold >= 5)
  if (bestEntry && maxScore >= 5) {
    return {
      text: bestEntry.content,
      chips: bestEntry.followUps
    }
  }

  // Cross-cutting topic checks if score was low
  if (query.includes('lead') || query.includes('team') || query.includes('manage') || query.includes('size')) {
    return {
      text: `### Engineering Leadership & Delivery Governance:
Amit has spent over 8 years as **Senior Manager** at Genpact, leading architecture and delivery teams of up to **~80 resources** across global delivery centers:

• **Delivery Assurance**: Directed multi-squad engineering execution across Agile (Scrum/Kanban), Waterfall, and Hybrid enterprise milestones.
• **Architecture Governance**: Active member of Corporate Enterprise Architecture (EA) and InfoSec boards, governing standards across **100+ initiatives**.
• **Crisis Turnaround**: Proven ability to deploy into distressed, high-friction client accounts (e.g., Santander Cater Allen Phase 2, Bayer) to resolve data impasses and restore delivery trust.
• **Mentorship**: Mentored tech leads and instituted Architectural Decision Records (ADRs) to guarantee consistency across teams.`,
      chips: [
        "Tell me about his experience prior to Genpact",
        "Tell me about CDK Global MyInstall",
        "Explain the Santander / Cater Allen turnaround"
      ]
    }
  }

  if (query.includes('certif') || query.includes('degree') || query.includes('education') || query.includes('study')) {
    const certEntry = DOSSIER_ENTRIES.find(e => e.id === 'certifications')!
    return {
      text: certEntry.content,
      chips: certEntry.followUps
    }
  }

  // Default Fallback: Rich Executive Overview with actionable navigation
  return {
    text: `### Amit Bhardwaj — Digital Twin Assistant
I have direct, full access to **Amit's verified career history and architecture track record**.

Here are key areas I can answer in complete detail for recruiters and engineering leaders:
• **[Experience Prior to Genpact (2007–2018)](#)**: 11-year foundation across Chandra Credit, Infomatrix, Cirrologix, HCL, Directi (Linux SysAdmin), and Spectrum Infogain (Systems Engineering).
• **[CDK Global (MyInstall)](#)**: Reusable platform capability model, Titan DXP technical evaluation, automotive retail.
• **[Santander / Cater Allen](#)**: Mission-critical Phase 2 digital onboarding turnaround from "Red" to "Green", OmniStudio journeys, and 75% faster CI/CD.
• **[MBFS / FCA](#)**: Regulatory customer redress platform, passwordless IDV architecture, Person Account federation, and >5k daily email ingestion.
• **[Danone](#)**: System-of-Record contracts between Salesforce & SAP ERP via MuleSoft, plus Model Context Protocol (MCP) front-ends.
• **[Corporate Genpact](#)**: Senior Manager for ~8 years, governing a portfolio of 100+ projects and leading ~80 engineering resources.
• **[Production Cloud & IDP Platforms](#)**: [Rescuematic](https://rescuematic.co.uk) (AWS EC2/MQTTS), [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) (Next.js 14 IDP), and [VisionVox](https://visionvox.amitbhardwaj.co.uk).

What specific project, leadership scenario, or technical topic would you like to explore?`,
    chips: DEFAULT_SUGGESTIONS
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHATBOT MODAL & INTERACTION COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AmitAiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: `👋 **Welcome! I am Amit Bhardwaj's Digital Twin AI.**

I am grounded in Amit's **verified professional history** — covering his 18+ years across **Platform Engineering, Enterprise Architecture, Genpact Leadership (~80 engineers, 100+ projects), his deep 11-year journey prior to Genpact (Chandra Credit, Infomatrix, Cirrologix, HCL, Directi, Spectrum), CDK Global, Santander, Danone, MBFS, and live production systems**.

How can I assist your review or recruitment evaluation today?`,
      timestamp: 'Just now',
      chips: DEFAULT_SUGGESTIONS
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Listen for global openChat event (from nav or page buttons)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('openChat', handleOpen)
    return () => window.removeEventListener('openChat', handleOpen)
  }, [])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const messageIdRef = useRef(0)

  const handleSend = useCallback((textToSend?: string) => {
    const text = (textToSend || inputValue).trim()
    if (!text) return

    messageIdRef.current += 1
    const currentId = messageIdRef.current
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const userMsg: Message = {
      id: `user-${currentId}`,
      sender: 'user',
      text,
      timestamp: timeStr
    }

    setMessages(prev => [...prev, userMsg])
    if (!textToSend) setInputValue('')
    setIsTyping(true)

    // Realistic cadence (350ms - 500ms)
    setTimeout(() => {
      const response = findBestResponse(text)
      const botMsg: Message = {
        id: `bot-${currentId}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: response.chips
      }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 400)
  }, [inputValue])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Action Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open Amit AI Chat"
              className="relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-theme text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all border border-white/20 cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/foto-avatar-sm.webp"
                  alt="Amit Bhardwaj"
                  className="w-7 h-7 rounded-full object-cover border border-white/50"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-primary animate-pulse" />
              </div>
              <span className="text-sm font-semibold tracking-wide">Ask Amit AI</span>
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-in Chatbot Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[480px] h-[640px] max-h-[88vh] flex flex-col rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/foto-avatar-sm.webp"
                    alt="Amit Bhardwaj"
                    className="w-9 h-9 rounded-full object-cover border-2 border-primary/40 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-card" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm text-foreground">Amit's Digital Twin</h3>
                    <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-primary/20 text-primary border border-primary/30">
                      AI Verified
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500 inline" /> Grounded in Verified Professional History
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-end gap-2 max-w-[92%]">
                    {m.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-1 border border-primary/30">
                        <Bot className="w-3.5 h-3.5 text-primary" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed shadow-sm text-sm ${
                        m.sender === 'user'
                          ? 'bg-gradient-theme text-white rounded-br-xs font-medium whitespace-pre-line'
                          : 'bg-muted/70 text-foreground border border-border/60 rounded-bl-xs prose-chat'
                      }`}
                    >
                      {m.sender === 'user' ? (
                        m.text
                      ) : (
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-medium underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-0.5"
                              >
                                {children}
                                <ExternalLink className="w-2.5 h-2.5 inline opacity-70 ml-0.5" />
                              </a>
                            ),
                            h3: ({ children }) => (
                              <h3 className="font-semibold text-foreground text-sm mt-3 mb-1 first:mt-0">
                                {children}
                              </h3>
                            ),
                            h4: ({ children }) => (
                              <h4 className="font-semibold text-foreground text-xs mt-2.5 mb-1 text-primary">
                                {children}
                              </h4>
                            ),
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 mb-2">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 mb-2">{children}</ol>,
                            li: ({ children }) => <li className="text-sm">{children}</li>,
                            strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>
                          }}
                        >
                          {m.text}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground/60 px-1 mt-1">
                    {m.timestamp}
                  </span>

                  {/* Suggestion Chips */}
                  {m.chips && m.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-8 max-w-[95%]">
                      {m.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(chip)}
                          className="text-xs px-2.5 py-1 rounded-full bg-card hover:bg-primary/10 text-primary border border-primary/30 hover:border-primary transition-all text-left flex items-center gap-1 shadow-xs cursor-pointer"
                        >
                          <span>{chip}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-muted-foreground text-xs pl-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <span className="text-[11px] text-muted-foreground ml-1">Consulting career archives...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-card border-t border-border">
              <div className="flex items-center gap-2 bg-muted/50 rounded-xl px-3 py-2 border border-border focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about CDK, Santander, prior experience, platform leadership..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-hidden"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-1.5 rounded-lg bg-primary text-white hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground/70 mt-1.5 px-1">
                <span>Direct inquiry assistant for Amit Bhardwaj</span>
                <span className="flex items-center gap-1 text-muted-foreground/80">
                  <Server className="w-2.5 h-2.5 text-primary" /> Private Verified Architecture Base
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
