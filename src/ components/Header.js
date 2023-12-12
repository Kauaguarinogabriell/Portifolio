import perfil from '/home/kauag/github/portifolio/src/imagens/avatar.png';

export default function Header() {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <img src={perfil} alt="Foto Kauã" className="foto-perfil" />
    </header>
  );
}
