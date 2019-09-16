function isValid(s) {

    let validator = {}
    
    //add items to map
    for (let i = 0; i < s.length; i++) {
        if (!validator[s[i]]) {
            validator[s[i]] = 1
        } else {
            validator[s[i]] ++
        }
    }
    
    let toBeSorted = []
    for (let values in validator) {
        toBeSorted.push([values, validator[values]])
    }
    //push items to array, sort based on value
    let sorted = toBeSorted.sort((a,b) => a[1] - b[1])
    
    let n = sorted.length
    //conditionals 
    if (sorted[0][1] === sorted[n-1][1]) {
        return 'YES'
    } else if (sorted[0][1] === sorted[n-2][1] && sorted[0][1] === sorted[n-1][1]-1){
        return 'YES'
    } else if (sorted[1][1] === sorted[n-1][1]) {
        return 'YES'
    } else {
        return 'NO'
    }
    
}

console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'))

