function surfaceArea(A) {
  let h = A[0].length 
  let w = A.length

  let area = 2 * (h-2) * (w-2)
  console.log('area:', area)
  for (let i = 1; i < h-1; i++ ) {
    for (let j = 1; j < w-1; j++ ) {
        area += Math.max(0, A[i][j] - A[i][j-1]);
        area += Math.max(0, A[i][j] - A[i][j+1]);
        area += Math.max(0, A[i][j] - A[i-1][j]);
        area += Math.max(0, A[i][j] - A[i+1][j]);
    }
    }
    console.log(area)
  return area
}

console.log(surfaceArea([[1, 3, 4], [2, 2, 3], [1, 2, 4]]));
// console.log(surfaceArea([[1]]))
// console.log(surfaceArea([[51], [32], [28], [49], [28], [21], [98], [56], [99], [77]]));

// function surfaceArea(A) {
//   // top and bottom
//   let topAndBottom = A[0].length * A.length * 2;

//   // left side is the first array summed
//   let left = A[0].reduce((a, b) => a + b);

//   // right side is the second array summed
//   let right = A[A.length - 1].reduce((a, b) => a + b);

//   let frontAndBack = 0;
//   let exposedSides = 0;

//   // add front and back
//   for (let i = 0; i < A.length; i++) {
//     //get the inside and outside of each internal array
//     frontAndBack += A[i][0] + A[i][A[i].length - 1];

//     //get the exposed pieces by finding the absolute
//     //of the difference in height from piece to piece
//     for (let k = 0; k < A[0].length - 1; k++) {
//       exposedSides += Math.abs(A[i][k] - A[i][k + 1]);
//     }
//   }

//   // add the exposed sides if A.len is > 1
//   if (A.length > 1) {
//     if (A[0].length > 1) {
//       for (let i = 0; i < A.length; i++) {
//         let temp = 0;

//         for (let j = 0; j < A.length - 1; j++) {
//           temp += Math.abs(A[j][i] - A[j + 1][i]);
//         }
//         exposedSides += temp;
//         temp = 0;
//       }
//     } else {

//       for (let i = 0; i < A.length - 1; i++) {
//         exposedSides += Math.abs(A[i] - A[i + 1]);
//       }
//     }
//   }

//   return frontAndBack + topAndBottom + left + right + exposedSides;
// }

// console.log(surfaceArea([[91, 80, 7, 41, 36, 11, 48, 57, 40, 43]]));
