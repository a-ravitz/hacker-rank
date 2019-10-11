//this solution is overly complicated 
function pageCount(n, p) {
  let count = 0;
  //if the page you're going to is the last page then you didn't turn pages
  if (n === p) return count

  //if going from the back of the book is less turns
  // than going from the start of the book 

  if (n - p <= Math.abs(1 - p)) {

    //if num is not even, make it even
    let num = n;
    if (n % 2 === 1) {
      num = n - 1;
    }

    //if i is odd increase count by 1
    for (let i = num; i >= 1; i--) {
      if (i % 2 === 1) {
        count++;
      }
      if (i === p) {
        break;
      }
    }

  } else {

    //starting from page 1
    for (let i = 1; i < n; i++) {

        //if i is even increase count 
      if (i % 2 === 0) {
        count++;
      }
      if (i === p) {
        break;
      }
    }
  }
  return count;
}

console.log(pageCount(5, 4));
console.log(pageCount(6, 2));

//this is a much better solution 
function pageCount(n, p) {
    /*
		  n: the number of pages in the book
		  p: the page number to turn to
    */

    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);
}
