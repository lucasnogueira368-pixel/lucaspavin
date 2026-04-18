export interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  photo: string | null
  instagram: string | null
}

// PLACEHOLDER: Todos os depoimentos sao FICTICIOS para validacao de layout.
// Substituir por depoimentos reais antes do deploy final.
// Ver docs/PLACEHOLDERS.md
export const testimonials: Testimonial[] = [
  {
    name: 'Guilherme Santos',
    company: 'Mona Anália Franco',
    role: 'Diretor Comercial',
    text: 'O Lucas entendeu exatamente o que a gente precisava. O site ficou impecável, carrega rápido e já trouxe leads qualificados na primeira semana.',
    photo: null,
    instagram: null,
  },
  {
    name: 'Mariana Costa',
    company: 'Shiba Pet Care',
    role: 'Proprietária',
    text: 'Melhor investimento que fiz pro meu negócio. O site ficou lindo, meus clientes elogiam e o agendamento pelo WhatsApp aumentou demais.',
    photo: null,
    instagram: null,
  },
  {
    name: 'Pollyana Crivello',
    company: 'Patas de Casa Essence',
    role: 'Proprietária',
    text: 'Profissional sério e atencioso. Entregou antes do prazo, o site funciona perfeito no celular e já aparece no Google.',
    photo: null,
    instagram: null,
  },
]
