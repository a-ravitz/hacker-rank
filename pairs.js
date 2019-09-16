//original solution
// function pairs(k, arr) {
//   let count = 0;
//   let n = arr.length;
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = 0; j <= n; j++) {
//       if (arr[j] !== arr[i]) {
//         if (arr[i] - arr[j] === k) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }



// much more effecient solution
function pairs(k, arr) {
  let mySet = new Set(arr);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i] + k)) {
      count++;
    }
  }
  return count;
}


console.log(
  pairs(1, [
    363374326,
    364147530,
    61825163,
    1073065718,
    1281246024,
    1399469912,
    428047635,
    491595254,
    879792181,
    1069262793
  ])
  );
  console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2]));
  console.log(pairs(2, [1, 5, 3, 4, 2]));


