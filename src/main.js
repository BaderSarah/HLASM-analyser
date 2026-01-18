// main.js
require.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
  }
});

require(['vs/editor/editor.main'], () => {
  window.editor = monaco.editor.create(
    document.getElementById('editor'),
    {
      value: '',
      language: 'plaintext',
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
});


const code = editor.getValue();
console.log(code); 