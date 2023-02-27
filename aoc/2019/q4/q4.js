var lower_bound = 158126;
var upper_bound = 624574;
var possibilities = new Map();
var curr = 0;
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
    i = parseInt(check_current(String(i).split('').map(Number)).join(''));
    if (i < upper_bound)
        possibilities.set(i, 0);
}
possibilities.forEach(function (val, key) { if (check_adjencents(key) & 1)
    ++curr; });
console.log(curr); //1665, 1131
