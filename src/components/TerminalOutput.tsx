import { TerminalLine as TerminalLineComponent } from "./TerminalLine";
import type { TerminalLine } from "@/lib/types";

interface TerminalOutputProps {
  lines: TerminalLine[];
}

export function TerminalOutput({ lines }: TerminalOutputProps) {
  return (
    <div className="space-y-2">
      {lines.map((line) => (
        <TerminalLineComponent key={line.id} line={line} />
      ))}
    </div>
  );
}
