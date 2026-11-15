import CardMarca from "./CardMarca";

import fotoPkz from "../../assets/hub/hub-pkz.webp";
import fotoOto from "../../assets/hub/hub-oto.webp";
import fotoFisio from "../../assets/hub/hub-fisio.webp";
import logoPkz from "../../assets/pkz/logo-playmakerz.png";
import logoOto from "../../assets/oto/logo-one-to-one.png";

// Seção "Escolha sua jornada": as três marcas
function HubEscolha() {
  return (
    <section className="hub-secao hub-container" id="escolha">
      <header>
        <p className="hub-eyebrow">Escolha sua jornada</p>
        <h2 className="hub-subtitulo">
          Três marcas.<br />Um mesmo padrão de excelência.
        </h2>
        <hr className="hub-traco" />
      </header>

      <div className="hub-marcas">
        <CardMarca
          selo="Até 17 anos"
          classeSelo="selo-pkz"
          foto={fotoPkz}
          alt="Jovens atletas da Playmakerz em treino de agilidade"
          logo={logoPkz}
          logoLargura={1531}
          logoAltura={354}
          nome="Playmakerz"
          texto="Formação e alta performance para jovens atletas."
          botao="Acessar PKZ"
          classeBotao="hub-btn-pkz"
          pagina="/pkz"
        />
        <CardMarca
          selo="Adultos"
          classeSelo="selo-one"
          foto={fotoOto}
          alt="Aluna do One to One treinando com kettlebell"
          logo={logoOto}
          logoLargura={1259}
          logoAltura={423}
          nome="One to One Studio"
          texto="Treino individualizado para adultos. Um profissional dedicado a você."
          botao="Acessar One to One"
          classeBotao="hub-btn-one"
          pagina="/one-to-one"
        />
        {/* Fisioterapia ainda não tem logo: o card mostra o nome escrito */}
        <CardMarca
          selo="Reabilitação"
          classeSelo="selo-fisio"
          foto={fotoFisio}
          fotoLargura={1031}
          fotoAltura={768}
          alt="Fisioterapeuta tratando o joelho de um atleta na maca"
          nome="Fisioterapia"
          texto="Avaliação e tratamento individual para voltar a treinar sem dor."
          botao="Acessar Fisioterapia"
          classeBotao="hub-btn-fisio"
          pagina="/fisioterapia"
        />
      </div>
    </section>
  );
}

export default HubEscolha;
