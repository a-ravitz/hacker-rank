timeInWords = (h, m) => {

  let wordArr = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","quarter","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine","half"];
  let numberArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  for (let i = 0; i < numberArr.length; i++) {
    if (h === numberArr[i]) {

      if(m === 0) {
        return `${wordArr[i]} o' clock`
      }

      for (let j = 0; j < wordArr.length; j++) {
        if (m <= 30) {
          if (m === numberArr[j]) {
            let y = wordArr[i];
            let x = wordArr[j];

            if (j === 0) {
              return `${x} minute past ${y}`;
            }
            if (j >= 1 && j < 14) {
              return `${x} minutes past ${y}`;
            }
            if (j === 14) {
              return `${x} past ${y}`;
            }
            if (j > 14 && j < 29) {
              return `${x} minutes past ${y}`;
            }
            if (j === 29) {
              return `${x} past ${y}`;
            }
          }
        }

        if (m >= 31) {
          let y = wordArr[i + 1];
          let x = wordArr[wordArr.length - (j + 2)];

          if (m === numberArr[j] + 30) {
            if (m > 30 && m <= 44) {
              return `${x} minutes to ${y}`;
            }
            if (m === 45) {
              return `${x} to ${y}`;
            }
            if (m > 45 && m < 59) {
              return `${x} minutes to ${y}`;
            }
            if (m === 59) {
              return `${x} minute to ${y}`;
            }
          }
        }
      }
    }
  }
};

console.log(timeInWords(4, 00));
console.log(timeInWords(4, 45));
console.log(timeInWords(4, 33));
console.log(timeInWords(4, 44));
console.log(timeInWords(4, 59));
console.log(timeInWords(5, 03));
console.log(timeInWords(5, 04));
console.log(timeInWords(5, 05));
console.log(timeInWords(5, 06));
console.log(timeInWords(7, 29));
