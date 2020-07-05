const regex = /^\d{1,2}[a-zA-Z]{3,}\W{0,3}$/

console.log(regex.test('3threeormorealphabets.'))
console.log(regex.test('3threeormorealphabets....'))

