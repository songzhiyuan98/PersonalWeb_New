"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            whileHover={{ y: -5, color: "#FF6600" }}
            transition={{ duration: 0.3 }}
            href="mailto:contact@example.com"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, color: "#FF6600" }}
            transition={{ duration: 0.3 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, color: "#FF6600" }}
            transition={{ duration: 0.3 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, color: "#FF6600" }}
            transition={{ duration: 0.3 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} | Designed & Built with ❤️</p>
        </motion.div>
      </div>
    </footer>
  )
}
