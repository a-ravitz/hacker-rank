/* if there are five people, the sets of shakes would look like this:

12, 13, 14, 15
23, 24, 25
34, 35
45

*/

function handshake(n) {

return n * (n-1) / 2

}
console.log(handshake(5))
console.log(handshake(68))