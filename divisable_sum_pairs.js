function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i <= n; i ++) {
        for (let j = i+1; j <= n; j++) {

            //because i is always less than j we just need this conditional 
            //to count the number of pairs 
                if ((ar[i] + ar[j]) % k === 0) {
                    count ++

            }
        }
    }
    return count
}


console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4]))