function countApplesAndOranges(s, t, a, b, apples, oranges) {
let apple = 0
let orange = 0 

    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t ) {
            apple ++
        }
    }
    for (let j = 0; j < oranges.length; j++) {
        if(oranges[j] + b >= s && oranges[j] + b <= t) {
            orange ++
        }
    }
    return apple + '\n'+ orange
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2,2,1],[5,-6]))
