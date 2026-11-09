import { useState } from "react";

import pkz1 from "../assets/pkz/pkz-galeria-1.webp";
import pkz2 from "../assets/pkz/pkz-galeria-2.webp";
import pkz3 from "../assets/pkz/pkz-galeria-video.webp";
import pkz4 from "../assets/pkz/pkz-galeria-4.webp";

import oto1 from "../assets/oto/oto-galeria-1.webp";
import oto2 from "../assets/oto/oto-galeria-2.webp";
import oto3 from "../assets/oto/oto-galeria-video.webp";
import oto4 from "../assets/oto/oto-galeria-4.webp";

// Para incluir uma foto, basta acrescentar um objeto no array da marca.
const dados = {
  pkz: {
    eyebrow: "Play Makerz · Galeria",
    fotos: [
      {
        src: pkz1,
        alt: "Atleta saltando no box durante o treino",
        legenda: "Treino funcional focado no desenvolvimento do atleta",
      },
      {
        src: pkz2,
        alt: "Cones e escada de agilidade prontos para o treino",
        legenda:
          "Treino dinâmico e bem equipado para o atleta evoluir com segurança",
      },
      {
        src: pkz3,
        alt: "Jovem atleta driblando a bola de basquete",
        legenda: "Preparação física voltada ao melhor desempenho no esporte",
      },
      {
        src: pkz4,
        alt: "Escada de agilidade e barreiras no piso de treino",
        legenda: "Espaço seguro e otimizado para cada etapa do treino",
      },
    ],
  },
  oto: {
    eyebrow: "One to One · Galeria",
    fotos: [
      {
        src: oto1,
        alt: "Aluna segurando um kettlebell durante o treino",
        legenda: "Estúdio totalmente preparado para a sua melhor evolução",
      },
      {
        src: oto2,
        alt: "Personal trainer anotando a evolução do aluno",
        legenda: "Personal trainer dedicado a você, do início ao fim de cada treino",
      },
      {
        src: oto3,
        alt: "Aluno treinando com cordas navais",
        legenda: "Treino funcional voltado ao seu objetivo",
      },
      {
        src: oto4,
        alt: "Personal trainer acompanhando o treino pelo celular",
        legenda: "Acompanhamento constante: estamos com você a todo momento",
      },
    ],
  },
};

// 1 vira "01" (para o contador "01 / 04").
function doisDigitos(numero) {
  return String(numero).padStart(2, "0");
}

// Seção #galeria: carrossel com useState guardando o índice da foto atual.
function Galeria({ marca }) {
  const { eyebrow, fotos } = dados[marca];
  const [atual, setAtual] = useState(0);

  // Depois da última, volta para a primeira; antes da primeira, vai para a última.
  const anterior = () => setAtual((atual - 1 + fotos.length) % fotos.length);
  const proxima = () => setAtual((atual + 1) % fotos.length);

  // Setas ← → do teclado, quando o foco está num botão da galeria.
  function teclaPressionada(evento) {
    if (evento.key === "ArrowLeft") {
      anterior();
    } else if (evento.key === "ArrowRight") {
      proxima();
    }
  }

  return (
    <section className="pagina" id="galeria">
      <header>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="titulo-pagina">Galeria de fotos e vídeos</h2>
      </header>

      <div className="galeria" onKeyDown={teclaPressionada}>
        {/* As fotos ficam no mesmo quadro; o CSS mostra apenas a ativa. */}
        <div className="foto galeria-quadro">
          {fotos.map((foto, i) => (
            <figure
              key={foto.src}
              className={i === atual ? "galeria-slide ativa" : "galeria-slide"}
              aria-hidden={i !== atual}
            >
              {/* Todas as fotos são 928x1152: width/height reservam o espaço */}
              <img
                src={foto.src}
                width="928"
                height="1152"
                alt={foto.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div>
          <p className="eyebrow galeria-contador">
            {doisDigitos(atual + 1)} / {doisDigitos(fotos.length)}
          </p>

          {/* O leitor de tela anuncia a nova legenda quando a foto troca. */}
          <p className="galeria-legenda" aria-live="polite">
            {fotos[atual].legenda}
          </p>

          <div className="galeria-controles">
            <button
              className="galeria-seta"
              type="button"
              aria-label="Foto anterior"
              onClick={anterior}
            >
              &lsaquo;
            </button>

            {/* Um tracinho para cada foto do array. */}
            <div className="galeria-tracos">
              {fotos.map((foto, i) => (
                <button
                  key={foto.src}
                  type="button"
                  className={i === atual ? "galeria-traco ativo" : "galeria-traco"}
                  aria-label={"Mostrar foto " + (i + 1)}
                  aria-current={i === atual ? "true" : undefined}
                  onClick={() => setAtual(i)}
                />
              ))}
            </div>

            <button
              className="galeria-seta"
              type="button"
              aria-label="Próxima foto"
              onClick={proxima}
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;