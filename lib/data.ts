export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  result: string;
  concept: boolean;
  recent?: boolean;
  features?: string[];
  images?: string[];
  liveUrl?: string;
};

export const services = [
  {
    id: "saas",
    tag: "01",
    name: "SaaS Applications",
    description:
      "Complete SaaS products from the ground up — authentication, subscriptions, dashboards, user management, APIs, analytics, and admin systems.",
    idealFor: ["Startups", "B2B companies", "Subscription businesses", "Internal platforms"],
    stack: ["Next.js", "React", "Node.js", "Django", "PostgreSQL"],
  },
  {
    id: "web",
    tag: "02",
    name: "Web Applications",
    description:
      "Modern, responsive web applications designed around your users and business goals — portals, dashboards, CRMs, booking systems, marketplaces, and internal tools.",
    idealFor: ["Customer portals", "Admin dashboards", "CRM platforms", "E-commerce"],
    stack: ["React", "Next.js", "MUI", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "mobile",
    tag: "03",
    name: "Mobile Applications",
    description:
      "Cross-platform mobile experiences for smartphones and tablets — customer apps, business apps, marketplaces, booking, productivity, and SaaS companions.",
    idealFor: ["Customer apps", "Marketplace apps", "Booking apps", "Companion apps"],
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL"],
  },
  {
    id: "ai",
    tag: "04",
    name: "AI-Powered Software",
    description:
      "AI integrated into useful products — assistants, document analysis, search, knowledge bases, workflows, recommendations, and support automation.",
    idealFor: ["AI assistants", "Document analysis", "Knowledge bases", "Automation"],
    stack: ["LLM APIs", "RAG systems", "Python", "Vector search", "Next.js"],
  },
  {
    id: "design",
    tag: "05",
    name: "UI/UX Design",
    description:
      "Interfaces that are simple, modern, responsive, and accessible — from wireframes to high-fidelity screens that make complex products feel simple.",
    idealFor: ["Wireframes", "Design systems", "Prototypes", "Responsive layouts"],
    stack: ["Figma", "Design systems", "Prototyping", "Accessibility"],
  },
  {
    id: "backend",
    tag: "06",
    name: "API & Backend Development",
    description:
      "Secure, scalable backend systems — REST APIs, auth, databases, payments, file management, notifications, background jobs, and business logic.",
    idealFor: ["REST APIs", "Auth systems", "Integrations", "Cloud infrastructure"],
    stack: ["Node.js", "Django", "PostgreSQL", "Docker", "CI/CD"],
  },
];

export const packages = [
  {
    id: "mvp",
    name: "MVP",
    price: "$2,500 – $5,000",
    description: "For validating an idea with real users, fast.",
    items: [
      "UI/UX design",
      "React / Next.js frontend",
      "Backend & database",
      "Authentication",
      "Deployment",
    ],
  },
  {
    id: "startup",
    name: "Startup",
    price: "$7,500 – $15,000",
    description: "A production web app with room to grow.",
    items: [
      "UI/UX design",
      "Full web application",
      "Admin dashboard",
      "API layer",
      "Authentication",
      "Deployment",
      "30–60 days of support",
    ],
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$15,000 – $30,000+",
    description: "For teams building a serious, AI-enabled platform.",
    items: [
      "SaaS architecture",
      "Web + mobile",
      "AI integration",
      "Advanced dashboard",
      "Infrastructure & monitoring",
      "Ongoing maintenance",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    name: "Discovery",
    detail:
      "We understand your idea, users, business model, goals, competitors, and technical requirements — then define what needs to be built.",
  },
  {
    step: "02",
    name: "Strategy",
    detail:
      "We turn your idea into a clear product strategy: requirements, MVP scope, user journeys, architecture, roadmap, and milestones.",
  },
  {
    step: "03",
    name: "UI/UX Design",
    detail:
      "Wireframes, user flows, design systems, high-fidelity screens, responsive layouts, and interactive prototypes before development begins.",
  },
  {
    step: "04",
    name: "Development",
    detail:
      "Our team converts designs into a working product using modern technologies and practices for maintainable, scalable software.",
  },
  {
    step: "05",
    name: "Testing",
    detail:
      "We test across devices, browsers, and use cases — functionality, performance, responsiveness, security, usability, and edge cases.",
  },
  {
    step: "06",
    name: "Launch",
    detail:
      "Cloud deployment, domain setup, databases, environments, monitoring, analytics, and error tracking — ready for real users.",
  },
  {
    step: "07",
    name: "Continuous Improvement",
    detail:
      "Maintenance, bug fixes, new features, performance improvements, security updates, and AI integrations after launch.",
  },
];

export const whyUs = [
  {
    name: "Business-Focused Development",
    detail:
      "We don't build software just to satisfy technical requirements. We focus on what the software needs to accomplish for your business.",
  },
  {
    name: "Modern Technology",
    detail:
      "We use modern technologies and development practices to create software that can evolve with your business.",
  },
  {
    name: "Scalable Architecture",
    detail:
      "We build with the future in mind so your product can grow as your users and requirements increase.",
  },
  {
    name: "Transparent Communication",
    detail:
      "You stay informed throughout the project with clear milestones, progress updates, and direct communication.",
  },
  {
    name: "Long-Term Partnership",
    detail:
      "We don't disappear after launch. We aim to become your long-term technology partner.",
  },
];

export const audiences = [
  {
    name: "Startups",
    detail:
      "Have an idea? We help transform your concept into an MVP and prepare it for real users.",
  },
  {
    name: "Growing Businesses",
    detail:
      "Need better software? We modernize existing systems and build new digital products.",
  },
  {
    name: "Enterprises",
    detail:
      "Need specialized software or extra capacity? We work alongside your existing technology team.",
  },
  {
    name: "Entrepreneurs",
    detail:
      "Have a product idea but no technical team? We take your idea from concept to launch.",
  },
];

export const techStack = {
  Frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "MUI", "Tailwind CSS"],
  Backend: ["Node.js", "Django", "REST APIs"],
  Mobile: ["React Native", "Expo"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  AI: ["LLM integrations", "AI assistants", "RAG systems", "Document processing"],
  Infrastructure: ["Cloud deployment", "Docker", "CI/CD", "Monitoring", "Error tracking"],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "orbit-pm",
    name: "Orbit PM",
    category: "SaaS · Project Management",
    summary:
      "A project command center for teams — tasks, boards, insights, and collaboration in one workspace.",
    problem:
      "Teams often juggle scattered tools for tasks, assignees, estimates, and collaboration. Without a clear command center, priorities slip and ownership gets blurry.",
    solution:
      "We built Orbit PM as a full workspace with task creation, board and list views, priority and status tracking, estimates, tags, team directory, roles, and invitations — designed for clear day-to-day execution.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Auth"],
    result:
      "A polished SaaS dashboard where teams can plan work, track progress, and manage collaborators from a single product surface.",
    concept: false,
    recent: true,
    liveUrl: undefined,
    images: ["/work/orbit-pm-1.png", "/work/orbit-pm-2.png"],
    features: [
      "Task creation & estimates",
      "Board and list views",
      "Priority & status workflows",
      "Team directory & roles",
      "Invitations & shared access",
      "Workspace metrics",
    ],
  },
  {
    slug: "neonnotes",
    name: "NeonNotes",
    category: "SaaS · Productivity",
    summary:
      "A neon-themed productivity app for notes, reminders, tags, and account management — dark, fast, and focused.",
    problem:
      "Most note apps feel generic. Users want a distinctive product that still covers the full loop: secure auth, notes, reminders, organization, and account controls.",
    solution:
      "NeonNotes delivers a cohesive dark UI with secure login/signup, dashboard metrics, notes, reminders with quick-add, tags, system search, and settings — including profile and session management.",
    tech: ["React", "Next.js", "Vercel", "Auth", "Tailwind CSS"],
    result:
      "A distinctive productivity product with a complete auth-to-dashboard experience and a memorable neon visual system.",
    concept: false,
    recent: true,
    liveUrl: "https://daily-life-seven.vercel.app",
    images: [
      "/work/neonnotes-1.png",
      "/work/neonnotes-2.png",
      "/work/neonnotes-3.png",
      "/work/neonnotes-4.png",
      "/work/neonnotes-5.png",
      "/work/neonnotes-6.png",
    ],
    features: [
      "Secure login & registration",
      "Notes dashboard",
      "Reminders & quick add",
      "Tags management",
      "System search",
      "Account settings",
    ],
  },
  {
    slug: "whats-for-dinner",
    name: "What's for Dinner",
    category: "AI · Consumer",
    summary:
      "An AI-powered recipe matching platform that turns pantry ingredients into meals and reduces food waste.",
    problem:
      "Home cooks waste ingredients because they don't know what to cook with what's already in the fridge. Generic recipe sites ignore pantry reality.",
    solution:
      "We designed and built a warm, lifestyle-led product with organic AI matching, pantry-aware recipe discovery, meal planning, shopping, leftovers, favorites, and a calm sign-in experience.",
    tech: ["React", "Next.js", "AI matching", "Auth", "Tailwind CSS"],
    result:
      "A polished consumer SaaS experience that helps people cook from what they already have — with clear flows from landing to sign-in and daily inspiration.",
    concept: false,
    recent: true,
    images: [
      "/work/whats-for-dinner-1.png",
      "/work/whats-for-dinner-2.png",
    ],
    features: [
      "AI pantry matching",
      "Recipe discovery",
      "Meal planning",
      "Shopping & leftovers",
      "Favorites",
      "Auth & social sign-in",
    ],
  },
  {
    slug: "ai-healthcare-platform",
    name: "AI Healthcare Platform",
    category: "AI · Healthcare",
    summary:
      "Making healthcare knowledge easier to access through an AI-powered platform for medical information and tools.",
    problem:
      "Healthcare professionals often need to work with large amounts of information while maintaining accuracy and efficiency. The goal was a platform where users could quickly access information, organize knowledge, and interact with AI-powered tools.",
    solution:
      "Dev Neon designed a centralized platform combining AI-powered conversations, knowledge management, search, structured content, user accounts, administrative tools, and responsive dashboards.",
    tech: ["React", "Django", "PostgreSQL", "REST APIs", "AI integrations", "Cloud"],
    result:
      "A modern interface for accessing and interacting with complex healthcare information — and a foundation for future AI-powered features.",
    concept: true,
    features: [
      "AI-powered conversations",
      "Knowledge management",
      "Search",
      "Structured content",
      "Admin tools",
      "Responsive dashboards",
    ],
  },
  {
    slug: "saas-business-platform",
    name: "SaaS Business Management Platform",
    category: "SaaS · Operations",
    summary:
      "Bringing business operations into one place — a centralized SaaS workspace for teams.",
    problem:
      "Businesses often rely on multiple disconnected tools for files, users, workflows, subscriptions, and internal processes. This creates unnecessary complexity and makes collaboration difficult.",
    solution:
      "We created a centralized workspace with user management, role-based access, file management, workspace collaboration, business workflows, subscription management, admin dashboards, notifications, and API integrations.",
    tech: ["React", "Vite", "MUI", "Node.js / Django", "PostgreSQL", "REST APIs"],
    result:
      "A centralized environment where teams can manage digital operations more efficiently.",
    concept: true,
    features: [
      "User management",
      "Role-based access",
      "File management",
      "Workflows",
      "Subscriptions",
      "Admin dashboards",
    ],
  },
  {
    slug: "ai-business-assistant",
    name: "AI Business Assistant",
    category: "AI · Knowledge",
    summary:
      "Turning business data into actionable answers through a conversational AI interface.",
    problem:
      "Employees waste time searching through documents and systems to find answers. Businesses store large amounts of information across files, databases, and internal systems.",
    solution:
      "Dev Neon created an AI interface that allows users to ask questions, search company knowledge, analyze documents, retrieve information, generate summaries, and automate repetitive tasks.",
    tech: ["Next.js", "Vector search", "LLM API", "Node.js", "PostgreSQL"],
    result:
      "Users interact with business information through a simple conversational interface instead of manually searching through multiple systems.",
    concept: true,
    features: [
      "Ask questions",
      "Search knowledge",
      "Analyze documents",
      "Generate summaries",
      "Automate tasks",
    ],
  },
  {
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    category: "E-commerce",
    summary:
      "A modern online shopping experience focused on performance, usability, and conversion.",
    problem:
      "Off-the-shelf storefronts make it hard to deliver a fast, conversion-focused purchasing experience tailored to a specific product line.",
    solution:
      "We developed a modern e-commerce platform with product catalog, search, categories, cart, checkout, customer accounts, order management, admin dashboard, payment integration, and inventory management.",
    tech: ["Next.js", "Headless commerce", "Stripe", "PostgreSQL"],
    result:
      "A fast, simple purchasing experience across desktop and mobile devices.",
    concept: true,
    features: [
      "Product catalog",
      "Search & categories",
      "Cart & checkout",
      "Order management",
      "Payment integration",
      "Inventory",
    ],
  },
  {
    slug: "mobile-application",
    name: "Mobile Application",
    category: "Mobile",
    summary:
      "A cross-platform mobile experience designed around users — fast, intuitive, and connected.",
    problem:
      "Businesses need to reach customers on smartphones and tablets with an experience that feels native, reliable, and easy to use.",
    solution:
      "We designed and developed a cross-platform app with authentication, personalized dashboards, notifications, profiles, search, data synchronization, API integration, and a responsive mobile UI.",
    tech: ["React Native", "Expo", "REST APIs", "PostgreSQL", "Cloud"],
    result:
      "A polished mobile product that keeps users engaged with a fast, intuitive experience.",
    concept: true,
    features: [
      "Authentication",
      "Personalized dashboard",
      "Notifications",
      "Profiles & search",
      "Data sync",
      "API integration",
    ],
  },
];
