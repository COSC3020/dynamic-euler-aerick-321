function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    let prev = 1;
    while(prev < n){
    let next = 1.0/(1 + prev) + e(prev)
        prev++;
    }
}
