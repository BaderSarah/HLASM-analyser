import { saveState, state } from "../state.js";

export function initLogger() {

    state.editor.onKeyDown(() => {
        // ...
        if (state.mode === "hlasm"){
            state.hlasmCode = state.editor.getValue(); 
            saveState(); 
        } else {
            state.mermaidCode = state.editor.getValue(); 
            saveState(); 
        }
    });
}
