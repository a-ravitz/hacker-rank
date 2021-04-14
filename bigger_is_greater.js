biggerIsGreater = (w) => {
  let wordArr = w.split('');
  // d, k, h, c
  // 4, 11, 8, 3
  let i = w.length - 1;
  while (i > 0 && wordArr[i - 1].charCodeAt() >= wordArr[i].charCodeAt()) i--;
  if (i <= 0) {return "no answers"};

  // Find successor to pivot
  let j = w.length - 1;
  while (wordArr[j].charCodeAt() <= wordArr[i - 1].charCodeAt()) j--;
  let temp = wordArr[i - 1];
  wordArr[i - 1] = wordArr[j];
  wordArr[j] = temp;

  // Reverse suffix
  j = w.length - 1;
  while (i < j) {
    temp = wordArr[i];
    console.log('temp:', temp)
    wordArr[i] = wordArr[j];
    wordArr[j] = temp;
    i++;
    j--;
  }
  return wordArr.join("");
};

// console.log(biggerIsGreater('ab'))
// console.log(biggerIsGreater('bb'))
// console.log(biggerIsGreater('abcd'))
// console.log(biggerIsGreater('dhck'))
console.log(biggerIsGreater("dkhc"));
