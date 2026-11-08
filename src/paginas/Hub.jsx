import Cabecalho from "../componentes/Cabecalho";
import HubHero from "../componentes/hub/HubHero";
import HubEscolha from "../componentes/hub/HubEscolha";
import HubFotos from "../componentes/hub/HubFotos";
import HubRodape from "../componentes/hub/HubRodape";

// Página "/" (Hub). A classe "hub" no lugar do <body class="hub"> do Vanilla
// aplica as cores e fontes próprias do Hub (CSS).
function Hub() {
  return (
    <div className="hub">
      {/* React 19: o <title> é levado sozinho para o <head> */}
      <title>PKZ · One to One | Treino de alta performance</title>

      {/* O mesmo header das páginas das marcas */}
      <Cabecalho marca="hub" />
      <main>
        <HubHero />
        <hr className="hub-divisor" />
        <HubEscolha />
        <hr className="hub-divisor" />
        <HubFotos />
      </main>
      <HubRodape />
    </div>
  );
}

export default Hub;
