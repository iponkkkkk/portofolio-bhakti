import React from 'react';

export default function Education() {
  const education = {
    institution: "Universitas Hang Tuah Surabaya",
    degree: "S1 Teknik Elektro (S.T.)",
    period: "Ags 2016 - Ags 2020",
    gpa: "3.18 / 4.00"
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-t border-dark-border">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">
        Education
      </h2>
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-white">{education.institution}</h3>
        <p className="text-brand-500 text-sm font-medium mt-1">{education.degree}</p>
        <div className="flex justify-between text-xs text-slate-400 mt-4 pt-4 border-t border-dark-border">
          <span>Periode: {education.period}</span>
          <span>IPK: {education.gpa}</span>
        </div>
      </div>
    </section>
  );
}