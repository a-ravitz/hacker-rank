function compareTriplets(a, b) {

    var p1 = 0
    var p2 = 0

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            p1++
        }
        if (b[i] > a[i]) {
            p2++
        }
    }
        return [p1, p2]
    

}
