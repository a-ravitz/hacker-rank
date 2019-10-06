function breakingRecords(scores) {

    //the first score is both the highest and lowest
    //set them at the beginning we can compare other scores to them 

    let high = scores[0],
        low = scores[0],
        output = [0, 0];

        //start looping at index 1 because index 0 is our high and low score
    for (let i = 1; i < scores.length; i++) {

        //if current score is higher then the highest score
        //set high score to current score, and increment output counter [0] by one
        if (scores[i] > high) {
        high = scores[i];
        output[0]++;
        }

        //if current score is lower then the lowest score
        //set low score to current score, and increment the output counter [1] by one 
        if (scores[i] < low) {
        low = scores[i];
        output[1]++;
        }
    }

    return output;
}

// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([0, 9, 3, 10, 2, 20]))