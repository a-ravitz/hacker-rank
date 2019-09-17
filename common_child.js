function commonChild(s1, s2) {
  let map = {};
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    let subString = s2.substring(i, s2.length);
    if (subString.includes(s1[i])) {
      map[s1[i]] = i;
    }
  }

  for (let index in map) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === index && map[index] < i) {
        count++;
      }
    }
  }

  return count;
}

console.log(commonChild("ABCD", "ABDC"));
console.log(commonChild("WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS", "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"));
//
