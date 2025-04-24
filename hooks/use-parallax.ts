"use client"

import { useEffect, type RefObject } from "react"

interface ParallaxOptions {
  speed: number
  direction?: "up" | "down" | "left" | "right"
}

export function useParallax(ref: RefObject<HTMLElement>, options: ParallaxOptions) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const { speed, direction = "up" } = options

    const handleScroll = () => {
      const scrollY = window.scrollY
      const rect = element.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (isInView) {
        let translateValue = 0

        switch (direction) {
          case "up":
            translateValue = scrollY * speed
            element.style.transform = `translateY(-${translateValue}px)`
            break
          case "down":
            translateValue = scrollY * speed
            element.style.transform = `translateY(${translateValue}px)`
            break
          case "left":
            translateValue = scrollY * speed
            element.style.transform = `translateX(-${translateValue}px)`
            break
          case "right":
            translateValue = scrollY * speed
            element.style.transform = `translateX(${translateValue}px)`
            break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, options])
}
