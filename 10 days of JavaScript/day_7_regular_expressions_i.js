function regexVar() {

    // /'s => begin and end the statment
    // ^ => denotes first item matches
    // () => stores matching value captured within
    // [] => matches any of the characters within brackets
    // . => matches any character 
    // + => for 1 or more occurrances (this ensures str length > 3)
    // .* => stipulates that the captured character must followed by zero or more occurrences of any character.
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    //  $ => ensures that matched item is at end of the sequence

    const re = /^([aeiou]).*\1$/
    return re;
}

function main() {
    const re = regexVar();
    const s = 'abcdi  uidsa'
    
    console.log(re.test(s));
}

main()