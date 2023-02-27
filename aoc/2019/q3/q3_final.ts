import fs from 'fs';

let x:number, y:number, steps:number, value:number, wire1:string[], wire2:string[];
let plot:Map<any, any>, intersections:Map<any, any>;
let input:string[] = fs.readFileSync('input', 'utf-8').split('\n');

function check_plots(input:string){
    value = parseInt(input.replace(/\D/g, ''));
    switch (input.charAt(0)){
        case 'R':
            for (x++; value > 1; x++){
                if (plot.has(String([x,y])))
                    intersections.set(String([x,y]), plot.get(String([x,y]))+ ++steps);
                else
                    steps++;
                value--;
            }
            break;
        case 'L':
            for (x--; value > 1; x--){
                if (plot.has(String([x,y])))
                    intersections.set(String([x,y]), plot.get(String([x,y]))+ ++steps);
                else
                    steps++;
                value--;
            }
            break;
        case 'U':
            for (y++; value > 1; y++){
                if (plot.has(String([x,y])))
                    intersections.set(String([x,y]), plot.get(String([x,y]))+ ++steps);
                else
                    steps++;
                value--;
            }
            break;
        case 'D':
            for (y--; value > 1; y--){
                if (plot.has(String([x,y])))
                    intersections.set(String([x,y]), plot.get(String([x,y]))+ ++steps);
                else
                    steps++;
                value--;
            }
            break;
    } steps++;
}

function trace_wire(input:string) {
    value = parseInt(input.replace(/\D/g, ''));
    switch (input.charAt(0)) {
        case 'R': //move right (increment)
            for (x++; value > 1; x++){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'L': //move left (decrement)
            for (x--; value > 1; x--){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'U':
            for (y++; value > 1; y++){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'D':
            for (y--; value > 1; y--){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
    } steps++;
}

function find_distance(str:String):number {
    let values:any = str.split(',');
    values = values.map(Number);
    return Math.abs(values[0]) + Math.abs(values[1]);
}

function get_outputs(input:Map<any, any>){
    input.forEach((val:number, key:string) =>{
        let new_distance = find_distance(key);
        if (new_distance < value)
            value = new_distance;
        if (input.get(key) < steps)
            steps = input.get(key);
    });
    console.log("Least amount of steps: " + steps);
    console.log("Closest manhatten distance: " + value);
}

function main(){
    wire1 = input[0].split(',');
    wire2 = input[1].split(',');
    plot = new Map();
    intersections = new Map();
    
    x = y = steps = 0;
    for(let i = 0; i < wire1.length; i++)
        trace_wire(wire1[i]);
        
    x = y = steps = 0;
    for (let i = 0; i < wire2.length; i++)
        check_plots(wire2[i]);

    steps = value = Infinity;
    get_outputs(intersections);
}
main(); //489, 93654