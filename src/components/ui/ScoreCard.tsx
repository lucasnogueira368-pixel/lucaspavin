'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface ScoreCardProps {
  score: number
  label: string
  variant?: 'large' | 'small'
}

export function ScoreCard({ score, label, variant = 'large' }: ScoreCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayScore, setDisplayScore] = useState(0)
  const prefersReduced = useReducedMotion()
  const animatedRef = useRef(false)

  const isLarge = variant === 'large'
  const size = isLarge ? 280 : 32
  const strokeWidth = isLarge ? 8 : 2.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (prefersReduced) {
      setDisplayScore(score)
      animatedRef.current = true
      return
    }
    if (!isInView || animatedRef.current) return

    animatedRef.current = true
    const duration = 1200
    const start = performance.now()
    let rafId: number
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayScore(Math.round(eased * score))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [score, isInView, prefersReduced])

  const offset = circumference * (1 - (animatedRef.current ? score : 0) / 100)

  if (!isLarge) {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center gap-1.5 flex-1"
        aria-label={`${label}: ${score} de 100`}
        style={{ minWidth: '0', flexBasis: '0' }}
      >
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(16, 185, 129, 0.85)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={prefersReduced ? circumference * (1 - score / 100) : offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{
                transition: prefersReduced ? 'none' : 'stroke-dashoffset 1.2s cubic-bezier(0.33, 1, 0.68, 1)',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--text-0)',
                lineHeight: 1,
              }}
            >
              {displayScore}
            </span>
          </div>
        </div>
        <span
          style={{
            fontFamily: 'var(--label-font)',
            fontSize: '0.55rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: 'var(--text-2)',
            textAlign: 'center',
            lineHeight: 1.25,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center"
      aria-label={`Pontuação de ${label}: ${score} de 100`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(16, 185, 129, 0.85)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={prefersReduced ? circumference * (1 - score / 100) : offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
              transition: prefersReduced ? 'none' : 'stroke-dashoffset 1.2s cubic-bezier(0.33, 1, 0.68, 1)',
            }}
          />
        </svg>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <span
            style={{
              fontFamily: 'var(--body-font)',
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--text-0)',
              lineHeight: 1,
            }}
          >
            {displayScore}
          </span>
        </div>
      </div>
      <span
        className="mt-3"
        style={{
          fontFamily: 'var(--label-font)',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-2)',
        }}
      >
        {label}
      </span>
    </div>
  )
}
