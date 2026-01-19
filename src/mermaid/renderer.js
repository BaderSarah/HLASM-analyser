import { state } from "../state.js";

const chart = document.getElementById("chart");
const preview = document.getElementById("preview");

export function initPreview() {
  preview.addEventListener("mouseenter", () => {
    if (state.mode !== "mermaid") return;
    render(state.editor.getValue());
  });

  document.getElementById("plus").onclick = () => zoom(0.1);
  document.getElementById("min").onclick = () => zoom(-0.1);
  document.getElementById("rst").onclick = reset;
  document.getElementById("dwnl").onclick = download;
}

function render(code) {
  if (!code.trim()) {
    chart.innerHTML = "";
    return;
  }

  chart.innerHTML = `<div class="mermaid">${code}</div>`;
  mermaid.run();
}

// # TODO - fix bug
function zoom(delta) {
  state.zoom = Math.min(3, Math.max(0.2, state.zoom + delta));
  chart.style.transform = `scale(${state.zoom})`;
  chart.style.transformOrigin = "center";
}

// # TODO - fix bug
function reset() {
  state.zoom = 1;
  chart.style.transform = "scale(1)";
}

function download() {
  const svg = chart.querySelector("svg");
  if (!svg) return;

  const data = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([data], { type: "image/svg+xml" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "flowchart.svg";
  a.click();
}
