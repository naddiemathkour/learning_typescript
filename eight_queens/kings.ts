let gameboard:number[][] = []
let solutions_found = 0;
let itterations = 0;

let col_arr:number[] = [0,1,2,3,4,5,6,7];

for(let i = 0; i < 8; i++)
    gameboard[i] = [-1,-1,-1,-1,-1,-1,-1,-1];

function map_new_board(board:number[][]):number[][]{
    let new_board:number[][] = []
    for(let i = 0; i < 8; i++)
        new_board[i] = board[i].map(Number);
    return new_board;
}

function printBoard(board:number[][]):void {
    for(let i = 0; i < 8; i++)
        console.log(String(board[i]));
}

function rem_play(row:number, col:number, board:number[][]):number[][]{
    let new_board:number[][] = map_new_board(board);
    new_board[row][col] = 1;

    if(row%7 && col%7) //not on edge
        console.log(row%7 && col%7);
        for(let i = -1; i < 2; i++){
            // new_board[row+i][col+i] = 0;
            // new_board[row+i][col+i] = 0;
            // new_board[row+i][col+i] = 0;
        }
    return new_board;
}

function place_kings(board:number[][], pass:number):boolean{
    if(pass == 8){
        console.log("\nSolution Found!");
        printBoard(board);
        return true;
    }
    for(let col = 0; col < 8; col++){
        console.log("Pass = " + pass);
        if(board[pass][col] == -1){
            rem_play(pass, col, board);
        }
    }
    place_kings(board, pass+1)
    return false;
}

place_kings(gameboard, 0);
console.log("Solutions found: " + solutions_found);
console.log("Itterations = " + itterations);