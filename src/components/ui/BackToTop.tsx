'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 800)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      style={{
        bottom: '24px',
        left: '24px',
        zIndex: 70,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'transparent',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-3)',
        cursor: 'pointer',
      }}
    >
      <ChevronUp size={18} aria-hidden="true" />
    </button>
  )
}
