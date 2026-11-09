import LinkAncora from "../LinkAncora";

import logoPkz from "../../assets/pkz/logo-playmakerz.png";
import logoOto from "../../assets/oto/logo-one-to-one.png";

// Redes sociais: sites externos, por isso continuam com <a>
const redes = [
  { href: "https://www.instagram.com/playmakerz/", classe: "hub-link social-pkz", icone: "fa-brands fa-instagram", rotulo: "Instagram da Playmakerz" },
  { href: "https://www.instagram.com/onetoonestudio/", classe: "hub-link social-one", icone: "fa-brands fa-instagram", rotulo: "Instagram do One to One" },
  { href: "https://wa.me/5521971067347", classe: "hub-link social-one", icone: "fa-brands fa-whatsapp", rotulo: "WhatsApp do One to One" },
];

// Footer do Hub: logos, links das duas marcas, redes sociais e copyright
function HubRodape() {
  return (
    <footer className="hub-rodape">
      <div className="hub-rodape-logos">
        <img src={logoPkz} width="1531" height="354" alt="Playmakerz" loading="lazy" />
        <span className="hub-rodape-separador"></span>
        <img src={logoOto} width="1259" height="423" alt="One to One Studio" loading="lazy" />
      </div>

      <nav aria-label="Sites das marcas">
        <ul className="hub-rodape-links">
          <li><LinkAncora className="hub-link" pagina="/pkz">Site PKZ</LinkAncora></li>
          <li><LinkAncora className="hub-link" pagina="/one-to-one">Site One to One</LinkAncora></li>
        </ul>
      </nav>

      <nav className="hub-redes" aria-label="Redes sociais">
        <ul className="rodape-social hub-social">
          {redes.map((rede) => (
            <li key={rede.rotulo}>
              <a
                className={rede.classe}
                href={rede.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rede.rotulo}
                title={rede.rotulo}
              >
                <i className={rede.icone}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="hub-rodape-copy">&copy; 2026 PKZ &amp; One to One Studio</p>
    </footer>
  );
}

export default HubRodape;
