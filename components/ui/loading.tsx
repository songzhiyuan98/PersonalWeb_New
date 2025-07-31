/**
 * 加载动画组件
 * 采用与主页一致的设计风格，支持深色模式切换
 * 使用渐变色彩和动态效果，营造科技感
 */

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-8"
      >
        {/* 主加载动画 - 采用与hero section头像相似的设计 */}
        <div className="relative w-32 h-32">
          {/* 外圈光环效果 */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* 主圆环容器 */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-white/20 shadow-2xl">
            {/* 动态边框 */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-white/30 dark:border-white/30"
              animate={{ 
                borderColor: ["rgba(255,255,255,0.3)", "rgba(168,85,247,0.6)", "rgba(249,115,22,0.6)", "rgba(255,255,255,0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* 旋转的加载环 */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-20 h-20 border-4 border-transparent border-t-purple-400 border-r-orange-400/30 border-b-pink-400/10 border-l-blue-400/20 rounded-full" />
            </motion.div>

            {/* 内圈装饰环 */}
            <motion.div 
              className="absolute inset-4 rounded-full border border-white/20 dark:border-white/20"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* 中心点 */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full shadow-lg" />
            </motion.div>
          </div>
          
          {/* 装饰性元素 - 与hero section保持一致 */}
          <motion.div 
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "linear" }
            }}
          />
          
          <motion.div 
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 5, repeat: Infinity, ease: "linear" }
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.4, 1],
              y: [-8, 8, -8]
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 -right-6 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
            animate={{ 
              scale: [1, 1.3, 1],
              y: [8, -8, 8]
            }}
            transition={{ 
              scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        {/* 文字动画 - 采用与主页一致的渐变文字 */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
          >
            Loading
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-500 dark:text-gray-400 text-sm"
          >
            Preparing your experience...
          </motion.p>
        </div>

        {/* 进度指示器 - 采用渐变设计 */}
        <motion.div
          className="w-48 h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 底部装饰性文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm border border-purple-500/30 dark:border-purple-500/30 backdrop-blur-sm"
        >
          <motion.div 
            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">
            AI-Powered Developer
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
} 