'use client'

import { useScroll, motion, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const prefersReduced = useReducedMotion()

  if (prefersReduced) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0"
      style={{
        zIndex: 9998,
        height: '2px',
        background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))',
        scaleX: scrollYProgress,
        transformOrigin: 'left',
      }}
    />
  )
}
