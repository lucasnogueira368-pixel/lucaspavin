import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL, WHATSAPP_URL_LINKS } from '@/lib/constants'
import { TrackedLink } from '@/components/links/TrackedLink'

/**
 * Rota /links — destino do link da bio do Instagram.
 *
 * Fora do padrao de SEO do resto do site: e noindex/nofollow de proposito.
 * A pagina nao tem conteudo proprio para ranquear e disputa as mesmas
 * palavras-chave da home; indexada, competiria com ela nos resultados.
 * Por isso tambem NAO entra no sitemap.ts nem no llms.txt.
 * As tags Open Graph ficam: noindex nao impede o preview no WhatsApp.
 */
export const metadata: Metadata = {
  title: 'Lucas Pavin | Criação de sites e landing pages',
  description:
    'Fale comigo no WhatsApp, veja sites que eu entreguei ou confira preços e prazos. Criação de sites e landing pages em São Caetano e região.',
  // Self-canonical: sem isto a rota herda o canonical '/' do layout raiz e
  // sai apontando para a home, sinal conflitante com o noindex abaixo.
  alternates: { canonical: '/links' },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'Lucas Pavin | Criação de sites e landing pages',
    description:
      'Fale comigo no WhatsApp, veja sites que eu entreguei ou confira preços e prazos.',
    url: `${SITE_URL}/links`,
    siteName: 'Lucas Pavin',
    locale: 'pt_BR',
    type: 'website',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucas Pavin - Desenvolvedor Web' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Pavin | Criação de sites e landing pages',
    description:
      'Fale comigo no WhatsApp, veja sites que eu entreguei ou confira preços e prazos.',
    images: ['/og-image.jpg'],
  },
  other: { 'theme-color': '#050505' },
}

export default function LinksPage() {
  return (
    <main
      id="main-content"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: '100svh',
        background: 'var(--bg-deep)',
        padding: '24px',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 30%, rgba(212, 168, 83, 0.07) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative flex flex-col items-center text-center"
        style={{ zIndex: 10, width: '100%', maxWidth: '360px' }}
      >
        {/* Sem foto de rosto disponivel: o logo entra como fallback previsto
            no briefing. Trocar por <Image src="/images/lucas.webp" width={96}
            height={96} className="rounded-full object-cover" /> quando houver. */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            border: '1px solid var(--border-hover)',
            background: 'var(--bg-surface)',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logo.webp"
            alt="Lucas Pavin"
            width={64}
            height={39}
            priority
            fetchPriority="high"
            style={{ width: '64px', height: '39px' }}
          />
        </div>

        <h1
          style={{
            fontFamily: 'var(--heading-font)',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 7vw, 2rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--text-0)',
            marginTop: '20px',
          }}
        >
          Lucas Pavin
        </h1>

        <p
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.95rem',
            lineHeight: 1.4,
            color: 'var(--text-1)',
            marginTop: '8px',
          }}
        >
          Criação de sites e landing pages
        </p>

        <p
          style={{
            fontFamily: 'var(--label-font)',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-3)',
            marginTop: '6px',
          }}
        >
          São Caetano e região
        </p>

        <div
          className="flex flex-col"
          style={{ width: '100%', gap: '12px', marginTop: '32px' }}
        >
          <TrackedLink href={WHATSAPP_URL_LINKS} event="links_whatsapp" variant="primary" external>
            Falar comigo no WhatsApp
          </TrackedLink>

          <TrackedLink href="/#projetos" event="links_portfolio" variant="secondary">
            Ver sites que eu entreguei
          </TrackedLink>

          <TrackedLink href="/#servicos" event="links_precos" variant="secondary">
            Preços e prazos
          </TrackedLink>
        </div>

        <div
          className="flex flex-col items-center"
          style={{ gap: '8px', marginTop: '32px' }}
        >
          <Image
            src="/images/logo.webp"
            alt=""
            aria-hidden="true"
            width={40}
            height={24}
            style={{ width: '40px', height: '24px', opacity: 0.5 }}
          />
          <Link
            href="/"
            className="transition-colors hover:opacity-70"
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.8rem',
              color: 'var(--text-3)',
            }}
          >
            lucaspavin.com.br
          </Link>
        </div>
      </div>
    </main>
  )
}
