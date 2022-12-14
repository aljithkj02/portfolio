import './App.css';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ScrollUp from './Components/ScrollUp/ScrollUp.jsx';
import Project from './Components/Project/Project.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
