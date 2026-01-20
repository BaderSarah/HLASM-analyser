const KEY = "app_state";

const defaultState = {
  mode: "hlasm",
  hlasmCode: "",
  mermaidCode: "",
  zoom: 1,
  editor: null,
  theme: "light"
};

const savedState = localStorage.getItem(KEY);

export const saveState = () => {
  const { editor, ...toSave } = state; 
  localStorage.setItem(KEY, JSON.stringify(toSave));
};

export const state = savedState ? JSON.parse(savedState) : defaultState;