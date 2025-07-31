/**
 * 经验展示页面
 * 展示工作经验和专业成就
 * 采用主页和project页面的设计风格，简洁专业
 */

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, MapPin, Calendar, Building2, Briefcase, Globe, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { allExperiences, Experience } from "./data"
import Loading from "@/components/ui/loading"

// 工作类型配置 - 优化颜色方案
const workTypeConfig = {
  'Full-time': {
    label: 'Full-time',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
    borderColor: 'border-orange-500/20',
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    timelineColor: 'from-orange-500 to-amber-600'
  },
  'Part-time': {
    label: 'Part-time',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-500',
    borderColor: 'border-purple-500/20',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    timelineColor: 'from-purple-500 to-violet-600'
  },
  'Internship': {
    label: 'Internship',
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-600/10',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-600/20',
    gradient: 'from-blue-600/20 via-blue-700/10 to-transparent',
    timelineColor: 'from-blue-600 to-blue-800'
  },
  'Contract': {
    label: 'Contract',
    color: 'from-slate-500 to-gray-700',
    bgColor: 'bg-slate-500/10',
    textColor: 'text-slate-500',
    borderColor: 'border-slate-500/20',
    gradient: 'from-slate-500/20 via-gray-500/10 to-transparent',
    timelineColor: 'from-slate-500 to-gray-700'
  },
  '3CCA': {
    label: 'Internship',
    color: 'from-gray-600 to-gray-500',
    bgColor: 'bg-gray-600/10',
    textColor: 'text-gray-600',
    borderColor: 'border-gray-600/20',
    gradient: 'from-gray-600/20 via-gray-500/10 to-transparent',
    timelineColor: 'from-gray-600 to-gray-500'
  }
}

export default function ExperiencePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    // 页面加载完成后立即设置loading为false
      setIsLoading(false)
  }, [])

  const handleBack = () => {
      router.push("/")
  }

  // 动态计算timeline位置的函数
  const calculateTimelinePosition = (startDate: string, endDate: string) => {
    const timelineStart = new Date('2024-10-01') // 2024年10月
    const timelineEnd = new Date('2025-12-31')   // 2025年12月
    const totalDuration = timelineEnd.getTime() - timelineStart.getTime()
    
    const start = new Date(startDate)
    const end = endDate === 'Present' ? new Date() : new Date(endDate)
    
    const startPosition = ((start.getTime() - timelineStart.getTime()) / totalDuration) * 100
    const endPosition = ((end.getTime() - timelineStart.getTime()) / totalDuration) * 100
    
    return {
      left: Math.max(0, startPosition),
      width: Math.min(100, endPosition - startPosition)
    }
  }

  // 计算当前时间在timeline上的位置 - 使用和Present相同的逻辑
  const getCurrentTimePosition = () => {
    const position = calculateTimelinePosition('2025-01-01', 'Present')
    return position.left + position.width
  }

  // 按开始时间排序（从早到晚）
  const sortedExperiences = allExperiences
    .sort((a, b) => {
      const dateA = new Date(a.period.split(' - ')[0])
      const dateB = new Date(b.period.split(' - ')[0])
      return dateA.getTime() - dateB.getTime()
    })



  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">


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
                {/* Header Section - 参考services-section风格 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm mb-6 border border-purple-500/30 backdrop-blur-sm"
                  >
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">Professional Journey</span>
                  </motion.div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    Work Experience
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    My professional journey across different roles and industries
                  </p>
                </motion.div>

                {/* Optimized Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-12"
                >
                  <div className="relative max-w-6xl mx-auto px-4">
                    {/* Month labels */}
                    <div className="flex justify-between items-center mb-6">
                      {['Oct 24', 'Dec 24', 'Feb 25', 'Apr 25', 'Jun 25', 'Aug 25', 'Oct 25', 'Dec 25'].map((month, index) => (
                        <motion.div
                          key={month}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                          className="text-xs text-gray-500 dark:text-gray-400 font-medium"
                        >
                          {month}
                        </motion.div>
                      ))}
                    </div>

                    {/* Main timeline track */}
                    <div className="relative h-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-6">
                      {/* Progress bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, delay: 0.5 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                      />
                      
                      {/* Current time indicator - dynamic position */}
                      <motion.div
                        initial={{ x: `${getCurrentTimePosition()}%` }}
                        animate={{ x: `${getCurrentTimePosition()}%` }}
                        transition={{ duration: 2.5, delay: 0.5 }}
                        className="absolute -top-2"
                        style={{ left: `${getCurrentTimePosition()}%`, transform: 'translateX(-50%)' }}
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white dark:border-black">
                          👤
                        </div>
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                          Now
                        </div>
                      </motion.div>
                </div>

                    {/* Timeline with person icon and popup box */}
                    {/* <div className="space-y-5">
                      {/* 3CCA Church Timeline */}
                      {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="relative group"
                      >
                        <motion.div 
                          className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-black/10 dark:bg-white/10"
                          animate={{
                            scale: hoveredCard === "02" ? 1.05 : 1,
                            boxShadow: hoveredCard === "02" ? "0 0 12px rgba(168, 85, 247, 0.3)" : "none"
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${calculateTimelinePosition('2024-12-01', '2025-06-30').width}%`,
                              opacity: hoveredCard === "02" ? 1 : 0.8
                            }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 rounded-full shadow-sm"
                            style={{ left: `${calculateTimelinePosition('2024-12-01', '2025-06-30').left}%` }}
                          />
                        </motion.div>
                        
                        
                        {/* Popup box - commented out for cleaner timeline */}
                        {/* <div className="absolute -top-8 opacity-100 pointer-events-auto cursor-pointer"
                             style={{ left: `${calculateTimelinePosition('2024-12-01', '2025-06-30').left + calculateTimelinePosition('2024-12-01', '2025-06-30').width / 2 - 25}%`, transform: 'translateX(-50%)' }}>
                          <div className="bg-white/25 dark:bg-black/25 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/40 dark:border-black/40 shadow-lg">
                            <div className="text-black dark:text-white text-sm font-semibold">3CCA Church</div>
                            <div className="text-black/70 dark:text-white/70 text-xs mt-1">Dec 2024 - Jun 2025</div>
                          </div>
                        </div> */}
                      {/* </motion.div> */}

                      {/* LABS Laboratory Timeline */}
                      {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="relative group"
                      >
                        <motion.div 
                          className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-black/10 dark:bg-white/10"
                          animate={{
                            scale: hoveredCard === "01" ? 1.05 : 1,
                            boxShadow: hoveredCard === "01" ? "0 0 12px rgba(168, 85, 247, 0.3)" : "none"
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${calculateTimelinePosition('2025-01-01', 'Present').width}%`,
                              opacity: hoveredCard === "01" ? 1 : 0.8
                            }}
                            transition={{ duration: 1.5, delay: 1.7 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 rounded-full shadow-sm"
                            style={{ left: `${calculateTimelinePosition('2025-01-01', 'Present').left}%` }}
                          />
                        </motion.div>
                        
                        
                        {/* Popup box - commented out for cleaner timeline */}
                        {/* <div className="absolute -top-8 opacity-100 pointer-events-auto cursor-pointer"
                             style={{ left: `${calculateTimelinePosition('2025-01-01', 'Present').left + calculateTimelinePosition('2025-01-01', 'Present').width / 2 + 25}%`, transform: 'translateX(-50%)' }}>
                          <div className="bg-white/25 dark:bg-black/25 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/40 dark:border-black/40 shadow-lg">
                            <div className="text-black dark:text-white text-sm font-semibold">LABS Laboratory</div>
                            <div className="text-black/70 dark:text-white/70 text-xs mt-1">Jan 2025 - Present</div>
                          </div>
                        </div> */}
                      {/* </motion.div> */}

                      {/* AcedAI Timeline */}
                      {/* <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="relative group"
                      >
                        <motion.div 
                          className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-black/10 dark:bg-white/10"
                          animate={{
                            scale: hoveredCard === "03" ? 1.05 : 1,
                            boxShadow: hoveredCard === "03" ? "0 0 12px rgba(168, 85, 247, 0.3)" : "none"
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${calculateTimelinePosition('2025-04-01', '2025-06-30').width}%`,
                              opacity: hoveredCard === "03" ? 1 : 0.8
                            }}
                            transition={{ duration: 1.5, delay: 1.9 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 rounded-full shadow-sm"
                            style={{ left: `${calculateTimelinePosition('2025-04-01', '2025-06-30').left}%` }}
                          />
                        </motion.div>
                        
                        
                        {/* Popup box - commented out for cleaner timeline */}
                        {/* <div className="absolute -top-8 opacity-100 pointer-events-auto cursor-pointer"
                             style={{ left: `${calculateTimelinePosition('2025-04-01', '2025-06-30').left + calculateTimelinePosition('2025-04-01', '2025-06-30').width / 2 - 10}%`, transform: 'translateX(-50%)' }}>
                          <div className="bg-white/25 dark:text-white text-sm font-semibold">AcedAI</div>
                            <div className="text-black/70 dark:text-white/70 text-xs mt-1">Apr 2025 - Jun 2025</div>
                          </div>
                        </div> */}
                      {/* </motion.div> */}
                    {/* </div> */}
                  </div>
                </motion.div>



                {/* Experience List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedExperiences.map((experience, index) => (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25 
                      }}
                      whileHover={{ y: -6 }}
                      className="group relative bg-black/5 dark:bg-white/5 rounded-xl p-6 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 h-full cursor-pointer overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl"
                      onMouseEnter={() => setHoveredCard(experience.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Animated gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].gradient : workTypeConfig[experience.workType].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Header with Badge */}
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            {experience.companyLogo ? (
                              <img 
                                src={experience.companyLogo} 
                                alt={experience.company}
                                className="w-10 h-10 object-contain"
                              />
                            ) : (
                              <motion.div 
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].color : workTypeConfig[experience.workType].color} flex items-center justify-center text-white font-bold text-lg`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                {experience.company.charAt(0).toUpperCase()}
                              </motion.div>
                            )}
                            <div>
                                                            <h3 className="text-lg font-bold group-hover:text-white transition-colors duration-200">{experience.company}</h3>
                              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                                  {experience.position}
                                </p>
                            </div>
                          </div>
                          <div className={`text-xs font-semibold px-3 py-1.5 rounded-full border-2 ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].bgColor : workTypeConfig[experience.workType].bgColor} ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].textColor : workTypeConfig[experience.workType].textColor} ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].borderColor : workTypeConfig[experience.workType].borderColor} shadow-sm`}>
                            {experience.company === '3CCA Church' ? workTypeConfig['3CCA'].label : workTypeConfig[experience.workType].label}
                          </div>
                      </div>

                        {/* 基本信息 */}
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Building2 className="h-4 w-4 flex-shrink-0" />
                            <span>{experience.industry}</span>
                          </div>
                      </div>

                        {/* 描述 */}
                        <div className="flex-1 min-h-[3rem]">
                          <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-200 leading-relaxed line-clamp-2">
                            {experience.description}
                          </p>
                      </div>

                        {/* Tech Stack and Action */}
                        <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10">
                          <div className="flex gap-2 mb-4 overflow-hidden">
                            {experience.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-3 py-1.5 bg-black/10 dark:bg-white/10 rounded-full text-xs font-medium flex-shrink-0 border border-black/20 dark:border-white/20 shadow-sm">
                              {tech}
                            </span>
                          ))}
                            {experience.technologies.length > 3 && (
                              <span className="px-3 py-1.5 bg-black/10 dark:bg-white/10 rounded-full text-xs font-medium flex-shrink-0 border border-black/20 dark:border-white/20 shadow-sm">
                                +{experience.technologies.length - 3}
                              </span>
                            )}
                        </div>

                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                              {experience.technologies.length} technologies
                            </div>
                            {experience.demoLink && (
                              <motion.a
                                href={experience.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].bgColor : workTypeConfig[experience.workType].bgColor} hover:bg-opacity-20 rounded-full text-sm transition-all duration-200 font-medium ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].textColor : workTypeConfig[experience.workType].textColor} border ${experience.company === '3CCA Church' ? workTypeConfig['3CCA'].borderColor : workTypeConfig[experience.workType].borderColor} shadow-sm`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Globe className="mr-1.5 h-4 w-4" />
                                Demo
                              <ExternalLink className="ml-1.5 h-3 w-3 opacity-60" />
                              </motion.a>
                            )}
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
