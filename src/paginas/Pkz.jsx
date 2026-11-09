import Cabecalho from "../componentes/Cabecalho";
import Home from "../componentes/Home";
import Sobre from "../componentes/Sobre";
import Planos from "../componentes/Planos";
import NossosPlanos from "../componentes/NossosPlanos";
import Treinos from "../componentes/Treinos";
import Unidades from "../componentes/Unidades";
import Galeria from "../componentes/Galeria";
import Contato from "../componentes/Contato";
import Agendamento from "../componentes/Agendamento";
import Rodape from "../componentes/Rodape";

// Página "/pkz": a ordem das seções é a mesma do pkz/index.html.
// Usa o mesmo estilo da One to One (cores e fontes padrão do CSS),
// por isso não tem mais a classe "pkz".
function Pkz() {
  return (
    <>
      <title>Playmakerz | Treino de alta performance</title>

      <Cabecalho marca="pkz" />
      <main>
        <Home marca="pkz" />
        <Sobre marca="pkz" />
        <Planos marca="pkz" />
        <NossosPlanos marca="pkz" />
        <Treinos marca="pkz" />
        <Unidades marca="pkz" />
        <Galeria marca="pkz" />
        <Contato marca="pkz" />
        <Agendamento marca="pkz" />
      </main>
      <Rodape marca="pkz" />
    </>
  );
}

export default Pkz;
