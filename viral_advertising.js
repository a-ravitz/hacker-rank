function viralAdvertising(n) {

    let cumulitive = [2], day = 1, liked = 2, shared = 5;
    
    while (day < n) {
        shared = liked * 3;
        nextDay(shared);
    };
    
    function nextDay (x) {
        cumulitive.push(Math.floor(x/2));
        liked = Math.floor(x/2);
        day++;
    };

    return cumulitive.reduce((a,b) => a+b)
}   

console.log(viralAdvertising(3))