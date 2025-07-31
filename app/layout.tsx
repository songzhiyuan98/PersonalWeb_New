import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingThemeToggle from "@/components/floating-theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zhiyuan Song | Personal Website",
  description: "Full-Stack Engineer & AI Developer Portfolio",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-black dark:bg-black bg-white text-black dark:text-white transition-colors duration-300">
            {children}
            <FloatingThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}