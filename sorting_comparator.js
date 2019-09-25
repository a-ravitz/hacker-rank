let input = [
  ["ameska", 150],
  ["amy", 100],
  ["david", 100],
  ["heraldo", 50],
  ["aakansha", 50],
  ["aleksa", 150]
];

function comparator(arr) {
  let sorted = arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 <= sorted.length - 1) {
      if (sorted[i][1] === sorted[i + 1][1]) {
        if (
          sorted[i][0].charCodeAt(0) > sorted[i + 1][0].charCodeAt(0)) 
        {
          let temp = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = temp;
        } else if (
          sorted[i][0].charCodeAt(0) === sorted[i + 1][0].charCodeAt(0) &&
          sorted[i][0].charCodeAt(1) > sorted[i + 1][0].charCodeAt(1)
        ) {
          let temp = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = temp;
        }
      }
    }
  }
  return sorted;
}

console.log(comparator(input));
