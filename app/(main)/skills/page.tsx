"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, X, Star, Clock, Code2, Zap, BookOpen, Terminal, GitBranch, Database, Server } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'
import Loading from '@/components/ui/loading'

interface Technology {
  name: string
  icon: string
  invert?: boolean
  description?: string
  level?: number
  experience?: {
    years: number
    projects: number
  }
  tags?: string[]
}

type CategoryKey = 'frontend' | 'backend' | 'infrastructure' | 'datascience' | 'tools' | 'languages'

const technologies: Record<CategoryKey, Technology[]> = {
  frontend: [
    { 
      name: 'React', 
      icon: '/skills/react.svg',
      description: '构建用户界面的 JavaScript 库，擅长组件化开发和状态管理',
      level: 90,
      experience: {
        years: 3,
        projects: 12
      }
    },
    { 
      name: 'Redux', 
      icon: '/skills/redux.svg',
      description: '可预测的状态管理容器，用于管理应用的状态',
      level: 85,
      experience: {
        years: 2,
        projects: 8
      }
    },
    { 
      name: 'TypeScript', 
      icon: '/skills/typescript.svg',
      description: 'JavaScript 的超集，提供静态类型检查和更好的开发体验',
      level: 88,
      experience: {
        years: 2,
        projects: 10
      }
    },
    { 
      name: 'Material-UI', 
      icon: '/skills/material-ui.svg',
      description: '基于 Material Design 的 React UI 组件库',
      level: 80,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Ant Design', 
      icon: '/skills/antd.svg',
      description: '企业级 UI 设计语言和 React 组件库',
      level: 85,
      experience: {
        years: 2,
        projects: 7
      }
    },
  ],
  backend: [
    { 
      name: 'Node.js', 
      icon: '/skills/nodejs.svg',
      description: '基于 Chrome V8 引擎的 JavaScript 运行时',
      level: 88,
      experience: {
        years: 3,
        projects: 9
      }
    },
    { 
      name: 'Express.js', 
      icon: '/skills/express.svg',
      description: '快速、开放、极简的 Node.js Web 框架',
      level: 85,
      experience: {
        years: 2,
        projects: 7
      }
    },
    { 
      name: 'Socket.io', 
      icon: '/skills/socketio.svg',
      description: '实现实时、双向和基于事件的通信',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'JWT', 
      icon: '/skills/jwt.svg',
      description: '用于在网络应用间传递声明而执行的一种基于 JSON 的开放标准',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
  ],
  infrastructure: [
    { 
      name: 'MongoDB', 
      icon: '/skills/mongodb.svg',
      description: '面向文档的 NoSQL 数据库',
      level: 85,
      experience: {
        years: 2,
        projects: 6
      }
    },
    { 
      name: 'Redis', 
      icon: '/skills/redis.svg',
      description: '开源的内存数据结构存储系统',
      level: 80,
      experience: {
        years: 1,
        projects: 4
      }
    },
    { 
      name: 'Mongoose', 
      icon: '/skills/mongoose.svg',
      description: 'MongoDB 对象建模工具',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'Netlify', 
      icon: '/skills/netlify.svg',
      description: '现代化的自动化部署平台',
      level: 75,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Heroku', 
      icon: '/skills/heroku.svg',
      description: '云平台即服务，支持多种编程语言',
      level: 75,
      experience: {
        years: 1,
        projects: 2
      }
    },
    { 
      name: 'Vercel', 
      icon: '/skills/vercel.svg',
      description: '面向前端开发者的云平台',
      level: 80,
      experience: {
        years: 1,
        projects: 4
      }
    },
  ],
  datascience: [
    { 
      name: 'NumPy', 
      icon: '/skills/numpy.svg',
      description: 'Python 科学计算的基础包',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'Pandas', 
      icon: '/skills/pandas.svg',
      description: '强大的数据分析和操作工具',
      level: 85,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'Scikit-learn', 
      icon: '/skills/scikit-learn.svg',
      description: 'Python 机器学习库',
      level: 80,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Matplotlib', 
      icon: '/skills/matplotlib.svg',
      description: 'Python 2D 绘图库',
      level: 75,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'Jupyter', 
      icon: '/skills/jupyter.svg',
      description: '交互式笔记本环境',
      level: 80,
      experience: {
        years: 1,
        projects: 4
      }
    },
  ],
  tools: [
    { 
      name: 'Git', 
      icon: '/skills/git.svg',
      description: '分布式版本控制系统',
      level: 90,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'GitHub', 
      icon: '/skills/github.svg',
      description: '基于 Git 的代码托管平台',
      level: 85,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'Linux', 
      icon: '/skills/linux.svg',
      description: '开源操作系统',
      level: 80,
      experience: {
        years: 2,
        projects: 8
      }
    },
    { 
      name: 'VS Code', 
      icon: '/skills/vscode.svg',
      description: '轻量级代码编辑器',
      level: 90,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'PyCharm', 
      icon: '/skills/pycharm.svg',
      description: 'Python 集成开发环境',
      level: 85,
      experience: {
        years: 2,
        projects: 6
      }
    },
  ],
  languages: [
    { 
      name: 'JavaScript', 
      icon: '/skills/javascript.svg',
      description: '轻量级的解释型编程语言',
      level: 90,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'Python', 
      icon: '/skills/python.svg',
      description: '高级编程语言，强调代码可读性',
      level: 88,
      experience: {
        years: 3,
        projects: 10
      }
    },
    { 
      name: 'C', 
      icon: '/skills/c.svg',
      description: '通用的过程式编程语言',
      level: 80,
      experience: {
        years: 2,
        projects: 5
      }
    },
    { 
      name: 'C++', 
      icon: '/skills/cpp.svg',
      description: 'C 语言的扩展，支持面向对象编程',
      level: 75,
      experience: {
        years: 1,
        projects: 3
      }
    },
    { 
      name: 'HTML5', 
      icon: '/skills/html5.svg',
      description: '超文本标记语言的最新版本',
      level: 90,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'CSS3', 
      icon: '/skills/css3.svg',
      description: '层叠样式表的最新版本',
      level: 85,
      experience: {
        years: 3,
        projects: 15
      }
    },
    { 
      name: 'R', 
      icon: '/skills/r.svg',
      description: '统计计算和图形显示的语言',
      level: 70,
      experience: {
        years: 1,
        projects: 2
      }
    },
  ]
}

const categories: Record<CategoryKey, string> = {
  frontend: '前端开发',
  backend: '后端开发', 
  infrastructure: '数据库与部署',
  datascience: '数据科学与机器学习',
  tools: '系统编程与工具',
  languages: '编程语言'
}

const categoryColors = {
  frontend: 'from-blue-500 to-purple-500',
  backend: 'from-green-500 to-emerald-500',
  infrastructure: 'from-orange-500 to-red-500',
  datascience: 'from-pink-500 to-rose-500',
  tools: 'from-yellow-500 to-amber-500',
  languages: 'from-cyan-500 to-sky-500'
}

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null)
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleBack = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/')
    }, 1300)
  }

  return (
    <main className="h-[calc(100vh-64px)] bg-black text-white flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 md:px-12 py-4">
              <motion.button
                onClick={handleBack}
                className="inline-flex items-center text-sm hover:text-gray-300 transition-colors"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">技术栈</h1>
                  <p className="text-sm opacity-60">探索我的技术能力和经验</p>
                </div>

                {/* 分类选择器 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                  {(Object.keys(technologies) as CategoryKey[]).map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`relative p-4 rounded-lg text-center transition-all ${
                        selectedCategory === category 
                          ? 'bg-white text-black' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* 选中状态的光晕效果 */}
                      {selectedCategory === category && (
                        <motion.div
                          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${categoryColors[category]} blur-sm opacity-50`}
                          layoutId="glow"
                        />
                      )}
                      
                      {/* 边框装饰 */}
                      <div className={`absolute inset-0 rounded-lg border ${
                        selectedCategory === category 
                          ? 'border-white' 
                          : 'border-white/5 group-hover:border-white/10'
                      }`} />

                      {/* 右上角装饰 */}
                      <div className="absolute top-0 right-0 w-4 h-4">
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                      </div>

                      {/* 左下角装饰 */}
                      <div className="absolute bottom-0 left-0 w-4 h-4">
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                      </div>
                      
                      <h2 className="text-lg font-semibold relative z-10">{categories[category]}</h2>
                      <p className="text-sm opacity-60 relative z-10">{technologies[category].length} 项技能</p>
                      
                      {/* 选中状态的指示器 */}
                      {selectedCategory === category && (
                        <motion.div
                          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r ${categoryColors[category]}`}
                          layoutId="underline"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* 技能展示区 */}
                <AnimatePresence mode="wait">
                  {selectedCategory ? (
                    <motion.div
                      key={selectedCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {technologies[selectedCategory].map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="group relative bg-white/5 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-all duration-300"
                          onClick={() => setSelectedTech(tech)}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* 装饰性边框 */}
                          <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors" />
                          
                          {/* 右上角装饰 */}
                          <div className="absolute top-0 right-0 w-12 h-12">
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/20 transition-colors" />
                          </div>

                          {/* 左下角装饰 */}
                          <div className="absolute bottom-0 left-0 w-12 h-12">
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-white/20 transition-colors" />
                          </div>

                          <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className={`${tech.invert ? 'dark:invert' : ''}`}
                              />
                              {/* 图标装饰 */}
                              <div className="absolute -inset-1 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">{tech.name}</h3>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-400" />
                                  <span className="text-sm opacity-60">{tech.level}%</span>
                                </div>
                              </div>
                              <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <motion.div 
                                  className="h-full bg-white rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${tech.level}%` }}
                                  transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm opacity-70 line-clamp-2 mb-4">{tech.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 opacity-50" />
                              <span className="text-xs opacity-60">2年经验</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12"
                    >
                      <p className="text-xl opacity-70">选择一个技术分类开始探索</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 技能详情弹窗 */}
                <AnimatePresence>
                  {selectedTech && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50"
                      onClick={() => setSelectedTech(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-black/90 rounded-lg p-8 max-w-2xl w-full backdrop-blur-md relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* 关闭按钮 */}
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                          onClick={() => setSelectedTech(null)}
                          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </motion.button>

                        <div className="relative z-10">
                          <div className="flex items-center gap-6 mb-8">
                            <motion.div 
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="relative w-16 h-16 flex items-center justify-center bg-white/10 rounded-lg"
                            >
                              <Image
                                src={selectedTech.icon}
                                alt={selectedTech.name}
                                width={48}
                                height={48}
                                className={`${selectedTech.invert ? 'dark:invert' : ''}`}
                              />
                            </motion.div>
                            <motion.div 
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                              className="flex-1"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-2xl font-semibold">{selectedTech.name}</h3>
                                <div className="flex items-center gap-1">
                                  <Star className="h-5 w-5 text-yellow-400" />
                                  <span className="text-sm opacity-60">{selectedTech.level}%</span>
                                </div>
                              </div>
                              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-white rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${selectedTech.level}%` }}
                                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                />
                              </div>
                            </motion.div>
                          </div>

                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="flex items-center gap-8 mb-6"
                          >
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">使用经验</p>
                                <p className="text-base font-medium">{selectedTech.experience?.years || 0} 年</p>
                              </div>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex items-center gap-2">
                              <Code2 className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">项目数量</p>
                                <p className="text-base font-medium">{selectedTech.experience?.projects || 0} 个</p>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="text-lg opacity-70 leading-relaxed"
                          >
                            {selectedTech.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
