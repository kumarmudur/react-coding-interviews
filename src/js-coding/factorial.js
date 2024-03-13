// factorial of number

function factorialNumber(n) {
    if (n === 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i; 
    }
    return factorial;
}

console.log(factorialNumber(5));