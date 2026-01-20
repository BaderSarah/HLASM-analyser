import { state } from "../state.js";

export function initMermaid() {
  if (!window.mermaid) {
    throw new Error("Mermaid not loaded.");
  }

  const theme = state.theme === "dark" ? "dark" : "default"; 
  console.log(theme); 

  const config = {
    startOnLoad: false,
    securityLevel: 'loose',
    theme : theme, 
    flowchart: {
        useMaxWidth: true, 
        htmlLabels: true
    }
  };

  window.mermaid.initialize(config);
}
