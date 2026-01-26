import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Honors from './components/Honors';
import Recommendations from './components/Recommendations';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Honors />
      <Recommendations />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
