"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCcw, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectDetail from "./components/ProjectDetail"
import { allProjects, Project } from "./data"
import { useRouter } from "next/navigation"
import Loading from "@/components/ui/loading"

export default function ProjectsPage() {
  const [mainProject, setMainProject] = useState(allProjects[0])
  const [secondaryProject, setSecondaryProject] = useState(allProjects[1])
  const [currentExploreIndex, setCurrentExploreIndex] = useState(2)
  const [isLoading, setIsLoading] = useState(true)
  const [isSwapping, setIsSwapping] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleExploreMore = () => {
    if (allProjects.length <= 1) return
    
    setIsLoading(true)
    setSecondaryProject(allProjects[currentExploreIndex])
    setCurrentExploreIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % allProjects.length
      return nextIndex === allProjects.findIndex(proj => proj.id === mainProject.id)
        ? (nextIndex + 1) % allProjects.length
        : nextIndex
    })
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleSwapProject = () => {
    if (allProjects.length <= 1) return
    
    setIsSwapping(true)
    setTimeout(() => {
      setMainProject(secondaryProject)
      setSecondaryProject(mainProject)
      setIsSwapping(false)
    }, 300)
  }

  const handleBack = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/')
    }, 1300)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
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
                className="inline-flex items-center text-sm hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                <AnimatePresence mode="wait">
                  {selectedProject ? (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="lg:col-span-3"
                    >
                      <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                      />
                    </motion.div>
                  ) : (
                    <>
                      <motion.div
                        key={mainProject.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className={`card ${mainProject.color} ${mainProject.textColor} p-8 rounded-3xl flex flex-col lg:col-span-2 h-[calc(560px+1.5rem)] cursor-pointer hover:scale-[1.02] transition-transform relative group`}
                        onClick={() => setSelectedProject(mainProject)}
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium mb-2">{mainProject.id}.</div>
                          <h3 className="text-3xl font-bold mb-3">{mainProject.title}</h3>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                              <p className="text-base leading-relaxed">{mainProject.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {mainProject.detail.map((item, index) => (
                                  <li key={index} className="text-base leading-relaxed">{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {mainProject.technologies.map((tech, index) => (
                                  <span key={index} className="px-3 py-1 bg-black/10 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-6 flex items-center justify-between">
                          <div className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                            {mainProject.period}
                          </div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <div className="flex flex-col gap-6">
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="card bg-[rgb(0,0,0)] text-white p-8 rounded-3xl flex flex-col h-[280px] cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden group"
                          onClick={handleExploreMore}
                        >
                          <AnimatePresence>
                            {isLoading && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center"
                              >
                                <RefreshCcw className="h-6 w-6 animate-spin" />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="flex-1">
                            <div className="text-sm font-medium mb-2">EXPLORE.</div>
                            <h3 className="text-2xl font-bold mb-3">Discover More Projects</h3>
                            <p className="text-base mb-6">Every project tells a unique story</p>
                            <div className="flex flex-wrap gap-2">
                              {allProjects.map((proj, index) => (
                                proj.id !== mainProject.id && secondaryProject && proj.id !== secondaryProject.id && (
                                  <span key={index} className="px-3 py-1 bg-black/10 rounded-full text-sm">
                                    {proj.title}
                                  </span>
                                )
                              ))}
                            </div>
                          </div>

                          <div className="mt-auto pt-6 flex items-center justify-end">
                            <motion.div 
                              className="flex items-center text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity"
                            >
                              Explore Another Project <RefreshCcw className="ml-2 h-4 w-4" />
                            </motion.div>
                          </div>
                        </motion.div>

                        <AnimatePresence mode="wait">
                          {secondaryProject && (
                            <motion.div
                              key={secondaryProject.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className={`card ${secondaryProject.color} ${secondaryProject.textColor} p-8 rounded-3xl flex flex-col h-[270px] cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden group`}
                              onClick={handleSwapProject}
                            >
                              <AnimatePresence>
                                {isSwapping && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center"
                                  >
                                    <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 1, repeat: Infinity }}
                                    >
                                      <RefreshCcw className="h-6 w-6" />
                                    </motion.div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              <div className="flex-1">
                                <div className="text-sm font-medium mb-2">{secondaryProject.id}.</div>
                                <h3 className="text-2xl font-bold mb-3">{secondaryProject.title}</h3>
                                <p className="text-sm leading-relaxed">{secondaryProject.description}</p>
                              </div>

                              <div className="mt-auto pt-6 flex items-center justify-between">
                                <div className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                                  {secondaryProject.period}
                                </div>
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  Click to Switch <ArrowRight className="ml-2 h-4 w-4 rotate-45" />
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 项目详情弹窗 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 dark:bg-white/95 z-50"
          >
            <ProjectDetail
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
