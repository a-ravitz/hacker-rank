const regex = /\b[aeiouAEIOU][a-zA-Z\s]*\b/

console.log('Expect "Found any match?" to return true - Outcome: ' + regex.test('Found any match?'))
console.log('Expect "Found yaz match?" to return false - Outcome: ' + regex.test('Found yaz match?'))