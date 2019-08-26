
let n = 5;
let queries = [[1, 2, 140], [2, 5, 100], [3, 4, 100]];
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

//     let b = queries[j][1] 
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

  /*creating the prefix sum array
  adding k to the first index given in the query array (-1 because its not a 0 based array)
  and adding the negative verion to the second index given in the query array */
  for (let i = 0; i < len; i++) {
        
    /*a = queries[i][0] - 1;
        b = queries[i][1];
        k = queries[i][2]; */

    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
    console.log(arr)
  }

  /*here we're adding the numbers up, but we do not include 
  arr[arr.length-1] */
  
  for (let a = 1; a < n; a++) {
    arr[a] += arr[a - 1];
  }

  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }

  return max;
}

console.log(arrayManipulation(n, queries));
