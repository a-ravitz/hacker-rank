const regex = /\S\S\s\S\S\s\S\S/

console.log(regex.test('12 11 15'))
console.log(regex.test(' 12 12  123'))
console.log(regex.test('12 12	1ee'))