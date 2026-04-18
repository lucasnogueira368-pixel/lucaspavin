'use client'

import type { Testimonial } from '@/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-card h-full flex flex-col" style={{ padding: '32px' }}>
      {/* Aspas decorativas */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '4rem',
          lineHeight: 0.6,
          color: 'var(--accent)',
          opacity: 0.15,
        }}
      >
        &ldquo;
      </span>

      <p
        className="mt-2 flex-1"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: 'var(--text-1)',
          fontStyle: 'italic',
        }}
      >
        {testimonial.text}
      </p>

      <div className="mt-6 flex items-center gap-3">
        {/* Foto ou placeholder */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-elevated)',
            backgroundImage: testimonial.photo ? `url(${testimonial.photo})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {!testimonial.photo && (
            <span
              style={{
                fontFamily: 'var(--heading-font)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-2)',
              }}
            >
              {testimonial.name.charAt(0)}
            </span>
          )}
        </div>

        <div>
          <p
            style={{
              fontFamily: 'var(--heading-font)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--text-0)',
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.75rem',
              color: 'var(--text-2)',
            }}
          >
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
