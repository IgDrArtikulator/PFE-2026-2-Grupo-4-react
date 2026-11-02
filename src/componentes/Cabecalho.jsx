import { useState } from "react";
import { NavLink } from "react-router-dom";
import LinkAncora from "./LinkAncora";
import { BotaoHamburguer } from "./MenuHamburguer";

import logoPkz from "../assets/pkz/logo-playmakerz.png";
import logoOto from "../assets/oto/logo-one-to-one.png";

// Os mesmos links nas 3 páginas
const links = [
  { texto: "Início", pagina: "/" },
  { texto: "Playmakerz", pagina: "/pkz" },
  { texto: "One to One", pagina: "/one-to-one" },
];

// Logo de cada página: no Hub aparecem as duas marcas
const logos = {
  hub: [
    { src: logoPkz, alt: "Playmakerz" },
    { src: logoOto, alt: "One to One Studio" },
  ],
  pkz: [{ src: logoPkz, alt: "Playmakerz" }],
  oto: [{ src: logoOto, alt: "One to One Studio" }],
};

// Header igual nas 3 páginas. Prop: marca ("hub", "pkz" ou "oto").
// O NavLink coloca sozinho a classe "active" no link da página atual
// (o CSS destaca esse link). "end" no Início: só fica ativo em "/".
function Cabecalho({ marca }) {
  const [menuAberto, setMenuAberto] = useState(false);

  // ESC fecha o menu do celular
  function teclaPressionada(evento) {
    if (evento.key === "Escape") {
      setMenuAberto(false);
    }
  }

  // Ao trocar de página: fecha o menu e volta para o topo
  function irParaPagina() {
    setMenuAberto(false);
    window.scrollTo(0, 0);
  }

  // Lista de links: a mesma no menu do computador e no do celular
  function listaDeLinks(classe) {
    return (
      <ul className={classe}>
        {links.map((link) => (
          <li key={link.pagina}>
            <NavLink to={link.pagina} end={link.pagina === "/"} onClick={irParaPagina}>
              {link.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <header className="cabecalho" onKeyDown={teclaPressionada}>
      <LinkAncora className="logo" secao="inicio">
        {logos[marca].map((logo) => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </LinkAncora>

      {/* Menu do computador */}
      <nav aria-label="Navegação principal">
        {listaDeLinks("cabecalho-links")}
      </nav>

      <BotaoHamburguer
        aberto={menuAberto}
        alternar={() => setMenuAberto(!menuAberto)}
      />

      {/* Menu do celular: a classe "activated" (CSS) abre o menu */}
      <nav
        className={menuAberto ? "menu-small activated" : "menu-small"}
        id="menuSm"
        aria-label="Navegação principal (celular)"
      >
        {listaDeLinks("nav-links-small")}
      </nav>
    </header>
  );
}

export default Cabecalho;
