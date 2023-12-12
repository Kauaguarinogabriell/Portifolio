import gif from '/home/kauag/github/portifolio/src/imagens/Developer activity.gif';
export default function Introduction() {
  return (
    <main className="container">
      <h1 style={{ fontSize: '5rem', maxWidth: '13ch' }}>
        Olá, Eu sou <span className="mark-main">Dev Front-End</span>
      </h1>
      <img src={gif} alt="gif programmer" className="img-section" />
    </main>
  );
}
