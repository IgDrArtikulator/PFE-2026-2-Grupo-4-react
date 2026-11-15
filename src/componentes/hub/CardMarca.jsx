import LinkAncora from "../LinkAncora";

// Card de uma marca na seção "Escolha sua jornada".
// Props: selo, classeSelo, foto, fotoLargura, fotoAltura, alt, logo,
//        logoLargura, logoAltura, nome, texto, botao, classeBotao, pagina.
// Sem logo (Fisioterapia, por enquanto): o nome aparece escrito no lugar.
function CardMarca({
  selo, classeSelo, foto, fotoLargura = 1376, fotoAltura = 768, alt,
  logo, logoLargura, logoAltura, nome, texto, botao, classeBotao, pagina,
}) {
  return (
    <article className="hub-marca">
      <figure className="hub-foto">
        <span className={"hub-selo " + classeSelo}>{selo}</span>
        {/* width/height = tamanho real da foto: reservam o espaço antes de carregar */}
        <img
          src={foto}
          width={fotoLargura}
          height={fotoAltura}
          alt={alt}
          loading="lazy"
        />
      </figure>
      {logo ? (
        <img
          className="hub-marca-logo"
          src={logo}
          width={logoLargura}
          height={logoAltura}
          alt={nome}
          loading="lazy"
        />
      ) : (
        <p className="hub-marca-nome">{nome}</p>
      )}
      <p>{texto}</p>
      {/* Navegação entre páginas com <Link> (dentro do LinkAncora) */}
      <LinkAncora className={"hub-link hub-btn " + classeBotao} pagina={pagina}>
        {botao} &rarr;
      </LinkAncora>
    </article>
  );
}

export default CardMarca;
