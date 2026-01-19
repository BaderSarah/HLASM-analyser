import { initEditor } from "./editor/monaco.js";
import { initTabs } from "./editor/tabs.js";
import { initMermaid } from "./mermaid/init.js";
import { initPreview } from "./mermaid/renderer.js";

(async function init() {
  initMermaid();
  await initEditor();
  initTabs();
  initPreview();
})();
