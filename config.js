// CONSTANTS
const BOARD_CELLS_AMOUNT = 200;
const cantidad = 5;
const width = 10;
const speed = 100; // In milliseconds
const SETP_DOWN = 10;
const TAKEN_AMOUNT_CELLS = 10;
let nextRandom = 0;
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
