import fotoPrincipal from "../../assets/hub/hub-video-principal.webp";
import fotoPkz from "../../assets/hub/hub-video-pkz.webp";
import fotoOto from "../../assets/hub/hub-video-oto.webp";
import fotoBastidores from "../../assets/hub/hub-video-bastidores.webp";

// As 3 fotos menores, com tag e título
const fotos = [
  { src: fotoPkz, alt: "Jovens atletas alongando antes do treino", tag: "PKZ", titulo: "Preparação de atletas" },
  { src: fotoOto, alt: "Aluna fazendo afundo com kettlebells", tag: "One to One", titulo: "Treino individual" },
  { src: fotoBastidores, alt: "Treinadores montando os equipamentos antes da aula", tag: "PKZ · One to One", titulo: "Bastidores" },
];

// Galeria do Hub: uma foto grande + 3 menores com legenda
function HubFotos() {
  return (
    <section className="hub-secao hub-container" id="fotos">
      <header>
        <p className="hub-eyebrow">Em fotos</p>
        <h2 className="hub-subtitulo">Veja a gente em ação</h2>
      </header>

      {/* Foto principal */}
      <figure className="hub-foto hub-video-principal">
        <img src={fotoPrincipal} alt="Um dia de treino no centro de treinamento" loading="lazy" />
        <figcaption className="hub-video-legenda">Um dia de<br />treino</figcaption>
      </figure>

      {/* 3 fotos menores */}
      <div className="hub-videos">
        {fotos.map((foto) => (
          <figure className="hub-foto hub-video" key={foto.titulo}>
            <img src={foto.src} alt={foto.alt} loading="lazy" />
            <figcaption>
              <span className="hub-video-tag">{foto.tag}</span>
              <span className="hub-video-titulo">{foto.titulo}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default HubFotos;
