function maxMin(k, arr) {
    
  let min = 0;
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i + (k - 1) < arr.length) {
      let temp = sorted[i + (k - 1)] - sorted[i];
      if (!min) {
        min = temp;
      } else if (temp < min) {
        min = temp;
      }
    }
  }
  return min;

}
console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
console.log(
  maxMin(5, [
    4504,
    1520,
    5857,
    4094,
    4157,
    3902,
    822,
    6643,
    2422,
    7288,
    8245,
    9948,
    2822,
    1784,
    7802,
    3142,
    9739,
    5629,
    5413,
    7232
  ])
);
