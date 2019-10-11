function flippingBits(N) {
  let n = N.toString(2);
  
  while (Math.floor(n.length % 32) != 0) {
    n = "0" + n;
  }

  let nArr = n.split('')
  for (let i = 0; i < nArr.length; i ++) {
      if (nArr[i].toString() === "0") {
          nArr[i] = "1"
      } else {
          nArr[i] = "0"
      }
  }
  return parseInt(nArr.join(''), 2)

}

console.log(flippingBits(0));
console.log(flippingBits(1));
