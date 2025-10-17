import { ArrowDown, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = ["Frontend Developer", "Full Stack Developer", "Gamer"];
  const [roleIndex, setRoleIndex] = useState(0);

  const [displayedRole, setDisplayedRole] = useState(roles[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((r) => (r + 1) % roles.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setDisplayedRole(roles[roleIndex]);
  }, [roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          // stronger repeating grid: 2px line thickness every 50px
          backgroundImage: `repeating-linear-gradient(0deg, rgba(var(--grid-r),var(--grid-g),var(--grid-b),var(--grid-alpha)) 0 2px, transparent 2px 50px), repeating-linear-gradient(90deg, rgba(var(--grid-r),var(--grid-g),var(--grid-b),var(--grid-alpha)) 0 2px, transparent 2px 50px)`,
        }}
      />
      {/* Animated dots train overlay */}
      <div className="grid-dots" aria-hidden />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="text-secondary text-sm font-mono">
            console.log("Welcome!");
          </span>
        </div>

        <h1 className="flex items-center justify-center gap-3 text-5xl md:text-7xl font-bold mb-6 terminal-glow animate-fade-in">
          <span className="flex items-center gap-2">
            <Terminal className="w-7 h-7 text-primary" />
          </span>
          NIRAJ CHORDIA
        </h1>

        <p className="text-xl md:text-2xl text-secondary mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span>{displayedRole}</span>
          <span className="type-caret" aria-hidden />
        </p>

        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Building scalable web applications with React, TypeScript, Node.js, and Python.
          1.5+ years of experience crafting exceptional digital experiences.
        </p>

        <div className="flex gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/Niraj-22"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform font-medium"
          >
            View GitHub
          </a>
          <a
            href="mailto:niraj22chordia@gmail.com"
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
      {/* icons removed per request; role switcher added above */}
    </section>
  );
}
