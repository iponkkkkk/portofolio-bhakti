import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: "Fullstack Developer Certification",
      issuer: "Devscale Indonesia",
      period: "Jan 2026 - Mar 2026",
      description: "Intensive full-stack development program.",
      points: [
        "Engineered full-stack solutions by integrating React.js for dynamic front-end interfaces and Node.js/Express for backend logic.",
        "Architected and managed relational databases using MySQL/PostgreSQL, including efficient CRUD operations.",
        "Optimized application performance by performing rigorous debugging and Root Cause Analysis (RCA)."
      ],
      link: "Devscale.pdf" // <--- Ganti tanda # ini dengan link sertifikat Devscale milik Mas Bhakti (misal Google Drive, Credential URL, dll)
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 max-w-5xl mx-auto border-t border-dark-border">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">
        Certifications
      </h2>
      <div className="space-y-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-dark-card border border-dark-border rounded-xl p-6">
            
            {/* Bagian Header Sertifikat & Tombol */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <p className="text-brand-500 text-sm font-medium mt-1">{cert.issuer}</p>
                <span className="text-xs text-slate-400 font-mono block mt-1">{cert.period}</span>
              </div>
              
              {/* Logika Tombol: Tampil jika cert.link ada isinya */}
              {cert.link && cert.link !== "" && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-500/10 text-brand-500 border border-brand-500/30 rounded-lg hover:bg-brand-500 hover:text-black transition-all text-xs font-semibold whitespace-nowrap self-start"
                >
                  View Certificate 
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm mt-2">
              {cert.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </section>
  );
}