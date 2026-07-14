export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  location: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  businessProblem?: string;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  metrics?: string;
  lessonsLearned?: string;
}

export interface ProjectCaseStudy {
  whyItMatters: string;
  approach: string;
  architectureDiagramText: string;
  tradeoffs: string;
  lessonsLearned: string;
  futureImprovements: string;
  metrics: string[];
  timeline: string;
}

export interface Project {
  title: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  challengesFaced: string;
  outcome: string;
  github: string;
  liveDemo: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  credentialLink: string;
  whyPursued?: string;
  skillsGained?: string[];
  application?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number;
  experience?: string;
  relatedProjects?: string[];
  tools?: string[];
  learningStatus?: "mastered" | "learning" | "planned";
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
}

export interface RoadmapGoal {
  year: string;
  goals: string[];
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    introduction: string;
    bio: string;
    motivation: string;
    personalStory: string;
    social: SocialLinks;
  };
  about: {
    objective: string;
    interests: string[];
    strengths: string[];
    whyProgramming: string;
    devPhilosophy: string;
    softwareInterests: string;
    careerGoals: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  learningJourney: { milestone: string; year: string; description: string; icon: string }[];
  blogArticles: BlogArticle[];
  metricsDashboard: {
    projectsCompleted: number;
    internships: number;
    technologiesLearned: number;
    githubRepos: number;
    linesOfCode: string;
    yearsOfLearning: number;
    certifications: number;
    openSourceContributions: number;
  };
  roadmap: RoadmapGoal[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Shabaz Shaik",
    title: "Software Engineer",
    introduction: "Results-driven Full Stack Engineer and Computer Science Engineering student with 3 internships building scalable software across artificial intelligence / machine learning (AI/ML), cybersecurity, and full-stack web development.",
    bio: "Proficient in Python, Django, Flask, REST APIs, React.js, and MySQL. Built 5+ production-level projects; skilled at reducing load times, improving model accuracy, and shipping features on time in Agile/Scrum environments. Seeking full-time Software Engineer, Full Stack Developer, or AI/ML Engineer roles.",
    motivation: "Driven by the challenge of translating complex system requirements into clean, self-documenting code. I am motivated to bridge the gap between mathematically rigorous backend intelligence and user-centered design paradigms.",
    personalStory: "My coding journey began in high school when I wrote a Python script to automate sorting student records. That simple script saved hours of work and showed me the power of automation. In college, my interests evolved into machine learning pipelines and post-quantum cryptography, leading me to build secure, full-stack enterprise decoy containers and threat classification systems.",
    social: {
      github: "https://github.com/sit23cs132-star",
      linkedin: "https://linkedin.com/in/shabaz-shaik-36a1b8294",
      email: "shabazshaik565@gmail.com",
      phone: "+91 99627 86367",
      location: "Chennai, Tamil Nadu, India"
    }
  },
  about: {
    objective: "Seeking a full-time Software Engineer, Full Stack Developer, or AI/ML Engineer role where I can leverage my experience in Python Full Stack Development, Machine Learning, and Cybersecurity to build secure, robust, and customer-centric products.",
    interests: ["AI/ML Research", "Cybersecurity & Cryptography", "Competitive Coding", "Web Performance Optimization", "Agile/Scrum Methodologies"],
    strengths: ["Problem Solving & Algorithmic Thinking", "Quick Adapter of New Technologies", "Strong Collaboration & Agile mindset", "On-time Delivery & Bug Minimization"],
    whyProgramming: "I program because it is the ultimate intersection of logic and creativity. It allows me to build immediate solutions to real-world problems from first principles using only a compiler.",
    devPhilosophy: "Write readable code, optimize early on bottlenecks but not prematurely on micro-routines, build deep test coverage, and always design systems assuming they will scale 10x.",
    softwareInterests: "Distributed systems backends, secure sandbox decoy architectures, real-time metrics telemetry dashboards, and ML training pipelines.",
    careerGoals: "To grow into a Principal Technical Architect designing secure distributed systems and contributing heavily to open-source cybersecurity frameworks."
  },
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 95, experience: "4+ years", relatedProjects: ["Quantum Computing Security", "AI Honeypot"], tools: ["Pytest", "Pylint"], learningStatus: "mastered" },
        { name: "JavaScript (ES6+)", level: 88, experience: "2+ years", relatedProjects: ["Dashboard Management"], tools: ["ESLint", "Webpack"], learningStatus: "mastered" },
        { name: "Java", level: 80, experience: "3+ years", relatedProjects: ["DSA Core Practice"], tools: ["Maven", "JUnit"], learningStatus: "learning" },
        { name: "C", level: 75, experience: "3+ years", relatedProjects: ["Academic Core"], tools: ["GCC", "GDB"], learningStatus: "mastered" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Django", level: 90, experience: "2+ years", relatedProjects: ["Quantum Computing Security"], tools: ["Django REST framework"], learningStatus: "mastered" },
        { name: "Flask", level: 85, experience: "2+ years", relatedProjects: ["AI Honeypot"], tools: ["Flask-SocketIO"], learningStatus: "mastered" },
        { name: "FastAPI", level: 80, experience: "1 year", relatedProjects: ["Microservices Practice"], tools: ["Uvicorn", "Pydantic"], learningStatus: "learning" },
        { name: "REST APIs", level: 92, experience: "2+ years", relatedProjects: ["Autointelli Intern", "AI Honeypot"], tools: ["Swagger", "Postman"], learningStatus: "mastered" },
        { name: "GraphQL", level: 70, experience: "1 year", relatedProjects: ["API Gateways"], tools: ["Apollo client"], learningStatus: "learning" },
        { name: "Node.js", level: 78, experience: "1+ years", relatedProjects: ["Mock APIs"], tools: ["Express"], learningStatus: "learning" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 85, experience: "2+ years", relatedProjects: ["Dashboard Management", "Portfolio"], tools: ["Vite", "React Router"], learningStatus: "mastered" },
        { name: "HTML5", level: 90, experience: "3+ years", relatedProjects: ["CKM Buildbase Intern"], tools: ["Semantic Tags"], learningStatus: "mastered" },
        { name: "CSS3", level: 90, experience: "3+ years", relatedProjects: ["Autointelli Intern"], tools: ["Flexbox", "CSS Grid"], learningStatus: "mastered" },
        { name: "Bootstrap", level: 80, experience: "2 years", relatedProjects: ["Internal dashboards"], tools: ["Predefined grids"], learningStatus: "mastered" },
        { name: "Responsive Design", level: 90, experience: "3+ years", relatedProjects: ["CKM Buildbase Intern"], tools: ["Media queries", "Mobile-first"], learningStatus: "mastered" }
      ]
    },
    {
      category: "AI / ML",
      skills: [
        { name: "scikit-learn", level: 85, experience: "2 years", relatedProjects: ["Edunet Intern", "AI Honeypot"], tools: ["SVM", "Decision Trees"], learningStatus: "mastered" },
        { name: "TensorFlow", level: 80, experience: "1.5 years", relatedProjects: ["Quantum Computing Security"], tools: ["Neural Networks", "Keras"], learningStatus: "learning" },
        { name: "Pandas & NumPy", level: 88, experience: "2+ years", relatedProjects: ["Edunet Intern"], tools: ["DataFrames", "Matrix Operations"], learningStatus: "mastered" },
        { name: "Natural Language Processing (NLP)", level: 82, experience: "1.5 years", relatedProjects: ["Quantum Computing Security"], tools: ["Tokenization", "TF-IDF"], learningStatus: "learning" },
        { name: "Feature Engineering", level: 85, experience: "2 years", relatedProjects: ["Edunet Intern"], tools: ["PCA", "StandardScaler"], learningStatus: "mastered" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 85, experience: "2+ years", relatedProjects: ["Quantum Computing Security"], tools: ["Workbench", "Queries Optimization"], learningStatus: "mastered" },
        { name: "PostgreSQL", level: 85, experience: "1.5 years", relatedProjects: ["Dashboard Management"], tools: ["pgAdmin", "JSONB fields"], learningStatus: "mastered" },
        { name: "MongoDB", level: 78, experience: "1 year", relatedProjects: ["Unstructured storage"], tools: ["Compass", "Aggregations"], learningStatus: "learning" }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, experience: "3+ years", relatedProjects: ["All codebase versions"], tools: ["Gitflow", "Rebase", "Merge Conflict resolution"], learningStatus: "mastered" },
        { name: "GitHub", level: 90, experience: "3+ years", relatedProjects: ["Open Source tracking"], tools: ["GitHub Actions CI/CD", "Pull Requests"], learningStatus: "mastered" },
        { name: "Docker", level: 80, experience: "1+ years", relatedProjects: ["AI Honeypot Decoys"], tools: ["Dockerfile", "Docker Compose"], learningStatus: "learning" },
        { name: "VS Code", level: 95, experience: "4 years", relatedProjects: ["Development environment"], tools: ["Extensions config"], learningStatus: "mastered" },
        { name: "Agile/Scrum", level: 85, experience: "2 years", relatedProjects: ["Autointelli Intern"], tools: ["Jira", "Sprint Planning"], learningStatus: "mastered" }
      ]
    },
    {
      category: "Security",
      skills: [
        { name: "AWS", level: 85, experience: "1+ years", relatedProjects: ["Cloud Practitioner"], tools: ["IAM", "EC2", "S3", "VPC"], learningStatus: "learning" },
        { name: "Cybersecurity", level: 85, experience: "2 years", relatedProjects: ["AI Honeypot"], tools: ["Nmap", "Wireshark", "Sandboxing"], learningStatus: "mastered" },
        { name: "Post-Quantum Cryptography (PQC)", level: 80, experience: "1.5 years", relatedProjects: ["Quantum Computing Security"], tools: ["Lattice-based cryptography", "Kyber/Dilithium concepts"], learningStatus: "learning" }
      ]
    },
    {
      category: "Concepts",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 88, experience: "3 years", relatedProjects: ["Competitive Programming"], tools: ["LeetCode", "Hackerrank"], learningStatus: "mastered" },
        { name: "Object-Oriented Programming (OOP)", level: 85, experience: "3 years", relatedProjects: ["System Designs"], tools: ["Design Patterns", "UML"], learningStatus: "mastered" },
        { name: "Software Development Life Cycle (SDLC)", level: 82, experience: "2 years", relatedProjects: ["Academic & Intern Projects"], tools: ["Waterfall", "Agile Iterative"], learningStatus: "mastered" },
        { name: "System Design", level: 80, experience: "1 year", relatedProjects: ["Dashboard Architecture"], tools: ["Load Balancers", "Caching", "Sharding"], learningStatus: "learning" },
        { name: "Continuous Integration/Continuous Deployment (CI/CD)", level: 80, experience: "1 year", relatedProjects: ["GitHub Actions workflow"], tools: ["Runners", "Pipelines"], learningStatus: "learning" }
      ]
    }
  ],
  experience: [
    {
      company: "Autointelli",
      position: "Software Development Intern (Full Stack)",
      duration: "Dec 2025",
      location: "Chennai, India",
      responsibilities: [
        "Engineered 4+ responsive UI components for an enterprise IT automation platform using HTML5, CSS3, and JavaScript, integrated with Python-based REST APIs.",
        "Collaborated with cross-functional Agile teams to eliminate 40% of UI bugs within 3 weeks, ensuring on-time delivery across 2 sprint releases."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Python", "REST APIs", "Agile/Scrum"],
      businessProblem: "The client dashboard of the enterprise IT automation platform experienced slow load times and UI layout inconsistencies, slowing down operator workflows and increasing bug tickets.",
      situation: "Assigned as a Full Stack Intern to build responsive UI panels and debug frontend systems integrated with a Python REST API backend.",
      task: "Develop 4+ responsive UI components to display automation tasks, and resolve critical front-end defects within a tight 3-week timeline.",
      action: "Refactored CSS layouts using Flexbox and Grid, standardized API serialization schemas to reduce payload size, and worked with QA teams in daily Scrum standups to isolate and fix visual regressions.",
      result: "Successfully delivered all 4+ components on time and resolved 40% of open frontend bug tickets prior to the sprint release.",
      metrics: "Reduced open bug backlog by 40% and improved dashboard loading speed.",
      lessonsLearned: "Learned how to coordinate API design changes with backend developers to avoid breaking active interfaces."
    },
    {
      company: "CKM Buildbase",
      position: "Web Development Intern",
      duration: "Jun 2024",
      location: "Chennai, India",
      responsibilities: [
        "Architected 3 responsive full-stack web applications with cross-browser compatibility across 4 browsers; optimized asset pipelines to boost page load speed by approximately 30%.",
        "Implemented front-end enhancements that reduced user-reported layout issues by 50% across desktop and mobile viewports, improving overall user experience."
      ],
      technologies: ["React.js", "Python", "Asset Pipelines", "Responsive Design", "Cross-Browser Testing"],
      businessProblem: "Customers faced slow page loading times and inconsistent checkout flows across various browsers and mobile devices, impacting conversion rates.",
      situation: "Brought on as a Web Development Intern to improve responsive layouts and optimize core web assets.",
      task: "Build 3 full-stack components, optimize page performance, and ensure consistency across mobile and desktop browsers.",
      action: "Used React to rebuild key navigation and checkout widgets. Compressed static images, deferred parsing of non-essential JavaScript, and ran cross-browser compatibility tests using automated emulator tools.",
      result: "Optimized load times by approximately 30% and cut layout issues by 50% across desktop and mobile browsers.",
      metrics: "30% faster page loading times and 50% reduction in user-reported layout issues.",
      lessonsLearned: "Gained hands-on experience in browser rendering pipelines and asset optimization strategies."
    },
    {
      company: "Edunet Foundation",
      position: "Python Developer Intern",
      duration: "Feb 2024 - Mar 2024",
      location: "Chennai, India",
      responsibilities: [
        "Developed a Python-based fitness tracker leveraging machine learning (ML) classification algorithms, achieving 91% activity recognition accuracy on a 5,000-sample dataset.",
        "Executed a full machine learning pipeline (preprocessing, feature engineering, training, and evaluation), reducing data noise by 35% and improving model reliability."
      ],
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Classification Algorithms"],
      businessProblem: "Raw accelerometer and gyroscope datasets from fitness tracking devices contained significant noise, resulting in poor activity classification accuracy.",
      situation: "Joined as a Python Developer Intern to build a reliable activity recognition classifier.",
      task: "Develop a Python-based ML pipeline to preprocess raw sensor signals, extract key features, and train a classification model.",
      action: "Created filtering scripts in Pandas and NumPy to reduce signal noise. Conducted PCA and Standard Scaling, and trained Support Vector Machines (SVM) and Decision Tree models using scikit-learn.",
      result: "Built a classification pipeline that achieved 91% activity recognition accuracy on a 5,000-sample testing set.",
      metrics: "91% model accuracy and 35% reduction in input dataset noise.",
      lessonsLearned: "Discovered the importance of feature engineering and data preprocessing over simply tuning model hyperparameters."
    }
  ],
  projects: [
    {
      title: "Quantum Computing Based Security System",
      description: "A hybrid security solution combining Post-Quantum Cryptography and NLP-based phishing threat intelligence for enterprise cybersecurity.",
      problemSolved: "Traditional public-key cryptography (like RSA) is vulnerable to Shor's algorithm on quantum computers. Additionally, phishing filters fail to detect semantic tricks in incoming communications.",
      keyFeatures: [
        "Post-Quantum Cryptographic models securing data transmission.",
        "Natural Language Processing (NLP) models to detect advanced phishing attempts.",
        "Real-time threat level classification with 93% accuracy.",
        "Real-time anomaly monitoring pipeline with instant alerts."
      ],
      technologies: ["Python", "Django", "TensorFlow", "scikit-learn", "MySQL"],
      role: "Lead Cybersecurity & Cryptographic Engineer",
      challengesFaced: "Integrating mathematically complex post-quantum encryption algorithms in Python while keeping backend latency under 2 seconds.",
      outcome: "Successfully deployed a security platform that classifies threats with 93% accuracy and delivers real-time monitoring alerts in less than 2 seconds.",
      github: "https://github.com/sit23cs132-star",
      liveDemo: "#",
      caseStudy: {
        whyItMatters: "As quantum computing develops, traditional encryption methods will become vulnerable. Organizations need to transition to quantum-safe protocols to secure sensitive communications.",
        approach: "Built a Python-based microservice architecture. Combined Kyber-equivalent lattice encryption models with a TF-IDF classifier to analyze incoming text inputs.",
        architectureDiagramText: "[User Client] --(Kyber Encrypted Tunnel)--> [Django Gateway API] --> [NLP TensorFlow Engine] --> [MySQL Threat Database]",
        tradeoffs: "Using post-quantum encryption increased key sizes and processing overhead. To mitigate latency, we used a C-based encryption library bound to Python, maintaining a latency under 2 seconds.",
        lessonsLearned: "Learned the mechanics of lattice-based cryptography and how to optimize CPU-heavy cryptographic operations in web environments.",
        futureImprovements: "Migrate the NLP classifier to an LLM-based API for better semantic understanding and implement Redis for session caching.",
        metrics: ["93% Threat Classification Accuracy", "<1.8s Cryptographic Handshake Latency"],
        timeline: "Oct 2024 - Dec 2024"
      }
    },
    {
      title: "Dashboard Management System",
      description: "A full-stack, real-time analytics dashboard providing operations teams with visual metrics on system performance and health.",
      problemSolved: "Operations teams struggled to identify infrastructure failures and check performance metrics due to scattered and manual logging processes.",
      keyFeatures: [
        "Real-time telemetry and metrics visualization for 10+ live system metrics.",
        "Beautiful, responsive React-based admin grid system.",
        "Python API backend for fast data aggregation and serialization.",
        "Persistent data storage with PostgreSQL for historical trend analysis."
      ],
      technologies: ["Python", "React.js", "JavaScript", "HTML5", "CSS3", "PostgreSQL"],
      role: "Full Stack Developer",
      challengesFaced: "Handling real-time sockets or polling endpoints cleanly in React without causing redundant re-renders or performance degradation under heavy data loads.",
      outcome: "Designed and delivered a real-time console which visualizes over 10 live system metrics, resulting in a 60% reduction in manual monitoring overhead.",
      github: "https://github.com/sit23cs132-star",
      liveDemo: "#",
      caseStudy: {
        whyItMatters: "IT operations need a unified view of system metrics to detect infrastructure failures early and minimize downtime.",
        approach: "Built a React single-page frontend using chart libraries. Integrated it with a Python REST API backend that queries system logs and telemetry metrics.",
        architectureDiagramText: "[React Frontend Grid] <--(HTTP Polling / WebSockets)--> [Python REST API] --> [PostgreSQL Database]",
        tradeoffs: "Polled API endpoints every 2 seconds instead of setting up a complex WebSocket server, which met performance requirements while keeping backend infrastructure simple.",
        lessonsLearned: "Learned how to design responsive dashboards and handle state updates cleanly in React.",
        futureImprovements: "Implement WebSockets for real-time telemetry updates and set up Prometheus to automate metrics collection.",
        metrics: ["Visualizes 10+ system metrics in real-time", "Reduces manual monitoring overhead by 60%"],
        timeline: "Aug 2024 - Sep 2024"
      }
    },
    {
      title: "AI Honeypot Security System",
      description: "An automated, intelligent honeypot system designed to capture, analyze, and alert security teams about unauthorized network scanning and attacks.",
      problemSolved: "Standard firewalls block traffic but do not capture insights about new hacker methodologies, behavior patterns, or custom exploits.",
      keyFeatures: [
        "Decoy services simulating open, vulnerable database and shell endpoints.",
        "Flask-based REST API tracking intrusion details and attacker IP parameters.",
        "AI classifier identifying and classifying hacker behavior patterns with 95%+ accuracy.",
        "Containerized deployment using Docker for isolation and easy teardown/reset."
      ],
      technologies: ["Python", "Flask", "Machine Learning", "Docker", "REST APIs"],
      role: "Backend & ML Engineer",
      challengesFaced: "Ensuring the honey decoy container remains isolated from the main host filesystem so that actual exploitation is safely sandboxed.",
      outcome: "Built an AI-powered detection decoy which classifies attacker behavior into 3 distinct tactical categories and alerts security operations in real-time with 95%+ classification accuracy.",
      github: "https://github.com/sit23cs132-star",
      liveDemo: "#",
      caseStudy: {
        whyItMatters: "Understanding attacker methodologies is key to updating firewalls and detecting new threats before they impact production systems.",
        approach: "Containerized vulnerable decoy services (like SSH, MySQL ports) using Docker. Deployed a Flask app to capture incoming commands and classify them using an SVM model.",
        architectureDiagramText: "[Attacker Client] --(Exploit Scan)--> [Docker Decoy Sandbox] --(Triggers Alerts)--> [Flask Parser] --> [ML Classifier]",
        tradeoffs: "Used lightweight container decoys instead of full virtual machines, reducing resource usage while providing adequate sandboxing for standard network scanning.",
        lessonsLearned: "Gained experience in sandboxing, network telemetry parsing, and container configuration.",
        futureImprovements: "Add support for container auto-teardowns upon intrusion and integrate Slack notifications for real-time alerts.",
        metrics: ["95%+ Attacker Classification Accuracy", "Decoys start in under 500ms using Docker"],
        timeline: "Jan 2025 - Feb 2025"
      }
    }
  ],
  education: [
    {
      institution: "Sri Sairam Institute of Technology, Chennai",
      degree: "B.E. Computer Science Engineering",
      duration: "2023 - 2027",
      grade: "CGPA: 8.91 / 10"
    },
    {
      institution: "Sri Sitharam Vidhyalaya Matriculation Higher Secondary School",
      degree: "12th / Higher Secondary",
      duration: "2021 - 2022",
      grade: "88 / 100"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      date: " 2026",
      credentialLink: "#",
      whyPursued: "To validate my understanding of cloud infrastructure, security models, and core services like EC2, S3, and VPC.",
      skillsGained: ["Cloud Architecture", "AWS IAM Security Policies", "VPC Networking"],
      application: "Helped containerize and deploy personal applications to AWS instances using secure VPC configurations."
    },
    {
      name: "Deloitte – Data Analytics and Cyber Technology",
      organization: "Deloitte",
      date: " 2026",
      credentialLink: "#",
      whyPursued: "To learn about enterprise threat detection, telemetry tracking, and database log analytics.",
      skillsGained: ["Threat Detection Modeling", "Log Analytics", "SQL Data Audits"],
      application: "Applied these threat detection concepts when designing the log parsing system for the AI Honeypot project."
    },
    {
      name: "JP Morgan – Software Engineering & Quantitative Analysis",
      organization: "JP Morgan",
      date: " 2026",
      credentialLink: "#",
      whyPursued: "To understand code quality standards, system testing, and automated deployment pipelines.",
      skillsGained: ["Unit Testing", "System Architecture", "Continuous Integration"],
      application: "Guided my use of unit testing frameworks and linting tools to maintain code quality."
    },
    {
      name: "Cisco – CCNA Modules (1-3), Intro to Data Science",
      organization: "Cisco",
      date: " 2026",
      credentialLink: "#",
      whyPursued: "To understand networking fundamentals, routers, switches, and TCP/IP routing rules.",
      skillsGained: ["Subnetting", "Routing Protocols", "Network Security Configuration"],
      application: "Applied these concepts when configuring ports and network isolation rules for the AI Honeypot project."
    }
  ],
  achievements: [
    {
      title: "Symposium Organizer & Winner",
      description: "Organized college technical symposium with 100+ participants across 8+ events; won awards at 2+ inter-college symposiums, demonstrating leadership and communication skills."
    },
    {
      title: "Research & Technical Speaker",
      description: "Presented and published a research paper at an international-level technical conference (ICDAM) at London Metropolitan University; actively participates in competitive coding and industry workshops."
    }
  ],
  learningJourney: [
    { milestone: "First Program", year: "2020", description: "Wrote my first Python script to automate sorting student files.", icon: "python" },
    { milestone: "Java & OOP Core", year: "2022", description: "Learned Java and studied Object-Oriented Programming and Data Structures.", icon: "java" },
    { milestone: "Web Development", year: "2023", description: "Learned HTML, CSS, JavaScript, and built static web applications.", icon: "web" },
    { milestone: "React & Modern UI", year: "2024", description: "Learned React.js, state management, and built responsive web projects.", icon: "react" },
    { milestone: "Backend & Databases", year: "2024", description: "Built backend microservices using Django and Flask, and worked with PostgreSQL and MySQL.", icon: "database" },
    { milestone: "AI / ML Pipelines", year: "2024", description: "Completed an internship focused on building machine learning classification models.", icon: "ai" },
    { milestone: "Cloud & DevSecOps", year: "2025", description: "Earned the AWS Cloud Practitioner certification and began learning Docker.", icon: "cloud" },
    { milestone: "Current Focus", year: "2026", description: "Studying System Design, distributed databases, and security concepts.", icon: "current" }
  ],
  blogArticles: [
    {
      id: "blog-react-decouple",
      title: "What I Learned Decoupling Data in My React Portfolio",
      date: "Mar 2026",
      category: "React / Architecture",
      summary: "A study of why separating layout from content makes codebases cleaner and more maintainable.",
      content: "When building a portfolio, it is common to hardcode text directly into components. However, this approach makes it difficult to maintain and scale. In this project, I decoupled the content into a typed data store, `resumeData.ts`. This architecture separates layout design from content management, making updates straightforward. It also allowed me to implement a simulated client-side AI assistant that queries this data structure directly, showing the benefits of structured data."
    },
    {
      id: "blog-quantum-safe",
      title: "Introduction to Post-Quantum Cryptography in Python",
      date: "Jan 2026",
      category: "Security / Cryptography",
      summary: "An overview of lattice-based cryptography and implementing quantum-resistant algorithms in Python.",
      content: "As quantum computing develops, traditional encryption methods will become vulnerable. In this article, I discuss lattice-based cryptography and the NIST-approved post-quantum algorithms, such as Kyber. I share lessons learned from building my Quantum Computing Security System, including how to bind C-based cryptographic libraries to Python web backends like Django to optimize performance."
    },
    {
      id: "blog-ai-honeypot",
      title: "Building Lightweight Decoy sandboxes using Docker",
      date: "Nov 2025",
      category: "DevOps / Cybersecurity",
      summary: "How to configure and isolate decoy containers to safely monitor and classify attacker behavior.",
      content: "A honeypot is a decoy system designed to capture insights about attacker methodologies. Using Docker containers allows you to spin up and tear down these decoys quickly. In this post, I explain how to configure Docker Compose to isolate decoys from the host system, map network telemetry inputs, and run a scikit-learn classifier to categorize network scans."
    }
  ],
  metricsDashboard: {
    projectsCompleted: 5,
    internships: 3,
    technologiesLearned: 18,
    githubRepos: 6,
    linesOfCode: "12,000+",
    yearsOfLearning: 4,
    certifications: 4,
    openSourceContributions: 25
  },
  roadmap: [
    { year: "2026 (Q1 - Q2)", goals: ["Contribute to Python cybersecurity libraries", "Implement Redis caching in backend projects"] },
    { year: "2026 (Q3 - Q4)", goals: ["Earn the AWS SysOps Administrator certification", "Study Kubernetes orchestration"] },
    { year: "2027", goals: ["Build distributed systems backends", "Study advanced system design architectures"] }
  ]
};
