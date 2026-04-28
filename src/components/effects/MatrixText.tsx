'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface MatrixTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  /** Total animation duration in ms (default 1400) */
  duration?: number
  /** Per-character cycle speed in ms (default 55) */
  cycleSpeed?: number
}

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHJKLMNPQRSTUVWXYZ'

export function MatrixText({
  text,
  className,
  style,
  duration = 1400,
  cycleSpeed = 55,
}: MatrixTextProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [output, setOutput] = useState(text)
  const startedRef = useRef(false)

  useEffect(() => {
    if (prefersReduced) {
      setOutput(text)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            startScramble()
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    let rafId: number | null = null

    function startScramble() {
      const chars = text.split('')
      const startTime = performance.now()
      // Each char locks at a staggered point (later chars settle later)
      const settleTimes = chars.map((c, i) => {
        if (c === ' ') return 0
        return (i / chars.length) * duration * 0.65 + duration * 0.2
      })
      let lastTick = 0

      const tick = (now: number) => {
        const elapsed = now - startTime

        if (now - lastTick >= cycleSpeed) {
          lastTick = now
          const next = chars
            .map((c, i) => {
              if (c === ' ') return ' '
              if (elapsed >= settleTimes[i]) return c
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            })
            .join('')
          setOutput(next)
        }

        if (elapsed < duration) {
          rafId = requestAnimationFrame(tick)
        } else {
          setOutput(text)
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    return () => {
      observer.disconnect()
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [text, duration, cycleSpeed, prefersReduced])

  return (
    <span ref={ref} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  )
}
