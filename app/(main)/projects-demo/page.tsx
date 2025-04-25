"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Smartphone, Globe, Play } from "lucide-react"
import { useRouter } from "next/navigation"
import { projectDemos, ProjectDemo } from "./data"
import Loading from "@/components/ui/loading"

const categoryColors = {
  web: "from-blue-500 to-cyan-500",
  ai: "from-purple-500 to-pink-500",
  mobile: "from-green-500 to-emerald-500",
  other: "from-orange-500 to-amber-500"
}

const statusColors = {
  live: "bg-green-500/10 text-green-500",
  beta: "bg-yellow-500/10 text-yellow-500",
  maintenance: "bg-blue-500/10 text-blue-500"
}

const statusLabels = {
  live: "Live",
  beta: "Beta",
  maintenance: "Maintenance"
}

export default function ProjectsDemoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
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
      router.push("/")
    }, 1300)
  }

  const filteredProjects = selectedCategory
    ? projectDemos.filter(project => project.category === selectedCategory)
    : projectDemos

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
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Project Demos</h1>
                  <p className="text-sm opacity-60">Explore my project demos and online experiences</p>
                </div>

                {/* Category Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {Object.entries(categoryColors).map(([category, gradient]) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
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
                          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${gradient} blur-sm opacity-50`}
                          layoutId="glow"
                        />
                      )}
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

                {/* Project List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      {/* Decorative Border */}
                      <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors" />
                      
                      {/* Top Right Decoration */}
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* Bottom Left Decoration */}
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* Status Label */}
                      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </div>

                      {/* Project Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-70 mb-4">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Link Buttons */}
                        <div className="flex flex-wrap gap-2">
                          {project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
                            >
                              {link.type === 'github' && <Github className="mr-1.5 h-4 w-4" />}
                              {link.type === 'website' && <Globe className="mr-1.5 h-4 w-4" />}
                              {link.type === 'appstore' && <Smartphone className="mr-1.5 h-4 w-4" />}
                              {link.type === 'playstore' && <Smartphone className="mr-1.5 h-4 w-4" />}
                              {link.type === 'demo' && <Play className="mr-1.5 h-4 w-4" />}
                              {link.label}
                              <ExternalLink className="ml-1.5 h-3 w-3 opacity-60" />
                            </a>
                          ))}
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