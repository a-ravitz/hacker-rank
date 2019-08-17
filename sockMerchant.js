sockMerchant = arr => {
  let obj = {};
  let pairsOfSocks = 0;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
//   console.log(obj)
  let objArr = Object.values(obj);

  for (let j = 0; j < objArr.length; j++) {
    let x = parseInt(objArr[j] / 2)
    // console.log(parseInt(x))
    pairsOfSocks = pairsOfSocks + x
        
    
  }
  console.log(pairsOfSocks)
};

sockMerchant([1,1,3,1,2,1,3,3,3,3]);
