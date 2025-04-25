import { 
  BookOpen, 
  Terminal, 
  GitBranch, 
  Database, 
  Server,
  Brain,
  Code2
} from "lucide-react"

export interface Technology {
  name: string
  icon: string
  invert?: boolean
  description: string
  level: number
  experience: {
    years: number
    projects: number
  }
}

export type CategoryKey = 'frontend' | 'backend' | 'infrastructure' | 'datascience' | 'tools' | 'languages'

export const technologies: Record<CategoryKey, Technology[]> = {
  frontend: [
    { 
      name: 'React', 
      icon: '/skills/react.svg',
      description: 'JavaScript library for building user interfaces, specializing in component-based development and state management',
      level: 90,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Next.js', 
      icon: '/skills/nextjs.svg',
      description: 'React framework for production, providing server-side rendering and static site generation',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'TypeScript', 
      icon: '/skills/typescript.svg',
      description: 'JavaScript superset that adds static type checking and better development experience',
      level: 88,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Tailwind CSS', 
      icon: '/skills/tailwind.svg',
      description: 'Utility-first CSS framework for rapid UI development',
      level: 85,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Material-UI', 
      icon: '/skills/material-ui.svg',
      description: 'Comprehensive suite of UI tools helping you ship new features faster',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    }
  ],
  backend: [
    { 
      name: 'Node.js', 
      icon: '/skills/nodejs.svg',
      description: 'JavaScript runtime built on Chrome\'s V8 engine',
      level: 88,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Express.js', 
      icon: '/skills/express.svg',
      description: 'Fast, unopinionated, minimalist web framework for Node.js',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'MongoDB', 
      icon: '/skills/mongodb.svg',
      description: 'Document-oriented NoSQL database',
      level: 85,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'PostgreSQL', 
      icon: '/skills/postgresql.svg',
      description: 'Powerful, open source object-relational database system',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    }
  ],
  infrastructure: [
    { 
      name: 'Docker', 
      icon: '/skills/docker.svg',
      description: 'Platform for developing, shipping, and running applications in containers',
      level: 80,
      experience: {
        years: 1,
        projects: 4
      }
    },
    { 
      name: 'AWS', 
      icon: '/skills/aws.svg',
      description: 'Cloud computing platform offering a wide range of services',
      level: 75,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Git', 
      icon: '/skills/git.svg',
      description: 'Distributed version control system',
      level: 90,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'GitHub', 
      icon: '/skills/github.svg',
      description: 'Code hosting platform for version control and collaboration',
      level: 90,
      experience: {
        years: 2,
        projects: 6
      }
    }
  ],
  datascience: [
    { 
      name: 'Python', 
      icon: '/skills/python.svg',
      description: 'High-level programming language emphasizing code readability',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'NumPy', 
      icon: '/skills/numpy.svg',
      description: 'Fundamental package for scientific computing with Python',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Pandas', 
      icon: '/skills/pandas.svg',
      description: 'Data analysis and manipulation tool',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Scikit-learn', 
      icon: '/skills/scikit-learn.svg',
      description: 'Machine learning library for Python',
      level: 75,
      experience: {
        years: 1,
        projects: 2
      }
    }
  ],
  tools: [
    { 
      name: 'VS Code', 
      icon: '/skills/vscode.svg',
      description: 'Lightweight but powerful source code editor',
      level: 90,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Postman', 
      icon: '/skills/postman.svg',
      description: 'API platform for building and using APIs',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'Figma', 
      icon: '/skills/figma.svg',
      description: 'Collaborative interface design tool',
      level: 80,
      experience: {
        years: 1,
        projects: 4
      }
    }
  ],
  languages: [
    { 
      name: 'JavaScript', 
      icon: '/skills/javascript.svg',
      description: 'Lightweight, interpreted programming language',
      level: 90,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'TypeScript', 
      icon: '/skills/typescript.svg',
      description: 'Typed superset of JavaScript that compiles to plain JavaScript',
      level: 88,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Python', 
      icon: '/skills/python.svg',
      description: 'High-level programming language emphasizing code readability',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'C', 
      icon: '/skills/c.svg',
      description: 'General-purpose, procedural computer programming language',
      level: 75,
      experience: {
        years: 1,
        projects: 3
      }
    }
  ]
}

export const categories: Record<CategoryKey, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development', 
  infrastructure: 'Infrastructure & DevOps',
  datascience: 'Data Science & ML',
  tools: 'Development Tools',
  languages: 'Programming Languages'
}

export const categoryColors = {
  frontend: 'from-blue-500 to-purple-500',
  backend: 'from-green-500 to-emerald-500',
  infrastructure: 'from-orange-500 to-red-500',
  datascience: 'from-pink-500 to-rose-500',
  tools: 'from-yellow-500 to-amber-500',
  languages: 'from-cyan-500 to-sky-500'
} 