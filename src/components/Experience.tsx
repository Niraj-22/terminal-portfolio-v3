const experiences = [
  {
    period: "JUL 2024 - PRESENT",
    title: "Software Engineer (Frontend)",
    company: "DViO Digital",
    location: "Hybrid Role",
    achievements: [
      "Architected Martech Analytics Dashboard integrating 20+ third-party connectors (Google Ads, Meta Ads, Snowflake)",
      "Migrated legacy Vue.js frontend to React Router v7",
      "Implemented Anthropic AI API for automated insights",
      "Enhanced SSR performance by 40% | Platform adoption ↑ 25%",
      "Streamlined operational costs by 90%",
      "Product awarded 3+ industry recognition awards",
    ],
  },
  {
    period: "JAN 2024 - FEB 2024",
    title: "Full Stack Developer Trainee",
    company: "O2h Technology",
    location: "Ahmedabad",
    achievements: [
      "Developed full-stack resource management platform (MERN stack)",
      "Enhanced page speed by 30% | Reduced bounce rates by 15%",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 terminal-glow">
          <span className="text-secondary">./</span>experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative pl-8 border-l-2 border-primary animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="mb-2">
                <span className="text-sm text-secondary font-mono">
                  {exp.period}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
              <p className="text-primary mb-1">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">📌 {exp.location}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold">Key Achievements:</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
