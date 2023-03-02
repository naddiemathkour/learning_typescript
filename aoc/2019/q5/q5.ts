import fs from 'fs';
let input:number[] = fs.readFileSync('input', 'utf-8').split(',').map(Number);

function one_two(i:number):number {
    input[i]%2 == 0 ? input[input[i+3]] = input[input[i+1]] * input[input[i+2]]
    : input[input[i+3]] = input[input[i+1]] + input[input[i+2]];
    //console.log("1-2");

    return 4;
}

function three_four(i:number):number{
    input[i]&1 ? input[input[i+1]] = input[i+1] : 0//console.log(input[input[i+1]]);
    //console.log("3-4");
    return 2;
}

function read_opcode(){
    for(let i = 0; i < input.length;){
        console.log(i)
        input[i] > 2 ? i+=one_two(i) : i+=three_four(i);
    }
}

read_opcode(); //ABCDE -- DE = operation (1,2,3,4)
               //      -- A,B,C: if 1 = immediate else = position
               //      -- Also need to account for single digit opcodes?