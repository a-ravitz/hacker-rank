function insertionSort2(n, arr) {

  let temp;
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {

        //while j is less than i
        //if arr[j] is > arr[i] 
        //swap them 

      if (arr[j] > arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);