export const seo = {
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
  email: '',
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
    githubLink: '',
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
        role: 'Senior Salesforce Architect and Delivery Lead',
        period: 'Dec 2022 - Present',
        location: 'Greater London, England, United Kingdom · Hybrid',
        desc: 'As a Senior Salesforce Architect at Genpact, I lead the architecture and technical delivery of enterprise-scale digital transformation initiatives for global clients. Working closely with business stakeholders, delivery leaders, and engineering teams, I help organizations modernize business processes, improve customer experiences, and maximize the value of their technology investments.',
        highlights: [
          'Defining end-to-end solution architectures for complex Salesforce implementations and transformation programs.',
          'Partnering with business and technology stakeholders to translate strategic objectives into scalable and sustainable technology solutions.',
          'Designing enterprise integrations between Salesforce, SAP, Azure, middleware platforms, and other business-critical systems.',
          'Providing technical leadership across the solution lifecycle, from discovery and architecture through implementation and deployment.',
          'Establishing architecture standards, integration patterns, security models, and development best practices.',
          'Conducting architecture reviews and mentoring development teams to ensure high-quality, scalable, and maintainable solutions.',
          'Supporting project delivery teams by providing technical governance, solution oversight, risk mitigation, and implementation guidance.',
          'Exploring emerging technologies including Generative AI, intelligent automation, and AI-assisted software delivery to improve business outcomes and engineering productivity.',
          'Throughout my consulting career, I have contributed to the successful delivery of 100+ Salesforce projects and enhancements across multiple industries.'
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
        company: 'Genpact',
        logo: '',
        role: 'Salesforce Architect',
        period: 'Jun 2018 - Dec 2022',
        location: 'Noida, Uttar Pradesh, India · On-site',
        desc: 'As a Salesforce Architect at Genpact, I led the design and delivery of enterprise-scale Salesforce solutions supporting global Sales, Marketing, and Operational functions. Partnering with business and technology stakeholders, I transformed complex requirements into scalable digital solutions that improved business processes, data visibility, and user adoption across the organization.',
        highlights: [
          'Architecting Salesforce solutions aligned with business objectives and enterprise technology strategies.',
          'Designing integrations between Salesforce and enterprise applications, enabling seamless data exchange and process automation.',
          'Defining platform governance, development standards, security controls, and architectural best practices.',
          'Leading cross-functional teams through the full project lifecycle using Agile, Waterfall, and Hybrid delivery models.',
          'Delivering multiple Salesforce initiatives while ensuring quality, scalability, and alignment with PMO standards.',
          'Evaluating emerging technologies and driving innovation to improve operational efficiency and user experience.',
          'Establishing reusable solution patterns, improving delivery consistency, and reducing implementation effort.',
          'Mentoring developers and consultants while contributing to capability building and technical excellence.'
        ],
        testimonials: [],
      },
      {
        company: 'Chandra Credit Ltd.',
        logo: '',
        role: 'Salesforce Architect',
        period: 'Apr 2017 - Jun 2018',
        location: 'New Delhi, Delhi, India',
        desc: 'During my tenure at Chandra Credit Ltd., I held the position of Salesforce Architect, contributing significantly to the organization\'s technological advancement and operational excellence.',
        highlights: [
          'Salesforce Implementation: I played a pivotal role in implementing Salesforce within the organization. This involved tailoring Salesforce solutions to align with our specific operational needs, thus streamlining day-to-day operations for enhanced efficiency.',
          'IT Management: As part of my role, I managed all aspects of information technology within the organization. This included overseeing the organization\'s website, procurement processes, network infrastructure, and security protocols.',
          'Salesforce Development: I was responsible for designing, architecting, and developing Salesforce.com applications. This encompassed creating customized applications and features to meet the evolving needs of the organization.',
          'CRM Solutions Oversight: I oversaw the development, implementation, and support of various SFDC CRM software solutions. This included ensuring that our CRM solutions were tailored to our business requirements and remained effective in enhancing customer relationship management.',
          'Project Management: I skillfully managed the scope of Salesforce projects, ensuring they were executed within defined parameters. This included comprehending client requirements and offering innovative business solutions to address specific challenges.',
          'Problem-Solving: I demonstrated a proactive approach to addressing issues and assignments, ensuring follow-up on tasks and timely resolution of problems.'
        ],
        testimonials: [],
      },
      {
        company: 'Infomatrix Inc.',
        logo: '',
        role: 'Salesforce Architect',
        period: 'Oct 2015 - Jan 2017',
        location: 'Noida, Uttar Pradesh, India',
        desc: 'During my tenure at Infomatrix Inc., I served as a Salesforce Architect, contributing significantly to the organization\'s success in providing tailored Salesforce solutions to clients.',
        highlights: [
          'Customized Solutions: I thoroughly analyzed client specifications and designed customized solutions to meet their unique needs. This involved a keen understanding of client requirements and translating them into effective Salesforce solutions.',
          'Pre-Sales and Negotiations: I oversaw pre-sales activities, including negotiations and lead proposal meetings for Salesforce product offerings. This required effective communication and a deep understanding of Salesforce\'s capabilities.',
          'Client Demonstrations: I developed and delivered client-specific demonstrations to showcase the value and functionality of Salesforce solutions. These demonstrations were crucial in winning client confidence and securing projects.',
          'Inter-Departmental Coordination: I worked closely with the sales team and other in-house departments to ensure seamless coordination of efforts and technology. This collaboration resulted in the most effective and mutually beneficial solutions for both the company and clients.',
          'Post-Sales Support: I provided hassle-free post-sales assistance, ensuring that clients received ongoing support to maintain long-term business relationships. This commitment to service excellence was instrumental in client satisfaction.',
          'Team Management: I successfully managed and mentored a team of eight resources, focusing on key Salesforce applications, software design, and fundamental skills. This approach fostered both personal and professional growth among team members.'
        ],
        testimonials: [
          {
            quote: 'I collaborated with Amit on several projects, demos, and POCs, and I was always impressed with his strong technical approach and the way he handled customer requirements. Amit has deep Salesforce expertise and has successfully delivered many complex implementations.',
            author: 'Arpit Saharawat',
            role: 'Senior Director Digital Engineering, Infinite Computer Solutions (ex-Infomatrix)',
          },
        ],
      },
      {
        company: 'Cirrologix Pvt Ltd',
        role: 'Salesforce Consultant',
        logo: '',
        period: 'Nov 2014 - Sep 2015',
        location: 'Noida Area, India',
        desc: 'As a Salesforce Consultant at Cirrologix Pvt Ltd, I drove business success by crafting tailored Salesforce solutions to meet clients\' unique needs.',
        highlights: [
          'Solution Design and Guidance: Collaborated closely with clients to understand their objectives and designed Salesforce solutions aligned with their requirements. Created high-level and detailed technical designs, providing valuable guidance to development teams.',
          'Quality Assurance and Best Practices: Conducted comprehensive code reviews, ensuring solutions adhered to industry best practices, performance standards, and security guidelines.',
          'Project Leadership: Led project delivery teams, managing schedules, and ensuring timely completion within scope and budget. Fostered collaboration among cross-functional teams for successful project outcomes.',
          'Client Relationship Management: Established and nurtured strong client relationships, identifying growth opportunities, and delivering exceptional customer service.',
          'Continuous Learning and Mentorship: Stayed updated on evolving Salesforce technologies, offering valuable recommendations for enhanced solutions. Provided training and mentorship to junior team members, promoting a culture of continuous learning.',
          'Integration Management: Oversaw Salesforce integrations with vendors and internal teams, optimizing operations. Led inter-team meetings and managed diverse resources.',
          'Comprehensive Project Oversight: Developed implementation estimates and designs aligned with client requirements. Provided innovative business solutions, ensuring successful assignments and problem resolution.'
        ],
        testimonials: [],
      },
      {
        company: 'HCL Technologies',
        logo: '',
        role: 'Salesforce Consultant',
        period: 'Oct 2013 - Oct 2014',
        location: 'Noida Area, India',
        desc: 'As a Salesforce Consultant at HCL Technologies, I was responsible for developing and maintaining custom solutions on the Salesforce platform. My primary focus was coding, testing, and deploying new features and functionality in collaboration with cross-functional teams.',
        highlights: [
          'Develop and Customize Salesforce Applications: Leveraged Apex, Visualforce, Lightning Components, and other Salesforce technologies to develop and customize Salesforce applications, meeting clients\' unique needs.',
          'Requirements Translation: Collaborated closely with stakeholders to understand business requirements and effectively translate them into technical solutions.',
          'Technical Design and Best Practices: Actively participated in technical design sessions, contributing insights on best practices to ensure optimal solutions.',
          'Technical Documentation: Created and maintained comprehensive technical documentation, including design specifications, test plans, and user guides, ensuring transparency and clarity in project deliverables.',
          'Quality Assurance: Conducted rigorous unit testing and code reviews to guarantee the delivery of high-quality code that adhered to industry standards.',
          'Issue Resolution: Quickly and effectively troubleshooted and resolved technical issues, minimizing downtime and ensuring client satisfaction.',
          'Continuous Learning: Kept up-to-date with the latest Salesforce releases and features, providing valuable recommendations on how to leverage them for the benefit of HCL clients.'
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
        company: 'Directi',
        logo: '',
        role: 'System Administrator',
        period: 'Sep 2009 - Sep 2010',
        location: '',
        desc: 'As a System Administrator I was responsible for managing and maintaining the technology infrastructure of an organization, ensuring that all systems are operating efficiently and effectively. I was responsible for the setup, installation, configuration, and maintenance of hardware and software systems, as well as for ensuring their availability, reliability, and security.',
        highlights: [
          'Install, configure, and maintain hardware and software systems, including servers, network devices, operating systems, and applications.',
          'Monitor and maintain system performance, ensuring that all systems are operating efficiently and effectively, and troubleshooting issues as they arise.',
          'Manage user accounts and access, ensuring that appropriate levels of access are granted and maintained.',
          'Ensure system security by implementing appropriate security measures, including firewalls, access controls, and antivirus software.',
          'Maintain data backups and disaster recovery plans to ensure data protection and system availability in the event of a disaster or system failure.',
          'Provide technical support to users, responding to queries and resolving issues in a timely and effective manner.',
          'Collaborate with other IT staff and departments to ensure that systems are integrated and work together effectively.',
          'Keep up-to-date with new technologies and industry trends to ensure that systems are up-to-date and aligned with industry best practices.'
        ],
        testimonials: [],
      },
      {
        company: 'Spectrum Infogain Services',
        logo: '',
        role: 'System Engineer',
        period: 'Aug 2007 - Sep 2009',
        location: 'India · On-site',
        desc: 'I was responsible for installing, configuring, and maintaining the hardware and software components of computer systems. I ensured that the systems were functioning optimally and were secure against unauthorized access.',
        highlights: [
          'Installing and configuring computer hardware and software systems, servers, networks, printers, and scanners.',
          'Monitoring system performance and troubleshooting issues as they arise.',
          'Maintaining security measures and data backups to protect systems and data from unauthorized access, viruses, and other potential risks.',
          'Collaborating with other IT professionals, such as network engineers, software developers, and database administrators, to ensure system compatibility and optimal performance.',
          'Performing routine maintenance and updates to ensure systems are running at their best.',
          'Conducting system audits to ensure compliance with established standards and policies.',
          'Providing technical support to end-users and resolving their issues related to hardware, software, and network connectivity.',
          'Keeping up-to-date with the latest advancements in hardware and software technology and evaluating their potential benefits to the organization.'
        ],
        testimonials: [],
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
  en: data,
};

export type Lang = 'en';
