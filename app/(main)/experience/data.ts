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
    description: "开发了哥伦比亚大学AI与生物医学实验室的公共知识门户平台，实现了交互式解剖系统和数据可视化功能。",
    detailedDescription: "作为哥伦比亚大学AI与生物医学实验室的Web开发实习生，我主导开发了公共知识门户平台，主要负责前端解剖交互系统和全球访问数据可视化模块的实现。该平台支持多器官信息导航和研究数据访问，相关成果已作为共同作者提交至Nature Aging论文。",
    achievements: [
      "实现了15+人体器官的交互式导航系统",
      "开发了全球用户分布热力图，支持300+国家和地区",
      "重构了200+页面为可复用组件，实现98%的代码复用率",
      "建立了数据请求监控系统，实现访问行为的实时追踪"
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
      "领导开发哥伦比亚大学AI与生物医学实验室的公共知识门户平台，主导实现了前端解剖交互系统和全球访问数据可视化模块。",
      "构建了基于SVG的交互式人体地图，支持15+器官的实时动画和导航功能。",
      "使用D3.js和TopoJSON开发了全球访问者分析地图，可视化来自250+个国家的访问数据。",
      "通过将200+页面重构为可复用组件，构建了下载系统，实现了98%的代码复用率。",
      "使用Netlify Functions和MongoDB构建了轻量级后端，用于下载和访问者追踪功能。",
      "作为共同作者参与了Nature Aging论文投稿，平台描述中包含了我的贡献。"
    ]
  },
  {
    id: "02",
    period: "2022.01 - 2022.12",
    company: "3CCA Church",
    position: "Web Developer",
    description: "重新设计和开发3CCA教堂响应式网站，提升用户体验和运营效率。",
    detailedDescription: "重新设计和开发了3CCA教堂的响应式网站，提升了用户体验、运营效率和在线互动。网站采用现代设计风格，支持教堂活动、音频资源和文章管理功能，为教堂成员和访客提供了便捷的体验。\n\n主要成就：\n- 采用磨砂玻璃效果作为主要设计概念\n- 开发了强大的活动管理系统\n- 实现了100%的移动端兼容性\n- 提升了80%的运营效率",
    achievements: [
      "采用磨砂玻璃效果作为主要设计概念",
      "开发了强大的活动管理系统",
      "实现了100%的移动端兼容性",
      "提升了80%的运营效率"
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
    demoLink: "https://3ccaorg.wordpress.com",
    images: [
      "/church/home.png",
      "/church/oldhome.png",
      "/church/admin.png",
      "/church/resources.png",
      "/church/modules.png"
    ],
    detail: [
      "重新设计和开发了3CCA教堂的响应式网站，提升了用户体验、运营效率和在线互动。",
      "采用磨砂玻璃效果作为主要设计概念，打造现代化视觉体验。",
      "开发了强大的活动管理系统，支持活动发布、报名和统计功能。",
      "实现了100%的移动端兼容性，确保在各种设备上都能获得良好的浏览体验。",
      "通过优化代码结构和引入自动化工具，提升了80%的运营效率。"
    ]
  },
  {
    id: "03",
    period: "2021.01 - 2021.12",
    company: "某创业公司",
    position: "前端开发实习生",
    description: "参与公司产品的前端开发工作",
    detailedDescription: "作为前端开发实习生，我参与了公司产品的前端开发工作。主要负责实现UI设计稿，优化用户交互体验，并协助团队完成项目开发。通过这次实习，我积累了丰富的前端开发经验。",
    achievements: [
      "实现了用户注册和登录功能",
      "开发了数据可视化组件",
      "优化了页面性能，提升了用户体验",
      "参与了代码审查和重构工作"
    ],
    technologies: ["React", "Redux", "Ant Design", "ECharts", "Webpack"],
    color: "bg-[rgb(147,112,219)]",
    textColor: "text-black",
    demoLink: "https://example.com",
    images: [
      "/images/project3-1.jpg",
      "/images/project3-2.jpg",
      "/images/project3-3.jpg"
    ],
    detail: [
      "参与了公司产品的前端开发工作，主要负责实现UI设计稿，优化用户交互体验，并协助团队完成项目开发。",
      "通过这次实习，我积累了丰富的前端开发经验。"
    ]
  }
] 