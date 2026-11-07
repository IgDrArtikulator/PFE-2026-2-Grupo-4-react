import CardTreino from "./CardTreino";

const dados = {
  pkz: {
    eyebrow: "Play Makerz · Treinos",
    intro:
      "Sessões individuais, com programa montado por idade e modalidade e " +
      "acompanhamento a cada treino.",
    classeCards: "treinos-cards",
    cards: [
      {
        eyebrow: "Avaliação",
        titulo: "Ponto de partida",
        texto:
          "Primeira sessão para entender nível, histórico esportivo e objetivo do atleta.",
      },
      {
        eyebrow: "Programa",
        titulo: "Por idade e modalidade",
        texto:
          "Força, velocidade, coordenação e desenvolvimento atlético na dose certa " +
          "para cada fase.",
      },
      {
        eyebrow: "Acompanhamento",
        titulo: "Um profissional por atleta",
        texto:
          "Horários flexíveis, evolução registrada e ajuste do programa sessão a sessão.",
      },
    ],
  },
  oto: {
    eyebrow: "One to One · Treinos",

    // "compacto" = cards mais baixos que os da PKZ (6 cards em grid).
    classeCards: "treinos-cards treinos-cards-compacto",
    cards: [
      {
        eyebrow: "Treino",
        titulo: "Personalizado de verdade",
        texto: "Montado a partir da sua avaliação e do seu objetivo.",
      },
      {
        eyebrow: "Equipamentos",
        titulo: "Novos e planejados para você",
        texto: "Escolhidos para o seu melhor desenvolvimento.",
      },
      {
        eyebrow: "Estrutura",
        titulo: "Espaço pensado para receber você",
        texto: "Conforto, segurança e privacidade em cada treino.",
      },
      {
        eyebrow: "Acompanhamento",
        titulo: "Personal trainer dedicado a você",
        texto: "Ao seu lado em todo o processo, ajustando cada etapa.",
      },
      {
        eyebrow: "Nutrição",
        titulo: "Nutrição prática e eficiente",
        texto: "Alimentação que cabe na sua rotina e potencializa resultados.",
        selo: {
          icone: "fa-solid fa-apple-whole",
          texto: "Nutricionista",
        },
      },
      {
        eyebrow: "Fisio",
        titulo: "Fisioterapia com tecnologia de ponta",
        texto: "Equipamentos modernos para cuidar da sua recuperação.",
        selo: {
          icone: "fa-solid fa-hand-holding-medical",
          texto: "Fisioterapeuta",
        },
      },
    ],
  },
};

// Seção #treinos. Prop: marca ("pkz" ou "oto").
function Treinos({ marca }) {
  const treinos = dados[marca];

  return (
    <section className="pagina" id="treinos">
      <header>
        <p className="eyebrow">{treinos.eyebrow}</p>
        <h2 className="titulo-pagina">Informações sobre treinos</h2>

        {/* Só a PKZ tem texto de introdução */}
        {treinos.intro && (
          <p className="texto-lead treinos-intro">{treinos.intro}</p>
        )}
      </header>

      <div className={treinos.classeCards}>
        {treinos.cards.map((card) => (
          <CardTreino
            key={card.titulo}
            eyebrow={card.eyebrow}
            titulo={card.titulo}
            texto={card.texto}
            selo={card.selo}
          />
        ))}
      </div>
    </section>
  );
}

export default Treinos;