import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_URL, WHATSAPP_URL_LINKS } from '@/lib/constants'
import { TrackedLink } from '@/components/links/TrackedLink'
import { SocialLinks } from '@/components/links/SocialLinks'

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
  title: 'Lucas Pavin | Landing pages de alta conversão',
  description:
    'Landing pages de alta conversão para negócios que querem crescer. Fale comigo no WhatsApp, veja sites que eu entreguei ou confira preços e prazos.',
  // Self-canonical: sem isto a rota herda o canonical '/' do layout raiz e
  // sai apontando para a home, sinal conflitante com o noindex abaixo.
  alternates: { canonical: '/links' },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'Lucas Pavin | Landing pages de alta conversão',
    description:
      'Landing pages de alta conversão para negócios que querem crescer. Fale comigo no WhatsApp ou veja os sites que eu entreguei.',
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
    title: 'Lucas Pavin | Landing pages de alta conversão',
    description:
      'Landing pages de alta conversão para negócios que querem crescer. Fale comigo no WhatsApp ou veja os sites que eu entreguei.',
    images: ['/og-image.jpg'],
  },
  other: { 'theme-color': '#050505' },
}

export default function LinksPage() {
  return (
    <main id="main-content" className="links-page">
      {/* Retrato de meio corpo sangrando na tela — topo no celular, metade
          direita no desktop. <picture> em vez de next/image porque o build e
          estatico (output: 'export' + images.unoptimized): o avif precisa ser
          oferecido na mao, como nos cards de projeto. */}
      <picture className="links-photo">
        <source srcSet="/images/lucas-pavin.avif" type="image/avif" />
        <img
          src="/images/lucas-pavin.webp"
          alt="Lucas Pavin, desenvolvedor de landing pages"
          width={904}
          height={1210}
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="links-veil" aria-hidden="true" />

      <div className="links-content">
        <h1
          className="links-title"
          style={{
            fontFamily: 'var(--heading-font)',
            fontWeight: 700,
            fontSize: 'clamp(1.9rem, 6vw, 3rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--text-0)',
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
            marginTop: '10px',
            maxWidth: '340px',
          }}
        >
          Landing pages de alta conversão para negócios que querem crescer.
        </p>

        <div style={{ marginTop: '14px' }}>
          <SocialLinks />
        </div>

        <div
          className="flex flex-col"
          style={{ width: '100%', gap: '12px', marginTop: '26px' }}
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

        {/* marginTop fica no CSS (.links-footer): no celular e 'auto', para o
            rodape descer ate a base da tela. Inline aqui, venceria a regra. */}
        <div className="links-footer flex flex-col" style={{ gap: '8px' }}>
          <Image
            src="/images/logo.webp"
            alt=""
            aria-hidden="true"
            width={40}
            height={24}
            style={{ width: '40px', height: '24px' }}
          />
          {/* <a> nativo, nao next/link: o next/link pre-carregaria o JS da
              home inteira (~73 KB) em segundo plano, gastando o 4G de quem
              chega pelo Instagram — e aqui nao ha React para navegar. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- ver comentario acima */}
          <a
            href="/"
            className="transition-colors hover:opacity-70"
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.8rem',
              color: 'var(--text-3)',
            }}
          >
            lucaspavin.com.br
          </a>
        </div>
      </div>
    </main>
  )
}
