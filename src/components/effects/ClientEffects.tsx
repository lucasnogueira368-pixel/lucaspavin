'use client'

import dynamic from 'next/dynamic'

const GrainOverlay = dynamic(
  () => import('./GrainOverlay').then((m) => ({ default: m.GrainOverlay })),
  { ssr: false }
)

const CustomCursor = dynamic(
  () => import('./CustomCursor').then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
)

const ScrollProgress = dynamic(
  () => import('./ScrollProgress').then((m) => ({ default: m.ScrollProgress })),
  { ssr: false }
)

export function ClientEffects() {
  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
    </>
  )
}
