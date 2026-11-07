// Card de treino reutilizável.
// Props: eyebrow, titulo, texto e selo (opcional: { icone, texto }).
function CardTreino({ eyebrow, titulo, texto, selo }) {
  return (
    <article className="card treino-card">
      {/* Com selo: ícone do Font Awesome + profissional responsável */}
      {selo ? (
        <div className="treino-card-topo">
          <p className="eyebrow">{eyebrow}</p>

          <span className="treino-selo">
            <i className={selo.icone} aria-hidden="true"></i>
            {selo.texto}
          </span>
        </div>
      ) : (
        <p className="eyebrow">{eyebrow}</p>
      )}

      <h2>{titulo}</h2>
      <p>{texto}</p>
    </article>
  );
}

export default CardTreino;