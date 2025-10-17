import type { TerminalLine as TerminalLineType } from "@/lib/types";

interface TerminalLineProps {
  line: TerminalLineType;
}

export function TerminalLine({ line }: TerminalLineProps) {
  const getLineClassName = () => {
    switch (line.type) {
      case "command":
        return "terminal-line terminal-prompt font-bold text-xs sm:text-sm";
      case "error":
        return "terminal-line text-red-500 text-xs sm:text-sm";
      case "welcome":
        return "terminal-line terminal-glow text-center text-xs sm:text-sm";
      default:
        return "terminal-line text-xs sm:text-sm";
    }
  };

  return (
    <div className={`${getLineClassName()} animate-fade-in`}>
      {line.content}
    </div>
  );
}
