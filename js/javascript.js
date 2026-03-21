// create variables
const container = document.querySelector(".container");
const gridMaker = document.querySelector("button");
let spawn;

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

createGrid(16);