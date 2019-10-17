function squares(a, b) {

    /* given the range from 30 to 70 we could check all 40 numbers to see if they're squares
    or we could get the sqrt of 30 and round it up to the next whole number, 6, and get 
    the sqrt of 70 and round it down to the last whole number, 8, then subtract 6 from 8 and 
    add 1.  The answer would be 3 => 36, 49, and 64. */


  let sqrtA = Math.ceil(Math.sqrt(a));
  let sqrtB = Math.floor(Math.sqrt(b));

  return sqrtA > sqrtB ? 0 : sqrtB - sqrtA + 1;

}
console.log(squares(10, 30));
console.log(squares(17, 24));
console.log(squares(385793959, 712365911));
console.log(Math.sqrt(70))