"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturedProjectsSection from "@/components/featured-projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        

      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturedProjectsSection />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-20"
      >
        <div className="w-6 h-10 border-2 border-black/20 dark:border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-black/60 dark:bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </main>
  )
}