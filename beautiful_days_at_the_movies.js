let reverse = (x) => parseInt(x.toString().split('').reverse().join(''), 10)
let output = 0

 beautifulDays = (i, j, k) => {

    for (let a = i; a <= j; a++) {
       ((a - reverse(a)) / k) % 1 === 0 ? output ++ : output
    }
    return output
}

console.log(beautifulDays(20, 23, 6))