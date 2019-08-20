let n = 5;
let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// let queries = [[1, 2, 100]];

function arrayManipulation(n, queries) {

  const len = queries.length
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
    for (let j = 0; j < len; j++) {
        
        let b = queries[j][1] - 1
        let k = queries[j][2]
            for(let a = queries[j][0] - 1; a <= b; a++ ) {
            arr[a] += k
            }
    }

    return Math.max(...arr)
}

console.log(arrayManipulation(n, queries))
