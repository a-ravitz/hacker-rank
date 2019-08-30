let q1 = [2, 1, 5, 3, 4];
let q2 = [2, 5, 1, 3, 4];
let q3 = [5, 1, 2, 3, 7, 8, 6, 4];
let q4 = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBribes(q) {
  let n = q.length,
  counter = {},
  z = 0,
  value;

  for (let i = 0; i < n; i++) {

    if (q[i] > q[i+1] ) {
        let temp = q[i]
        q[i] = q[i+1]
        q[i+1] = temp
        i=0

      if (counter[temp]) {
        counter[temp] ++;
      } else {
        counter[temp] = 1 ;
    }

    }
}
  for (value in counter) {
      if (counter[value] > 2) {
        z = "Too chaotic"
        break;
      } else {
        z = Object.values(counter).reduce((a, b) => a + b, 0);

      }
    }

    console.log(z)
}

//gabriel giordan's solution, much better than mine
function minimumBribes(q) {

  let n = q.length

  let c = 0
  for (let p = n; p-- > 0;) {
    if (q[p] - (p + 1) > 2) {
      c = "Too chaotic"
      break;
    }
    for (let j = Math.max(q[p]) - 2; j < p; j++) {
      if (q[j] > q[p])
        c++
    }
  }
  console.log(c)
}
minimumBribes(q1);
minimumBribes(q2);
minimumBribes(q3);
minimumBribes(q4);
