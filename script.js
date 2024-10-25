const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const Overlay = document.querySelector(".overlay");
const firstPlayer = document.querySelector(".firstplayer");
const secondPlayer = document.querySelector(".secondplayer");
const playerTurn = document.querySelector(".playerturn");
const boxes = document.querySelectorAll(".box");
const startGame = document.querySelector(".startgame");
const winners = document.querySelector(".winner");
let winnerOverlay = document.querySelector(".winner_container");
const playAgain = document.querySelector(".playagain");
// const quit = document.querySelector(".quit");
// form validation
startGame.addEventListener("click", (e) => {
  e.preventDefault();
  if (player1.value !== "" && player2.value !== "") {
    Overlay.classList.add("hideoverlay");
    player1.style.border = "1px solid red";
    firstPlayer.textContent = `${player1.value}(X)`;
    secondPlayer.textContent = `${player2.value}(O)`;
    playerTurn.textContent = `${player1.value} turn`;
  }
  if (player1.value == "") {
    player1.style.outline = "1px solid red";
  } else {
    player1.style.outline = "1px solid green";
  }

  if (player2.value == "") {
    player2.style.outline = "1px solid red";
  } else {
    player2.style.outline = "1px solid green";
  }
});

playAgain.addEventListener("click", () => {
  winnerOverlay.classList.remove("showwinner");
  location.reload();
});
// quit.addEventListener("click", () => {});s
//filling the boxes
let abc = [];
let def = [];
let ghi = [];
//vertical board
let adg = [];
let beh = [];
let cfi = [];
//diagonal board
let aei = [];
let ceg = [];
let count = 0;

function playGame() {
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.target.style.pointerEvents = "none";

      count += 1;
      if (count % 2 !== 0) {
        e.target.textContent = "X";
        playerTurn.textContent = `${player2.value} turn`;
      } else if (count % 2 == 0) {
        e.target.textContent = "O";
        playerTurn.textContent = `${player1.value} turn`;
      }
      //check if button has been clicked
      //arrays of board
      let target = e.target.id;
      switch (target) {
        case "a":
          abc.push(e.target.textContent);
          adg.push(e.target.textContent);
          aei.push(e.target.textContent);
          break;
        case "b":
          abc.push(e.target.textContent);
          beh.push(e.target.textContent);
          break;
        case "c":
          abc.push(e.target.textContent);
          cfi.push(e.target.textContent);
          ceg.push(e.target.textContent);
          break;
        case "d":
          def.push(e.target.textContent);
          adg.push(e.target.textContent);
          break;
        case "e":
          def.push(e.target.textContent);
          beh.push(e.target.textContent);
          aei.push(e.target.textContent);
          ceg.push(e.target.textContent);
          break;
        case "f":
          def.push(e.target.textContent);
          cfi.push(e.target.textContent);
          break;
        case "g":
          ghi.push(e.target.textContent);
          adg.push(e.target.textContent);
          ceg.push(e.target.textContent);
          break;
        case "h":
          ghi.push(e.target.textContent);
          beh.push(e.target.textContent);
          break;
        case "i":
          ghi.push(e.target.textContent);
          cfi.push(e.target.textContent);
          aei.push(e.target.textContent);
          break;
      }
      if (count > 4) {
        let winner = playerWinner();
        winners.textContent = winner;
        if (winner) {
          winnerOverlay.classList.add("showwinner");
        }
        if (!winner && count === 9) {
          // console.log(playerWinner());
          winnerOverlay.classList.add("showwinner");
          winners.textContent = "Draw Game";
        }
      }
    });
  });
}
playGame();

function playerWinner() {
  if (abc[0] === "X" && abc[1] === "X" && abc[2] === "X") {
    return player1.value + " win";
  } else if (abc[0] === "O" && abc[1] === "O" && abc[2] === "O") {
    return player2.value + " win";
  }

  if (def[0] === "X" && def[1] === "X" && def[2] === "X") {
    return player1.value + " win";
  } else if (def[0] === "O" && def[1] === "O" && def[2] === "O") {
    return player2.value + " win";
  }

  if (ghi[0] === "X" && ghi[1] === "X" && ghi[2] === "X") {
    return player1.value + " win";
  } else if (ghi[0] === "O" && ghi[1] === "O" && ghi[2] === "O") {
    return player2.value + " win";
  }

  if (adg[0] === "X" && adg[1] === "X" && adg[2] === "X") {
    return player1.value + " win";
  } else if (adg[0] === "O" && adg[1] === "O" && adg[2] === "O") {
    return player2.value + " win";
  }

  if (beh[0] === "X" && beh[1] === "X" && beh[2] === "X") {
    return player1.value + " win";
  } else if (beh[0] === "O" && beh[1] === "O" && beh[2] === "O") {
    return player2.value + " win";
  }

  if (cfi[0] === "X" && cfi[1] === "X" && cfi[2] === "X") {
    return player1.value + " win";
  } else if (cfi[0] === "O" && cfi[1] === "O" && cfi[2] === "O") {
    return player2.value + " win";
  }

  if (aei[0] === "X" && aei[1] === "X" && aei[2] === "X") {
    return player1.value + " win";
  } else if (aei[0] === "O" && aei[1] === "O" && aei[2] === "O") {
    return player2.value + " win";
  }

  if (ceg[0] === "X" && ceg[1] === "X" && ceg[2] === "X") {
    return player1.value + " win";
  } else if (ceg[0] === "O" && ceg[1] === "O" && ceg[2] === "O") {
    return player2.value + " win";
  }
}
