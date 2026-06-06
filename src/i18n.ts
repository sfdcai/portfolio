export const seo = {
  es: {
    title: 'Amit Bhardwaj | Salesforce Architect & Developer',
    description: 'London-based Certified Salesforce Architect & Developer, Copado DevOps Engineer, and Systems Designer with 14+ years of experience building enterprise-scale systems and integrations.',
  },
  en: {
    title: 'Amit Bhardwaj | Salesforce Architect & Developer',
    description: 'London-based Certified Salesforce Architect & Developer, Copado DevOps Engineer, and Systems Designer with 14+ years of experience building enterprise-scale systems and integrations.',
  },
};

const data = {
  greeting: 'who builds enterprise-scale systems',
  greetingRoles: [
    'Salesforce Architect',
    'DevOps Engineer',
    'Systems Designer',
    'Cloud Integration Expert',
  ],
  pillLabels: ['Architect', 'Developer'],
  email: 'hiamitbhardwaj@gmail.com',
  role: '',
  story: {
    context: '14+ years designing Salesforce architectures',
    reflections: [
      'Code is cheap. Architecture is everything.',
      'Automation should feel seamless.',
    ],
    hookParagraphs: [
      ['Designing enterprise platforms is about structure, scale, and clarity.'],
      [
        'What drives me is bridging the gap between business objectives',
        'and solid, future-ready engineering.',
      ],
    ],
    why: 'At Genpact and HCL, I led the delivery of over 100 Salesforce projects, integrating CRM platforms with SAP ERPs, orchestrating event-driven architectures, and implementing version-driven Copado DevOps pipelines.',
    seeking: [
      'Scale.',
      'Complex integration challenges.',
      'End-to-end platform design.',
    ],
    nav: [
      { icon: 'briefcase', label: 'Experience', href: '#experience' },
      { icon: 'folder', label: 'Projects', href: '#projects' },
      { icon: 'mail', label: 'Contact', href: '#contact' },
    ],
    skills: [
      'Salesforce Architecture',
      'System Design',
      'DevOps & CI/CD',
      'Enterprise Integration',
      'Infrastructure & Virtualization',
      'AI & Automation',
    ],
    skipButton: 'Skip intro',
  },
  taglines: [] as readonly string[],
  location: 'London, UK · Remote',
  roles: [
    'Salesforce Technical Architect',
    'Salesforce Developer',
    'Copado DevOps Engineer',
  ],
  summary: {
    title: 'Professional Summary',
    p1: 'Certified Salesforce Architect & Developer focused on',
    p1Highlight: 'enterprise system design',
    p1End: 'and large-scale cloud integrations. Over a 14-year career leading programs at Genpact and HCL, I have successfully delivered over 100 projects across Salesforce Sales, Service, and Experience Clouds, integrating them with complex backends like SAP.',
    p2: 'Specializing in the intersection of',
    p2Highlight: 'Salesforce, DevOps, & Systems Engineering',
    p2End: ', enabling robust, automated delivery pipelines and secure data flows.',
    cards: [
      {
        title: 'Architecture Mindset',
        desc: 'Designing secure, decoupled, and high-throughput systems',
      },
      {
        title: 'DevOps & Quality',
        desc: 'Release governance, branching strategy, and automated validation',
      },
      {
        title: 'R&D & Systems',
        desc: 'Self-hosted home labs, virtualization, and network segmentation',
      },
    ],
  },
  coreCompetencies: {
    title: 'Core Competencies',
    items: [
      {
        title: 'Salesforce Architecture',
        desc: 'Platform governance, multi-cloud strategy, data modeling, and security design',
      },
      {
        title: 'Enterprise Integration',
        desc: 'API-led connectivity, event-driven architectures, SAP RFCs, and Mulesoft integration',
      },
      {
        title: 'DevOps & Automation',
        desc: 'Azure DevOps pipelines, Copado version control, git workflows, and automatic deployments',
      },
      {
        title: 'Systems Engineering',
        desc: 'Proxmox virtualization, OPNsense firewall setup, network segmentations, and Linux',
      },
      {
        title: 'Observability & Logging',
        desc: 'Netdata monitoring, unified dashboards, and event-driven logging setups',
      },
      {
        title: 'AI & R&D',
        desc: 'LLM-assisted engineering, prompt workflows, and automated system scripting',
      },
    ],
  },
  techStack: {
    title: 'Tech Stack',
    categories: [
      {
        name: 'Salesforce',
        items: [
          'Apex',
          'Lightning Web Components',
          'Visualforce',
          'Flows',
          'Sales/Service Cloud',
        ],
      },
      {
        name: 'DevOps & CI/CD',
        items: [
          'Copado',
          'Azure DevOps',
          'Git Workflows',
          'CI/CD Pipelines',
          'Automated Testing',
        ],
      },
      {
        name: 'Integration',
        items: [
          'SAP ERP',
          'REST/SOAP APIs',
          'Webhooks',
          'Event-Driven Architecture',
          'JSON/XML',
        ],
      },
      {
        name: 'Systems & Network',
        items: [
          'Proxmox VE',
          'OpenWRT',
          'pfSense / OPNsense',
          'Linux Systems',
          'VLANs / Firewalls',
        ],
      },
      {
        name: 'Observability',
        items: [
          'Netdata',
          'Home Assistant',
          'Unified Dashboards',
          'Logging Systems',
        ],
      },
      {
        name: 'Programming',
        items: [
          'Apex',
          'JavaScript',
          'Python',
          'Bash Scripting',
          'SQL',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects & Experiments',
    githubLink: 'github.com/hiamitbhardwaj',
    viewCode: 'View code',
    viewPrototype: 'View prototype',
    agentInfra: {
      title: 'AI Agent Infrastructure',
      subtitle: 'Testing and implementing local LLM reasoning loops.',
      agents: [
        {
          icon: 'brain',
          name: 'reasoning-agent',
          desc: 'Local model running prompt-driven automation',
          tag: 'private',
        },
      ],
    },
    items: [
      {
        title: 'Employee Engagement Platform',
        badge: 'SaaS · Concept',
        badgeBuilding: '',
        desc: 'A conceptual SaaS platform designed to improve employee engagement using gamification, feedback loops, and AI-driven insights.',
        tech: ['React', 'Node.js', 'AI Insights', 'Gamification Engine'],
        caseStudyUrl: '',
      },
      {
        title: 'AI Product Information Platform',
        badge: 'AI · Data',
        badgeBuilding: '',
        desc: 'A system designed to centralize product data and enhance it using AI-driven enrichment pipelines and translations.',
        tech: ['Python', 'FastAPI', 'OpenAI API', 'Database Catalog'],
        caseStudyUrl: '/ai-agents-arch',
        caseStudyLabel: 'View AI Architecture',
      },
      {
        title: 'Home Lab Infrastructure',
        badge: 'DevOps · Infra',
        badgeBuilding: '',
        desc: 'A fully self-hosted Proxmox environment used for learning enterprise infrastructure, networking, and security.',
        tech: ['Proxmox', 'OpenWRT', 'pfSense', 'Netdata'],
        caseStudyUrl: '/homelab-network',
        caseStudyLabel: 'View Home Lab',
      },
      {
        title: 'Enterprise Integration Architecture',
        badge: 'Salesforce · SAP',
        badgeBuilding: '',
        desc: 'Designed scalable integration patterns between Salesforce CRM and enterprise backends like SAP using event-driven communication.',
        tech: ['Salesforce', 'SAP', 'Event Bus', 'Middleware'],
        caseStudyUrl: '/salesforce-sap',
        caseStudyLabel: 'View SAP Integration',
      },
    ],
  },
  experience: {
    title: 'Professional Experience',
    items: [
      {
        company: 'Genpact',
        logo: '',
        role: 'Senior Manager & Solutions Architect',
        period: '2024 - Present',
        location: 'London, United Kingdom',
        desc: 'Lead and manage Salesforce projects across SaaS, PaaS, and IaaS cloud platforms. Architect integration pipelines between Salesforce and enterprise ERP systems like SAP.',
        highlights: [
          'Orchestrated multi-cloud Salesforce integrations with complex client enterprise applications',
          'Managed client requirements gathering, custom technical strategies, and implementation blueprints',
          'Implemented DevOps release governance pipelines using Copado and Azure DevOps',
        ],
        testimonials: [
          {
            quote: 'Working under Amit’s leadership has been one of the most rewarding experiences of my professional career. He is a visionary Salesforce Architect who combines deep technical expertise with the ability to lead and inspire teams toward excellence.',
            author: 'Abhay Sharma',
            role: 'Lead Consultant, Genpact',
          },
          {
            quote: 'Amit is an asset to any team he is in. His expertise and knowledge in managing Salesforce is commendable. There hasn\'t been a time when he did not have a solution to a problem thrown at him.',
            author: 'Jayoti Mitra',
            role: 'Assistant Vice President, Genpact',
          },
        ],
      },
      {
        company: 'HCL Technologies',
        logo: '',
        role: 'Salesforce CRM Program Architect',
        period: '2019 - 2024',
        location: 'London, United Kingdom',
        desc: 'Managed program delivery and hands-on architectural design for multi-cloud Salesforce implementations. Bridged business objectives with technical engineering output.',
        highlights: [
          'Designed robust and scalable platform patterns aligned with enterprise goals',
          'Led release engineering processes, environment strategy, and branching models',
          'Mentored developer teams on Salesforce best practices, Apex design patterns, and LWC',
        ],
        testimonials: [
          {
            quote: 'As a Salesforce SME, Amit showed meticulous attention to detail and a deep understanding of the Salesforce platform, delivering scalable and efficient solutions. Transitioning seamlessly into leadership roles, he effectively managed teams, driving collaboration and inspiring high performance.',
            author: 'Dushyant Kumar Teotia',
            role: 'Salesforce Program Architect, Huron (ex-HCL)',
          },
          {
            quote: 'Amit is an exceptional Salesforce expert with whom I had the pleasure of working closely at HCL Technologies. His deep technical knowledge, innovative problem-solving, and dedication consistently elevated our team’s performance.',
            author: 'Himanshu Passi',
            role: 'Principal Technical Architect, OneTrust (ex-HCL)',
          },
        ],
      },
      {
        company: 'Infomatrix',
        logo: '',
        role: 'Salesforce Practice Lead',
        period: '2013 - 2019',
        location: 'London, United Kingdom',
        desc: 'Led the Salesforce development practice, directing technical design, Apex/LWC components, and API integration architectures.',
        highlights: [
          'Collaborated with sales and digital engineering for client demos and POCs',
          'Managed delivery quality, platform security audits, and data governance design',
        ],
        testimonials: [
          {
            quote: 'I collaborated with Amit on several projects, demos, and POCs, and I was always impressed with his strong technical approach and the way he handled customer requirements. Amit has deep Salesforce expertise and has successfully delivered many complex implementations.',
            author: 'Arpit Saharawat',
            role: 'Senior Director Digital Engineering, Infinite Computer Solutions (ex-Infomatrix)',
          },
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        year: '2003 - 2007',
        org: 'University Engineering School',
        title: 'Bachelor of Engineering (B.E.)',
        desc: 'Focus on systems, networking, and digital communications.',
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    items: [
      {
        year: '2024',
        title: 'Certified Salesforce Architect',
        org: 'Salesforce',
        logo: 'salesforce',
        url: 'https://trailblazer.me/id/hiamitbhardwaj',
      },
      {
        year: '2023',
        title: 'Certified Salesforce Developer',
        org: 'Salesforce',
        logo: 'salesforce',
        url: 'https://trailblazer.me/id/hiamitbhardwaj',
      },
      {
        year: '2023',
        title: 'Solution Architect Certification',
        org: 'Salesforce',
        logo: 'salesforce',
        url: 'https://trailblazer.me/id/hiamitbhardwaj',
      },
      {
        year: '2022',
        title: 'Copado Certified Fundamentals I & II',
        org: 'Copado',
        logo: 'copado',
        url: 'https://trailblazer.me/id/hiamitbhardwaj',
      },
      {
        year: '2021',
        title: 'Platform Developer II (PD2)',
        org: 'Salesforce',
        logo: 'salesforce',
        url: 'https://trailblazer.me/id/hiamitbhardwaj',
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    languages: 'Languages',
    spanish: 'Spanish',
    native: 'Professional',
    english: 'English',
    professional: 'Fluent',
    soft: 'Soft Skills',
    softSkills: [
      'Platform Governance',
      'Stakeholder Management',
      'Agile Leadership',
      'Technical Mentorship',
      'Requirements Analysis',
    ],
  },
  cta: {
    title: 'Let\'s Design Something Scalable',
    desc: 'Have an integration project or Salesforce architectural challenge? Get in touch and let\'s build systems that last.',
    contact: 'Let\'s Connect',
  },
};

export const translations = {
  es: data,
  en: data,
};

export type Lang = 'es' | 'en';
