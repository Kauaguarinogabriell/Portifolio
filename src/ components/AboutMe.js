import fotoPerfil from '/home/kauag/github/Portifolio/src/imagens/perfil.png';
import HTML from '/home/kauag/github/Portifolio/src/imagens/html.png';
import CSS from '/home/kauag/github/Portifolio/src/imagens/css.png';
import JavaScript from '/home/kauag/github/Portifolio/src/imagens/js.png';
import react from '/home/kauag/github/Portifolio/src/imagens/atom.png';
import Logica from '/home/kauag/github/Portifolio/src/imagens/brain.png';
import Regex from '/home/kauag/github/Portifolio/src/imagens/expressoes.png';
import Poo from '/home/kauag/github/Portifolio/src/imagens/target.png';
import Skill from './Skills';
export default function AboutMe() {
  const skills = [
    {
      src: HTML,
      alt: 'html icon',
      title: 'HTML',
    },

    {
      src: CSS,
      alt: 'css icon',
      title: 'CSS',
    },

    {
      src: JavaScript,
      alt: 'JavaScript icon',
      title: 'JavaScript',
    },

    {
      src: react,
      alt: 'React icon',
      title: 'React',
    },

    {
      src: Regex,
      alt: 'Regex icon',
      title: 'Regex',
    },

    {
      src: Logica,
      alt: 'logica de programação icon',
      title: 'Logica de Programação',
    },

    {
      src: Poo,
      alt: 'Programação orientada a objetos icon',
      title: 'Programação Orientada a Objetos',
    },
  ];

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
              {skills.map((item) => {
                return (
                  <Skill
                    url={item.src}
                    alt={item.alt}
                    title={item.title}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
