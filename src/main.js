import { initEditor } from "./editor/monaco.js";
import { initToolbar } from "./editor/toolbar.js";
import { initMermaid } from "./mermaid/init.js";
import { initPreview } from "./mermaid/renderer.js";
import { initTheme } from "./theme.js"; 

(async function init() {
  initMermaid();
  await initEditor();
  initToolbar();
  initPreview();
  initTheme();
})();
