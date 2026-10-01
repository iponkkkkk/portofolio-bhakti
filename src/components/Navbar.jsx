import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-white tracking-wide">
          Bhakti<span className="text-brand-500">.dev</span>
        </span>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-brand-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-brand-500 transition-colors">Experience</a>
          <a href="#certifications" className="hover:text-brand-500 transition-colors">Certifications</a>
        </div>
      </div>
    </nav>
  );
}