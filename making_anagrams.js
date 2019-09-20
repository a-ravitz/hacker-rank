function makeAnagram(a, b) {
  let string1 = {};
  let string2 = {};
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      if (!string1[a[i]]) {
        string1[a[i]] = 1;
      } else {
        string1[a[i]]++;
      }
    }
  }
  
  for (let j = 0; j < b.length; j++) {
    if (a.includes(b[j])) {
      if (!string2[b[j]]) {
        string2[b[j]] = 1;
      } else {
        string2[b[j]]++;
      }
    }
  }

  for (const value in string1) {
      if (string1[value] > string2[value]) {
        count += string2[value] * 2;
      }
      if (string1[value] === string2[value]) {
        count += string1[value] + string2[value];
      }
      if (string1[value] < string2[value]) {
        count += string1[value] * 2;
      }
  }
  return a.length + b.length - count;
}

// console.log(makeAnagram("cde", "abc"));
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
// console.log(makeAnagram("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      // "tttttttttttttttttttttttttttttttttttttsssssssssssssssss"));
