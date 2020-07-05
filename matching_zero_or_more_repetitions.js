const regex = /^\d{2,}[a-z]*[A-Z]*$/

console.log(regex.test('13123sc132123'))
console.log(regex.test('13'))