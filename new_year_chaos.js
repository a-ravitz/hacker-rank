let q1 = [2, 1, 5, 3, 4];
let q2 = [2, 5, 1, 3, 4];
let q3 = [5, 1, 2, 3, 7, 8, 6, 4];
let q4 = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBribes(q) {

  let count = 0;

  for (let i = q.length-1; i >= 0; i--) {

    //filter the cases where no bribes have been made
    if (q[i] !== i + 1) {

      //make sure i-1 >= 0 so we do not continue past the beginning of the line
      //if the person before q[i] is supposed to be at i+1 (because its not an 0 based array)
      //swap them 
      if(i - 1 >= 0 && q[i-1] === i+1) {
        count++
        swap(q, i, i-1)

      //make sure i-2 >= 0 so we do not continue past the beginning of the line
      //if the person before q[i-2] is supposed to be at i+1 (because its not an 0 based array)
      //swap them, and the person after them 
      } else if(i-2 >= 0 && q[i-2] === i+1) {
        count += 2

        swap(q, i-2, i-1)
        swap(q, i-1, i)

        //or else its just too chaotic 
      } else {
        return 'Too chaotic'
      }
    }

  }

  //this function is basically the same function from the minimum swaps problem
  function swap (q, a, b) {
    let temp = q[a]
    q[a] = q[b]
    q[b] = temp
  }

  return count;
}


console.log(minimumBribes(q1));
console.log(minimumBribes(q2));
console.log(minimumBribes(q3));
console.log(minimumBribes(q4));
