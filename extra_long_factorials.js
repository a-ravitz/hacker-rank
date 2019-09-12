function extraLongFactorials(n) {

    let factorial = BigInt(1)
    let bigInt = BigInt(n)
    for (let index = bigInt; index >= BigInt(1); index--) {
        
        factorial *= index

    }

    console.log(factorial.toString())

}

console.log(extraLongFactorials(32))