let expressions = [ 140, 48 ]
let literals = [ 'The area is: ', '.\nThe perimeter is: ', '.' ]

function sides(literals, ...expressions) {
    let [a, p] = expressions
    const root = Math.sqrt((p*p) - (16 * a))

    let s1 = (p + root) / 4
    let s2 = (p - root) / 4

    return [s2, s1]
    
}

console.log(sides(literals, expressions))