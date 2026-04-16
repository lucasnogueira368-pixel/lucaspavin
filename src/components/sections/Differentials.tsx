'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { DifferentialCard } from '@/components/ui/DifferentialCard'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const differentials = [
  {
    icon: 'Zap',
    title: 'Performance Máxima',
    description: 'PageSpeed 90+ garantido. Seu site carrega rápido em qualquer dispositivo.',
  },
  {
    icon: 'Palette',
    title: 'Design Exclusivo',
    description: 'Cada projeto é único. Zero templates, 100% personalizado para seu negócio.',
  },
  {
    icon: 'Search',
    title: 'SEO Completo',
    description: 'Otimizado para Google e buscas por IA (ChatGPT, Gemini, Perplexity).',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile-First',
    description: 'Pensado primeiro para celular, perfeito em qualquer tela.',
  },
  {
    icon: 'Clock',
    title: 'Entrega Rápida',
    description: 'Seu site profissional pronto em 5 dias úteis.',
  },
  {
    icon: 'Code',
    title: 'Código Próprio',
    description: 'Desenvolvimento do zero, sem WordPress ou construtores genéricos. Performance e liberdade total.',
  },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-padding"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionEyebrow number="03" label="Diferenciais" />
          <h2
            className="mt-2"
            style={{
              fontFamily: 'var(--heading-font)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--text-0)',
            }}
          >
            O Que Entrego
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((diff, i) => (
            <ScrollReveal key={diff.title} delay={0.1 + i * 0.06}>
              <DifferentialCard {...diff} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
