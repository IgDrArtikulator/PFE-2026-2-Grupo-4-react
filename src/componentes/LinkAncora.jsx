import { Link } from "react-router-dom";

// Link interno do site, feito com o <Link> do React Router (sem <a>).
//   pagina → rota de destino ("/", "/pkz", "/one-to-one"); vazio = mesma página
//   secao  → id da seção para rolar até ela ("sobre", "agendamento"...)
// O <Link> troca a URL sem recarregar a página; o onClick rola a tela
// até a seção (ou até o topo, quando não há seção).
function LinkAncora({ pagina = "", secao, onClick, children, ...props }) {
  const destino = secao ? pagina + "#" + secao : pagina;

  function rolar(evento) {
    if (onClick) {
      onClick(evento); // ex.: fechar o menu do celular
    }
    // Espera o React desenhar a página nova antes de procurar a seção
    setTimeout(() => {
      const alvo = secao ? document.getElementById(secao) : null;
      if (alvo) {
        alvo.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  }

  return (
    <Link to={destino} onClick={rolar} {...props}>
      {children}
    </Link>
  );
}

export default LinkAncora;
