export interface ProjectScores {
  performance: number
  accessibility: number
  bestPractices: number
  seo: number
}

export interface Project {
  slug: string
  name: string
  segment: string
  year: number
  context: string
  objective: string
  result: string
  url: string
  scores: ProjectScores
  slides: string[]
}

export const projects: Project[] = [
  {
    slug: 'mona-analia-franco',
    name: 'Mona Analia Franco',
    segment: 'Imobiliário',
    year: 2026,
    context: 'Empreendimento residencial de alto padrão em São Paulo.',
    objective: 'Precisava transmitir luxo e capturar leads qualificados.',
    result: 'Site carrega em sub-segundo, PageSpeed 96, lead direto pro WhatsApp da corretora.',
    url: 'https://monaanaliadialogo.com.br/',
    scores: { performance: 96, accessibility: 95, bestPractices: 100, seo: 100 },
    slides: ['/images/projects/mona-analia.webp'],
  },
  {
    slug: 'shiba-petcare',
    name: 'Shiba Pet Care',
    segment: 'Pet Shop',
    year: 2026,
    context: 'Pet shop premium em São Caetano do Sul, bicampeão regional.',
    objective: 'Criar presença digital que refletisse a qualidade do atendimento.',
    result: 'Site responsivo com galeria, depoimentos e agendamento via WhatsApp.',
    url: 'https://shiba-petcare.netlify.app/',
    scores: { performance: 98, accessibility: 95, bestPractices: 100, seo: 100 },
    slides: ['/images/projects/shiba-petcare.webp'],
  },
  {
    slug: 'patas-de-casa',
    name: 'Patas de Casa Essence',
    segment: 'Pet Shop',
    year: 2026,
    context: 'Pet spa premium com serviços de ozonioterapia e cromoterapia.',
    objective: 'Presença digital profissional para atrair tutores exigentes.',
    result: 'LP com galeria, FAQ e agendamento, visual alinhado ao branding.',
    url: 'https://www.patasdecasaessence.com.br/',
    // PLACEHOLDER: scores usando valores da Mona (ver ***)
    scores: { performance: 96, accessibility: 95, bestPractices: 100, seo: 100 },
    slides: ['/images/projects/patas-de-casa.webp'],
  },
  // Para adicionar novo projeto:
  // 1. Adicione um objeto seguindo a interface Project
  // 2. Coloque screenshots em public/images/projects/
  // 3. Rebuild e deploy
]
