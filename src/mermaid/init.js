export function initMermaid() {
  if (!window.mermaid) {
    throw new Error("Mermaid not loaded.");
  }

  window.mermaid.initialize({
    startOnLoad: false
  });
}
