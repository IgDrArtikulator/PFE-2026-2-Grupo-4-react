import LinkAncora from "./LinkAncora";

// Card de um plano. Prop: plano (um objeto de dados/planos.js).
// Os campos opcionais só aparecem quando existem (renderização com &&).
function CardPlano({ plano }) {
  const classeCard = plano.destaque ? "card plano-item plano-item-destaque" : "card plano-item";
  const classeBotao = plano.destaque ? "btn btn-primario" : "btn btn-contorno";

  return (
    <article className={classeCard}>
      <p className="eyebrow">{plano.chamada}</p>
      <h2 className="plano-nome">{plano.nome}</h2>

      {plano.descricao && <p className="plano-descricao">{plano.descricao}</p>}

      {plano.itens && (
        <ul className="plano-itens">
          {plano.itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {plano.nota && <p className="plano-nota">{plano.nota}</p>}

      {/* Todos os botões levam para o Contato (os valores são passados pela equipe) */}
      <LinkAncora className={classeBotao} secao="contato">
        {plano.botao || "Quero este plano"}
      </LinkAncora>
    </article>
  );
}

export default CardPlano;
