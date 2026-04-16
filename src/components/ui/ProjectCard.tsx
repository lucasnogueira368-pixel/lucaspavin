'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Wrapper = project.url ? 'a' : 'div'
  const linkProps = project.url
    ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper {...linkProps} className="block group">
      <div className="glass-card overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot do projeto ${project.name}`}
            width={0}
            height={0}
            sizes="100vw"
            priority={project.featured}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <span
              className="absolute top-4 right-4"
              style={{
                fontFamily: 'var(--label-font)',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--bg-deep)',
                background: 'var(--gold-gradient)',
                padding: '5px 14px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              Destaque
            </span>
          )}
        </div>

        <div className="p-6 flex items-center justify-between">
          <div>
            <h3
              style={{
                fontFamily: 'var(--heading-font)',
                fontWeight: 600,
                fontSize: '1.15rem',
                color: 'var(--text-0)',
              }}
            >
              {project.name}
            </h3>
            <p
              className="mt-1"
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.88rem',
                color: 'var(--text-2)',
              }}
            >
              {project.niche}
            </p>
          </div>
          {project.url ? (
            <ExternalLink
              size={18}
              style={{ color: 'var(--text-3)', flexShrink: 0, transition: 'color 0.3s' }}
              className="group-hover:!text-[var(--accent)]"
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--label-font)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-3)',
              }}
            >
              Em breve
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
