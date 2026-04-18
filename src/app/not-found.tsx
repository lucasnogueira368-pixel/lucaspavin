import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{ background: 'var(--bg-deep)' }}
    >
      <h1
        className="font-[family-name:var(--heading-font)] font-bold text-[var(--accent)]"
        style={{ fontSize: 'clamp(4rem, 15vw, 8rem)', lineHeight: 1 }}
      >
        404
      </h1>
      <p
        className="mt-4 font-[family-name:var(--body-font)] text-[var(--text-1)]"
        style={{ fontSize: '1.05rem' }}
      >
        Página não encontrada
      </p>
      <Link
        href="/"
        className="mt-8 font-[family-name:var(--body-font)] text-[var(--accent)] hover:text-[var(--accent-soft)] transition-colors"
        style={{ fontSize: '0.95rem' }}
      >
        Voltar ao início
      </Link>
    </main>
  )
}
