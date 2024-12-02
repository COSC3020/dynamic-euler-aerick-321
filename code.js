function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    let fact = 1;
    let result = 1;
    for(let k = 1; k < n; k++){
        fact = k * (k-1);
        result = 1/fact + result
        
    }
}
