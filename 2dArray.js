let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

let arr1 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

let arr2 = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

hourglassSum = (arr) => {

  let n = arr.length;
  let sumArr = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      let glassArr = [];

      if (i + 2 < n && j + 2 < n) {
        glassArr.push(
          arr[j][i],
          arr[j][i + 1],
          arr[j][i + 2],
          arr[j + 1][i + 1],
          arr[j + 2][i],
          arr[j + 2][i + 1],
          arr[j + 2][i + 2]
        );
        
        sumArr.push(glassArr.reduce((a, b) => a + b));

      }
    }
  }

  return Math.max(...sumArr);

}

console.log(hourglassSum(arr2));

