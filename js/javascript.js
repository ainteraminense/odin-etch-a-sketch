// create variables
const container = document.querySelector(".container");
// const spawns = [];
let spawn;
// let spawnsRow;
// create 16 x 16 grid
// using flex
// pay attention borders and margins
function createGrid() {
    for (let i = 0; i < 16; i++) {
        let spawnsRow = document.createElement("div");
        spawnsRow.classList.add("spawns-row");
        for (let j = 0; j < 16; j++) {
            spawn = document.createElement("div");
            spawn.classList.add("spawns");
            spawnsRow.appendChild(spawn);
        }
        container.appendChild(spawnsRow);
    }
}

createGrid();