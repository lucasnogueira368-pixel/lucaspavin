import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import { faqs } from '@/data/faqs'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--heading-font',
  weight: ['600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--body-font',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--label-font',
  weight: ['500'],
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Lucas Pavin',
      jobTitle: 'Desenvolvedor Web',
      url: SITE_URL,
      sameAs: [
        'https://instagram.com/lucaspavin.dev',
        'https://www.linkedin.com/in/lucas-pavin-nogueira-2261771ba/',
      ],
    },
    {
      '@type': 'ProfessionalService',
      name: 'Lucas Pavin - Desenvolvimento Web',
      description: 'Criação de landing pages profissionais de alta performance para negócios locais',
      url: SITE_URL,
      provider: { '@type': 'Person', name: 'Lucas Pavin' },
      areaServed: { '@type': 'Country', name: 'BR' },
      serviceType: ['Web Development', 'Landing Page', 'SEO', 'Mobile-First Design'],
    },
    {
      '@type': 'CreativeWork',
      name: 'Mona Analia Franco',
      url: 'https://monaanaliadialogo.com.br/',
      creator: { '@type': 'Person', name: 'Lucas Pavin' },
      description: 'Landing page para empreendimento imobiliario de alto padrao em Sao Paulo',
    },
    {
      '@type': 'CreativeWork',
      name: 'Shiba Pet Care',
      url: 'https://shiba-petcare.netlify.app/',
      creator: { '@type': 'Person', name: 'Lucas Pavin' },
      description: 'Site profissional para pet shop premium',
    },
    {
      '@type': 'CreativeWork',
      name: 'Patas de Casa Essence',
      url: 'https://www.patasdecasaessence.com.br/',
      creator: { '@type': 'Person', name: 'Lucas Pavin' },
      description: 'Landing page para pet spa premium',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title: 'Lucas Pavin | Desenvolvedor Web | Landing Pages Profissionais',
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lucas Pavin | Desenvolvedor Web',
    description: 'Lucas Pavin — Desenvolvedor Web. Landing pages, sistemas e automação pra empresas. PageSpeed 90+, SEO técnico completo.',
    url: SITE_URL,
    siteName: 'Lucas Pavin',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucas Pavin - Desenvolvedor Web' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Pavin | Desenvolvedor Web',
    description: 'Lucas Pavin — Desenvolvedor Web. Landing pages, sistemas e automação pra empresas. PageSpeed 90+, SEO técnico completo.',
    images: ['/og-image.jpg'],
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
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  )
}
