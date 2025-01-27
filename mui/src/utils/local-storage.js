export function getLocalMode() {
  return window.localStorage.getItem('currentMode');
}

export function setLocalMode(newMode) {
  window.localStorage.setItem('currentMode', newMode);
  return true;
}
