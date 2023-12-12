import arrow from '/home/kauag/github/Portifolio/src/imagens/arrow-down.svg';
import linkedin from '/home/kauag/github/Portifolio/src/imagens/linkedin.svg';
import github from '/home/kauag/github/Portifolio/src/imagens/github.svg';
import gmail from '/home/kauag/github/Portifolio/src/imagens/envelope-at.svg';
export default function Introduction() {
  return (
    <section className="container center section-introducao">
      <div
        className="container center"
        style={{ flexGrow: '1', width: '100%' }}
      >
        <h1
          style={{ color: '#cc005f', fontSize: '2rem', lineHeight: '1.5rem' }}
        >
          Olá!
        </h1>
        <h2 style={{ fontSize: '5rem', lineHeight: '110%' }}>Eu sou Kauã</h2>
        <h3 style={{ fontSize: '1.5rem', color: '#00A97F' }}>
          Front End Developer
        </h3>
        <a href="#" className="button-about-me">
          Sobre mim{' '}
          <span>
            <img src={arrow} alt="arrow down" />
          </span>
        </a>
      </div>
      <footer className="social-midias">
        <a href="https://www.linkedin.com/in/kauagabriellkgg/" target="blank">
          <img
            src={linkedin}
            alt="Linkedin Icon"
            className="icon-social-midia"
          />
        </a>
        <a href="https://github.com/Kauaguarinogabriell" target="blank">
          <img src={github} alt="Github Icon" className="icon-social-midia" />
        </a>
        <a href="mailto:kg3guarino@gmail.com" target="blank">
          <img src={gmail} alt="Gmail Icon" className="icon-social-midia" />
        </a>
      </footer>
    </section>
  );
}
