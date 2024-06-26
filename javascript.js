const grid = document.querySelector(".grid");
const userNumber = document.querySelector("input[type=number]");
const createBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.errorMsg');
const resetBtn = document.querySelector('.reset');
const gridCell = document.querySelector('.gridCell');


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
  errorMsg.style.cssText = " display: none";
  userNumber.value = '16';
  grid.innerHTML = " ";
  createDefaultGrid(16);}
)


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
}

createDefaultGrid(16);

