'use client'

import { ScoreCard } from './ScoreCard'
import type { Project } from '@/data/projects'

interface ProjectDescriptionProps {
  project: Project
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const description = `${project.context} ${project.objective} ${project.result}`

  return (
    <div className="flex flex-col justify-center h-full">
      <span
        style={{
          fontFamily: 'var(--label-font)',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}
      >
        {project.segment} &middot; {project.year}
      </span>

      <h3
        className="mt-2"
        style={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 700,
          fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
        }}
      >
        {project.name}
      </h3>

      {/* Descrição completa (visível sempre, mobile e desktop) */}
      <p
        className="mt-4"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: 'clamp(0.9rem, 2.5vw, 0.95rem)',
          lineHeight: 1.7,
          color: 'var(--text-1)',
        }}
      >
        {description}
      </p>

      {/* Badges de score */}
      <div className="mt-6 flex items-start gap-2 sm:gap-3" style={{ flexWrap: 'nowrap' }}>
        <ScoreCard score={project.scores.performance} label="Desempenho" variant="small" />
        <ScoreCard score={project.scores.accessibility} label="Acessibilidade" variant="small" />
        <ScoreCard score={project.scores.bestPractices} label="Boas Praticas" variant="small" />
        <ScoreCard score={project.scores.seo} label="SEO" variant="small" />
      </div>
    </div>
  )
}
