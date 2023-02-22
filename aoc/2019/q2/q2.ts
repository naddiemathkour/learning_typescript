import fs from 'fs';

let input = fs.readFileSync('input', 'utf-8').split(',').map(Number);
let cloner:number[] = input;

for (let noun = 0; noun < 100; noun++){
    for(let verb = 0; verb < 100; verb++){
        input = cloner.map(Number);
        input[1] = noun;
        input[2] = verb;
        for (let i = 0; i < input.length - 2; i+=4){
            switch(input[i]){
                case 1:
                    input[input[i+3]] = input[input[i+1]] + input[input[i+2]];
                    break;
                case 2:
                    input[input[i+3]] = input[input[i+1]] * input[input[i+2]];
                    break;
                default:
                    i = input.length;
                    break;
            }
        }
        if (input[0] == 19690720){
            console.log("Verb = "+verb+" Noun = "+noun + "\nAnswer = " + (100*noun+verb));
            process.exit(0);
        }
    }
}