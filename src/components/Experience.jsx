import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "PT. Gear.Inc Indonesia",
      role: "Content Moderator",
      period: "Apr 2021 - Des 2025",
      points: [
       "Reviewed and moderated 2,000+ content cases daily to ensure strict adherence to platform policy compliance.",
  "Collaborated cross-functionally with QA and Policy teams to resolve complex cases and ambiguous issues.",
  "Maintained high accuracy standards while consistently exceeding daily performance and quality KPI targets.",
  "Identified emerging content trends and reported policy gaps to support process and guideline optimization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto border-t border-dark-border">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-dark-card border border-dark-border rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">{exp.role} <span className="text-brand-500">@ {exp.company}</span></h3>
              <span className="text-xs text-slate-400 font-mono mt-1 md:mt-0">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm">
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}