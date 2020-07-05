const regex = /^...\....\....\....$/

console.log(regex.test('123.456.abc.def'))
console.log(regex.test('123.456.789.1234'))
