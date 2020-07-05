const regex = /^[a-z][1-9][^a-z][^A-Z][A-Z]/

console.log('Expect "h4CkR" to be true - Outcome: ' + regex.test('h4CkR'))
console.log('Expect "a0$?ZWe" to be false - Outcome: ' + regex.test('a0$?ZWe'))