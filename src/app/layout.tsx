import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--heading-font',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--body-font',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--label-font',
  weight: ['400', '500'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Lucas Pavin',
      jobTitle: 'Desenvolvedor Web',
      url: SITE_URL,
      sameAs: ['https://instagram.com/lucaspavin.dev'],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Lucas Pavin - Desenvolvimento Web',
      description: 'Criacao de sites profissionais e landing pages de alta performance',
      url: SITE_URL,
      provider: { '@type': 'Person', name: 'Lucas Pavin' },
      areaServed: { '@type': 'Country', name: 'BR' },
      serviceType: ['Web Development', 'Landing Page', 'SEO'],
    },
  ],
}

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lucas Pavin | Desenvolvedor Web',
    description: 'Sites profissionais que convertem visitantes em clientes',
    url: SITE_URL,
    siteName: 'Lucas Pavin',
    locale: 'pt_BR',
    type: 'website',
    // images: [{ url: '/og-image.png', width: 1200, height: 630 }], // TODO: adicionar og-image.png em public/
  },
  twitter: {
    card: 'summary',
    title: 'Lucas Pavin | Desenvolvedor Web',
    description: 'Sites profissionais que convertem visitantes em clientes',
    // images: ['/og-image.png'], // TODO: adicionar og-image.png em public/
  },
  other: { 'theme-color': '#050505' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--bg-deep)] focus:rounded-lg"
        >
          Pular para o conteudo
        </a>
        {children}
      </body>
    </html>
  )
}
