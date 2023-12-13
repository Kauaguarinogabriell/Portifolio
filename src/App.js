import Introduction from './ components/Introduction';
import AboutMe from './ components/AboutMe';
import Projects from './ components/Projects';
import style from './style.css';
function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
