"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ChevronRight, ChevronLeft } from "lucide-react"
import { Project } from "../data"

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // 使用 useEffect 来确保只在客户端渲染
  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length)
    }
  }

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)
    }
  }

  return (
    <main className=" bg-black text-white">
      <div className="w-full mx-auto sm:px-0 lg:px-0 py-4 h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* 左侧内容 */}
          <div className="py-6 px-3 rounded-3xl">
            <div className="space-y-4">
              {/* 基本信息 */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">{project.title}</h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-white/80 mb-3">{project.description}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                    {project.period}
                  </span>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors"
                    >
                      查看项目
                    </a>
                  )}
                </div>
              </div>

              {/* 主要职责 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">主要职责</h3>
                <div className="space-y-2">
                  {project.detail.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-sm text-white/60">•</span>
                      <p className="text-sm text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 技术栈 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="space-y-4 sm:space-y-6">
            {/* 轮播图 */}
            {project.images && project.images.length > 0 && (
              <div className="relative h-60 sm:h-72 lg:h-96 rounded-3xl overflow-hidden group">
                <Image
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} 项目图片`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 flex items-center justify-between">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-black/50 rounded-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 bg-black/50 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-white/80 max-w-md">{project.description}</p>
                </div>
              </div>
            )}

            {/* 两个色块 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 左侧色块 */}
              <div className="bg-[#E99A9A] text-black p-4 rounded-3xl">
                <div className="flex mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-black/20"></div>
                    <div className="w-6 h-6 rounded-full bg-black/30"></div>
                    <div className="w-6 h-6 rounded-full bg-black/40"></div>
                  </div>
                  <div className="ml-2 text-xs">+90</div>
                </div>

                <div className="text-xl font-bold mb-2">
                  4.75 <span className="text-xs font-normal">/ 5</span>
                </div>

                <div className="text-xs">
                  {project.achievements[0]}
                  <br />
                  {project.achievements[1]}
                </div>
              </div>

              {/* 右侧色块 */}
              <div className="bg-[#ECD98C] text-black p-4 rounded-3xl">
                <div className="text-2xl font-bold mb-4">design</div>

                <div className="text-xs">
                  {project.achievements[2]}
                  <br />
                  {project.achievements[3]}
                </div>

                <div className="flex justify-end mt-3">
                  <button className="p-2 bg-white rounded-full">
                    <ArrowLeft className="h-3 w-3 text-black rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右下角返回按钮 */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors inline-flex items-center text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回项目列表
        </button>
      </div>
    </main>
  )
} 