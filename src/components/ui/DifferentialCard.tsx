'use client'

import { Zap, Palette, Search, Smartphone, Clock, Code, PenTool, BarChart3, Heart } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size: number; style?: React.CSSProperties }>> = {
  Zap, Palette, Search, Smartphone, Clock, Code, PenTool, BarChart3, Heart,
}

interface DifferentialCardProps {
  icon: string
  title: string
  metric: string
  description: string
}

export function DifferentialCard({ icon, title, metric, description }: DifferentialCardProps) {
  const Icon = iconMap[icon] ?? Zap

  return (
    <div
      className="differential-card relative h-full flex flex-col"
      style={{ padding: '32px' }}
    >
      <Icon
        size={22}
        style={{ color: 'var(--accent)', marginBottom: '14px', flexShrink: 0 }}
      />

      <h3
        style={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 600,
          fontSize: '1.15rem',
          color: 'var(--text-0)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>

      <p
        className="mt-1"
        style={{
          fontFamily: 'var(--label-font)',
          fontSize: '0.68rem',
          fontWeight: 500,
          letterSpacing: '0.04em',
          color: 'var(--accent)',
          lineHeight: 1.4,
        }}
      >
        {metric}
      </p>

      <p
        className="mt-3 flex-1"
        style={{
          fontFamily: 'var(--body-font)',
          fontSize: '0.9rem',
          lineHeight: 1.65,
          color: 'var(--text-1)',
        }}
      >
        {description}
      </p>
    </div>
  )
}
