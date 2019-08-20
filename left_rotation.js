// A left rotation operation on an array shifts each of the array's elements  unit to the left. 
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].
// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

let arr = [1, 2, 3, 4, 5, 6];
let d = 3;

function rotLeft(a, d) {

  let n = a.length;
  let newArr = [];


  for (let i = d; i < n; i++) {
    newArr.push(a[i]);
  }

  if(newArr[newArr.length - 1] === a[n -1]) {

      for(let j = 0; j < d; j++) {
          newArr.push(a[j])
      }
      
  }

  console.log(newArr) 

}

rotLeft(arr, d);
