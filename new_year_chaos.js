let q1 = [2, 1, 5, 3, 4];
let q2 = [2, 5, 1, 3, 4];
let q3 = [5, 1, 2, 3, 7, 8, 6, 4];
let q4 = [1, 2, 5, 3, 7, 8, 6, 4];

// function minimumBribes(q) {
//   let n = q.length;
//   let counter = {};
//   let z = 0;

//   for (let i = 0; i < n; i++) {

//     if (q[i] > q[i+1] ) {
//         let temp = q[i]
//         q[i] = q[i+1]
//         q[i+1] = temp
//         console.log(i - 1)
//         i=0

//       if (counter[temp]) {
//         counter[temp] ++;
//       } else {
//         counter[temp] = 1 ;
//     }

//     }
// }
  
//     for (let i = 0; i < Object.values(counter).length; i++) {

//       let c = parseInt(Object.values(counter)[i])

//       if (c > 2) {
//         z = "Too chaotic"
//         break;
//       } else {
//         z = Object.values(counter).reduce((a, b) => a + b, 0);

//       }
//     }

//     console.log(z)
// }

minimumBribes = (q) => {

    let n = q.length 
        console.log('n:', n)
        let c = 0
        for (let p = n; p-- > 0;) {
            console.log('p', p)
            console.log('q[p]', q[p])
            console.log('p+1', p + 1)
            let j = Math.max(q[p]) - 2
            console.log('j', j)
            if (q[p] - (p + 1) > 2) {
              c = "Too chaotic"
              break; 
            }
    }
    console.log(c)

}
// minimumBribes(q1);
// minimumBribes(q2);
// minimumBribes(q3);
minimumBribes(q4);
