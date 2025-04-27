"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, BookOpen, GraduationCap, Calendar, ChevronRight, X, Award, Clock, Bookmark } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Loading from '@/components/ui/loading'
import { CourseItem, courses, categories, categoryColors } from './data'

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleBack = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/')
    }, 1300)
  }

  const filteredCourses = selectedCategory === "all" 
    ? courses.sort((a, b) => {
        // 将日期字符串转换为可比较的格式
        const getDateValue = (dateStr: string) => {
          if (dateStr.includes("Now")) return new Date().getTime();
          if (dateStr.includes("-")) {
            const [start, end] = dateStr.split("-").map(d => d.trim());
            return new Date(end || start).getTime();
          }
          const [season, year] = dateStr.split(" ");
          const seasonMap = { "Spring": 0, "Summer": 1, "Fall": 2, "Winter": 3 };
          return new Date(parseInt(year), seasonMap[season as keyof typeof seasonMap]).getTime();
        };
        return getDateValue(b.date) - getDateValue(a.date);
      })
    : courses
        .filter(course => course.category === selectedCategory)
        .sort((a, b) => {
          const getDateValue = (dateStr: string) => {
            if (dateStr.includes("Now")) return new Date().getTime();
            if (dateStr.includes("-")) {
              const [start, end] = dateStr.split("-").map(d => d.trim());
              return new Date(end || start).getTime();
            }
            const [season, year] = dateStr.split(" ");
            const seasonMap = { "Spring": 0, "Summer": 1, "Fall": 2, "Winter": 3 };
            return new Date(parseInt(year), seasonMap[season as keyof typeof seasonMap]).getTime();
          };
          return getDateValue(b.date) - getDateValue(a.date);
        });

  return (
    <main className="h-[calc(100vh-64px)] bg-black text-white flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 md:px-12 py-4">
              <motion.button
                onClick={handleBack}
                className="inline-flex items-center text-sm hover:text-gray-300 transition-colors"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Education</h1>
                  <p className="text-sm opacity-60">Explore my academic journey and expertise</p>
                </div>

                {/* 分类选择器 */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`relative p-4 rounded-lg text-center transition-all ${
                        selectedCategory === category.id 
                          ? 'bg-white text-black' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedCategory === category.id && (
                        <motion.div
                          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${
                            categoryColors[category.id as keyof typeof categoryColors] || 'from-gray-500 to-gray-700'
                          } blur-sm opacity-50`}
                          layoutId="glow"
                        />
                      )}
                      
                      {/* 装饰性边框 */}
                      <div className={`absolute inset-0 rounded-lg border ${
                        selectedCategory === category.id 
                          ? 'border-white' 
                          : 'border-white/5 group-hover:border-white/10'
                      }`} />

                      {/* 右上角装饰 */}
                      <div className="absolute top-0 right-0 w-4 h-4">
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                      </div>

                      {/* 左下角装饰 */}
                      <div className="absolute bottom-0 left-0 w-4 h-4">
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                      </div>

                      <span className="text-2xl mb-2 block">{category.icon}</span>
                      <h2 className="text-sm font-semibold relative z-10">{category.name}</h2>
                    </motion.button>
                  ))}
                </div>

                {/* 课程展示区 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-white/5 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-all duration-300"
                      onClick={() => setSelectedCourse(course)}
                    >
                      {/* 装饰性边框 */}
                      <div className="absolute inset-0 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors" />
                      
                      {/* 右上角装饰 */}
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/20 transition-colors" />
                      </div>

                      {/* 左下角装饰 */}
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-white/20 transition-colors" />
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                          {course.category === "university" ? (
                            <GraduationCap className="h-6 w-6" />
                          ) : (
                            <BookOpen className="h-6 w-6" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <div className="flex items-center gap-2 text-sm opacity-60">
                            <Calendar className="h-4 w-4" />
                            <span>{course.date}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm opacity-70 line-clamp-2 mb-4">{course.description}</p>
                      
                      <div className="flex items-center justify-end">
                        <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 课程详情弹窗 */}
            <AnimatePresence>
              {selectedCourse && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50"
                  onClick={() => setSelectedCourse(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-black/80 rounded-lg p-8 max-w-2xl w-full backdrop-blur-xl relative group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* 装饰性边框 */}
                    <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors" />
                    
                    {/* 右上角装饰 */}
                    <div className="absolute top-0 right-0 w-12 h-12">
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-white/30 transition-colors" />
                    </div>

                    {/* 左下角装饰 */}
                    <div className="absolute bottom-0 left-0 w-12 h-12">
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-white/30 transition-colors" />
                    </div>

                    {/* 关闭按钮 */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      onClick={() => setSelectedCourse(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </motion.button>

                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-8">
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="relative w-16 h-16 flex items-center justify-center bg-white/10 rounded-lg"
                        >
                          {selectedCourse.category === "university" ? (
                            <GraduationCap className="h-8 w-8" />
                          ) : (
                            <BookOpen className="h-8 w-8" />
                          )}
                        </motion.div>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="flex-1"
                        >
                          <h3 className="text-2xl font-semibold mb-2">{selectedCourse.title}</h3>
                          <div className="flex items-center gap-4 text-sm opacity-60">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{selectedCourse.date}</span>
                            </div>
                            {selectedCourse.grade && (
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                <span>{selectedCourse.grade}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Course Description</h4>
                          <p className="text-base opacity-70 leading-relaxed">
                            {selectedCourse.description}
                          </p>
                        </div>

                        {selectedCourse.detail && (
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Details</h4>
                            <p className="text-base opacity-70 leading-relaxed">
                              {selectedCourse.detail}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center gap-6">
                          {selectedCourse.semester && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">Semester</p>
                                <p className="text-base font-medium">{selectedCourse.semester}</p>
                              </div>
                            </div>
                          )}
                          {selectedCourse.grade && (
                            <div className="flex items-center gap-2">
                              <Bookmark className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">Grade</p>
                                <p className="text-base font-medium">{selectedCourse.grade}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
