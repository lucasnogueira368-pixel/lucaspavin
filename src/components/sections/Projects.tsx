'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ProjectCarousel } from '@/components/ui/ProjectCarousel'
import { ProjectDescription } from '@/components/ui/ProjectDescription'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { projects } from '@/data/projects'

export function Projects() {
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

        <div className="mt-14 flex flex-col" style={{ gap: '140px' }}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={0.1}>
              <div>
                {/* Case indicator */}
                <span
                  className="gold-metallic mb-6 block"
                  style={{
                    fontFamily: 'var(--label-font)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Desktop: 2 colunas */}
                <div className="hidden md:grid gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <ProjectCarousel slides={project.slides} name={project.name} url={project.url} />
                  <ProjectDescription project={project} />
                </div>

                {/* Mobile: stack vertical */}
                <div className="md:hidden flex flex-col gap-6">
                  <ProjectCarousel slides={project.slides} name={project.name} url={project.url} />
                  <ProjectDescription project={project} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
