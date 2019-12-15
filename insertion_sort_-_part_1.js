function insertionSort1(n, arr) {
  
  let last = arr[arr.length - 1];

  for (let i = n; i >= 0; i--) {
    if (last < arr[i - 1]) {
        arr[i] = arr[i - 1];
        console.log(arr.join(" "));
        break;
    } 
    // else if (last > arr[i]) {
    //     arr[i + 1] = last;
    //     console.log(arr.join(" "));
    //     break;
    // }
     else if (arr[0] === arr[1]) {
        arr[0] = last
        console.log(arr.join(" "));
    }
  }
}

insertionSort1(5, [2, 4, 6, 8, 3]);

