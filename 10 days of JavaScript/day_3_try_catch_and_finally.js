function reverseString(s) {
    try {
let splitString = s.split('')
let reverseString = splitString.reverse()
let joinedString = reverseString.join('')

console.log(joinedString)
    } 
    catch(e) {
        console.log('s.split is not a function')
        console.log(s)
    }


}


// reverseString(Number("1234"))
reverseString("1234")