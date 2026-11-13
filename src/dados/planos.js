// Planos de cada marca, usados pelo NossosPlanos.jsx.
// Campos de cada plano:
//   nome, chamada     → obrigatórios
//   descricao, itens  → opcionais (texto e lista de serviços)
//   nota              → opcional, vira um selo no fim do card
//   destaque          → true deixa o card com borda colorida e botão cheio
//   botao             → opcional, texto do botão (padrão: "Quero este plano")

export const planosPkz = [
  {
    nome: "Plano Performance",
    chamada: "Para quem busca evolução acelerada",
    descricao: "Mais frequência de treinos e acompanhamento próximo para potencializar resultados. Ideal para atletas que querem dar um passo além da performance.",
    itens: [
      "2 treinos por semana",
      "Nutrição e psicologia com acompanhamento contínuo",
      "Fisioterapia com foco em recovery e prevenção",
      "Avaliação completa",
    ],
    destaque: true,
  },
  {
    nome: "Plano Desenvolvimento",
    chamada: "Para construir uma base sólida",
    descricao: "Equilíbrio entre treino, saúde e desenvolvimento progressivo. Perfeito para quem está em fase de construção e evolução constante.",
    itens: [
      "1 treino por semana",
      "Nutrição e psicologia com acompanhamento contínuo",
      "Fisioterapia com foco em recovery e prevenção",
      "Avaliação completa",
    ],
  },
  {
    nome: "Flexibilidade",
    chamada: "Um plano que se adapta ao atleta",
    descricao: "Os serviços da Play Makerz também podem ser contratados de forma individual, de acordo com a necessidade de cada atleta. Mais autonomia, sem abrir mão do suporte profissional.",
    botao: "Montar meu plano",
  },
];

export const planosOto = [
  {
    nome: "Plano Express",
    chamada: "Para quem tem pouco tempo, mas não abre mão de se cuidar",
    itens: [
      "Treinos de 30 min até 5 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação inclusa",
    ],
  },
  {
    nome: "Plano One Move",
    chamada: "Constância é chave!",
    itens: [
      "Treinos de 60 min 3 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação inclusa",
    ],
  },
  {
    nome: "Plano One Power",
    chamada: "O ideal para quem busca evolução mais próxima",
    itens: [
      "Treinos de 60 min 6 vezes por semana",
      "Fisio: avaliação inclusa",
      "Nutri: avaliação mensal e planejamento alimentar personalizado",
    ],
  },
  {
    nome: "Plano Be The One",
    chamada: "O mais completo do Studio",
    itens: [
      "Treinos de 60 min, até 2 por dia",
      "Fisio: 2 sessões semanais com fisioterapeuta",
      "Nutri: avaliação mensal e planejamento alimentar personalizado",
    ],
    nota: "Prioridade no agendamento",
    destaque: true,
  },
];
