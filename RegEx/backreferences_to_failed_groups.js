
const regex = /^\d{2}(-?)\d{2}\1\d{2}\1\d{2}$/

console.log('Expect "12-34-56-78" to be true - Outcome: ' + regex.test('12-34-56-78'))
console.log('Expect "12345678" to be true - Outcome: ' + regex.test('12345678'))
console.log('Expect "12-34-56-78-90" to be false - Outcome: ' + regex.test('12-34-56-78-90'))
console.log('Expect "-12-34-56-78" to be false - Outcome: ' + regex.test('-12-34-56-78'))