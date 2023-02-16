let x:number = 1;
let y:number = 3;

console.log((x/y).toPrecision(2)); //toPrecision: enter number of digits you'd like to print

x = 100;
y = 50;

console.log(x*y);
console.log(x/y);
console.log(Math.sqrt(x));

let z = x**2;

console.log(z);

console.log("Log base 2 of the above number = " + Math.log2(z).toFixed(3));
//toFixed allows you to print a specific number of decimal places

console.log(y-x);
console.log(Math.abs(y-x));
