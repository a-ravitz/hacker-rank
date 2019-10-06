// //this solution works if you're trying to find whether the string is a palindrome 

function isBalanced(s) {
    let firstHalfReversed = s
      .substring(0, s.length / 2)
      .split("")
      .reverse();
    let secondHalfArr = s.substring(s.length / 2, s.length).split("");
  
    for (let i = 0; i < secondHalfArr.length; i++) {
      switch (true) {
        case secondHalfArr[i] === ")":
          secondHalfArr[i] = "(";
          break;
        case secondHalfArr[i] === "]":
          secondHalfArr[i] = "[";
          break;
        case secondHalfArr[i] === "}":
          secondHalfArr[i] = "{";
          break;
      }
    }
     if (firstHalfReversed.join('') === secondHalfArr.join('')) {
         return 'YES'
     } else {
         return 'NO'
     }
   
  }


//this solutoin replaces the pattern with a blank, 
//slowly pulling out groups of closed, balanced brackets 

function isBalanced(s) {

    let n = -1;

	while (s.length !== n) {
        n = s.length;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
    }
	if (s.length == 0)
		return "YES"
	else 
		return "NO"
  }

  console.log(isBalanced('{(([])[])[]}'))
//   console.log(isBalanced('{(([])[])[]]}'))
//   console.log(isBalanced('{(([])[])[]}[]'))