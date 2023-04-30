function showSolution() {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      if (tile.innerText == "") {
        tile.innerText = solution[r][c];
        tile.classList.add("tile-solved");
      }
    }
  }
}

let showButton = document.createElement("button");
showButton.innerText = "Show Solution";
showButton.addEventListener("click", showSolution);
document.getElementById("buttons").appendChild(showButton);
