import { GitGraphIcon } from "lucide-react";

const projects = [
  {
    title: "AngelTel",
    description:
      "A multi-tenant AI voice call-center platform with real-time streaming, interruption handling, noise cancellation, and provider orchestration across STT, TTS, and LLMs.",
    tech: ["React", "Node.js", "FastAPI", "LiveKit", "Twilio", "PostgreSQL"],
    metrics: "1,000+ calls/day | 100+ concurrent campaigns",
  },
  {
    title: "AI Faculty",
    description:
      "An educational AI platform with a 24/7 student doubt-resolution chatbot grounded in syllabus content using a Qdrant-backed RAG pipeline.",
    tech: ["React", "RAG", "Qdrant", "LLMs", "Node.js", "FastAPI"],
    metrics: "Curriculum-accurate answers | Major institution partnership",
  },
  {
    title: "ClientConnect",
    description:
      "Customer segmentation platform using RFM analysis and K-Means clustering for data-driven campaign targeting.",
    tech: ["React.js", "Node.js", "MongoDB", "Python", "scikit-learn"],
    metrics: "35% faster responses | JWT & RBAC",
    github: "https://github.com/Niraj-22/clientconnect",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 terminal-glow">
          <span className="text-secondary">./</span>projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
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
          ))}
        </div>
      </div>
    </section>
  );
}
