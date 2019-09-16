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
  
  let sortedOne = Object.keys(string1).sort().reduce((a, b) => {
    a[b] = string1[b];
    return a; 
  }, {});
  let sortedTwo = Object.keys(string2).sort().reduce((a, b) => {
    a[b] = string2[b];
    return a;
  }, {});

  for (const value in sortedTwo) {
    if (sortedTwo[value] > sortedOne[value]) {
      count += (sortedOne[value] * 2)
    } 
    if (sortedTwo[value] === sortedOne[value]) {
      count += sortedTwo[value] + sortedOne[value]
    }  
    if (sortedTwo[value] < sortedOne[value]) {
      count += (sortedTwo[value] * 2)

    }
    
  }
  return (a.length + b.length) - count 

}
//
// console.log(makeAnagram("cde", "abc"));
// console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
console.log(makeAnagram("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", "tttttttttttttttttttttttttttttttttttttsssssssssssssssss"));
