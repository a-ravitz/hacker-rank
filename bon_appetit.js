let bill = [ 3, 10, 2, 9 ] 
let index = 1 
let annasMoney = 12

function bonAppetit(bill, k, b) {

    let annasShare = bill.reduce((a, b) => a + b) - bill[k]
    let overPaid = 'Bon Appetit'

    if(b - (annasShare / 2) !== 0) {
        overPaid = b - (annasShare/2);
    }

    console.log(overPaid) 

}

bonAppetit(bill, index, annasPrice)