function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    let k = 0;
    let fact = 1;
    let result = 1;
    while( k < n){
        k++;
        fact = k * fact;
        result = result + (1/fact);
    }
    return result;
}
