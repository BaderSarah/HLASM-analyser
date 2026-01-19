export function hlasmToMermaid(code) {
  if (!code.trim()) return "";

  return `
flowchart TD
  A[START] --> B[Parsed HLASM]
  B --> C[END]
`; // #TODO
}
