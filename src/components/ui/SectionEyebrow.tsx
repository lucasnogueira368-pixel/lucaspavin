interface SectionEyebrowProps {
  number: string
  label: string
}

export function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <div
      className="flex items-center gap-3 mb-2"
      style={{
        fontFamily: 'var(--label-font)',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      <span className="gold-metallic">{number}</span>
      <span style={{ color: 'var(--text-3)' }}>&mdash;</span>
      <span style={{ color: 'var(--text-3)' }}>{label}</span>
    </div>
  )
}
