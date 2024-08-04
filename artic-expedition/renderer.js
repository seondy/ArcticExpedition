const { ipcRenderer } = require("electron");

const gameBtn = document.getElementById("gameBtn");

gameBtn.addEventListener("click", () => {
  ipcRenderer.send("start-game");
});
