const gridContainer = document.querySelector("#container");
let numberOfGrid = 16;

const button = document.querySelector("button");
button.addEventListener("click",() => {
    let number = prompt("Enter number of grid(1 to 100)", 16);
    numberOfGrid = number;
})

//calculate size of each gridItem based on numberOfGrid
const containerWidth = gridContainer.offsetWidth;
const gridItemSize = containerWidth / numberOfGrid;

function createGridItem(size){
    const gridItem =  document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.width = `${size}px`;
    gridItem.style.height = `${size}px`;
    return gridItem;
}

let currentRow;
for(let i = 0; i < numberOfGrid * numberOfGrid; i++){
    if(i % numberOfGrid === 0){
        currentRow = document.createElement("div");
        currentRow.className = "row";
        gridContainer.appendChild(currentRow);
    }
    currentRow.appendChild(createGridItem(gridItemSize));
}


