function larrysArray(A) {
    let n = A.length

  for (let i = 0; i < n - 2; i++) {

    let val1 = A[i], val2 = A[i + 1], val3 = A[i + 2];

    if (val2 < val1 && val2 < val3) {

      A[i + 1] = val3;
      A[i + 2] = val1;
      A[i] = val2;
      i = -1;

    } else if (val3 < val1 && val3 < val2) {
        
      A[i + 1] = val1;
      A[i + 2] = val2;
      A[i] = val3;
      i = -1;

    }
  }

  if (A[n - 3] < A[n - 2] && A[n - 2] < A[n - 1]) {

    return "YES";
  } else {
    return "NO";
  }

}

console.log(larrysArray([1, 3, 4, 2]));
