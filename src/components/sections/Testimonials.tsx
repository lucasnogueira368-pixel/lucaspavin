'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section
      id="depoimentos"
      className="section-padding"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionEyebrow number="05" label="Depoimentos" />
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
            O Que Dizem Meus Clientes
          </h2>
        </ScrollReveal>

        {/* Desktop: grid 3 colunas */}
        <div
          role="region"
          aria-label="Depoimentos de clientes"
          className="mt-14 hidden md:grid grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <TestimonialCard testimonial={t} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: carrossel */}
        <div
          role="region"
          aria-label="Depoimentos de clientes"
          className="mt-14 md:hidden relative"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-1">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  scrollPrev()
                }
              }}
              aria-label="Depoimento anterior"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-1)',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  scrollNext()
                }
              }}
              aria-label="Próximo depoimento"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-1)',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
