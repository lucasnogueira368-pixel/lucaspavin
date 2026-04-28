'use client'

import { Check } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import {
  WHATSAPP_URL_EXPRESS,
  WHATSAPP_URL_RENOVACAO,
  WHATSAPP_URL_COMPLETA,
  WHATSAPP_URL_PLANOS,
} from '@/lib/constants'

type Plan = {
  slug: 'express' | 'renovacao' | 'completa'
  name: string
  price: string
  payment: string
  deadline: string
  positioning: string
  features: string[]
  ctaLabel: string
  ctaUrl: string
  highlight?: boolean
  badge?: string
  tagline?: string
  /** Tailwind order class for mobile + desktop reset */
  orderClass: string
}

const plans: Plan[] = [
  {
    slug: 'express',
    name: 'Express',
    price: 'R$ 400',
    payment: 'em até 2x',
    deadline: '3 dias úteis',
    positioning: 'Pra quem está começando do zero e precisa de um site profissional rápido.',
    features: [
      'Landing page única, até 5 seções',
      'Briefing completo (1 reunião)',
      'Mobile-first com performance otimizada',
      'SEO técnico básico + GEO (otimização para IA)',
      'Integração WhatsApp',
      '2 rodadas de ajuste',
      'Checklist Go-Live',
    ],
    ctaLabel: 'Começar do zero',
    ctaUrl: WHATSAPP_URL_EXPRESS,
    orderClass: 'order-2 lg:order-1',
  },
  {
    slug: 'renovacao',
    name: 'Renovação',
    price: 'R$ 500',
    payment: 'em até 2x',
    deadline: '3 dias úteis',
    positioning: 'Pra quem já tem site mas quer subir o nível técnico sem perder o que funciona.',
    tagline: 'Você não perde nada do que funciona. Ganha o que falta.',
    features: [
      'Análise técnica do seu site atual',
      'Reconstrução completa do zero, usando o atual como referência',
      'Briefing reduzido (a base você já tem)',
      'Mobile-first com performance otimizada (PageSpeed 90+)',
      'SEO técnico + GEO (otimização para IA)',
      'Integração WhatsApp',
      '2 rodadas de ajuste',
      'Migração de domínio (se aplicável)',
    ],
    ctaLabel: 'Renovar meu site',
    ctaUrl: WHATSAPP_URL_RENOVACAO,
    highlight: true,
    badge: '★ Novidade',
    orderClass: 'order-1 lg:order-2',
  },
  {
    slug: 'completa',
    name: 'Completa',
    price: 'R$ 1.000',
    payment: 'em até 3x',
    deadline: '5 dias úteis',
    positioning: 'Pra quem precisa de presença digital robusta com várias seções e integrações.',
    features: [
      'Landing page completa, até 10 seções',
      'Briefing completo (1-2 reuniões)',
      'Mobile-first com performance otimizada (PageSpeed 95+)',
      'SEO técnico avançado + GEO + Schema.org',
      'WhatsApp + formulário + Google Analytics',
      'Banco de prova social (depoimentos, cases)',
      '3 rodadas de ajuste',
      'Checklist Go-Live',
    ],
    ctaLabel: 'Quero a Completa',
    ctaUrl: WHATSAPP_URL_COMPLETA,
    orderClass: 'order-3 lg:order-3',
  },
]

const monthlyPlans = [
  { name: 'Essencial', price: 'R$ 50/mês', includes: 'Hosting, backup, atualização técnica' },
  { name: 'Profissional', price: 'R$ 100/mês', includes: 'Essencial + 1 ajuste/mês + monitoramento SEO' },
  { name: 'Premium', price: 'R$ 200/mês', includes: 'Profissional + 3 ajustes/mês + relatório mensal' },
]

function PlanCard({ plan }: { plan: Plan }) {
  const isHighlight = plan.highlight

  return (
    <article
      aria-labelledby={`plan-${plan.slug}-title`}
      className="relative flex flex-col h-full w-full transition-all duration-300"
      style={{
        background: isHighlight ? 'rgba(212, 168, 83, 0.06)' : 'rgba(212, 168, 83, 0.04)',
        border: isHighlight ? '1px solid var(--accent)' : '1px solid rgba(212, 168, 83, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 'var(--radius)',
        padding: '36px 28px',
        boxShadow: isHighlight ? 'var(--gold-glow)' : 'none',
      }}
    >
      {plan.badge && (
        <span
          aria-label="Produto novo"
          className="absolute"
          style={{
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--accent)',
            color: 'var(--bg-deep)',
            fontFamily: 'var(--label-font)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            padding: '6px 14px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
          }}
        >
          {plan.badge}
        </span>
      )}

      <h3
        id={`plan-${plan.slug}-title`}
        className="gold-metallic"
        style={{
          fontFamily: 'var(--heading-font)',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {plan.name}
      </h3>

      <div className="mt-5" style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--heading-font)',
            fontSize: '2.4rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text-0)',
            lineHeight: 1,
          }}
        >
          {plan.price}
        </p>
        <p
          className="mt-2"
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.78rem',
            color: 'var(--text-2)',
          }}
        >
          valor único
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.78rem',
            color: 'var(--text-2)',
          }}
        >
          {plan.payment}
        </p>
        <p
          className="mt-3"
          style={{
            fontFamily: 'var(--label-font)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
          }}
        >
          {plan.deadline}
        </p>
      </div>

      <p
        className="mt-6"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          color: 'var(--text-1)',
          textAlign: 'center',
          minHeight: '60px',
        }}
      >
        {plan.positioning}
      </p>

      {plan.tagline && (
        <p
          className="mt-3"
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: '0.85rem',
            fontStyle: 'italic',
            color: 'var(--accent)',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          {plan.tagline}
        </p>
      )}

      <ul
        className="mt-6 pt-6 flex-1 list-none"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderTop: '1px solid var(--border)',
        }}
      >
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 list-none"
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              color: 'var(--text-1)',
            }}
          >
            <Check
              size={16}
              aria-hidden="true"
              style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02]"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: '0.9rem',
          fontWeight: 600,
          padding: '14px 24px',
          marginTop: '36px',
          borderRadius: '12px',
          textAlign: 'center',
          background: isHighlight ? 'var(--gold-gradient)' : 'transparent',
          color: isHighlight ? 'var(--bg-deep)' : 'var(--accent)',
          border: isHighlight ? 'none' : '1px solid var(--accent)',
          boxShadow: isHighlight ? 'var(--gold-glow)' : 'none',
        }}
      >
        {plan.ctaLabel}
      </a>
    </article>
  )
}

export function ServicesPlans() {
  return (
    <section
      id="servicos"
      className="section-padding"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container-main">
        <ScrollReveal>
          <SectionEyebrow number="05" label="Serviços & Planos" />
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
            Catálogo + transparência total
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: 1.7,
              color: 'var(--text-1)',
              maxWidth: '640px',
            }}
          >
            Três caminhos de entrada, mesmo padrão técnico. Escolha o que se encaixa no seu momento.
          </p>
        </ScrollReveal>

        {/* Cards principais */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal
              key={plan.slug}
              delay={0.08 + i * 0.08}
              className={`flex ${plan.orderClass}`}
            >
              <PlanCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Faixa de Planos Mensais */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-20"
            style={{
              background: 'rgba(212, 168, 83, 0.03)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '40px 32px 56px',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <p
                className="gold-metallic"
                style={{
                  fontFamily: 'var(--label-font)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Depois do site no ar
              </p>
              <h3
                style={{
                  fontFamily: 'var(--heading-font)',
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-0)',
                  lineHeight: 1.2,
                }}
              >
                Planos de Manutenção
              </h3>
              <p
                className="mt-3 lg:whitespace-nowrap"
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--text-1)',
                }}
              >
                Mantenha seu site atualizado, otimizado e cobrindo seu negócio sem virar dor de cabeça.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {monthlyPlans.map((mp) => (
                <div
                  key={mp.name}
                  style={{
                    padding: '20px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--heading-font)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-0)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {mp.name}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--heading-font)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {mp.price}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'var(--body-font)',
                      fontSize: '0.82rem',
                      lineHeight: 1.5,
                      color: 'var(--text-2)',
                    }}
                  >
                    {mp.includes}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <a
                href={WHATSAPP_URL_PLANOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-all duration-300 hover:scale-[1.02]"
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '12px 28px',
                  borderRadius: '12px',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  background: 'transparent',
                }}
              >
                Ver planos completos
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
