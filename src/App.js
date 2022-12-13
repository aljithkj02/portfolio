import './App.css';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
