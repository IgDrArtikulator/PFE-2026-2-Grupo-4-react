import CardPlano from "./CardPlano";
import { planosPkz, planosOto } from "../dados/planos";

const dados = {
  pkz: {
    eyebrow: "Play Makerz · Planos",
    texto: "Treino, saúde e desenvolvimento no mesmo plano. Escolha o ritmo de evolução do atleta.",
    planos: planosPkz,
  },
  oto: {
    eyebrow: "One to One · Planos",
    texto: "Escolha a frequência que cabe na sua rotina. Todos os planos são de treino individual e incluem fisioterapia e nutrição.",
    planos: planosOto,
  },
};

// Seção #nossos-planos: o map transforma cada objeto do array num <CardPlano />
function NossosPlanos({ marca }) {
  const { eyebrow, texto, planos } = dados[marca];

  return (
    <section className="pagina" id="nossos-planos">
      <header>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="titulo-pagina">Nossos planos</h2>
        <p className="texto-lead planos-lista-texto">{texto}</p>
      </header>

      <div className="planos-lista">
        {planos.map((plano) => (
          <CardPlano key={plano.nome} plano={plano} />
        ))}
      </div>
    </section>
  );
}

export default NossosPlanos;
