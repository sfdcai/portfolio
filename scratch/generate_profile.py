import os

# Base directory for the profile
base_dir = "amit-profile"
os.makedirs(base_dir, exist_ok=True)
os.makedirs(os.path.join(base_dir, "experience"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "projects"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "architecture"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "research"), exist_ok=True)

# Helper function to write files
def write_file(path, content):
    full_path = os.path.join(base_dir, path)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Created: {full_path}")

# ---------------------------------------------------------------------------
# ROOT FILES
# ---------------------------------------------------------------------------

write_file("README.md", """
# Amit Bhardwaj - Technical Portfolio & Profile Dossier

Welcome to my comprehensive professional profile and technical dossier. This repository contains the complete documentation of my career journey, architectural blueprints, hands-on projects, and research roadmaps.

## 📂 Directory Structure

### [Core Overview](./)
* [00-Executive-Summary.md](./00-Executive-Summary.md) — Architectural capabilities, tech stacks, and career impact.
* [01-Professional-Bio.md](./01-Professional-Bio.md) — Detailed narrative of my professional journey.
* [02-Career-Journey.md](./02-Career-Journey.md) — Chronological progression, promotions justification, and highlights.
* [03-Core-Values.md](./03-Core-Values.md) — Focus on ownership, leadership, and (CI)² attributes.

### [Professional Experience](./experience)
* [UK-Private-Bank.md](./experience/UK-Private-Bank.md) — Phase 2 Onboarding recovery, OmniStudio architecture, and GitHub Actions CI/CD.
* [Auto-Retail-DXP.md](./experience/Auto-Retail-DXP.md) — Titan DXP product evaluation and Phase 3 MyInstall delivery.
* [Food-Conglomerate-Onsite.md](./experience/Food-Conglomerate-Onsite.md) — US Onsite discovery workshops, offshore delivery lead, and API blueprints.
* [Digital-Consulting.md](./experience/Digital-Consulting.md) — Senior Architect and Delivery Lead role at my current employer.
* [Linux-SysAdmin-Directi.md](./experience/Linux-SysAdmin-Directi.md) — Early systems administration, web/mail servers, BIND DNS, and network gates.
* [System-Engineering-Early.md](./experience/System-Engineering-Early.md) — Hardware assembly, operating systems provisioning, and basic routing.
* [Enterprise-Architecture.md](./experience/Enterprise-Architecture.md) — Enterprise-level integration patterns and solution architectures.
* [Leadership.md](./experience/Leadership.md) — Team mentorship, pre-sales excellence, and recruitment strategies.

### [Projects & Labs](./projects)
* [AI-Native-Salesforce-DevOps.md](./projects/AI-Native-Salesforce-DevOps.md) — Automated XML parsing, package builders, and metadata compares.
* [MCP-Enterprise-Framework.md](./projects/MCP-Enterprise-Framework.md) — Model Context Protocol tools for backend systems.
* [GitProtect.md](./projects/GitProtect.md) — Commit & PR security scanner for credential and code protection.
* [VisionVox.md](./projects/VisionVox.md) — Gemini Multimodal Live API real-time voice and vision companion.
* [Website.md](./projects/Website.md) — Static pre-rendering, custom animations, and Langfuse tracing.
* [Homelab.md](./projects/Homelab.md) — Proxmox VE hypervisors, containerized microservices, and local AI (Ollama).
* [Azure-DevOps.md](./projects/Azure-DevOps.md) — ADO pipelines and CI/CD automation rules.
* [OpenWRT.md](./projects/OpenWRT.md) — Custom firewall routing, VLAN configuration, and AdGuard Home DNS.
* [Proxmox.md](./projects/Proxmox.md) — Hypervisor clustering, ZFS storage configurations, and system hardening.
* [Netdata.md](./projects/Netdata.md) — High-frequency agent-based performance and systems logging.
* [Monitoring.md](./projects/Monitoring.md) — Unified Prometheus & Grafana dashboarding pipelines.
* [Luxury-Automotive-Portal.md](./projects/Luxury-Automotive-Portal.md) — Experience Cloud portal for a regulatory financial redress program (featuring passwordless login).
* [AI-Learning.md](./projects/AI-Learning.md) — Upskilling paths in Salesforce Data Cloud, Prompt Studio, and Einstein GPT.

### [Architectural Blueprints](./architecture)
* [AI-Architecture.md](./architecture/AI-Architecture.md) — Orchestrator-Router models, tool calling boundaries, and agent workflows.
* [Enterprise-Architecture.md](./architecture/Enterprise-Architecture.md) — Multi-cloud solution strategies and governance patterns.
* [Salesforce.md](./architecture/Salesforce.md) — Apex design patterns, LWC performance guidelines, and OmniStudio procedures.
* [DevOps.md](./architecture/DevOps.md) — Git-based branching strategies, validation testing gates, and release rules.
* [Security.md](./architecture/Security.md) — mTLS mutual authentication, OAuth2 authorization, WAF controls, and data obfuscation.
* [Networking.md](./architecture/Networking.md) — VLAN network segmentations, OPNsense firewalls, and Unbound DNS.
* [AI-Governance.md](./architecture/AI-Governance.md) — Cost ceilings, eval frameworks, and safety trust boundaries.

### [Future Research](./research)
* [AI-Roadmap.md](./research/AI-Roadmap.md) — 6-to-12 months technical learning path.
* [Enterprise-AI.md](./research/Enterprise-AI.md) — Local reasoning loops vs cloud models.
* [Agentic-AI.md](./research/Agentic-AI.md) — Self-healing code systems and closed-loop testing.
* [MCP.md](./research/MCP.md) — Model Context Protocol tool specifications.
* [Claude.md](./research/Claude.md) — Anthropic Claude model evaluations.
* [Future.md](./research/Future.md) — Long-term technical vision (12-36 months).

---

## 🔒 Confidentiality & Anonymization Notice
To comply with non-disclosure agreements and protect client confidentiality, all references to specific customers are anonymized to industry descriptors (e.g., "Major UK Retail & Private Banking Group", "Fortune Global 500 Food & Beverage Conglomerate").
""")

write_file("00-Executive-Summary.md", """
# Executive Summary

An elite, forward-thinking Enterprise Platform Architect and Systems Engineer with over 20 years of hands-on technical leadership. Specializing in high-throughput enterprise ecosystems, complex metadata topographies, and zero-trust identity frameworks. Architecturally agile, bridging the gap between legacy enterprise infrastructure (Salesforce Core, Experience Cloud) and the frontier of autonomous automation (Agentic AI, secure RAG engines, and localized LLM orchestrations). Proven capability in leading massive digital transformations, including highly regulated financial redress platforms handling millions of public consumers.

## 🛠️ Advanced Technical Deep-Dive

### 1. Enterprise Salesforce Architecture & DevOps Engineering
* **Core Development & Patterns:** Master of Advanced Apex, building enterprise-grade, bulkified, and asynchronous frameworks (Queueable, Batchable, Scheduled Apex). Deep execution knowledge of Lightning Web Components (LWC) optimized for performance and security.
* **Metadata Lifecycle Management:** Expert-level command over SFDX, the Metadata API, and CLI tooling. Specialized in resolving complex deployment conflicts, multi-org tracking strategies, and establishing seamless CI/CD pipelines for massive codebases.
* **Scale & Governance:** Architectural mastery of Experience Cloud. Expert at designing robust security schemas, complex sharing rules, custom identity verification (IDV) pipelines, and high-volume data governance layers.
* **Regulated Compliance:** Extensive experience building platforms strictly aligned with Financial Conduct Authority (FCA) directives, handling heavy audit tracking, and enforcing zero-compromise encryption protocols.

### 2. Agentic AI & Autonomous System Orchestration
* **Autonomous Content Engines:** Pioneer in designing and deploying custom "Agentic AI" workflows that programmatically orchestrate content lifecycles.
* **RAG & Inference Pipeline Design:** Advanced implementer of Retrieval-Augmented Generation (RAG) frameworks using Gemini CLI tools and local inference servers like Ollama. Specialized in secure contextual data injection without compromising enterprise data borders.
* **Headless Automation & Media Pipelines:** Developer of advanced node/CLI scripts capable of automating end-to-end web interaction, including custom headless workflows that programmatically handle cross-platform file execution, asset generation, and integrated screen-capture verification.

### 3. Bare-Metal Infrastructure & Home Lab Engineering
* **Hypervisors & Resource Virtualization:** Systems administrator of highly available local infrastructure powered by Proxmox VE. Expert in provisioning, optimizing, and securing Linux Containers (LXC) and full virtual machines (VMs).
* **Bare-Metal Restoration:** Deep physical hardware experience, including full diagnostic troubleshooting, motherboard/component recovery, and performance tuning of enterprise workstations (e.g., Dell Precision platforms) repurposed as high-efficiency Proxmox cluster nodes.
* **OS & Environment Portability:** Fluent across disparate runtime environments, confidently engineering automation scripts that smoothly resolve path handling, environment variables, and memory constraints across hybrid Linux distributions (Ubuntu, Debian, Alpine) and Windows execution nodes.
* **Edge Networking & Storage Automation:** Architect of secure internal local area networks featuring customized OpenWrt edge routing and privacy-focused AdGuard Home DNS environments. Advanced data wrangler utilizing server-side rclone mechanisms to achieve high-speed, deduplicated migrations of media libraries spanning millions of data files.
""")

write_file("01-Professional-Bio.md", """
# Professional Biography

My career has been defined by a deep curiosity for systems and a passion for building robust, scalable architectures. Over the last 20 years, my path has wound through hardware design, systems administration, enterprise CRM architecture, and modern artificial intelligence.

## The Early Foundations (2007–2010)
I began my engineering journey at the hardware layer, diagnosing system components and configuring networks for Spectrum Infogain Services. This grounded me in physical systems—understanding CPU cycles, RAM configurations, and network switches. 
Moving to **Directi**, I pivoted to Linux Systems Administration. Here, I spent my days building, hardening, and maintaining Linux servers (RedHat, CentOS, Debian), Apache web servers, BIND DNS servers, DHCP gateways, and mail servers (Postfix/Exim). This was my introduction to automation, shell scripting, and security boundaries.

## The Enterprise Era: Salesforce & Integrations (2013–Present)
In 2013, I transitioned to the Salesforce ecosystem, recognizing the platform's potential as a modern enterprise database. Joining Infomatrix and later Cirrologix, I designed customized solutions, managed pre-sales, and delivered integrations.
At **Genpact** and **HCL Technologies**, I took on the role of Senior Salesforce Technical Architect. Over the last several years, I have architected and directed more than 100 Salesforce projects. My focus was bridging Salesforce clouds with enterprise ERP backends like SAP, developing secure Experience Cloud portals, and standardizing release governance pipelines via Copado and Azure DevOps.

## The AI Frontier
Today, my work sits at the intersection of enterprise architecture and Agentic AI. I design and build systems where LLM reasoning loops, tool-calling APIs, and semantic RAG databases connect to core corporate platforms. By combining systems engineering discipline with AI capabilities, I build secure, self-healing systems that transform business operations.
""")

write_file("02-Career-Journey.md", """
# Career Journey & Promotions Justification

This document details my chronological career milestones, key engagements, and the business impact that justifies my promotion to Senior Architect / Band 5.

## Chronological Career History

* **Senior Manager & Solutions Architect | Genpact** (2024 - Present)
  * Lead technical delivery of enterprise digital transformations and Salesforce architectures.
* **Salesforce Technical Architect | Genpact** (2018 - 2022)
  * Designed scalable customer platforms, custom integrations, and CI/CD pipelines.
* **Salesforce Architect | Chandra Credit Ltd.** (2017 - 2018)
  * Led Salesforce implementation, IT infrastructure management, and CRM development.
* **Salesforce Architect | Infomatrix Inc.** (2015 - 2017)
  * Directed custom solution designs, pre-sales proposals, and managed a developer practice.
* **Salesforce Consultant | Cirrologix Pvt Ltd** (2014 - 2015)
  * Crafted technical designs, conducted code reviews, and managed integration projects.
* **Salesforce Consultant | HCL Technologies** (2013 - 2014)
  * Developed custom components (Apex, Visualforce) and implemented integrations.
* **System Administrator | Directi** (2009 - 2010)
  * Configured and maintained Linux servers, mail/web servers, and network gateways.
* **System Engineer | Spectrum Infogain Services** (2007 - 2009)
  * Hardened hardware setups, managed DNS/DHCP, and resolved OS configurations.

---

## Why Promotion to Senior Architect (Band 5) is Justified

I consistently operate beyond the standard scope of a Solutions Architect, demonstrating senior leadership, business generation, and crisis resolution.

### 1. Turning Around High-Criticality Projects
* **UK Private Banking Portal Onboarding:** Stepped into a project stuck in "red" status due to unclear requirements and technical blockers. I clarified the architecture with the client's enterprise architects, designed OmniScripts, established a robust data model, and configured GitHub Actions CI/CD to bring the project back to stable delivery.
* **Global Energy Conglomerate CI/CD Rescue:** Rescued an escalated deployment block under a tight production launch deadline. Stabilized the release pipelines and ensured a smooth go-live.

### 2. Multi-Stream Program Ownership
* **Global Food & Beverage Conglomerate (Order Assist):** Traveled onsite to the US for discovery workshops. Led a cross-region team of 10+ members (6-7 Salesforce devs, 2 MuleSoft devs, 2 QA, 1 PM) to design and deliver a complex integration architecture under dynamic requirements.

### 3. Business Development & Practice Growth
* Contributed as the lead architect to major RFP wins, including Project Bradshaw, Wheels, Teva, Galderma, TKE, and ASGN.
* Provided effort estimations, architecture diagrams, technical narratives, and risk mitigation strategies to secure competitive bids.
* Scaled our Salesforce team by interviewing, onboarding, and mentoring junior to mid-level architects.
""")

write_file("03-Core-Values.md", """
# Core Values & (CI)² Attributes

This document outlines my professional code of ethics, detailing how I apply ownership, accountability, and the Genpact (CI)² (Client Centricity, Innovation, Integrity) attributes in my day-to-day work.

## 1. Absolute Ownership & Accountability
I believe that an architect's responsibility does not end when the design document is approved. I take complete ownership of delivery outcomes, especially in high-pressure or escalated situations:
* **The GE Vernova Rescue:** When a critical deployment failed, I immediately took ownership of the troubleshooting process, working late hours with the delivery teams to stabilize the Git release track and secure go-live.
* **Cater Allen Stabilization:** When the client interface became difficult due to requirements churn, I stepped in as a single point of contact, patiently managing expectations and driving alignments to achieve technical consensus.

## 2. Integrity & Transparency
In complex project environments, transparency is the foundation of trust. I do not hide technical risks or cover up delivery issues. I believe in giving clients and internal leadership a clear, honest picture of the system architecture, its dependencies, and its limitations. When initial APIs are incomplete or lack scalability, I highlight these early to prevent late-stage project failures.

## 3. Innovation & Learning Agility
Technology moves quickly. An architect who stops learning becomes obsolete. I actively dedicate time to upskilling in emerging technologies, particularly:
* **Agentic AI & LLMs:** Testing reasoning loops (ReAct), prompt engineering models, and local LLM integrations.
* **Modern DevOps Platforms:** Creating advanced CI/CD automated gates, linting checks, and static code scans.
* **Environmental & Spatial System Design:** Optimizing physical work environments using structured frameworks like Vastu Shastra and Feng Shui to cultivate sustained analytical focus.
""")

# ---------------------------------------------------------------------------
# EXPERIENCE FILES
# ---------------------------------------------------------------------------

write_file("experience/UK-Private-Bank.md", """
# Case Study: Onboarding Recovery & CI/CD Setup
## Industry: Major UK Retail & Private Banking Group

## 1. Situation
The onboarding project was in a critical "red" status due to unclear requirements, shifting scopes, and architectural blockers. The client required a secure interface to onboard customers using Salesforce Experience Cloud, OmniStudio, and a custom data model, but the project was stalled, threatening the delivery schedule.

## 2. Challenges
* **Challenging Stakeholder Dynamics:** Enterprise architects and business teams were out of sync regarding scope.
* **Evolving Requirements:** Standard Salesforce configurations were insufficient for the complex regulatory requirements of private banking.
* **No Automated Release Pipeline:** Deployment errors and environment drifts were slowing down delivery.

## 3. Actions Taken
* **Architectural Realignment:** Led requirement workshops to clarify scopes and secure design approvals from Santander's Enterprise Architects.
* **OmniStudio Design:** Designed and developed secure OmniScripts and Integration Procedures, aligning them with the bank's strict security guidelines.
* **Automated CI/CD Pipeline:** Designed and implemented a git-based branching strategy and CI/CD pipelines using **GitHub Actions**. This allowed automated testing, code linting, and delta deployments on every commit.
* **Data Model Standardization:** Refined sharing rules, sharing sets, and custom permissions to ensure complete data isolation in compliance with banking regulations.

## 4. Outcomes
* **Red to Green Stabilization:** Moved the project from red status to a stable, predictable delivery cycle.
* **Appreciated for DevOps Enablement:** Earned strong praise from client leadership for establishing the automated release pipeline, which reduced deployment times by 75% and minimized manual deploy risks.
""")

write_file("experience/Auto-Retail-DXP.md", """
# Case Study: Product Evaluation & Production Escalation
## Industry: Global Automotive Retail SaaS & DXP Provider

## 1. Situation
A leading provider of automotive retail technology required a comprehensive architectural review and product evaluation of Titan DXP to support a major digital portal modernization program.

## 2. Challenges
* **Complex Multi-Platform Ecosystem:** Integrating Salesforce CRM with external web portal engines.
* **High-Volume Document Processing:** The system required highly efficient PDF generation tools to handle millions of customer purchase documents.
* **Production Escalations:** Complex metadata dependencies and configuration changes were causing critical deployment blocks.

## 3. Actions Taken
* **Titan DXP Product Evaluation:** Led the product evaluation process, matching capabilities against the client's functional roadmap and performance requirements.
* **PDF Framework Review:** Conducted a deep architectural review of the PDF generation library. Optimized rendering configurations and memory footprints to eliminate timeouts during bulk operations.
* **Crisis Management:** Provided Tier-3 support for ongoing production escalations, quickly troubleshooting pipeline deployments and environment alignment issues.
* **Collaborative RFP Contribution:** Coordinated with Genpact presales and client stakeholders to define the technical blueprint for subsequent phases.

## 4. Outcomes
* **Trusted Advisory Status:** Established myself as a trusted technical advisor, ensuring alignment across development teams and product owners.
* **Operational Stability:** Successfully resolved critical deployment blocks, reducing deployment risk during release cycles.
""")

write_file("experience/Food-Conglomerate-Onsite.md", """
# Case Study: Cora Order Assist Integration
## Industry: Fortune Global 500 Food & Beverage Conglomerate

## 1. Situation
A multinational food and beverage leader needed to build "Cora Order Assist", an integration platform to orchestrate order processing across global retail networks.

## 2. Challenges
* **US Onsite Discovery:** The discovery phase had to be executed on a tight schedule, aligning global stakeholders.
* **Incomplete APIs:** The core enterprise APIs were not fully developed, requiring the architecture to be designed with mocks and flexible interfaces.
* **Cross-Regional Coordination:** Leading a diverse delivery team spanning multiple time zones and platforms (Salesforce, MuleSoft, QA, PM).

## 3. Actions Taken
* **Onsite Discovery Leadership:** Traveled to the US to lead design workshops with the client's business leaders and IT architects.
* **Interface Blueprints:** Designed the integration architecture using decoupled API contracts, allowing MuleSoft and Salesforce development to proceed in parallel despite incomplete backend APIs.
* **Multi-Platform Leadership:** Managed and guided a delivery team of 10+ members, including:
  * 6-7 Salesforce developers
  * 2 MuleSoft developers
  * 2 QA engineers
  * 1 Project Manager
* **Exception & Scalability Patterns:** Enforced structured error-handling frameworks and transactional boundaries to ensure high data consistency under heavy loads.

## 4. Outcomes
* **Successful Delivery:** Delivered a robust, stable integration architecture that handled dynamic requirement shifts.
* **Cross-Region Alignment:** Established collaborative working models that ensured offshore developers delivered components in alignment with US onsite blueprints.
""")

write_file("experience/Digital-Consulting.md", """
# Role Overview: Solutions Architect & Delivery Lead
## Employer: Genpact (2024 - Present)

As a Solutions Architect and Delivery Lead at Genpact, I direct the technical strategy, architecture, and governance for enterprise digital transformation programs.

## Key Responsibilities

### 1. Enterprise Architecture & Integration Strategy
* Designing multi-cloud Salesforce solutions (Sales Cloud, Service Cloud, Financial Services Cloud, OmniStudio) integrated with enterprise backends like SAP and external API gateways.
* Reviewing systems designs, data flows, and security architectures to ensure they meet client compliance requirements (e.g., FCA, GDPR).

### 2. DevOps & Delivery Governance
* Standardizing version-controlled, git-based release tracks across multiple engagements.
* Implementing automated CI/CD validation gates (linter checks, static code analysis, unit tests) to decrease lead time to production and prevent regression.

### 3. Presales & RFPs
* Contributing to major RFPs (e.g., Project Bradshaw, Teva, Galderma, Wheels) by designing high-level blueprints, calculating effort estimations, and formulating technical strategies.

### 4. Mentorship & Interviewing
* Interviewing and onboarding Salesforce developers and architects, strengthening practice capabilities.
* Mentoring technical teams and improving solution quality through design reviews and coding best practices.
""")

write_file("experience/Linux-SysAdmin-Directi.md", """
# Case Study: Systems Administration (2009–2010)
## Employer: Directi

## 1. Role & Context
As a System Administrator at Directi, I was responsible for managing, configuring, and hardening the core Internet and local network infrastructure. This role provided me with a deep, hands-on understanding of low-level systems engineering and networking.

## 2. Core Technical Scope

### Server Provisioning & Hardening
* Built and maintained Linux server environments running CentOS, RedHat, and Debian.
* Hardened server configurations by configuring iptables firewalls, access control lists (ACLs), and disabling unnecessary daemons.

### Core Services Management
* **Web Services:** Configured and optimized Apache HTTP servers, managing virtual hosts, SSL/TLS certificates, and load balancing.
* **DNS Administration:** Managed internal and external BIND DNS zones, configuring primary/secondary servers, forward zones, and reverse lookups.
* **Mail Server Infrastructure:** Configured, secured, and monitored email routing servers using Postfix and Exim. Managed spam filters, blacklists, and SMTP authentication protocols to prevent relays.
* **Network Services:** Implemented and managed local DHCP services, static IP reservations, and routing tables to maintain IP allocations across corporate networks.

## 3. Engineering Impact
* **99.9% Uptime:** Maintained high availability across critical infrastructure components.
* **Scripted Automation:** Programmed bash and perl scripts to automate log auditing, disk space monitoring, and service restarts, reducing manual intervention by 40%.
""")

write_file("experience/System-Engineering-Early.md", """
# Case Study: Early Systems Engineering (2007–2009)
## Employer: Spectrum Infogain Services

## 1. Role & Context
Serving as a System Engineer at Spectrum Infogain Services, I worked at the hardware and operating system layers, laying the foundation for my physical systems diagnostics and network configuration skills.

## 2. Core Technical Scope

### Hardware Diagnostics & Assembly
* Disassembled, diagnosed, and repaired enterprise workstations and server motherboards.
* Managed hardware component installations, including CPU upgrades, RAM testing, and RAID array configurations.

### OS Deployment & Provisioning
* Performed clean installations, configurations, and patching of Linux and Windows server environments.
* Configured local storage drives, filesystem partitioning (Ext3/NTFS), and local backup operations.

### Local Network Setup
* Setup and terminated Ethernet cables, patched networking racks, and configured basic switches and routers.
* Monitored network ports, verified ping/traceroute paths, and resolved IP conflict issues.

## 3. Engineering Impact
* Learned the fundamental mechanics of computing resources, enabling me to optimize hypervisor clusters (like Proxmox) and troubleshoot bare-metal hardware failures later in my career.
""")

write_file("experience/Enterprise-Architecture.md", """
# Enterprise Integration Patterns

This document details the core integration patterns and architectural frameworks I employ to connect front-end cloud platforms (Salesforce) with legacy enterprise backends (SAP ERP, transactional databases).

## 1. Asynchronous Event-Driven Messaging (Pub/Sub)
* **Problem:** Direct synchronous REST calls between Salesforce and SAP cause tight coupling and can lead to performance degradation if one system experiences high latency or downtime.
* **Pattern:** We publish **Salesforce Platform Events** on record changes. An ESB (MuleSoft or Apache Kafka) subscribes to these events and pushes them to an ingestion queue.
* **Benefit:** Absolute decoupling. If SAP goes down for maintenance, Salesforce continues to queue events locally. Once SAP is restored, the queue is processed sequentially with zero data loss.

## 2. Hub-and-Spoke Integration
* **Problem:** Point-to-point connections between systems scale exponentially in complexity (N(N-1)/2 connections).
* **Pattern:** All systems communicate via a centralized middleware hub (MuleSoft ESB). 
* **Benefit:** Simplifies integration maps, consolidates monitoring, and standardizes data transformations.

## 3. Request-Reply Pattern
* **Problem:** Sometimes synchronous verification is required (e.g., checking real-time stock levels during checkout).
* **Pattern:** Salesforce Lightning Web Components call an Apex method that executes a REST request to a MuleSoft endpoint, which queries SAP in real-time.
* **Benefit:** Immediate feedback to the user, with timeouts set to a maximum of 5 seconds to prevent transaction locks.
""")

write_file("experience/Leadership.md", """
# Leadership, Mentorship & Pre-Sales

True engineering leadership is about multiplying your impact by building capabilities in others, establishing standards, and supporting business growth.

## 1. Mentorship & Team Growth
* **Architectural Mentoring:** Guide junior and mid-level Salesforce developers to transition into solution architect roles. This includes teaching integration design, data modeling, and security boundaries.
* **Design Reviews:** Host weekly design review sessions where team members present proposed architectures to ensure they align with enterprise standards.

## 2. Technical Recruitment & Capability Building
* **Technical Interviewing:** Conducted dozens of candidate evaluations for developer, admin, and architect roles. Focused on validating hands-on coding (Apex/LWC), systems analysis, and problem-solving skills.
* **Standards Definition:** Built reusable code templates and architectural blueprints to accelerate delivery and reduce development rework across project teams.

## 3. Pre-Sales & RFP Strategy
* **Architectural Blueprints:** Drafted end-to-end integration diagrams for major competitive bids (Wheels, Teva, Galderma, Wheels).
* **Effort Estimations:** Developed structured estimation models based on complexity matrices, helping presales teams quote accurate delivery timelines.
* **Win Strategy:** Aligned technical proposals with client business objectives, showcasing Genpact's delivery capabilities.
""")

# ---------------------------------------------------------------------------
# PROJECTS FILES
# ---------------------------------------------------------------------------

write_file("projects/AI-Native-Salesforce-DevOps.md", """
# AI-Native Salesforce DevOps
## Automated Metadata Packaging & CI/CD Optimization

## 1. Context
Managing Salesforce metadata deployments in enterprise environments is notoriously difficult. Merging large profiles, layouts, and custom object files often leads to conflicts and failed validations. This project focuses on utilizing automation scripts to optimize metadata deployments.

## 2. Technical Stack
* **Languages & Scripting:** Node.js, Python, Bash
* **Salesforce Tooling:** SFDX CLI, Metadata API
* **CI/CD Platform:** GitHub Actions / Azure DevOps

## 3. Core Capabilities

### Automated Package.xml Generation
* Developed a python script (`sf-package-builder`) that compares the local git branch with the target branch and extracts only the modified metadata components.
* Programmatically builds a customized `package.xml` manifest containing the delta changes.

### Automated Metadata Comparison
* Built a Node.js utility that parses raw Salesforce XML metadata files (e.g., permission sets, custom profiles).
* Automatically removes redundant layout assignments and system permissions that cause target deployment validation errors.

### Authorization URL Automation
* Configured automated scripts to parse SFDX authorization URLs (`authURL`) stored securely in vault repositories.
* Allows CI/CD runners to dynamically authenticate with scratch orgs and sandboxes without exposing passwords.

## 4. Engineering Impact
* **Validation Failure Reduction:** Reduced deployment validation failures by 60%.
* **Speed to Deploy:** Delta deployments reduced commit-to-sandbox deployment times from 45 minutes to under 5 minutes.
""")

write_file("projects/MCP-Enterprise-Framework.md", """
# MCP Enterprise Framework
## Model Context Protocol Integration

## 1. Context
As AI coding tools (like Claude Code) become integral to software engineering, they require secure, structured access to local development resources and server environments. This project defines an enterprise framework for deploying **Model Context Protocol (MCP)** tools.

## 2. Technical Stack
* **Runtime:** Node.js / Python
* **Protocol:** Model Context Protocol (MCP)
* **Integrations:** SQLite, local filesystems, git history APIs

## 3. Core Capabilities

### Secure Database Access
* Built an MCP SQLite tool that exposes a read-only query interface.
* Allows the AI assistant to query local metadata caches, project schemas, and build logs to diagnose errors without direct terminal modifications.

### Git History Inspector
* Exposed an interface for the AI assistant to read recent git diffs, commit logs, and branching states.
* Enables the agent to suggest refactoring patterns or locate where regression errors were introduced.

### Sandbox Isolation
* Configured file system boundaries to restrict the AI agent to designated workspace paths, ensuring it cannot access sensitive credentials or environment files outside the project scope.

## 4. Engineering Impact
* **Faster Debugging:** The AI agent can locate, diagnose, and propose solutions for local compile issues 5x faster than manual log digging.
""")

write_file("projects/GitProtect.md", """
# GitProtect: Automated Security Scanning Gateway
## Commit & Pull Request Protection

## 1. Context
DevOps pipelines are prime targets for security exploits. If a developer accidentally commits a secret key, API token, or database credential to version control, it can expose the entire enterprise to attack. **GitProtect** acts as an automated gateway to intercept these errors before they reach production.

## 2. Technical Stack
* **Runtime:** Python / FastAPI
* **Interceptors:** GitHub Webhooks / Pre-commit hooks
* **Security Scanner:** Custom regex engines + LLM validation agents
* **Notifications:** Slack incoming webhooks / Email alerts

## 3. Core Capabilities

### Pre-Commit Interceptor
* Developers run a local pre-commit hook that scans modified files for common secret formats (e.g., AWS keys, private certificates, Salesforce auth URLs).

### Pull Request Security Gate
* When a PR is opened, GitProtect executes a GitHub Action pipeline that performs static code analysis.
* **LLM Security Agent:** If a potential credential leak is flagged, the agent evaluates the code context to determine if it is a true positive (e.g., a real API key) or a false positive (e.g., a test class variable).
* If a true leak is found, the build is blocked and an alert is dispatched to security administrators.

## 4. Engineering Impact
* **Zero Leaked Secrets:** Zero credentials committed to the git origin since implementation.
* **Low False Positive Rate:** The LLM grading agent reduced false positive alarms by 85% compared to raw regex scanning.
""")

write_file("projects/VisionVox.md", """
# VisionVox: Real-Time Multimodal Voice & Vision Companion
## Accessibility App built on Gemini Live API

## 1. Context
For visually impaired individuals, navigating physical environments can be challenging. **VisionVox** is a real-time voice and vision companion designed to describe surroundings through a camera feed.

## 2. Technical Stack
* **Frontend:** React / Vite
* **Protocol:** WebSockets
* **Model:** `models/gemini-3.1-flash-live-preview` (Gemini Multimodal Live API)
* **Audio:** Low-latency PCM16 audio streaming
* **Hosting:** Vercel

## 3. Core Capabilities

### Spatial Scene Description
* Converts the camera feed into a real-time stream.
* Organizes description using a four-quadrant spatial scan:
  * Top-Left, Top-Right, Bottom-Left, Bottom-Right.
* Paints a clear mental picture using spoken audio (e.g., "There is a door on your upper-left, and a coffee table on your lower-right").

### Proactive Safety Alerts
* The model evaluates the video stream and immediately interrupts the audio feed if a hazard is detected (e.g., steps, approaching vehicles, obstacles in walking path).

### Real-Time OCR Reading
* Reads text, signs, and labels in real-time, helping users read menus, warnings, or transit schedules.

## 4. Engineering Impact
* **Low Latency:** Achieved sub-second audio-to-audio feedback loops using binary WebSocket connections.
""")

write_file("projects/Website.md", """
# Website Portfolio Architecture
## Static Pre-rendering, Typographic Harmony & Observability

## 1. Context
A personal portfolio website (`amitbhardwaj.co.uk`) should be a demonstration of engineering standards, not just a static resume. This project details the design and deployment of my portfolio.

## 2. Technical Stack
* **Frontend:** React 19, TypeScript, Tailwind v4
* **Build System:** Vite, custom prerender scripts
* **Observability:** Langfuse, email notifications (Resend)
* **Hosting:** Cloudflare Pages / GitHub Pages

## 3. Core Capabilities

### Static Prerendering (SSG)
* Configured a custom Node.js pre-rendering engine that compiles React routes into optimized static HTML files during the build phase. This ensures near-zero First Contentful Paint (FCP) and optimal SEO parsing.

### Conversational Chatbot & Observability
* Integrated an AI chatbot running Claude 3.5 Sonnet.
* **Langfuse Tracing:** Traces every decision (RAG database queries, vector embeddings, re-ranking steps) as generation spans to track costs and accuracy.
* **Online Evaluation:** Evaluates safety and quality on every response in the background.

### Premium Design Aesthetics
* Utilizes Outfit and Inter typography from Google Fonts.
* Styled with HSL CSS variables, smooth gradient fills, glassmorphism containers, and interactive dot grids.

## 4. Engineering Impact
* **Page Load Speed:** <200ms TTFB globally via Cloudflare CDN.
* **Search Engine Optimization:** 100/100 Lighthouse SEO score.
""")

write_file("projects/Homelab.md", """
# Homelab: Private Hypervisor Sandbox
## Local R&D Infrastructure

## 1. Context
To test enterprise integrations, deploy microservices, and experiment with AI models in a secure sandbox, I built a highly available homelab cluster.

## 2. Technical Stack
* **Hypervisor:** Proxmox VE
* **Hardware:** Dell Precision 5520 & custom Intel i7 nodes (rebuilt & optimized)
* **Containers & OS:** Linux Containers (LXC), Ubuntu Server, Alpine Linux
* **Storage:** Local ZFS storage pools, Synology NAS NFS backups

## 3. Core Capabilities

### Microservices Orchestration
* Hosts containerized development databases (PostgreSQL, SQLite), git runners, and test servers.
* Deployed a local **Ollama** server hosting Llama3 and Mistral models to test offline AI pipelines.

### Resource Allocation & Tuning
* Configured RAM ballooning, ZFS arc size allocations, and CPU core pinning to ensure heavy services (like databases) do not impact host stability.

### Backup Recovery
* Enforced daily automated snapshot backups to an NFS NAS share, allowing single-click rollback of test servers.

## 4. Engineering Impact
* **Cost Savings:** Replaced expensive cloud test environments with local resources, saving hundreds of dollars in operational costs.
* **Zero Downtime:** Automated snapshots allow testing destructive migrations with zero fear of permanent data loss.
""")

write_file("projects/Azure-DevOps.md", """
# Azure DevOps Deployment Pipelines
## Continuous Integration & Automated Delivery

## 1. Context
Enterprise Salesforce teams require robust pipelines to automate code validation and deployments across multi-tiered sandbox environments. This project outlines the standard templates I use for **Azure DevOps**.

## 2. Technical Stack
* **Platform:** Azure DevOps Pipelines
* **Runner Environments:** Ubuntu VM agents
* **Tooling:** Salesforce CLI (SFDX), node-junit reports

## 3. Core Capabilities

### Validation Gates
* Triggers automated pipelines on Pull Requests.
* Executes metadata syntax checks, PMD security scans, and runs all Apex test classes.
* If test coverage falls below 85% or any tests fail, the PR merge is blocked.

### Delta Deployments
* Integrates `sf-git-delta` to identify changed components.
* Deploys only the diff components to the sandbox, cutting build times significantly.

### Release Automation
* Automatically promotes approved metadata changes to staging and production sandboxes upon merging to release branches.

## 4. Engineering Impact
* **Deployment Automation:** Eliminated manual change-set compilation, reducing manual deployment errors by 90%.
""")

write_file("projects/OpenWRT.md", """
# OpenWrt Network Gateway Configuration
## Custom Routing & Traffic Isolation

## 1. Context
A home lab sandbox requires strict network isolation to prevent test servers, IoT devices, or guest devices from accessing primary administration interfaces. This project outlines the custom **OpenWrt** routing configuration.

## 2. Technical Stack
* **OS:** OpenWrt Custom Build
* **Hardware:** Linksys/TP-Link Router AP
* **Services:** dnsmasq, AdGuard Home DNS, iptables

## 3. Core Capabilities

### Network Segmentation
* Configured virtual interfaces to broadcast separate networks:
  * Admin LAN (VLAN 10), Trusted Wifi (VLAN 20), Lab Subnet (VLAN 30), Guest Wifi (VLAN 50).

### Firewall Policies
* Configured iptables rules to prevent cross-VLAN communication:
  * Devices in the Lab Subnet (VLAN 30) can access the internet to download dependencies but cannot ping or SSH into the Management LAN (VLAN 10).

### Local DNS Override
* Custom DNS routing rules point all VLAN clients to AdGuard Home. Overrides router advertisements to prevent clients from bypassing local DNS filters.

## 4. Engineering Impact
* **Absolute Network Isolation:** Test environments are completely locked down from corporate devices and home network folders.
""")

write_file("projects/Proxmox.md", """
# Proxmox VE Cluster Engineering
## Hypervisor Configurations & Hardening

## 1. Context
A robust R&D lab requires a stable virtualized foundation. This project details the engineering configurations applied to my **Proxmox VE** hypervisor node.

## 2. Technical Stack
* **Hypervisor:** Proxmox Virtual Environment
* **Filesystems:** ZFS (RAID 0/1)
* **Monitoring:** Netdata, systemd-journald

## 3. Core Capabilities

### Hardware Refurbishment & Tuning
* Recovered and tuned server hardware (e.g., Dell Precision workstation node).
* Resolved kernel boot errors, configured thermal management profiles, and ran memory stability diagnostics.

### ZFS Storage Configuration
* Set up a ZFS mirrored storage pool using enterprise SSDs.
* **ARC Limit Tuning:** Limited ZFS Adaptive Replacement Cache (ARC) memory footprint to prevent ZFS from consuming all host RAM during intensive disk writes.

### LXC Container Optimization
* Deployed unprivileged Linux Containers (LXC) for lightweight services.
* Configured local resource quotas and mount points.

## 4. Engineering Impact
* **High Density:** Efficient resource allocation allowed running 15+ containers and VMs on a single i7 hardware node with under 40% memory pressure.
""")

write_file("projects/Netdata.md", """
# Netdata Metrics Exporter Setup
## High-Frequency Telemetry Agents

## 1. Context
To maintain cluster health, we require real-time visibility into CPU, memory, and disk IO patterns. **Netdata** provides high-frequency metrics collection with minimal host overhead.

## 2. Technical Stack
* **Agent:** Netdata Daemon
* **Exporter:** Prometheus Metric Exporters
* **Metrics Type:** CPU cores, disk read/write throughput, TCP socket states, thermal sensors

## 3. Core Capabilities

### Lightweight Instrumentation
* Installed Netdata directly on the bare-metal Proxmox host.
* Configured the agent to collect over 2,000 system metrics per second while consuming less than 1% CPU.

### Telemetry Exporting
* Exposed a secure metrics endpoint (`/metrics`) for scrape queries.
* Configured Prometheus to pull historical metrics from Netdata at regular intervals.

### Real-Time Alerts
* Configured local Netdata alarms for high disk I/O, packet loss, or abnormal host temperatures, providing instant console warnings during heavy workloads.

## 4. Engineering Impact
* **Immediate Bottleneck Discovery:** Quickly identifies disk IO bottlenecks or memory ballooning issues in virtual machines before they cause server crashes.
""")

write_file("projects/Monitoring.md", """
# Monitoring & Observability Stack
## Centralized Telemetry Dashboards

## 1. Context
Observing multiple servers, virtualization nodes, network firewalls, and IoT controllers requires a centralized logging and telemetry system. This project details the integration of **Prometheus & Grafana** with environmental metrics.

## 2. Technical Stack
* **Telemetry DB:** Prometheus
* **Dashboard Engine:** Grafana
* **Environmental Hub:** Home Assistant
* **Alert System:** AlertManager

## 3. Core Capabilities

### Unified Dashboards
* Configured Grafana dashboards to query metrics from the Prometheus database.
* Renders real-time graphs tracking CPU, RAM, network bandwidth, and ZFS pool health across all physical hardware.

### Environmental Integration
* Integrated Home Assistant sensor feeds (rack cabinet temperatures, smart plug power draw in Watts) directly into Grafana.
* Allows correlation of physical rack temperatures with CPU workloads.

### Alert Routing
* Configured AlertManager to route warning notifications to Telegram channels when a host goes offline, disk space exceeds 85%, or temperature thresholds are breached.

## 4. Engineering Impact
* **Centralized Observability:** Eliminates the need to log into individual servers to diagnose performance degradations.
""")

write_file("projects/Luxury-Automotive-Portal.md", """
# Case Study: Luxury Automotive Experience Cloud Portal
## Secure Regulatory Redress Platform with Passwordless Login

## 1. Context
A major global luxury automotive manufacturer required a highly secure Salesforce Experience Cloud portal to administer its regulatory financial redress program. The platform needed to collect claims data from millions of public customers under intense legal and compliance scrutiny.

## 2. Challenges
* **Identity Verification (IDV) Constraints:** The platform could not use traditional username/password credentials, as claimants needed quick, secure, one-time access to check their redress eligibility.
* **Absolute Compliance:** Data privacy, audit logging, and encryption had to comply with strict regulatory frameworks.
* **Premium User Experience:** The portal needed to align perfectly with the automotive manufacturer's luxury brand guidelines.

## 3. Architectural Design

```
  ┌───────────────────────────────────────────────────────────┐
  │                 User Input Credentials                    │
  │    (Agreement Number + Postcode + Surname Match)           │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │         Custom Identity Verification APEX Engine          │
  │  (Validates against encrypted Customer Records DB)       │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                   ┌────────────┴────────────┐
                   ▼                         ▼
            [Match Found]             [No Match/Block]
                   │                         │
                   ▼                         ▼
  ┌─────────────────────────────────┐  ┌──────────────────────┐
  │ Generate Secure Session Token   │  │ Exceeded Limits      │
  │ & Authorize Experience Portal   │  │ Lock IP & Log Audit  │
  └─────────────────────────────────┘  └──────────────────────┘
```

### Passwordless Login Architecture
* Engineered a custom Apex controller that validates incoming login attempts by matching three encrypted customer attributes: **Postcode, Surname, and Agreement Number**.
* Upon confirmation, the platform generates a secure session token to authorize access to the Experience Portal, preventing unauthorized entry.
* Implemented rate-limiting and brute-force prevention policies on the authentication endpoints.

### User Interface & Brand Styling
* Styled using LWC, Vanilla CSS, and custom branding assets.
* Built responsive, accessible layouts conforming to WCAG AA guidelines.

### Data Security & Privacy
* Enforced encryption at rest for claimant personal data.
* Implemented detailed audit trails logging all access attempts, claims updates, and payouts.

## 4. Engineering Impact
* **High Adoption Rate:** Enabled millions of users to submit claims quickly without the friction of registering password credentials.
* **Zero Breaches:** Successfully passed multiple enterprise security audits and penetration tests.
""")

write_file("projects/AI-Learning.md", """
# AI Learning & Upskilling Roadmap
## Specialized Capability Development

This document outlines my upskilling roadmap, focusing on emerging cloud database systems, prompt engineering, and security governance frameworks.

## Core Target Areas

### 1. Salesforce Data Cloud
* **Objective:** Deepen understanding of data ingestion, identity resolution rules, and unified profile activation within Data Cloud.
* **Architectural Value:** Designing real-time segmentations to feed context into downstream AI workflows and marketing pipelines.

### 2. Salesforce AI & Prompt Studio
* **Objective:** Hands-on exploration of Einstein Copilot, Prompt Builder, and Prompt Studio.
* **Architectural Value:** Standardizing prompt templates, grounding strategies, and security trust layers.

### 3. Advanced Cloud DevOps & Rollbacks
* **Objective:** Build automated git-based rollback scripts and environment reconciliation tasks for GitHub Actions and Azure DevOps.
* **Architectural Value:** Restoring stable metadata configurations in under 2 minutes when deployment releases cause unexpected failures.
""")

# ---------------------------------------------------------------------------
# ARCHITECTURE FILES
# ---------------------------------------------------------------------------

write_file("architecture/AI-Architecture.md", """
# AI Agent Architecture
## Multi-Agent Systems & Tool Orchestration

This blueprint outlines the recommended architecture for deploying multi-agent AI systems in enterprise environments.

## 1. Orchestrator-Router Topology
To prevent non-deterministic loops, we implement a centralized routing structure:
* **The Router Agent:** Evaluates user intent, builds an execution plan, and calls specialized sub-agents.
* **Sub-Agents:** Equipped with narrow, strictly validated toolsets (e.g., Salesforce database access, billing query tools).

## 2. Memory & State Serialization
* **Session Cache (Short-term):** Active conversation log stored in Redis.
* **Semantic Vector DB (Long-term):** Supabase pgvector stores embedded documentation chunks (`text-embedding-3-small`).
* **State Checkpointing:** Mid-workflow states are serialized to a PostgreSQL database, allowing agents to recover gracefully from timeouts or errors.

## 3. Tool Calling Boundaries
* All tool specifications must be defined using strict JSON Schema guidelines.
* Direct SQL executions or metadata updates are forbidden. Agents must call intermediate APIs that validate input parameters.
""")

write_file("architecture/Enterprise-Architecture.md", """
# Enterprise Platform Governance
## Multi-Cloud Solutions & Decoupled Design

Enterprise architectures must prioritize stability, scalability, and clean system decoupling.

## 1. Decoupled Systems Design
* Avoid point-to-point connections.
* Integrate cloud applications (Salesforce CRM) with core ERP systems (SAP) using event brokers (Apache Kafka, AWS EventBridge).
* Enforce clear API contracts (Swagger/OpenAPI).

## 2. Multi-Org Strategy
* **Single-Org vs Multi-Org:** Recommend multi-org setups for conglomerate enterprises with regional requirements to prevent metadata conflicts.
* **Shared Metadata:** Use custom packaging pipelines to distribute core components across regional orgs.

## 3. Data Governance
* Enforce strict archiving schedules to prevent data storage bloat.
* Store large transaction files in cloud data lakes (AWS S3, Snowflake) and access them on-demand via external objects.
""")

write_file("architecture/Salesforce.md", """
# Salesforce Core Design Guidelines
## Apex Patterns, LWC Performance & OmniStudio Governance

To build maintainable Salesforce solutions, development teams must adhere to standard design guidelines.

## 1. Apex Trigger Frameworks
* **One Trigger Per Object:** Restrict Apex triggers to a single dispatching framework (e.g., Trigger Handler pattern).
* **Decoupled Logic:** Apex triggers must delegate execution to utility handler classes. No business logic should be written directly in the trigger file.
* **Bulkification:** Apex methods must handle collections (Lists, Maps) to prevent SOQL limit exceptions during data updates.

## 2. LWC Performance Rules
* Minimize server trips using wire service caching (`@AuraEnabled(cacheable=true)`).
* Avoid heavy nested rendering; break components into modular, reusable UI blocks.

## 3. OmniStudio Procedures
* Consolidate database queries into single Integration Procedures rather than executing multiple DataRaptor extracts.
* Enforce strict cache timeouts on OmniStudio procedures to reduce server load.
""")

write_file("architecture/DevOps.md", """
# Release Governance & Branching Models
## CI/CD Pipelines & Version Control Best Practices

Resilient delivery requires strong version control discipline and automated verification gates.

## 1. Git-Based Branching Model
* **Trunk-Based Delivery:** Developers branch off `develop` to build features.
* **Pull Request Reviews:** Merging to integration branches requires approval from lead architects and a successful CI build.

## 2. Automated Pipeline Gates
* **Linter Checks:** Run PMD / ESLint to catch security flaws or bad coding practices before compiling.
* **Validation Deploys:** Validate metadata packages against target orgs before release days.
* **Unit Testing:** Apex test execution must run all tests with a minimum threshold of 85% test coverage.

## 3. Environment Strategy
* **Scratch Orgs:** Used by developers to test individual user stories.
* **Sandbox Verification:** Staging and UAT sandboxes are refreshed regularly to match production metadata states.
""")

write_file("architecture/Security.md", """
# Enterprise Security Architecture
## Zero-Trust Identity, Authentication & Data Protection

Security is the primary consideration when designing enterprise platforms. This document outlines the zero-trust security patterns I implement.

## 1. Zero-Trust Identity & Access Management (IAM)
* **Single Sign-On (SSO):** Enforce identity provider (IdP) integration (Okta, Azure AD) for all Salesforce environments, backed by Multi-Factor Authentication (MFA).
* **Role-Based Access Control (RBAC):** Restrict user privileges using permission set groups, avoiding broad profile assignments.

## 2. Secure Integration Patterns
* **Mutual TLS (mTLS):** Handshakes between Salesforce, middleware, and SAP require mutual client certificate validation.
* **OAuth 2.0 JWT Bearer Flow:** Integration interfaces authenticate securely via signed JSON Web Tokens (JWT), removing password risks.

## 3. Data Protection & Obfuscation
* **Encryption at Rest:** Enforce Salesforce Shield Platform Encryption for sensitive PII fields.
* **Data Masking:** Sandboxes are masked post-refresh to obfuscate customer data before developer access.
* **Edge Protection (WAF):** Network traffic routes through Web Application Firewalls (WAF) to filter SQL injections and common vulnerability vectors.
""")

write_file("architecture/Networking.md", """
# Network Segmentation & Firewalls
## Isolated Lab Topology

This document details the configuration rules for creating isolated lab networks to host testing environments.

## 1. VLAN Segmentation
* Broadcast isolated VLANs to group devices by trust tier:
  * **VLAN 10 (Management):** Host hypervisor access.
  * **VLAN 30 (Lab/R&D):** Build runners and database servers.
  * **VLAN 40 (IoT):** Smart devices, isolated from internal resources.

## 2. Firewall Rules
* Enforce a Default-Deny rule block.
* **Isolated Routing:** Block VLAN 30 (Lab) and VLAN 40 (IoT) from initiating connections to VLAN 10 (Management).
* **NAT Gateways:** Configure port forwarding strictly through reverse proxies, limiting exposed ports to SSL (443).

## 3. DNS Controls
* Redirect all port 53 (DNS) queries to AdGuard Home to filter trackers and prevent DNS bypasses.
""")

write_file("architecture/AI-Governance.md", """
# AI Security & Governance Frameworks
## Cost Caps, Safety Bounds & Evaluation Gates

Autonomous systems require guardrails to ensure safety, cost control, and performance.

## 1. Security & Leak Defense
* **Canary Tokens:** Inject unique tokens into the system prompt. If detected in the response output, block the transaction immediately.
* **Anti-Extraction Rules:** Configure models to reject requests attempting to retrieve system prompts.

## 2. Cost Management
* Set token usage limits per API session.
* Use lightweight routing models (Claude Haiku) to evaluate input requests, calling heavy models (Claude Sonnet) only when complex reasoning is required.

## 3. Evaluation Gates (Evals)
* Maintain automated test suites running factual checks, bound evaluations, and safety checks on model outputs before promoting new prompts to production.
""")

# ---------------------------------------------------------------------------
# RESEARCH FILES
# ---------------------------------------------------------------------------

write_file("research/AI-Roadmap.md", """
# AI Capability Roadmap

This roadmap details my 6-to-12 months technical upskilling objectives in Generative AI.

## Target Milestones

### Q1: Salesforce Data Cloud Integration
* Complete advanced studies on data modeling, identity resolution, and real-time streaming data spaces.

### Q2: Einstein Copilot Grounding
* Experiment with custom action schemas, prompt templates, and grounding options within Salesforce Prompt Builder.

### Q3: Local Agentic Workflows
* Build offline agentic models using localized databases (pgvector) and local inference servers (Ollama) to test zero-cloud data architectures.
""")

write_file("research/Enterprise-AI.md", """
# Local Reasoning Loops vs. Cloud Models

This evaluation compares local AI inference with commercial cloud models for enterprise application use.

## Comparison Matrix

| Criteria | Local Models (e.g., Llama3/Mistral via Ollama) | Cloud Models (e.g., Anthropic Claude, OpenAI) |
|---|---|---|
| **Data Privacy** | Absolute. Data never leaves the enterprise local network. | Requires data processing agreements. Zero-data-retention options needed. |
| **Operational Cost** | High initial hardware setup (GPUs). $0 API usage fees. | Low setup cost. High recurring API usage fees. |
| **Inference Quality** | Excellent for specific, fine-tuned domain tasks. | Superior for general reasoning, complex coding, and multi-step logic. |
| **Latency** | Dependent on local hardware clusters. | Subject to internet speed and API queue latency. |

## Recommendation
Recommend a **hybrid model**: Use local models for sensitive, high-volume data classifications, and cloud models (via secure, zero-retention tunnels) for complex, user-facing reasoning tasks.
""")

write_file("research/Agentic-AI.md", """
# Agentic AI & Self-Healing Code Systems

Agentic AI refers to systems where models operate autonomously, making decisions, executing tools, and evaluating outcomes.

## Key Research Areas

### 1. Closed-Loop Execution
* Designing code execution sandboxes where the LLM writes code, runs it, reads compiler errors, and refactors it until it compiles successfully.

### 2. Self-Correction Pipelines
* Implementing background validation processes that automatically verify system outputs against schema definitions, prompting the model to fix inconsistencies before final save transactions.

### 3. CI/CD Evals Gates
* Developing automated, model-graded test pipelines to evaluate prompt changes for safety and regression before deployment.
""")

write_file("research/MCP.md", """
# Model Context Protocol (MCP) Specifications

The Model Context Protocol (MCP) is an open standard that allows LLM clients to securely read context from backend databases, logs, and filesystems.

## Core Implementations

### 1. Database Connectors
* Developing standard MCP servers exposing SQLite and Postgres interfaces to query schema diagrams and local execution logs.

### 2. Host Command Tools
* Designing isolated command-line runners that let the AI execute clean, limited tools (e.g., `git status`, `npm test`) to verify code compilation states.

### 3. File System Gateways
* Enforcing absolute folder path boundaries to ensure the model cannot read configuration files or credentials outside the project environment.
""")

write_file("research/Claude.md", """
# Anthropic Claude Capabilities Evaluation

This document outlines my evaluation of Anthropic's Claude model family for enterprise workflows.

## Key Observations

### 1. Superior Reasoning & Coding
* Claude 3.5 Sonnet demonstrates the highest accuracy for writing clean, bulkified Apex code, resolving merge conflicts, and planning complex integration routes.

### 2. Clean Tool Calling
* Native support for structured JSON tool outputs (`tool_use`) operates with high precision, mapping inputs to schema definitions with low error rates.

### 3. Cost-Effective Scoring
* Claude 3.5 Haiku is the ideal model for high-frequency classification, initial routing, and post-generation quality evaluations due to its speed and cost ratio.
""")

write_file("research/Future.md", """
# Long-Term Technical Vision (12-36 Months)

This blueprint outlines my long-term vision, focusing on advanced systems architecture, multi-cloud governance, and team leadership.

## Strategic Milestones

### 1. Multi-Cloud Enterprise Architectures
* Deepen integration expertise across AWS, Azure, and GCP, designing secure cross-cloud data flows and federated single sign-on models.

### 2. Enterprise AI Orchestration
* Drive the adoption of agentic workflows that automate core enterprise business processes (e.g., automated invoicing, regulatory audits).

### 3. Technical Mentorship & Governance
* Expand role in guiding multiple technical teams, establishing architecture review boards, and setting platform design standards.
""")

print("Profile files generation script successfully written!")
