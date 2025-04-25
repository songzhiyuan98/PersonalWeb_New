export interface Project {
  id: string
  title: string
  description: string
  period: string
  demoLink?: string
  githubLink?: string
  images: string[]
  technologies: string[]
  detail: string[]
  achievements: string[]
  color: string
  textColor: string
  rating: number
}

export const allProjects: Project[] = [
  {
    id: "01",
    title: "Personal Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS, showcasing my project experience and technical skills.",
    period: "2024.01 - 2024.02",
    demoLink: "https://zhiyuansong.com",
    githubLink: "https://github.com/zhiyuansong/PersonalWeb_New",
    images: [
      "/projects/personal-website-1.png",
      "/projects/personal-website-2.png",
      "/projects/personal-website-3.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    detail: [
      "Built a modern personal website using Next.js 13+ and App Router",
      "Implemented responsive design and animations with Tailwind CSS",
      "Added smooth page transitions and interactive effects with Framer Motion",
      "Implemented dark mode toggle and internationalization support",
      "Optimized SEO and performance for better user experience"
    ],
    achievements: [
      "Optimized page load speed to 90+ score",
      "Achieved fully responsive design for all devices",
      "Added elegant animations to enhance user experience",
      "Ensured code quality and type safety with TypeScript"
    ],
    color: "bg-[#E99A9A]",
    textColor: "text-black",
    rating: 4.7
  },
  {
    id: "02",
    title: "AI Resume Analyzer",
    description: "An AI-powered resume analysis platform that addresses resume-job mismatch and inefficient application analysis issues",
    period: "2025.02 - Present",
    color: "bg-[#ECD98C]",
    textColor: "text-black",
    technologies: ["MERN", "OpenAI API", "PDF Parsing", "Google OAuth", "MongoDB"],
    detail: [
      "Built AI platform to solve resume-job mismatch and inefficient analysis",
      "Achieved 100% accuracy with pdf-parse and GPT analysis",
      "Integrated OpenAI API for matching scores and feedback",
      "Built session engine with context control, saving 70% tokens",
      "Implemented one-click JD pasting with optimized preprocessing",
      "Used Google OAuth and MongoDB for user management"
    ],
    images: ["/projects/ai-resume-1.jpg", "/projects/ai-resume-2.jpg"],
    achievements: ["100% recognition accuracy", "70% token savings", "One-click analysis"],
    rating: 4.8
  },
  {
    id: "03",
    title: "AnimeHub",
    description: "An anime community platform providing anime information, ratings, and user management features",
    period: "2024.06 - 2024.11",
    color: "bg-[#9AE9E9]",
    textColor: "text-black",
    technologies: ["MERN", "Netlify", "Heroku", "JWT", "i18n", "Ant Design", "Material-UI"],
    detail: [
      "Implemented decoupled architecture with separate deployments on Netlify and Heroku for scalability",
      "Built RESTful API with Express.js for backend efficiency",
      "Optimized MongoDB with embedded ID arrays to simplify data access and reduce query overhead",
      "Implemented JWT authentication with Axios interceptors for token refresh and seamless API retry",
      "Added multilingual support with i18n for persistent customization",
      "Enhanced UI with Ant Design and Material-UI to improve usability and visual appeal"
    ],
    images: ["/projects/animehub-1.jpg", "/projects/animehub-2.jpg"],
    achievements: ["Decoupled architecture", "Multilingual support", "Optimized queries"],
    rating: 4.5
  },
]