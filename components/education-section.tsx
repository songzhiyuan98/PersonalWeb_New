"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationItems = [
  {
    year: "2021 - Present",
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    description: "Focusing on Artificial Intelligence and Machine Learning",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    year: "2023",
    degree: "AI Research Internship",
    institution: "OpenAI",
    description: "Worked on natural language processing models and applications",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    year: "2022",
    degree: "Full-Stack Development Certification",
    institution: "Coursera",
    description: "Completed advanced web development specialization",
    icon: <Award className="h-6 w-6" />,
  },
]

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="education" ref={ref} className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line"></div>

          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block w-1/2"></div>

              <div className="z-10 timeline-dot">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                  {item.icon}
                </div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`z-10 bg-white rounded-xl shadow-md p-6 ml-6 md:ml-0 ${
                  index % 2 === 0 ? "md:ml-6 md:mr-0" : "md:mr-6 md:ml-0"
                } md:w-1/2`}
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <h4 className="text-lg text-gray-600 mb-2">{item.institution}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
