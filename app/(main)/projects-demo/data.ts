export interface ProjectDemo {
  id: string
  title: string
  description: string
  category: 'web' | 'ai' | 'mobile' | 'other'
  links: {
    type: 'demo' | 'github' | 'website' | 'appstore' | 'playstore'
    label: string
    url: string
  }[]
  technologies: string[]
  image?: string
  status: 'live' | 'beta' | 'maintenance'
}

export const projectDemos: ProjectDemo[] = [
  {
    id: '1',
    title: 'MEDICINE Knowledge Portal',
    description: 'A public knowledge portal for Columbia University AI & Biomedical Science Lab, supporting internal data collection, visualization, and information access.',
    category: 'web',
    links: [
      {
        type: 'website',
        label: 'Visit Website',
        url: 'https://labs-laboratory.com/medicine/'
      }
    ],
    technologies: ['React', 'D3.js', 'TopoJSON', 'Netlify Functions', 'MongoDB'],
    status: 'live'
  },
  {
    id: '2',
    title: 'Nature Lab Analytics',
    description: 'A global visitor analytics system for Columbia University Nature Lab, visualizing traffic data from 250+ countries.',
    category: 'web',
    links: [
      {
        type: 'website',
        label: 'Visit Website',
        url: 'https://labs-laboratory.com'
      }
    ],
    technologies: ['D3.js', 'TopoJSON', 'React', 'MongoDB', 'Netlify Functions'],
    status: 'live'
  },
  {
    id: '3',
    title: '3CCA Church Online Platform',
    description: 'A comprehensive online platform for 3CCA Church, featuring a complete management system and content management functionality.',
    category: 'web',
    links: [
      {
        type: 'website',
        label: 'Visit Website',
        url: 'https://3cca.org'
      }
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    status: 'live'
  },
  {
    id: '4',
    title: 'AI Resume Analyzer',
    description: 'An intelligent resume analysis platform built with MERN stack and OpenAI API, supporting resume parsing, job matching, and interview question generation.',
    category: 'ai',
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/songzhiyuan98/JobsAI/settings'
      },
      {
        type: 'demo',
        label: 'Live Demo',
        url: ''
      }
    ],
    technologies: ['MERN', 'OpenAI API', 'PDF Parsing', 'Google OAuth'],
    status: 'beta'
  },
  {
    id: '5',
    title: 'AnimeHub',
    description: 'An anime community platform built with MERN stack, featuring multi-language support, user management, and content display.',
    category: 'web',
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/songzhiyuan98/Animehub'
      },
      {
        type: 'website',
        label: 'Visit Website',
        url: 'https://animehub-frontend.netlify.app'
      }
    ],
    technologies: ['MERN', 'JWT', 'i18n', 'Ant Design', 'Material-UI'],
    status: 'live'
  },
  {
    id: '6',
    title: 'Personal Portfolio Template',
    description: 'A modern portfolio website template built with Next.js and Tailwind CSS, featuring dark mode and responsive design.',
    category: 'web',
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/songzhiyuan98/personal-website-template'
      },
      {
        type: 'website',
        label: 'Visit Website',
        url: 'https://www.yifeiwang.xyz'
      }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'live'
  }
] 