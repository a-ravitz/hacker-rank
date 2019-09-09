function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  let counter = {numbers: 0, lower_case: 0, upper_case: 0, special_characters: 0};

  let zeros = 0
  let finalCount = 0

  for (let i = 0; i < n; i++) {
    if (numbers.includes(password[i])) {
      counter.numbers++;
    } else if (lower_case.includes(password[i])) {
      counter.lower_case++;
    } else if (upper_case.includes(password[i])) {
      counter.upper_case++
    } else if (special_characters.includes(password[i])) {
      counter.special_characters++
    }
  }

  let arr = Object.values(counter)

  for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
          zeros++
   
      }
  }
  if (n < 6) {
      finalCount = 6 - n
    }
    
    if (finalCount >= zeros ) {
        return finalCount
    } else {
        return finalCount + Math.abs(finalCount - zeros)
    }
}

console.log(minimumNumber(3, "Ab1"));
console.log(minimumNumber(11, "#HackerRank"));
console.log(minimumNumber(5, 'jnhqj'))