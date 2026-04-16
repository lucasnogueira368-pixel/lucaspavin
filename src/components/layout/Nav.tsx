'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { MobileMenu } from './MobileMenu'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-open')
    } else {
      document.body.classList.remove('nav-open')
    }
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full transition-all duration-300"
        style={{
          zIndex: 100,
          height: '64px',
          background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}
        >
          <a
            href="#"
            className="transition-colors"
            style={{
              fontFamily: 'var(--heading-font)',
              fontWeight: 600,
              fontSize: '1.1rem',
              color: 'var(--text-0)',
            }}
          >
            LP
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors"
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '0.85rem',
                  color: 'var(--text-2)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--text-1)',
                transform: menuOpen ? 'translateY(3.75px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--text-1)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--text-1)',
                transform: menuOpen ? 'translateY(-3.75px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
