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

// Ordem = ordem de exibição. O índice 0 é o HERÓI (case grande em destaque);
// os demais entram no grid compacto. Trocar o herói = mover um objeto para o topo.
export const projects: Project[] = [
  {
    // HERÓI (decisão do Lucas)
    slug: 'shiba-petcare',
    name: 'Shiba Pet Care',
    segment: 'Pet Shop',
    year: 2026,
    context: 'Pet shop premium em São Caetano do Sul, bicampeão regional.',
    objective: 'Criar presença digital que refletisse a qualidade do atendimento.',
    result: 'Site responsivo com galeria, depoimentos e agendamento via WhatsApp.',
    url: 'https://shibapetcare.com.br/',
    scores: { performance: 99, accessibility: 95, bestPractices: 100, seo: 100 },
    slides: ['/images/projects/shiba-petcare.webp'],
  },
  {
    slug: 'orbya-residences',
    name: 'Orbya Residences',
    segment: 'Imobiliário',
    year: 2026,
    context:
      'Empreendimento residencial de alto padrão na Vila Carrão, São Paulo, com 2 torres e tipologias de 77 a 212m².',
    objective:
      'Transmitir sofisticação com renders pesados sem sacrificar performance e capturar leads qualificados.',
    result:
      'PageSpeed 96 mesmo com galeria de renders, SEO on-page completo e lead direto pro WhatsApp dos corretores.',
    url: 'https://orbyacarrao.com.br/',
    scores: { performance: 96, accessibility: 96, bestPractices: 100, seo: 100 },
    // Imagem real (mockup iMac). Pode ganhar 2–3 slides se Lucas trouxer.
    slides: ['/images/projects/orbya-residences.webp'],
  },
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
    slug: 'central-seguros-abc-sul',
    name: 'Central Seguros ABC & Sul',
    segment: 'Seguros',
    year: 2026,
    context:
      'Corretora de seguros (franquia) atuando no ABC Paulista, Itatiba e Santa Catarina, sem ponto físico.',
    objective:
      'Passar confiança num nicho regulado, onde o site prepara o terreno em vez de fechar a venda.',
    result:
      'PageSpeed 97 no mobile, prova de confiança (avaliações Google, seguradoras parceiras, sócios na página) e cotação guiada em poucos passos.',
    url: 'https://centralsegurosabcsul.com.br/',
    scores: { performance: 97, accessibility: 100, bestPractices: 100, seo: 100 },
    // Imagem real (mockup iMac).
    slides: ['/images/projects/central-seguros-abc-sul.webp'],
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
    scores: { performance: 96, accessibility: 91, bestPractices: 100, seo: 100 },
    slides: ['/images/projects/patas-de-casa.webp'],
  },
  // Para adicionar novo projeto:
  // 1. Adicione um objeto seguindo a interface Project
  // 2. Coloque screenshots em public/images/projects/ (.webp + .avif)
  // 3. Rebuild e deploy
]
