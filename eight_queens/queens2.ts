let gameboard:number[][] = []
let total_solutions = 0;

function reset_board(){
    for (let i = 0; i < 8; i++)
        gameboard[i] = [-1,-1,-1,-1,-1,-1,-1,-1];
}

function printBoard(board:number[][]):void{
    for(let i = 0; i < 8; i++)
        console.log(String(board[i]));
}

function remove_plays(row:number, col:number){
    for (let i = 0; i < 8; i++) //remove columns
        if (gameboard[i][col] == -1)
            gameboard[i][col] = 0;

    for (let i = 0; i < 8; i++)//remove rows
        if (gameboard[row][i] == -1)
            gameboard[row][i] = 0;
    
    for (let i = 0; i < 8; i++){ //remove diags
        for (let j = 0; j < 8; j++){
            if(gameboard[i][j] == -1 && (((i+j) == (row+col)) || ((i-j) == (row - col))))
                gameboard[i][j] = 0;
        }
    }
}

function next_play(row:number, col:number):boolean{
    remove_plays(row-1, col);
    for(let i = 0; i < 8; i++){
        next_play(row,i);
    }
    return true;
}

function first_queen(){
    for(let i = 0; i < 8; i++){
        reset_board();
        gameboard[0][i] = 1;
        if(next_play(1, i))
            total_solutions++;
    }
}

first_queen();

printBoard(gameboard);