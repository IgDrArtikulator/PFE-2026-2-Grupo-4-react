import CardContato from "./CardContato";
import LinkAncora from "./LinkAncora";

const canaisPkz = [
  {
    href: "https://wa.me/",
    classeIcone: "icone-whatsapp",
    icone: "fa-brands fa-whatsapp",
    rotulo: "WhatsApp",
    valor: "(21) 97265-7266",
    externo: true,
  },
  {
    href: "https://www.instagram.com/playmakerz/",
    classeIcone: "icone-instagram",
    icone: "fa-brands fa-instagram",
    rotulo: "Instagram",
    valor: "@playmakerz",
    externo: true,
  },
  {
    href: "mailto:contato@playmakerz.com",
    classeIcone: "icone-email",
    icone: "fa-regular fa-envelope",
    rotulo: "E-mail",
    valor: "contato@playmakerz.com",
  },
];

const canaisOto = [
  {
    href: "https://wa.me/5521971067347",
    classeIcone: "icone-whatsapp",
    icone: "fa-brands fa-whatsapp",
    rotulo: "WhatsApp",
    valor: "(21) 97106-7347",
    externo: true,
  },
  {
    href: "https://www.instagram.com/onetoonestudio/",
    classeIcone: "icone-instagram",
    icone: "fa-brands fa-instagram",
    rotulo: "Instagram",
    valor: "@onetoonestudio",
    externo: true,
  },
];

// Lista de cards: o map cria um <CardContato /> para cada canal.
// O spread {...canal} passa todos os campos do objeto como props.
function ListaCanais({ canais, classe }) {
  return (
    <ul className={classe}>
      {canais.map((canal) => (
        <li key={canal.rotulo}>
          <CardContato {...canal} />
        </li>
      ))}
    </ul>
  );
}

// Seção #contato. Prop: marca ("pkz", "oto" ou "fisio").
function Contato({ marca }) {
  if (marca === "fisio") {
    return (
      <section className="pagina" id="contato">
        <header>
          <p className="eyebrow">Fisioterapia · Contato</p>
          <h2 className="titulo-pagina contato-titulo">Contate-nos</h2>
          <p className="texto-lead">
            Agende sua avaliação pelo canal da sua idade.
            <br />
            Respondemos em horário comercial.
          </p>
        </header>

        {/* Duas colunas: adultos (canais do One to One) e jovens (canais da
            Play Makerz). Reaproveita as mesmas listas das outras páginas. */}
        <div className="duas-colunas">
          <article className="contato-grupo">
            <h3 className="contato-grupo-titulo">Adultos · One to One</h3>
            <ListaCanais canais={canaisOto} classe="contato-lista" />
          </article>

          <article className="contato-grupo">
            <h3 className="contato-grupo-titulo">Jovens · Play Makerz</h3>
            <ListaCanais canais={canaisPkz} classe="contato-lista" />
          </article>
        </div>
      </section>
    );
  }

  if (marca === "pkz") {
    return (
      <section className="pagina" id="contato">
        <header>
          <p className="eyebrow">Play Makerz · Contato</p>
          <h2 className="titulo-pagina contato-titulo">Contate-nos</h2>
          <p className="texto-lead">
            Fale direto com a equipe pelo canal que preferir.
            <br />
            Respondemos em horário comercial.
          </p>
        </header>

        {/* 3 canais lado a lado */}
        <ListaCanais canais={canaisPkz} classe="contato-grid" />
      </section>
    );
  }

  return (
    <section className="pagina" id="contato">
      <header>
        <p className="eyebrow">One to One · Contato</p>
        <h2 className="titulo-pagina contato-titulo">Contate-nos</h2>
        <p className="texto-lead">
          Fale direto com a equipe pelo canal que preferir.
          <br />
          Responderemos o quanto antes, em horário comercial.
        </p>
      </header>

      <div className="duas-colunas">
        {/* Coluna esquerda: canais */}
        <ListaCanais canais={canaisOto} classe="contato-lista" />

        {/* Coluna direita: atendimento + unidade */}
        <article className="card atendimento-card">
          <p className="eyebrow">Atendimento</p>
          <p>
            Segunda a sábado, por horário marcado. Respondemos em horário
            comercial.
          </p>
          <h2 className="atendimento-unidade">Unidade 1 - Armando Lombardi</h2>
          <address>
            Avenida Armando Lombardi, 949 - Loja G, Barra da Tijuca, Rio de
            Janeiro - RJ, CEP 22640-020
          </address>
          <div className="atendimento-botoes">
            <LinkAncora
              className="btn btn-primario btn-pesado"
              secao="agendamento"
            >
              Agendar aula experimental
            </LinkAncora>
            <LinkAncora
              className="btn btn-contorno btn-pesado"
              secao="unidades"
            >
              Ver unidades
            </LinkAncora>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contato;
