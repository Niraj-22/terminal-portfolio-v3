const experiences = [
  {
    period: "FEB 2026 - PRESENT",
    title: "Full Stack Developer (Team Lead)",
    company: "Vsynergize AI",
    location: "Pune, India",
    achievements: [
      "Lead engineering across AI Faculty and AngelTel, owning architecture, sprint planning, delegation, and code-review standards",
      "Built AngelTel, an AI voice call-center platform serving 1,000+ calls per day",
      "Engineered LiveKit, Twilio, and SIP voice pipelines with interruption handling and Krisp noise cancellation",
      "Implemented JWT, RBAC, and tenant isolation across 100+ concurrent campaigns",
      "Built a 24/7 RAG-based student doubt-resolution chatbot using Qdrant",
      "Led the AI Faculty demo that secured a major educational institution partnership",
    ],
  },
  {
    period: "JUL 2024 - JAN 2026",
    title: "Software Development Engineer I",
    company: "DViO Digital Pvt. Ltd.",
    location: "Pune / Hybrid",
    achievements: [
      "Delivered an award-winning Martech Analytics Dashboard integrating 20+ third-party APIs",
      "Integrated Anthropic Claude, lifting user engagement by 35%",
      "Improved Core Web Vitals by 40% through server-side rendering and grew adoption by 25%",
      "Cut operational costs by 90% with custom ETL pipelines and automated deployments",
    ],
  },
  {
    period: "JAN 2024 - MAR 2024",
    title: "Full Stack Developer Intern",
    company: "O2h Technology",
    location: "Ahmedabad, India",
    achievements: [
      "Built a full-stack resource management platform with React, Node.js, Express.js, and MongoDB",
      "Improved performance by 30% using Redis caching and React lazy loading",
      "Reduced bounce rates by 15% through faster APIs and optimizations",
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
              key={`${exp.company}-${exp.title}`}
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
              <p className="text-sm text-muted-foreground mb-4">
                📌 {exp.location}
              </p>

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
