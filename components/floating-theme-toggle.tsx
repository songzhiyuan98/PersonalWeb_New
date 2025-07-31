/**
 * 浮动主题切换组件
 * 固定在页面右下角的主题切换按钮，支持深色和浅色模式切换
 */

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { motion } from "framer-motion"

export default function FloatingThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // 避免hydration不匹配
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
              <div className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 flex items-center justify-center backdrop-blur-sm">
        <div className="w-5 h-5 bg-black/20 dark:bg-white/20 rounded-full animate-pulse" />
      </div>
    )
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />
      case "dark":
        return <Moon className="h-5 w-5" />
      default:
        return <Monitor className="h-5 w-5" />
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getThemeIcon()}
      </motion.div>
      
      {/* 主题指示器 */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-black/30 dark:border-white/30"
        animate={{
          backgroundColor: theme === "dark" ? "#8b5cf6" : "#f97316"
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* 脉冲环效果 */}
      <motion.div
        className="absolute inset-0 rounded-full border border-black/20 dark:border-white/20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  )
} 