'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const badges = ['Mobile-First', 'Performance', 'SEO', 'Otimização para IA']


export function About() {
  return (
    <section
      id="sobre"
      className="section-padding"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <ScrollReveal>
              <SectionEyebrow number="01" label="Sobre" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="flex flex-col gap-5 mt-6"
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'var(--text-1)',
                }}
              >
                <p>
                  Desenvolvo landing pages sob medida para negócios que precisam de presença digital profissional.
                </p>
                <p>
                  Cada projeto é pensado do zero, com foco em performance, SEO e conversão. Sem templates, sem atalhos.
                </p>
                <p>
                  O resultado é um site rápido, bonito e que funciona.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 md:pt-14">
              <p
                style={{
                  fontFamily: 'var(--label-font)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-3)',
                }}
              >
                Especialidades
              </p>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    style={{
                      fontFamily: 'var(--label-font)',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--text-2)',
                      background: 'rgba(212, 168, 83, 0.06)',
                      border: '1px solid rgba(212, 168, 83, 0.1)',
                      padding: '8px 18px',
                      borderRadius: '24px',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
