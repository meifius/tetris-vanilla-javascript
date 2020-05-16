document.addEventListener('DOMContentLoaded', () => {
    // CONSTANTS
    const BOARD_CELLS_AMOUNT = 200;
    const cantidad = 5;
    const width = 10;
    // The Tetrominoes
    const lTetromino = [
        [1, width + 1 , 2*width + 1, 2],
        [width, width + 1, width + 2, 2*width + 2],
        [2*width, 1, width + 1, 2*width + 1],
        [width, 2* width, 1 + 2*width, 2+2*width],
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]

    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


    // FUNCTIONS

    /**
     * CreateBoard procedure make all the cells inside the board. 
     * Pre: Recieve a grid, and amount of Cells to create (Number).
     * Post: Modify the grid append with cells.
     */
    function createBoard(grid, amountCells){
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
    }

    /**
     * 
     * @param {Tetromino} current 
     * @param {Array} squares 
     * @param {Number} currentPosition 
     */
    function draw(current, squares, currentPosition){
        current.forEach( index => {
            squares[index + currentPosition].classList.add('tetromino');
        });
    }


    /**
     * Test of click and parameters
     */
    function pops(cantidad){
        // console.log(cantidad)
        for(let i = 0; i < cantidad; i++){
            console.log(`Number: ${i}`);
        }
    }

    // VARIABLES
    // Create a grid and select the grid
    const grid = document.querySelector('.grid');
    const titulo = document.querySelector('h1');
    const scoreDisplay = document.querySelector('#score');
    const startButton = document.querySelector('#start-button');
    
    // MAIN PROGRAM
    createBoard(grid, BOARD_CELLS_AMOUNT);
    //
    const squares = Array.from( document.querySelectorAll('.cell') );
    // 
    let currentPosition = 4;
    let current = theTetrominoes[0][0];

    draw(current, squares, currentPosition);

    setTimeout( () => {
        console.log("Por empezar")
    }, 1000)

    // setInterval( () => {
    //     draw(current, squares, currentPosition);
    //     currentPosition += 10;
    // }, 1000 )

    // Test - add event - function(cantidad) {pops(cantidad)}
    titulo.addEventListener('click', function (event) {pops(cantidad)});
    
});