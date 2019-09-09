function camelcase(s) {

    let counter = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            counter++
        }
    }
    
    return counter + 1

}

console.log(camelcase('oneTwoThree'))