import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'

function App() {
  return (
      <div>
          <Navbar />
          <Home />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
          <ScrollBtn />
      </div>
  );
}

export default App;
