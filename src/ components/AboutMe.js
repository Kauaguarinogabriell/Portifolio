import fotoPerfil from '/home/kauag/github/Portifolio/src/imagens/perfil.png';
import HTML from '/home/kauag/github/Portifolio/src/imagens/html.png';
import CSS from '/home/kauag/github/Portifolio/src/imagens/css.png';
import JavaScript from '/home/kauag/github/Portifolio/src/imagens/js.png';
import react from '/home/kauag/github/Portifolio/src/imagens/atom.png';
import Logica from '/home/kauag/github/Portifolio/src/imagens/brain.png';
import Regex from '/home/kauag/github/Portifolio/src/imagens/expressoes.png';
import Poo from '/home/kauag/github/Portifolio/src/imagens/target.png';
export default function AboutMe() {
  return (
    <section className="container center margin-container">
      <div className="center" style={{ width: '100%' }}>
        <h1 className="title" id="sobre">
          Descubra
        </h1>
        <h2 className="subtitle">Sobre mim</h2>
        <div className="center perfil" style={{ alignItems: 'center' }}>
          <img src={fotoPerfil} alt="Kauã" className="foto-perfil" />
          <p className="paragraph-perfil">
            Olá, sou o Kauã, um entusiasta da programação desde os 14 anos.
            Busco constantemente aprimorar minhas habilidades para me destacar
            como um profissional excepcional no desenvolvimento de códigos e
            soluções.Espero que a sua visita ao meu Portifolio tenha sido
            agradável! Estou ansioso para contribuir para o sucesso do seu
            projeto. Espero o seu contato!
          </p>
        </div>
        <div
          className="center container-divs-about"
          style={{ flexDirection: 'column' }}
        >
          <div className="profile" style={{ width: '100%' }}>
            <h2 className="titles-about">profile</h2>
            <p>
              Desde os 14 anos, dedico-me à programação, buscando constantemente
              aprimorar minhas habilidades. Com sólida base em lógica de
              programação, aprendo rapidamente e crio soluções eficientes. Minha
              facilidade em aprender, habilidade de comunicação e paixão por
              desafios me permitem colaborar eficazmente em equipes
              multidisciplinares. Estou aberto a oportunidades que me permitam
              aplicar e expandir meu conhecimento. Se você busca um profissional
              dedicado, apaixonado por programação e pronto para enfrentar novos
              desafios, ficarei feliz em contribuir para o sucesso do seu time
              ou empresa.
            </p>
          </div>
          <div className="skill" style={{ width: '100%' }}>
            <h2 className="titles-about">Skills</h2>
            <hr style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }} />
            <div className="center container-habilidades">
              <div className="habilidade center">
                <img
                  src={HTML}
                  alt="Html icon"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">HTML</h2>
              </div>
              <div className="habilidade center">
                <img src={CSS} alt="css icon" className="icones-habilidades" />
                <h2 className="title-habilidades">CSS</h2>
              </div>
              <div className="habilidade center">
                <img
                  src={JavaScript}
                  alt="Javascript icon"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">JavaScript</h2>
              </div>
              <div className="habilidade center">
                <img
                  src={react}
                  alt="React icon"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">React</h2>
              </div>
              <div className="habilidade center">
                <img
                  src={Regex}
                  alt="Regex icon"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">Regex</h2>
              </div>
              <div className="habilidade center">
                <img
                  src={Logica}
                  alt="icone Logica de programação"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">Logica de Programação</h2>
              </div>
              <div className="habilidade center">
                <img
                  src={Poo}
                  alt="Icone Programação irientada a objetos"
                  className="icones-habilidades"
                />
                <h2 className="title-habilidades">
                  Programação Orientada a Objetos
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
