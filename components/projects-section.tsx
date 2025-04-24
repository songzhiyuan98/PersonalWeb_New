"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Data Analytics Platform",
    description:
      "A data analysis tool combining artificial intelligence to help businesses extract valuable insights from large datasets.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    link: "#",
    github: "#",
    details:
      "This project uses React for the frontend interface, Python backend for data analysis logic, and integrates TensorFlow for predictive analytics. Deployed on AWS to ensure high availability and scalability. Features include real-time data visualization, automatic anomaly detection, and predictive analytics.",
  },
  {
    title: "E-commerce Microservices Platform",
    description:
      "A modern e-commerce platform based on microservices architecture, supporting high concurrency and flexible scaling.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Docker"],
    link: "#",
    github: "#",
    details:
      "This project uses Next.js to build the frontend, providing SSR-optimized user experience. The backend uses Node.js microservices architecture, with each service responsible for specific business functions. MongoDB stores data, and Docker containerizes deployment. Implements user authentication, product management, shopping cart, and payment integration.",
  },
  {
    title: "Smart Home Control System",
    description:
      "A central system for connecting and controlling smart home devices, supporting voice commands and automated scenarios.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Express", "WebSockets", "IoT"],
    link: "#",
    github: "#",
    details:
      "This project uses Vue.js to build a responsive user interface, Express to provide backend APIs, and WebSockets for real-time device communication. The system supports multiple smart home protocols and can control lighting, temperature, security devices, etc. Features include voice control, scene automation, and energy usage analysis.",
  },
  {
    title: "Collaborative Document Editing Tool",
    description:
      "A real-time multi-user collaborative document editing platform, similar to Google Docs but with more customization features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    link: "#",
    github: "#",
    details:
      "This project uses React to build the editor interface and Socket.io to implement real-time collaboration. The backend uses Node.js to handle requests and Redis to store temporary editing states. Supports rich text editing, real-time collaboration, version history, comments, and suggestion mode. Optimized for team collaboration.",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gray-100 opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gray-100 opacity-50 transform translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="horizontal-scroll-container pb-8">
          <div className="flex space-x-6 md:space-x-8 px-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="card-3d flex-shrink-0 w-[300px] md:w-[400px] bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <div className="p-6 card-3d-content">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button onClick={() => setSelectedProject(index)} className="text-accent font-medium hover:underline">
                    Learn more
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project details modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative h-64">
                <Image
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{projects[selectedProject].title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[selectedProject].tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{projects[selectedProject].details}</p>

                <div className="flex space-x-4">
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
