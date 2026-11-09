// As 3 opções: valor guardado, nome (para o leitor de tela) e ícone do Font Awesome
const opcoes = [
  { valor: "light", rotulo: "Tema claro", icone: "fa-solid fa-sun" },
  { valor: "dark", rotulo: "Tema escuro", icone: "fa-solid fa-moon" },
  { valor: "system", rotulo: "Tema do sistema", icone: "fa-solid fa-desktop" },
];

// Botões Claro / Escuro / Sistema.
// Props: modo (opção escolhida) e setModo (troca a opção), que vêm do
// hook useTema no Cabecalho. Assim o seletor do computador e o do celular
// mostram sempre a mesma opção.
// role="radiogroup" + role="radio": o leitor de tela entende que só uma
// opção fica escolhida por vez (aria-checked).
function SeletorTema({ modo, setModo }) {
  return (
    <div className="seletor-tema" role="radiogroup" aria-label="Tema do site">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          role="radio"
          aria-checked={modo === opcao.valor}
          aria-label={opcao.rotulo}
          title={opcao.rotulo}
          onClick={() => setModo(opcao.valor)}
        >
          <i className={opcao.icone} aria-hidden="true"></i>
        </button>
      ))}
    </div>
  );
}

export default SeletorTema;
