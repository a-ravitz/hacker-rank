var arr =[
          [11, 2, 4],
          [4, 5, 6],
          [10, 8, -12]
        ]

function diagonalDifference(arr) {

    var n = arr.length;
    var a = 0;
    var b = 0;
    for (var i = 0, j = n -1; i < n; i++, j --) {

        a = a + arr[i][i];
        b += arr[i][j];

    }
    return Math.abs(a-b)
}

diagonalDifference(arr)