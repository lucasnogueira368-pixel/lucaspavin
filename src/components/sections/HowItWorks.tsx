'use client'

import { MessageCircle, Palette, Code, Send, Settings } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const iconMap: Record<string, React.ComponentType<{ size: number; style?: React.CSSProperties }>> = {
  MessageCircle, Palette, Code, Send, Settings,
}

const steps = [
  { number: '01', icon: 'MessageCircle', title: 'Briefing', description: 'Conversa inicial via WhatsApp. Entendo seu negócio, público e objetivo.' },
  { number: '02', icon: 'Palette', title: 'Design', description: 'Você recebe o layout navegável em até 2 dias úteis. 2 rodadas de revisão inclusas.' },
  { number: '03', icon: 'Code', title: 'Desenvolvimento', description: 'Código próprio, otimizado, responsivo. Nada de template.' },
  { number: '04', icon: 'Send', title: 'Entrega', description: 'De 3 a 5 dias úteis conforme o pacote. Domínio, SSL e monitoramento configurados.' },
  { number: '05', icon: 'Settings', title: 'Manutenção', description: 'Planos opcionais cuidando de hospedagem, backup, alterações e SEO ativo.' },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionEyebrow number="04" label="Processo" />

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
            Como Funciona
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal */}
        <ol className="mt-14 hidden md:grid list-none" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Code
            return (
              <li key={step.number} className="relative list-none">
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute"
                    style={{
                      top: '23px',
                      left: '50%',
                      width: '100%',
                      height: '1px',
                      background: 'var(--border-hover)',
                      zIndex: 0,
                    }}
                  />
                )}
                <ScrollReveal delay={0.1 + i * 0.08} className="w-full flex flex-col items-center text-center">
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--border-hover)',
                      zIndex: 1,
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span
                    className="mt-4 gold-metallic"
                    style={{
                      fontFamily: 'var(--label-font)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--heading-font)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--text-0)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--body-font)',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'var(--text-1)',
                    }}
                  >
                    {step.description}
                  </p>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>

        {/* Mobile: vertical */}
        <ol className="mt-14 flex flex-col gap-0 md:hidden list-none">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Code
            return (
              <li key={step.number} className="flex gap-5 list-none">
                <ScrollReveal delay={0.1 + i * 0.08} className="flex gap-5 w-full">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'var(--accent-glow)',
                        border: '1px solid var(--border-hover)',
                      }}
                    >
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex-1"
                        style={{ width: '1px', background: 'var(--border)', marginTop: '8px', marginBottom: '8px', minHeight: '40px' }}
                      />
                    )}
                  </div>
                  <div className="pb-10">
                    <span
                      className="gold-metallic"
                      style={{
                        fontFamily: 'var(--label-font)',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="mt-1"
                      style={{
                        fontFamily: 'var(--heading-font)',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        color: 'var(--text-0)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: 'var(--body-font)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        color: 'var(--text-1)',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
