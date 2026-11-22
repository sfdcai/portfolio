import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Send, Bot, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  timestamp: string
  chips?: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPREHENSIVE PRIVATE DOSSIER KNOWLEDGE BASE (SANITIZED EXECUTIVE EDITION)
// Strict Enterprise NDA Compliant — References clients by industry aliases
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
• **Enterprise Integrations**: Decoupled multi-platform integration bridging Salesforce, SAP S/4HANA ERP, MuleSoft, AWS, and bespoke event streams while enforcing strict System-of-Record (SoR) boundaries.
• **Crisis Recovery**: Proven track record of turning distressed, multi-million-pound programs from Red to Green (Major UK Private Bank onboarding turnaround, high-stakes global Life Sciences deployments).

📍 **Location**: London, United Kingdom | Open to senior technology leadership, Head of Platform Engineering, Director of Engineering, and Chief Architect appointments.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "What cross-industry experience does Amit have?",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1b. CROSS-INDUSTRY MATRIX & ENTERPRISE PORTFOLIO (SANITIZED & NDA-COMPLIANT)
  {
    id: 'industry-matrix',
    keywords: ['industry', 'industries', 'sector', 'sectors', 'vertical', 'verticals', 'domains', 'cross-industry', 'portfolio', 'nda', 'sanitized'],
    title: 'Enterprise Portfolio by Industry Sector (Sanitized & NDA-Protected)',
    summary: 'Executive track record mapped by industry vertical: Automotive Retail SaaS, Private Banking, Captive Finance, FMCG, Life Sciences, and Systems Infrastructure.',
    content: `### Cross-Industry Architecture & Domain Portfolio
To respect strict enterprise non-disclosure agreements (NDAs) while demonstrating verified delivery metrics, Amit's portfolio is structured by **Industry Sector**, **Architectural Scope**, and **Business Impact**:

| Industry Sector | Enterprise Role | Scale & Architectural Highlights | Key Outcomes & Delivery Metrics |
| :--- | :--- | :--- | :--- |
| **Automotive Retail Technology & SaaS** | Enterprise Platform Architect | Metadata-driven dealership provisioning engine; automated rollback pipelines | **65% reduction** in dealership onboarding lead time; zero-downtime cutovers across **10,000+ car dealerships**. |
| **Private Banking & Wealth Management** | Solutions Architect & Turnaround Lead | Intermediary digital onboarding portal; micro-frontends; asynchronous KYC/document validation | Rescued distressed programme from **RED to GREEN in 6 months**; onboarding cycle slashed from **36 days to 10 days**; fincrime escalations reduced **76% → 1%**; CSAT **4.9/5**. |
| **Automotive Captive Finance & Consumer Credit** | Platform Architect & Regulatory Tech Lead | High-throughput event ingestion; immutable audit calculation engine; automated restitution | **100% FCA regulatory compliance** delivered to statutory deadline; processed **1.03M+ finance contracts** with zero discrepancy. |
| **Fast-Moving Consumer Goods (FMCG) & Supply Chain** | Enterprise Integration Architect | Decoupled front-end orchestration layer bridging cloud CRM with SAP S/4HANA ERP; automated dispute resolution | Launched live Jan 2026; order dispute resolution cycle time cut by **50%**; eliminated manual swivel-chair operations. |
| **Life Sciences, AgTech & Healthcare Systems** | Enterprise Solutions Architect | Regulated commercial CRM; GxP-aligned audit trails; high-volume async processing pipelines | Successfully secured multi-million-pound digital transformation pursuits; deployed compliant field systems across international markets. |
| **Commercial Credit & Alternative Lending** | Platform Architect & IT Systems Lead | End-to-end commercial loan origination; risk scoring algorithms; legacy on-prem relational DB migration | Commercial loan underwriting turnaround cut from **14 days to <48 hours**; established modern cloud compliance posture. |
| **Enterprise Internet Infrastructure & Systems** | Linux Systems & Network Administrator | Production Linux server fleets; authoritative BIND DNS clusters; Postfix/Exim mail routers | Maintained **99.9% fleet uptime**; authored sysadmin Bash/Perl automations reducing manual maintenance overhead by **40%**. |

*Note: Enterprise client identities are referenced via approved industry aliases to uphold client confidentiality.*`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Tell me about his banking & wealth management experience",
      "Tell me about his automotive domain work",
      "Explain the FMCG / SAP S/4HANA integration"
    ]
  },

  // 1c. PRE-SALES & RFP PURSUIT ARCHITECTURE
  {
    id: 'presales',
    keywords: [
      'pre-sales', 'presales', 'pre sales', 'rfp', 'rfps', 'bid', 'bids',
      'proposal', 'proposals', 'pursuit', 'pitch', 'sales engineering', 'solution design'
    ],
    title: 'Enterprise Pre-Sales Architecture, RFP Defenses & Commercial Pursuits',
    summary: 'Technical discovery, multi-million enterprise RFP defenses, vendor platform evaluations, and winning competitive client bids.',
    content: `### Pre-Sales Architecture, RFP Strategy & Commercial Pursuits
Amit brings extensive hands-on experience leading pre-sales architecture, technical discovery, and RFP solutions across multi-million-pound enterprise bids:

### 1. Enterprise Pre-Sales Blueprints & RFPs (Genpact & Infomatrix)
• **Technical Strategy & Discovery**: Partnered with enterprise client partners and commercial leads to formulate win themes, translate business challenges into technical roadmaps, and define target-state architecture blueprints for global RFPs.
• **Effort Estimation & Delivery Models**: Calculated granular effort estimations, squad sizing, license models, and delivery governance frameworks across multi-region transformation bids.

### 2. High-Stakes Architecture Defense Workshops
• **Life Sciences & Healthcare**: Led technical architecture defense workshops for global digital transformation pursuits (e.g. order-to-cash global blueprints).
• **Clean Energy & Sustainability**: Architected solution blueprints for major clean energy RFPs (e.g. solar technology platform review).
• **Publishing & Information Services**: Spearheaded delivery-quality turnaround architectures for major international scientific publishers.

### 3. Digital Platform & Vendor Technical Evaluations
• **Platform Capability Evaluation**: Spearheaded the architectural evaluation of prospective digital experience platforms for a Tier-1 Automotive Retail SaaS provider, analyzing API extensibility, security posture, multitenancy, and total cost of ownership (TCO).

### 4. Rapid Proof-of-Concept (PoC) Engineering
• Proven ability to rapidly prototype complex integrations (e.g. SAP S/4HANA decoupled SoR patterns and Model Context Protocol agentic front-ends) to demonstrate technical feasibility and win client confidence.`,
    followUps: [
      "Explain the private banking onboarding turnaround",
      "What automotive work has he done?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1d. BANKING & WEALTH MANAGEMENT DEEP DIVE
  {
    id: 'banking-fintech',
    keywords: ['banking', 'private banking', 'fintech', 'wealth management', 'private bank', 'fincrime', 'aml', 'kyc', 'signatory mandate'],
    title: 'Financial Services, Private Banking & Wealth Management Experience',
    summary: 'Turnaround of major UK private bank onboarding portal (36 to 10 days, fincrime 76% to 1%), Milky Way 2.0 blueprint, and commercial lending underwriting.',
    content: `### Financial Services, Private Banking & FinTech Architecture
Amit brings extensive technical architecture experience across regulated banking, wealth management, and commercial lending:

### 1. Major UK Private Bank & Wealth Management Turnaround
• **Turnaround Leadership**: Stepped into a distressed multi-million-pound onboarding transformation in RED status, aligning business, financial crime risk, and technical teams to achieve GREEN status in 6 months.
• **Onboarding Lead Time Slashed (36 → 10 Days)**: Re-architected intermediary onboarding journeys with micro-frontends and Salesforce OmniStudio, cutting commercial account opening lead time by **72%**.
• **Compliance & Financial Crime Optimization**: Overhauled validation and ingestion rules, reducing false-positive compliance escalations from **76% to under 1%**.
• **Client CSAT 4.9/5**: Intermediary broker satisfaction reached an unprecedented 4.9/5.
• **Milky Way 2.0 Signatory Mandate Blueprint**: Engineered the target-state architectural blueprint for complex corporate and trust account opening with multi-party digital signing.

### 2. Specialist Commercial Credit & Alternative Lending (Chandra Credit Ltd.)
• **Loan Underwriting Modernization**: Architected an end-to-end cloud loan origination and risk-scoring platform.
• **Turnaround from 14 Days to <48 Hours**: Slashed commercial credit underwriting approval cycles by 85% with automated credit decision algorithms.
• **Legacy Migration with Field-Level Encryption**: Migrated on-prem credit databases into cloud repositories with strict field-level encryption for financial records.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Tell me about his automotive industry experience",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1e. AUTOMOTIVE DOMAIN DEEP DIVE
  {
    id: 'automotive-domain',
    keywords: ['automotive', 'automotive industry', 'dealership', 'dealer', 'car retail', 'automotive retail', 'captive finance', 'dms'],
    title: 'Automotive Industry Expertise — Retail SaaS & Captive Finance',
    summary: 'Dealership SaaS provisioning across 10,000+ rooftops and 1.03M+ agreement FCA redress platform.',
    content: `### Automotive Industry Architecture Track Record
Amit's automotive experience spans both **retail dealership technology SaaS** and **automotive captive finance & consumer credit**:

### 1. Tier-1 Automotive Retail Technology & SaaS Provider
• **Scope**: Dealership software deployment across **10,000+ automotive rooftops** in North America.
• **Platform Capability Model**: Championed reusable provisioning components over one-off dealer scripts, eliminating configuration drift.
• **65% Lead Time Reduction**: Cut dealership software installation lead time from days to under 3 hours with automated rollback safeguards.
• **Platform Evaluation**: Led architectural assessment of prospective digital experience platforms for Phase 3 integration.

### 2. Premier Automotive Captive Finance & Consumer Credit Provider
• **Scope**: High-profile FCA regulatory redress platform reconciling **1.03 Million+ vehicle financing agreements**.
• **Statutory Compliance**: Delivered 100% compliant calculation engine ahead of statutory deadlines with zero calculation discrepancies.
• **Passwordless Customer Verification**: Engineered 3-attribute tokenized identity verification (Agreement No, Postcode, Surname) without intrusive CAPTCHA barriers.
• **Identity Federation**: Mapped single Business Partner IDs (BPID) across multiple Person Accounts and vehicle agreements.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Tell me about his banking & wealth management experience",
      "Explain the FMCG / SAP S/4HANA integration"
    ]
  },

  // 1f. FMCG & SUPPLY CHAIN DEEP DIVE
  {
    id: 'fmcg-supply-chain',
    keywords: ['fmcg', 'fmcs', 'fmc', 'supply chain', 'consumer goods', 'sap s/4hana', 'order assist', 'food and beverage', 'order-to-cash'],
    title: 'FMCG, Supply Chain & Decoupled ERP Architecture',
    summary: 'Global Fortune 500 consumer goods order assist (CORA), live Jan 2026, cutting dispute resolution time by 50% without corrupting SAP SoR.',
    content: `### FMCG, Supply Chain & Enterprise ERP Architecture
**Enterprise NDA Alias**: *Global Fortune 500 Consumer Goods & Food Conglomerate*  
**Programme**: CORA (Customer Order Resolution Assist)  
**Status**: Live in production (January 2026)

### Key Architectural Contributions:
1. **Decoupled Architecture with Strict SAP S/4HANA System of Record (SoR)**:
   • Designed an event-driven architecture where **SAP S/4HANA ERP** remains the immutable single source of truth for pricing, billing, and inventory.
   • Used Salesforce Service Cloud purely as the engagement and case-management tier, synchronizing updates via **MuleSoft** without duplicating transactional logic in CRM.

2. **50% Reduction in Order Dispute Cycle Time**:
   • Streamlined order exception handling across North American customer operations, cutting average dispute resolution times in half.
   • Automated reconciliation of shipping variances, pricing deductions, and carrier transit milestones.

3. **Model Context Protocol (MCP) Front-End Exploration**:
   • Architected a proof-of-concept utilizing **Model Context Protocol (MCP)** to explore intelligent agentic interfaces for reading and updating orders through secure APIs, demonstrating potential to decouple service teams from expensive seat licensing.`,
    followUps: [
      "What cross-industry experience does Amit have?",
      "Tell me about his pre-sales & RFP experience",
      "What is his experience with Genpact?"
    ]
  },

  // 2. OVERALL JOURNEY PRIOR TO GENPACT (OVERVIEW 2007 - 2018)
  {
    id: 'prior-to-genpact',
    keywords: [
      'prior genpact', 'prior to genpact', 'before genpact', 'pre-genpact', 'before 2018',
      'early career', 'earlier career', 'previous roles', 'past roles', 'start career'
    ],
    title: 'Comprehensive Career Journey Prior to Genpact (2007 – 2018)',
    summary: '11 years across Chandra Credit, Infomatrix, Cirrologix, HCL Technologies, Directi, and Spectrum Infogain.',
    content: `### Amit Bhardwaj — Career Journey Prior to Genpact (2007 – 2018)
Before joining Genpact in 2018, Amit built an **11-year progressive engineering career** across financial credit systems, IT consulting, enterprise CRM delivery, and foundational Linux/networking infrastructure:

1. **Chandra Credit Ltd. (2017 – 2018) | Salesforce Architect & IT Systems Lead**
   • **Underwriting & Credit Modernization**: Architected and deployed an end-to-end Salesforce platform modernizing commercial loan origination, credit risk scoring, and underwriting workflows.
   • **Legacy Data Migration**: Led the extraction, transformation, normalization, and migration of legacy on-premises relational databases into Salesforce, enforcing field-level encryption and strict audit tracking.
   • **Regulatory Governance**: Engineered compliance validation rules and KYC document pipelines aligned with financial lending regulations.
   • **DevOps & Standards**: Established initial source-driven repository practices, sandbox management protocols, and regression test suites.

2. **Infomatrix Inc. (2015 – 2017) | Salesforce Architect**
   • **Enterprise Architecture & Pre-Sales**: Led technical solution design, pre-sales architectural blueprints, and effort estimations for enterprise client RFPs.
   • **ERP & Financial Integrations**: Architected real-time REST and SOAP API-led integration bridges connecting Salesforce CRM with enterprise ERP, billing, and accounting systems.
   • **Engineering Leadership & Mentorship**: Led, mentored, and conducted code reviews for a team of 10+ developers and consultants; enforced Apex design patterns, governor limit best practices, and trigger frameworks.
   • **Security & Data Modeling**: Designed complex role hierarchies, sharing sets, custom object relationships, and granular profile permissions.

3. **Cirrologix Pvt Ltd (2014 – 2015) | Salesforce Consultant**
   • **Custom Solution Architecture**: Engineered custom Apex triggers, Visualforce pages, batch processors, and automated workflow solutions for commercial enterprise clients.
   • **Business Process Translation**: Conducted technical discovery workshops with business stakeholders, converting complex operational requirements into scalable technical specifications.
   • **Deployment & Release Management**: Standardized deployment tracking across multi-tiered sandbox environments, eliminating metadata dependency deadlocks and optimizing unit test code coverage (>85%).

4. **HCL Technologies (2013 – 2014) | Salesforce Consultant / Technical Engineer**
   • **Enterprise Core Engineering**: Developed high-volume asynchronous Apex classes, scheduled batch jobs, and queueable interfaces for global accounts across Life Sciences and Financial Services.
   • **Third-Party Integrations**: Built and maintained secure REST/SOAP web service integrations exchanging transactional customer data with external legacy systems.
   • **Production Support & Cutover**: Participated in major client go-lives, deployment dry-runs, data migrations, and production hypercare.

5. **Directi (2009 – 2010) | Linux System Administrator**
   • **Infrastructure Hardening & 99.9% Uptime**: Built, secured, and maintained production Linux server fleets (CentOS, RedHat, Debian) and network gateways hosting mission-critical web applications.
   • **Core Internet Protocols**:
     - **DNS**: Managed master/slave BIND DNS servers, authoritative forward/reverse lookup zones, and TTL tuning.
     - **Mail Infrastructure**: Administered Postfix and Exim mail routers with SPF, DKIM, anti-relay enforcement, and spam filtering.
     - **Web Servers**: Configured Apache HTTP virtual hosts, SSL/TLS certificate chains, and load balancing.
   • **Systems Automation**: Authored Bash and Perl automation scripts for automated log auditing, disk threshold alerts, and automated daemon recovery, reducing manual sysadmin workload by 40%.

6. **Spectrum Infogain Services (2007 – 2009) | System Engineer**
   • **Physical Hardware Diagnostics**: Diagnosed, disassembled, and repaired enterprise workstations, motherboards, RAM modules, and power supplies.
   • **Operating Systems & Storage**: Installed and patched Linux and Windows Server environments, configured filesystem partitioning (Ext3, NTFS), and configured hardware RAID arrays (RAID 0, 1, 5).
   • **Networking Layer**: Terminated Ethernet cabling, configured managed switches, established VLANs, resolved IP conflicts, and routed local corporate subnets.

💡 **Why Amit's Prior Experience Matters to Engineering Leaders**:
Amit did not learn platform architecture in an abstract vacuum. His career began at the physical hardware, network packet, and Linux kernel layers before mastering enterprise software development and CRM architecture. This rare first-principles foundation enables him to diagnose deep performance bottlenecks, design resilient decoupled architectures, and lead full-stack platform engineering teams with authentic technical authority.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Tell me about his work at Directi",
      "Tell me about Chandra Credit",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 2b. DIRECTI
  {
    id: 'directi',
    keywords: ['directi', 'linux admin', 'sysadmin', 'system administrator', 'postfix', 'exim', 'bind dns', 'apache', 'building servers'],
    title: 'Directi — Linux Systems Administration & Server Provisioning (2009–2010)',
    summary: 'Production Linux server fleets, authoritative BIND DNS, Postfix/Exim mail routing, and 99.9% uptime.',
    content: `### Directi — Linux Systems Administrator (2009 – 2010)
At Directi, Amit was responsible for administering and hardening mission-critical Internet infrastructure hosting high-volume domain registries, DNS clusters, and web services:

### Core Responsibilities & Achievements:
1. **Server Provisioning & Fleet Hardening**:
   • Built, patched, and hardened production Linux fleets running **CentOS, RedHat, and Debian**.
   • Implemented granular iptables firewall rules, TCP wrappers, and SSH key-based authentication across all server endpoints.
   • Monitored system health, CPU/RAM saturation, and I/O wait states across distributed server clusters.

2. **DNS & Authoritative Name Services**:
   • Administered master/slave **BIND DNS** clusters managing millions of public forward and reverse lookup queries with zero downtime.

3. **High-Throughput Mail Infrastructure**:
   • Administered enterprise **Postfix** and **Exim** mail transfer agents (MTAs).
   • Implemented SPF records, DKIM signing, SMTP authentication, and spam filtering to ensure deliverability and eliminate open relays.

4. **Web Infrastructure & Virtual Hosts**:
   • Configured and tuned Apache HTTP servers, multi-tenant virtual host routing, and SSL/TLS certificate chains.

5. **Sysadmin Scripting & Automation**:
   • Wrote custom **Bash** and **Perl** scripts for automated log auditing, disk threshold alerting, and daemon self-healing, reducing manual maintenance overhead by **40%**.
   • Maintained **99.9% uptime** across production fleets.`,
    followUps: [
      "Tell me about Spectrum Infogain",
      "Tell me about his experience prior to Genpact",
      "What did Amit do at Chandra Credit?"
    ]
  },

  // 2c. SPECTRUM INFOGAIN
  {
    id: 'spectrum',
    keywords: ['spectrum', 'spectrum infogain', 'hardware diagnostics', 'motherboard', 'raid array', 'raid', 'cabling'],
    title: 'Spectrum Infogain Services — Physical Hardware Engineering (2007–2009)',
    summary: 'Hardware diagnostics, motherboard repair, RAID 0/1/5 configuration, and corporate network cabling.',
    content: `### Spectrum Infogain Services — System Engineer (2007 – 2009)
Amit's career began directly at the physical hardware, operating system, and local networking layers:

### Core Responsibilities:
1. **Component-Level Hardware Diagnostics & Assembly**:
   • Disassembled, diagnosed, repaired, and assembled enterprise desktop workstations and server towers.
   • Tested motherboards, microprocessors, RAM modules, power supplies, and peripheral controller cards.

2. **Storage Architecture & RAID Configurations**:
   • Configured hardware and software **RAID arrays (RAID 0, 1, 5)** to guarantee data redundancy and fault tolerance.
   • Partitioned and formatted filesystems (Ext3, NTFS) and executed multi-tier data backup regimes.

3. **Operating System Provisioning**:
   • Performed bare-metal installations, kernel patching, and driver configurations across Linux and Windows Server environments.

4. **Network Cabling & Managed Switch Infrastructure**:
   • Terminated Cat5/Cat6 Ethernet cables, patched networking racks, configured managed switches, established corporate VLANs, and resolved local IP routing conflicts.`,
    followUps: [
      "Tell me about his work at Directi",
      "Tell me about Chandra Credit",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 2d. CHANDRA CREDIT LTD
  {
    id: 'chandra',
    keywords: ['chandra', 'chandra credit', 'underwriting', 'loan origination', 'credit risk', 'kyc'],
    title: 'Chandra Credit Ltd. — Salesforce Architect & IT Systems Lead (2017–2018)',
    summary: 'Commercial loan origination, credit risk scoring, legacy DB migration with field-level encryption, approval time cut 14d to <48h.',
    content: `### Chandra Credit Ltd. — Salesforce Architect & IT Systems Lead (2017 – 2018)
Amit modernized the technology and credit underwriting operations of a specialist commercial lending firm:

### Core Architectural Contributions:
1. **Commercial Loan Origination Platform**:
   • Architected an end-to-end cloud platform modernizing commercial loan applications, collateral evaluation, and borrower compliance tracking.

2. **Automated Risk Scoring & Credit Rules**:
   • Designed dynamic credit risk scoring algorithms that accelerated underwriting approvals from **14 days to under 48 hours**.

3. **Legacy Database Migration**:
   • Extracted, normalized, and migrated legacy on-premises databases into cloud repositories with strict field-level encryption for financial records.

4. **Regulatory Governance & KYC**:
   • Engineered validation rules and KYC document pipelines aligned with non-banking financial company (NBFC) lending guidelines.`,
    followUps: [
      "Tell me about Infomatrix",
      "Tell me about his experience prior to Genpact",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 2e. INFOMATRIX INC
  {
    id: 'infomatrix',
    keywords: ['infomatrix', 'erp integration', 'pre-sales architecture', 'mentorship'],
    title: 'Infomatrix Inc. — Salesforce Architect (2015–2017)',
    summary: 'Pre-sales architectural blueprints, ERP integrations via REST/SOAP, governor limit best practices, team lead of 10+ engineers.',
    content: `### Infomatrix Inc. — Salesforce Architect (2015 – 2017)
Amit served as lead technical architect guiding solution design and engineering teams:

### Core Contributions:
1. **Pre-Sales Solution Architecture**:
   • Led technical discovery, solution architecture, and effort estimation for enterprise client RFPs and digital transformation bids.

2. **ERP & Accounting System Integrations**:
   • Architected real-time REST and SOAP API-led bridges connecting Salesforce with enterprise ERP and billing platforms.

3. **Team Leadership & Mentorship**:
   • Mentored a delivery squad of 10+ developers and consultants, enforcing Apex design patterns, trigger frameworks, and governor limit best practices.

4. **Security & Data Modeling**:
   • Designed complex role hierarchies, sharing sets, custom object relationships, and granular profile security architectures.`,
    followUps: [
      "Tell me about Cirrologix",
      "Tell me about his experience prior to Genpact",
      "Explain the private banking onboarding turnaround"
    ]
  },

  // 2f. CIRROLOGIX
  {
    id: 'cirrologix',
    keywords: ['cirrologix'],
    title: 'Cirrologix Pvt Ltd — Salesforce Consultant (2014–2015)',
    summary: 'Custom Apex/Visualforce solutions, multi-tiered sandbox release management, and unit test coverage (>85%).',
    content: `### Cirrologix Pvt Ltd — Salesforce Consultant (2014 – 2015)
• **Custom Solution Architecture**: Engineered custom Apex triggers, Visualforce pages, batch processors, and automated workflow solutions for commercial enterprise clients.
• **Technical Discovery**: Translated complex business operational requirements into scalable technical specifications.
• **Release Management**: Standardized deployment tracking across multi-tiered sandbox environments, eliminating metadata dependency deadlocks and optimizing unit test code coverage (>85%).`,
    followUps: [
      "Tell me about HCL Technologies",
      "Tell me about Infomatrix",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 2g. HCL TECHNOLOGIES
  {
    id: 'hcl',
    keywords: ['hcl', 'hcl technologies', 'life sciences'],
    title: 'HCL Technologies — Salesforce Consultant / Technical Engineer (2013–2014)',
    summary: 'Enterprise engineering role: high-volume asynchronous Apex, Life Sciences & Financial Services integrations, major cutovers.',
    content: `### HCL Technologies — Salesforce Consultant / Technical Engineer (2013 – 2014)
• **Enterprise Asynchronous Engineering**: Developed high-volume asynchronous Apex classes, scheduled batch jobs, and queueable interfaces for global accounts across Life Sciences and Financial Services.
• **Third-Party Integrations**: Built and maintained secure REST/SOAP web service integrations exchanging transactional customer data with external legacy systems.
• **Production Support & Cutover**: Participated in major client go-lives, deployment dry-runs, data migrations, and production hypercare.`,
    followUps: [
      "Tell me about Directi",
      "Tell me about his experience prior to Genpact",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 3. HEAD OF PLATFORM ENGINEERING / CLOUD LEADERSHIP
  {
    id: 'platform-leadership',
    keywords: [
      'head of platform', 'platform engineering', 'cloud platform',
      'platform thinking', 'reusable', 'idp', 'internal developer platform', 'devex',
      'developer experience', 'golden paths', 'why hire'
    ],
    title: 'Head of Platform Engineering & Cloud Leadership Fit',
    summary: 'Platform thinking, reusable capabilities, internal developer platform tooling, and large-scale delivery leadership.',
    content: `Amit is uniquely equipped for **Head of Platform Engineering** and **Cloud Platform Leadership** roles:

### 1. Platform Thinking & Reusable Capabilities
• At a **Tier-1 Automotive Retail SaaS Provider**, Amit transformed digital onboarding by championing a **reusable platform capability model** over one-off custom feature development.
• Slashed dealership onboarding lead times across 10,000+ car dealerships by **65%** with automated rollback safeguards.

### 2. Internal Developer Platform (IDP) & DevEx Tooling
• Engineered [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk), a production self-service developer platform featuring automated manifest generation across 120+ metadata types, visual diffing, background CLI update daemons, and embedded **Model Context Protocol (MCP)** AI agents.
• Reduced deployment friction and replaced legacy change sets with automated source-driven GitHub Actions and Copado CI/CD release pipelines.

### 3. Enterprise Cloud & Production SRE Depth
• Built and operates [Rescuematic](https://rescuematic.co.uk) on **AWS EC2 (Amazon Linux 2023)** with Redis caching, FastAPI microservices, MQTTS telemetry (port 8883 with mutual TLS and 180s keepalive), and Cloudflare Pages edge CDN.
• Architects bare-metal private cloud infrastructure (Dell Precision 5520, Proxmox VE 9.2, Linux 7.0 kernel) with Prometheus, Loki, and Grafana telemetry.

### 4. Large-Scale Engineering Leadership
• Governed technical delivery for **100+ projects** and guided distributed engineering teams of **~80 resources** across onshore, nearshore, and offshore squads.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Explore the sfdx-toolkit platform",
      "Explain the private banking onboarding turnaround",
      "Tell me about his experience prior to Genpact"
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
• Directs the architectural review of complex enterprise programs, evaluating multi-cloud integration patterns, security boundaries, and data residency standards across **100+ business initiatives**.
• Standardized Architectural Decision Records (ADRs) to eliminate technical debt across multi-squad teams.

### 2. Delivery Leadership & Team Scale (~80 Resources)
• Leads, mentors, and directs cross-functional delivery organizations of up to **~80 engineering resources** (Technical Architects, Tech Leads, Senior Developers, QA Leads, and DevOps Engineers).
• Mentors 15+ Tech Leads; chairs technical onboarding and candidate technical assessments.

### 3. Pre-Sales Strategy & High-Stakes RFP Pursuits
• Formulated technical blueprints and delivery models for major competitive bids in Life Sciences, Clean Energy, and Financial Services.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Explain the private banking onboarding turnaround",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 9. CERTIFICATIONS & CREDENTIALS
  {
    id: 'certifications',
    keywords: [
      'certification', 'certifications', 'certified', 'credentials',
      'cta', 'system architect', 'application architect', 'pd2', 'copado', 'education', 'degree'
    ],
    title: 'Formal Education, Certifications & Credentials',
    summary: 'B.Tech in IT, Salesforce Application Architect, System Architect, PD1/PD2, Copado Certified.',
    content: `### Formal Education & Verified Credentials

### 1. Formal Degree:
• **Bachelor of Technology (B.Tech) in Information Technology**  
  *Rajasthan Technical University (RTU), India* (2003 – 2007)  
  Rigorous four-year engineering program covering computer hardware, operating system design, data structures, and computer networking.

### 2. Salesforce Architecture & Design Credentials:
• **Salesforce Certified Application Architect**
• **Salesforce Certified System Architect**
• **Salesforce Certified Data Architecture & Management Designer**
• **Salesforce Certified Integration Architecture Designer**
• **Salesforce Certified Development Lifecycle & Deployment Designer**
• **Salesforce Certified Identity & Access Management Designer**
• **Salesforce Certified Sharing & Visibility Designer**

### 3. Salesforce Developer & Consultant Credentials:
• **Salesforce Certified Platform Developer II (PD2)**
• **Salesforce Certified Platform Developer I (PD1)**
• **Salesforce Certified Platform App Builder**
• **Salesforce Certified Administrator**

### 4. DevOps & Tooling Certifications:
• **Copado Certified Fundamentals I & II**`,
    followUps: [
      "What awards has Amit received?",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 10. AWARDS & COMMENDATIONS
  {
    id: 'awards',
    keywords: [
      'award', 'awards', 'recognition', 'commendation', 'cheers', 'client recognition', 'vp award'
    ],
    title: 'Executive Awards, Commendations & Major RFP Wins',
    summary: 'Executive leadership awards, client commendations, and multi-million enterprise RFP wins.',
    content: `### Executive Awards & Industry Recognitions

1. **Executive Crisis Recovery Commendation**:
   • Formally commended by executive leadership for decisive technical intervention, crisis management, and deployment stabilization during a critical production release escalation for a global conglomerate.

2. **Major Banking Client Commendation**:
   • Formally commended by technology leadership at a major UK private bank for turning around their digital onboarding program from "Red" to "Green", unblocking the customer data model, and engineering automated CI/CD pipelines that reduced release cycle times by **75%**.

3. **Genpact Cheers Recognition (Multiple)**:
   • Recognized repeatedly for outstanding engineering delivery assurance, high-stakes cutovers, and cross-team architectural mentorship.`,
    followUps: [
      "Explain the private banking onboarding turnaround",
      "Tell me about his pre-sales & RFP experience",
      "How can I contact Amit?"
    ]
  },

  // 11. SIDE PROJECTS & APPLIED SYSTEMS ENGINEERING
  {
    id: 'projects',
    keywords: [
      'project', 'projects', 'side project', 'experiments', 'rescuematic', 'visionvox',
      'sfdx-toolkit', 'homelab', 'proxmox', 'linux kernel', 'smart email brain'
    ],
    title: 'Applied Systems Engineering & Production Platforms',
    summary: 'sfdx-toolkit (IDP), Rescuematic (AWS/MQTTS IoT), VisionVox (Gemini Live), and bare-metal Proxmox hypervisor cluster.',
    content: `### Applied Systems Engineering & Production Platforms

### 1. [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) — Internal Developer Platform (IDP)
• **Architecture**: Full-stack TypeScript/React IDP for Salesforce engineering teams.
• **Features**: Live metadata dependency analysis, side-by-side AST/XML diffing, automated package manifest builder, and Model Context Protocol (MCP) agent integrations.

### 2. [Rescuematic](https://rescuematic.co.uk) — Production IoT Microservices Platform
• **Architecture**: IoT fleet management SaaS deployed on **AWS EC2 (Amazon Linux 2023)** behind Cloudflare Pages edge.
• **Core Microservices**: Custom Python FastAPI async core, Redis caching, and high-concurrency MQTTS broker (port 8883) with mutual TLS and 180s keepalive state machine.

### 3. [VisionVox](https://visionvox.amitbhardwaj.co.uk) — Real-Time Multimodal AI Assistant
• **Architecture**: Low-latency voice/vision accessibility assistant built on the Gemini Multimodal Live API over WebSockets, performing spatial quadrant scans and real-time OCR.

### 4. Smart Email Brain & Ingestion Engine
• **Architecture**: Zero-touch autonomous event ingestion pipeline using Cloudflare Email Routing webhooks, n8n, and local quantized SLMs (Qwen 2.5 3B on LXC 115).

### 5. Bare-Metal Enterprise Hypervisor & Telemetry Stack
• **Hardware & OS**: Dell Precision 5520 server running **Proxmox VE 9.2 (Linux 7.0 kernel)** with ZRAM memory compression, Intel QuickSync iGPU acceleration, and unified Prometheus, Grafana, and Loki observability.`,
    followUps: [
      "Explore the sfdx-toolkit platform",
      "Why hire Amit as Head of Platform Engineering?",
      "How can I contact Amit?"
    ]
  },

  // 12. CONTACT & RECRUITER INFO
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'phone', 'call', 'reach', 'linkedin', 'github', 'hire', 'interview', 'london', 'location'
    ],
    title: 'Contact Details, Availability & Recruiter Info',
    summary: 'London UK, British Citizen, open to Head of Platform Engineering and Enterprise Architect leadership roles.',
    content: `### Contact Amit Bhardwaj
• **Email**: [amit@amitbhardwaj.co.uk](mailto:amit@amitbhardwaj.co.uk)  
• **LinkedIn**: [linkedin.com/in/amitbhardwaj-crm/](https://www.linkedin.com/in/amitbhardwaj-crm/)  
• **Personal Website**: [amitbhardwaj.co.uk](https://amitbhardwaj.co.uk)  
• **GitHub**: [github.com/sfdcai](https://github.com/sfdcai)  
• **Location**: London, United Kingdom (Full UK right to work / British citizen)  
• **Target Roles**: Head of Platform Engineering, Head of Cloud Platform, Enterprise Architect, Director of Engineering, Technology Principal.  
• **Availability**: Open to executive interviews, leadership appointments, and strategic advisory.`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact"
    ]
  }
]

const DEFAULT_SUGGESTIONS = [
  "Tell me about his pre-sales & RFP experience",
  "Explain the private banking onboarding turnaround",
  "What automotive retail SaaS work has he done?",
  "Tell me about his experience prior to Genpact"
]

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT-SIDE LOCAL FALLBACK ENGINE (Used if edge API is offline/dev)
// Enhanced with fuzzy keyword routing, typo tolerance, and strict NDA aliases
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
      text: `I am Amit Bhardwaj's **Digital Twin AI**, specialized in answering inquiries regarding Amit's **18+ years in Enterprise Platform Architecture, Platform Engineering, Cloud Infrastructure, and Technical Leadership**.

Would you like to explore:
• His **pre-sales architecture & multi-million RFP defense experience**
• His deep **11-year career prior to Genpact** (Chandra Credit, Infomatrix, Cirrologix, HCL, Directi, Spectrum)
• His platform engineering leadership in **Automotive Retail Technology & SaaS** (10,000+ dealerships)
• His crisis recovery at a **Major UK Private Bank** (Red-to-Green turnaround in 6 months)
• His enterprise governance at **Corporate Genpact** (~80 engineers, 100+ projects)
• His production cloud systems (**sfdx-toolkit**, **Rescuematic**, **VisionVox**)?`,
      chips: DEFAULT_SUGGESTIONS
    }
  }

  // 1. PRE-SALES & RFP PURSUITS
  if (
    query.includes('pre-sales') || query.includes('presales') || query.includes('pre sales') ||
    query.includes('rfp') || query.includes('bid') || query.includes('proposal') ||
    query.includes('pursuit') || query.includes('pitch')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'presales')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 2. SPECIFIC COMPANY TARGETING FIRST
  if (query.includes('directi')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'directi')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('spectrum')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'spectrum')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('chandra')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'chandra')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('infomatrix')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'infomatrix')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('cirrologix')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'cirrologix')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('hcl')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'hcl')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 3. OVERALL PRIOR-TO-GENPACT JOURNEY
  const isPriorToGenpact = (
    (query.includes('prior') || query.includes('before') || query.includes('pre-') || query.includes('early') || query.includes('start') || query.includes('background') || query.includes('history')) &&
    query.includes('genpact')
  ) || query.includes('before genpact') || query.includes('prior genpact') || query.includes('prior to genpact') ||
     query.includes('before 2018') || query.includes('early career') || query.includes('earlier career')

  if (isPriorToGenpact) {
    const priorEntry = DOSSIER_ENTRIES.find(e => e.id === 'prior-to-genpact')!
    return {
      text: priorEntry.content,
      chips: priorEntry.followUps
    }
  }

  // 4. INDUSTRY & DOMAIN TARGETING (WITH TYPO TOLERANCE)
  if (
    query.includes('fmcg') || query.includes('fmcs') || query.includes('fmc') ||
    query.includes('supply chain') || query.includes('consumer goods') || query.includes('food and beverage')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'fmcg-supply-chain')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (
    query.includes('bank') || query.includes('fintech') || query.includes('wealth') ||
    query.includes('private bank') || query.includes('fincrime')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'banking-fintech')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (
    query.includes('automotive') || query.includes('dealership') ||
    (query.includes('car ') && !query.includes('career')) || query.includes('cars ')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'automotive-domain')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (
    query.includes('industry') || query.includes('industries') || query.includes('sector') ||
    query.includes('sectors') || query.includes('vertical') || query.includes('verticals') ||
    query.includes('cross-industry') || query.includes('portfolio') || query.includes('nda') ||
    query.includes('sanitized') || query.includes('domains')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'industry-matrix')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 5. Score each dossier entry based on keyword hits and exact phrase matching
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
• **Crisis Turnaround**: Proven ability to deploy into distressed, high-friction client accounts to resolve technical impasses and restore delivery trust.
• **Mentorship**: Mentored 15+ tech leads and instituted Architectural Decision Records (ADRs) to guarantee consistency across teams.`,
      chips: [
        "Tell me about his pre-sales & RFP experience",
        "Explain the private banking onboarding turnaround",
        "Tell me about his experience prior to Genpact"
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

  // Default Fallback: Rich Executive Overview with actionable navigation (100% NDA-Clean)
  return {
    text: `### Amit Bhardwaj — Digital Twin Assistant
I have direct, full access to **Amit's verified career history and architecture track record**.

Here are key areas I can answer in complete detail for recruiters and engineering leaders:
• **[Pre-Sales Architecture & RFPs](#)**: Technical discovery, solution design, effort estimations, and winning multi-million transformation bids.
• **[Experience Prior to Genpact (2007–2018)](#)**: 11-year foundation across Chandra Credit, Infomatrix, Cirrologix, HCL, Directi (Linux SysAdmin), and Spectrum Infogain (Systems Engineering).
• **[Automotive Retail Technology & SaaS](#)**: Reusable platform capability model cutting dealership software onboarding across 10,000+ car dealerships by 65%.
• **[Private Banking & Wealth Management](#)**: Mission-critical digital onboarding turnaround from "Red" to "Green" in 6 months, reducing cycle time from 36 to 10 days (CSAT 4.9/5).
• **[Automotive Captive Finance & Regulatory Redress](#)**: Reconciled 1.03M+ finance contracts with zero discrepancy under statutory FCA deadlines.
• **[FMCG & Supply Chain (SAP ERP Decoupling)](#)**: Live Jan 2026; cut dispute resolution cycle time by 50% while keeping SAP S/4HANA as immutable SoR.
• **[Corporate Genpact Governance](#)**: Senior Manager for ~8 years, governing 100+ initiatives and leading ~80 engineering resources.
• **[Production Cloud & IDP Platforms](#)**: [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) (IDP), [Rescuematic](https://rescuematic.co.uk) (AWS EC2 / MQTTS), and [VisionVox](https://visionvox.amitbhardwaj.co.uk).

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

I am powered by an **AI reasoning engine** grounded in Amit's **verified 18+ year career history** — covering his **Platform Engineering leadership, Enterprise Architecture governance (~80 engineers, 100+ projects at Genpact), pre-sales RFP pursuits, his foundational 11-year journey prior to Genpact, and production cloud systems**.

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
  }, [messages, isTyping, isOpen])

  const handleSend = useCallback(async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim()
    if (!text) return

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const currentId = Date.now()

    const userMsg: Message = {
      id: `user-${currentId}`,
      sender: 'user',
      text,
      timestamp: timeStr
    }

    setMessages(prev => [...prev, userMsg])
    if (!textToSend) setInputValue('')
    setIsTyping(true)

    // 1. Attempt Live Serverless Edge AI Inference (/api/chat on Cloudflare Workers AI)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: text,
          history: messages.slice(-6)
        })
      })

      if (response.ok) {
        const data = await response.json()
        if (data.text) {
          const botMsg: Message = {
            id: `bot-${currentId}`,
            sender: 'bot',
            text: data.text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chips: [
              "Tell me about his pre-sales & RFP experience",
              "Explain the private banking onboarding turnaround",
              "What automotive retail SaaS work has he done?",
              "Tell me about his experience prior to Genpact"
            ]
          }
          setMessages(prev => [...prev, botMsg])
          setIsTyping(false)
          return
        }
      }
    } catch (err) {
      console.warn('Edge AI API unavailable, utilizing local dossier engine:', err)
    }

    // 2. Fallback to Local Semantic Knowledge Engine if Edge API is offline
    setTimeout(() => {
      const localResponse = findBestResponse(text)
      const botMsg: Message = {
        id: `bot-${currentId}`,
        sender: 'bot',
        text: localResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: localResponse.chips
      }
      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 400)
  }, [inputValue, messages])

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

      {/* Full-Screen / Modal Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl h-[85vh] max-h-[720px] flex flex-col bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/foto-avatar-sm.webp"
                      alt="Amit Bhardwaj"
                      className="w-9 h-9 rounded-full object-cover border-2 border-primary"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-card" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-sm text-foreground">Amit Bhardwaj — Digital Twin</h3>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        Verified AI
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <span>Enterprise Platform Architect</span>
                      <span>•</span>
                      <span className="text-emerald-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Edge AI Online
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Chat"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Scrollport */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 text-sm">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-xs shadow-md shadow-primary/20'
                          : 'bg-muted/50 text-foreground border border-border/60 rounded-bl-xs'
                      }`}
                    >
                      {msg.sender === 'user' ? (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1.5 prose-headings:my-2 prose-ul:my-1.5 prose-li:my-0.5 text-sm">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-muted-foreground mt-1 px-1">
                      {msg.timestamp}
                    </span>

                    {/* Actionable Follow-up Chips for Bot Responses */}
                    {msg.sender === 'bot' && msg.chips && msg.chips.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[88%] sm:max-w-[85%]">
                        {msg.chips.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(chip)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-card border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all text-left cursor-pointer"
                          >
                            <span>{chip}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Live Typing / Thinking Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-muted-foreground text-xs italic py-1 px-2 bg-muted/30 rounded-lg w-fit border border-border/40">
                    <Bot className="w-3.5 h-3.5 text-primary animate-pulse" />
                    <span>Amit AI is analyzing dossier & synthesizing response...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input & Dispatch Bar */}
              <div className="p-3 sm:p-4 border-t border-border bg-card/60 backdrop-blur-md">
                <div className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-3 py-1.5 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about pre-sales, banking turnaround, automotive SaaS, platform leadership, prior experience..."
                    className="flex-1 bg-transparent py-1.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-hidden"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    aria-label="Send Message"
                    className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:hover:bg-primary transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-muted-foreground/80">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" />
                    Powered by Cloudflare Workers Edge AI (Llama 3.1 8B Instruct)
                  </span>
                  <span>Press ↵ to send</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
