'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
          background: scrolled || menuOpen ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}
        >
          <a
            href="#"
            className="transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            aria-label="Lucas Pavin - ir para o topo"
          >
            <Image
              src="/images/logo.png"
              alt="Lucas Pavin"
              width={48}
              height={30}
              priority
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-7">
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
            className="md:hidden relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            style={{
              width: '44px',
              height: '44px',
              zIndex: 110,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              className="absolute block transition-all duration-300"
              style={{
                background: 'var(--text-1)',
                width: '20px',
                height: '1.5px',
                left: '12px',
                top: '16px',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)',
                transformOrigin: 'center',
              }}
            />
            <span
              className="absolute block transition-all duration-300"
              style={{
                background: 'var(--text-1)',
                width: '20px',
                height: '1.5px',
                left: '12px',
                top: '22px',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute block transition-all duration-300"
              style={{
                background: 'var(--text-1)',
                width: '20px',
                height: '1.5px',
                left: '12px',
                top: '28px',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                transformOrigin: 'center',
              }}
            />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
