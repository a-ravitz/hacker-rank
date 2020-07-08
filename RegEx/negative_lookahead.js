function processData(str) {
    //Enter your code here
    let Array = str.match(/(.)(?!\1)/g);
    console.log("Number of matches :", Array.length);
} 

//expect number of matches to be 2
processData('gooooo')

//expect number of matches to be 3 
processData('gooooo!')