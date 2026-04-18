'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

interface ProjectCarouselProps {
  slides: string[]
  name: string
  url: string
}

const arrowStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  background: 'rgba(5, 5, 5, 0.7)',
  border: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-0)',
  zIndex: 2,
  cursor: 'pointer',
}

export function ProjectCarousel({ slides, name, url }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const hasMultiple = slides.length > 1

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const handleKey = useCallback((fn: () => void) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      fn()
    }
  }, [])

  return (
    <div>
      <div className="relative group" role="region" aria-label={`Galeria ${name}`}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir site ${name} em nova aba`}
          className="block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          style={{ borderRadius: 'var(--radius)' }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-video">
                    <Image
                      src={slide}
                      alt={`${name} - imagem ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay sutil ao hover */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(180deg, transparent 60%, rgba(5, 5, 5, 0.4) 100%)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </a>

        {hasMultiple && (
          <>
            <button
              onClick={scrollPrev}
              onKeyDown={handleKey(scrollPrev)}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={arrowStyle}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              onKeyDown={handleKey(scrollNext)}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={arrowStyle}
              aria-label="Próximo slide"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Indicador discreto abaixo da imagem */}
      <div
        aria-hidden="true"
        className="inline-flex items-center gap-1.5 mt-3"
        style={{
          fontFamily: 'var(--label-font)',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
          padding: '4px 0',
        }}
      >
        <span>Clique para ver ao vivo</span>
        <ArrowUpRight size={12} />
      </div>
    </div>
  )
}
