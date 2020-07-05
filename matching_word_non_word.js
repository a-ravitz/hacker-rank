const regex = /\w{3}\W\w{10}\W\w{3}/

console.log(regex.test('www.hackerrank.com'))
console.log(regex.test('http://www.wikipedia.com.http://www.hackerrank.com'))
console.log(regex.test('132.___________co_'))