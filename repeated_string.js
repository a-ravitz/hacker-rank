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
// my best solution, getting close to the one above but not thinking clealry, 
// no where near as elegant as Anthony Nandaa's solution above


// function repeatedString(s, n) {

//     let count = 0

//     if (s.match(/a/g) == null) {
//         return 0

//     } else {
//         let countA = s.match(/a/g).length  => same as counta above
//         let float = countA * (n / s.length)
//         count = Math.floor(float)
//         if (float % 1 > .6) {
//             count ++
//         }
//         return count
//     }
// }