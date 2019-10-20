function designerPdfViewer(h, word) {

  let max = 0;

  //lowercase letter's character codes are between 97 and 123
  //so any lowercase letter's charactercode - 97 would be its index in the height array (h)

  for (let i = 0; i < word.length; i++) {

    //if the value at the index is larger than max, set max to it
      if(h[word[i].charCodeAt()-97] > max) {
          max = h[word[i].charCodeAt()-97]
      }
  }

  return max * word.length
}

console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7
    ],
    "zaba"
  )
);
