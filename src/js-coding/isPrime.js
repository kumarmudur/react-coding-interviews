// is Prime number 

function isPrimeNumber(num) {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrimeNumber(8));