'use client'

import { useEffect, useRef } from 'react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { DifferentialCard } from '@/components/ui/DifferentialCard'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const differentials = [
  {
    icon: 'Smartphone',
    title: 'Mobile-First',
    metric: '80% do tráfego brasileiro vem do celular',
    description: 'Design pensado primeiro pro mobile, depois escalado pra desktop. Zero adaptação forçada.',
  },
  {
    icon: 'Zap',
    title: 'Performance',
    metric: 'PageSpeed 90+ garantido',
    description: 'Imagens otimizadas, código enxuto, hospedagem rápida. Carrega em menos de 2 segundos em 4G.',
  },
  {
    icon: 'Search',
    title: 'SEO + GEO',
    metric: 'Visível no Google e nas buscas por IA',
    description: 'Meta tags, schema.org, sitemap e markup semântico. Seu site encontrado no Google, ChatGPT, Perplexity e Gemini.',
  },
  {
    icon: 'Heart',
    title: 'Atendimento Exclusivo',
    metric: 'Cada projeto tratado como único',
    description: 'Nada de modelo pronto ou atendimento em massa. Converso direto com você, entendo seu negócio e adapto tudo pra sua realidade.',
  },
  {
    icon: 'PenTool',
    title: 'Copy que Converte',
    metric: 'Estrutura pensada pra vender, não só mostrar',
    description: 'Headlines, CTAs e ordem das seções que guiam o visitante até a ação.',
  },
  {
    icon: 'BarChart3',
    title: 'Dados em Tempo Real',
    metric: 'GA4 + Meta Pixel + Search Console',
    description: 'Você vê quantos entraram, de onde vieram e o que clicaram. Decisão baseada em dado.',
  },
]

export function Differentials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('diff-anim-active', entry.isIntersecting)
      },
      { rootMargin: '100px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((diff, i) => (
            <ScrollReveal key={diff.title} delay={0.08 + i * 0.06}>
              <DifferentialCard {...diff} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
