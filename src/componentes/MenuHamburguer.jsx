// Botão hambúrguer: só aparece no celular (CSS).
// O estado "aberto" fica no cabeçalho, que passa aberto e alternar por props.
export function BotaoHamburguer({ aberto, alternar }) {
  return (
    <button
      className="hamburguer"
      type="button"
      aria-label="Abrir menu"
      aria-controls="menuSm"
      aria-expanded={aberto}
      onClick={alternar}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
}
