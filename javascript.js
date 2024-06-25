const grid = document.querySelector(".grid");

createDefaultGrid(2)

// Function to create default 16x16 grid
function createDefaultGrid(size) {
  const container = document.querySelector('.grid');

  const squareSize = `${500 / size}px`; 

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.classList.add('gridCell');
    container.appendChild(square);
  }
}


