let input = '<p><div><p><p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>'
let regex = /<(\w+)/g
let arr = input.match(regex)
let output = []

    for( let i = 0; i < arr.length; i ++) {
        if (!output.includes(arr[i].substring(1))) {
            output.push(arr[i].substring(1))
        }
    }

console.log(output.sort().join(';'))
