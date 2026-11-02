import LinkAncora from "./LinkAncora";

import logoPkz from "../assets/pkz/logo-playmakerz.png";
import logoOto from "../assets/oto/logo-one-to-one.png";

// Links das seções: iguais nas duas marcas
const linksSecoes = [
  { texto: "Sobre", secao: "sobre" },
  { texto: "Treinos", secao: "treinos" },
  { texto: "Planos", secao: "planos" },
  { texto: "Unidades", secao: "unidades" },
  { texto: "Galeria", secao: "galeria" },
  { texto: "Contato", secao: "contato" },
];

// Redes sociais: são sites externos, por isso continuam com <a>
const dados = {
  pkz: {
    logo: logoPkz,
    alt: "Playmakerz",
    redes: [
      { href: "https://www.instagram.com/playmakerz/", icone: "fa-brands fa-instagram", rotulo: "Instagram da Playmakerz", externo: true },
      { href: "https://wa.me/", icone: "fa-brands fa-whatsapp", rotulo: "WhatsApp da Playmakerz", externo: true },
      { href: "mailto:contato@playmakerz.com", icone: "fa-regular fa-envelope", rotulo: "E-mail da Playmakerz" },
    ],
  },
  oto: {
    logo: logoOto,
    alt: "One to One Studio",
    redes: [
      { href: "https://www.instagram.com/onetoonestudio/", icone: "fa-brands fa-instagram", rotulo: "Instagram do One to One", externo: true },
      { href: "https://wa.me/5521971067347", icone: "fa-brands fa-whatsapp", rotulo: "WhatsApp do One to One", externo: true },
    ],
  },
};

// Footer: logo | links das seções | redes sociais | copyright
function Rodape({ marca }) {
  const { logo, alt, redes } = dados[marca];

  return (
    <footer className="rodape">
      <LinkAncora className="rodape-logo" secao="inicio">
        <img src={logo} alt={alt} />
      </LinkAncora>

      <nav aria-label="Navegação do rodapé">
        <ul className="rodape-links">
          {linksSecoes.map((link) => (
            <li key={link.secao}>
              <LinkAncora secao={link.secao}>{link.texto}</LinkAncora>
            </li>
          ))}
          <li>
            <LinkAncora pagina="/">Início</LinkAncora>
          </li>
        </ul>
      </nav>

      {/* aria-label diz o nome da rede para leitores de tela */}
      <nav aria-label="Redes sociais">
        <ul className="rodape-social">
          {redes.map((rede) => (
            <li key={rede.rotulo}>
              <a
                href={rede.href}
                target={rede.externo ? "_blank" : undefined}
                rel={rede.externo ? "noopener noreferrer" : undefined}
                aria-label={rede.rotulo}
                title={rede.rotulo}
              >
                <i className={rede.icone}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="rodape-copy">&copy; 2026 PKZ · One to One Studio</p>
    </footer>
  );
}

export default Rodape;
