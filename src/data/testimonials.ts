export interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  photo: string | null
  instagram: string | null
}

// ***
// ***
// ***
export const testimonials: Testimonial[] = [
  {
    name: 'Cliente A',
    company: 'Mona Anália Franco',
    role: 'Diretor Comercial',
    text: '(depoimento removido)',
    photo: null,
    instagram: null,
  },
  {
    name: 'Cliente B',
    company: 'Shiba Pet Care',
    role: 'Proprietária',
    text: '(depoimento removido)',
    photo: null,
    instagram: null,
  },
  {
    name: 'Cliente C',
    company: 'Patas de Casa Essence',
    role: 'Proprietária',
    text: '(depoimento removido)',
    photo: null,
    instagram: null,
  },
]
