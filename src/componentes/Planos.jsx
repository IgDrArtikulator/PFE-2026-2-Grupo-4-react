import LinkAncora from "./LinkAncora";

// PKZ: 3 cards em grid; o do meio (aula grátis) fica em destaque
const cardsPkz = [
  {
    titulo: "Fale com a equipe para receber o orçamento",
    texto: "Enviamos os valores pelo WhatsApp de acordo com o pacote escolhido.",
    botao: "Falar com a equipe",
    secao: "contato",
  },
  {
    titulo: "Venha fazer uma aula experimental gratuita",
    texto: "Conheça o estúdio, o treinador e a metodologia sem custo nenhum.",
    botao: "Agendar uma aula grátis",
    secao: "agendamento",
    destaque: true,
  },
  {
    titulo: "Escolha um pacote customizado para suas necessidades",
    texto: "Frequência, duração e objetivo definidos a partir da avaliação inicial.",
    botao: "Montar meu pacote",
    secao: "agendamento",
  },
];

// One to One: passo a passo da aula experimental
const passosOto = [
  { titulo: "Agende pelo site", texto: "Escolha o dia e o horário que se encaixam na sua rotina." },
  { titulo: "Faça sua aula experimental", texto: "Uma sessão individual com um profissional dedicado a você." },
  { titulo: "Escolha seu pacote", texto: "Opções variadas, com valores de acordo com sua necessidade." },
];

// Seção #planos. Cada marca tem um layout diferente:
// renderização condicional com if / return.
function Planos({ marca }) {
  if (marca === "pkz") {
    return (
      <section className="pagina" id="planos">
        <header>
          <p className="eyebrow">Play Makerz · Planos</p>
          <h2 className="titulo-pagina">Venha experimentar a Play Makerz</h2>
          <p className="texto-lead planos-pkz-texto">
            Todos os planos são de treino individual. A frequência define o ritmo de evolução.
          </p>
        </header>

        <div className="planos-cards">
          {cardsPkz.map((card) => (
            <article
              key={card.titulo}
              className={card.destaque ? "card plano-card plano-destaque" : "card plano-card"}
            >
              <h2>{card.titulo}</h2>
              <p>{card.texto}</p>
              <LinkAncora
                className={card.destaque ? "btn btn-primario" : "btn btn-contorno"}
                secao={card.secao}
              >
                {card.botao}
              </LinkAncora>
            </article>
          ))}
        </div>
      </section>
    );
  }

  // One to One: página toda centralizada (flex em coluna)
  return (
    <section className="pagina planos" id="planos">
      <header>
        <p className="eyebrow">One to One · Planos</p>
        <h2 className="titulo-pagina">Aula gratuita experimental</h2>
        <p className="planos-texto">
          Venha fazer uma aula experimental gratuita e depois escolha seu pacote
          (opções variadas e com diferentes valores de acordo com sua necessidade).
        </p>
      </header>

      <LinkAncora className="btn btn-primario btn-largo" secao="agendamento">
        Agendar aula experimental
      </LinkAncora>

      {/* Passo a passo: lista ordenada (ol) porque a ordem importa */}
      <ol className="passos">
        {passosOto.map((passo, i) => (
          <li className="passo" key={passo.titulo}>
            <span className="passo-numero">{i + 1}</span>
            <div>
              <h2>{passo.titulo}</h2>
              <p>{passo.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Planos;
