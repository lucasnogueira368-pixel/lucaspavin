export const SITE_URL = 'https://lucaspavin.com.br'
export const SITE_TITLE = 'Lucas Pavin | Desenvolvedor Web | Landing Pages Profissionais'
export const SITE_DESCRIPTION = 'Desenvolvedor web especializado em landing pages profissionais para negócios locais. Design exclusivo, PageSpeed 90+, SEO completo e otimização para IA. A partir de 3 dias úteis.'

export const WHATSAPP_NUMBER = '5511965432623'

const waUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const WHATSAPP_URL = waUrl('Olá, Lucas! Vi seu portfólio e tenho interesse em um site profissional para o meu negócio. Pode me passar mais informações?')
export const WHATSAPP_URL_EXPRESS = waUrl('Olá, Lucas! Vi seu portfólio e gostaria de mais informações sobre a Express. Pode me explicar como funciona?')
export const WHATSAPP_URL_RENOVACAO = waUrl('Olá, Lucas! Vi seu portfólio e gostaria de mais informações sobre a Renovação. Pode me explicar como funciona?')
export const WHATSAPP_URL_COMPLETA = waUrl('Olá, Lucas! Vi seu portfólio e gostaria de mais informações sobre a Completa. Pode me explicar como funciona?')
export const WHATSAPP_URL_PLANOS = waUrl('Olá, Lucas! Vi seu portfólio e gostaria de saber mais sobre os planos mensais. Pode me explicar como funcionam?')

// Rota /links (destino do link da bio do Instagram)
export const WHATSAPP_URL_LINKS = waUrl('Olá, Lucas! Vi seu perfil no Instagram e gostaria de saber mais sobre a criação de um site. Pode me passar mais informações?')

export const INSTAGRAM_URL = 'https://instagram.com/lucaspavin.dev'
export const INSTAGRAM_HANDLE = '@lucaspavin.dev'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/lucas-pavin-nogueira-2261771ba/'

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
] as const
