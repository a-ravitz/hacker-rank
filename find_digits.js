function findDigits(n) {
  //create an array of the digits
  let arr = n.toString().split("");
  let count = 0;

  //loop through the length of the array
  for (let i = 0; i < arr.length; i++) {
    //if the result of this division is 0
    //increase count by 1
    if (n % arr[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(findDigits(1012));
