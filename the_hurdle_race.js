function hurdleRace(k, height) {

    //if max height - k is larger than 0 return the answer, else return 0
    return Math.max(...height ) - k > 0 ? Math.max(...height ) - k : 0

}