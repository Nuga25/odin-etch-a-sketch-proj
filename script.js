const gridContainer = document.querySelector("#container");

function createGrid(numberOfGrid){
    gridContainer.textContent = "";
    
    //calculate size of each gridItem based on numberOfGrid
    const containerWidth = gridContainer.offsetWidth;
    const gridItemSize = containerWidth / numberOfGrid;

    function createGridItem(size){
        let gridItem =  document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.style.width = `${size}px`;
        gridItem.style.height = `${size}px`;
        gridItem.style.backgroundColor = "white";
        gridItem.style.opacity = "0.1"; // Set initial opacity to 10%

        // Add event listener to change opacity and background color on hover
        gridItem.addEventListener("mouseover", (event) => {
            let currentOpacity = parseFloat(event.target.style.opacity);
            if (currentOpacity < 1) {
                event.target.style.opacity = (currentOpacity + 0.1).toString();
            }
            event.target.style.backgroundColor = generateRandomColor();
        });

        return gridItem;
    }

    //have equal number of grid on each row
    let currentRow;
    for(let i = 0; i < numberOfGrid * numberOfGrid; i++){
        if(i % numberOfGrid === 0){
            currentRow = document.createElement("div");
            currentRow.className = "row";
            gridContainer.appendChild(currentRow);
        }
        currentRow.appendChild(createGridItem(gridItemSize));
    }
}

const button = document.querySelector("button");
button.addEventListener("click",() => {
    let numberOfGrid;
    let number = prompt("Enter number of grid(1 to 100)");
    if(number < 1 || number > 100){
        alert("Invalid! Select a number between 1 and 100.");
        numberOfGrid = 16;
    }else{
        numberOfGrid = number;
    }

    createGrid(numberOfGrid);
})

// Create a default 16x16 grid on page load
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

//generate random colors as mouse hovers
function generateRandomColor(){
    const r = Math.floor(Math.random() * 156 + 100);//Generate random between 100  and 255
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);

    return `rgb(${r}, ${g}, ${b})`;
}