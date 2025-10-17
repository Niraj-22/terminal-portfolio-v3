import { useState, KeyboardEvent } from "react";

interface TerminalInputProps {
  onCommand: (command: string) => void;
  onHistoryUp: () => string | undefined;
  onHistoryDown: () => string | undefined;
  isLoading: boolean;
}

export function TerminalInput({
  onCommand,
  onHistoryUp,
  onHistoryDown,
  isLoading,
}: TerminalInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() && !isLoading) {
      onCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const historyCommand = onHistoryUp();
      if (historyCommand !== undefined) {
        setInput(historyCommand);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const historyCommand = onHistoryDown();
      if (historyCommand !== undefined) {
        setInput(historyCommand);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="terminal-prompt text-xs sm:text-sm whitespace-nowrap">niraj@portfolio:~$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className="flex-1 bg-transparent text-primary outline-none placeholder-muted-foreground disabled:opacity-50 font-mono text-xs sm:text-sm"
        placeholder="Type a command..."
        autoComplete="off"
        autoFocus
      />
      {!isLoading && <span className="terminal-cursor" />}
      {isLoading && (
        <span className="text-primary animate-pulse text-xs sm:text-sm">Processing...</span>
      )}
    </div>
  );
}
