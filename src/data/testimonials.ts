export interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  photo: string | null
  instagram: string | null
}

export const testimonials: Testimonial[] = []
