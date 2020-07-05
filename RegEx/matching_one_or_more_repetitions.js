const regex = /^\d+[A-Z]+[a-z]+$/

console.log(regex.test('1Qa'))
console.log(regex.test('a1Q'))