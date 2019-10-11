function flippingBits(N) {

  //conver N to bits 
  let bits = N.toString(2);

  //make sure bits is 32 characters long by adding 0's to the beginning
  while (Math.floor(bits.length % 32) != 0) {
    bits = "0" + bits;
  }

  //split bits into an array so we can run the loop below
  // and switch 1's to 0's and 0's to 1's

  let bitsArr = bits.split('')
  for (let i = 0; i < bitsArr.length; i ++) {
      if (bitsArr[i].toString() === "0") {
          bitsArr[i] = "1"
      } else {
          bitsArr[i] = "0"
      }
  }

  //turn the array into a string, and turn it back into an integer 
  //use a radix of 2 so parseInt knows its binary
  return parseInt(bitsArr.join(''), 2)

}

console.log(flippingBits(0));
console.log(flippingBits(1));
