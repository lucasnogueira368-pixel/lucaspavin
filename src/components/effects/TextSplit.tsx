interface TextSplitProps {
  text: string
  className?: string
  baseDelay?: number
  charDelay?: number
}

const NBSP = ' '

// Animação de entrada em CSS puro (não depende de JS/framer): a animação
// dispara já na primeira pintura da página, então NÃO segura o LCP como a
// versão anterior (framer-motion, que só animava após a hidratação do JS).
// O visual é idêntico — mesmo fade + slide/rotação por letra.
export function TextSplit({
  text,
  className,
  baseDelay = 0,
  charDelay = 0.035,
}: TextSplitProps) {
  return (
    <>
      {/* Texto real para leitores de tela / agentes (o resto é aria-hidden) */}
      <span className="sr-only">{text}</span>
      <span className={className} aria-hidden="true">
        {text.split('').map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="text-split-char"
            style={{ animationDelay: `${baseDelay + i * charDelay}s` }}
          >
            {char === ' ' ? NBSP : char}
          </span>
        ))}
      </span>
    </>
  )
}
