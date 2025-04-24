"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Database, Globe, Cpu, BrainCircuit, Layers } from "lucide-react"

const skills = [
  {
    name: "Frontend",
    icon: <Globe className="h-8 w-8" />,
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    name: "Backend",
    icon: <Code className="h-8 w-8" />,
    description: "Node.js, Express, Python, Django",
  },
  {
    name: "Databases",
    icon: <Database className="h-8 w-8" />,
    description: "MongoDB, PostgreSQL, Firebase",
  },
  {
    name: "DevOps",
    icon: <Cpu className="h-8 w-8" />,
    description: "Docker, AWS, CI/CD, Git",
  },
  {
    name: "AI/ML",
    icon: <BrainCircuit className="h-8 w-8" />,
    description: "TensorFlow, PyTorch, NLP, Computer Vision",
  },
  {
    name: "Architecture",
    icon: <Layers className="h-8 w-8" />,
    description: "Microservices, API Design, System Design",
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gray-100 opacity-50 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gray-100 opacity-50 transform -translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center rounded-full p-3 bg-gray-50 mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
