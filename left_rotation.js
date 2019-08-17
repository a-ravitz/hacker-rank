//

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
