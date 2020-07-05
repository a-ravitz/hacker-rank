const regex = /^[^\d][^aeiou][^bcDF][^\s][^AEIOU][^.,]$/

console.log('Expect "think?" to be true - Outcome: ' + regex.test('think?'))
console.log('Expect "w12	4," to be false - Outcome: ' + regex.test('w12	4,'))