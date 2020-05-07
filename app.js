document.addEventListener("DOMContentLoaded", () => {
  // state
  let player = "player-one"; // player-one OR player-two
  let gameState = "starting"; // starting - playing - gameOver
  // data structures
  // let filledCircles = [];
  let lastCircle = { position: null, top: null, right: null, left: null };
  // selecting
  const grid = document.querySelector(".grid");
  const gridChildrenLength = grid.children.length;

  const rightLastCircle = grid.lastElementChild;
  const leftLastCircle = findLastLeftCircle();

  function findLastLeftCircle() {
    let element = rightLastCircle;
    for (let i = 0; i < 6; i++) {
      element = element.previousElementSibling;
    }
    return element;
  }

  function findClickedCirclePosition(target) {
    let element = target;
    let firstGridChild = grid.firstElementChild;
    let i = 0;
    while (firstGridChild != element) {
      firstGridChild = firstGridChild.nextElementSibling;
      i++;
    }
    return i;
  }

  function findNextPossibleCircles(position) {
    // edges
    if (position >= 0 && position <= 6) {
      // max top
      console.log("max top");
    } else if ((position + 1) % 7 == 0) {
      // max right
      console.log("max right");
    } else if (position % 7 == 0) {
      // max left
      console.log("max left");
    } else {
      // middle
      console.log("middle");
    }
  }

  // fill circle
  grid.addEventListener("click", fillCircle);

  function fillCircle(event) {
    if (gameState === "starting") {
      if (!event.target.classList.contains("grid")) {
        const position = findClickedCirclePosition(event.target);
        let right, left, top;
        if (position == 41 || position == 35) {
          event.target.classList.add(player);
          player = player === "player-one" ? "player-two" : "player-one";
          lastCircle.position = position;
          gameState = "playing";
        }
      }
    } else if (gameState === "playing") {
      const position = findClickedCirclePosition(event.target);

      // check if someone wins
      // event.target.classList.add(player);
      // player = player === "player-one" ? "player-two" : "player-one";
      findNextPossibleCircles(position);
    } else if (gameState === "gameOver") {
      // display winner
      // remove click event
    }
  }
  // check winner
});
// 0  1   2   3   4   5   6
// 7  8   9   10  11  12  13
// 14 15  16  17  18  19  20
// 21 22  23  24  25  26  27
// 28 29  30  31  32  33  34
// 35 36  37  38  39  40  41
