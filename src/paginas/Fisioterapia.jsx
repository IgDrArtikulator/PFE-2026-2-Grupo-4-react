import Cabecalho from "../componentes/Cabecalho";
import Home from "../componentes/Home";
import Sobre from "../componentes/Sobre";
import Contato from "../componentes/Contato";

// Página "/fisioterapia": só 3 seções (hero, sobre nós e contato).
// Reaproveita os mesmos componentes das outras páginas com marca="fisio".
function Fisioterapia() {
  return (
    <>
      <title>Fisioterapia | PKZ · One to One</title>
      {/* React 19: o <link> também vai sozinho para o <head>.
          Favicon padrão (halter), o mesmo do Hub */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <Cabecalho marca="fisio" />
      <main>
        <Home marca="fisio" />
        <Sobre marca="fisio" />
        <Contato marca="fisio" />
      </main>
    </>
  );
}

export default Fisioterapia;
