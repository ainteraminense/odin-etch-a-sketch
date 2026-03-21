// create variables
const container = document.querySelector(".container");
const gridMaker = document.querySelector("button");
let spawn;
let gridSize = 16;
let opacity = 0.0;

// create 16 x 16 grid
// using flex
// pay attention borders and margins
function createGrid(size) {
    const width = 960/size;
    const height = 960/size; 
    for (let i = 0; i < size; i++) {
        let spawnsRow = document.createElement("div");
        spawnsRow.classList.add("spawns-row");
        spawnsRow.style.height = height + "px";
        for (let j = 0; j < size; j++) {
            spawn = document.createElement("div");
            spawn.classList.add("spawns");
            spawn.style.width = width + "px";
            spawn.style.height = height + "px";
            spawn.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = colorBackground();
                event.target.style.opacity = darkenSquares();
            });
            spawnsRow.appendChild(spawn);
        }
        container.appendChild(spawnsRow);
    }
}

gridMaker.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("What is the grid size no greater than 100?"));
    } while (!(gridSize > 0 && gridSize <= 100));
    // reset grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // create new grid with number given by user
    createGrid(gridSize);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function colorBackground() {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    return `rgb(${red} ${green} ${blue})`;
}

function darkenSquares() {
    if (opacity == 1) {
        return opacity = 0.0;
    } else {
        opacity += 0.1;
        return opacity = (Math.ceil(opacity * 10) / 10);
    }
}

createGrid(gridSize);