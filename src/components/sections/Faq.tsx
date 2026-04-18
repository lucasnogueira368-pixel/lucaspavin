'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { faqs } from '@/data/faqs'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container-main" style={{ maxWidth: '800px' }}>
        <ScrollReveal>
          <SectionEyebrow number="05" label="FAQ" />
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
            Perguntas Frequentes
          </h2>
        </ScrollReveal>

        <div className="mt-14 flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <ScrollReveal key={i} delay={0.06 + i * 0.04}>
                <div
                  style={{
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between text-left transition-colors"
                    style={{
                      padding: '24px 0',
                      fontFamily: 'var(--heading-font)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--text-0)' : 'var(--text-1)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ flex: 1, paddingRight: '16px' }}>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      style={{
                        color: 'var(--accent)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--body-font)',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            color: 'var(--text-1)',
                            paddingBottom: '24px',
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
