"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {

  return (
    <section className="px-6 md:px-12 pt-16 pb-24 bg-white dark:bg-black text-black dark:text-white relative min-h-screen flex items-center overflow-hidden">



      

      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-6">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm mb-8 border border-purple-500/30 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">AI-Powered Developer</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Zhiyuan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 dark:text-gray-300 mb-8">
                Full-Stack Developer & <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">AI Engineer</span>
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                I craft modern web applications and AI-powered solutions. Passionate about building 
                scalable systems and creating meaningful user experiences.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="https://github.com/songzhiyuan98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-all duration-300 border border-black/20 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4 opacity-60" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/zhiyuan-song-761651217/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-all duration-300 border border-black/20 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
                <ExternalLink className="h-4 w-4 opacity-60" />
              </motion.a>
              <motion.a
                href="mailto:songzhiyuan98@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-all duration-300 border border-black/20 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-400 hover:to-orange-400 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                <span>Resume</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:flex-shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              {/* 外圈光环效果 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* 主头像容器 */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group">
                {/* 头像图片 */}
                <motion.img
                  src="/avatar.jpg"
                  alt="Zhiyuan Song"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* 渐变叠加层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 动态边框 */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ 
                    borderColor: ["rgba(255,255,255,0.3)", "rgba(168,85,247,0.6)", "rgba(249,115,22,0.6)", "rgba(255,255,255,0.3)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* 内圈装饰环 */}
                <motion.div 
                  className="absolute inset-2 rounded-full border border-white/20"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* 装饰性元素 */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate: { duration: 5, repeat: Infinity, ease: "linear" }
                }}
              />
              
              <motion.div 
                className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.4, 1],
                  y: [-10, 10, -10]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  y: [10, -10, 10]
                }}
                transition={{ 
                  scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* 脉冲环效果 */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/40"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500/30"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* 技术标签 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-purple-500/30"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  AI Engineer
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div 
            className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/10"
            whileHover={{ y: -5 }}
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

            <div className="relative z-10">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">Open Source Projects</div>
              <a href="https://github.com/songzhiyuan98" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm group-hover:underline">
                View on GitHub →
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/10"
            whileHover={{ y: -5 }}
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

            <div className="relative z-10">
              <div className="text-3xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">Live Demos</div>
              <a href="/projects-demo" className="text-green-400 hover:text-green-300 text-sm group-hover:underline">
                View Projects →
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/10"
            whileHover={{ y: -5 }}
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

            <div className="relative z-10">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">Years Experience</div>
              <a href="/experience" className="text-purple-400 hover:text-purple-300 text-sm group-hover:underline">
                View Experience →
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-black/5 dark:bg-white/5 rounded-lg p-6 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 border border-black/10 dark:border-white/5 hover:border-black/20 dark:hover:border-white/10"
            whileHover={{ y: -5 }}
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

            <div className="relative z-10">
              <div className="text-3xl font-bold text-orange-400 mb-2">Nature</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2">Research Paper</div>
              <a href="#" className="text-orange-400 hover:text-orange-300 text-sm group-hover:underline">
                Read Abstract →
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
