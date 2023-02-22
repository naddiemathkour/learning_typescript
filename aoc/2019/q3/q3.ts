import fs from 'fs';
let x:number = 0;
let y:number = 0;
let steps = 0;
let input = fs.readFileSync('input', 'utf-8').split('\n');
let wire1 = input[0].split(',');
let wire2 = input[1].split(',');
let plot = new Map();
let plot2 = new Map();
plot.set(String([0,0]), 0);
plot2.set(String([0,0]), 0);
let plot3 = new Map();
let total_value = 0;

function trace_wire(input:string) {
    let value:number = parseInt(input.replace(/\D/g, ''));
    total_value += value;
    switch (input.charAt(0)) {
        case 'R': //move right (increment)
            for (x+=1; value > 1; x++){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'L': //move left (decrement)
            for (x-=1; value > 1; x--){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'U':
            for (y+=1; value > 1; y++){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'D':
            for (y-=1; value > 1; y--){
                plot.set(String([x,y]), ++steps);
                value--;
            }
            break;
        default:
            break;
    }
}

function trace_wire2(input:string) {
    let value:number = parseInt(input.replace(/\D/g, ''));
    total_value += value;
    switch (input.charAt(0)) {
        case 'R': //move right (increment)
            for (x+=1; value > 1; x++){
                plot2.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'L': //move left (decrement)
            for (x-=1; value > 1; x--){
                plot2.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'U':
            for (y+=1; value > 1; y++){
                plot2.set(String([x,y]), ++steps);
                value--;
            }
            break;
        case 'D':
            for (y-=1; value > 1; y--){
                plot2.set(String([x,y]), ++steps);
                value--;
            }
            break;
        default:
            break;
    }
}

function find_distance(str:String):number {
    let values:any = str.split(',');
    values = values.map(Number);
    return Math.abs(values[0]) + Math.abs(values[1]);
}



function main(){
    console.log("Wire 1 length: " + wire1.length);
    for(let i = 0; i < wire1.length; i++){
        trace_wire(wire1[i]);
        steps++;
    }
    console.log("Wire1 total value: " + total_value);
    console.log(steps);
    x = y = steps = total_value = 0;
    for(let i = 0; i < wire2.length; i++){
        trace_wire2(wire2[i]);
        steps++;
    }
    console.log("Wire2 total value: " + total_value);
    console.log(steps);

    plot.forEach((value, key) =>{
        if(plot2.has(`${key}`)){
            plot3.set(key, plot.get(key) + plot2.get(key));
        }
    });
    //console.log(plot3);
    let distance = steps = Infinity;
    plot3.forEach((value, key) =>{
        let new_distance = find_distance(key);
        if (new_distance > 0 && new_distance < distance)
            distance = new_distance;
        if (plot3.get(key) < steps && plot3.get(key) > 0)
            steps = plot3.get(key);
    });

    console.log("Shortest distance = " + distance);
    console.log("Least amount of steps = " + steps); //93647 too low
    console.log(plot3);
    // plot.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    //   });
}
//console.log(wire1);
main();