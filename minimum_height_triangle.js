function lowestTriangle(base, area){

    //this is the formula for finding the height of a triangle with the base and area 

    return Math.ceil(area/base * 2)

}

console.log(lowestTriangle(17,100))