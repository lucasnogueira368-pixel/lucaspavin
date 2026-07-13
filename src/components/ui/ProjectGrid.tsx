'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectCardCompact } from './ProjectCardCompact'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import type { Project } from '@/data/projects'

interface ProjectGridProps {
  projects: Project[]
}

const arrowStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(5, 5, 5, 0.7)',
  border: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-0)',
  cursor: 'pointer',
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selected, setSelected] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <>
      {/* Desktop: grid 2 colunas.
          Escala futura: se passar de ~8 cases, subir para lg:grid-cols-3. */}
      <div className="hidden md:grid grid-cols-2 gap-7">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.08}>
            <ProjectCardCompact project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile: carrossel — 1 card por vez + setas + contador */}
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div key={project.slug} className="flex-[0_0_100%] min-w-0">
                <ProjectCardCompact project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Projeto anterior"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{ ...arrowStyle, opacity: canPrev ? 1 : 0.35 }}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Próximo projeto"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{ ...arrowStyle, opacity: canNext ? 1 : 0.35 }}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>

          <span
            aria-live="polite"
            style={{
              fontFamily: 'var(--label-font)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--text-3)',
            }}
          >
            {selected + 1} / {projects.length}
          </span>
        </div>
      </div>
    </>
  )
}
