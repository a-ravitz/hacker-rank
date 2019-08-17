let arr = [1, 2, 3, 4, 5 ]

function miniMaxSum(arr) {

    var min = 0
    var max = 0
    
  for (var i = 0; i < arr.length; i++) {

    var temp = arr.reduce((a, b) => a + b) - arr[i];

    if (!min && !max) {
      min = temp;
      max = temp;
    }
    if (temp <= min) {
      min = temp;
    }
    if (max <= temp) {
      max = temp;
    }
  }
  
  console.log(min, max);
  
}

miniMaxSum(arr)