import './App.css';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
