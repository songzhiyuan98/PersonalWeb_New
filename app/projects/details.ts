export const projectDetails = {
  "1": {
    id: 1,
    title: "LoopInterview",
    tagline: "最新上线",
    headline: "Loop Interview",
    subtitle: "智能视频面试，实时评估候选人，让招聘更高效",
    description: "LoopInterview是一个革命性的AI驱动面试平台，旨在彻底改变传统的招聘流程。我们的6人初创团队开发了这个解决方案，以满足当今快节奏商业环境中对高效、可扩展和公正面试流程的日益增长的需求。",
    longDescription: `LoopInterview利用先进的自然语言处理和计算机视觉技术进行自动化视频面试，提供候选人回答、肢体语言和沟通技巧的实时分析。凭借智能问题生成、自动评分和综合反馈系统等功能，LoopInterview帮助公司做出数据驱动的招聘决策，同时为候选人提供无缝和专业的体验。

该平台的核心功能包括：
• AI驱动的视频面试，支持多语言
• 实时候选人评估和分析
• 智能问题生成和个性化面试流程
• 自动反馈和评分系统
• 全面的候选人报告和分析
• 与现有HR系统的无缝集成

技术架构采用现代化的微服务架构，确保高可用性和可扩展性。前端使用React构建响应式用户界面，后端采用Node.js和Python处理复杂的AI算法，数据库使用MongoDB存储结构化数据，并通过AWS云服务确保全球部署和性能优化。`,
    benefits: [
      "招聘效率提升70%",
      "消除面试偏见",
      "24/7全天候面试",
      "降低招聘成本"
    ],
    category: "AI Platform",
    status: "Live",
    technologies: ["React", "Node.js", "Python", "OpenAI", "WebRTC", "MongoDB", "AWS"],
    images: [
      "/loopinterview/homepage.png",
      "/loopinterview/intro.png"
    ],
    links: [
      {
        type: "website",
        label: "Try LoopInterview",
        url: "https://loopinterview.ai"
      },
      {
        type: "github",
        label: "View Code",
        url: "https://github.com/loopinterview"
      }
    ],
    stats: {
      users: "10K+",
      interviews: "50K+",
      accuracy: "95%"
    },
    cta: "Start Your Free Trial",
    projectInfo: {
      startDate: "2024年1月",
      endDate: "2024年6月",
      teamSize: "6人初创团队",
      role: "全栈开发负责人",
      duration: "6个月",
      platform: "Web + Mobile"
    },
    features: [
      {
        title: "ElevenLabs语音合成",
        description: "集成ElevenLabs先进的语音合成技术，提供自然、流畅的AI面试官语音，支持多种语言和情感表达",
        icon: "🎤",
        details: [
          "自然语音合成，支持15种语言",
          "情感化语音表达，提升面试体验",
          "实时语音生成，无延迟响应",
          "个性化语音定制"
        ]
      },
      {
        title: "Gemini API集成",
        description: "深度集成Google Gemini API，提供更智能的问题生成和答案分析能力",
        icon: "🤖",
        details: [
          "智能问题生成，基于JD定制",
          "深度答案分析，评估技术能力",
          "多轮对话支持，模拟真实面试",
          "持续学习优化，提升准确率"
        ]
      },
      {
        title: "3D面试官模拟",
        description: "创新的3D面试官技术，提供沉浸式面试体验，让候选人感受真实的面试氛围",
        icon: "👤",
        details: [
          "逼真3D面试官形象",
          "实时面部表情和肢体语言",
          "多角色选择，适应不同岗位",
          "VR/AR设备支持"
        ]
      },
      {
        title: "系统性反馈分析",
        description: "全面的面试反馈系统，从技术能力到软技能的全方位评估",
        icon: "📊",
        details: [
          "技术能力评估（编程、算法等）",
          "软技能分析（沟通、领导力等）",
          "文化匹配度评估",
          "详细的改进建议"
        ]
      },
      {
        title: "北美大厂题库",
        description: "集成Google、Meta、Amazon等北美大厂的面试题库，提供最权威的面试内容",
        icon: "🏢",
        details: [
          "Google、Meta、Amazon等大厂题库",
          "实时更新的面试题目",
          "难度分级和分类",
          "解题思路和最佳实践"
        ]
      },
      {
        title: "付费会员积分系统",
        description: "创新的会员积分系统，激励用户持续使用，提供个性化服务",
        icon: "💎",
        details: [
          "多层级会员体系",
          "积分奖励和兑换机制",
          "个性化推荐服务",
          "专属高级功能"
        ]
      },
      {
        title: "自定义JD简历面试",
        description: "基于具体职位描述和候选人简历，生成个性化的面试流程",
        icon: "📝",
        details: [
          "JD解析和关键词提取",
          "简历匹配度分析",
          "个性化问题生成",
          "定制化评估标准"
        ]
      }
    ],
    advantages: [
      {
        title: "6人初创团队",
        description: "小而精的团队，快速迭代，灵活响应市场需求",
        icon: "🚀"
      },
      {
        title: "AI技术领先",
        description: "集成最新AI技术，提供行业领先的面试体验",
        icon: "⚡"
      },
      {
        title: "成本效益高",
        description: "相比传统面试，大幅降低招聘成本和时间",
        icon: "💰"
      },
      {
        title: "数据驱动",
        description: "基于大数据的分析，提供客观公正的评估",
        icon: "📈"
      }
    ],
    architecture: {
      frontend: "React + TypeScript + Tailwind CSS + Three.js",
      backend: "Node.js + Express + Python + FastAPI",
      database: "MongoDB + Redis + PostgreSQL",
      ai: "OpenAI GPT-4 + Google Gemini + ElevenLabs + Custom ML Models",
      infrastructure: "AWS (EC2, S3, CloudFront, Lambda, ECS)",
      monitoring: "DataDog + Sentry + CloudWatch"
    },
    productModules: [
      {
        title: "AI面试体验",
        subtitle: "沉浸式3D面试官，自然语音交互",
        description: "体验最先进的AI面试技术，感受真实的面试氛围。我们的3D面试官不仅外观逼真，更能通过ElevenLabs的语音合成技术进行自然对话，让面试过程更加人性化。",
        image: "/loopinterview/interview1.png",
        moduleFeatures: ["3D面试官", "自然语音", "实时交互", "多语言支持"],
        stats: { accuracy: "95%", languages: "15+", responseTime: "<100ms" }
      },
      {
        title: "深度定制化面试模拟",
        subtitle: "根据岗位与个人背景量身打造面试流程",
        description: "通过AI分析职位描述与候选人简历，自动生成专属面试题目和流程，支持多维度能力评估与个性化反馈，助力企业精准选才，候选人高效提升。",
        image: "/loopinterview/customize1.png",
        moduleFeatures: ["岗位定制", "简历解析", "个性化问题生成", "多维度评估", "智能反馈"],
        stats: { customRate: "100%", feedbackTime: "实时", satisfaction: "4.9/5" }
      },
      {
        title: "智能评估系统",
        subtitle: "全方位能力分析，客观公正评估",
        description: "基于Gemini API的智能评估系统，能够从技术能力、沟通技巧、问题解决能力等多个维度对候选人进行全面分析，提供客观公正的评估结果。",
        image: "/loopinterview/result1.png",
        moduleFeatures: ["技术评估", "软技能分析", "文化匹配", "详细报告"],
        stats: { dimensions: "8+", accuracy: "92%", reportTime: "实时" }
      },
      {
        title: "大厂题库系统",
        subtitle: "权威面试题库，实战模拟训练",
        description: "集成北美顶级科技公司的面试题库，提供最权威的面试内容。用户可以针对特定公司进行模拟面试，提升面试成功率。",
        image: "/loopinterview/module.png",
        moduleFeatures: ["大厂题库", "难度分级", "解题思路", "实战模拟"],
        stats: { companies: "50+", questions: "10K+", categories: "20+" }
      },
      {
        title: "会员积分体系",
        subtitle: "个性化服务，持续价值创造",
        description: "创新的会员积分系统，通过积分奖励机制激励用户持续使用平台，同时提供个性化的高级功能和服务。",
        image: "/loopinterview/price.png",
        moduleFeatures: ["积分奖励", "等级特权", "个性化推荐", "专属服务"],
        stats: { members: "5K+", retention: "85%", satisfaction: "4.8/5" }
      }
    ],
    screenshots: [
      {
        title: "3D面试界面",
        description: "沉浸式3D面试官，支持自然语音交互",
        image: "/loopinterview/3d-interview.png"
      },
      {
        title: "智能评估仪表板",
        description: "全方位能力分析和评估报告",
        image: "/loopinterview/assessment-dashboard.png"
      },
      {
        title: "大厂题库系统",
        description: "权威面试题库和实战模拟",
        image: "/loopinterview/question-bank.png"
      },
      {
        title: "会员中心",
        description: "积分系统和个性化服务",
        image: "/loopinterview/membership-center.png"
      }
    ]
  },
  "2": {
    id: 2,
    title: "Personal Website",
    tagline: "极致简洁的个人作品集",
    headline: "Next.js 13+ 打造的现代化个人网站",
    subtitle: "响应式设计 | 动效体验 | 技术展示",
    description: "一个基于 Next.js 和 Tailwind CSS 构建的个人作品集网站，展示了我的项目经验与技术能力。",
    longDescription: "本项目采用 Next.js 13+ App Router 架构，结合 Tailwind CSS 实现响应式设计与现代动画效果。支持深色模式与多语言切换，优化了 SEO 和页面性能，适配各类终端设备。通过 Framer Motion 增强页面交互体验，全面展示个人技术栈与项目成果。",
    benefits: [
      "极致响应式设计，适配所有设备",
      "流畅的页面动效与交互体验",
      "支持深色模式与多语言切换",
      "SEO 优化，提升搜索排名",
      "代码质量高，类型安全"
    ],
    category: "Web Apps",
    status: "Live",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel"
    ],
    images: [
      "/personalweb/1.png"
    ],
    links: [
      { type: "website", label: "访问演示", url: "https://zhiyuansong.com" },
      { type: "github", label: "查看源码", url: "https://github.com/zhiyuansong/PersonalWeb_New" }
    ],
    stats: {
      users: "2K+",
      interviews: "N/A",
      accuracy: "N/A",
      rating: "4.7/5"
    },
    cta: "立即访问",
    projectInfo: {
      startDate: "2024-01",
      endDate: "2024-02",
      teamSize: "1",
      role: "全栈开发",
      duration: "1个月",
      platform: "Web"
    },
    features: [
      {
        title: "现代化技术栈",
        description: "采用 Next.js 13+、TypeScript、Tailwind CSS 构建，保证高性能与可维护性。",
        icon: "🛠️",
        details: [
          "App Router 路由架构",
          "TypeScript 类型安全",
          "Tailwind CSS 原子化样式"
        ]
      },
      {
        title: "动效与交互",
        description: "通过 Framer Motion 实现页面转场与交互动效，提升用户体验。",
        icon: "✨",
        details: [
          "页面切换动画",
          "按钮与元素交互反馈"
        ]
      },
      {
        title: "多语言与深色模式",
        description: "支持中英文切换与深色/浅色主题，满足不同用户需求。",
        icon: "🌗",
        details: [
          "国际化 i18n 支持",
          "一键切换深浅色"
        ]
      }
    ],
    advantages: [
      {
        title: "高性能",
        description: "页面加载速度优化，Lighthouse 得分 90+。",
        icon: "🚀"
      },
      {
        title: "极致适配",
        description: "移动端与桌面端均有优异表现。",
        icon: "📱"
      },
      {
        title: "易扩展",
        description: "组件化设计，便于后续功能拓展。",
        icon: "🧩"
      }
    ],
    architecture: {
      frontend: "Next.js 13+、TypeScript、Tailwind CSS",
      backend: "无（静态部署）",
      database: "无",
      ai: "无",
      infrastructure: "Vercel 静态托管",
      monitoring: "Vercel Analytics"
    },
    productModules: [
      {
        title: "首页",
        subtitle: "个人简介与亮点展示",
        description: "展示个人头像、简介、社交链接与技术标签。",
        image: "/projects/personal-website-1.png",
        moduleFeatures: [
          "社交媒体跳转",
          "技术栈标签",
          "动效头像"
        ],
        stats: { views: "1.5K+", likes: "200+" }
      },
      {
        title: "项目展示",
        subtitle: "精选项目与详细介绍",
        description: "以卡片形式展示主要项目，支持点击查看详情。",
        image: "/projects/personal-website-2.png",
        moduleFeatures: [
          "项目卡片",
          "技术标签",
          "外链跳转"
        ],
        stats: { projects: "6+", githubStars: "50+" }
      },
      {
        title: "关于与联系",
        subtitle: "个人经历与联系方式",
        description: "介绍教育背景、工作经历及联系方式。",
        image: "/projects/personal-website-3.png",
        moduleFeatures: [
          "教育/经历时间轴",
          "邮箱/社交链接",
          "下载简历"
        ],
        stats: { contacts: "30+", resumeDownloads: "20+" }
      }
    ],
    screenshots: [
      {
        title: "首页展示",
        description: "极简风格的个人主页，突出技术标签与社交链接。",
        image: "/projects/personal-website-1.png"
      },
      {
        title: "项目卡片",
        description: "卡片式项目展示，支持动效与外链跳转。",
        image: "/projects/personal-website-2.png"
      },
      {
        title: "关于与联系",
        description: "详细的个人经历与联系方式，支持简历下载。",
        image: "/projects/personal-website-3.png"
      }
    ]
  },
  "3": {
    id: 3,
    title: "AnimeHub",
    tagline: "动漫社区平台",
    headline: "AnimeHub",
    subtitle: "动漫信息、评分与用户管理一站式平台",
    description: "AnimeHub 是一个为动漫爱好者打造的社区平台，提供丰富的动漫信息、评分系统和用户管理功能。",
    longDescription: "AnimeHub 采用前后端分离架构，前端部署在 Netlify，后端部署在 Heroku，支持多语言切换和高效的用户认证。通过 MongoDB 嵌套 ID 数组优化数据访问，提升查询效率。集成 JWT 认证与 Axios 拦截器，实现无缝的 token 刷新和 API 重试。UI 采用 Ant Design 和 Material-UI，提升用户体验。",
    benefits: [
      "解耦式架构，前后端独立部署，易于扩展",
      "RESTful API 提升后端效率",
      "MongoDB 嵌套数组优化查询，降低延迟",
      "JWT + Axios 拦截器实现安全认证与自动重试",
      "i18n 多语言支持，个性化体验",
      "Ant Design & Material-UI 提升界面美观与易用性"
    ],
    category: "Web Apps",
    status: "Live",
    technologies: ["MERN", "Netlify", "Heroku", "JWT", "i18n", "Ant Design", "Material-UI"],
    images: ["/projects/animehub-1.jpg", "/projects/animehub-2.jpg"],
    links: [
      { type: "website", label: "访问 AnimeHub", url: "https://animehub.example.com" },
      { type: "github", label: "查看源码", url: "https://github.com/yourname/animehub" }
    ],
    stats: { users: "5K+", animes: "10K+", reviews: "20K+" },
    cta: "立即体验",
    projectInfo: {
      startDate: "2024-06",
      endDate: "2024-11",
      teamSize: "3",
      role: "全栈开发",
      duration: "6个月",
      platform: "Web"
    },
    features: [
      {
        title: "多语言支持",
        description: "内置 i18n，支持多语言切换，提升全球用户体验",
        icon: "🌐",
        details: [
          "持久化用户语言偏好",
          "动态切换界面语言"
        ]
      },
      {
        title: "高效数据访问",
        description: "MongoDB 嵌套 ID 数组，简化数据结构，提升查询效率",
        icon: "⚡",
        details: [
          "减少多表关联",
          "优化热门动漫与用户数据检索"
        ]
      },
      {
        title: "安全认证",
        description: "JWT + Axios 拦截器，自动刷新 token，保障数据安全",
        icon: "🔒",
        details: [
          "无缝 API 调用",
          "自动重试机制"
        ]
      }
    ],
    advantages: [
      {
        title: "解耦式架构",
        description: "前后端独立部署，便于维护和扩展",
        icon: "🧩"
      },
      {
        title: "美观易用的 UI",
        description: "Ant Design & Material-UI 提升界面美观与交互体验",
        icon: "🎨"
      }
    ],
    architecture: {
      frontend: "React + Ant Design + Material-UI (Netlify 部署)",
      backend: "Express.js (Heroku 部署)",
      database: "MongoDB",
      ai: "无",
      infrastructure: "Netlify, Heroku",
      monitoring: "自定义日志与监控"
    },
    productModules: [
      {
        title: "动漫信息模块",
        subtitle: "动漫数据与评分",
        description: "展示详细动漫信息、评分与评论，支持用户收藏与评分。",
        image: "/projects/animehub-1.jpg",
        moduleFeatures: [
          "动漫详情页",
          "评分与评论系统",
          "收藏与推荐"
        ],
        stats: { animes: "10K+", reviews: "20K+" }
      },
      {
        title: "用户管理模块",
        subtitle: "注册、登录与认证",
        description: "支持 JWT 认证，用户可安全注册、登录与管理个人信息。",
        image: "/projects/animehub-2.jpg",
        moduleFeatures: [
          "JWT 安全认证",
          "个人信息管理",
          "多语言切换"
        ],
        stats: { users: "5K+", languages: "3+" }
      }
    ],
    screenshots: [
      {
        title: "动漫信息页",
        description: "展示动漫详细信息、评分与评论。",
        image: "/projects/animehub-1.jpg"
      },
      {
        title: "用户中心",
        description: "用户可管理个人信息与偏好设置。",
        image: "/projects/animehub-2.jpg"
      }
    ]
  },
  "4": {
    id: 4,
    title: "AI Resume Analyzer",
    tagline: "AI 智能简历分析平台",
    headline: "AI Resume Analyzer",
    subtitle: "AI 驱动的简历与岗位匹配分析",
    description: "AI Resume Analyzer 是一款基于 AI 的简历分析平台，解决简历与岗位不匹配、人工分析低效等问题。",
    longDescription: "平台集成 pdf-parse 与 GPT，实现简历内容精准解析与岗位 JD 匹配，支持一键粘贴 JD 并自动预处理。通过 OpenAI API 生成匹配分数与反馈建议，内置会话引擎节省 70% token 消耗。支持 Google OAuth 登录与 MongoDB 用户管理，提升安全性与易用性。",
    benefits: [
      "100% 简历内容识别准确率",
      "自动化岗位匹配与反馈",
      "70% token 节省，降低成本",
      "一键 JD 粘贴与智能预处理",
      "Google OAuth 登录，保障安全"
    ],
    category: "AI",
    status: "Live",
    technologies: ["MERN", "OpenAI API", "PDF Parsing", "Google OAuth", "MongoDB"],
    images: ["/projects/ai-resume-1.jpg", "/projects/ai-resume-2.jpg"],
    links: [
      { type: "website", label: "访问 AI Resume Analyzer", url: "https://ai-resume.example.com" },
      { type: "github", label: "查看源码", url: "https://github.com/yourname/ai-resume-analyzer" }
    ],
    stats: { users: "2K+", resumes: "5K+", accuracy: "100%" },
    cta: "立即体验",
    projectInfo: {
      startDate: "2025-02",
      endDate: "至今",
      teamSize: "2",
      role: "全栈开发",
      duration: "进行中",
      platform: "Web"
    },
    features: [
      {
        title: "AI 简历解析",
        description: "集成 pdf-parse 与 GPT，实现高准确率简历内容提取",
        icon: "🤖",
        details: [
          "支持多格式简历上传",
          "自动结构化解析"
        ]
      },
      {
        title: "岗位智能匹配",
        description: "OpenAI API 生成岗位匹配分数与反馈建议",
        icon: "📊",
        details: [
          "自动分析 JD 与简历匹配度",
          "个性化反馈"
        ]
      },
      {
        title: "高效会话引擎",
        description: "上下文控制，节省 70% token 消耗",
        icon: "💡",
        details: [
          "多轮对话上下文管理",
          "token 优化"
        ]
      }
    ],
    advantages: [
      {
        title: "极致准确率",
        description: "pdf-parse + GPT，100% 内容识别",
        icon: "🎯"
      },
      {
        title: "极致节省",
        description: "上下文引擎，token 节省 70%",
        icon: "💰"
      }
    ],
    architecture: {
      frontend: "React + Tailwind CSS (Netlify 部署)",
      backend: "Express.js + OpenAI API",
      database: "MongoDB",
      ai: "OpenAI GPT",
      infrastructure: "Netlify, MongoDB Atlas",
      monitoring: "自定义日志与监控"
    },
    productModules: [
      {
        title: "简历上传与解析",
        subtitle: "多格式支持",
        description: "支持 PDF/Word 等多格式简历上传，自动解析内容。",
        image: "/projects/ai-resume-1.jpg",
        moduleFeatures: [
          "PDF/Word 上传",
          "内容结构化解析"
        ],
        stats: { resumes: "5K+", accuracy: "100%" }
      },
      {
        title: "岗位匹配与反馈",
        subtitle: "智能分析",
        description: "自动分析岗位 JD 与简历匹配度，生成反馈建议。",
        image: "/projects/ai-resume-2.jpg",
        moduleFeatures: [
          "JD 智能粘贴",
          "匹配分数与反馈"
        ],
        stats: { matches: "3K+", feedbacks: "2K+" }
      }
    ],
    screenshots: [
      {
        title: "简历上传页",
        description: "支持多格式简历上传与解析。",
        image: "/projects/ai-resume-1.jpg"
      },
      {
        title: "岗位匹配分析页",
        description: "展示匹配分数与个性化反馈。",
        image: "/projects/ai-resume-2.jpg"
      }
    ]
  },

}