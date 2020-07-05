const pattern = /(hackerrank)/
let string_one = 'hackerrank is hackerrank not HackerRank. so please use hackerrank always and not hackerrrank'
let string_two = '1 hackerrank 2 hackerrank 3 hackerrank 4 hackerrank 5 not Hackerrank 6 is hackerrank'
let string_three = 'The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers.'

function processData(s) {
    //Enter your code here
    var Regex = new RegExp(pattern, "g");
    var Array = s.match(Regex);
    return ("Number of matches:" + Array.length)
} 

console.log(processData(string_one))
console.log(processData(string_two))
console.log(processData(string_three))