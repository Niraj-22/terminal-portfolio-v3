export interface TerminalLine {
  id: string;
  type: "command" | "output" | "prompt" | "welcome" | "error";
  content: string;
}
