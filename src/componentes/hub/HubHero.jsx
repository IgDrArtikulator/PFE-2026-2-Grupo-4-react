import { useState } from "react";
import LinkAncora from "../LinkAncora";

import fotoHero from "../../assets/hub/hub-hero.webp";
import fotoPkz from "../../assets/hub/hub-pkz.webp";
import fotoOto from "../../assets/hub/hub-oto.webp";
import fotoPrincipal from "../../assets/hub/hub-video-principal.webp";

// Para trocar ou incluir fotos, é só mexer neste array:
// os tracinhos são criados a partir dele.
const fotosHero = [
  { src: fotoHero, alt: "Atleta jovem e atleta adulto treinando lado a lado" },
  { src: fotoPkz, alt: "Jovens atletas da Playmakerz em treino de agilidade" },
  { src: fotoOto, alt: "Aluna do One to One treinando com kettlebell" },
  { src: fotoPrincipal, alt: "Um dia de treino no centro de treinamento" },
];

// Hero do Hub com slider da foto de fundo (setas ‹ › e tracinhos).
function HubHero() {
  const [atual, setAtual] = useState(0); // tracinho aceso
  const [visivel, setVisivel] = useState(0); // foto que aparece no <img>
  const [trocando, setTrocando] = useState(false);

  // Mostra a foto de posição "indice" (dá a volta nas pontas)
  function mostrarSlide(indice) {
    const novo = (indice + fotosHero.length) % fotosHero.length;
    setAtual(novo);

    // A classe "trocando" deixa a foto transparente (CSS).
    // Depois de 300 ms (tempo do transition) troca a foto e tira a classe.
    setTrocando(true);
    setTimeout(() => {
      setVisivel(novo);
      setTrocando(false);
    }, 300);
  }

  return (
    <section className="hub-hero hub-container" id="inicio">
      <figure className="hub-hero-foto">
        <img
          className={trocando ? "trocando" : ""}
          src={fotosHero[visivel].src}
          width="1376"
          height="768"
          alt={fotosHero[visivel].alt}
          fetchPriority="high"
        />
      </figure>

      <header className="hub-hero-conteudo">
        <p className="hub-eyebrow">Alta performance esportiva</p>
        <h1 className="hub-titulo">
          Treino de <span>alta performance</span> para todas idades.
        </h1>
        <p>Do jovem atleta ao adulto que busca resultado. Escolha o seu caminho.</p>
        <LinkAncora className="hub-link hub-btn hub-btn-lilas" secao="escolha">
          Escolha sua jornada &darr;
        </LinkAncora>
      </header>

      {/* Controles do slider */}
      <div className="hub-slider">
        <button className="hub-slider-seta" type="button" aria-label="Foto anterior" onClick={() => mostrarSlide(atual - 1)}>
          &lsaquo;
        </button>
        <div className="hub-slider-tracos">
          {fotosHero.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              className={i === atual ? "hub-slider-traco ativo" : "hub-slider-traco"}
              aria-label={"Mostrar foto " + (i + 1)}
              aria-current={i === atual ? "true" : undefined}
              onClick={() => mostrarSlide(i)}
            ></button>
          ))}
        </div>
        <button className="hub-slider-seta" type="button" aria-label="Próxima foto" onClick={() => mostrarSlide(atual + 1)}>
          &rsaquo;
        </button>
      </div>
    </section>
  );
}

export default HubHero;
