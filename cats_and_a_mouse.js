function catAndMouse(x, y, z) {
    //if the absolute difference between catA and mouseC is < catB and mouseC 
    //catA is closest, return 'Cat A'
    if(Math.abs(x - z) < Math.abs(y-z)){
        return "Cat A";
    }
    //if the opposite is true return 'Cat B'
    else if (Math.abs(x - z) > Math.abs(y-z)){
        return "Cat B";
    }
    //otherwise they're equal, return 'Mouse C
    else{
        return "Mouse C";
    }

}
console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))