// create variables
const container = document.querySelector(".container");
const gridMaker = document.querySelector("button");
let spawn;
let gridSize = 16;

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
                event.target.style.backgroundColor = "gray";
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

createGrid(gridSize);