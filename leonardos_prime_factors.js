function primeCount(n) {
    let primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
    let count = 0;
    let total = 1;
  
    if (n === 1) {
      return 0;
    }
    for (let i = 0; i < primeArr.length; i++) {

      if (total * primeArr[i] <= n) {
        total *= primeArr[i];
        count++;
      }
  
    }
    return count;
  }

console.log(primeCount(10000000000))
