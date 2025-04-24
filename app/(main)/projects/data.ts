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
    title: "个人网站",
    description: "使用 Next.js 和 Tailwind CSS 构建的个人作品集网站，展示我的项目经历和技术能力。",
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
      "使用 Next.js 13+ 和 App Router 构建现代化的个人网站",
      "采用 Tailwind CSS 实现响应式设计和动画效果",
      "使用 Framer Motion 添加流畅的页面过渡和交互效果",
      "实现深色模式切换和国际化支持",
      "优化 SEO 和性能，确保良好的用户体验"
    ],
    achievements: [
      "页面加载速度优化至 90+ 分",
      "实现完全响应式设计，适配各种设备",
      "添加优雅的动画效果提升用户体验",
      "使用 TypeScript 确保代码质量和类型安全"
    ],
    color: "bg-[#E99A9A]",
    textColor: "text-black",
    rating: 4.7
  },
  {
    id: "02",
    title: "AI Resume Analyzer",
    description: "AI驱动的简历分析平台，解决简历与职位不匹配和低效申请分析问题",
    period: "2025.02 - 至今",
    color: "bg-[#ECD98C]",
    textColor: "text-black",
    technologies: ["MERN", "OpenAI API", "PDF Parsing", "Google OAuth", "MongoDB"],
    detail: [
      "设计和构建AI驱动的平台，解决简历与职位不匹配和低效申请分析问题",
      "通过pdf-parse提取简历文本，结合正则表达式和GPT分析，达到100%的识别准确率",
      "集成OpenAI API进行匹配评分、定制简历反馈和面试问题生成",
      "构建基于会话的引擎，具有多线程上下文控制，减少冗余并节省70%的token",
      "实现一键JD粘贴，通过token优化的预处理实现更快、更便宜的分析",
      "使用Google OAuth和MongoDB实现用户登录、历史记录跟踪和简历/职位重用"
    ],
    images: ["/projects/ai-resume-1.jpg", "/projects/ai-resume-2.jpg"],
    achievements: ["100%识别准确率", "节省70%token", "一键分析"],
    rating: 4.8
  },
  {
    id: "03",
    title: "AnimeHub",
    description: "动漫社区平台，提供动漫信息、评分和用户管理功能",
    period: "2024.06 - 2024.11",
    color: "bg-[#9AE9E9]",
    textColor: "text-black",
    technologies: ["MERN", "Netlify", "Heroku", "JWT", "i18n", "Ant Design", "Material-UI"],
    detail: [
      "实现解耦架构，在Netlify和Heroku上分别部署，确保可扩展性",
      "使用Express.js构建RESTful API，实现评分、筛选和用户管理，提高后端效率",
      "通过嵌入ID数组优化MongoDB，简化数据访问并减少查询开销",
      "实现JWT认证，使用Axios拦截器进行令牌刷新和无缝API重试",
      "使用i18n添加多语言支持，在用户账户中存储语言偏好以实现持久化定制",
      "使用Ant Design和Material-UI增强用户界面，提高可用性和视觉吸引力"
    ],
    images: ["/projects/animehub-1.jpg", "/projects/animehub-2.jpg"],
    achievements: ["解耦架构", "多语言支持", "优化查询"],
    rating: 4.5
  },
] 