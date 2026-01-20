const KEY = "app_state";

const savedState = localStorage.getItem(KEY);
const defaultState = {
  mode: "hlasm",
  hlasmCode: "",
  mermaidCode: "",
  zoom: 1,
  editor: null,
  theme: "light"
};

export const state = savedState ? JSON.parse(savedState) : defaultState;

export const saveState = () => {
  const { editor, ...toSave } = state; 
  localStorage.setItem(KEY, JSON.stringify(toSave));
};