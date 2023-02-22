let x = 1;
let y = 10;

let index = [x,y];
let plot = new Map();
let new_plot = new Map();

plot.set(String([x,y]), 1);

index = [++x, ++y];
plot.set(index, 2);

x--;
y--;

console.log(plot.get(index))

console.log(plot.get(String([x,y])))

console.log(plot);

