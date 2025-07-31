"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Globe, Play, ArrowRight, Star, Users, Zap } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "LoopInterview",
    tagline: "最新上线",
    headline: "Loop Interview",
    subtitle: "智能视频面试，实时评估候选人，让招聘更高效",
    features: [
      "🎤 ElevenLabs语音合成",
      "🤖 Gemini API集成", 
      "👤 3D面试官模拟",
      "📊 系统性反馈分析"
    ],
    benefits: [
      "招聘效率提升70%",
      "消除面试偏见",
      "24/7全天候面试"
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
        url: "https://www.loopinterview.com"
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
    cta: "Start Your Free Trial"
  }
]

export default function FeaturedProjectsSection() {
  const [currentImages, setCurrentImages] = useState<{ [key: number]: number }>({})

  // Auto-advance images for each project
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    featuredProjects.forEach((project, projectIndex) => {
      const timer = setInterval(() => {
        setCurrentImages(prev => ({
          ...prev,
          [projectIndex]: (prev[projectIndex] || 0) === project.images.length - 1 ? 0 : (prev[projectIndex] || 0) + 1
        }))
      }, 5000)
      timers.push(timer)
    })

    return () => timers.forEach(timer => clearInterval(timer))
  }, [])

  return (
    <section className="px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"
        />
      </div>



      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            探索我的代表性项目，体验前沿技术与创新解决方案
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {featuredProjects.map((project, projectIndex) => {
            const currentImage = currentImages[projectIndex] || 0
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: projectIndex * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative min-h-screen flex items-center"
              >
                {/* Background Image - Right 3/4 */}
                <div className="absolute right-0 top-0 w-3/4 h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8 }}
                      className="relative w-full h-full"
                    >
                      <img
                        src={project.images[currentImage]}
                        alt={`${project.title} - ${currentImage + 1}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/1200x800/1f2937/ffffff?text=Product+Screenshot"
                        }}
                      />
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent"></div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Image counter and detail button - Outside AnimatePresence */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                    <div className="px-3 py-1 bg-black/50 dark:bg-black/50 rounded-full text-sm backdrop-blur-sm">
                      {currentImage + 1} / {project.images.length}
                    </div>
                    <motion.a
                      href={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30 rounded-full transition-all duration-300 border border-black/30 dark:border-white/30 hover:border-black/50 dark:hover:border-white/50 backdrop-blur-sm text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>查看详情</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.a>
                  </div>
                </div>

                {/* Content - Left 1/2 width, overlaid on image */}
                <div className="relative z-10 w-1/2 pr-6 md:pr-0">
                  <div className="max-w-lg space-y-8">
                    {/* Product Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      {project.status} • {project.category}
                    </motion.div>

                    {/* Product Tagline */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl text-blue-400 font-medium"
                    >
                      {project.tagline}
                    </motion.h3>
                    
                    {/* Main Headline */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
                    >
                      {project.headline}
                    </motion.h2>
                    
                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {project.subtitle}
                    </motion.p>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex flex-wrap gap-3">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-3 py-2 bg-black/10 dark:bg-white/10 rounded-lg text-gray-600 dark:text-gray-300 backdrop-blur-sm border border-black/20 dark:border-white/20"
                          >
                            <span className="text-lg">{feature.split(' ')[0]}</span>
                            <span className="text-sm">{feature.split(' ').slice(1).join(' ')}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      {Object.entries(project.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center px-4 py-2 bg-black/10 dark:bg-white/10 rounded-lg backdrop-blur-sm border border-black/20 dark:border-white/20"
                        >
                                                      <div className="text-lg font-bold text-black dark:text-white">{value}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-4"
                    >
                      <motion.a
                        href={project.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 rounded-xl transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{project.cta}</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.a>
                      
                      <motion.a
                        href={project.links[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-4 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-xl transition-all duration-300 border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 