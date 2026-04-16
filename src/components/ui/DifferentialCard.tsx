'use client'

import { Zap, Palette, Search, Smartphone, Clock, Code } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size: number; style?: React.CSSProperties }>> = {
  Zap, Palette, Search, Smartphone, Clock, Code,
}

interface DifferentialCardProps {
  icon: string
  title: string
  description: string
}

export function DifferentialCard({ icon, title, description }: DifferentialCardProps) {
  const Icon = iconMap[icon] ?? Zap

  return (
    <div
      className="glass-card h-full flex flex-col"
      style={{ padding: '32px' }}
    >
      <Icon
        size={24}
        style={{ color: 'var(--accent)', marginBottom: '16px', flexShrink: 0 }}
      />

      <h3
        style={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 600,
          fontSize: '1.2rem',
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3 flex-1"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          color: 'var(--text-1)',
        }}
      >
        {description}
      </p>
    </div>
  )
}
