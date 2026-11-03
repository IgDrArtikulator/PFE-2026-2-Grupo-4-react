const endereco =
  "Avenida Armando Lombardi, 949 - Loja G, Barra da Tijuca, Rio de Janeiro - RJ, CEP 22640-020";

const dados = {
  pkz: { eyebrow: "Play Makerz · Unidades", nome: "Unidade 1" },
  oto: { eyebrow: "One to One · Unidades", nome: "Unidade 1 - Armando Lombardi" },
};

// Seção #unidades. Prop: marca ("pkz" ou "oto").
function Unidades({ marca }) {
  const unidade = dados[marca];

  return (
    <section className="pagina" id="unidades">
      <header>
        <p className="eyebrow">{unidade.eyebrow}</p>
        <h2 className="titulo-pagina">Unidades e localização</h2>
      </header>

      <div className="duas-colunas">
        <article>
          <h2 className="unidade-nome">{unidade.nome}</h2>
          {/* address = dados de contato/endereço (elemento semântico) */}
          <address className="unidade-endereco">{endereco}</address>
        </article>

        {/* Mapa do Google embutido com iframe */}
        <iframe
          className="mapa"
          src="https://www.google.com/maps?q=Av+Armando+Lombardi+949+Barra+da+Tijuca+Rio+de+Janeiro&output=embed"
          title="Mapa da Unidade 1 - Armando Lombardi"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Unidades;
