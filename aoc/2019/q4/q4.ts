const lower_bound:number = 158126;
const upper_bound:number = 624574;
let possibilities:Map<number,number> = new Map();
let curr:number = 0;

function check_current(arr:number[]) : number[] {
    for(let i = 0; i < arr.length - 1; i++)
        arr[i+1] = (arr[i+1] < arr[i]) ? arr[i]:arr[i+1];
    return arr;
}

function check_adjencents(int:number) : number {
    let check:string = int.toString();
    for (let i = 0; i < check.length-1; i++)
        if(check[i] == check[i+1] && check[i+2] != check[i] && check[i] != check[i-1])
            return 1;
    return 0;
}

for(let i = lower_bound; i < upper_bound; i++){
    i = parseInt(check_current(String(i).split('').map(Number)).join(''));
    if (i < upper_bound)
        possibilities.set(i, 0);
}

possibilities.forEach((val:number, key:number) => { if (check_adjencents(key)&1) ++curr; });

console.log(curr); //1665, 1131