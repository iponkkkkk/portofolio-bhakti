import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Nutrilog MBG",
      role: "Fullstack Developer",
      period: "2026",
      description: "An automated school lunch planning and real-time food inventory tracking system.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      points: [
        "Built an automated calculation engine that converts student headcounts into precise ingredient quantities.",
        "Designed a responsive dashboard using Tailwind CSS for real-time stock monitoring and low-stock alerts.",
        "Implemented a distribution tracking system to ensure transparency from warehouse to school delivery.",
        "Architected relational database schemas to handle complex data for recipes, ingredients, and multi-school meal schedules."
      ],
      link: "nutrilog-iponkkkkk.vercel.app" 
    },
    {
      title: "SOL/USDC Market Monitor",
      role: "Backend Developer (MVP)",
      period: "2026",
      description: "A real-time cryptocurrency monitoring system tracking SOL/USDC pairs on Solana DEXs.",
      tech: ["Node.js", "Birdeye API", "Data Architecture", "Telegram API"],
      points: [
        "Developed an MVP monitoring engine using Node.js to fetch real-time price history from Birdeye API every 30 seconds.",
        "Calculated technical indicators (RSI and volume spikes) from 15-minute OHLCV candlestick data.",
        "Engineered an automated signal generator (e.g., RSI_OVERSOLD, PRICE_DROP) integrated with Telegram notifications.",
        "Designed a scalable Entity-Relationship Diagram (ERD) including Token Pairs, Price History, and Signals, ready for Phase 2 database integration."
      ],
      link: "", // <--- Dikosongkan agar tombol Visit Website tidak muncul
      status: "In Progress" // <--- Menambahkan properti status
    },
    {
      title: "QA Engineer Portfolio - Bima",
      role: "Frontend Developer",
      period: "2026",
      description: "A professional, modular, and highly scalable portfolio website designed for a QA Automation Engineer.",
      tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
      points: [
        "Developed a modular component-based architecture for seamless content updates and scalability.",
        "Designed a clean, responsive, and modern user interface utilizing Tailwind CSS.",
        "Optimized asset loading and overall web performance."
      ],
      link: "https://portofolio-bimarachmats.vercel.app"
    },
    {
      title: "Commercial Landing Page - Purrfectmood.bakes",
      role: "Frontend Developer",
      period: "2026",
      description: "An attractive and responsive landing page for a local bakery business, Purrfectmood.bakes (Brownies Cica).",
      tech: ["React.js", "Tailwind CSS", "Vite", "HTML5"],
      points: [
        "Designed a visually appealing product showcase to increase customer engagement and drive sales.",
        "Ensured cross-browser compatibility and full mobile responsiveness.",
        "Optimized page loading speed for a better user experience."
      ],
      link: "https://purrfectmoodbakes.vercel.app" 
    },
    {
      title: "My Personal Portfolio",
      role: "Frontend Developer",
      period: "2026",
      description: "A modern, highly responsive, and scalable personal developer portfolio.",
      tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
      points: [
        "Built a dynamic single-page application using React.js and Vite.",
        "Implemented a custom typing effect and responsive UI with Tailwind CSS.",
        "Designed a clean, modular component architecture without a backend for easy deployment."
      ],
      link: "portofolio-bhaktiervan.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-5xl mx-auto border-t border-dark-border">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">
        Featured Projects
      </h2>
      
      <div className="relative">
        <div className="flex flex-col gap-6 max-h-[720px] overflow-y-auto pr-3 rounded-xl custom-scrollbar pb-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-dark-card border border-dark-border rounded-xl p-5 md:p-6 hover:border-brand-500/50 transition-all flex flex-col shrink-0">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{proj.title}</h3>
                  <span className="text-sm text-brand-500">{proj.role} • {proj.period}</span>
                </div>
                
                {/* Perbaikan Logika Ternary Operator */}
                {proj.link && proj.link !== "" ? (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-500/10 text-brand-500 border border-brand-500/30 rounded-lg hover:bg-brand-500 hover:text-black transition-all text-xs font-semibold whitespace-nowrap self-start"
                  >
                    Visit Website 
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : proj.status ? (
                   <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 border border-slate-600 rounded-lg text-xs font-semibold whitespace-nowrap self-start cursor-default">
                     <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     {proj.status}
                   </span>
                ) : null}
              </div>

              <p className="text-slate-300 mb-3 text-sm">{proj.description}</p>
              
              <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm mb-5 flex-grow leading-relaxed">
                {proj.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-3 h-12 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none rounded-b-xl"></div>
      </div>
    </section>
  );
}