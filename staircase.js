var n = 40

function staircase(n) {
    var space = " "
    var stairs = "#"

    for(var i = 1; i < n + 1; i++) {

        var staircase = space.repeat(n-i) + stairs.repeat(i)
        
        console.log(staircase)
    }
}
staircase(n)