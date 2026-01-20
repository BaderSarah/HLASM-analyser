import { state } from "./state.js";

export function hlasmToMermaid() {

  const code = state.hlasmCode; 
  // state.hlasmCode
  if (!code.trim()) return "";

  return `flowchart TD
  A[START] --> B[Parsed HLASM]
  B --> C[END]
`; // TODO
}
