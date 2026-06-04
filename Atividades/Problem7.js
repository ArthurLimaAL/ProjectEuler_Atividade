function nthPrime(n) {
    let count = 0;
    let candidateValue = 2;
    let latestPrime = 0;

    while (count < n) {
        let isPrime = true;
        for (let i = 2; i < candidateValue; i++) {
            if (candidateValue % i === 0) {
                isPrime = false;
                break; 
            }
        }

        if (isPrime) {
            latestPrime = candidateValue;
            count++;
        }


        if (candidateValue === 2) {
            candidateValue = 3;
        } else {
            candidateValue += 2;
        }
    }
    return latestPrime;
}

nthPrime(10001);