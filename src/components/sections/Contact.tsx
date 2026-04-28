'use client'

import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { MatrixText } from '@/components/effects/MatrixText'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

export function Contact() {
  return (
    <section
      id="contato"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212, 168, 83, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10 text-center">
        <ScrollReveal>
          <div className="flex justify-center">
            <SectionEyebrow number="07" label="Contato" />
          </div>
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
            <MatrixText text="Eleve o nível do seu negócio" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              color: 'var(--text-1)',
              maxWidth: '640px',
              lineHeight: 1.7,
              marginTop: '24px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            Me conta sobre seu projeto. Primeira conversa sem compromisso, a partir de 3 dias para seu site ficar pronto.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-all duration-300 hover:scale-[1.03]"
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.95rem',
                fontWeight: 600,
                background: 'var(--gold-gradient)',
                color: 'var(--bg-deep)',
                padding: '12px 36px',
                borderRadius: '12px',
                boxShadow: 'var(--gold-glow)',
              }}
            >
              Chamar no WhatsApp
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.85rem',
                color: 'var(--text-3)',
              }}
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
