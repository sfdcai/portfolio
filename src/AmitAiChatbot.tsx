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
// CONVERSATIONAL KNOWLEDGE BASE & NATURAL DIALOGUE ENGINE
// Strict Enterprise NDA Compliant — Contextual, natural, and human-toned
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
    keywords: ['about', 'who is', 'overview', 'summary', 'profile', 'bio', 'background', 'amit', 'tell me about him'],
    title: 'Executive Biography & Professional Positioning',
    summary: 'Enterprise Platform & Engineering Leader with 18+ years of experience, Senior Salesforce Architect & Principal Solutions Architect at Genpact UK.',
    content: `Amit Bhardwaj is an **Enterprise Platform Architect and Systems Engineering Leader** based in London with over 18 years of progressive technical experience, including 8+ years at **Genpact** as **Senior Salesforce Architect / Principal Solutions Architect**.

In this capacity, Amit oversees the Salesforce technical architecture process, enterprise design standards, and delivery assurance across the **UK and Europe**.

What truly sets Amit apart is his rare **"metal-to-cloud" foundation**: he began his career at the physical hardware and Linux systems level before mastering enterprise cloud platforms, large-scale systems integration (Salesforce, SAP S/4HANA, AWS), and technology governance across global delivery organizations of up to **~80 engineers**.

### Key Highlights of His Career:
• **UK & European Enterprise Mandate**: Oversees solution architecture across UK & Europe, directing flagship initiatives including FCA regulatory redress, private banking onboarding, and consumer goods order resolution.
• **Strategic Governance & Scale**: Chairs Architecture Review Boards (EAB) and InfoSec design reviews, governing 100+ business initiatives across multi-disciplinary engineering squads.
• **High-Stakes Crisis Turnarounds**: Proven track record stepping into distressed enterprise programs in RED status and steering them to GREEN (such as turning around commercial onboarding at a major UK private bank in 6 months).
• **Decoupled Architecture & Integrations**: Decouples complex multi-cloud ecosystems bridging Salesforce, SAP S/4HANA ERP, MuleSoft, and AWS while strictly protecting the System-of-Record (SoR).
• **First-Principles Systems Engineering**: Active builder who designs and operates production platforms—including [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) (Internal Developer Platform) and [Rescuematic](https://rescuematic.co.uk) (24/7 cloud continuity platform on AWS EC2 & Cloudflare edge rescuing orphaned Rotimatic flatbread robots worldwide).

Amit is based in London (British Citizen) and is open to conversations regarding **Head of Platform Engineering**, **Enterprise Architect**, **Director of Engineering**, and **Technology Principal** appointments.

Would you like to explore his crisis turnaround experience, his pre-sales RFP defenses, or his 11-year journey before Genpact?`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Explain the private banking onboarding turnaround",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1b. CROSS-INDUSTRY MATRIX & ENTERPRISE PORTFOLIO
  {
    id: 'industry-matrix',
    keywords: ['industry', 'industries', 'sector', 'sectors', 'vertical', 'verticals', 'domains', 'cross-industry', 'portfolio', 'nda', 'sanitized'],
    title: 'Enterprise Portfolio by Industry Sector',
    summary: 'Executive track record mapped by industry vertical: Automotive Retail SaaS, Private Banking, Captive Finance, FMCG, Life Sciences, and Systems Infrastructure.',
    content: `Amit has delivered mission-critical architectures across several highly regulated and high-throughput industry sectors:

• **Private Banking & Wealth Management**: Rescued a distressed commercial onboarding program for a major UK private bank from RED to GREEN in 6 months, cutting account opening cycle times from 36 days to 10 days and reducing fincrime escalations from 76% to under 1% (CSAT 4.9/5).
• **Automotive Captive Finance**: Architected an FCA regulatory redress calculation engine reconciling 1.03M+ vehicle financing agreements with zero discrepancy ahead of statutory deadlines.
• **Automotive Retail Technology & SaaS**: Engineered a metadata-driven provisioning engine for a Tier-1 automotive software provider, slashing dealership onboarding lead times across 10,000+ car dealerships by 65%.
• **FMCG & Supply Chain**: Led the integration architecture for CORA (live Jan 2026) at a Fortune 500 food and consumer goods enterprise, cutting order dispute cycles by 50% while keeping SAP S/4HANA as the decoupled System of Record via MuleSoft.
• **Life Sciences & Clean Energy**: Led pre-sales architecture defenses and technical discovery workshops for multi-million-pound bids, including a 24-hour CI/CD deployment rescue for a global wind energy platform.
• **Core Internet Infrastructure & Systems**: Administered production Linux fleets, authoritative BIND DNS clusters, and Postfix/Exim mail routers with 99.9% uptime at Directi.

*Note: In accordance with professional non-disclosure agreements, client engagements are referenced using industry sector descriptions.*

Which sector would you like to dive deeper into?`,
    followUps: [
      "Tell me about his banking & wealth management experience",
      "What automotive work has he done?",
      "Explain the FMCG / SAP S/4HANA integration",
      "Tell me about his pre-sales & RFP experience"
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
    content: `Amit brings extensive hands-on experience leading pre-sales technical discovery, solution architecture, and high-stakes RFP defenses:

• **Winning Enterprise RFPs**: At both Genpact and Infomatrix, Amit partnered closely with commercial directors and client partners to translate complex business challenges into target-state architectural blueprints, compute delivery squad sizing, and author winning multi-million-pound proposals.
• **CTO-Level Pursuit Defenses**: He has led live technical architecture defense workshops before prospective client CTOs and technology boards across Life Sciences (global order-to-cash), Clean Energy & Utilities (solar technology platform), and Scientific Publishing.
• **Platform & Vendor Evaluations**: Evaluated prospective enterprise software platforms, analyzing API extensibility, security, multi-tenancy, and total cost of ownership (such as Titan DXP for a Tier-1 automotive SaaS provider).
• **Rapid Proof-of-Concepts (PoCs)**: He frequently engineers working PoCs—such as decoupled ERP integration patterns and agentic AI workflows—to demonstrate feasibility and give client leadership complete confidence before contracts are signed.

Would you like to hear about a specific bid defense or discuss how he approaches delivery sizing?`,
    followUps: [
      "Explain the private banking onboarding turnaround",
      "What automotive work has he done?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1d. BANKING & WEALTH MANAGEMENT
  {
    id: 'banking-fintech',
    keywords: ['banking', 'private banking', 'fintech', 'wealth management', 'private bank', 'fincrime', 'aml', 'kyc', 'signatory mandate', 'cater allen', 'santander', 'milky way'],
    title: 'Financial Services, Private Banking & Wealth Management Experience',
    summary: 'Turnaround of major UK private bank onboarding portal (36 to 10 days, fincrime 76% to 1%), Milky Way 2.0 blueprint, and commercial lending underwriting.',
    content: `Amit has significant experience across regulated banking, wealth management, and commercial lending.

His most notable delivery was leading the crisis turnaround of a mission-critical digital onboarding program for a **Major UK Private Banking & Wealth Management Institution**:

• **The Red-to-Green Recovery**: Stepped into a distressed multi-million-pound commercial onboarding program that was in RED status with significant stakeholder friction. Over 6 months, he aligned technical, operations, and financial crime risk teams, bringing the program to GREEN status.
• **72% Faster Account Opening**: Re-architected intermediary broker journeys using micro-frontends and Salesforce OmniStudio, slashing commercial account opening times from 36 days down to just 10 days.
• **Compliance & Fincrime Precision**: Overhauled data validation rules, reducing false-positive compliance escalations from 76% to under 1%, which drove broker CSAT to a record 4.9/5.
• **Milky Way 2.0 Blueprint**: Authored the target-state architectural blueprint for complex corporate and trust account opening with multi-party digital signing.

Earlier in his career, he also architected the cloud credit origination platform for Chandra Credit, modernizing risk-scoring workflows and cutting loan approval times from 14 days to under 48 hours.

Would you like to explore his regulatory redress work in automotive finance, or his pre-sales architecture experience?`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "What automotive work has he done?",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 1e. AUTOMOTIVE DOMAIN DEEP DIVE
  {
    id: 'automotive-domain',
    keywords: ['automotive', 'automotive industry', 'dealership', 'dealer', 'car retail', 'automotive retail', 'captive finance', 'dms', 'cdk', 'mbfs', 'fca redress'],
    title: 'Automotive Industry Expertise — Retail SaaS & Captive Finance',
    summary: 'Dealership SaaS provisioning across 10,000+ rooftops and 1.03M+ agreement FCA redress platform.',
    content: `Amit's automotive experience spans two very distinct, high-impact areas: **dealership technology SaaS** and **captive automotive finance**:

1. **Automotive Retail Technology & SaaS (10,000+ Dealerships):**
   • For a Tier-1 automotive software provider, he engineered a reusable platform provisioning engine that replaced one-off dealer scripts, cutting dealership software installation lead times by **65%** with automated rollback safeguards.
   • He also led the architectural evaluation of prospective digital experience platforms (Titan DXP) for Phase 3 integration.

2. **Automotive Captive Finance & Regulatory Redress (1.03M Agreements):**
   • For a premier global automotive captive finance provider, he architected an FCA regulatory redress calculation engine delivered ahead of statutory enforcement cutoffs.
   • Reconciled **1.03 million+ vehicle financing agreements** with zero calculation discrepancies.
   • Engineered a custom passwordless 3-attribute tokenized identity verification system (Agreement Number, Postcode, Surname) without intrusive CAPTCHA barriers, validated by a 41-scenario automated UAT suite.

Are you interested in hearing more about the dealership provisioning engine or the regulatory redress platform?`,
    followUps: [
      "Tell me about his pre-sales & RFP experience",
      "Tell me about his banking & wealth management experience",
      "Explain the FMCG / SAP S/4HANA integration"
    ]
  },

  // 1f. FMCG & SUPPLY CHAIN
  {
    id: 'fmcg-supply-chain',
    keywords: ['fmcg', 'fmcs', 'fmc', 'supply chain', 'consumer goods', 'sap s/4hana', 'sap', 'order assist', 'food and beverage', 'order-to-cash', 'danone', 'cora'],
    title: 'FMCG, Supply Chain & Decoupled ERP Architecture',
    summary: 'Global Fortune 500 consumer goods order assist (CORA), live Jan 2026, cutting dispute resolution time by 50% without corrupting SAP SoR.',
    content: `Yes, Amit has extensive FMCG and enterprise supply chain experience! Most recently, he served as Enterprise Integration Architect for a major digital transformation program (CORA) for a **Global Fortune 500 Consumer Goods & Food Conglomerate**, which went live in production in January 2026.

Here are the key problems he solved:
• **Decoupled Architecture with SAP S/4HANA**: The primary architectural challenge was ensuring SAP S/4HANA remained the immutable System of Record (SoR) for pricing, billing, and deductions. Rather than replicating complex ERP logic inside the CRM, he designed an event-driven integration layer via MuleSoft so Salesforce acted purely as the engagement and case-resolution tier.
• **50% Faster Dispute Resolution**: By automating reconciliation for shipping variances, pricing disputes, and deductions, the team cut average dispute cycle times in half across North American customer operations.
• **Model Context Protocol (MCP) Exploration**: He also led a proof-of-concept exploring how agentic AI interfaces using MCP could safely query orders and initiate dispute resolutions through secure APIs.

Would you like to explore how this compares to his work in automotive retail or private banking?`,
    followUps: [
      "Tell me about his automotive retail experience",
      "Explain the private banking onboarding turnaround",
      "Tell me about his pre-sales & RFP experience"
    ]
  },

  // 2. CAREER PRIOR TO GENPACT (2007 – 2018 OVERVIEW)
  {
    id: 'prior-to-genpact',
    keywords: [
      'prior genpact', 'prior to genpact', 'before genpact', 'pre-genpact', 'before 2018',
      'early career', 'earlier career', 'previous roles', 'past roles', 'start career',
      'what did he do before genpact', 'career before genpact'
    ],
    title: 'Comprehensive Career Journey Prior to Genpact (2007 – 2018)',
    summary: '11 years across Chandra Credit, Infomatrix, Cirrologix, HCL Technologies, Directi, and Spectrum Infogain.',
    content: `Before joining Genpact in 2018, Amit built an **11-year progressive engineering career** that started right at the physical hardware and Linux kernel layers before moving up the stack into commercial credit, consulting, and enterprise cloud architecture.

Here is how his journey unfolded:
• **Commercial Lending & FinTech (Chandra Credit, 2017–2018)**: As Salesforce Architect & IT Systems Lead, he designed an end-to-end cloud loan origination platform that accelerated commercial underwriting from 14 days down to under 48 hours, migrating legacy on-prem databases with field-level encryption.
• **Enterprise Consulting & Pre-Sales (Infomatrix & Cirrologix, 2014–2017)**: Led technical pre-sales and architecture for enterprise RFPs, designed real-time REST/SOAP API bridges connecting CRM with core ERP systems, and mentored an engineering team of 10+.
• **Enterprise Core Engineering (HCL Technologies, 2013–2014)**: Engineered high-volume asynchronous Apex pipelines, scheduled batch jobs, and enterprise integrations for global life sciences and financial services clients.
• **Linux Systems Administration & Networking (Directi & Spectrum, 2007–2010)**: Maintained 99.9% uptime across production Linux fleets, administered authoritative BIND DNS clusters, managed Postfix/Exim mail routers with anti-spam security, wrote custom Bash/Perl automation scripts cutting sysadmin overhead by 40%, and performed component-level hardware repair and switch routing.

This hardware-to-cloud journey is what gives Amit a true first-principles edge—he doesn't just configure clouds, he understands what's happening at the network packet, kernel buffer, and database query levels.

Would you like to zoom into a specific chapter, such as his work at Directi or Chandra Credit?`,
    followUps: [
      "Tell me about his work at Directi",
      "What did Amit do at Chandra Credit?",
      "Tell me about his pre-sales & RFP experience",
      "What did Amit do at Corporate Genpact?"
    ]
  },

  // 2b. DIRECTI
  {
    id: 'directi',
    keywords: ['directi', 'linux admin', 'sysadmin', 'system administrator', 'postfix', 'exim', 'bind dns', 'apache', 'building servers', 'dns cluster'],
    title: 'Directi — Linux Systems Administration & Server Provisioning (2009–2010)',
    summary: 'Production Linux server fleets, authoritative BIND DNS, Postfix/Exim mail routing, and 99.9% uptime.',
    content: `At Directi (2009–2010), Amit worked as a **Linux System Administrator** responsible for keeping the production server fleets and core internet infrastructure running with **99.9% uptime** for one of India's premier web hosting and domain registry providers.

Here is what he was responsible for day-to-day:
• **DNS & Core Internet Infrastructure**: Administered authoritative master/slave **BIND DNS** clusters handling millions of domain lookup queries with zero downtime, tuning TTLs and authoritative forward/reverse lookup zones.
• **Mail Transfer Agents**: Managed high-throughput **Postfix** and **Exim** mail transfer agents (MTAs), implementing SPF, DKIM signing, SMTP authentication, and spam filtering to eliminate open relays and maintain high delivery reputation.
• **Server Fleet Hardening**: Built, patched, and secured CentOS, RedHat, and Debian servers, setting up iptables firewall rules and SSH key-based access.
• **Systems Automation**: Authored custom **Bash** and **Perl** scripts for automated log auditing, disk threshold alerts, and daemon self-healing, reducing routine sysadmin overhead by **40%**.

This early systems work explains why Amit approaches modern cloud platforms and Kubernetes from first principles—he knows what's happening at the operating system and network layers.

Would you like to know how he moved from Linux into cloud platforms, or hear about another phase of his career?`,
    followUps: [
      "Tell me about Spectrum Infogain",
      "Tell me about his experience prior to Genpact",
      "What did Amit do at Chandra Credit?"
    ]
  },

  // 2c. SPECTRUM INFOGAIN
  {
    id: 'spectrum',
    keywords: ['spectrum', 'spectrum infogain', 'hardware diagnostics', 'motherboard', 'raid array', 'raid', 'cabling', 'hardware'],
    title: 'Spectrum Infogain Services — Physical Hardware Engineering (2007–2009)',
    summary: 'Hardware diagnostics, motherboard repair, RAID 0/1/5 configuration, and corporate network cabling.',
    content: `At Spectrum Infogain Services (2007–2009), Amit started his career directly at the physical hardware, operating system, and local networking layers as a **System Engineer**.

This was hands-on, foundational systems work:
• **Component-Level Diagnostics**: Disassembled, diagnosed, repaired, and assembled enterprise workstations, motherboards, RAM modules, power supplies, and controller cards.
• **Storage & RAID Architectures**: Configured hardware and software **RAID arrays (RAID 0, 1, 5)** to guarantee data redundancy, partitioned Ext3 and NTFS filesystems, and executed multi-tier backup regimes.
• **Networking & Infrastructure**: Terminated Cat5/Cat6 Ethernet cabling, patched server racks, configured managed switches, established corporate VLANs, and resolved local IP routing conflicts.

Starting at the physical layer gave Amit a tangible, mechanical understanding of computing that still shapes how he evaluates architecture, network hops, and memory latency today.

Would you like to see how this evolved into his Linux sysadmin work at Directi?`,
    followUps: [
      "Tell me about his work at Directi",
      "Tell me about Chandra Credit",
      "Tell me about his experience prior to Genpact"
    ]
  },

  // 2d. CHANDRA CREDIT LTD
  {
    id: 'chandra',
    keywords: ['chandra', 'chandra credit', 'underwriting', 'loan origination', 'credit risk', 'kyc', 'commercial lending', 'credit ltd'],
    title: 'Chandra Credit Ltd. — Salesforce Architect & IT Systems Lead (2017–2018)',
    summary: 'Commercial loan origination, credit risk scoring, legacy DB migration with field-level encryption, approval time cut 14d to <48h.',
    content: `At Chandra Credit (2017–2018), Amit served as **Salesforce Architect & IT Systems Lead**, leading the digital modernization of a specialist commercial lending firm:

• **Underwriting Modernization**: Architected an end-to-end cloud loan origination platform that automated credit risk scoring and accelerated loan approval turnaround times from **14 days down to under 48 hours**.
• **Secure Legacy Data Migration**: Migrated legacy on-premise relational databases into cloud repositories, implementing strict field-level encryption and audit trails for sensitive borrower financial records.
• **Regulatory Governance**: Built compliance validation rules and KYC document verification pipelines aligned with non-banking financial lending guidelines.
• **Engineering Standards**: Established initial source-driven version control, sandbox staging environments, and regression test suites.

This role bridged his deep technical skills with regulated financial operations. Would you like to hear about his enterprise banking work at Genpact or his consulting roles at Infomatrix?`,
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
    content: `At Infomatrix Inc. (2015–2017), Amit served as a **Salesforce Architect** leading technical solution design, pre-sales architecture, and delivery engineering:

• **Pre-Sales Solution Architecture**: Partnered with commercial leads to conduct technical discovery workshops, formulate architectural blueprints, and size effort estimations for enterprise client RFPs and digital transformation bids.
• **ERP & Accounting System Integrations**: Architected real-time REST and SOAP API-led bridges connecting Salesforce with enterprise ERP, billing, and accounting platforms.
• **Team Leadership & Mentorship**: Mentored and led a delivery squad of 10+ developers and consultants, enforcing Apex design patterns, trigger frameworks, and governor limit best practices.
• **Data & Security Modeling**: Designed complex role hierarchies, sharing sets, custom object relationships, and granular profile security architectures.

Are you interested in his consulting work, his pre-sales pursuit experience, or his enterprise governance at Genpact?`,
    followUps: [
      "Tell me about Cirrologix",
      "Tell me about his experience prior to Genpact",
      "Explain the private banking onboarding turnaround"
    ]
  },

  // 2f. CIRROLOGIX & HCL
  {
    id: 'cirrologix',
    keywords: ['cirrologix', 'hcl', 'hcl technologies', 'life sciences'],
    title: 'Cirrologix & HCL Technologies — Core Engineering & Consulting (2013–2015)',
    summary: 'Enterprise engineering role: high-volume asynchronous Apex, Life Sciences & Financial Services integrations, major cutovers.',
    content: `Between 2013 and 2015, Amit worked as an enterprise developer and technical consultant across HCL Technologies and Cirrologix:

• **HCL Technologies (2013–2014)**: Technical Engineer developing high-volume asynchronous Apex classes, scheduled batch jobs, and queueable interfaces for global accounts across Life Sciences and Financial Services. Maintained secure REST/SOAP web service integrations exchanging transactional customer data.
• **Cirrologix (2014–2015)**: Salesforce Consultant designing custom Visualforce and Apex applications, conducting technical discovery workshops, and standardizing multi-tiered sandbox release management to eliminate metadata deadlocks and maintain >85% test coverage.

This phase solidified his deep programmatic mastery of multitenant runtimes and integration patterns. Would you like to hear about his transition into architecture leadership?`,
    followUps: [
      "Tell me about Infomatrix",
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
      'developer experience', 'golden paths', 'why hire', 'why appoint', 'leadership fit'
    ],
    title: 'Head of Platform Engineering & Cloud Leadership Fit',
    summary: 'Platform thinking, reusable capabilities, internal developer platform tooling, and large-scale delivery leadership.',
    content: `Amit is uniquely equipped for **Head of Platform Engineering**, **Director of Engineering**, or **Enterprise Architect** appointments because he combines four rare strengths:

1. **True Platform Mindset**: He avoids one-off bespoke scripting in favor of reusable platform capabilities. At a Tier-1 automotive software provider, this cut dealership software onboarding lead times by **65%** across 10,000+ rooftops.
2. **First-Principles Systems Depth**: Because he started as a Linux sysadmin and hardware engineer, he understands memory management, TCP/IP sockets, and database indexing. He can troubleshoot low-level production issues that high-level architects often miss.
3. **Internal Developer Platform (IDP) Builder**: He conceived and built [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk), an IDP for Salesforce engineering teams featuring automated metadata dependency graphs, visual diffing, and CI/CD automation. He champions developer velocity and golden paths.
4. **Governance & Scale**: Over ~8 years at Genpact, he has served on Enterprise Architecture and InfoSec boards governing 100+ initiatives, while mentoring 15+ tech leads and guiding delivery organizations of up to **~80 engineers**.

He speaks comfortably to the board and C-suite while maintaining authentic technical credibility with engineers in the trenches.

Would you like to discuss his leadership style or review his production systems like Rescuematic?`,
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
      'governance', 'architecture review board', 'portfolio', '80 resources', 'team size', 'eab',
      'principal architect', 'lead architect'
    ],
    title: 'Corporate Genpact — Enterprise Architecture Governance & Platform Leadership',
    summary: 'Senior Salesforce Architect & Principal Solutions Architect at Genpact overseeing UK & Europe.',
    content: `Amit has spent 8+ years at Genpact in London as **Senior Salesforce Architect & Principal Solutions Architect**, operating as both an organizational delivery leader and senior technical authority:

• **UK & European Leadership Mandate**: Oversees the Salesforce technical architecture process, enterprise design standards, and delivery assurance for Genpact across the **United Kingdom and Europe**.
• **Enterprise Architecture Board (EAB) & InfoSec**: Serves on corporate governance boards evaluating multi-cloud integration patterns, security boundaries, and data residency across **100+ business initiatives**.
• **Delivery Scale (~80 Resources)**: Leads, mentors, and directs cross-functional delivery organizations of up to **~80 engineers** (Technical Architects, Tech Leads, Developers, QA, and DevOps).
• **Mentorship**: Mentors 15+ tech leads and established Architectural Decision Records (ADRs) to eliminate technical debt across multi-squad engagements.
• **Crisis Turnarounds**: Frequently brought into distressed enterprise client engagements to untangle architectural impasses, align stakeholders, and restore delivery trust.

Would you like to hear about a specific crisis recovery or his pre-sales pursuit experience?`,
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
      'cta', 'system architect', 'application architect', 'pd2', 'copado', 'education', 'degree',
      'btech', 'b.tech', 'university', 'rtu', 'claude code', 'mcp'
    ],
    title: 'Formal Education, Certifications & Credentials',
    summary: 'B.E. in IT, Salesforce Application & System Architect, Claude Code 101, MCP, Copado Certified.',
    content: `Amit holds a formal **Bachelor of Engineering (B.E.) in Information Technology** from **University of Rajasthan, India (2003–2007)**—a rigorous 4-year engineering curriculum covering computer hardware, operating system kernels, data structures, and telecommunications networking, preceded by CBSE Class XII in Physics, Chemistry, Maths & Computer Science.

His verified professional certifications and credentials include:
• **Salesforce Certified Application Architect**
• **Salesforce Certified System Architect**
• **Salesforce Certified Sharing & Visibility Architect**
• **Salesforce Certified Data Architect**
• **Salesforce Certified Platform Developer I & II (PD1 & PD2)**
• **Salesforce Certified Administrator (SCA)** & Platform App Builder
• **Salesforce AI Associate & Data Cloud Consultant**
• **Copado Certified Consultant (DevOps & Release Management)** & Fundamentals I & II
• **Certificate of Completion: Claude Code 101**
• **Certificate of Completion: Introduction to Claude Cowork**
• **Microsoft Certified Professional (MCP)**
• **TOGAF 9.1 Enterprise Architecture Practitioner**

Would you like to know about his honors & awards or his enterprise platform leadership experience?`,
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
      'award', 'awards', 'recognition', 'commendation', 'cheers', 'client recognition', 'diamond award', 'incisive', 'excellence award'
    ],
    title: 'Executive Honors, Corporate Awards & Client Commendations',
    summary: 'Diamond Award, INCISIVE Award, Excellence Award, Client commendations, and multi-million enterprise RFP wins.',
    content: `Amit has received multiple marquee honors and formal recognitions throughout his career:

• **Diamond Award (2018)**: The highest annual individual corporate excellence recognition at Genpact, awarded for exceptional architectural delivery.
• **INCISIVE Award — Intellectual Agility (2020/21)**: Awarded for intellectual agility and cross-disciplinary architecture problem-solving across complex client engagements.
• **Excellence Award — Evolution of Marketing Operating Infrastructure (2020/21)**: Commended for architecture ownership, InfoSec reviews, and multi-platform marketing integrations across global corporate systems.
• **Gold Awards (2019, 2021, 2022, 2023) & Silver Award (2021)**: Multiple annual delivery, innovation, and leadership excellence recognitions.
• **Executive Crisis Recovery Commendation**: Formally commended by executive leadership for decisive technical intervention, crisis management, and deployment stabilization during a critical production release escalation for a global conglomerate.
• **Major Banking Commendation**: Commended by technology leadership at a major UK private bank for rescuing their onboarding transformation from Red to Green, unblocking the customer data model, and cutting release cycle times by **75%** (CSAT 4.9/5).

Would you like to explore the banking turnaround in more detail or learn about his pre-sales experience?`,
    followUps: [
      "Explain the private banking onboarding turnaround",
      "Tell me about his pre-sales & RFP experience",
      "How can I contact Amit?"
    ]
  },

  // 11. RESCUEMATIC & ROTIMATIC CONTINUITY FLEET PLATFORM
  {
    id: 'rescuematic',
    keywords: [
      'rescuematic', 'rotimatic', 'flatbread', 'roti', 'zimplistic', 'flour', 'kitchen robot', 'appliance',
      'why did you develop', 'why develop rescuematic', 'what is rescuematic'
    ],
    title: 'Rescuematic — 24/7 Cloud Continuity & Telemetry Fleet SRE for Rotimatic Robots',
    summary: 'Cloud continuity, MQTTS broker, and fleet telemetry SaaS rescuing orphaned Rotimatic flatbread robots worldwide.',
    content: `### The Story & Architecture Behind Rescuematic ([rescuematic.co.uk](https://rescuematic.co.uk))

**Why Amit Developed Rescuematic:**
In 2024, Zimplistic (the original manufacturer of the £1,200 **Rotimatic robotic flatbread appliance**) liquidated and shut down all AWS IoT Core cloud servers, Cognito identity endpoints, and companion mobile app backends worldwide. Over **100,000 households globally were left with orphaned, disconnected kitchen robots** that could no longer customize recipes, adjust flour/water ratios, or report error diagnostics when motors jammed.

As a Rotimatic owner whose own appliance has baked **3,871 rotis**, Amit refused to let a functional £1,200 robotic marvel turn into e-waste. He reverse-engineered the proprietary MQTTS (:8883) protocol, TLS handshake, CAN-bus telemetry opcodes, and shadow REST/WSS APIs—building **Rescuematic** as an independent 24/7 cloud continuity, diagnostic telemetry, and fleet SRE platform.

### System Architecture & Technical Depth:
• **Production Core on AWS EC2**: Backend runs on an AWS EC2 instance (\`100.28.34.179\`, Amazon Linux 2023) executing \`rotimatic-rescue.service\` (Python FastAPI ports 3000/3001/3002, custom high-concurrency MQTTS broker on port 8883, Cognito mock on port 443, Redis 6, SQLite WAL master DB).
• **Edge Webhooks & Frontends**: Frontends ([rescuematic.co.uk](https://rescuematic.co.uk), [app.rescuematic.co.uk](https://app.rescuematic.co.uk), [admin.rescuematic.co.uk](https://admin.rescuematic.co.uk)) are hosted on Cloudflare Pages edge, routing through Cloudflare Zero Trust Tunnels to the AWS backend.
• **Dual Ingestion**: Supports both plug-and-play non-technical users via the **Rescue Bridge SBC Nano** (encrypted WireGuard reverse tunnels) and advanced homelab users via **Router DNS Redirection** (OpenWrt dnsmasq)—with zero factory firmware modifications.
• **ADR-002 Zero-Spoofing Telemetry**: Delivers 100% honest hardware representation—real-time top/bottom platen PID thermal curves, motor torque profiles, and live cooking batches. When disconnected, it cleanly displays \`—\` without injecting fake room temperatures.

Would you like to know more about the MQTTS reverse-engineering or his other production platforms like [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk)?`,
    followUps: [
      "Explore the sfdx-toolkit platform",
      "Why hire Amit as Head of Platform Engineering?",
      "Tell me about his pre-sales & RFP experience"
    ]
  },

  // 11b. SIDE PROJECTS & APPLIED SYSTEMS ENGINEERING
  {
    id: 'projects',
    keywords: [
      'project', 'projects', 'side project', 'experiments', 'beacon', 'mcp', 'fastmcp', 'visionvox',
      'sfdx-toolkit', 'homelab', 'proxmox', 'linux kernel', 'smart email brain'
    ],
    title: 'Applied Systems Engineering, AI Agents & Production Platforms',
    summary: 'Beacon (FastMCP RAG), sfdx-toolkit (IDP), Rescuematic (Rotimatic Cloud Continuity), VisionVox (Gemini Live), and bare-metal Proxmox hypervisor cluster.',
    content: `Amit actively designs, builds, and runs production systems to stay at the cutting edge:

• **Beacon — Production AI Knowledge Assistant**: Connects large enterprise document libraries (180+ technical specs, PRDs, ADRs) to Claude via the Model Context Protocol (FastMCP + ChromaDB local RAG). Enables engineering teams to query complex project knowledge in natural language with sub-second query latency and zero cloud data egress.
• **[Rescuematic](https://rescuematic.co.uk)**: A 24/7 cloud continuity, diagnostic telemetry, and fleet SRE platform on AWS EC2 & Cloudflare Pages edge that rescues orphaned Rotimatic flatbread robots worldwide following the manufacturer's liquidation.
• **[sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk)**: A production Internal Developer Platform (IDP) built with TypeScript/React for Salesforce engineering teams. It features real-time metadata dependency visualization, side-by-side XML diffing, and embedded Model Context Protocol (MCP) AI agents.
• **[VisionVox](https://visionvox.amitbhardwaj.co.uk)**: A low-latency multimodal voice and vision assistant built on the Gemini Multimodal Live API over WebSockets, providing real-time spatial analysis and OCR.
• **Bare-Metal Proxmox SRE Stack**: Operates a private Dell Precision server running Proxmox VE 9.2 (Linux 7.0 kernel) with ZRAM memory compression, Intel QuickSync iGPU acceleration, and Prometheus/Grafana/Loki observability.

Would you like to explore any of these platforms in depth?`,
    followUps: [
      "Tell me about Beacon AI Knowledge Assistant",
      "What is Rescuematic and why did Amit build it?",
      "Explore the sfdx-toolkit platform"
    ]
  },

  // 11c. INDEPENDENT VENTURES VS GENPACT ENTERPRISE (DUAL-THREAT ARCHITECT)
  {
    id: 'independent-vs-genpact',
    keywords: [
      'difference', 'genpact project', 'rescuematic genpact', 'independent', 'ventures',
      'related to genpact', 'client or personal', 'side project', 'dual threat', 'why build rescuematic'
    ],
    title: 'Independent Engineering Ventures vs Genpact Enterprise Mandate',
    summary: 'Clear distinction between Amit\'s corporate consulting leadership at Genpact (~80 engineers) and his independent engineering ventures (Rescuematic, sfdx-toolkit, Homelab).',
    content: `### Two Complementary Profiles: Enterprise Leader & Hands-On Builder

Amit operates as a **dual-threat technical leader**—bridging strategic enterprise governance with first-principles systems engineering:

---

### 1. Corporate Enterprise Mandate (Genpact · 8+ Years)
During his 8+ years at Genpact as **Principal / Senior Solutions Architect**, Amit directed large-scale client programs for global Fortune 500 and FTSE 100 enterprises under strict NDAs:
• **Enterprise Governance (EAB)**: Chaired Enterprise Architecture Boards and InfoSec reviews governing ~80 engineers across cross-functional squads.
• **Crisis Turnarounds**: Rescued distressed programs in RED status (e.g. cutting commercial onboarding from 36 days to 10 days for a Tier-1 UK Private Bank in 6 months).
• **RegTech & Core Decoupling**: Reconciled 1.03M contracts for a major automotive captive under FCA DISP, and decoupled Salesforce from SAP S/4HANA ERP for a global FMCG brand using the Transactional Outbox pattern.

---

### 2. Independent Engineering Ventures & Open Source (Built & Operated by Amit)
**Rescuematic, sfdx-toolkit, VisionVox, and his bare-metal homelab are Amit\'s independent platforms**, created outside of Genpact consulting engagements:
• **[Rescuematic](https://rescuematic.co.uk)**: Conceived and built independently to rescue over 100,000 orphaned Rotimatic kitchen robots worldwide after the original manufacturer liquidated. Features reverse-engineered MQTTS (port 8883) brokers on AWS EC2, Cloudflare Pages edge, and ADR-002 Zero-Spoofing telemetry. Not affiliated with Genpact or Zimplistic.
• **[sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk)**: Open-source developer productivity suite and AST parsing engine for Salesforce DX metadata synchronization.
• **Bare-Metal Proxmox SRE Lab**: 24/7 dedicated hypervisor cluster running Linux 7.0 kernel, Prometheus/Loki observability, and OpenWrt 2.5GbE mesh routing.
• **Beacon AI & VisionVox**: Model Context Protocol (FastMCP) RAG assistant and Gemini Live multimodal real-time voice/vision accessibility tools.

**Why this matters to employers & clients:**
Amit is not an "ivory-tower" architect who only produces diagrams. His independent systems prove that he writes production code, understands bare-metal kernel and network mechanics, and operates 24/7 high-availability infrastructure.`,
    followUps: [
      "What is Rescuematic and why did Amit build it?",
      "Explain the private banking onboarding turnaround",
      "Why hire Amit as Head of Platform Engineering?"
    ]
  },

  // 12. CONTACT & RECRUITER INFO
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'phone', 'call', 'reach', 'linkedin', 'github', 'hire', 'interview',
      'london', 'location', 'visa', 'relocate', 'citizen', 'open to work', 'availability'
    ],
    title: 'Contact Details, Availability & Recruiter Info',
    summary: 'London UK, British Citizen, open to Head of Platform Engineering and Enterprise Architect leadership roles.',
    content: `Amit is based in London, UK (British Citizen, full right to work with no visa sponsorship required).

He is currently open to conversations regarding senior technology appointments, including **Head of Platform Engineering**, **Enterprise Architect**, **Director of Engineering**, or **Principal Solution Architect**.

• **Email**: [helloamitbhardwaj@gmail.com](mailto:helloamitbhardwaj@gmail.com) | [amit@amitbhardwaj.co.uk](mailto:amit@amitbhardwaj.co.uk)  
• **LinkedIn**: [linkedin.com/in/salesforce-technical-architect](https://www.linkedin.com/in/salesforce-technical-architect)  
• **Portfolio**: [amitbhardwaj.co.uk](https://amitbhardwaj.co.uk)  
• **Company**: [genpact.com](https://genpact.com)  
• **Top Skills**: Enterprise Architecture · Salesforce Financial Services · Salesforce Architecture  
• **Languages**: English (Full Professional) · Hindi (Native or Bilingual)  
• **Location**: London, United Kingdom  

Would you like me to share more details about his leadership scope or specific projects?`,
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
// CONVERSATIONAL INTENT ROUTER (NATURAL & CONTEXTUAL)
// ─────────────────────────────────────────────────────────────────────────────

function findBestResponse(rawQuery: string): { text: string; chips?: string[] } {
  const query = rawQuery.toLowerCase().trim()

  // 1. Natural Greetings
  const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'who are you', 'what can you do']
  if (greetings.some(g => query === g || query.startsWith(g + ' ') || query.endsWith(' ' + g))) {
    return {
      text: `Hello! I'm Amit Bhardwaj's **Digital Twin**. I'm here to give you an authentic, detailed look into his 18+ years across enterprise platform architecture, hands-on systems engineering, and team leadership.

What brings you here today? I can walk you through:
• His **crisis turnaround** at a major UK private bank (36 → 10 days, fincrime 76% → 1%)
• His **pre-sales architecture and multi-million-pound RFP defenses**
• His **11-year foundational journey before Genpact** (from Linux fleets at Directi to fintech underwriting at Chandra Credit)
• His work in **automotive retail SaaS**, **FMCG with SAP S/4HANA**, or **production cloud platforms** ([sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk), [Rescuematic](https://rescuematic.co.uk))

Feel free to ask about any specific project, domain, or technology!`,
      chips: DEFAULT_SUGGESTIONS
    }
  }

  // 2. Polite acknowledgments & casual chatter
  const casualThanks = ['thanks', 'thank you', 'thx', 'appreciate it', 'great', 'awesome', 'cool', 'nice', 'perfect', 'sounds good', 'ok', 'okay', 'good to know']
  if (casualThanks.some(t => query === t || query === t + '!')) {
    return {
      text: `You're very welcome! If there's any other aspect of Amit's architecture background, platform leadership philosophy, or specific project outcomes you'd like to dive into, just let me know.`,
      chips: [
        "Tell me about his pre-sales & RFP experience",
        "Explain the private banking onboarding turnaround",
        "How can I contact Amit?"
      ]
    }
  }

  // 3. Guardrail: Irrelevant off-topic inquiries & Arbitrary Code Generation
  const offTopicTriggers = [
    'recipe', 'cook', 'pasta', 'bake a cake', 'crypto to buy', 'bitcoin price',
    'joke about dogs', 'who is the president', 'translate to french', 'homework',
    'solve this math', 'capital of france', 'write a code', 'write code', 'write a program',
    'write a script', 'write python code', 'sort the numbers', 'sorting numbers', 'sort numbers',
    'bubble sort', 'quick sort', 'merge sort', 'write me a function', 'write a function',
    'write a class', 'write an algorithm'
  ]
  const mentionsAmitOrWork =
    query.includes('amit') || query.includes('homelab') ||
    query.includes('rescuematic') || query.includes('sfdx') ||
    query.includes('toolkit') || query.includes('how does he') ||
    query.includes('does he') || query.includes('his experience') ||
    query.includes('how did he') || query.includes('how do you') ||
    query.includes('your background') || query.includes('your experience')

  if (offTopicTriggers.some(t => query.includes(t)) && !mentionsAmitOrWork) {
    return {
      text: `As Amit Bhardwaj's **Digital Twin**, my sole purpose is to discuss Amit's verified **18+ years of enterprise platform architecture, systems engineering leadership, and client case studies**.

I don't generate general-purpose programming snippets, write utility scripts, or solve arbitrary coding exercises.

However, if you're interested in how Amit approaches real-world engineering and automation in production, I'd be glad to discuss:
• How he engineers **decoupled architectures** between Salesforce and SAP S/4HANA via MuleSoft
• His production **Python pipelines** (such as his automated homelab synchronizer and zero-quota cloud uploaders)
• His work designing **event-driven IoT architectures** on AWS EC2 ([Rescuematic](https://rescuematic.co.uk))
• His **Internal Developer Platform** ([sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk))

Would you like to explore any of his enterprise case studies or system designs?`,
      chips: DEFAULT_SUGGESTIONS
    }
  }

  // 4. Contact, Location, & Availability
  if (
    query.includes('contact') || query.includes('email') || query.includes('phone') ||
    query.includes('reach') || query.includes('linkedin') || query.includes('hire') ||
    query.includes('interview') || query.includes('location') || query.includes('where is he') ||
    query.includes('london') || query.includes('visa') || query.includes('relocate') ||
    query.includes('citizen') || query.includes('open to work') || query.includes('availability')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'contact')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 5. Pre-Sales, RFPs & Pursuits
  if (
    query.includes('pre-sales') || query.includes('presales') || query.includes('pre sales') ||
    query.includes('rfp') || query.includes('bid') || query.includes('proposal') ||
    query.includes('pursuit') || query.includes('pitch') || query.includes('sales engineering')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'presales')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 6. Specific Companies FIRST (Avoid broad prior-to-genpact triggering when a specific firm is asked)
  if (query.includes('directi') || query.includes('bind dns') || query.includes('postfix') || query.includes('exim')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'directi')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('spectrum')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'spectrum')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('chandra') || query.includes('credit ltd') || query.includes('loan origination') || query.includes('underwriting')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'chandra')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('infomatrix')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'infomatrix')!
    return { text: entry.content, chips: entry.followUps }
  }

  if (query.includes('cirrologix') || query.includes('hcl')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'cirrologix')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 7. Overall Prior-to-Genpact Journey (2007–2018)
  const isPriorToGenpact = (
    (query.includes('prior') || query.includes('before') || query.includes('pre-') || query.includes('early') || query.includes('start') || query.includes('background') || query.includes('history')) &&
    query.includes('genpact')
  ) || query.includes('before genpact') || query.includes('prior genpact') || query.includes('prior to genpact') ||
     query.includes('before 2018') || query.includes('early career') || query.includes('earlier career') || query.includes('past roles')

  if (isPriorToGenpact) {
    const priorEntry = DOSSIER_ENTRIES.find(e => e.id === 'prior-to-genpact')!
    return { text: priorEntry.content, chips: priorEntry.followUps }
  }

  // 8. Banking, Wealth Management & Red-to-Green Turnaround
  if (
    query.includes('bank') || query.includes('fintech') || query.includes('wealth') ||
    query.includes('private bank') || query.includes('fincrime') || query.includes('cater allen') ||
    query.includes('santander') || query.includes('milky way') || query.includes('turnaround')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'banking-fintech')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 9. Automotive (Retail SaaS & Captive Finance)
  if (
    query.includes('automotive') || query.includes('dealership') || query.includes('dealer') ||
    query.includes('cdk') || query.includes('mbfs') || query.includes('captive finance') ||
    query.includes('fca redress') || (query.includes('car ') && !query.includes('career')) || query.includes('cars ')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'automotive-domain')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 10. FMCG & Supply Chain (with Typo Tolerance: fmcs, fmc)
  if (
    query.includes('fmcg') || query.includes('fmcs') || query.includes('fmc') ||
    query.includes('supply chain') || query.includes('consumer goods') || query.includes('food and beverage') ||
    query.includes('danone') || query.includes('cora') || query.includes('sap s/4hana') || query.includes('sap')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'fmcg-supply-chain')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 11. Head of Platform Engineering / DevEx / IDP
  if (
    query.includes('head of platform') || query.includes('platform engineering') || query.includes('platform lead') ||
    query.includes('why hire') || query.includes('why appoint') || query.includes('devex') ||
    query.includes('internal developer platform') || query.includes('idp')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'platform-leadership')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 12. Rescuematic & Rotimatic Robotics Continuity Platform
  if (
    query.includes('rescuematic') || query.includes('rotimatic') || query.includes('flatbread') ||
    query.includes('zimplistic') || query.includes('why did you develop') || query.includes('why develop') ||
    query.includes('kitchen robot') || query.includes('appliance')
  ) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'rescuematic')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 13. Corporate Genpact & Enterprise Governance
  if (query.includes('genpact') || query.includes('senior manager') || query.includes('governance') || query.includes('eab') || query.includes('infosec') || query.includes('80')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'genpact')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 14. Education & Certifications
  if (query.includes('certif') || query.includes('degree') || query.includes('education') || query.includes('study') || query.includes('btech') || query.includes('rtu') || query.includes('architect credential')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'certifications')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 15. Awards & Commendations
  if (query.includes('award') || query.includes('awards') || query.includes('recognition') || query.includes('commendation') || query.includes('cheers')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'awards')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 16. Side Projects & Live Code
  if (query.includes('project') || query.includes('side project') || query.includes('sfdx-toolkit') || query.includes('visionvox') || query.includes('homelab') || query.includes('proxmox')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'projects')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 17. Cross-Industry Portfolio Matrix
  if (query.includes('industry') || query.includes('industries') || query.includes('sector') || query.includes('sectors') || query.includes('vertical') || query.includes('verticals') || query.includes('cross-industry') || query.includes('portfolio') || query.includes('nda')) {
    const entry = DOSSIER_ENTRIES.find(e => e.id === 'industry-matrix')!
    return { text: entry.content, chips: entry.followUps }
  }

  // 17. Fuzzy Keyword Scoring Fallback
  let bestEntry: KnowledgeEntry | null = null
  let maxScore = 0
  const tokens = query.split(/\s+/).filter(t => t.length > 2)

  for (const entry of DOSSIER_ENTRIES) {
    let score = 0
    for (const kw of entry.keywords) {
      if (query === kw) score += 25
      else if (query.includes(kw)) score += kw.includes(' ') ? 15 : 8
    }
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

  if (bestEntry && maxScore >= 5) {
    return { text: bestEntry.content, chips: bestEntry.followUps }
  }

  // Default Warm Conversational Summary
  const defaultEntry = DOSSIER_ENTRIES.find(e => e.id === 'profile')!
  return {
    text: defaultEntry.content,
    chips: DEFAULT_SUGGESTIONS
  }
}


export default function AmitAiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: `👋 **Hi, I'm Amit Bhardwaj's Digital Twin.**

I can walk you through Amit's 18+ years of technical experience—from his leadership in platform engineering and enterprise governance (~80 engineers at Genpact) to his deep 11-year foundation before Genpact and production platforms like [sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk) and [Rescuematic](https://rescuematic.co.uk).

What would you like to explore first?`,
      timestamp: 'Just now',
      chips: DEFAULT_SUGGESTIONS
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const handleSendRef = useRef<(textToSend?: string) => Promise<void>>(async () => {})

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

  useEffect(() => {
    handleSendRef.current = handleSend
  })

  // Listen for global openChat event (from nav, command palette, or contextual bento chips)
  useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true)
      const customEvent = e as CustomEvent<{ query?: string }>
      if (customEvent.detail?.query) {
        setTimeout(() => {
          handleSendRef.current(customEvent.detail.query)
        }, 120)
      }
    }
    window.addEventListener('openChat', handleOpen as EventListener)
    return () => window.removeEventListener('openChat', handleOpen as EventListener)
  }, [])

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
                  src="/amit-avatar.png?v=3"
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
                      src="/amit-avatar.png?v=3"
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
