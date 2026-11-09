import LinkAncora from "./LinkAncora";

import heroPkz from "../assets/pkz/pkz-hero.webp";
import heroOto from "../assets/oto/oto-hero.webp";

const dados = {
  pkz: {
    eyebrow: "Treino individual · Alta performance",
    titulo: "Formando pequenos atletas com grandes sonhos",
    texto:
      "Seu desenvolvimento atlético em programas por idade e modalidade, conduzidos individualmente por um profissional dedicado.",
    botao: "Agendar aula grátis →",
    foto: heroPkz,
    alt: "Jovem atleta correndo na escada de agilidade na Playmakerz",
  },
  oto: {
    eyebrow: "Estúdio · Treino individual",
    titulo: "Para quem busca a alta performance",
    texto:
      "Um profissional dedicado a você em cada sessão, com horários flexíveis e acompanhamento próximo.",
    botao: "Agendar aula experimental",
    foto: heroOto,
    alt: "Aluno fazendo agachamento com barra no estúdio One to One",
  },
};

// Seção #inicio. Prop: marca ("pkz" ou "oto").
function Home({ marca }) {
  const home = dados[marca];

  return (
    <section className="pagina" id="inicio">
      <div className="duas-colunas home-hero">
        <header>
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 className="titulo-pagina home-titulo">{home.titulo}</h1>
          <p className="texto-lead">{home.texto}</p>

          {/* CTA único: leva direto para o agendamento da aula experimental */}
          <div className="home-botoes">
            <LinkAncora className="btn btn-primario btn-pesado" secao="agendamento">
              {home.botao}
            </LinkAncora>
          </div>
        </header>

        {/* Foto do hero: imagem principal, sem lazy e com prioridade alta.
            width e height (tamanho real do arquivo): reservam o espaço
            antes de a foto carregar, sem salto de layout. */}
        <figure className="foto home-foto">
          <img
            src={home.foto}
            width="928"
            height="1152"
            alt={home.alt}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}

export default Home;
