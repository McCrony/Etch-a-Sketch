const grid = document.querySelector(".grid");

function createSquares(size) {
  const container = document.querySelector('.grid');

  // const squareSize = `${windowsize / size, windowsize / size}px`; // Calculate square size based on viewport dimensions
  const squareSize = `${500 / size}px`; // Calculate square size based on viewport dimensions

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.classList.add('gridCell'); // Add a class for styling
    container.appendChild(square);
  }
}

createSquares(16);

