// FUNCTIONS

/**
 * CreateBoard procedure make all the cells inside the board. 
 * Pre: Recieve a grid, and amount of Cells to create (Number).
 * Post: Modify the grid append with cells.
 */
function createBoard (grid, amountCells) {
    // Create cells inside the grid
    for(let i = 0; i < amountCells; i++){
        // Create an base element
        let cell = document.createElement('div');
        
        // Set attributes and class
        cell.setAttribute('id', `${i}`);
        cell.classList.add('cell');
        
        // Insert inside the grid
        grid.appendChild(cell);
    }

    // Create the last 10 taken cells
    for(let i = 300; i < TAKEN_AMOUNT_CELLS + 300; i++){
        // Create an base element
        let cell = document.createElement('div');
        
        // Set attributes and class
        cell.setAttribute('id', `${i}`);
        cell.classList.add('taken');
        
        // Insert inside the grid
        grid.appendChild(cell);
    }
}

function draw (currentTetromino, squares, currentPosition) {
    currentTetromino.forEach( index => {
        squares[index + currentPosition].classList.add('tetromino');
    });
}

function undraw (currentTetromino, squares, currentPosition) {
    currentTetromino.forEach( index => {
        squares[index + currentPosition].classList.remove('tetromino');
    });
}

function moveDown (currentTetromino, squares, current) {
    undraw(currentTetromino, squares, current.position);
    current.position += SETP_DOWN;
    draw(currentTetromino, squares, current.position);
    freeze (currentTetromino, squares, current);
}

function freeze (currentTetromino, squares, current) {
    // test
    console.log(currentTetromino.some( index => squares[current.position + index + width].classList.contains('taken') ), currentTetromino)

    if( currentTetromino.some( index => squares[current.position + index + width].classList.contains('taken') ) ){
        // 
        currentTetromino.forEach( index => squares[current.position + index].classList.add('taken'));
        // Randomly select a Tetromino and a rotation
        randomTetromino = nextRandom;
        nextRandom = Math.floor(Math.random()*theTetrominoes.length);
        // let currentRotation = Math.floor(Math.random()*4);
        // Select one Tetromino
        currentTetromino = theTetrominoes[nextRandom][0]
        console.log(currentTetromino)
        current.position = 4;
        // Draw initially
        // draw(currentTetromino, squares, current.position);
    }
}
