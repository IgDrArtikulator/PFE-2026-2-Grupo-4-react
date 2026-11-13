import Cabecalho from "../componentes/Cabecalho";
import Home from "../componentes/Home";
import Sobre from "../componentes/Sobre";
import Treinos from "../componentes/Treinos";
import Planos from "../componentes/Planos";
import NossosPlanos from "../componentes/NossosPlanos";
import Unidades from "../componentes/Unidades";
import Galeria from "../componentes/Galeria";
import Contato from "../componentes/Contato";
import Agendamento from "../componentes/Agendamento";
import Rodape from "../componentes/Rodape";

// Página "/one-to-one": todas as seções da One to One, na ordem da página.
// As cores padrão do CSS (:root) já são as da One to One.
function OneToOne() {
  return (
    <>
      <title>One to One Studio | Treino individual</title>

      <Cabecalho marca="oto" />
      <main>
        <Home marca="oto" />
        <Sobre marca="oto" />
        <Treinos marca="oto" />
        <Planos marca="oto" />
        <NossosPlanos marca="oto" />
        <Unidades marca="oto" />
        <Galeria marca="oto" />
        <Contato marca="oto" />
        <Agendamento marca="oto" />
      </main>
      <Rodape marca="oto" />
    </>
  );
}

export default OneToOne;
