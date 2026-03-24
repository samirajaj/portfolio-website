export interface PortfolioData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone?: string;
    location: string;
    profileImage?: { url: string; publicId: string };
    links: {
      linkedin?: string;
      github?: string;
      telegram?: string;
      whatsapp?: string;
      twitter?: string;
      other: string[];
    };
    cv: { url: string; publicId: string };
  };
  summary: string;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
  workExperiences: {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string | null;
    currentlyWorking: boolean;
    description: string;
  }[];
  education: {
    degree: string;
    fieldOfStudy: string;
    institution: string;
    startYear: number;
    endYear: number | null;
    currentlyStudying: boolean;
  }[];
  projects: {
    title: string;
    description: string;
    coverImage?: { url: string; publicId: string };
    sourceCodeUrl?: string;
    websiteUrl?: string;
  }[];
}

export const portfolioEN: PortfolioData = {
  personalInfo: {
    fullName: "Samir Ajaj",
    jobTitle: "Full-Stack Application Developer",
    phone: "+963 985 215 130",
    email: "samirajaj.official@gmail.com",
    location: "Remote",
    profileImage: { url: "/images/profile.png", publicId: "profile-image" },
    links: {
      linkedin: "https://linkedin.com/in/samirajaj",
      github: "https://github.com/samirajaj",
      telegram: "https://t.me/ajajsamir",
      whatsapp: "https://wa.me/qr/W5UNRXTXWEYKC1",
      other: [],
    },
    cv: { url: "/cv.pdf", publicId: "cv-file" },
  },
  summary:
    "I build complete web applications from the ground up, focusing on performance, security, and clean architecture. I help turn ideas into reliable, scalable products by designing structured backend systems and modern, responsive frontends. My goal is not just to deliver working software, but to build solutions that are maintainable, efficient, and ready for real-world use.",
  skills: {
    technical: [
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",

      "ASP.NET Core",
      "ADO.NET",
      "EF Core",
      "ASP.NET Core Identity",

      "React",
      "Next.js",
      "Node.js",
      "Express.js",

      "Bun",
      "Vite",

      "Bootstrap",
      "TailwindCSS",
      "shadcn/ui",
      "Material UI",

      "REST APIs",
      "Authentication & Authorization",

      "React State Management",
      "Data Fetching & Server State Management",

      "SQL Server",
      "PostgreSQL",
      "MongoDB",

      "Responsive Design",

      "Clean Architecture",
      "Layered Architecture",
      "System Design Fundamentals",
      "Dependency Injection",
      "Separation of Concerns",

      "Git",
    ],
    soft: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Systems Thinking",
      "Self-Directed Learning",
      "Deep Focus",
      "Technical Curiosity",
      "Adaptability",
      "Ownership Mindset",
      "Responsibility",
      "Time Management",
      "Task Prioritization",
      "Persistence",
      "Patience",
      "Continuous Improvement",
      "Critical Thinking",
      "Structured Thinking",
      "Decision Making",
      "Clarity in Communication",
      "Learning Agility",
      "Quality-Oriented Mindset",
      "Independent Work Capability",
    ],
    languages: ["Arabic (Native)", "English (Professional)"],
  },
  workExperiences: [
    {
      jobTitle: "Full-Stack Application Developer",
      company: "Freelance",
      startDate: "2024",
      endDate: null,
      currentlyWorking: true,
      description:
        "Building complete web solutions for clients, including backend systems, APIs, authentication flows, and modern frontend interfaces, with a strong focus on clean architecture and long-term maintainability.",
    },
  ],
  education: [
    {
      degree: "Diploma",
      fieldOfStudy: "Software Engineering",
      institution: "Technical College of Computer (TCC)",
      startYear: 2023,
      endYear: 2026,
      currentlyStudying: false,
    },
    {
      degree: "Bachelor",
      fieldOfStudy: "Information Technology Engineering (ITE)",
      institution: "Syrian Virtual University (SVU)",
      startYear: 2023,
      endYear: null,
      currentlyStudying: true,
    },
  ],
  projects: [
    {
      title: "Data Structures & Algorithms Practice",
      description:
        "Practical implementations of core algorithms and problem-solving exercises using console-based applications.",
    },
    {
      title: "Interactive Mini Applications",
      description:
        "A set of small desktop and web-based applications including games and utilities built to strengthen event-driven programming and UI logic.",
    },
    {
      title: "Task Management System",
      description:
        "A structured web application implementing task tracking with database integration and MVC architecture.",
    },
    {
      title: "Restaurant Management System",
      description:
        "System for managing employees, meals, and operations with organized backend logic and relational data modeling.",
    },
    {
      title: "Student Management Platform",
      description:
        "Full stack application handling student data, roles, and system operations using modern web architecture.",
    },
    {
      title: "AutoNet Platform",
      description:
        "Car sales and rental platform built with API-driven architecture and a modern frontend experience.",
    },
    {
      title: "Personal Portfolio",
      description:
        "A performance-focused developer portfolio built with clean structure and scalable frontend architecture.",
    },
  ],
};

export const portfolioAR: PortfolioData = {
  personalInfo: {
    fullName: "سمير عجاج",
    jobTitle: "مطور تطبيقات متكامل (Full-Stack)",
    phone: "+963 985 215 130",
    email: "samirajaj.official@gmail.com",
    location: "عن بُعد",
    profileImage: { url: "/images/profile.png", publicId: "profile-image" },
    links: {
      linkedin: "https://linkedin.com/in/samirajaj",
      github: "https://github.com/samirajaj",
      telegram: "https://t.me/ajajsamir",
      whatsapp: "https://wa.me/qr/W5UNRXTXWEYKC1",
      other: [],
    },
    cv: { url: "/cv.pdf", publicId: "cv-file" },
  },

  summary:
    "أقوم ببناء تطبيقات ويب متكاملة من البداية وحتى الإطلاق، مع التركيز على الأداء، الأمان، والهندسة البرمجية النظيفة. أساعد في تحويل الأفكار إلى منتجات عملية قابلة للتوسع من خلال تصميم أنظمة خلفية منظمة وواجهات حديثة ومتجاوبة. هدفي ليس فقط كتابة كود يعمل، بل إنشاء حلول برمجية قابلة للصيانة وفعالة وجاهزة للاستخدام الحقيقي.",

  skills: {
    technical: [
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",

      "ASP.NET Core",
      "ADO.NET",
      "EF Core",
      "ASP.NET Core Identity",

      "React",
      "Next.js",
      "Node.js",
      "Express.js",

      "Bun",
      "Vite",

      "Bootstrap",
      "TailwindCSS",
      "shadcn/ui",
      "Material UI",

      "REST APIs",
      "Authentication & Authorization",

      "React State Management",
      "Data Fetching & Server State Management",

      "SQL Server",
      "PostgreSQL",
      "MongoDB",

      "Responsive Design",

      "Clean Architecture",
      "Layered Architecture",
      "System Design Fundamentals",
      "Dependency Injection",
      "Separation of Concerns",

      "Git",
    ],

    soft: [
      "التفكير التحليلي",
      "حل المشكلات",
      "الاهتمام بالتفاصيل",
      "التفكير المنظومي",
      "التعلم الذاتي",
      "التركيز العميق",
      "الفضول التقني",
      "القدرة على التكيف",
      "تحمل المسؤولية",
      "إدارة الوقت",
      "تحديد أولويات المهام",
      "المثابرة",
      "الصبر",
      "التحسين المستمر",
      "التفكير النقدي",
      "التفكير المنظم",
      "اتخاذ القرار",
      "وضوح التواصل",
      "سرعة التعلم",
      "التركيز على الجودة",
      "القدرة على العمل بشكل مستقل",
    ],

    languages: ["العربية (اللغة الأم)", "الإنجليزية (مستوى مهني)"],
  },

  workExperiences: [
    {
      jobTitle: "مطور تطبيقات متكامل",
      company: "عمل حر",
      startDate: "2024",
      endDate: null,
      currentlyWorking: true,
      description:
        "تطوير حلول ويب متكاملة للعملاء تشمل بناء الأنظمة الخلفية، تصميم واجهات برمجية (APIs)، تنفيذ أنظمة المصادقة والتفويض، وإنشاء واجهات مستخدم حديثة، مع التركيز على الهندسة النظيفة وقابلية الصيانة طويلة المدى.",
    },
  ],

  education: [
    {
      degree: "دبلوم",
      fieldOfStudy: "هندسة البرمجيات",
      institution: "الكلية التقنية للحاسوب (TCC)",
      startYear: 2023,
      endYear: 2026,
      currentlyStudying: false,
    },
    {
      degree: "بكالوريوس",
      fieldOfStudy: "هندسة تقانة المعلومات (ITE)",
      institution: "الجامعة الافتراضية السورية (SVU)",
      startYear: 2023,
      endYear: null,
      currentlyStudying: true,
    },
  ],

  projects: [
    {
      title: "تدريبات هياكل البيانات والخوارزميات",
      description:
        "تطبيقات عملية لخوارزميات أساسية وتمارين حل المشكلات باستخدام تطبيقات سطر الأوامر لتعزيز التفكير المنطقي والخوارزمي.",
    },
    {
      title: "تطبيقات تفاعلية مصغّرة",
      description:
        "مجموعة تطبيقات صغيرة سطح مكتب وويب تتضمن ألعاباً وأدوات مختلفة بهدف تطوير فهم البرمجة المعتمدة على الأحداث ومنطق واجهات المستخدم.",
    },
    {
      title: "نظام إدارة المهام",
      description:
        "تطبيق ويب متكامل لإدارة وتتبع المهام يعتمد على بنية MVC مع تكامل قاعدة بيانات وتصميم قابل للتوسع.",
    },
    {
      title: "نظام إدارة مطعم",
      description:
        "نظام لإدارة الموظفين والوجبات والعمليات التشغيلية مع تنظيم منطقي للطبقة الخلفية ونمذجة بيانات علائقية.",
    },
    {
      title: "منصة إدارة الطلاب",
      description:
        "تطبيق فل ستاك لإدارة بيانات الطلاب والصلاحيات وعمليات النظام باستخدام معمارية ويب حديثة.",
    },
    {
      title: "منصة أوتونيست",
      description:
        "منصة لبيع وتأجير السيارات مبنية على معمارية تعتمد على واجهات API مع تجربة استخدام حديثة في الواجهة الأمامية.",
    },
    {
      title: "الموقع الشخصي (Portfolio)",
      description:
        "موقع شخصي عالي الأداء مبني بهيكلية منظمة وواجهة أمامية قابلة للتوسع مع تركيز على الأداء وتجربة المستخدم.",
    },
  ],
};
