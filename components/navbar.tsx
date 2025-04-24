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
          Zhiyuan Song.
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

      {/* 全屏菜单 */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6 md:p-12">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              yourname.
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center flex-grow">
            <ul className="text-center space-y-8">
              <li>
                <Link
                  href="/education"
                  className="text-4xl font-bold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  教育经历
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-4xl font-bold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  技术展示
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-4xl font-bold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  工作经历
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-4xl font-bold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  项目展示
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
