function regexVar() {

    //^ => starts with
    //() => stores matching value captured within
    //?: => makes it a non capture group
    // | => OR => one of these options
    // \ followed by 
    //. => .
    // [a-zA-z] => a character from a-z or A-Z
    // + => for 1 or more occurrances (this ensures str length > 3)
    //  $ => ensures that matched item is at end of the sequence





    const re =  

    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}