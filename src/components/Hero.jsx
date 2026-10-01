import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Bhakti Ervan Parama Artha";
  
  useEffect(() => {
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const pauseBeforeDelete = 2000; 
    const pauseBeforeRestart = 500; 

    let timer;

    if (!isDeleting && displayedText !== fullName) {
      timer = setTimeout(() => {
        setDisplayedText(fullName.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === fullName) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(fullName.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeRestart);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullName]);

  const personal = {
    role: "Fullstack Developer | Frontend Engineer | Backend Engineer",
    location: "Surabaya, Indonesia",
    email: "Bhaktiervann@gmail.com",
    phone: "+6285730661922",
    github: "https://github.com/iponkkkkk",
    linkedin: "https://linkedin.com/in/bhaktiervan",
    about: "Detail-oriented professional with 4+ years of experience in quality compliance, consistently achieving high accuracy in fast-paced environments. Currently transitioning into a Fullstack Developer with hands-on experience in building scalable web applications using JavaScript, React.js, Next.js, Node.js, and SQL databases."
  };

  return (
    <section id="about" className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-sm font-medium">
        Open to New Opportunities & Freelance Projects
      </div>
      
      {/* Container untuk efek mengetik dengan tinggi tetap agar layout tidak melompat */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 min-h-[40px] md:min-h-[60px]">
        {displayedText}
        <span className="border-r-4 border-brand-500 ml-1 animate-pulse"></span>
      </h1>
      
      <p className="text-xl text-brand-500 font-semibold mb-6">
        {personal.role}
      </p>
      <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-base md:text-lg mb-8">
        {personal.about}
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <a href={`mailto:${personal.email}`} className="px-5 py-2.5 rounded-lg bg-brand-500 text-black font-semibold hover:bg-brand-600 transition-all">
          Email Me
        </a>
        <a href={personal.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-dark-card border border-dark-border hover:border-brand-500 transition-all">
          GitHub
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-dark-card border border-dark-border hover:border-brand-500 transition-all">
          LinkedIn
        </a>
      </div>
    </section>
  );
}