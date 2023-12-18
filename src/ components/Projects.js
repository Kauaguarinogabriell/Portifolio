import iconHTML from '/home/kauag/github/Portifolio/src/imagens/html5.svg';
import iconCSS from '/home/kauag/github/Portifolio/src/imagens/css.svg';
import iconJavascript from '/home/kauag/github/Portifolio/src/imagens/square-js.svg';
import iconReact from '/home/kauag/github/Portifolio/src/imagens/react (1).svg';
import eyeimg from '/home/kauag/github/Portifolio/src/imagens/eye.svg';
import github from '/home/kauag/github/Portifolio/src/imagens/github.svg';
import siteform from '/home/kauag/github/Portifolio/src/imagens/siteform.png';
import sitetatto from '/home/kauag/github/Portifolio/src/imagens/sitetatto.png';
import sitewildbeast from '/home/kauag/github/Portifolio/src/imagens/sitewildbeast.png';
import siteanimais from '/home/kauag/github/Portifolio/src/imagens/siteanimais.png';
import siteflexblog from '/home/kauag/github/Portifolio/src/imagens/siteflexblog.png';
import siteportifolio from '/home/kauag/github/Portifolio/src/imagens/siteportifolio.png';

export default function Projects() {
  return (
    <section
      className="container center margin-container projetos"
      style={{ backgroundColor: '#ebebeb' }}
    >
      <h1 className="title">Conheça</h1>
      <h2 className="subtitle">Alguns dos meus projetos</h2>
      <div className="center container-cards-projetos">
        <div className="center card-projeto">
          <img src={siteform} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>Formulario de login e cadastro</h3>
              <p>
                Esse site é um Fomulario de login e cadastro responsivo, com uma
                implementação de JavaScript
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
                <img
                  src={iconJavascript}
                  alt="icon javascript"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Projeto-formulario-de-login-e-cadastro/index.html"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Projeto-formulario-de-login-e-cadastro/tree/main"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="center card-projeto">
          <img src={sitetatto} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>Site comercial de Tatuagem</h3>
              <p>
                Esse site é um dos meus trabalhos como freelancer, feito para um
                cliente de forma personalizada
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Alberto-Tatto/"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Alberto-Tatto?tab=readme-ov-file"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="center card-projeto">
          <img src={sitewildbeast} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>WildBeast project</h3>
              <p>
                Este projeto foi desenvolvido com grid layout de forma
                totalmente responsiva
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Wildbeast/"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Wildbeast"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="center card-projeto">
          <img src={siteanimais} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>Projeto Animais Fantansticos</h3>
              <p>
                Esse site foi criado com o foco em efeitos e transições
                JavaScript de forma suave e responsiva
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
                <img
                  src={iconJavascript}
                  alt="icon javascript"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Animais-Fantasticos/"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Animais-Fantasticos?tab=readme-ov-file"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="center card-projeto">
          <img src={siteflexblog} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>Flexblog project</h3>
              <p>
                Esse é um site comercial em feito somento com Flexbox de forma
                responsiva
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
                <img
                  src={iconJavascript}
                  alt="icon javascript"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Flexblog/"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Flexblog?tab=readme-ov-file"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="center card-projeto">
          <img src={siteportifolio} alt="" className="project-img" />
          <div className="card-projeto-content">
            <div className="body-card-habilidades">
              <h3>Meu Portifolio</h3>
              <p>
                Esse Portifolio pessoa foi feito com o foco em React de forma
                totalmente responsiva e com o objetivo de compartilhar mais
                sobre mim
              </p>
            </div>
            <div className="footer-card">
              <div className="tecnologias-card-projetos">
                <img
                  src={iconHTML}
                  alt="icon html"
                  className="icons-tecnologia"
                />
                <img
                  src={iconCSS}
                  alt="icon css"
                  className="icons-tecnologia"
                />
                <img
                  src={iconJavascript}
                  alt="icon javascript"
                  className="icons-tecnologia"
                />
                <img
                  src={iconReact}
                  alt="icon javascript"
                  className="icons-tecnologia"
                />
              </div>
              <div className="div-buttons-card-projetos">
                <a
                  href="https://kauaguarinogabriell.github.io/Portifolio/"
                  target="blank"
                  className="center button-projeto"
                >
                  <span className="img-hover-eye">
                    <img src={eyeimg} alt="eye" />
                  </span>
                  <span className="text-button-projeto">Deploy</span>
                </a>
                <a
                  href="https://github.com/Kauaguarinogabriell/Portifolio"
                  target="blank"
                  className="center button-repositorio"
                >
                  <span className="img-hover-github">
                    <img src={github} alt="github" />
                  </span>
                  <span className="text-button-projeto">Repositorio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// cor dos cards habilidades
