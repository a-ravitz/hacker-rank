let array = [
    {x:1,y:1},
    {x:2,y:3},
    {x:3,y:3},
    {x:3,y:4},
    {x:4,y:5}
]

function getCount(objects) {

    let count = 0, j;

        for (j in objects) {

            if(objects[j].x === objects[j].y) {
                count ++
            }
        }

        return count
    
}

console.log(getCount(array))