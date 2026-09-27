import { Project, Experience, Certification, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'SILAS STUART SAMUEL',
  title: 'FULL STACK DEVELOPER',
  secondaryTitle: 'MERN STACK DEVELOPER · JAVA DEVELOPER',
  location: 'CHENNAI, INDIA',
  coordinates: '13.0827° N, 80.2707° E',
  email: 'silassamuel02@gmail.com',
  phone: '+91 87782 62202',
  github: 'https://github.com/silassamuel02',
  linkedin: 'https://www.linkedin.com/in/silas-stuart-samuel-385056310/',
  heroPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDV9uTcUbTDZYt-1o_anqKvJIGs5GPrMpQlBecCjWfdVneRsYirtrbbgD5kpxh53GFmeadvDnxV6JsR62q5wX8P-i7f0tPAGAXMtC4e3OJDG47i1RxsRU1aavVgFtJ0EjzAFhVqKfWyrLKKSC5KRKTepB9UU7Uq3QUs-hrgZ32EOlOgoCUUDjsq_Wf5rqUgFz0nR2e-vQEt9tdho4YU_gDduP62bnMu_r7MTV02uv2JMmC-ovyO1DMW-PYsdupX8L5vBkk',
  detailPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCI9H1bxwQVd19ly6Z4DIgj9CRQL8VyZW6CSKkIVpR4LzrgcNcez0RhlUidkrN-69kt8njGuc9FEmUSOO28vR0NotrbCJynqA3yIi0dL-WJJC7NQmkNJgiiZ6daz2aqbLCmKmW1CKZYn6dwdolEn7osqzhEZUW9waW17F1TCyGgD83zULUlyA_leUVTjcBHPZ7KcSbgOZthpr8W8qitIgt3GHFrldbPYqIftIJnTXp-HOfDeaU7y17SSaWVK_paIGDXFJY',
  availability: 'AVAILABLE FOR OPPORTUNITIES',
  degree: 'B.E. Computer Science and Engineering',
  university: 'Loyola Institute of Technology · Anna University',
  graduationYear: '2022 – 2026',
  cgpa: '7.7 / 10',
};

export const PROJECTS: Project[] = [
  {
    id: 'teamsync',
    number: '01',
    title: 'TeamSync',
    subtitle: 'Real-Time B2B Collaboration Workspace',
    category: 'MERN · REAL-TIME · COLLABORATION',
    description:
      'A real-time B2B collaboration platform built with React.js, Node.js, Express.js, MongoDB and Socket.IO. Engineered with pub/sub architecture, low-latency messaging, active user presence states, structured channels, JWT authentication, and background event fanout via Redis.',
    isPrivate: true,
    isFeatured: true,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Redis', 'Docker', 'JWT'],
    overview:
      'Engineered during my internship at Infotact Solutions to eliminate enterprise communication bottlenecks. Built an end-to-end B2B collaboration platform featuring instant message fanout, thread channels, structured file sharing, active user presence synchronization, and sub-18ms message delivery across distributed clients.',
    architecturePoints: [
      'Socket.IO websocket server clustered with Redis pub/sub for horizontal event fanout across multiple Node.js runtime instances.',
      'Deterministic state handling in React with optimistic message updates, unread counters, and instant typing indicators.',
      'Role-based access control (RBAC) and JSON Web Token (JWT) stateless authorization pipeline with secure HTTP-only cookies.',
      'Containerized development with Docker Compose for local database, cache cluster, and API service orchestration.',
    ],
    mockupType: 'teamsync',
  },
  {
    id: 'waxwire',
    number: '02',
    title: 'Wax & Wire',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'MERN · PAYMENT GATEWAY · REST',
    description:
      'Full-stack commerce platform specialized for vintage musical instruments. Engineered complete shopping lifecycle including dynamic catalogue filtering, stateful shopping cart, address book orchestration, order workflows, and Razorpay webhook reconciliation.',
    isPrivate: true,
    isFeatured: true,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay API'],
    overview:
      'A specialized high-ticket e-commerce platform crafted for vintage instrument trading. Developed the comprehensive commercial pipeline including complex faceted search, dynamic price filtering, client cart state synchronization, multi-step checkout with address book orchestration, and verified Razorpay payment capture.',
    architecturePoints: [
      'Razorpay API checkout integration with server-side HMAC-SHA256 signature verification to prevent order spoofing.',
      'Asynchronous webhook listeners to reconcile payment callbacks, stock decrement locks, and order status transitions.',
      'Optimized MongoDB indexing on price, category, condition, and availability for rapid faceted querying under load.',
      'Mobile-responsive catalog layout with accessible modal drawer shopping bag and toast notifications.',
    ],
    mockupType: 'waxwire',
  },
  {
    id: 'icrs',
    number: '03',
    title: 'Intelligent Complaint Redressal System',
    subtitle: 'AI / NLP Full-Stack Application',
    category: 'AI · FULL STACK · SPRING BOOT',
    description:
      'Automated institutional grievance system leveraging machine learning and NLP. Features dynamic ticket prioritization, algorithmic sentiment analysis, and autonomous department routing based on incident classification.',
    isPrivate: false,
    isFeatured: true,
    tech: ['React.js', 'Java', 'Spring Boot', 'NLP Classification', 'MySQL', 'REST APIs'],
    githubUrl: 'https://github.com/silassamuel02/ICRS',
    overview:
      'An enterprise institutional grievance management portal that automates ticket triage through machine learning. Incoming complaints are parsed with natural language processing to extract urgency sentiment and automatically routed to corresponding municipal or campus department queues.',
    architecturePoints: [
      'Spring Boot multi-tier backend with JPA/Hibernate data layer and fine-grained transactional guarantees.',
      'Algorithmic sentiment scoring that assigns priority weights dynamically based on text distress indicators.',
      'Department admin dashboards with analytical metrics, resolution timelines, and automated status transition emails.',
      'Relational schema design on MySQL structured for audit trail compliance and immutable dispute logs.',
    ],
    mockupType: 'icrs',
  },
  {
    id: 'gidy',
    number: '04',
    title: 'Gidy Audit Dashboard',
    subtitle: 'Full-Stack Audit Log Dashboard',
    category: 'ENTERPRISE DASHBOARD · REACT & VITE',
    description:
      'High-throughput audit log inspection console with server-side indexing, dynamic multi-column filtering, tabular pagination, and asynchronous CSV streaming for large datasets.',
    isPrivate: false,
    isFeatured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/silassamuel02/Gidy-Audit-Dashboard',
    liveDemoUrl: 'https://gidy-audit-dashboard-three.vercel.app',
    overview:
      'A production audit exploration tool built for compliance inspections. Handles large datasets with server-side pagination, regex search, multi-column compound filtering, and on-the-fly CSV export streaming directly from MongoDB cursors.',
    architecturePoints: [
      'High-performance cursor streaming ensuring memory safety when exporting tens of thousands of log records.',
      'Clean tabular interface in React + TypeScript with zero layout shift during asynchronous data fetches.',
      'Compound indexing in MongoDB to maintain sub-12ms queries across indexed tenant logs.',
      'Live production deployment accessible on Vercel.',
    ],
    mockupType: 'gidy',
  },
  {
    id: 'jewellery',
    number: '05',
    title: 'Jewellery E-Commerce Web App',
    subtitle: 'Curated Boutique Catalog & Shopping Bag',
    category: 'REACT FRONTEND · CONTEXT API',
    description:
      'Curated boutique catalog with client-side Cart State synchronization, persistent LocalStorage cache, and interactive carousels.',
    isPrivate: false,
    isFeatured: false,
    tech: ['React.js', 'JavaScript', 'Context API', 'CSS3', 'LocalStorage'],
    githubUrl: 'https://github.com/silassamuel02/Jewelry-shop',
    overview:
      'Modern client-side storefront featuring elegant product presentations, category filtering, cart state management using React Context, and persistent local storage caching.',
    architecturePoints: [
      'Centralized cart reducer managing quantity adjustments, subtotal calculations, and discount thresholds.',
      'Optimistic UI state updates with zero latency on client interactions.',
      'Responsive gallery with smooth image transitions and accessible drawer bag.',
    ],
    mockupType: 'compact',
  },
  {
    id: 'safebank',
    number: '06',
    title: 'SafeBank Core Engine',
    subtitle: 'Banking Application with Thread Synchronization',
    category: 'SYSTEMS & OOP · JAVA CORE',
    description:
      'Terminal-based banking application built with core object-oriented paradigms, concurrency thread locks, and ledger serialization.',
    isPrivate: false,
    isFeatured: false,
    tech: ['Java', 'OOP', 'Multithreading', 'File I/O', 'Data Structures'],
    githubUrl: 'https://github.com/silassamuel02/SafeBank',
    overview:
      'Robust Java banking engine built to explore concurrent transaction safety, atomic account balance adjustments, and cryptographic pin validation.',
    architecturePoints: [
      'Thread synchronization primitives avoiding race conditions during simultaneous deposit/withdrawal operations.',
      'In-memory ledger with atomic rollback mechanisms on failed transactions.',
      'Strict object-oriented modeling with domain encapsulation and custom banking exceptions.',
    ],
    mockupType: 'compact',
  },
  {
    id: 'angular-demo',
    number: '07',
    title: 'Angular Routing Demo',
    subtitle: 'Modular SPA with Observable Pipelines',
    category: 'ARCHITECTURE · TYPESCRIPT',
    description:
      'Modular SPA showcasing nested route guards, lazy loading modules, observable pipelines, and strongly typed route parameters.',
    isPrivate: false,
    isFeatured: false,
    tech: ['Angular', 'TypeScript', 'RxJS', 'Router Guards'],
    githubUrl: 'https://github.com/silassamuel02/angular-routing-demo',
    overview:
      'Architectural demonstration project implementing advanced SPA routing patterns, authenticated guard interception, and reactive RxJS pipelines.',
    architecturePoints: [
      'CanActivate and CanDeactivate route guards protecting confidential navigation routes.',
      'Feature module lazy-loading reducing initial bundle size and payload footprint.',
      'RxJS reactive stream mapping for parameterized search queries.',
    ],
    mockupType: 'compact',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Infotact Solutions',
    role: 'Web Development Intern',
    period: '25 May 2026 – 25 August 2026',
    location: 'Bengaluru, Karnataka',
    tag: 'Full Stack MERN',
    description:
      'Spearheaded hands-on development on primary production modules for TeamSync and Wax & Wire. Built core MERN application stacks, implemented secure authenticated user journeys, designed high-efficiency REST endpoints, and integrated Razorpay payment webhooks and Socket.IO real-time notification streams.',
    technologies: ['TeamSync Core', 'Wax & Wire', 'Socket.IO', 'Razorpay API', 'MongoDB', 'Express.js', 'React.js'],
  },
  {
    company: 'Zetheta',
    role: 'Software Development Intern',
    period: '15 January 2026 – 31 January 2026',
    location: 'Chennai, Tamil Nadu',
    tag: 'Spring Boot & React',
    description:
      'Engaged in accelerated product engineering workflows using React and Spring Boot. Formulated automated integration tests with Postman, managed feature branch merging across Git repositories, and contributed to client-facing dashboard UI components.',
    technologies: ['React', 'Spring Boot', 'Git CI/CD', 'Postman Test Suites', 'REST APIs'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    label: 'Client Architecture',
    iconName: 'Layout',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'Vite', 'Bootstrap'],
  },
  {
    category: 'Backend',
    label: 'Services & APIs',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'RESTful APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    label: 'Persistence',
    iconName: 'Database',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'Schema Design', 'Indexing'],
  },
  {
    category: 'Real-Time & Cache',
    label: 'Low-Latency',
    iconName: 'Zap',
    skills: ['Socket.IO', 'Redis Pub/Sub', 'Webhooks', 'Razorpay Integration'],
  },
  {
    category: 'Tools & DevOps',
    label: 'Pipeline & Tooling',
    iconName: 'Terminal',
    skills: ['Docker', 'Git & GitHub', 'Postman API Testing', 'Vercel Deployment', 'Linux Environment', 'VS Code', 'Eclipse IDE'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Web Development Internship',
    issuer: 'Infotact Solutions',
    description: 'Full-stack web architecture, React, Node.js, and client deliveries.',
    iconType: 'verified',
  },
  {
    title: 'Master in Full Stack Java',
    issuer: 'IT.Vedant',
    description: 'Advanced Java OOP, Spring Boot, Hibernate, microservices, and MySQL relational modeling.',
    iconType: 'master',
  },
  {
    title: 'Skill India Accreditation',
    issuer: 'Skill India NSDC',
    description: 'Government certified software professional accreditation in web engineering standards.',
    iconType: 'gov',
  },
  {
    title: 'Technical Foundation',
    issuer: 'IBM Badging Program',
    description: 'Systems computation, modern cloud services concepts, and foundational software methodologies.',
    iconType: 'tech',
  },
];
