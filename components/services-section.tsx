/**
 * 服务展示组件
 * 展示教育、技能、经验和项目四个主要板块的入口
 * 采用紧凑的卡片布局，符合整体设计风格
 */

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Code, Briefcase, FolderOpen, Sparkles, Zap, Target, Rocket, Heart, Mail, Linkedin, ExternalLink } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Education",
    subtitle: "Academic Journey",
    description: "My academic background, degrees and certifications from top institutions",
    icon: <GraduationCap className="h-6 w-6" />,
    link: "/education",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    stats: "3+ Years",
    detail: "Computer Science",
    badge: "Academic"
  },
  {
    id: "02",
    title: "Skills",
    subtitle: "Technical Stack",
    description: "My technical stack and professional skills across full-stack development",
    icon: <Code className="h-6 w-6" />,
    link: "/skills",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    stats: "20+ Skills",
    detail: "Full-Stack",
    badge: "Technical"
  },
  {
    id: "03",
    title: "Experience",
    subtitle: "Professional Path",
    description: "My professional work experience and career achievements",
    icon: <Briefcase className="h-6 w-6" />,
    link: "/experience",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    stats: "3+ Years",
    detail: "Industry Experience",
    badge: "Professional"
  },
  {
    id: "04",
    title: "Projects",
    subtitle: "Portfolio",
    description: "My development projects and creative solutions showcase",
    icon: <FolderOpen className="h-6 w-6" />,
    link: "/projects",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    stats: "12+ Projects",
    detail: "Live Demos",
    badge: "Portfolio"
  },
]

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden py-20">
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
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-xl"
        />
      </div>


      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm mb-6 border border-purple-500/30 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">What I Do</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            My Professional Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From academic excellence to industry expertise, discover my complete professional story
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
            >
              <Link href={service.link}>
                <div className="group relative bg-black/5 dark:bg-white/5 rounded-xl p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 h-full cursor-pointer overflow-hidden backdrop-blur-sm">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with Badge */}
                    <div className="flex items-start justify-between mb-5">
                      <motion.div 
                        className={`p-3 rounded-lg ${service.bgColor} ${service.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 bg-black/10 dark:bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-black/20 dark:border-white/20">
                        {service.badge}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-300 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {service.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Stats and action */}
                    <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-black dark:text-white">{service.stats}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{service.detail}</div>
                        </div>
                        <motion.div 
                          className="flex justify-end"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`rounded-full border ${service.borderColor} p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/40 ${service.color}`}>
                            <ArrowRight size={18} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Let's collaborate on your next project and bring innovative ideas to life
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="mailto:zhiyuan.song@ucsc.edu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-400 hover:to-orange-400 rounded-xl transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/zhiyuan-song-761651217/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-xl transition-all duration-300 border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
