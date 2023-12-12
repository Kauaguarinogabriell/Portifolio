import About from './ components/About.js';
import Header from './ components/Header.js';
import Introduction from './ components/Introduction.js';
import Habilidades from './ components/Habilidades.js';
import Projetos from './ components/Projetos.js';
import style from './style.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Habilidades />
      <Projetos />
    </div>
  );
}

export default App;
