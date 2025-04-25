export interface Experience {
  id: string
  period: string
  company: string
  position: string
  description: string
  detailedDescription: string
  achievements: string[]
  technologies: string[]
  color: string
  textColor: string
  demoLink: string
  images: string[]
  detail: string[]
}

export const allExperiences: Experience[] = [
  {
    id: "01",
    period: "2023.12 - 2024.03",
    company: "Columbia University AI & Biomedical Lab",
    position: "Web Developer Intern",
    description: "Developed a public knowledge portal platform for Columbia University's AI & Biomedical Lab, implementing interactive anatomy systems and data visualization features.",
    detailedDescription: "As a Web Development Intern at Columbia University's AI & Biomedical Lab, I led the development of a public knowledge portal platform, primarily responsible for implementing the frontend anatomy interaction system and global access data visualization module. The platform supports multi-organ information navigation and research data access, with related achievements submitted as a co-author to Nature Aging.",
    achievements: [
      "Implemented an interactive navigation system for 15+ human organs",
      "Developed a global user distribution heatmap supporting 300+ countries and regions",
      "Refactored 200+ pages into reusable components, achieving 98% code reuse rate",
      "Established a data request monitoring system for real-time access behavior tracking"
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "SVG",
      "D3.js",
      "TopoJSON",
      "Netlify Functions",
      "MongoDB",
      "Git"
    ],
    color: "bg-[rgb(255,165,0)]",
    textColor: "text-black",
    demoLink: "https://labs-laboratory.com/medicine/",
    images: [
      "/labs/organ.gif",
      "/labs/map.gif",
      "/labs/downloadsystem.gif"
    ],
    detail: [
      "Led the development of Columbia University's AI & Biomedical Lab public knowledge portal platform, spearheading the implementation of frontend anatomy interaction systems and global access data visualization modules.",
      "Built an SVG-based interactive human body map supporting real-time animation and navigation for 15+ organs.",
      "Developed a global visitor analysis map using D3.js and TopoJSON, visualizing access data from 250+ countries.",
      "Constructed a download system by refactoring 200+ pages into reusable components, achieving 98% code reuse rate.",
      "Built a lightweight backend using Netlify Functions and MongoDB for download and visitor tracking functionality.",
      "Contributed as a co-author to a Nature Aging paper submission, with platform description including my contributions."
    ]
  },
  {
    id: "02",
    period: "2022.01 - 2022.12",
    company: "3CCA Church",
    position: "Web Developer",
    description: "Redesigned and developed a responsive website for 3CCA Church, enhancing user experience and operational efficiency.",
    detailedDescription: "Redesigned and developed a responsive website for 3CCA Church, improving user experience, operational efficiency, and online interaction. The website features a modern design style, supporting church activities, audio resources, and article management functions, providing a convenient experience for church members and visitors.\n\nKey Achievements:\n- Implemented frosted glass effect as the primary design concept\n- Developed a robust event management system\n- Achieved 100% mobile compatibility\n- Improved operational efficiency by 80%",
    achievements: [
      "Implemented frosted glass effect as the primary design concept",
      "Developed a robust event management system",
      "Achieved 100% mobile compatibility",
      "Improved operational efficiency by 80%"
    ],
    technologies: [
      "React",
      "JavaScript",
      "Material-UI",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Git",
    ],
    color: "bg-[rgb(198,236,38)]",
    textColor: "text-black",
    demoLink: "https://3cca.vercel.app",
    images: [
      "/3cca/home.png"
    ],
    detail: [
      "Redesigned and developed a responsive website for 3CCA Church, enhancing user experience, operational efficiency, and online interaction.",
      "Implemented frosted glass effect as the primary design concept, creating a modern visual experience.",
      "Developed a robust event management system supporting event publishing, registration, and statistics.",
      "Achieved 100% mobile compatibility, ensuring excellent browsing experience across various devices.",
      "Improved operational efficiency by 80% through code structure optimization and automation tools implementation."
    ]
  },
  {
    id: "03",
    period: "2025.04 - Present",
    company: "AcedAI",
    position: "Full Stack Engineer",
    description: "Full-stack development of an AI-powered mock interview platform",
    detailedDescription: "As a full-stack engineer in a startup team, responsible for developing an AI-powered mock interview platform. Main responsibilities include developing JD and resume parsing systems, implementing frontend Dashboard and interview pages, and developing and deploying backend APIs.",
    achievements: [
      "Developed an AI-based JD and resume parsing system achieving 100% parsing accuracy",
      "Built frontend using Next.js and TypeScript, backend API using Flask",
      "Deployed on Google Cloud, managed environment with Docker, handled authentication with Firebase",
      "Integrated Gemini API and Google TTS to support mock interviews"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Flask",
      "Docker",
      "Google Cloud",
      "Firebase",
      "Gemini API",
      "Google TTS"
    ],
    color: "bg-[rgb(147,112,219)]",
    textColor: "text-black",
    demoLink: "https://acedai.com",
    images: [
      "/acedai/home.jpg"
    ],
    detail: [
      "As a full-stack engineer, responsible for developing and maintaining the AI-powered mock interview platform",
      "Developed an AI-based JD and resume parsing system achieving 100% parsing accuracy through PDF parsing and AI Prompt hybrid strategy",
      "Built frontend Dashboard and interview pages using Next.js and TypeScript, providing smooth user experience",
      "Developed backend API using Flask, integrated Gemini LLM API for intelligent conversations",
      "Deployed on Google Cloud, managed development environment with Docker, ensuring system scalability and stability",
      "Implemented Firebase-based user authentication system to ensure data security",
      "Integrated Google Text-to-Speech service in preparation for future simulated face-to-face interview features"
    ]
  }
]