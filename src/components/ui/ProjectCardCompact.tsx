'use client'

import { useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ScoreCard } from './ScoreCard'
import type { Project } from '@/data/projects'

interface ProjectCardCompactProps {
  project: Project
}

export function ProjectCardCompact({ project }: ProjectCardCompactProps) {
  const prefersReduced = useReducedMotion()
  const src = project.slides[0]
  const avif = src.replace(/\.webp$/, '.avif')

  return (
    <div className="group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir site ${project.name} em nova aba`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        style={{ borderRadius: 'var(--radius)' }}
      >
        {/* Mídia 16:9 (aspect-ratio fixo -> CLS zero) */}
        <div
          className="relative aspect-video overflow-hidden"
          style={{ borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
        >
          <picture>
            <source srcSet={avif} type="image/avif" />
            <img
              src={src}
              alt={`${project.name} — ${project.segment}`}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                prefersReduced ? '' : 'group-hover:scale-[1.02]'
              }`}
            />
          </picture>

          {/* Overlay narrativo — revelado no hover (mouse) E no foco por teclado */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,5,5,.15), rgba(5,5,5,.62) 55%, rgba(5,5,5,.88))',
              transition: prefersReduced ? 'none' : 'opacity 0.35s var(--ease)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                color: 'var(--text-0)',
              }}
            >
              {project.result}
            </p>

            <div className="mt-3 flex items-start gap-2">
              <ScoreCard score={project.scores.performance} label="Desempenho" variant="small" />
              <ScoreCard score={project.scores.accessibility} label="Acessibilidade" variant="small" />
              <ScoreCard score={project.scores.bestPractices} label="Boas Praticas" variant="small" />
              <ScoreCard score={project.scores.seo} label="SEO" variant="small" />
            </div>

            <span
              className="mt-3 inline-flex items-center gap-1"
              style={{
                fontFamily: 'var(--label-font)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-bright)',
              }}
            >
              ver ao vivo <ArrowUpRight size={12} aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>

      {/* Rodapé sempre visível (nome nunca depende só do hover) */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span
            style={{
              fontFamily: 'var(--label-font)',
              fontSize: '0.62rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
            }}
          >
            {project.segment} &middot; {project.year}
          </span>

          <h3
            className="mt-1"
            style={{
              fontFamily: 'var(--heading-font)',
              fontWeight: 700,
              fontSize: '1.12rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-0)',
            }}
          >
            {project.name}
          </h3>

          {/* Resultado: visível só no mobile (no desktop vem pelo hover) */}
          <p
            className="md:hidden mt-2"
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.85rem',
              lineHeight: 1.55,
              color: 'var(--text-1)',
            }}
          >
            {project.result}
          </p>
        </div>

        {/* Chip: 1 anel de Desempenho, sempre visível */}
        <div className="shrink-0" style={{ width: '46px' }}>
          <ScoreCard score={project.scores.performance} label="Desemp." variant="small" />
        </div>
      </div>
    </div>
  )
}
