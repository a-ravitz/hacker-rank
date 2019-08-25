
function countSwaps(a) {

    let n = a.length
    let numSwaps = 0
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                numSwaps++
                console.log(a)
                
            }
        }
        
    }
    console.log(`Array is sorted in ${numSwaps} swaps`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n-1]}`)  

}

countSwaps([4,3,2,1,5])