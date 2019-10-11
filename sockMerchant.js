sockMerchant = (n, ar) => {
  // let pairsOfSocks = 0;
  // let obj = {};
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (obj[arr[i]]) {
  //     obj[arr[i]]++;
  //   } else {
  //     obj[arr[i]] = 1;
  //   }
  // }

  // let objArr = Object.values(obj);

  // for (let j = 0; j < objArr.length; j++) {
  //   let x = Math.floor(parseInt(objArr[j] / 2));
  //   pairsOfSocks += x;
  // }

  // return pairsOfSocks

  //better solution
  const colors = {};
  let matches = 0;
  
  for (let i = 0; i < n; i++) {
    if (colors[ar[i]]) {
      matches++;
      colors[ar[i]] = 0;
      console.log('colors:', colors)
    } else {
      colors[ar[i]] = 1;
      console.log('colors:', colors)
     }
    };

    return matches;

  }
console.log(sockMerchant(10, ['a','a','c','a','b','a','c','c','c','c']))
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
