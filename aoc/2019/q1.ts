import * as fs from 'fs';

function fuel_checker(mass:number):number {
    let ret_val = 0;
    while(mass >= 9){
        mass = Math.floor(mass/3) - 2;
        ret_val += mass;
    }
    return ret_val;
}

let input = fs.readFileSync('input', 'utf-8').split('\n'); //reads as a buffer array, utf-8 changes to string
let output = 0;

for (let i = 0; i < input.length - 1; i++){
    output += fuel_checker(parseInt(input[i]));
}

console.log("Total fuel needed : " + output); //3262390 too high 4890547 too low (pt. 2)