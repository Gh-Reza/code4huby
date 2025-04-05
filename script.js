const gridContainer = document.querySelector('.grid-container');

// Get the screen dimensions
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Define the size of each square
const squareSize = 30; // Adjust this size as needed

function createRedSquare(x, y) {
  const square = document.createElement('div');
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  square.style.backgroundColor = 'red';
  square.style.position = 'absolute';
  square.style.left = `${x * squareSize}px`;
  square.style.top = `${y * squareSize}px`;
  gridContainer.style.position = 'relative'; // Ensure gridContainer is positioned
  gridContainer.appendChild(square);
}

function start() {
  let startX = 0;
  let startY = 0;
  while (true) {
    createRedSquare(startX, startY);
  }
}

start();
