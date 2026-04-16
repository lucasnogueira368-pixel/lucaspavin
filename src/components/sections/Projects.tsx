'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { projects } from '@/data/projects'

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const regular = projects.filter((p) => !p.featured)

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

        <div className="mt-14 flex flex-col gap-6">
          {featured && (
            <ScrollReveal delay={0.1}>
              <ProjectCard project={featured} />
            </ScrollReveal>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regular.map((project, i) => (
              <ScrollReveal key={project.slug} delay={0.15 + i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
