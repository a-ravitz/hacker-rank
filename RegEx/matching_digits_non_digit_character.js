const regex = /^..\D..\D..../

console.log(regex.test('11.12.1321'))
console.log(regex.test('11..12.1321'))
