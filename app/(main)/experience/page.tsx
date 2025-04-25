"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCcw, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ExperienceDetail from "./components/ExperienceDetail"
import { allExperiences, Experience } from "./data"
import { useRouter } from "next/navigation"
import Loading from "@/components/ui/loading"

export default function ExperiencePage() {
  const [mainExperience, setMainExperience] = useState(allExperiences[0])
  const [secondaryExperience, setSecondaryExperience] = useState(allExperiences[1])
  const [currentExploreIndex, setCurrentExploreIndex] = useState(2)
  const [isLoading, setIsLoading] = useState(true)
  const [isSwapping, setIsSwapping] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when page loads
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

  const handleExploreMore = () => {
    setIsLoading(true)
    setSecondaryExperience(allExperiences[currentExploreIndex])
    setCurrentExploreIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % allExperiences.length
      return nextIndex === allExperiences.findIndex(exp => exp.id === mainExperience.id)
        ? (nextIndex + 1) % allExperiences.length
        : nextIndex
    })
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleSwapExperience = () => {
    setIsSwapping(true)
    setTimeout(() => {
      setMainExperience(secondaryExperience)
      setSecondaryExperience(mainExperience)
      setIsSwapping(false)
    }, 300)
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                <AnimatePresence mode="wait">
                  {selectedExperience ? (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="lg:col-span-3"
                    >
                      <ExperienceDetail
                        experience={selectedExperience}
                        onClose={() => setSelectedExperience(null)}
                      />
                    </motion.div>
                  ) : (
                    <>
                      <motion.div
                        key={mainExperience.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className={`card ${mainExperience.color} ${mainExperience.textColor} p-8 rounded-3xl flex flex-col lg:col-span-2 h-[calc(560px+1.5rem)] cursor-pointer hover:scale-[1.02] transition-transform relative group`}
                        onClick={() => setSelectedExperience(mainExperience)}
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium mb-2">{mainExperience.id}.</div>
                          <h3 className="text-3xl font-bold mb-3">{mainExperience.position}</h3>
                          <p className="text-xl font-medium mb-8">{mainExperience.company}</p>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                              <p className="text-base leading-relaxed">{mainExperience.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {mainExperience.achievements?.map((achievement, index) => (
                                  <li key={index} className="text-base leading-relaxed">{achievement}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {mainExperience.technologies?.map((tech, index) => (
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
                            {mainExperience.period}
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
                            <h3 className="text-2xl font-bold mb-3">Discover More Stories</h3>
                            <p className="text-base mb-6">Every experience is a unique journey</p>
                            <div className="flex flex-wrap gap-2">
                              {allExperiences.map((exp, index) => (
                                exp.id !== mainExperience.id && exp.id !== secondaryExperience.id && (
                                  <span key={index} className="px-3 py-1 bg-black/10 rounded-full text-sm">
                                    {exp.company}
                                  </span>
                                )
                              ))}
                            </div>
                          </div>

                          <div className="mt-auto pt-6 flex items-center justify-end">
                            <motion.div 
                              className="flex items-center text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity"
                            >
                              Explore Another Story <RefreshCcw className="ml-2 h-4 w-4" />
                            </motion.div>
                          </div>
                        </motion.div>

                        <AnimatePresence mode="wait">
                          {secondaryExperience && (
                            <motion.div
                              key={secondaryExperience.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className={`card ${secondaryExperience.color} ${secondaryExperience.textColor} p-8 rounded-3xl flex flex-col h-[270px] cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden group`}
                              onClick={handleSwapExperience}
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
                                <div className="text-sm font-medium mb-2">{secondaryExperience.id}.</div>
                                <h3 className="text-2xl font-bold mb-3">{secondaryExperience.position}</h3>
                                <p className="font-medium mb-4">{secondaryExperience.company}</p>
                                <p className="text-sm leading-relaxed">{secondaryExperience.description}</p>
                              </div>

                              <div className="mt-auto pt-6 flex items-center justify-between">
                                <div className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                                  {secondaryExperience.period}
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
    </main>
  )
}
