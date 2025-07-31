/**
 * 项目展示页面
 * 展示开发项目和技术经验
 * 采用education页面的设计风格，支持深色模式
 */

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Smartphone, Globe, Play, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { projectDetails } from "./details"
import Loading from "@/components/ui/loading"

const categoryColors = {
  web: "from-blue-500 to-cyan-500",
  ai: "from-purple-500 to-pink-500",
  mobile: "from-green-500 to-emerald-500",
  other: "from-orange-500 to-amber-500"
}

const statusColors = {
  live: "bg-green-500/10 text-green-500 border-green-500/20",
  beta: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  maintenance: "bg-blue-500/10 text-blue-500 border-blue-500/20"
}

const statusLabels = {
  live: "Live",
  beta: "Beta",
  maintenance: "Maintenance"
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    // 页面加载完成后立即设置loading为false
    setIsLoading(false)
  }, [])

  const handleBack = () => {
    router.push('/')
  }

  // 直接从projectDetails获取项目数据
  const projectDemos = Object.values(projectDetails).map((project: any) => {
    // 分类映射，兼容AI、Web、Mobile等
    let category: 'web' | 'ai' | 'mobile' | 'other' = 'other'
    if (project.category?.toLowerCase().includes('ai')) category = 'ai'
    else if (project.category?.toLowerCase().includes('mobile')) category = 'mobile'
    else if (project.category?.toLowerCase().includes('web')) category = 'web'

    // 状态映射
    let status: 'live' | 'beta' | 'maintenance' = 'live'
    if (project.status?.toLowerCase() === 'beta') status = 'beta'
    else if (project.status?.toLowerCase() === 'maintenance') status = 'maintenance'

    return {
      id: project.id,
      title: project.title,
      description: project.description,
      category,
      links: project.links || [],
      technologies: project.technologies || [],
      status
    }
  })

  const filteredProjects = selectedCategory
    ? projectDemos.filter((project) => project.category === selectedCategory)
    : projectDemos

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
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
            <div className="px-6 md:px-12 py-8 pt-12">
              <motion.button
                onClick={handleBack}
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
                  <p className="text-sm opacity-60">Explore my projects and technical experiences</p>
                </div>

                {/* 分类选择器 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {Object.entries(categoryColors).map(([category, gradient]) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`relative p-4 rounded-lg text-center transition-all ${
                        selectedCategory === category 
                          ? 'bg-black dark:bg-white text-white dark:text-black' 
                          : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedCategory === category && (
                        <motion.div
                          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${gradient} blur-sm opacity-50`}
                          layoutId="glow"
                        />
                      )}
                      
                      {/* 装饰性边框 */}
                      <div className={`absolute inset-0 rounded-lg border ${
                        selectedCategory === category 
                          ? 'border-black dark:border-white' 
                          : 'border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20'
                      }`} />

                      {/* 右上角装饰 */}
                      <div className="absolute top-0 right-0 w-4 h-4">
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/10 dark:border-white/10" />
                      </div>

                      {/* 左下角装饰 */}
                      <div className="absolute bottom-0 left-0 w-4 h-4">
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/10 dark:border-white/10" />
                      </div>

                      <h2 className="text-lg font-semibold relative z-10">
                        {category === 'web' ? 'Web Apps' :
                         category === 'ai' ? 'AI Projects' :
                         category === 'mobile' ? 'Mobile Apps' : 'Other Projects'}
                      </h2>
                      <p className="text-sm opacity-60 relative z-10">
                        {projectDemos.filter(p => p.category === category).length} projects
                      </p>
                    </motion.button>
                  ))}
                </div>

                {/* 项目展示区 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
                      onClick={() => router.push(`/project/${project.id}`)}
                    >
                      {/* 装饰性边框 */}
                      <div className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors" />
                      
                      {/* 右上角装饰 */}
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* 左下角装饰 */}
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* 状态标签 */}
                      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </div>

                      {/* 项目内容 */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* 头部区域 */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">{project.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed">{project.description}</p>

                          {/* 技术栈 */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech: string) => (
                              <span key={tech} className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full text-xs font-medium flex-shrink-0 border border-black/20 dark:border-white/20">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full text-xs font-medium flex-shrink-0 border border-black/20 dark:border-white/20">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* 底部区域 */}
                        <div className="mt-auto">
                          {/* 链接按钮 */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.links.slice(0, 2).map((link: any) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full text-sm transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {link.type === 'github' && <Github className="mr-1.5 h-4 w-4" />}
                                {link.type === 'website' && <Globe className="mr-1.5 h-4 w-4" />}
                                {link.label}
                                <ExternalLink className="ml-1.5 h-3 w-3 opacity-60" />
                              </a>
                            ))}
                          </div>
                          
                          {/* 箭头指示器 */}
                          <div className="flex items-center justify-end">
                            <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
