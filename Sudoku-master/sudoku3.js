
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "---8-----",
    "789-1---6",
    "-----61--",
    "--7----5-",
    "5-87-93-4",
    "-4----2--",
    "--32-----",
    "8---7-439",
    "-----1---"
];

var solution = [
    "165847923",
    "789312546",
    "432596178",
    "297463851",    
    "518729364",
    "346158297",
    "973284615",
    "821675439",
    "654931782"
];

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
var seconds = 0;
var minutes = 0;
var timer;

window.onload = function() {
    setGame();
    
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    document.getElementById("start-game-btn").addEventListener("click", startGame);
}


function startGame() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  startTimer();
}

function startTimer() {
  timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    var formattedTime = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("timer").innerText = formattedTime;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
function submitSolution() {
    clearInterval(timer);
    checkErrors();
    var time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function checkErrors() {
    let emptyCells = 0;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            if (tile.innerText == "") {
                emptyCells++;
                tile.style.backgroundColor = "red";
            }
        }
    }
    if (emptyCells > 0) {
        errors += emptyCells;
        document.getElementById("errors").innerText = errors;
                let modal = document.createElement("div");
        modal.classList.add("modal");
        
        let message = document.createElement("div");
        message.innerText = "Please fill in all cells before submitting.";
        
        let closeButton = document.createElement("button");
        closeButton.innerText = "OK";
        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });
        
        modal.appendChild(message);
        modal.appendChild(closeButton);
        document.body.appendChild(modal);
    }
    clearInterval(timer);
    var time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    alert("You solved the puzzle in " + time + " with " + errors + " errors.");
}
function resetGame() {
    // clear the board
   location.reload();
  }
function level1(){
    window.location.href = "index.html";
}
function level2(){
    window.location.href = "level2.html";
}
function level3(){
    window.location.href = "level3.html";
}