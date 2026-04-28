export const SITE_URL = 'https://lucaspavin.com.br'
export const SITE_TITLE = 'Lucas Pavin | Desenvolvedor Web | Landing Pages Profissionais'
export const SITE_DESCRIPTION = 'Desenvolvedor web especializado em landing pages profissionais para negócios locais. Design exclusivo, PageSpeed 90+, SEO completo e otimização para IA. A partir de 3 dias úteis.'

export const WHATSAPP_NUMBER = '5511965432623'

const waUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

export const WHATSAPP_URL = waUrl('Oi Lucas, vi seu portfólio e tenho interesse em um site profissional')
export const WHATSAPP_URL_EXPRESS = waUrl('Oi Lucas, vim pelo site. Quero a Express.')
export const WHATSAPP_URL_RENOVACAO = waUrl('Oi Lucas, vim pelo site. Quero a Renovação.')
export const WHATSAPP_URL_COMPLETA = waUrl('Oi Lucas, vim pelo site. Quero a Completa.')
export const WHATSAPP_URL_PLANOS = waUrl('Oi Lucas, vim pelo site. Quero saber dos planos mensais.')

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
