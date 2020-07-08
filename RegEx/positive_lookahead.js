const regex = /o(?=oo)/

function processData(str) {
    //Enter your code here
    let Array = str.match(/o(?=oo)/g);
    console.log("Number of matches :", Array.length);
} 

//expect number of matches to be 5
processData('oooooogooo')

//expect number of matches to be 3 
processData('gooooo!')