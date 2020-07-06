const regex = /(Mr|Mrs|Dr|Er)\.([a-zA-Z]*)$/

console.log('Expect "Mr.Doshi" to be true - Outcome: ' + regex.test('Mr.Doshi'))
console.log('Expect "Mr#DOSHI" to be false - Outcome: ' + regex.test('Mr#DOSHI'))