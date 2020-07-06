const regex = /^([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([AEIOUaeiou])(\S)\1\2\3\4\5\6\7\8\9\10$/

console.log('Expect "ab #1?AZa$ab #1?AZa$" to be true - Outcome: ' + regex.test('ab #1?AZa$ab #1?AZa$'))
console.log('Expect "ab-#1?AZa$ab-#1?AZa$" to be false - Outcome: ' + regex.test('ab-#1?AZa$ab-#1?AZa$'))