const regex = /^[a-zA-Z]*s$/

console.log('expect "Kites" to be true - Outcome: ' + regex.test('Kites'))
console.log('expect "1acss" to be false - Outcome: ' + regex.test('1acss'))