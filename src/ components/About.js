import icon from '/home/kauag/github/portifolio/src/imagens/Prototyping process.gif';
export default function About() {
  return (
    <section
      className="container"
      style={{
        backgroundColor: '#34353C',
        gap: '2rem',
        padding: '3rem 2.5rem',
      }}
    >
      <img src={icon} alt="code Slash" className="img-section" />
      <div className="about" style={{ width: '55%' }}>
        <h3 style={{ color: '#FCEAFF' }}>Discovery</h3>
        <h1 id="sobre">Sobre mim</h1>
        <hr style={{ width: '14%', marginBottom: '1rem' }} />
        <p
          style={{
            letterSpacing: '1px',
            border: 'solid 2px #00C9A9',
            padding: '1rem',
            borderRadius: '5px',
          }}
        >
          Olá, eu sou o Kauã! Desde os 14 anos, dedico-me ao mundo da
          programação, buscando constantemente aprimorar minhas habilidades para
          me tornar um profissional excepcional no desenvolvimento de códigos e
          soluções para diversas demandas. Possuo uma sólida base em lógica de
          programação, o que me permite aprender rapidamente e criar soluções
          eficientes. Tenho grande interesse em aprimorar minhas habilidades
          continuamente, sempre em busca de desafios estimulantes. Minha
          facilidade em aprender e desenvolver códigos, aliada à minha
          habilidade de comunicação, me permite colaborar de forma eficaz em
          equipes multidisciplinares. Estou aberto a oportunidades que me
          permitam aplicar e expandir meu conhecimento. Se você busca um
          profissional dedicado, apaixonado por programação e pronto para
          enfrentar novos desafios, ficarei feliz em contribuir para o sucesso
          do seu time ou empresa. Espero o seu contato!
        </p>
      </div>
    </section>
  );
}
