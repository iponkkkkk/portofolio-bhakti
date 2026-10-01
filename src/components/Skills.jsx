import React from 'react';

export default function Skills() {
  const categories = [
    { title: 'Frontend', items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Next.js", "React.js", "Tanstack Query", "Jotai"] },
    { title: 'Backend', items: ["Node.js", "Hono", "Prisma ORM", "TypeScript", "JWT Auth"] },
    { title: 'Database & Tools', items: ["PostgreSQL", "MySQL", "Database Design (ERD)", "Git", "Postman", "PNPM", "Docker", "Vercel", "CI/CD"] },
    { title: 'Concepts & Architecture', items: ["RESTful API", "Monorepo", "Island Architecture", "API Contract", "AI Integration", "Responsive Design"] }
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto border-t border-dark-border">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-brand-500 pl-4">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-brand-500 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-md bg-brand-500/10 text-brand-500 border border-brand-500/20 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}