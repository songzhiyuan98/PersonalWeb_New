"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="py-6 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Zhiyuan Song
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex-1 text-right">
            <span className="mr-4">+1 909 551 8610</span>
            <span>•</span>
            <span className="ml-4">songzhiyuan98@gmail.com</span>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6 md:p-12">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
              Zhiyuan.
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center flex-grow">
            <ul className="text-center space-y-16">
              <li>
                <Link
                  href="/education"
                  className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Education</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 group-hover:bg-white transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Skills</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 group-hover:bg-white transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Experience</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 group-hover:bg-white transition-all duration-500"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-5xl md:text-6xl font-bold hover:text-gray-300 transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Projects</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 group-hover:bg-white transition-all duration-500"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <a 
                href="https://github.com/songzhiyuan98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center group"
              >
                <span className="mr-2">GitHub</span>
                <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
              </a>
              <a 
                href="https://www.linkedin.com/in/zhiyuan-song-761651217/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center group"
              >
                <span className="mr-2">LinkedIn</span>
                <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
              </a>
              <a 
                href="mailto:songzhiyuan98@gmail.com" 
                className="hover:text-white transition-colors flex items-center group"
              >
                <span className="mr-2">Email</span>
                <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300"></span>
              </a>
            </div>
            <div className="text-xs text-gray-500">
              © 2024 Zhiyuan Song. All rights reserved.
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
