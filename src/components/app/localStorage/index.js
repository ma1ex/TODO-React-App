export function setLocalStorage(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("userData"));
}
