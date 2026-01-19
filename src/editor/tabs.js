import { state } from "../state.js";
import { setLanguage } from "./monaco.js";
import { hlasmToMermaid } from "../parser.js";

export function initTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs[0].onclick = switchToHLASM;
  tabs[1].onclick = switchToMermaid;

  function switchToHLASM() {
    if (state.mode === "hlasm") return;

    state.mermaidCode = state.editor.getValue();
    state.editor.setValue(state.hlasmCode);
    setLanguage("plaintext");

    setActive(0);
    state.mode = "hlasm";
  }

  function switchToMermaid() {
    if (state.mode === "mermaid") return;

    state.hlasmCode = state.editor.getValue();
    state.mermaidCode = state.hlasmCode
      ? hlasmToMermaid(state.hlasmCode)
      : "";

    state.editor.setValue(state.mermaidCode);
    setLanguage("markdown");

    setActive(1);
    state.mode = "mermaid";
  }

  function setActive(i) {
    tabs.forEach(t => t.classList.remove("active"));
    tabs[i].classList.add("active");
  }
}
