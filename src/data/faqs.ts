// Single source of truth para FAQs — usado em Faq.tsx e no JSON-LD (layout.tsx)
export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Quanto tempo demora pra ficar pronto?',
    answer: '5 dias úteis após o recebimento de todo o material (fotos, logo). Se o material estiver completo na segunda, sua LP está no ar na sexta seguinte.',
  },
  {
    question: 'Posso pedir alterações depois de pronto?',
    answer: 'Sim. 2 rodadas de revisão já estão inclusas na criação. Depois disso, alterações avulsas são cobradas por solicitação. Quem contrata plano de manutenção tem alterações mensais inclusas.',
  },
  {
    question: 'O domínio fica no meu nome?',
    answer: 'Sim. O domínio é registrado no CPF/CNPJ do cliente no Registro.br. Administro tecnicamente, mas a posse é sua. Se você parar de trabalhar comigo, leva o domínio junto.',
  },
  {
    question: 'E se eu não tiver fotos ou textos?',
    answer: 'Ajudo a estruturar. Trabalho com banco de imagens premium quando necessário e oriento a escrita dos textos. Se precisar de fotógrafo, indico profissionais da sua região.',
  },
  {
    question: 'Funciona em celular?',
    answer: 'Todos os sites são mobile-first. Testados em iPhone e Android antes da entrega. Se não funcionar perfeito no seu celular, ajusto sem custo.',
  },
]
