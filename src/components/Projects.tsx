import { GitGraphIcon, } from "lucide-react";

const projects = [
  {
    title: "ClientConnect",
    description: "Customer segmentation platform leveraging RFM analysis and K-Means clustering (96.3% accuracy) for targeted marketing campaigns.",
    tech: ["React.js", "Python", "Machine Learning", "Data Analytics"],
    metrics: "35% faster backend response times",
    github: "https://github.com/Niraj-22/clientconnect",
  },
  {
    title: "Marketing Analytics Platform",
    description: "Full-stack solution integrating 20+ data connectors with optimized ETL pipelines. Delivers unified multi-channel campaign analytics for faster stakeholder decision-making.",
    tech: ["React.js", "Python", "Node.js", "Snowflake", "Airbyte"],
    metrics: "3+ industry awards | 90% cost reduction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 terminal-glow">
          <span className="text-secondary">./</span>projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-secondary mb-4">
                📊 {project.metrics}
              </p>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <GitGraphIcon className="w-4 h-4" />
                    Source
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
