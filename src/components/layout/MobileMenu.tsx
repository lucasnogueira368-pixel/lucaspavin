'use client'

import { useRef } from 'react'
import { NAV_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const touchStartX = useRef<number | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        onClose()
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 60) onClose()
    touchStartX.current = null
  }

  return (
    <>
      {/* Overlay (fundo escurecido, clique fecha, comeca abaixo do nav) */}
      <div
        className="fixed md:hidden"
        onClick={onClose}
        aria-hidden="true"
        style={{
          zIndex: 85,
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.45)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: open
            ? 'opacity 0.3s ease, visibility 0s 0s'
            : 'opacity 0.3s ease, visibility 0s 0.3s',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      />

      {/* Drawer lateral direita (comeca abaixo do nav para nao cobrir o X) */}
      <div
        className="fixed md:hidden flex flex-col items-start"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          zIndex: 95,
          top: '64px',
          right: 0,
          bottom: 0,
          width: '70%',
          minWidth: '260px',
          maxWidth: '360px',
          paddingTop: '32px',
          paddingLeft: '36px',
          paddingRight: '36px',
          gap: '32px',
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderLeft: '1px solid var(--border)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          boxShadow: open ? '-8px 0 32px rgba(0, 0, 0, 0.4)' : 'none',
        }}
        aria-hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleClick}
            className="transition-colors"
            style={{
              fontFamily: 'var(--heading-font)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-1)',
            }}
            tabIndex={open ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
