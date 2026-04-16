'use client'

import { NAV_LINKS } from '@/lib/constants'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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

  return (
    <>
      <div
        className="fixed inset-0 z-90 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden"
        style={{
          paddingTop: '64px',
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: open
            ? 'opacity 0.3s ease, visibility 0s 0s'
            : 'opacity 0.3s ease, visibility 0s 0.3s',
          height: '100dvh',
        }}
        aria-hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleClick}
            className="font-[family-name:var(--heading-font)] font-semibold text-[var(--text-1)] hover:text-[var(--accent)] transition-colors"
            style={{ fontSize: '2rem' }}
            tabIndex={open ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-80 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  )
}
