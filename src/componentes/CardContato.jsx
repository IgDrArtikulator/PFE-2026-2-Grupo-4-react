// Card de um canal de contato (WhatsApp, Instagram ou e-mail).
// Props: href, classeIcone, icone, rotulo, valor e externo.
// São endereços de fora do site, por isso o card é um <a> (e não um <Link>).
function CardContato({ href, classeIcone, icone, rotulo, valor, externo }) {
  return (
    <a
      className="card contato-card"
      href={href}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
    >
      <span className={"contato-icone " + classeIcone}>
        <i className={icone}></i>
      </span>
      <span className="contato-info">
        <span className="contato-rotulo">{rotulo}</span>
        <span className="contato-valor">{valor}</span>
      </span>
      <span className="contato-seta">&rarr;</span>
    </a>
  );
}

export default CardContato;
