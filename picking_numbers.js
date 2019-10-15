function pickingNumbers(a) {
  let sort = a.sort((a, b) => a - b),
    numSet = [], qtySet = [],
    temp = 1;

    //here we're looping through the initial sorted array and making two arrays:
    //1: a set of the numbers in the initial array in increasing order 
    //2: a list of the quantities each number occures in the intial array 
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] === sort[i + 1]) {
      temp++;
    } else {
      numSet.push(sort[i]);
      qtySet.push(temp);
      //reset temp each time we push 
      temp = 1;
    }
  }

  //here we're finding the largest number in the quantity array
  let qtyMax = Math.max(...qtySet);

  for (let i = 1; i < numSet.length - 1; i++) {

    if (numSet[i] - numSet[i - 1] === Math.abs(1)) {
        //if this number is larger than the qtyMax, replace qtyMax
      if (qtySet[i] + qtySet[i - 1] > qtyMax) {
        qtyMax = qtySet[i] + qtySet[i - 1];
      }
    }
    if (numSet[i] - numSet[i + 1] === Math.abs(1)) {
        //if this number is larger than the qtyMax, replace qtyMax
      if (qtySet[i] + qtySet[i + 1] > qtyMax) {
        qtyMax = qtySet[i] + qtySet[i + 1];
      }
    }
  }
  return qtyMax;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

//someone on hackerRanks much better solution 

function pickingNumbers(a) {
    return [...new Set(a)].reduce((c, v) => {
        return Math.max(c,
            a.reduce((c1, v1) => c1 += (v1 === v || v1 === v + 1), 0));
    },0);
}

