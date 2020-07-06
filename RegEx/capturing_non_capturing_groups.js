const regex = /(ok){3}/

console.log('Expect "okokok! cya" to return true - Outcome: ' + regex.test('okokok! cya'))
console.log('Expect "okoko! cya" to return false - Outcome: ' + regex.test('okoko! cya'))