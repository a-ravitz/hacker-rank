function repeatedString(s, n) {     
  // counta is a function that splits the string into an array letter by letter,
  // then filters the array for the letter a and return a anumber 
  const counta = (str) => str.split('').filter(c => c == 'a').length
  
  //'fullRepeats' represents the number of times the length of the string can go into the number provided 'n'
  // without going over
  const fullRepeats = Math.floor(n / s.length)

  //'neededToReachN' represents the max length of the substr you need to add to 's * d' to reach 'n'
  const neededToReachN = n - (s.length * fullRepeats)
  console.log('neededToReachN:', neededToReachN)

  // here we're returning fullRepeats * counta + counta reading a string up 
  // that matches the original string until index of neededToReachN 

  return fullRepeats * counta(s) + counta(s.substr(0, neededToReachN))
 
}

console.log(repeatedString('aab', 10))
console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570))
console.log(repeatedString('gfcaaaecbg', 547602))
