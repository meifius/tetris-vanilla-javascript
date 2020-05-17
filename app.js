document.addEventListener('DOMContentLoaded', () => {
    // VARIABLES
    // Create a grid and select the grid
    const grid = document.querySelector('.grid');
    const titulo = document.querySelector('h1');
    const scoreDisplay = document.querySelector('#score');
    const startButton = document.querySelector('#start-button');
    
    // MAIN PROGRAM
    createBoard(grid, BOARD_CELLS_AMOUNT);
    // Select all the squares adn convert them in an Array
    const squares = Array.from( document.querySelectorAll('.grid div') );
    console.log(squares)
    // Initial position
    let current = {position : 4};
    let currentRotation = Math.floor(Math.random()*4);

    // Randomly select a Tetromino and a rotation
    let randomTetromino = Math.floor(Math.random()*theTetrominoes.length);
    // Select one Tetromino
    let currentTetromino = theTetrominoes[randomTetromino][currentRotation];
    // Draw initially
    draw(currentTetromino, squares, current.position);

    // Update Frame and move down
    let timerId = setInterval( moveDown, speed, currentTetromino, squares, current);
    
});