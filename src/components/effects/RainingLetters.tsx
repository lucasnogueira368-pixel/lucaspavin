'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const ALL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&*#$%'
const CHAR_COUNT = 40
const FLICKER_COUNT = 2

interface CharData {
  char: string
  x: number
  y: number
  speed: number
}

type IdleHandle = number
type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => IdleHandle
  cancelIdleCallback?: (h: IdleHandle) => void
}

export function RainingLetters() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const container = containerRef.current
    if (!container) return

    let started = false
    let cleanup: (() => void) | null = null

    const initRain = () => {
      const chars: CharData[] = []
      const fragment = document.createDocumentFragment()
      const spans: HTMLSpanElement[] = []

      for (let i = 0; i < CHAR_COUNT; i++) {
        const data: CharData = {
          char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          speed: 0.02 + Math.random() * 0.06,
        }
        chars.push(data)

        const span = document.createElement('span')
        span.textContent = data.char
        span.style.cssText = `
          position:absolute;
          left:${data.x}%;
          font-family:var(--label-font),monospace;
          font-size:1.2rem;
          font-weight:300;
          color:rgba(212,168,83,0.07);
          opacity:0.4;
          pointer-events:none;
          will-change:transform;
          transform:translate(-50%,-50%) translateY(0);
        `
        spans.push(span)
        fragment.appendChild(span)
      }

      container.appendChild(fragment)

      let lastFlicker = 0
      const activeSet = new Set<number>()

      const loop = (timestamp: number) => {
        for (let i = 0; i < chars.length; i++) {
          chars[i].y += chars[i].speed
          if (chars[i].y >= 105) {
            chars[i].y = -5
            chars[i].x = Math.random() * 100
            chars[i].char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)]
            spans[i].textContent = chars[i].char
            spans[i].style.left = `${chars[i].x}%`
          }
          spans[i].style.transform = `translate(-50%,-50%) translateY(${chars[i].y}vh)`
        }

        if (timestamp - lastFlicker > 150) {
          lastFlicker = timestamp
          for (const idx of activeSet) {
            spans[idx].className = ''
          }
          activeSet.clear()
          for (let i = 0; i < FLICKER_COUNT; i++) {
            const idx = Math.floor(Math.random() * chars.length)
            activeSet.add(idx)
            spans[idx].className = 'rain-active'
          }
        }

        animRef.current = requestAnimationFrame(loop)
      }

      animRef.current = requestAnimationFrame(loop)

      return () => {
        cancelAnimationFrame(animRef.current)
        container.innerHTML = ''
      }
    }

    const start = () => {
      if (started) return
      started = true
      cleanup = initRain()
    }

    const idleWin = window as IdleWindow
    let idleId: IdleHandle | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    if (typeof idleWin.requestIdleCallback === 'function') {
      idleId = idleWin.requestIdleCallback(start, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(start, 1500)
    }

    return () => {
      if (idleId !== null && typeof idleWin.cancelIdleCallback === 'function') {
        idleWin.cancelIdleCallback(idleId)
      }
      if (timeoutId !== null) clearTimeout(timeoutId)
      if (cleanup) cleanup()
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <>
      <style>{`
        .rain-active {
          color: #F0D080 !important;
          font-weight: 700 !important;
          text-shadow: 0 0 8px rgba(212,168,83,0.5), 0 0 16px rgba(212,168,83,0.2) !important;
          opacity: 1 !important;
        }
      `}</style>
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </>
  )
}
