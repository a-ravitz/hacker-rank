function vowelsAndConsonants(s) {
    let vowels = 'aeiouo'

    for (let i = 0; i < s.length; i++) {

        if (vowels.includes(s[i])) {
            console.log(s[i])
        }
    }
    for (let i = 0; i < s.length; i++) {

        if (!vowels.includes(s[i])) {
            console.log(s[i])
        }
    }
}