/**
 * Centralized portfolio data — single source of truth.
 * All descriptions follow the STAR method (Situation → Action → Result).
 */

export const bio = {
  name: "Sanket Shendge",
  title: "Software Engineer",
  tagline: "I engineer high-performance, accessible web applications and AI-integrated systems — from enterprise WCAG remediation to real-time LLM pipelines.",
  about: [
    "Software Engineer at Accenture with 1.5 years of experience shipping production software across the full SDLC — from FastAPI microservices and RAG pipelines to enterprise C#/.NET applications serving B2B and B2C users. Triple cloud-certified (AWS, GCP, Azure) with a peer-reviewed publication in AI-driven healthcare systems.",
    "Core competencies span React/Next.js frontend architecture, Python backend systems, and cloud-native deployment (Azure, AWS). Recognized with the MMA Award for Client Value Creation after resolving 50+ WCAG violations across an enterprise application, directly improving the client's accessibility compliance posture.",
    "Seeking to apply production engineering experience to teams building developer tools, AI infrastructure, or large-scale consumer platforms where system design decisions compound at scale."
  ],
  metrics: [
    { value: "1.5+", label: "Years at Accenture" },
    { value: "50+", label: "WCAG Fixes Shipped" },
    { value: "3x", label: "Cloud Certified" },
    { value: "1", label: "Peer-Reviewed Pub" },
  ],
};

export const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Cloud-Certified Engineer",
];

export const workExperience = [
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    duration: "Sept 2024 – Present",
    award: {
      title: "MMA Award — Client Value Creation",
      date: "Sept 2025",
      reason: "Resolved 50+ WCAG accessibility violations across 8+ screens on an enterprise client application, achieving full compliance.",
    },
    projects: [
      {
        title: "Enterprise WCAG Compliance & Deployment Fix",
        // SITUATION: An enterprise B2B/B2C application had 50+ unresolved accessibility violations and a recurring deployment failure caused by dynamic content injection timing on Azure.
        // ACTION: Systematically remediated WCAG issues across 8+ screens in C#/ASP.NET Razor. Diagnosed the deployment failure as a race condition between Azure's CDN cache and client-side hydration — implemented a MutationObserver solution to decouple injection timing from load order.
        // RESULT: Achieved full WCAG compliance and eliminated 100% of recurring deployment failures, earning the MMA Award for Client Value Creation.
        description: "Enterprise B2B/B2C application had 50+ unresolved accessibility violations and a recurring Azure deployment failure from injection timing issues. Remediated WCAG issues across 8+ screens in C#/ASP.NET Razor and implemented a MutationObserver solution to decouple injection timing from load order. Achieved full WCAG compliance and eliminated 100% of deployment failures — awarded MMA for Client Value Creation.",
        tech: ["C#", "ASP.NET Razor", "WCAG", "Azure", "MutationObserver", "CI/CD"],
      },
      {
        title: "AI-Powered Predictive Maintenance Platform",
        // SITUATION: Industrial fleet operators relied on batch log processing, causing diagnostic delays of 15+ minutes.
        // ACTION: Engineered a real-time diagnostic pipeline using FastAPI microservices, LLaMA 3.2, and a dual RAG architecture (structured + unstructured retrieval) with WebSocket streaming — chosen over REST polling to eliminate latency overhead.
        // RESULT: Delivered sub-2.5-minute diagnostics, outperforming competing batch approaches at an internal hackathon (6-member team).
        description: "Industrial fleet operators relied on batch log processing with 15+ minute diagnostic delays. Engineered a real-time pipeline using FastAPI, LLaMA 3.2, and a dual RAG architecture with WebSocket streaming — chosen over REST polling to eliminate latency. Delivered sub-2.5-minute diagnostics, outperforming competing batch approaches at an internal hackathon.",
        tech: ["FastAPI", "LLaMA 3.2", "RAG Pipeline", "MongoDB", "WebSocket", "Python"],
      },
      {
        title: "AR-Powered Industrial Fleet Management System",
        // SITUATION: Manual fleet coordination during blast-zone and failure scenarios at mining sites took 30+ minutes per incident.
        // ACTION: Prototyped a 3D spatial interface using Next.js and React Three Fiber, integrating an LLM-driven safety shutdown sequencer that automated the multi-step coordination workflow.
        // RESULT: Reduced manual fleet coordination time from 30 minutes to under 5 minutes per incident — an 83% reduction.
        description: "Manual fleet coordination during blast-zone failures at mining sites consumed 30+ minutes per incident. Built a 3D spatial interface with Next.js and React Three Fiber, integrating an LLM-driven shutdown sequencer to automate multi-step coordination. Cut fleet coordination time from 30 minutes to under 5 minutes — an 83% reduction.",
        tech: ["Next.js", "React Three Fiber", "LLM", "AR", "JavaScript"],
      },
    ],
  },
  {
    company: "CodeClause",
    role: "Software Developer Intern",
    duration: "Feb 2023 – May 2023",
    projects: [
      {
        title: "Employee Management System",
        // SITUATION: Internal team lacked a centralized system for employee records, relying on fragmented spreadsheets.
        // ACTION: Designed and built a full-stack CRUD application with Python/JavaScript, implementing RESTful API endpoints with role-based access control — prioritizing a clean handoff with full documentation.
        // RESULT: Delivered a production-ready system within a 3-month internship window, adopted by the internal team on handoff.
        description: "Internal team managed employee records across fragmented spreadsheets with no audit trail. Built a full-stack CRUD application with Python and JavaScript, implementing RESTful endpoints with role-based access control and full API documentation. Delivered production-ready within the 3-month internship, adopted by the team immediately on handoff.",
        tech: ["Python", "JavaScript", "REST APIs", "Full Stack"],
      },
    ],
  },
];

export const personalProjects = [
  {
    name: "Marlish.AI",
    // SITUATION: Google Translate consistently fails on informal Indian chat input (Hinglish/Marlish) — romanized Hindi/Marathi with code-mixing, phonetic variance, and SOV→SVO grammar mismatches.
    // ACTION: Built a full-stack AI translation platform with a custom 8-layer rule-based NLP pipeline in JavaScript (normalization, intent matching, compound verb assembly, contextual disambiguation, SOV→SVO grammar reordering, confidence scoring) and a Two-Tier Hybrid Architecture: Tier 1 in-browser JS rule engine for instant common translations, Tier 2 NLLB-200 1.3B via GPU-accelerated FastAPI + Gemini GEC post-processing. Curated 18.5M parallel sentence pairs across 8 translation directions.
    // RESULT: Sub-5ms per-keystroke latency via O(1) dictionary lookups for Tier 1; mT5-small fine-tuned with ONNX INT8 quantization (<40MB) for browser deployment; deployed via Vercel + HF Spaces (Docker/T4 GPU) with PWA offline-first support.
    description: "Google Translate consistently fails on informal Indian chat input — romanized Hindi/Marathi with code-mixing and phonetic variance. Built a Two-Tier Hybrid Architecture: Tier 1 (in-browser JS rule engine) handles common inputs instantly via a custom 8-layer NLP pipeline with sub-5ms latency; Tier 2 (NLLB-200 1.3B via GPU-accelerated FastAPI + Gemini GEC) handles complex translations. Curated 18.5M parallel sentence pairs and fine-tuned mT5-small with ONNX INT8 quantization (<40MB) for browser deployment.",
    stack: ["Next.js", "React", "FastAPI", "PyTorch", "NLLB-200", "ONNX", "Gemini API", "Docker"],
    sourceCode: "https://github.com/SanketShendge21/MarlishAI",
    cover: "/assets/img/marlishai_cover.png",
    featured: true,
  },
  {
    name: "Healthcare IoT Monitor",
    // SITUATION: Rural clinics lacked real-time multi-vital monitoring, relying on periodic manual checks that delayed early disease detection.
    // ACTION: Designed an IoT device integrating 4 biometric sensors with an ML classification pipeline (Python, time-series analysis) deployed on AWS — published the architecture as a peer-reviewed paper in IJNRD.
    // RESULT: Enabled real-time anomaly detection across 4 vital signs simultaneously; peer-reviewed publication in IJNRD (Vol. 8, Issue 11, Nov 2023).
    description: "Rural clinics lacked real-time multi-vital monitoring, relying on periodic manual checks. Designed an IoT device integrating 4 biometric sensors with an ML classification pipeline deployed on AWS for early disease detection. Published peer-reviewed in IJNRD (Nov 2023); enabled real-time anomaly detection across 4 vital signs simultaneously.",
    stack: ["Python", "ML", "IoT", "AWS", "NLP"],
    sourceCode: "https://github.com/SanketShendge21",
    featured: true,
    publication: {
      title: "Revolutionizing Healthcare Delivery: A Comprehensive Review of Chatbot-enabled Systems Integrating Real-time Sensor Data and Cloud Computing",
      journal: "IJNRD, Vol. 8, Issue 11, Nov 2023",
    }
  },
  {
    name: "Threads Unveiled",
    // SITUATION: Small clothing brands had no affordable, high-performance storefront — existing templates were bloated and slow.
    // ACTION: Architected a headless e-commerce platform with Next.js SSR for SEO and MongoDB aggregation pipelines for real-time inventory — choosing server-side rendering over CSR to optimize for search engine crawlability.
    // RESULT: Sub-2s LCP on mobile, 200+ organic visitors within 2 weeks of launch.
    description: "Small clothing brands lacked affordable, performant storefronts — existing templates shipped 3MB+ bundles. Architected a headless e-commerce platform with Next.js SSR and MongoDB aggregation pipelines, choosing server rendering over CSR to maximize SEO crawlability. Achieved sub-2s LCP on mobile and acquired 200+ organic visitors within 2 weeks of launch.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    sourceCode: "https://github.com/SanketShendge21/ThreadsUnveiled",
    livePreview: "https://threadsunveiled.vercel.app/",
    featured: true,
  },
  {
    name: "iNotebook",
    // SITUATION: Users needed a secure, cloud-synced note-taking tool without vendor lock-in or subscription fees.
    // ACTION: Built a MERN-stack application with JWT-based auth and encrypted storage, implementing optimistic UI updates to eliminate perceived latency on CRUD operations.
    // RESULT: Zero-downtime architecture with <200ms perceived response time on all operations.
    description: "Users needed a secure, cloud-synced note-taking tool without vendor lock-in. Built a MERN-stack application with JWT auth and encrypted storage, implementing optimistic UI updates to eliminate perceived CRUD latency. Achieved zero-downtime architecture with sub-200ms perceived response on all operations.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    sourceCode: "https://github.com/SanketShendge21/iNotebook_MERN",
    featured: false,
  },
  {
    name: "TextUtils",
    // SITUATION: Developers frequently needed quick text transformations (case conversion, word count, whitespace cleanup) without opening a full IDE.
    // ACTION: Built a client-side React utility with zero-dependency text processing algorithms, deploying as a static site on GitHub Pages for instant global access.
    // RESULT: Fully client-side — zero API calls, sub-50ms processing for 10K+ character inputs.
    description: "Developers needed quick text transformations without opening a full IDE or installing tools. Built a zero-dependency React utility with client-side text processing, deployed as a static site on GitHub Pages. Fully offline-capable with sub-50ms processing for 10K+ character inputs.",
    stack: ["React", "CSS", "Algorithms"],
    sourceCode: "https://github.com/SanketShendge21/TextUtils-React",
    livePreview: "https://sanketshendge21.github.io/TextUtils-React/",
    featured: false,
  },
];

export const timelineData = [
  {
    date: "Sept 2024 – Present",
    title: "Associate Software Engineer",
    institution: "Accenture",
    type: "work",
  },
  {
    date: "Feb 2023 – May 2023",
    title: "Software Developer Intern",
    institution: "CodeClause (Remote)",
    type: "work",
  },
  {
    date: "2021 – 2024",
    title: "B.E. Computer Engineering",
    institution: "A.I.S.S.M.S College of Engineering",
    type: "education",
  },
  {
    date: "2018 – 2021",
    title: "Diploma in Computer Engineering",
    institution: "Cusrow Wadia Institute of Technology",
    type: "education",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Certified Associate Cloud Engineer",
  "Microsoft Certified Azure Fundamentals (AZ-900)",
  "Goethe-Zertifikat A2 (German Language)",
];
