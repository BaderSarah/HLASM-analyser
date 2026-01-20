import { saveState, state } from "./state.js";

export function initTheme() {
    setTheme(); 

    const btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        saveState(); 
        setTheme(); 
    });
};

function setTheme(){

    if (state.theme === "dark") {
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "#1f2428";
    } else {
        document.body.classList.remove("dark");
        document.body.style.backgroundColor = "";
    }
    
    if (state.editor) {
        const monacoTheme = state.theme === "dark" ? "github-dark" : "vs";
        monaco.editor.setTheme(monacoTheme);
    }
}

export const githubDarkTheme = {
    base: 'vs-dark', 
    inherit: true,
    rules: [
        { token: '', foreground: '#d1d5da', background: '#ffffff' },
        { token: 'comment', foreground: '6a737d', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'f97583' },
        { token: 'variable', foreground: 'ffab70' },
        { token: 'string', foreground: '9ecbff' },
        { token: 'constant', foreground: '79b8ff' },
        { token: 'type', foreground: 'b392f0' },
        { token: 'class', foreground: 'b392f0' },
        { token: 'function', foreground: 'b392f0' },
    ],
    colors: {
        'editor.background': '#2b3036',
        'editor.foreground': '#d1d5da',
        'editorWhitespace.foreground': '#444d56', 
        'editorRuler.foreground': '#444d56',
        'editorIndentGuide.background': '#373e47',
        'editorIndentGuide.activeBackground': '#444d56',
        'editor.lineHighlightBackground': '#2b3137',
        'editor.selectionBackground': '#0366d625',
        'editorCursor.foreground': '#c8e1ff',
    }
};
