function substrCount(n, s) {
  let list = [],
    temp = 0,
    count = 0;

  // condense the string into a list of [characters,numbers]
  //if the string is aaabccbbccba our list will look like
  //  [[a,3],[b,1][c,2][b,2][c,2][b,1][c,1]]

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      temp++;
    }
    if (s[i] !== s[i + 1]) {
      temp++;
      list.push([s[i], temp]);
      temp = 0;
    }
  }

  //if list[i][1] === 4, like in the case of 'aaaa'
  //we know that there are ten possible matches
  //which is the equivelent of 4 * 5 / 2
  //so we add that to the count
  for (let i = 0; i < list.length; i++) {
    count += (list[i][1] * (list[i][1] + 1)) / 2;

    //if the list length is greater than or eql to 3
    //if [i-1][0] === [i+1][0], and [i][1] === 1
    //we have a pattern like aaaaafaaaa

    //if that is true, we take the smaller number of a's
    //Math.min(list[i - 1][1], list[i+1][1])
    //and add it to our count

    if (list.length >= 3) {
      if (list[i + 1] && list[i - 1]) {
        if (list[i - 1][0] === list[i + 1][0] && list[i][1] === 1) {
          count += Math.min(list[i - 1][1], list[i + 1][1]);
        }
      }
    }
  }
  return count;
}
console.log(substrCount(4, "aaaa"));
