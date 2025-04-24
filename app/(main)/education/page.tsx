"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, BookOpen, GraduationCap, Calendar, ChevronRight, X, Award, Clock, Bookmark } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Loading from '@/components/ui/loading'

interface CourseItem {
  date: string
  title: string
  description: string
  category?: string
  detail?: string
  grade?: string
  semester?: string
}

const courses: CourseItem[] = [
  {
    date: "2022 - Now",
    title: "University of California, Santa Cruz",
    description: "Computer Science Major | GPA: 3.84",
    category: "university",
    detail: "在加州大学圣克鲁兹分校攻读计算机科学学士学位，专注于软件工程和人工智能方向。参与多个研究项目和实习，积累了丰富的实践经验。",
    grade: "3.84",
    semester: "2022 - 2026"
  },
  {
    date: "Fall 2022",
    title: "CSE 20: Beginning Python",
    description: "Data Types | Control Flow | OOP",
    category: "programming",
    detail: "学习Python编程基础，包括数据类型、控制流和面向对象编程。通过实践项目掌握了Python的核心概念和最佳实践。",
    grade: "A+",
    semester: "Fall 2022"
  },
  {
    date: "Winter 2023",
    title: "CSE 30: Prog Abs Python",
    description: "Data Structures | Algorithm Design | OOP",
    category: "programming"
  },
  {
    date: "Winter 2023",
    title: "CMPM 80K: Game Design Fundamentals",
    description: "Game Design Principles | Game Analysis | Gdevelop 5",
    category: "design"
  },
  {
    date: "Spring 2023",
    title: "CSE 13S: Computer Systems & C Programming",
    description: "C Programming | Command Line & Shell Programming | Debugging & Source Control",
    category: "systems"
  },
  {
    date: "Fall 2023",
    title: "MATH 21: Linear Algebra",
    description: "Linear Equations | Matrices & Determinants | Vector Spaces & Linear Transformations",
    category: "math"
  },
  {
    date: "Winter 2024",
    title: "CSE 16: Applied Discrete Mathematics",
    description: "Sets, Functions & Relations | Graph Theory | Counting Methods & Recurrence Relations",
    category: "math"
  },
  {
    date: "Spring 2024",
    title: "CSE 101: Algorithms & Abstract Data Structures",
    description: "Abstract Data Structures | Algorithm Design & Analysis | C/C++ Programming Practice",
    category: "algorithms"
  },
  {
    date: "Spring 2024",
    title: "STAT 131: Intro Probability Theory",
    description: "Bayes Theorem | Central Limit Theorem | Markov Chains",
    category: "math"
  },
  {
    date: "Fall 2024",
    title: "CSE 40: Intro to Machine Learning",
    description: "Data Cleaning | Data Analysis | Optimization Methods | Data Visualization",
    category: "ai"
  },
  {
    date: "Winter 2025",
    title: "CSE 102: Introduction to Analysis of Algorithms",
    description: "RAM Computation Model | Divide & Conquer | Branch & Bound | Dynamic Programming",
    category: "algorithms"
  },
  {
    date: "Winter 2025",
    title: "CSE 120: Computer Architecture",
    description: "Processor Design | Memory Hierarchy | Parallel Computing",
    category: "systems"
  },
  {
    date: "Winter 2025",
    title: "CSE 130: Computer Systems Design Principles",
    description: "Concurrency & Synchronization | Layered Design | System Performance Optimization",
    category: "systems"
  }
]

const categories = [
  { id: "all", name: "全部课程", icon: "📚" },
  { id: "university", name: "大学经历", icon: "🎓" },
  { id: "programming", name: "编程基础", icon: "💻" },
  { id: "algorithms", name: "算法与数据结构", icon: "🔍" },
  { id: "systems", name: "系统与架构", icon: "⚙️" },
  { id: "math", name: "数学理论", icon: "📐" },
  { id: "ai", name: "人工智能", icon: "🤖" },
  { id: "design", name: "设计", icon: "🎨" }
]

const categoryColors = {
  university: "from-blue-400 to-indigo-500",
  programming: "from-emerald-400 to-teal-500",
  algorithms: "from-purple-400 to-violet-500",
  systems: "from-orange-400 to-amber-500",
  math: "from-rose-400 to-pink-500",
  ai: "from-cyan-400 to-sky-500",
  design: "from-yellow-400 to-amber-500"
}

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
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

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
                返回首页
              </motion.button>
            </div>

            <div className="px-6 md:px-12 pb-8 flex-1 flex items-start">
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">教育经历</h1>
                  <p className="text-sm opacity-60">探索我的学习历程和专业知识</p>
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
                    className="bg-black/90 rounded-lg p-8 max-w-2xl w-full backdrop-blur-md relative"
                    onClick={(e) => e.stopPropagation()}
                  >
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
                          <h4 className="text-lg font-semibold mb-2">课程描述</h4>
                          <p className="text-base opacity-70 leading-relaxed">
                            {selectedCourse.description}
                          </p>
                        </div>

                        {selectedCourse.detail && (
                          <div>
                            <h4 className="text-lg font-semibold mb-2">详细内容</h4>
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
                                <p className="text-sm opacity-60">学期</p>
                                <p className="text-base font-medium">{selectedCourse.semester}</p>
                              </div>
                            </div>
                          )}
                          {selectedCourse.grade && (
                            <div className="flex items-center gap-2">
                              <Bookmark className="h-5 w-5 opacity-60" />
                              <div>
                                <p className="text-sm opacity-60">成绩</p>
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
