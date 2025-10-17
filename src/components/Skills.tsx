const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Snowflake", level: 90 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 terminal-glow">
          <span className="text-secondary">./</span>skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
