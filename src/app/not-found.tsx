import type { Metadata } from 'next'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Página não encontrada | Lucas Pavin',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ minHeight: '100svh', background: 'var(--bg-deep)' }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(212, 168, 83, 0.10) 0%, transparent 55%)',
        }}
      />

      <div className="relative" style={{ zIndex: 1, maxWidth: '560px' }}>
        <span
          className="font-label"
          style={{
            display: 'inline-block',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            marginBottom: '24px',
          }}
        >
          Erro 404
        </span>

        <div
          aria-hidden="true"
          className="gold-metallic font-heading"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(5rem, 22vw, 10rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
          }}
        >
          404
        </div>

        <h1
          className="font-heading"
          style={{
            marginTop: '24px',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            letterSpacing: '-0.03em',
            color: 'var(--text-0)',
          }}
        >
          Página não encontrada
        </h1>

        <p
          className="font-body"
          style={{
            marginTop: '16px',
            fontSize: '1rem',
            color: 'var(--text-1)',
            lineHeight: 1.7,
          }}
        >
          O endereço que você tentou acessar não existe ou foi movido. Volte pra
          home ou me chama direto, eu te ajudo.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ marginTop: '40px' }}
        >
          <Link
            href="/"
            className="inline-flex items-center transition-all duration-300 hover:scale-[1.03] font-body"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              background: 'var(--gold-gradient)',
              color: 'var(--bg-deep)',
              padding: '12px 32px',
              borderRadius: '12px',
              boxShadow: 'var(--gold-glow)',
            }}
          >
            Voltar ao início
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)] font-body"
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-2)',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(212, 168, 83, 0.3)',
              textUnderlineOffset: '6px',
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
