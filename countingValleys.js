let n = 10;
// let s = "UDUUUDUDDD"
let s = "DUDDDUUDUU";

countingValleys = (n, s) => {
  let counterArr = [];
  let counter = 0;
  let valley = 0;
  for (let i = 0; i < n; i++) {
        
    if (s[i] === "U") {
      counter++;
    } else {
      counter--;
    }
    counterArr.push(counter);
  }
  for (let j = 0; j < counterArr.length; j++) {
    if (counterArr[j] === 0 && counterArr[j - 1] < 0) {
      valley++;
    }
  }
  return valley;
};

console.log(countingValleys(n, s));
