

function factorial(n) {
    let factorialArr = []
     
        for (let i = n; i > 0; i--) {
                factorialArr.push(i)
        }
        return factorialArr.reduce((a,b) => a*b)
    }

factorial(4)