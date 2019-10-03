function birthday(s, d, m) {

  let count = 0;

//if s.length is greater than 1
  if (s.length > 1) {

    //remove the ','s and turn it into a string so we can make sub strings
      let string = s.join("").toString();
      
      for (let i = 0; i < string.length; i++) {

        //make sub strings that start with i, and end at i + m, which is the number of items we should have in each set
        //turn it into an array

          let arr = string.substring(i, i + m).split("");

          //if the new array has the proper amount of numbers in it, which equals m, move on to reducing its contents 
          if (arr.length === m) {

            //we need to parseInt(a) and parseInt(b) because they're strings, not integers 
              let reduced = arr.reduce((a, b) => parseInt(a) + parseInt(b));

              //if reduced is equal to d increase the count
              if (reduced === d) {
                  count++;
                }
            }
        }

    //if s.length === 1 then if that number 's[0]' === d increase the count 
    } else {
        
        if (s[0] === d) {
            count++;
        }
  }

  return count;

}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([4], 4, 1));
console.log(birthday([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4], 15, 4));
