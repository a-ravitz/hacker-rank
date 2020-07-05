const regex = /^[123][120][xs0][30Aa][xsu][.,]$/

console.log('Expect 1203x. to be true - Outcome: ' + regex.test('1203x.'))
console.log('Expect 1203a. to be false - Outcome: ' + regex.test('1203a.'))