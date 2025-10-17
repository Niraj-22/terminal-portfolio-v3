export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 terminal-glow">
          <span className="text-secondary">./</span>about
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="animate-fade-in">
            Results-driven <span className="text-primary">Full Stack Developer</span> with{" "}
            <span className="text-primary">1.5+ years</span> of experience designing and deploying 
            scalable web applications. Based in Pune, India.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expertise in <span className="text-primary">React.js</span>,{" "}
            <span className="text-primary">TypeScript</span>,{" "}
            <span className="text-primary">Python</span>, and{" "}
            <span className="text-primary">Node.js</span> with proven track record 
            optimizing performance, integrating third-party APIs, and mentoring teams.
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
