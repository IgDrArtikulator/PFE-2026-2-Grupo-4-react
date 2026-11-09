import LinkAncora from "./LinkAncora";
import equipePkz from "../assets/pkz/pkz-equipe.webp";
import equipeOto from "../assets/oto/oto-equipe.webp";

const dados = {
  pkz: {
    eyebrow: "Play Makerz · Sobre",
    paragrafos: [
      "A Play Makerz treina crianças e adolescentes de forma individual, com " +
        "foco em desenvolvimento atlético de longo prazo. Cada atleta tem um " +
        "programa próprio e um profissional dedicado em cada sessão.",
      "Para adultos que querem condicionamento e performance, o treino " +
        "acontece no estúdio One to One.",
    ],
    foto: equipePkz,
    alt: "Equipe de treinadores da Playmakerz no espaço de treino",
  },
  oto: {
    eyebrow: "One to One · Sobre",
    paragrafos: [
      "O One to One é um estúdio de treino individual para adultos que querem " +
        "melhorar seu condicionamento e performance física. Cada aluno tem um " +
        "programa próprio e um profissional dedicado em cada sessão.",
      "Para crianças e adolescentes, o treino acontece na Play Makerz.",
    ],
    foto: equipeOto,
    alt: "Equipe de personal trainers do One to One no estúdio",
  },
};

// Seção #sobre. Prop: marca ("pkz" ou "oto").
function Sobre({ marca }) {
  const sobre = dados[marca];

  return (
    <section className="pagina" id="sobre">
      <p className="eyebrow">{sobre.eyebrow}</p>

      <div className="duas-colunas">
        <article className="sobre-texto">
          <h2 className="titulo-pagina sobre-titulo">Sobre nós</h2>

          {sobre.paragrafos.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}

          {/* Leva para a seção "Escolha sua jornada" do Hub */}
          <LinkAncora className="link-seta" pagina="/" secao="escolha">
            Comparar os dois programas &rarr;
          </LinkAncora>
        </article>

        {/* Foto da equipe: width/height reservam o espaço antes de carregar */}
        <figure className="foto sobre-foto">
          <img
            src={sobre.foto}
            width="1200"
            height="896"
            alt={sobre.alt}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

export default Sobre;