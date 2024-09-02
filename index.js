let gridItems = document.getElementsByClassName("square");
let current = "x";
let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let endGame = false;

for (const item of gridItems) {
  item.addEventListener("click", function () {
    if (endGame) {
      return;
    }

    let value = item.getAttribute("value");
    let index = value - 1;
    if (boardArray[index] == "o" || boardArray[index] == "x") {
      return;
    }

    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = current;

    boardArray[index] = current;
    console.log(boardArray);

    evaluate();

    if (current == "x") {
      current = "o";
    } else {
      current = "x";
    }

    document.getElementById("instructions").textContent = `${current} turn`;
  })
}

  function evaluate() {
    if (
      (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
      (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
      (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
      (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
      (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
      (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
      (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
      (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])
    ) {
      var winner = current == "o" ? "o" : "x";
      alertify.alert(`${winner} Won!`);
       endGame = true;
    }

    var isDraw = true;
    for (element of boardArray) {
        if (element != "x" && element != "o"){
            isDraw = false
            break
        }
    }

    if (isDraw) {
      alertify.alert("Game Over!!");
      endGame = true;
    }
  }
}

document.getElementById("reset").addEventListener("click", function () {
  reset();
});

function reset() {
  for (item of gridItems) {
    let value = item.getAttribute("value");
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = "";

    boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  }

  endGame = false;
  current = "x";
  document.getElementById("instructions").innerText = `${current} turn`;
}
