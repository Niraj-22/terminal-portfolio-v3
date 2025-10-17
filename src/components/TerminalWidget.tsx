import { useState, useRef, useEffect } from "react";
import { X, Minimize2, Maximize2 } from "lucide-react";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { processCommand } from "@/lib/commands";
import type { TerminalLine } from "@/lib/types";

interface TerminalWidgetProps {
  onClose: () => void;
}

export default function TerminalWidget({ onClose }: TerminalWidgetProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "0",
      type: "welcome",
      content: `Welcome to Niraj's Portfolio Terminal!
Type /help to see available commands`,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current && !isMinimized) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, isMinimized]);

  const handleCommand = async (command: string) => {
    if (!command.trim()) return;

    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    setLines((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "command",
        content: `niraj@portfolio:~$ ${command}`,
      },
    ]);

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const result = processCommand(command);

    if (result === "CLEAR_SCREEN") {
      setLines([
        {
          id: Date.now().toString(),
          type: "welcome",
          content: "Terminal cleared. Type /help for available commands.",
        },
      ]);
    } else {
      setLines((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: "output",
          content: result,
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleHistoryNavigation = (direction: "up" | "down") => {
    if (commandHistory.length === 0) return;

    if (direction === "up") {
      const newIndex = historyIndex + 1;
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        return commandHistory[commandHistory.length - 1 - newIndex];
      }
    } else {
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        return commandHistory[commandHistory.length - 1 - newIndex];
      } else {
        setHistoryIndex(-1);
        return "";
      }
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-auto sm:right-6 z-50 animate-fade-in max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)]">
      <div
        className={`terminal-container w-full transition-all duration-300 ${
          isMinimized ? "h-14 w-full sm:w-96" : "w-full sm:w-[600px] h-[70vh] sm:h-[500px] max-h-[calc(100vh-6rem)]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs sm:text-sm font-mono">niraj@portfolio: ~</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
              aria-label={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="flex flex-col h-[calc(100%-53px)]">
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 text-sm sm:text-base"
            >
              <TerminalOutput lines={lines} />
            </div>
            <div className="p-3 sm:p-4 border-t border-border">
              <TerminalInput
                onCommand={handleCommand}
                onHistoryUp={() => handleHistoryNavigation("up")}
                onHistoryDown={() => handleHistoryNavigation("down")}
                isLoading={isLoading}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
