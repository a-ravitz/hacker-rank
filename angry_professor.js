function angryProfessor(k, a) {

    //filter a for numbers that are less than or equal to 0 (students who arrived on time)
    //if the length of the array made by the filter is larger than or equal to k 
    //then class is not cancelled, otherwise it is cancelled 

    return a.filter((x) => x <= 0).length >= k ? "NO" : "YES"


}
