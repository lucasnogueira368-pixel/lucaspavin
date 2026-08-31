'use client'

import { track } from '@vercel/analytics'

type Variant = 'primary' | 'secondary'

interface TrackedLinkProps {
  href: string
  /** Identificador do evento no Vercel Analytics (ex: links_whatsapp) */
  event: string
  variant: Variant
  /** Abre em nova aba (usado no WhatsApp, que sai do dominio) */
  external?: boolean
  children: React.ReactNode
}

const baseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '52px',
  padding: '14px 24px',
  borderRadius: '12px',
  fontFamily: 'var(--body-font)',
  fontSize: '0.95rem',
  fontWeight: 600,
  lineHeight: 1.2,
  textAlign: 'center',
}

const variantStyle: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--gold-gradient)',
    color: 'var(--bg-deep)',
    boxShadow: 'var(--gold-glow)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-0)',
    border: '1px solid var(--border-hover)',
  },
}

/**
 * Link da rota /links com evento de analytics.
 *
 * Usa <a> nativo (nao next/link) de proposito: nas ancoras da home o
 * carregamento normal do navegador ja posiciona a pagina direto na secao,
 * enquanto a navegacao client-side dispararia a rolagem suave global desde
 * o topo — que e exatamente o atrito que esta pagina existe para remover.
 */
export function TrackedLink({ href, event, variant, external, children }: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={() => track(event)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
      style={{ ...baseStyle, ...variantStyle[variant] }}
    >
      {children}
    </a>
  )
}
