function countApplesAndOranges(s, t, a, b, apples, oranges) {
let aCount = 0
let oCount = 0 

    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t ) {
            aCount ++
        }
    }
    for (let j = 0; j < oranges.length; j++) {
        if(oranges[j] + b >= s && oranges[j] + b <= t) {
            oCount ++
        }
    }
    console.log(aCount) + '\n'+ 
    console.log(oCount)
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1],[5,-6])
