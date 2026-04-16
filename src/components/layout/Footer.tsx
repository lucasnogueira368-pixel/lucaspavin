import { Camera, MessageCircle } from 'lucide-react'
import { NAV_LINKS, INSTAGRAM_URL, WHATSAPP_URL, LINKEDIN_URL } from '@/lib/constants'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border)',
        padding: '48px 24px',
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:opacity-70"
              style={{ fontFamily: 'var(--body-font)', fontSize: '0.85rem', color: 'var(--text-2)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p
          className="order-last md:order-none"
          style={{ fontFamily: 'var(--body-font)', fontSize: '0.8rem', color: 'var(--text-3)' }}
        >
          Desenvolvido por Lucas Pavin &copy; {year}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-70"
            style={{ color: 'var(--text-2)' }}
            aria-label="Instagram"
          >
            <Camera size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-70"
            style={{ color: 'var(--text-2)' }}
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-70"
            style={{ color: 'var(--text-2)' }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
