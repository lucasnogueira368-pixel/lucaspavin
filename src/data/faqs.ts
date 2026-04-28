// Single source of truth para FAQs — usado em Faq.tsx e no JSON-LD (layout.tsx)
export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Quanto tempo demora pra ficar pronto?',
    answer: 'A partir de 3 dias úteis após o recebimento de todo o material (fotos, logo). O prazo varia conforme o pacote escolhido.',
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
  {
    question: 'Qual a diferença entre Express e Renovação?',
    answer: 'Express é pra quem está começando do zero, você não tem site ainda e precisa do primeiro no ar. Renovação é pra quem já tem site e quer subir o nível técnico: faço um site novo do zero usando o atual como referência de identidade e copy, com briefing reduzido (a base já existe).',
  },
  {
    question: 'O que está incluso no plano Essencial?',
    answer: 'O Essencial (R$ 50/mês) cobre o básico pra manter seu site funcionando: hospedagem, backup automático e atualização técnica (correções, segurança, compatibilidade). Pra alterações de conteúdo ou monitoramento de SEO, recomendo Profissional ou Premium.',
  },
  {
    question: 'Você faz manutenção em sites que não foram feitos por você?',
    answer: 'Para manutenção contínua, não. Os planos mensais são exclusivos pra sites construídos com a stack que uso (Next.js + estrutura otimizada). O caminho pra quem já tem site e quer entrar nessa estrutura é o pacote Renovação: refaço do zero usando o atual como referência, e depois você pode contratar qualquer plano de manutenção.',
  },
  {
    question: 'Posso trocar de plano de manutenção depois?',
    answer: 'Sim, sem multa. Pode subir (Essencial → Profissional → Premium) ou descer a qualquer momento. O ajuste vale a partir do mês seguinte.',
  },
]
