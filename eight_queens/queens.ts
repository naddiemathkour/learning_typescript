let board:number[][] = [];

for(let i = 0; i < 8; i++)
    board[i] = [-1,-1,-1,-1,-1,-1,-1,-1];

function printBoard(board:number[][]){
    for(let i = 0; i < 8; i++){
        console.log(String(board[i]));
    }
}

function make_play(row:number, col:number, gameboard:number[][]):boolean{
    if(gameboard[row][col] == -1){
        gameboard[row][col] = 1;
        remove_play(row, col, gameboard);
        //printBoard(gameboard)
        board = gameboard;
        return true;
    }
    return false;
}

function remove_play(row:number, col:number, gameboard:number[][]):number[][]{
    for (let i = 0; i < 8; i++){ //remove columns
        if (gameboard[i][col] == -1)
            gameboard[i][col] = 0;
    }
    for (let i = 0; i < 8; i++){//remove rows
        if (gameboard[row][i] == -1)
            gameboard[row][i] = 0;
    }

    for (let i = 0; i < 8; i++){ //remove diags
        for (let j = 0; j < 8; j++){
            if(gameboard[i][j] == -1 && (((i+j) == (row+col)) || ((i-j) == (row - col))))
                gameboard[i][j] = 0;
        }
    }
    return gameboard;
}

function generate_permutation(gameboard:number[][], play:number):boolean{
    let row:number = play + 1;
    for(let i = 0; i < 8; i++){
        if(make_play(row, i, gameboard)){
            gameboard = board;
            if(row == 7){
                console.log("Final:\n");
                printBoard(gameboard);
                return true;
            }
            row++;
        }
        else if(row == 7){
            generate_permutation(board, -1);
        }
    }
    return false;
}
generate_permutation(board, -1);