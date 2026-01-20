import { saveState, state } from "../state.js";
import { setLanguage } from "./monaco.js";

export function initToolbar() {
  const tabs = document.querySelectorAll(".tab");

  tabs[0].onclick = switchToHLASM;
  tabs[1].onclick = switchToMermaid;

  document.getElementById("docs").onclick = goToDocs;
  document.getElementById("copy").onclick = copyCode;

  function switchToHLASM() {

    // customize editor
    if (state.editor) {
        state.editor.updateOptions({
            rulers: [0, 9, 15, 71, 73],
            tabSize: 3,
        });
        setLanguage("plaintext"); // TODO ; hlasm syntax
    }

    state.editor.setValue(state.hlasmCode); 

    setActive(0);
    state.mode = "hlasm";
    saveState(); 
  }

  function switchToMermaid() {

    // customize editor
    if (state.editor) {
        state.editor.updateOptions({
            rulers: [],
            tabSize: 4,
        });
        setLanguage("markdown");
    }

    state.editor.setValue(state.mermaidCode); 

    setActive(1);
    state.mode = "mermaid";
    saveState(); 
  }

  function goToDocs() {
    const url = state.mode === "mermaid" 
    ? "https://mermaid.ai/open-source/syntax/flowchart.html" 
    : "https://www.ibm.com/docs/en/hla-and-tf/1.6.0?topic=pdf-format-documentation";

    window.open(url, '_blank').focus();
  }

   function copyCode() {
    const textToCopy = state.mode === "hlasm" 
    ? state.hlasmCode 
    : state.mermaidCode;

    navigator.clipboard.writeText(textToCopy);
  }

  function setActive(i) {
    tabs.forEach(t => t.classList.remove("active"));
    tabs[i].classList.add("active");
  }
}
