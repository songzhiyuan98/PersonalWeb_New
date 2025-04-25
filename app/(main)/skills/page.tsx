"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, X, Star, Clock, Code2, Zap, BookOpen, Terminal, GitBranch, Database, Server } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'
import Loading from '@/components/ui/loading'
import { Technology, CategoryKey, technologies, categories, categoryColors } from './data'

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null)
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
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
                Back to Home
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h1>
                  <p className="text-sm opacity-60">Explore my technical capabilities and expertise</p>
                </div>

                {/* Category Selector */}
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
                      {selectedCategory === category && (
                        <motion.div
                          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${categoryColors[category]} blur-sm opacity-50`}
                          layoutId="glow"
                        />
                      )}
                      
                      <div className={`absolute inset-0 rounded-lg border ${
                        selectedCategory === category 
                          ? 'border-white' 
                          : 'border-white/5 group-hover:border-white/10'
                      }`} />

                      <div className="absolute top-0 right-0 w-4 h-4">
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                      </div>

                      <div className="absolute bottom-0 left-0 w-4 h-4">
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                      </div>
                      
                      <h2 className="text-lg font-semibold relative z-10">{categories[category]}</h2>
                      <p className="text-sm opacity-60 relative z-10">{technologies[category].length} skills</p>
                      
                      {selectedCategory === category && (
                        <motion.div
                          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r ${categoryColors[category]}`}
                          layoutId="underline"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Skills Display Area */}
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
                          <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors" />
                          
                          <div className="absolute top-0 right-0 w-12 h-12">
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/20 transition-colors" />
                          </div>

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
                              <span className="text-xs opacity-60">{tech.experience?.years} years</span>
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
                      <p className="text-xl opacity-70">Select a category to explore skills</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Skill Detail Modal */}
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
                                <p className="text-sm opacity-60">Experience</p>
                                <p className="text-base font-medium">{selectedTech.experience?.years} years</p>
                              </div>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex items-center gap-2">
                              <Code2 className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">Projects</p>
                                <p className="text-base font-medium">{selectedTech.experience?.projects} projects</p>
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
