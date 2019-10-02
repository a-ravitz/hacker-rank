function symmetricPair(n) {
  let numStr = n.toString();
  let len = numStr.length;
  let middle = Math.floor(len / 2);

  //if odd
  if (len % 2 === 1) {
    let subStr1 = numStr.substring(0, middle + 1);
    let subStr2 = numStr.substring(middle + 1, numStr.length);
    let subStr1Plus = parseInt(subStr1) + 1;
    let arr = subStr1Plus
      .toString()
      .concat(subStr2)
      .split("");
    for (let i = 0; i < arr.length; i++) {
      if (i !== middle + 1) {
        arr[arr.length - (i + 1)] = arr[i];
      }
    }
    return parseInt(arr.join(""));
  }

  //if even
  if (len % 2 === 0) {
    let subStr1 = numStr.substring(0, middle);
    let subStr2 = numStr.substring(middle, len);
    let subStr1Plus = parseInt(subStr1) + 1;
    let arr = subStr1Plus
      .toString()
      .concat(subStr2)
      .split("");
    for (let i = 0; i < arr.length; i++) {
      if (i !== middle) {
        arr[arr.length - (i + 1)] = arr[i];
      }
    }
    return parseInt(arr.join(""));
  }
}

console.log(symmetricPair(90909));
console.log(symmetricPair(2193));
console.log(symmetricPair(808));
console.log(symmetricPair(2433));
console.log(symmetricPair(32091));
console.log(symmetricPair(99999));
console.log(symmetricPair(445));
