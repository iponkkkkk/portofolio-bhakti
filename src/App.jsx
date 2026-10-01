import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-dark-border">
        © {new Date().getFullYear()} Bhakti Ervan Parama Artha. All rights reserved.
      </footer>
    </div>
  );
}