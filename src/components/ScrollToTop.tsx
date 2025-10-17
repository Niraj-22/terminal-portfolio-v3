import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  isTerminalOpen?: boolean;
}

export default function ScrollToTop({ isTerminalOpen = false }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide on mobile when terminal is open to avoid overlap
  if (!isVisible || (isTerminalOpen && window.innerWidth < 640)) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform shadow-lg animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
