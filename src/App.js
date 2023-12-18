import Introduction from './ components/Introduction';
import AboutMe from './ components/AboutMe';
import Projects from './ components/Projects';
import Footer from './ components/Footer';
import style from './style.css';
function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
