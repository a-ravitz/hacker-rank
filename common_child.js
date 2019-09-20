function commonChild(s1, s2) {
  let arr = [];

  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === s2[i]) {
        arr.push(j)
      }
    }
  }
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i-1])
    if (arr[i] < arr[i-1]) {
      arr.splice(i, 1)
      i=0
    }
  }
  return arr.length
}

// function commonChild(s1, s2) {
// let arr = [Array(s2.length + 1).fill(0)];
// console.log('arr:', arr)
// [...s1].forEach((v1, i) => {
//     arr[i + 1] = [0];
//     [...s2].forEach((v2, j) => {
//         arr[i + 1][j + 1] = v1 === v2 ?
//             arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
//     });
// });
// return arr[s2.length][s1.length];
// }
// console.log(commonChild("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));
console.log(commonChild("SCHINCHAN", "NOHARAAA"));
