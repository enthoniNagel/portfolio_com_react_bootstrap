import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Certifique-se de que isso está aqui

import './App.css';

function App() {
  const [highlight, setHighlight] = useState('');

  const handleHighlight = (section) => {
    setHighlight(section);
    setTimeout(() => {
      setHighlight('');
    }, 1000);
  };

  return (
    <div className="App">
      <Header handleHighlight={handleHighlight} />
      <section id="about">
        <About highlight={highlight === 'about' ? 'highlight' : ''} />
      </section>
      <section id="projects">
        <Projects highlight={highlight === 'projects' ? 'highlight' : ''} />
      </section>
      <section id="contact">
        <Contact highlight={highlight === 'contact' ? 'highlight' : ''} />
      </section>
      <Footer /> {/* Certifique-se de que o Footer está aqui */}
    </div>
  );
}

export default App;
