/**
 * 工作经验数据结构
 * 定义工作经验的数据接口和实际数据
 */

export interface Experience {
  id: string
  period: string
  company: string
  position: string
  description: string
  technologies: string[]
  demoLink?: string
  location: string
  workType: 'Full-time' | 'Part-time' | 'Internship' | 'Contract'
  industry: string
  companyLogo?: string
}

export const allExperiences: Experience[] = [
  {
    id: "01",
    period: "2025.01 - Present",
    company: "LABS Laboratory",
    position: "Web Developer Intern",
    description: "Led development of Columbia University's AI & Biomedical Lab public knowledge portal.",
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
    demoLink: "https://labs-laboratory.com",
    location: "New York, NY",
    workType: "Internship",
    industry: "AI & Biomedical Research",
    companyLogo: "/companyicon/labs.png"
  },
  {
    id: "02",
    period: "2024.12 - 2025.06",
    company: "3CCA Church",
    position: "Full Stack Intern",
    description: "Organized and led a team to develop the official website for the church, overseeing the entire process from planning to launch.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Material-UI",
      "Tailwind CSS",
      "AWS",
      "Git"
    ],
    demoLink: "https://3cca.vercel.app",
    location: "Los Angeles, CA",
    workType: "Internship",
    industry: "Non-profit & Religious",
    companyLogo: "/companyicon/3CCA.jpg"
  },
  {
    id: "03",
    period: "2025.04 - 2025.06",
    company: "Loop Interview",
    position: "Full Stack Engineer",
    description: "Co-founded and developed an AI-powered mock interview startup platform with a 6-person team using Next.js, TypeScript, Flask, and cloud services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Flask",
      "Firebase",
      "Docker",
      "Google Cloud",
      "Gemini API",
      "ElevenLabs TTS",
      "Google TTS"
    ],
    demoLink: "https://www.loopinterview.com",
    location: "Santa Cruz, CA",
    workType: "Part-time",
    industry: "AI & Startup",
    companyLogo: "/companyicon/loopinterview.png"
  }]
