

function Rectangle(a,b) {
let length = a, width = b, perimeter = 2 * (length + width), area = length * width;

let rectangle = {
    length,
    width,
    perimeter,
    area
}
return rectangle

}

console.log(Rectangle(5,6))