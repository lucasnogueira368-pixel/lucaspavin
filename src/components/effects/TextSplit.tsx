'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface TextSplitProps {
  text: string
  className?: string
  baseDelay?: number
  charDelay?: number
}

export function TextSplit({
  text,
  className,
  baseDelay = 0.4,
  charDelay = 0.035,
}: TextSplitProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className={className} aria-hidden="true">
        {text.split('').map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 40, rotateX: 40 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: baseDelay + i * charDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </>
  )
}
