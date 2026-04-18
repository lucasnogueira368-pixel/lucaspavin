'use client'

import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ScoreCard } from './ScoreCard'
import type { Project } from '@/data/projects'

interface ProjectDescriptionProps {
  project: Project
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const [expanded, setExpanded] = useState(false)
  const prefersReduced = useReducedMotion()
  const descriptionId = `project-desc-${project.slug}`

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

      {/* Desktop: texto completo */}
      <div className="hidden md:block">
        <p
          className="mt-4"
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'var(--text-1)',
          }}
        >
          {description}
        </p>
      </div>

      {/* Mobile: colapsavel */}
      <div className="md:hidden">
        <div
          id={descriptionId}
          className="mt-4 relative"
          style={{
            maxHeight: expanded ? '1000px' : '4.8em',
            overflow: 'hidden',
            transition: prefersReduced ? 'none' : 'max-height 0.4s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              color: 'var(--text-1)',
            }}
          >
            {description}
          </p>
          {!expanded && (
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '2em',
                background: 'linear-gradient(transparent, var(--bg-surface))',
              }}
            />
          )}
        </div>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            aria-expanded={expanded}
            aria-controls={descriptionId}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            style={{
              fontFamily: 'var(--label-font)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--accent)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              textTransform: 'uppercase',
              padding: '4px 0',
            }}
          >
            Ler mais
          </button>
        )}
      </div>

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
