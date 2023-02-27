var lower_bound = 158126;
var upper_bound = 624574;
var possibilities, parse_input;
var curr = 0;
possibilities = new Map();
function check_current(arr) {
    for (var i = 0; i < arr.length - 1; i++)
        arr[i + 1] = (arr[i + 1] < arr[i]) ? arr[i] : arr[i + 1];
    return arr;
}
function check_adjencents(int) {
    var check = int.toString();
    for (var i = 0; i < check.length - 1; i++)
        if (check[i] == check[i + 1] && check[i + 2] != check[i] && check[i] != check[i - 1])
            return 1;
    return 0;
}
for (var i = lower_bound; i < upper_bound; i++) {
    i = parseInt(check_current(i.toString().split('').map(Number)).join(''));
    console.log(i);
    if (i < upper_bound)
        possibilities.set(i, check_adjencents(i));
}
possibilities.forEach(function (val, key) {
    if (val & 1)
        curr++;
});
console.log(curr); //1665, 1131
