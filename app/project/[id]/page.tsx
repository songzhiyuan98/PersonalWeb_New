"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Globe, Calendar, Users, Code, Database, Server, Zap } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import Loading from "@/components/ui/loading"
import { projectDetails } from "../../projects/details"

export default function ProjectDetailPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentImage, setCurrentImage] = useState(0)
  const router = useRouter()
  const params = useParams()
  const projectId = params.id as string
  const project = projectDetails[projectId as keyof typeof projectDetails]

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (project) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        )
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [project])



  const handleBack = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/")
    }, 1300)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">项目未找到</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
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
            className="relative z-10"
          >

            {/* Hero Section - Similar to Featured Projects */}
            <div className="relative min-h-screen flex items-center mt-0 px-6 md:px-12">
              <div className="max-w-6xl mx-auto w-full relative">
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
                          e.currentTarget.src = "https://via.placeholder.com/1200x800/1f2937/ffffff?text=Project+Screenshot"
                        }}
                      />
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent"></div>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/50 dark:bg-black/50 rounded-full text-sm backdrop-blur-sm">
                        {currentImage + 1} / {project.images.length}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Content - Left 1/2 width, overlaid on image */}
                <div className="relative z-10 w-1/2 pr-6 md:pr-0">
                  <div className="max-w-lg space-y-8">
                    {/* Product Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-black/20 dark:border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      {project.status} • {project.category}
                    </motion.div>

                    {/* Product Tagline */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium"
                    >
                      {project.tagline}
                    </motion.h3>
                    
                    {/* Main Headline */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
                    >
                      {project.headline}
                    </motion.h2>
                    
                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {project.subtitle}
                    </motion.p>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-4"
                    >
                      <div className="flex flex-wrap gap-3">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-center gap-2 px-3 py-2 bg-black/10 dark:bg-white/10 rounded-lg text-gray-600 dark:text-gray-300 backdrop-blur-sm border border-black/20 dark:border-white/20"
                          >
                            <span className="text-lg">{feature.icon}</span>
                            <span className="text-sm">{feature.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex gap-4"
                    >
                      {Object.entries(project.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
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
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
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
                        <ArrowLeft className="h-5 w-5 rotate-180" />
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
              </div>
            </div>

            {/* Product Features Section */}
            <div className="px-6 md:px-12 py-20">
              <div className="max-w-6xl mx-auto">
                {/* Product Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-20 text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    产品功能亮点
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Product Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 1 }}
                      className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                      {/* Decorative Border */}
                      <div className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/10 transition-colors" />
                      
                      {/* Top Right Decoration */}
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* Bottom Left Decoration */}
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* Feature Icon */}
                      <div className="absolute top-4 left-4 text-2xl">{feature.icon}</div>

                      {/* Feature Content */}
                      <div className="relative z-10 pt-12">
                        <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                        <p className="text-sm opacity-70 mb-4 leading-relaxed">{feature.description}</p>
                        
                        {/* Feature Details */}
                        <div className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2 text-sm opacity-70">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Product Advantages */}
                <div className="mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    产品优势
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.advantages.map((advantage, index) => (
                      <div
                        key={index}
                        className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 text-center"
                      >
                        {/* Decorative Border */}
                        <div className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/10 transition-colors" />
                        
                        {/* Top Right Decoration */}
                        <div className="absolute top-0 right-0 w-12 h-12">
                          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                        </div>

                        {/* Bottom Left Decoration */}
                        <div className="absolute bottom-0 left-0 w-12 h-12">
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                        </div>

                        {/* Advantage Content */}
                        <div className="relative z-10">
                          <div className="text-3xl mb-4">{advantage.icon}</div>
                          <h4 className="text-lg font-semibold mb-2">{advantage.title}</h4>
                          <p className="text-sm opacity-70">{advantage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Modules - Featured Projects Style */}
                <div className="mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    核心功能模块
                  </h3>
                  <div className="space-y-32">
                    {project.productModules.map((module, index) => (
                      <div
                        key={index}
                        className={`relative min-h-screen flex items-center ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        {/* Background Image - Right 3/4 or Left 3/4 */}
                        <div className={`absolute ${index % 2 === 0 ? "right-0" : "left-0"} top-0 w-3/4 h-full`}>
                          <div className="relative w-full h-full">
                            <img
                              src={typeof module.image === 'string' ? module.image : module.image[0]}
                              alt={module.title}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/1200x800/1f2937/ffffff?text=Module+Screenshot"
                              }}
                            />
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 ${
                              index % 2 === 0 
                                ? "bg-gradient-to-r from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" 
                                : "bg-gradient-to-l from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent"
                            }`}></div>
                          </div>
                        </div>

                        {/* Content - Left 1/2 or Right 1/2 width */}
                        <div className={`relative z-10 w-1/2 ${
                          index % 2 === 0 ? "pl-6 md:pl-12 pr-6 md:pr-0" : "pr-6 md:pr-12 pl-6 md:pl-0"
                        }`}>
                          <div className="max-w-lg space-y-6">
                            {/* Module Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-black/20 dark:border-white/10 backdrop-blur-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              Module {index + 1}
                            </div>

                            {/* Module Title */}
                            <h4 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                              {module.title}
                            </h4>
                            
                            {/* Module Subtitle */}
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                              {module.subtitle}
                            </p>
                            
                            {/* Module Description */}
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                              {module.description}
                            </p>

                            {/* Module Features */}
                            <div className="flex flex-wrap gap-3">
                              {module.moduleFeatures.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="px-3 py-2 bg-black/10 dark:bg-white/10 rounded-lg text-gray-600 dark:text-gray-300 backdrop-blur-sm border border-black/20 dark:border-white/20 text-sm"
                                >
                                  {feature}
                                </div>
                              ))}
                            </div>

                            {/* Module Stats */}
                            <div className="flex gap-4">
                              {Object.entries(module.stats).map(([key, value], statIndex) => (
                                <div
                                  key={key}
                                  className="text-center px-4 py-2 bg-black/10 dark:bg-white/10 rounded-lg backdrop-blur-sm border border-black/20 dark:border-white/20"
                                >
                                  <div className="text-lg font-bold text-black dark:text-white">{value}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Architecture */}
                <div className="mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    技术架构
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(project.architecture).map(([key, value], index) => (
                      <div
                        key={key}
                        className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                      >
                        {/* Decorative Border */}
                        <div className="absolute inset-0 rounded-lg border border-black/10 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/10 transition-colors" />
                        
                        {/* Top Right Decoration */}
                        <div className="absolute top-0 right-0 w-12 h-12">
                          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                        </div>

                        {/* Bottom Left Decoration */}
                        <div className="absolute bottom-0 left-0 w-12 h-12">
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/20 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/20 transition-colors" />
                        </div>

                        {/* Architecture Content */}
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            {key === 'frontend' && <Code className="h-6 w-6 text-blue-400" />}
                            {key === 'backend' && <Server className="h-6 w-6 text-green-400" />}
                            {key === 'database' && <Database className="h-6 w-6 text-purple-400" />}
                            {key === 'ai' && <Zap className="h-6 w-6 text-yellow-400" />}
                            {key === 'infrastructure' && <Globe className="h-6 w-6 text-orange-400" />}
                            {key === 'monitoring' && <Users className="h-6 w-6 text-red-400" />}
                            <h4 className="text-lg font-semibold capitalize">{key}</h4>
                          </div>
                          <p className="text-sm opacity-70 leading-relaxed">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Back Button */}
                <div className="text-center py-20">
                  <motion.button
                    onClick={() => router.push("/")}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-all duration-300 text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>返回主页</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 