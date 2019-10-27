function viralAdvertising(n) {

    let cumulitive = 2, day = 1, liked = 2;
    
    while (day < n) {
        nextDay(liked * 3);
    };
    
    function nextDay (x) {
        cumulitive += (Math.floor(x/2));
        liked = Math.floor(x/2);
        day++;
    };

    return cumulitive
}   

console.log(viralAdvertising(34))