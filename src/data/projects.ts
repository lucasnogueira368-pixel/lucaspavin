export interface Project {
  slug: string
  name: string
  niche: string
  description: string
  url: string | null
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'mona-analia-franco',
    name: 'Mona Anália Franco',
    niche: 'Imobiliário de luxo',
    description: 'Empreendimento premium em São Paulo',
    url: 'https://monaanaliadialogo.com.br/',
    image: '/images/projects/mona-analia.webp',
    featured: true,
  },
  {
    slug: 'shiba-petcare',
    name: 'Shiba Pet Care',
    niche: 'Pet Shop',
    description: 'Site profissional para pet shop',
    url: 'https://shiba-petcare.netlify.app/',
    image: '/images/projects/shiba-petcare.webp',
    featured: false,
  },
  {
    slug: 'patas-de-casa',
    name: 'Patas de Casa',
    niche: 'Pet Shop',
    description: 'Presença digital para pet shop',
    url: 'https://www.patasdecasaessence.com.br/',
    image: '/images/projects/patas-de-casa.webp',
    featured: false,
  },
  // Para adicionar novo projeto:
  // 1. Adicione um objeto aqui seguindo a interface Project
  // 2. Coloque o screenshot em public/images/projects/ (800x450, WebP, < 80KB)
  // 3. Rebuild e deploy
]
