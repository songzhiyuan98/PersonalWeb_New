import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        {/* 主加载动画 */}
        <div className="relative w-24 h-24">
          {/* 外圈装饰 */}
          <motion.div
            className="absolute inset-0 border-2 border-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* 主圆环 */}
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
            <div className="w-16 h-16 border-4 border-transparent border-t-white border-r-white/30 border-b-white/10 border-l-white/20 rounded-full" />
          </motion.div>

          {/* 内圈装饰 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-8 h-8 border-2 border-white/20 rounded-full" />
          </motion.div>

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
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </div>

        {/* 文字动画 */}
        <div className="flex gap-1">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 1,
                repeatType: "reverse",
              }}
              className="text-white/80 text-sm font-medium tracking-wider"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* 进度指示器 */}
        <motion.div
          className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-white/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
} 