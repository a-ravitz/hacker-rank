function plusMinus(arr) {

    const a = arr.length
    let plus = 0
    let minus = 0
    let zero = 0

    for (let i = 0; i < a; i++) {
        if (arr[i] < 0) {
            minus++
        }
        if (arr[i] === 0) {
            zero++
        }
        if (arr[i] > 0) {
            plus++
        }
    }

    console.log(plus / a + "\n" + minus / a + "\n" + zero / a)
}

plusMinus([4,0,2,-3,-5,-3,-1])