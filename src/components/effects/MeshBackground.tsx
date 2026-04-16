'use client'

import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

interface MeshBackgroundProps {
  variant?: 'hero' | 'cta'
}

export function MeshBackground({ variant = 'hero' }: MeshBackgroundProps) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    // Set defaults so gradient is centered on touch/reduced-motion
    document.documentElement.style.setProperty('--mx', '50%')
    document.documentElement.style.setProperty('--my', '50%')

    if (prefersReduced) return
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    document.addEventListener('mousemove', handler, { passive: true })
    return () => document.removeEventListener('mousemove', handler)
  }, [prefersReduced])

  const isHero = variant === 'hero'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        zIndex: 0,
        background: isHero
          ? 'radial-gradient(ellipse 600px 400px at var(--mx, 50%) var(--my, 50%), rgba(212, 168, 83, 0.04) 0%, transparent 70%)'
          : 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(212, 168, 83, 0.04) 0%, transparent 70%)',
        transition: 'background 0.3s ease',
      }}
    />
  )
}
