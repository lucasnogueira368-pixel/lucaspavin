'use client'

import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  multiplier?: number
  className?: string
}

export function MagneticButton({ children, multiplier = 0.15, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const handleMove = (e: React.MouseEvent) => {
    if (prefersReduced) return
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    ref.current.style.transform = `translate(${dx * multiplier}px, ${dy * multiplier}px)`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.2s var(--ease-out)' }}
    >
      {children}
    </div>
  )
}
