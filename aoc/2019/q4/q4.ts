let lower_bound:number = 158126;
const upper_bound:number = 624574;
let possibilities:Map<number,number>, parse_input:number[];
let curr:number = 0;
possibilities = new Map();

function check_current(arr:number[]) : number[] {
    console.log(arr);
    for(let i = 0; i < arr.length - 1; i++){
        //arr[i+1] = (arr[i+1] < arr[i]) ? arr[i]:arr[i+1];
        if (arr[i] > arr[i+1])
            arr[i+1] = arr[i];
    }
    return arr;
}
function check_adjencents(int:number) : number {
    let check:string = int.toString();
    for (let i = 0; i < check.length-1; i++){
        if(check.charAt(i) == check.charAt(i+1) && check.charAt(i+2) != check.charAt(i) && check.charAt(i) != check.charAt(i-1))
            return 1;
    }
    return 0;
}

for(let i = lower_bound; i < upper_bound; i++){
    console.log(i)
    i = parseInt(check_current(i.toString().split('').map(Number)).toString().split('').join().replaceAll(',',''));
    console.log(i);
    if (i < upper_bound)
        possibilities.set(i, check_adjencents(i));
}
possibilities.forEach((val, key) => {
    if (val&1)
        curr++;
});
console.log(curr); //1665, 1131