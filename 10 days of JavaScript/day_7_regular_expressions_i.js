function regexVar() {
    
    // /'s begin and end the statment
    // ^ denotes the first character
    // ([contents]) ~ the contents are characters that we're trying to match for the beginning
    // .* stipulates that the captured character must followed by zero or more occurrences of any character.
    /* \1 is a backreference to the first capture group. It stipulates that the character following whatever we matched in step 2 must match whatever 
    was captured inside the parentheses in step 1. */
    // $ Matches end of input

    const re = /^([aeiou]).*\1$/
    return re;
}

function main() {
    const re = regexVar();
    const s = 'abcdiuidsv'
    
    console.log(re.test(s));
}

main()