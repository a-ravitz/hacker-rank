function squares(a, b) {

    /* if we run code that looks like this 
    let count = 0
    for (let i = a; i <= b; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            count ++
        }
    }
    return count

    the program will time out

    its more effecient to find Math.sqrt(a) and round that up & Math.sqrt(b) 
    and round that down, then if A is smaller than B subtract B from A and add 1 
    */


  let sqrtA = Math.ceil(Math.sqrt(a));
  let sqrtB = Math.floor(Math.sqrt(b));

  return sqrtA > sqrtB ? 0 : sqrtB - sqrtA + 1;

}
console.log(squares(10, 30));
console.log(squares(17, 24));
console.log(squares(385793959, 712365911));
