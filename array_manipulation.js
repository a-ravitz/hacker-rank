
let n = 5;
let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// //solution without prefix sum

// function arrayManipulation(n, queries) {

//     findMax  = (arr) => {
//         console.log('infindmax')
//         let max = Math.max(...arr)
//         console.log('max:', max)
//         console.log(max)
//     }

//     const len = queries.length
//     let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(0);
//   }
//     for (let j = 0; j < len; j++) {

//     let b = queries[j][1] - 1
//     let k = queries[j][2]
//         for(let a = queries[j][0] - 1; a <= b; a++ ) {
//             arr[a] += k
//             }
//         }
//         findMax(arr)
//     }

// console.log(arrayManipulation(n, queries))

// // solution with prefix sum
function arrayManipulation(n, queries) {
  const len = queries.length;
  let arr = [];
  let max = 0;

  //making the 0's
  for (let j = 0; j < n; j++) {
    arr.push(0);
  }

  for (let i = 0; i < len; i++) {
    /*a = queries[i][0] - 1;
      b = queries[i][1];
      k = queries[i][2]; */

    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }

  for (let a = 1; a < n; a++) {
    arr[a] += arr[a - 1];
  }

  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }

  return max;
}

console.log(arrayManipulation(n, queries));
