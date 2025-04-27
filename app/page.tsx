"use client"

import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
    </main>
  )
}