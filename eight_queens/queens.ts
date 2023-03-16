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

function remove_plays(row:number, col:number, board:number[][]):number[][] {
    let new_board:number[][] = map_new_board(board);
    new_board[row][col] = 1;
    for (let i = 0; i < 8; i++) //remove columns
        if (new_board[i][col] == -1)
            new_board[i][col] = 0;

    for (let i = 0; i < 8; i++)//remove rows
        if (new_board[row][i] == -1)
            new_board[row][i] = 0;
    
    for (let i = 0; i < 8; i++){ //remove diags
        for (let j = 0; j < 8; j++){
            if(new_board[i][j] == -1 && (((i+j) == (row+col)) || ((i-j) == (row - col))))
                new_board[i][j] = 0;
        }
    }
    return new_board;
}

function place_queen(board:number[][], pass:number, cols:number[]):boolean{
    if(pass == 8){
        console.log("\nSolution Found!");
        printBoard(board);
        return true;
    }
    for(let col = 0; col < cols.length; col++){
        itterations++;
        if(board[pass][cols[col]] == -1 && place_queen(remove_plays(pass, cols[col], board), pass+1, cols.filter((e,i)=>e!=cols[col]))){
            solutions_found++;
        }
    }
    return false;
}

place_queen(gameboard, 0, col_arr);
console.log("Solutions found: " + solutions_found);
console.log("Itterations = " + itterations);