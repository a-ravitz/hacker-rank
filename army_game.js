/*
given n=1 and m=3 2 bases will need to be placed at the intersections 
given n=2 and m=3 2 bases will have to be droped at the intersections


*/
function gameWithCells(n, m) {

    //if the number is odd adding 'n%2 to it will make it even. 
    //since both the examples above have the same number of bases 
    //it is clear we need to use even numbers to figure out the problem
     
    return (n+n % 2) * (m+m % 2) / 4

}

// console.log(gameWithCells(2,2))
// console.log(gameWithCells(6,4))
console.log(gameWithCells(3,3))
