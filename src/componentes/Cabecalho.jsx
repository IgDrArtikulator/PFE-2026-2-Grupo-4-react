import { useState } from "react";
import { NavLink } from "react-router-dom";
import LinkAncora from "./LinkAncora";
import { BotaoHamburguer } from "./MenuHamburguer";
import SeletorTema from "./SeletorTema";
import { useTema } from "../utils/useTema";

import logoPkz from "../assets/pkz/logo-playmakerz.png";
import logoOto from "../assets/oto/logo-one-to-one.png";

// Os mesmos links nas 3 páginas
const links = [
  { texto: "Início", pagina: "/" },
  { texto: "Playmakerz", pagina: "/pkz" },
  { texto: "One to One", pagina: "/one-to-one" },
];

// Logo de cada página. O Hub não tem logo no header: só os links e o tema
// (as duas marcas já aparecem nos cards e no rodapé do Hub).
const logos = {
  hub: [],
  pkz: [{ src: logoPkz, alt: "Playmakerz", largura: 1531, altura: 354 }],
  oto: [{ src: logoOto, alt: "One to One Studio", largura: 1259, altura: 423 }],
};

// Header igual nas 3 páginas. Prop: marca ("hub", "pkz" ou "oto").
// O NavLink coloca sozinho a classe "active" no link da página atual
// (o CSS destaca esse link). "end" no Início: só fica ativo em "/".
function Cabecalho({ marca }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modo, setModo] = useTema(); // tema: "light", "dark" ou "system"

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
      {/* Logo da marca (só nas páginas PKZ e One to One) */}
      {logos[marca].length > 0 && (
        <LinkAncora className="logo" secao="inicio">
          {logos[marca].map((logo) => (
            // width/height = tamanho real do arquivo (o CSS define a altura exibida)
            <img
              key={logo.alt}
              src={logo.src}
              width={logo.largura}
              height={logo.altura}
              alt={logo.alt}
            />
          ))}
        </LinkAncora>
      )}

      {/* Lado direito: links (computador), tema e hambúrguer (celular) */}
      <div className="cabecalho-direita">
        {/* Menu do computador */}
        <nav aria-label="Navegação principal">
          {listaDeLinks("cabecalho-links")}
        </nav>

        {/* Claro / Escuro / Sistema (no celular ele fica dentro do menu) */}
        <SeletorTema modo={modo} setModo={setModo} />

        <BotaoHamburguer
          aberto={menuAberto}
          alternar={() => setMenuAberto(!menuAberto)}
        />
      </div>

      {/* Menu do celular: a classe "activated" (CSS) abre o menu */}
      <nav
        className={menuAberto ? "menu-small activated" : "menu-small"}
        id="menuSm"
        aria-label="Navegação principal (celular)"
      >
        {listaDeLinks("nav-links-small")}
        <SeletorTema modo={modo} setModo={setModo} />
      </nav>
    </header>
  );
}

export default Cabecalho;
