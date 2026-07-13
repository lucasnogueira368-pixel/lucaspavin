'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ProjectCarousel } from '@/components/ui/ProjectCarousel'
import { ProjectDescription } from '@/components/ui/ProjectDescription'
import { ProjectGrid } from '@/components/ui/ProjectGrid'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { projects } from '@/data/projects'

export function Projects() {
  const hero = projects[0]
  const rest = projects.slice(1)

  return (
    <section
      id="projetos"
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionEyebrow number="02" label="Projetos" />
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
            Trabalhos Recentes
          </h2>
        </ScrollReveal>

        {/* Case herói (projects[0]): galeria + descrição completa com 4 anéis */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <ProjectCarousel slides={hero.slides} name={hero.name} url={hero.url} />
            <ProjectDescription project={hero} />
          </div>
        </ScrollReveal>

        {rest.length > 0 && (
          <>
            {/* Divisor */}
            <div className="flex items-center gap-4" style={{ marginTop: '40px' }}>
              <span
                style={{
                  fontFamily: 'var(--label-font)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-3)',
                }}
              >
                Mais trabalhos
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            {/* Grid compacto (desktop) / carrossel um-a-um (mobile) */}
            <div className="mt-8">
              <ProjectGrid projects={rest} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
