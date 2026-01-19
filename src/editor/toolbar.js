import { state } from "../state.js";
import { setLanguage } from "./monaco.js";
import { hlasmToMermaid } from "../parser.js";

export function initToolbar() {
  const tabs = document.querySelectorAll(".tab");

  tabs[0].onclick = switchToHLASM;
  tabs[1].onclick = switchToMermaid;

  document.getElementById("docs").onclick = goToDocs;
  document.getElementById("copy").onclick = copyCode;

  function switchToHLASM() {
    if (state.mode === "hlasm") return; // already set to HLASM

    state.mermaidCode = state.editor.getValue();
    state.editor.setValue(state.hlasmCode);
    setLanguage("plaintext"); // # TODO add HLASM syntax

    setActive(0);
    state.mode = "hlasm";
  }

  function switchToMermaid() {
    if (state.mode === "mermaid") return; // already set to Mermaid

    state.hlasmCode = state.editor.getValue();
    state.mermaidCode = state.hlasmCode
      ? hlasmToMermaid(state.hlasmCode)
      : "";

    state.editor.setValue(state.mermaidCode);
    setLanguage("markdown");

    setActive(1);
    state.mode = "mermaid";
  }

  function goToDocs() {
    const url = state.mode === "mermaid" 
    ? "https://mermaid.ai/open-source/syntax/flowchart.html" 
    : "https://www.ibm.com/docs/en/hla-and-tf/1.6.0?topic=pdf-format-documentation";

    window.open(url, '_blank').focus();
  }

   function copyCode() {
    const textToCopy = "insert code"; // # TODO
    navigator.clipboard.writeText(textToCopy);
  }

  function setActive(i) {
    tabs.forEach(t => t.classList.remove("active"));
    tabs[i].classList.add("active");
  }
}
