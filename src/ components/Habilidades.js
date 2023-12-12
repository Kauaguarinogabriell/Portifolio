import Cards from './Cards.js';
import HTML from '/home/kauag/github/portifolio/src/imagens/html-5.png';
import CSS from '/home/kauag/github/portifolio/src/imagens/css-3.png';
import JavaScript from '/home/kauag/github/portifolio/src/imagens/js.png';
import BootStrap from '/home/kauag/github/portifolio/src/imagens/bootstrap.png';
import REACT from '/home/kauag/github/portifolio/src/imagens/atom_3459528.png';
import POO from '/home/kauag/github/portifolio/src/imagens/target_4471586.png';
import Logica from '/home/kauag/github/portifolio/src/imagens/brain_2147784.png';
import REGEX from '/home/kauag/github/portifolio/src/imagens/expressoes.png';
import Profile from '/home/kauag/github/portifolio/src/imagens/Profile data.gif';

export default function Habilidades() {
  return (
    <section
      className="container"
      style={{ flexDirection: 'column', justifyContent: 'center' }}
    >
      <h1 id="habilidades" style={{ fontSize: '2.5rem' }}>
        Minhas Habilidades e Competencias
      </h1>
      <div className="container-habilidades">
        <div className="card-habilits center">
          <Cards title="HTML" img={HTML} />
          <Cards title="CSS" img={CSS} />
          <Cards title="JavaScript" img={JavaScript} />
          <Cards title="Bootstrap" img={BootStrap} />
          <Cards title="React" img={REACT} />
          <Cards title="POO" img={POO} />
          <Cards title="Algoritimo" img={Logica} />
          <Cards title="Regex" img={REGEX} />
        </div>
        <img src={Profile} alt="Profile" className="img-section" />
      </div>
    </section>
  );
}
