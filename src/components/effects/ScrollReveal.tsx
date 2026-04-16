'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export function ScrollReveal({ children, delay = 0, className, style }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className} style={{ ...style, textAlign: 'inherit' }}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ ...style, textAlign: 'inherit' }}
    >
      {children}
    </motion.div>
  )
}
