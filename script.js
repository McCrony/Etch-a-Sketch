
// Target Elements

const grid = document.querySelector(".grid");
const userNumber = document.querySelector("input[type=number]");
const createBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.errorMsg');
const resetBtn = document.querySelector('.reset');
const pickColour = document.querySelector('input[type=color');
const randomColour = document.querySelector('input[type=checkbox');

//Random RGB valuse
let red = Math.floor(Math.random()*256);
let green = Math.floor(Math.random()*256);
let blue = Math.floor(Math.random()*256);
let rgb = `rgb(${red}, ${green}, ${blue})`


// Generate new grid
createBtn.addEventListener('click', () => {
  if (userNumber.value < 1 || userNumber.value > 100) {
    errorMsg.style.cssText = "display: inline"
  } else {
    errorMsg.style.cssText = " display: none";
    grid.innerHTML ="";
    createDefaultGrid(userNumber.value); 
    
  }
})

// Clear Grid
resetBtn.addEventListener('click', () => {
  console.log(randomColour);
  errorMsg.style.cssText = " display: none";
  grid.innerHTML = " ";
  createDefaultGrid(userNumber.value);}
)

// Add colour fill
function fillCell () {
  const gridCells = document.querySelectorAll('.gridCell');
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', ()=>{
      if(randomColour.checked == true){
        gridCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }else{
        gridCell.style.backgroundColor = pickColour.value;
      }
    }
    )
  })
}

//Remove Colour Fill
function removeFill () {
  const gridCells = document.querySelectorAll('.gridCell');
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', ()=>{
      gridCell.style.backgroundColor = "";
    }
    )
  })
}

// Function to create default 16x16 grid
function createDefaultGrid(gridSize) {
  const container = document.querySelector('.grid');
  
  const squareSize = `${500 / gridSize}px`; 
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.classList.add('gridCell');
    container.appendChild(square);
  }
  fillCell();
}

createDefaultGrid(16);

