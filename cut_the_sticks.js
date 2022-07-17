const cutTheSticks = (arr) => {
  let numLeftArr = [arr.length];
  while (arr.length > 0) {
    arr = cutter(arr);
    if (arr.length > 0) {
      numLeftArr.push(arr.length);
    }
  }
  return numLeftArr;
};

const cutter = (arr) => {
  let smallest = Math.min(...arr);
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - smallest;
    if (arr[i] > 0) {
      output.push(arr[i]);
    }
  }
  return output;
};

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
