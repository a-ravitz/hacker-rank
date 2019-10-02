function jumpingOnClouds(c) {
    
  let count = 0, i = 0;

  while (i + 2<= c.length) {
      if (c[i + 2] === 0) {
        count++;
        i += 2;
      } else {
        count++;
        i += 1;
    }
  }

  return count

}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0]))
