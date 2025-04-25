import type { Metadata } from "next"
import type React from "react"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Zhiyuan Song",
  description: "Personal portfolio website of Zhiyuan Song",
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {children}
    </div>
  )
}
