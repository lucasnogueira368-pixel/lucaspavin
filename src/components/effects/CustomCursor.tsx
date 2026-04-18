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
      // Garante que cursor esta visivel ao mover
      document.documentElement.classList.remove('cursor-hidden')
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

    // Event delegation — hover detection
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

    // Esconder cursor custom quando mouse sai da janela
    // Mostra cursor nativo nesse estado (via classe cursor-hidden no html)
    const onWindowLeave = () => {
      document.documentElement.classList.add('cursor-hidden')
    }
    const onWindowEnter = () => {
      document.documentElement.classList.remove('cursor-hidden')
    }
    // mouseleave do document = mouse saiu da janela
    document.documentElement.addEventListener('mouseleave', onWindowLeave)
    document.documentElement.addEventListener('mouseenter', onWindowEnter)

    // Reset quando aba volta a ficar visivel (evita cursor invisivel ao voltar do Alt+Tab)
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.documentElement.classList.add('cursor-hidden')
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Reset ao focar/desfocar janela
    const onBlur = () => document.documentElement.classList.add('cursor-hidden')
    const onFocus = () => {
      // Nao remove aqui — aguarda primeiro mousemove para remover
    }
    window.addEventListener('blur', onBlur)
    window.addEventListener('focus', onFocus)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.removeEventListener('mouseleave', onWindowLeave)
      document.documentElement.removeEventListener('mouseenter', onWindowEnter)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('focus', onFocus)
      cancelAnimationFrame(animId)
      document.documentElement.classList.remove('cursor-hidden')
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <>
      <style>{`
        @media (hover: hover) {
          html, body, a, button, [role="button"] { cursor: none !important; }
          /* Quando cursor saiu da janela ou aba perdeu foco: mostrar cursor nativo e esconder custom */
          html.cursor-hidden, html.cursor-hidden body, html.cursor-hidden a, html.cursor-hidden button, html.cursor-hidden [role="button"] {
            cursor: auto !important;
          }
          html.cursor-hidden .cursor-ring, html.cursor-hidden .cursor-dot {
            opacity: 0 !important;
          }
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
          transition: opacity 0.2s;
        }
      `}</style>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
