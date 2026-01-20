import { initToolbar }   from "./editor/toolbar.js";
import { initMermaid }   from "./mermaid/init.js";
import { initPreview }   from "./mermaid/renderer.js";
import { initLogger } from "./editor/logger.js";
import { initEditor }    from "./editor/monaco.js";
import { initTheme }     from "./theme.js"; 

(async function init() {
  await initEditor();
  initTheme();
  initMermaid();
  initToolbar();
  initPreview();
  initLogger(); 
})();
