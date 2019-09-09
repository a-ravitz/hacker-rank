function birthdayCakeCandles(ar) {
    
    let max = ar.reduce((a,b) => Math.max(a, b))

    let tallCandles =  ar.filter((c) => c === max).length

    return tallCandles
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))