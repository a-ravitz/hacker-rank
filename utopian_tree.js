//The Utopian Tree goes through 2 cycles of growth every year. Each spring, 
//it doubles in height. Each summer, its height increases by 1 meter.

//Laura plants a Utopian Tree sapling with a height of 1 meter at the onset 
//of spring. How tall will her tree be after  growth cycles? 

function utopianTree(n) {
    //tree starts at 1 
    let result = 1

    //loop through the number of cycles
    //start with 1 because the first cycle, cycle 0, has already happened

    for (let i = 1; i <= n; i++) {
        //first cycle doubles the height
        if (i % 2 !== 0) {
            result *= 2
        //second cycle adds 1 meter to the height
        } else {
            result += 1
        }
    }

    //return the height
    return result
}

console.log(utopianTree(5))