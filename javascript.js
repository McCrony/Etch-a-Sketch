const grid = document.querySelector(".grid");
const gridSize = 12;

createDefaultGrid(gridSize);

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


