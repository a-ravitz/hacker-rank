function migratoryBirds(arr) {

    let map = {}, value;

    //create the map 
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]] ++
        } else {
            map[arr[i]] = 1
        }
    }

    //find the time the most common bird appears 
    let maxBirdCount = Math.max(...Object.values(map))

    //search the object, if the most common type comes up return the birds ID number (value)
    for (value in map) {
        if (map[value] === maxBirdCount) {
            return value
        }
        
    }         
}

console.log(migratoryBirds([1, 2, 3, 5, 4, 4, 3, 2, 1, 3, 4]))