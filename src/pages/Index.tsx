import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TerminalWidget from "@/components/TerminalWidget";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollToTop isTerminalOpen={showTerminal} />
      <Navigation onTerminalClick={() => setShowTerminal(!showTerminal)} />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {showTerminal && <TerminalWidget onClose={() => setShowTerminal(false)} />}

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2025 Niraj Chordia. Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
