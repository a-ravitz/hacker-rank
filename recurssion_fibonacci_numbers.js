function fibonacci(n) {
    //create an array with the first two elements 
    let arr = [0, 1] 

    //loop until the array is equal to n+1
    //run the add function each time 
    while (arr.length !== n+1){
        add(arr[arr.length-1], arr[arr.length-2])
    }
    
    //takes in the last and second to last element of the array
    //adds them together and pushes the sum to the arr
    function add (a, b) {
        console.log(a, b)
        arr.push(a+b)
    }

    //return the last element of the array 
    return arr[arr.length-1]
}

console.log(fibonacci(17))