let n = 8
let k = 5

function getMaxLessThanK(n, k) {
    let max = 0
    for (let a = n; a > 0; a--) {
        for (let b = a - 1; b > 0; b--) {
            if ((a & b) < k && (a & b) > max) {
                max = (a&b)
            }
        }
    }
    return max
}
console.log(getMaxLessThanK(n,k))

