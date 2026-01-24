import { state } from "../state.js";
import { githubDarkTheme } from "../theme.js"; 

export function initEditor() {

  return new Promise((resolve) => {
    require.config({
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs"
      }
    });

    require(["vs/editor/editor.main"], () => {
      
      monaco.editor.defineTheme('github-dark', githubDarkTheme);

      state.editor = monaco.editor.create(
        
        document.getElementById("editor"),
        {
            value: '',
            language: 'python',
            theme: 'vs-light',
            automaticLayout: true,
            fontSize: 14,
            lineHeight: 20,
            tabSize: 3,
            insertSpaces: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            renderLineHighlight: 'none',
            roundedSelection: false,
            renderWhitespace: 'all',
            rulers: [0, 9, 15, 71, 73]
        }
      );
        // set to HLASM editor
        state.mode = "hlasm"; 
        state.editor.setValue(state.hlasmCode); 

      resolve();
    });
  });
}

export function setLanguage(lang) {
  monaco.editor.setModelLanguage(state.editor.getModel(), lang);
} // # TODO add HLASM
