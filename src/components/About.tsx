export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 terminal-glow">
          <span className="text-secondary">./</span>about
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="animate-fade-in">
            <span className="text-primary">Full-stack engineer</span> with
            <span className="text-primary"> 2+ years</span> of experience shipping production systems across React, Node.js, Python, FastAPI, and AWS.
          </p>

          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I lead engineering teams and build <span className="text-primary">agentic AI</span>, <span className="text-primary">voice AI</span>,
            <span className="text-primary"> RAG systems</span>, real-time streaming infrastructure, and multi-tenant SaaS platforms.
            Based in Pune, India.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-2 text-primary">📍 Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold mb-2 text-primary">🎓 Education</h3>
              <p>B.E. Computer Science</p>
              <p className="text-sm">CGPA: 9.05/10.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
