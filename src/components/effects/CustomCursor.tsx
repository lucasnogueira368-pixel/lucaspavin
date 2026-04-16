'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`
      animId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    animId = requestAnimationFrame(loop)

    // Event delegation — hover detection via mouseover/mouseout on document
    // Works for all elements including those added later by ScrollReveal
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        ring.classList.add('cursor-hover')
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null
      if (!target || !target.closest('a, button, [role="button"]')) {
        ring.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(animId)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <>
      <style>{`
        @media (hover: hover) {
          html, body, a, button, [role="button"] { cursor: none !important; }
        }
        @media (hover: none) {
          .cursor-ring, .cursor-dot { display: none !important; }
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; z-index: 9999;
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid var(--accent);
          pointer-events: none; opacity: 0.5;
          transition: width 0.2s, height 0.2s, opacity 0.2s;
          mix-blend-mode: difference;
        }
        .cursor-ring.cursor-hover {
          width: 56px; height: 56px; opacity: 0.8;
          transform-origin: center;
        }
        .cursor-dot {
          position: fixed; top: 0; left: 0; z-index: 10000;
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          pointer-events: none;
        }
      `}</style>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
