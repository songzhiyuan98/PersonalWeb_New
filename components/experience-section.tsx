"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    period: "2023 - Present",
    company: "Tech Innovators Inc.",
    position: "Junior Full-Stack Developer",
    description:
      "Working on enterprise applications, optimizing frontend performance, and implementing backend microservices architecture to improve system scalability. Using React, Node.js, and AWS technology stack.",
    achievements: [
      "Refactored frontend architecture, improving page load speed by 40%",
      "Designed and implemented a microservice API gateway",
      "Led a team of 3 developers for product iterations",
    ],
  },
  {
    period: "2022 - 2023",
    company: "Data Analytics Startup",
    position: "AI Research Intern",
    description:
      "Participated in developing data visualization platforms, implementing complex data analysis features, and building responsive user interfaces and high-performance backend APIs.",
    achievements: [
      "Developed real-time data analysis dashboards",
      "Optimized database queries, improving query speed by 60%",
      "Implemented automated testing workflows",
    ],
  },
  {
    period: "2021 - 2022",
    company: "University AI Lab",
    position: "Research Assistant",
    description:
      "Assisted in AI research projects, focusing on natural language processing and computer vision applications.",
    achievements: [
      "Contributed to a published research paper on NLP",
      "Developed a prototype for image recognition",
      "Presented findings at a student research symposium",
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row">
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }} className="md:w-1/3 mb-4 md:mb-0">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-accent font-medium">{exp.position}</p>
                </motion.div>

                <motion.div
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.3 }}
                  className="md:w-2/3 md:pl-8 border-l-2 border-gray-100"
                >
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
