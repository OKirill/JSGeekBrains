

function primeNumbers(value) {
    if (value > 2) {
        let i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

let value = 0,
    result = [],
    limit = 100;
while (value < limit) {
    value = primeNumbers(value);
    result.push(value);
    if (value > limit) {
        result.pop();
    }
}
console.log("Primes:", result);



