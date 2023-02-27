import { readFileSync } from 'fs';

let input = readFileSync('input', 'utf-8').split('\n');

function parse_input(input:string[]):number[]{
    let new_arr:number[] = [];
    for(let i = 0; i < input.length; i++){
        switch (input[i].charAt(0)) {
            case 'R':
                new_arr[i] = parseInt(input[i].replace(/\D/g, ''));
                break;
            case 'L':
                new_arr[i] = parseInt(input[i].replace(/\D/g, '')) *-1;
                break;
            case 'U':
                new_arr[i] = parseInt(input[i].replace(/\D/g, ''));
                break;
            case 'D':
                new_arr[i] = parseInt(input[i].replace(/\D/g, '')) *-1;
                break;
            default:
                break;
        }
    }
    return new_arr;
}

function parse_tuples(input:Number[]):[Number,Number][]{
    let tuple_arr:[Number,Number][] = [];
    let j = 0;
    tuple_arr[0] = [0,0]
    for (let i = 1; i < Math.floor(input.length/2) + 2; i++){
        tuple_arr[i] = [input[j++],input[j++]];
    }
    return tuple_arr;
}

function calculate_wire_endpoint(input:[Number,Number][]):[number,number]{
    let x = 0;
    let y = 0;
    for(let i = 0; i < input.length - 1; i++){
        x += input[i][0].valueOf();
        y += input[i][1].valueOf();
        console.log("(X, Y) = " + x + "," + y);
    }
    return [x,y];
}

function trace_wire(input:[Number,Number][]):[Number,Number][]{
    let line:[number,number][] = [];
    for(let i = 0; i < input.length - 1; i++){
        let traversal:number = input[i][0].valueOf();
        let increment = (Math.abs(traversal)/traversal);
        console.log(traversal);
        for(let j = traversal; j < input[i][j].valueOf() + traversal; j+=increment)
        console.log(line);
    }
    return line;
}

function main(){
    let wire1 = parse_tuples(parse_input(input[0].split(',')));
    let wire2 = parse_tuples(parse_input(input[1].split(',')));
    console.log(wire1);
    console.log(wire2);

    let output1 = calculate_wire_endpoint(wire1);
    let output2 = calculate_wire_endpoint(wire2);
    console.log(output1);
    console.log(output2);

    trace_wire(wire1);
}

main();