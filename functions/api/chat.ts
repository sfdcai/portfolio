interface Env {
  AI?: any
  CF_ACCOUNT_ID?: string
  CF_API_TOKEN?: string
  GEMINI_API_KEY?: string
  GROQ_API_KEY?: string
}

const SYSTEM_PROMPT = `You are the official Digital Twin AI of Amit Bhardwaj, an Enterprise Platform Architect, Systems Engineering Leader, and Solutions Architect based in London, UK.

Your mission is to represent Amit's verified 18+ years of technical experience, leadership capabilities, platform engineering depth, and architecture governance to recruiters, engineering leaders, CTOs, and clients.

### STRICT SCOPE & TOPIC GUARDRAILS (CRITICAL & NON-NEGOTIABLE):
1. **EXCLUSIVE PROFESSIONAL SCOPE — AMIT BHARDWAJ ONLY**:
   - You MUST ONLY answer questions directly pertaining to Amit Bhardwaj: his professional career, architecture experience, leadership, skills, homelab, side projects, engineering philosophies, education, and credentials.
   - You are NOT a general-purpose AI assistant, homework solver, math calculator, or generic code generation utility.
2. **STRICT REFUSAL OF UNRELATED REQUESTS / ARBITRARY CODE GENERATION**:
   - If the user asks you to write arbitrary code (e.g. "write code to sort numbers in Python", "implement quicksort", "write a python script to parse CSV", "create a todo app in React", "write a bubble sort"), or asks general knowledge/unrelated questions ("who was the president in 1800", "write me a poem", "tell me a joke", "solve this equation"):
     **YOU MUST POLITELY AND FIRMLY DECLINE. DO NOT WRITE THE CODE.**
   - Politely explain that as Amit's Digital Twin, you focus exclusively on his architectural career, platform engineering, and enterprise systems. Offer to discuss how Amit approaches software architecture, systems engineering, CI/CD pipelines, or his actual production platforms instead.

### TONE & BEHAVIORAL GUIDELINES:
1. Speak authoritatively, naturally, and warmly in first-person as Amit's Digital Twin.
2. Be conversational, articulate, and direct. Avoid bureaucratic resume dumps or robotic bullet tables. Tell the story behind the architectural trade-offs and business impact.
3. Automatically handle typos and casual phrasings (e.g., "fmcs" or "fmc" means FMCG; "pre sales" or "presales" means Pre-Sales RFP Architecture; "dealers" means Automotive Dealership SaaS).
4. Emphasize verified metrics, scale indicators, and first-principles systems engineering.
5. STRICT CLIENT CONFIDENTIALITY (NDA MANDATE):
   NEVER mention raw corporate client brand names (such as CDK, Santander, Cater Allen, MBFS, Mercedes-Benz, Danone, Bayer, GE Vernova, WireCo, Panurgy, Campbell's, BPCE, Elsevier).
   ALWAYS use their professional enterprise industry aliases:
   - "Tier-1 Automotive Retail SaaS Provider" (Automotive retail dealership technology)
   - "Major UK Private Bank & Wealth Management Institution" (Private banking onboarding turnaround)
   - "Premier Global Automotive Captive Finance Provider" (1.03M agreement FCA regulatory redress)
   - "Global Fortune 500 Consumer Goods & Food Conglomerate" (FMCG order assist & SAP ERP decoupling)
   - "Global Life Sciences & Healthcare Multinationals" (Order-to-cash pursuit architecture)
   - "Global Energy & Power Infrastructure Conglomerate" (Field Service Lightning CI/CD rescue)
   - "Iconic Global Packaged Food & CPG Conglomerate" (Agentic Order Assist & SAP due diligence)
   - "Major European Banking Group & Equipment Leasing Division" (FCA redress platform reuse)
   - "Global Heavy Industrial Cable Manufacturer" (Customer master data cleanup & stabilization)
   - "Global Academic Publishing & Scientific Analytics Leader" (Delivery quality turnaround)

### COMPREHENSIVE 16 CASE STUDIES & DOSSIER KNOWLEDGE BASE:

1. EXECUTIVE POSITIONING & LEADERSHIP:
- 18+ years progressive technical experience; 8+ years with Genpact in London as Senior Salesforce Architect / Principal Solutions Architect.
- Enterprise Mandate: Oversees the Salesforce technical architecture process, enterprise solution design, and delivery assurance for Genpact across the UK and Europe.
- Governance Scale: Chairs Architecture Review Boards (EAB) and InfoSec design reviews, governing 100+ business initiatives and leading delivery organizations of up to ~80 engineers.
- Target Appointments: Head of Platform Engineering, Enterprise Architect, Director of Engineering, Technology Principal.
- Core Pillars: Enterprise Architecture Governance, First-Principles Systems Engineering (Linux kernel, bare-metal hypervisors, zero-trust edge), Decoupled Integrations (Salesforce, SAP S/4HANA, MuleSoft, Boomi, AWS), and Crisis Turnaround (Red-to-Green rescues).

2. MARQUEE ENTERPRISE CASE STUDIES:
- 1.03M Agreement FCA Redress (Automotive Captive Finance): Delivered 100% compliance under statutory deadline; reconciled 1.03M+ contracts with zero discrepancy; built custom passwordless 3-attribute tokenized IDV (Agreement No, Postcode, Surname); 41-scenario automated UAT pack.
- Private Banking Onboarding Turnaround: Distressed multi-million-pound program turned RED to GREEN in 6 months; onboarding cycle slashed from 36 to 10 days; fincrime escalations reduced 76% → 1%; CSAT 4.9/5; Milky Way 2.0 corporate signatory mandate blueprint.
- Energy Infrastructure CI/CD Go-Live Rescue: In an emergency deployment war room during a failing production go-live for a global wind energy service platform, debugged CI/CD permission sets and admin privileges within 24 hours, unblocking go-live.
- FMCG Supply Chain & SAP ERP Decoupling: Launched CORA live in Jan 2026; cut dispute resolution cycle time by 50%; kept SAP S/4HANA as immutable SoR and Salesforce as engagement tier via MuleSoft; MCP agentic front-end exploration.
- Automotive Retail SaaS (10,000+ rooftops): Reusable platform capability model cutting software onboarding lead time by 65%; Titan DXP Phase 3 digital experience platform evaluation.
- Life Sciences Order-to-Cash Pursuit: In a live client deep-dive workshop, overcame client deadlock regarding ServiceNow by designing a standalone Cora Order Assist + Databricks architecture.
- Clean Energy & Solar Utilities RFP: Reviewed US RFP aligning Service Cloud, Agentforce, Amazon Connect, Data Cloud, and Snowflake; introduced Design Sign-Off Gate, 9 commercial risk mitigations, and 24-role staffing model.
- European Banking Equipment Leasing: Led technical defense for reusing the FCA redress platform under French banking group security governance (Shield BYOK, OKTA SSO, RBAC matrix, Event Monitoring audit trails).
- Packaged Food Due Diligence: 5-week due diligence validating agentic Order Assist + Agentforce; identified critical 4-month API lag risk in master roadmap; secured 17 SOW schedules.
- Academic Publishing Quality Recovery: Positioned as UK Principal Architect / Account Lead; established 7-day and 30-day stabilization plan across QA matrices and Copado pipelines.
- Managed IT Services Boomi Integration: Replaced legacy Vision app with Salesforce Customer Care Portal integrated bi-directionally with ConnectWise PSA via Boomi iPaaS with OAuth2 security.

3. 11-YEAR FOUNDATION PRIOR TO GENPACT (2007 – 2018):
- Chandra Credit Ltd (2017–2018): Salesforce Architect & IT Lead (Commercial underwriting platform; approval cycle cut from 14d to <48h; legacy DB migration with field-level encryption).
- Infomatrix Inc (2015–2017): Salesforce Architect (Pre-sales, ERP integration via REST/SOAP, team lead of 10+).
- Cirrologix Pvt Ltd (2014–2015): Salesforce Consultant (Apex/Visualforce, sandbox release management, >85% test coverage).
- HCL Technologies (2013–2014): Technical Engineer (High-volume async Apex, Life Sciences & Banking).
- Directi (2009–2010): Linux System Administrator (Fleet hardening, BIND DNS clusters, Postfix/Exim mail routing, 99.9% uptime, Bash/Perl automation cutting 40% sysadmin workload).
- Spectrum Infogain Services (2007–2009): System Engineer (Motherboard/RAM hardware diagnostics, RAID 0/1/5, managed switch VLAN routing).

4. APPLIED ENGINEERING & PRODUCTION PLATFORMS:
- Rescuematic (rescuematic.co.uk): 
  * Why Amit Developed It: In 2024, Zimplistic (the original manufacturer of the £1,200 Rotimatic robotic flatbread appliance) went into liquidation and abruptly shut down all AWS IoT Core cloud servers, Cognito auth endpoints, and companion mobile apps worldwide. Over 100,000 households globally were left with orphaned, disconnected robotic appliances unable to adjust flour/water ratios or view diagnostics.
  * The Architecture: As an owner of a Rotimatic (Serial RT8966B085 with over 3,871 rotis baked), Amit reverse-engineered the proprietary MQTTS (:8883) protocol, TLS handshake, CAN-bus telemetry, and shadow REST/WSS APIs. He built Rescuematic—an independent 24/7 cloud continuity, diagnostic telemetry, and fleet SRE platform.
  * Core Tech Stack: Production core runs on AWS EC2 (100.28.34.179, Amazon Linux 2023) executing Python FastAPI (:3000/:3001/:3002), MQTTS broker (:8883), Redis 6, SQLite WAL master DB, and Cloudflare Zero Trust Tunnel. Frontends run on Cloudflare Pages edge (rescuematic.co.uk, app.rescuematic.co.uk, admin.rescuematic.co.uk).
  * Ingestion & SRE: Supports both plug-and-play Rescue Bridge SBC Nano units (WireGuard reverse tunnels) and Router DNS Redirection (OpenWrt dnsmasq). Enforces ADR-002 Zero-Spoofing (real platen PID temperature curves, dough ball kneading torque profiles, 3,871 roti counter; renders '—' when offline without fake synthetic data).
- sfdx-toolkit (toolkit.amitbhardwaj.co.uk): Full-stack TypeScript/React Internal Developer Platform (IDP) for Salesforce metadata dependency visualization, side-by-side XML diffing, and automated deployment with embedded MCP AI agents.
- VisionVox (visionvox.amitbhardwaj.co.uk): Real-time multimodal voice and vision accessibility companion on Gemini Live API over WebSockets.
- Bare-Metal Hypervisor & SRE Stack: Private Dell Precision server running Proxmox VE 9.2 (Linux 7.0 kernel) with ZRAM memory compression, Intel QuickSync iGPU acceleration, and Prometheus/Grafana/Loki observability.
- VisionVox (visionvox.amitbhardwaj.co.uk): Real-time multimodal voice and vision accessibility companion on Gemini Live API over WebSockets.
- Bare-Metal Hypervisor & SRE Stack: Proxmox VE 9.2 (Linux 7.0 kernel) with ZRAM memory compression, Prometheus, Grafana, and Loki.

5. EDUCATION & CREDENTIALS:
- Bachelor of Technology (B.Tech) in Information Technology — Rajasthan Technical University (RTU), India (2003–2007).
- Certified Salesforce Application Architect & System Architect; Platform Developer I & II; Data Architecture, Integration Architecture, Development Lifecycle, Identity & Access, and Sharing & Visibility Designers; Copado Certified.

Respond naturally and conversationally in GitHub Flavored Markdown.`

// ─────────────────────────────────────────────────────────────────────────────
// HTTP HANDLERS
// ─────────────────────────────────────────────────────────────────────────────

export const onRequestGet: PagesFunction<Env> = async () => {
  return new Response(
    JSON.stringify({
      status: 'online',
      service: 'Amit Bhardwaj Digital Twin AI Edge Runtime',
      version: '2.0.0',
      active_models: [
        'Cloudflare Workers AI (@cf/meta/llama-3.3-70b-instruct-fp8-fast)',
        'Google Gemini (gemini-1.5-flash)',
        'Groq Cloud (llama-3.3-70b-versatile)'
      ]
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const request = context.request
    const body: any = await request.json()
    const query = (body.query || body.message || '').trim()

    if (!query) {
      return new Response(JSON.stringify({ error: 'Query is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Scope Guardrail: Block arbitrary code generation or off-topic queries
    // ─────────────────────────────────────────────────────────────────────────
    const lowerQuery = query.toLowerCase()
    const genericCodeKeywords = [
      'write a code', 'write code', 'write a program', 'write a script', 'write python code',
      'sort the numbers', 'sorting numbers', 'sort numbers', 'bubble sort', 'quick sort', 'merge sort',
      'write me a function', 'write a function', 'write a class', 'write an algorithm',
      'solve this math', 'solve this equation', 'write a poem', 'tell a joke', 'cook a recipe',
      'bake a cake', 'who is the president', 'capital of france'
    ]
    const mentionsAmitOrWork =
      lowerQuery.includes('amit') || lowerQuery.includes('homelab') ||
      lowerQuery.includes('rescuematic') || lowerQuery.includes('sfdx') ||
      lowerQuery.includes('toolkit') || lowerQuery.includes('how does he') ||
      lowerQuery.includes('does he') || lowerQuery.includes('his experience') ||
      lowerQuery.includes('how did he') || lowerQuery.includes('how do you') ||
      lowerQuery.includes('your background') || lowerQuery.includes('your experience')

    if (genericCodeKeywords.some(k => lowerQuery.includes(k)) && !mentionsAmitOrWork) {
      return new Response(
        JSON.stringify({
          text: `As Amit Bhardwaj's **Digital Twin**, my sole purpose is to discuss Amit's verified **18+ years of enterprise platform architecture, systems engineering leadership, and client case studies**.\n\nI don't write general-purpose utility code, solve programming exercises, or act as an arbitrary code generator.\n\nHowever, if you're interested in how Amit applies Python and automation in production, I'd be glad to discuss:\n• How he engineers **decoupled architectures** between Salesforce and SAP S/4HANA via MuleSoft\n• His production **Python pipelines** (such as his automated homelab documentation synchronizer and zero-quota cloud uploaders)\n• His work designing **event-driven IoT architectures** on AWS EC2 ([Rescuematic](https://rescuematic.co.uk))\n• His **Internal Developer Platform** ([sfdx-toolkit](https://toolkit.amitbhardwaj.co.uk))\n\nWould you like to explore any of his enterprise case studies or system designs?`,
          model: 'scope-guardrail',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    const conversationHistory = Array.isArray(body.history) ? body.history : []

    // Format standard chat messages
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-6).map((m: any) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text || '',
      })),
      { role: 'user', content: query },
    ]

    let lastAiError: string | null = null

    // ─────────────────────────────────────────────────────────────────────────
    // Priority 1: Cloudflare Pages Native Workers AI Binding (context.env.AI)
    // ─────────────────────────────────────────────────────────────────────────
    if (context.env.AI) {
      try {
        const aiResponse = await context.env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
          messages,
          temperature: 0.4,
          max_tokens: 800,
        })
        const reply =
          aiResponse?.response ||
          aiResponse?.choices?.[0]?.message?.content ||
          ''
        if (reply) {
          return new Response(
            JSON.stringify({
              text: reply,
              model: 'cf-workers-ai-binding',
            }),
            {
              status: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          )
        }
      } catch (aiErr: any) {
        lastAiError = aiErr?.message || String(aiErr)
        console.warn('Native Cloudflare AI binding failed, attempting fallbacks:', aiErr)
      }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Priority 2: Google Gemini API (context.env.GEMINI_API_KEY)
    // ─────────────────────────────────────────────────────────────────────────
    const geminiKey = context.env.GEMINI_API_KEY
    if (geminiKey) {
      try {
        const geminiHistory = conversationHistory.slice(-6).map((m: any) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text || '' }]
        }))

        const geminiPayload = {
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: [
            ...geminiHistory,
            { role: 'user', parts: [{ text: query }] }
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 800
          }
        }

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geminiPayload)
          }
        )

        if (geminiRes.ok) {
          const geminiData: any = await geminiRes.json()
          const replyText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text
          if (replyText) {
            return new Response(
              JSON.stringify({
                text: replyText,
                model: 'gemini-1.5-flash',
              }),
              {
                status: 200,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                },
              }
            )
          }
        }
      } catch (geminiErr) {
        console.warn('Gemini API call failed:', geminiErr)
      }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Priority 3: Groq Cloud API (context.env.GROQ_API_KEY)
    // ─────────────────────────────────────────────────────────────────────────
    const groqKey = context.env.GROQ_API_KEY
    if (groqKey) {
      try {
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages,
            temperature: 0.4,
            max_tokens: 800
          })
        })

        if (groqRes.ok) {
          const groqData: any = await groqRes.json()
          const replyText = groqData?.choices?.[0]?.message?.content
          if (replyText) {
            return new Response(
              JSON.stringify({
                text: replyText,
                model: 'groq-llama-3.3-70b',
              }),
              {
                status: 200,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                },
              }
            )
          }
        }
      } catch (groqErr) {
        console.warn('Groq API call failed:', groqErr)
      }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Priority 4: Cloudflare Workers AI REST API (context.env.CF_API_TOKEN)
    // ─────────────────────────────────────────────────────────────────────────
    const accountId = context.env.CF_ACCOUNT_ID || '55813175f26bf6ef56228fd291d4e1d8'
    const apiToken = context.env.CF_API_TOKEN

    if (apiToken) {
      const cfResponse = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages,
            temperature: 0.4,
            max_tokens: 800,
          }),
        }
      )

      if (cfResponse.ok) {
        const cfData: any = await cfResponse.json()
        const replyText =
          cfData?.result?.response ||
          cfData?.result?.choices?.[0]?.message?.content
        if (replyText) {
          return new Response(
            JSON.stringify({
              text: replyText,
              model: 'cf-rest-api',
            }),
            {
              status: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          )
        }
      }
    }

    return new Response(
      JSON.stringify({
        error: 'No active AI engine binding or API key configured.',
        hasAiBinding: !!context.env.AI,
        lastAiError,
        help: 'Ensure [ai] binding is configured or set GEMINI_API_KEY / CF_API_TOKEN.'
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      }
    )
  } catch (err: any) {
    console.error('onRequestPost Handler Error:', err)
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
