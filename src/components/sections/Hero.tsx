'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import { TextSplit } from '@/components/effects/TextSplit'

const MeshBackground = dynamic(
  () => import('@/components/effects/MeshBackground').then((m) => ({ default: m.MeshBackground })),
  { ssr: false }
)

const RainingLetters = dynamic(
  () => import('@/components/effects/RainingLetters').then((m) => ({ default: m.RainingLetters })),
  { ssr: false }
)

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh', background: 'var(--bg-deep)' }}
    >
      <MeshBackground variant="hero" />
      <RainingLetters />

      <div className="container-main relative flex flex-col items-center text-center py-32" style={{ zIndex: 10 }}>
        <div
          className="inline-block mb-8"
          style={{
            fontFamily: 'var(--label-font)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '8px 20px',
            borderRadius: '24px',
            border: '1px solid rgba(212, 168, 83, 0.15)',
            background: 'rgba(212, 168, 83, 0.06)',
          }}
        >
          <span className="gold-metallic">Desenvolvedor Web</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--heading-font)',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            letterSpacing: '-0.045em',
            lineHeight: 0.9,
            color: 'var(--text-0)',
          }}
        >
          <TextSplit text="Lucas Pavin" />
        </h1>

        <motion.p
          className="mt-8"
          style={{
            fontFamily: 'var(--body-font)',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'var(--text-1)',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}
          initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Sites profissionais que convertem visitantes em clientes
        </motion.p>

        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--accent-dark)' }} />
          <span
            style={{
              fontFamily: 'var(--label-font)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
            }}
          >
            scroll
          </span>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent-dark)' }} />
        </motion.div>
      </div>
    </section>
  )
}
