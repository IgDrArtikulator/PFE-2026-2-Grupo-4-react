import { useState, Fragment } from "react";
import LinkAncora from "./LinkAncora";
import {
  horas,
  diasCurtos,
  diasLongos,
  meses,
  paraData,
  proximosDias,
  estaLivre,
  contarLivres,
  lerReservas,
} from "../utils/agenda";

// Diferenças entre as marcas: textos e campos do formulário
const dados = {
  pkz: {
    eyebrow: "Play Makerz · Agendamento",
    campos: [
      {
        id: "pkz-ag-responsavel",
        name: "responsavel",
        type: "text",
        texto: "Nome do responsável",
        autoComplete: "name",
      },
      {
        id: "pkz-ag-email",
        name: "email",
        type: "email",
        texto: "E-mail",
        autoComplete: "email",
      },
      {
        id: "pkz-ag-whatsapp",
        name: "whatsapp",
        type: "tel",
        texto: "WhatsApp",
        autoComplete: "tel",
      },
    ],
  },
  oto: {
    eyebrow: "One to One · Agendamento",
    campos: [
      {
        id: "ag-nome",
        name: "nome",
        type: "text",
        texto: "Nome completo",
        autoComplete: "name",
      },
      {
        id: "ag-email",
        name: "email",
        type: "email",
        texto: "E-mail",
        autoComplete: "email",
      },
      {
        id: "ag-telefone",
        name: "telefone",
        type: "tel",
        texto: "Telefone",
        autoComplete: "tel",
      },
    ],
  },
};

// Legenda Livre / Ocupado
function Legenda() {
  return (
    <ul className="legenda">
      <li>
        <span className="legenda-cor legenda-livre"></span>Livre
      </li>
      <li>
        <span className="legenda-cor legenda-ocupado"></span>Ocupado
      </li>
    </ul>
  );
}

// "08:00 · Seg 26/10"
function textoDoHorario(dia, horario) {
  const data = paraData(dia);
  const diaMes = dia.slice(8) + "/" + dia.slice(5, 7);
  return horario + " · " + diasCurtos[data.getDay()] + " " + diaMes;
}

// Seção #agendamento. Prop: marca ("pkz" ou "oto").
// Cada marca guarda as suas reservas: "reservas-pkz" ou "reservas-oto".
function Agendamento({ marca }) {
  const { eyebrow, campos } = dados[marca];
  const chave = "reservas-" + marca;

  // useState com função: só roda na primeira vez que o componente aparece
  const [reservas, setReservas] = useState(() => lerReservas(chave));
  const [dias] = useState(proximosDias);
  // Abre no primeiro dia que ainda tem horário livre
  const [dia, setDia] = useState(
    () => dias.find((d) => contarLivres(d, reservas) > 0) || dias[0]
  );
  const [horario, setHorario] = useState("");
  const [confirmada, setConfirmada] = useState(null); // última reserva feita
  const [mensagem, setMensagem] = useState({ texto: "", erro: false });

  // Volta o painel para o formulário (depois de uma reserva)
  function voltarAoFormulario() {
    setConfirmada(null);
    setMensagem({ texto: "", erro: false });
  }

  function escolherDia(novoDia) {
    setDia(novoDia);
    // Se o mesmo horário estiver livre no novo dia, ele continua marcado
    if (horario !== "" && !estaLivre(novoDia, horario, reservas)) {
      setHorario("");
    }
    voltarAoFormulario();
  }

  function escolherHorario(novoHorario) {
    setHorario(novoHorario);
    voltarAoFormulario();

    // No celular e no tablet o painel fica embaixo dos horários:
    // rola a tela até ele para a pessoa ver o formulário
    if (window.matchMedia("(max-width: 1100px)").matches) {
      setTimeout(() => {
        document
          .getElementById("painel-" + marca)
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  function enviar(evento) {
    evento.preventDefault(); // não deixa o navegador recarregar a página
    const form = evento.currentTarget;

    if (horario === "") {
      setMensagem({
        texto: "Escolha um horário livre antes de enviar.",
        erro: true,
      });
      return;
    }

    // FormData lê os campos pelo atributo name; fromEntries vira objeto comum
    const valores = Object.fromEntries(new FormData(form));

    // O required do HTML aceita um campo só com espaços; aqui barramos
    const vazio = campos.find((campo) => valores[campo.name].trim() === "");
    if (vazio) {
      setMensagem({ texto: "Preencha todos os campos.", erro: true });
      form.elements[vazio.name].focus();
      return;
    }

    // O horário pode ter passado enquanto a página estava aberta
    if (!estaLivre(dia, horario, reservas)) {
      setHorario("");
      setMensagem({
        texto: "Esse horário não está mais livre. Escolha outro.",
        erro: true,
      });
      return;
    }

    const reserva = { ...valores, dia, horario };
    const novasReservas = [...reservas, reserva];
    setReservas(novasReservas);
    localStorage.setItem(chave, JSON.stringify(novasReservas));

    // A One to One chama o campo de "nome"; a Playmakerz, de "responsavel"
    const nome = reserva.nome || reserva.responsavel;
    const primeiroNome = nome.trim().split(" ")[0];

    setConfirmada(reserva);
    setHorario("");
    setMensagem({
      texto: "Pronto, " + primeiroNome + "! A aula experimental está marcada.",
      erro: false,
    });
  }

  // Subtítulo: "Seg, 26 de outubro" e "7 horários livres"
  const dataDia = paraData(dia);
  const textoDia =
    diasCurtos[dataDia.getDay()] +
    ", " +
    dataDia.getDate() +
    " de " +
    meses[dataDia.getMonth()];
  const livres = contarLivres(dia, reservas);
  let textoLivres = livres + " horários livres";
  if (livres === 0) textoLivres = "Nenhum horário livre";
  if (livres === 1) textoLivres = "1 horário livre";

  // Título do painel: a reserva confirmada ou o horário escolhido
  const mostrado = confirmada || (horario ? { dia, horario } : null);

  return (
    <section className="pagina" id="agendamento">
      <header>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="titulo-pagina">Escolha dia e horário</h2>
        <p className="texto-lead agenda-texto">
          Aula experimental gratuita. Horários em cinza já estão ocupados —
          selecione um horário livre para concluir o agendamento.
        </p>
      </header>

      <div className="duas-colunas agenda-grid">
        {/* Coluna esquerda: dias + horários */}
        <div>
          <fieldset className="agenda-grupo">
            <legend className="label-oculta">Escolha o dia</legend>
            <div className="dias">
              {dias.map((d) => {
                const data = paraData(d);
                const mes = meses[data.getMonth()];
                return (
                  <label className="dia" key={d}>
                    <input
                      type="radio"
                      name="dia"
                      value={d}
                      checked={d === dia}
                      onChange={() => escolherDia(d)}
                    />
                    <span>
                      <abbr
                        className="dia-semana"
                        title={diasLongos[data.getDay()]}
                      >
                        {diasCurtos[data.getDay()]}
                      </abbr>
                      <strong>{data.getDate()}</strong>
                      <abbr title={mes}>{mes.slice(0, 3)}</abbr>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="agenda-grupo">
            <legend className="label-oculta">Escolha o horário</legend>
            <header className="agenda-subtitulo">
              <h2>
                <time dateTime={dia}>{textoDia}</time>
              </h2>
              <span>{textoLivres}</span>
            </header>

            <div className="horarios">
              {horas.map((hora) =>
                estaLivre(dia, hora, reservas) ? (
                  <label className="horario horario-livre" key={hora}>
                    <input
                      type="radio"
                      name="horario"
                      value={hora}
                      checked={hora === horario}
                      onChange={() => escolherHorario(hora)}
                    />
                    <span>{hora}</span>
                  </label>
                ) : (
                  // disabled: não deixa clicar e o leitor de tela avisa
                  <label className="horario horario-ocupado" key={hora}>
                    <input
                      type="radio"
                      name="horario"
                      value={hora}
                      checked={false}
                      disabled
                    />
                    <span>{hora}</span>
                  </label>
                )
              )}
            </div>
          </fieldset>

          {/* Legenda embaixo dos horários
              (estilo One to One nas duas marcas) */}
          <Legenda />
        </div>

        {/* Coluna direita: painel de confirmação */}
        <aside className="card confirmar" id={"painel-" + marca}>
          <p className="confirmar-rotulo">
            {confirmada ? "Agendamento confirmado" : "Confirmar agendamento"}
          </p>

          {mostrado ? (
            <p className="confirmar-titulo">
              <time dateTime={mostrado.dia + "T" + mostrado.horario}>
                {textoDoHorario(mostrado.dia, mostrado.horario)}
              </time>
            </p>
          ) : (
            <p className="confirmar-titulo confirmar-vazio">
              Escolha um horário
            </p>
          )}

          {/* X volta para Planos */}
          <LinkAncora
            className="confirmar-fechar"
            secao="planos"
            aria-label="Fechar"
          >
            &times;
          </LinkAncora>

          {/* Depois da reserva, o formulário some e aparece o botão
              "Novo agendamento" */}
          {!confirmada && (
            <form className="confirmar-form" onSubmit={enviar}>
              {campos.map((campo) => (
                <Fragment key={campo.id}>
                  <label className="label-oculta" htmlFor={campo.id}>
                    {campo.texto}
                  </label>
                  <input
                    className="campo"
                    type={campo.type}
                    id={campo.id}
                    name={campo.name}
                    placeholder={campo.texto}
                    autoComplete={campo.autoComplete}
                    pattern={
                      campo.type === "tel"
                        ? "[0-9 \\(\\)\\+\\-]{10,}"
                        : undefined
                    }
                    title={
                      campo.type === "tel"
                        ? "Digite o número com DDD, ex.: (21) 99999-9999"
                        : undefined
                    }
                    required
                  />
                </Fragment>
              ))}
              <button className="btn btn-primario btn-enviar" type="submit">
                Enviar
              </button>
            </form>
          )}

          {/* Mensagem de erro ou de sucesso; role="status" faz o leitor
              de tela ler */}
          <p
            className={
              mensagem.erro ? "confirmar-status erro" : "confirmar-status"
            }
            role="status"
          >
            {mensagem.texto}
          </p>

          {confirmada && (
            <button
              className="btn btn-contorno btn-novo"
              type="button"
              onClick={voltarAoFormulario}
            >
              Novo agendamento
            </button>
          )}

          {marca === "oto" && (
            <p className="confirmar-aviso">
              Nossa equipe entrará em contato para confirmar o agendamento.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}

export default Agendamento;
