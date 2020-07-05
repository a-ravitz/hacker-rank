// function getTotalX(a, b) {

//   let intsBetweenAB = [];
//   let aCount = {};
//   let counter = {};
//   let output = 0;

//   for (let i = a[a.length - 1]; i <= b[0]; i++) {
//     intsBetweenAB.push(i);
//   }

//   for (let aIndex = 0; aIndex < a.length; aIndex++) {
//     for (let index = 0; index < intsBetweenAB.length; index++) {
//       if (intsBetweenAB[index] % a[aIndex] === 0) {
//         if (!aCount[intsBetweenAB[index]]) {
//           aCount[intsBetweenAB[index]] = 1;
//         } else {
//           aCount[intsBetweenAB[index]]++;
//         }
//       }
//     }
//   }

//   for (let bIndex = 0; bIndex < b.length; bIndex++) {
//     for (let value in aCount) {
//       if (aCount[value] === a.length) {
//         if (b[bIndex] % value === 0) {
//           if (!counter[value]) {
//             counter[value] = 1;
//           } else {
//             counter[value]++;
//           }
//         }
//       }
//     }
//   }

//   for (let value in counter) {
//       if (counter[value] === b.length) {
//           output ++
//       }
//   }
//   return output
// }


function getTotalX  (a, b) {
    let output = 0
    
    for (let consideredInt = a[a.length -1]; consideredInt <= b[0]; consideredInt++) {
        if(a.every(integer => (consideredInt % integer === 0))) {
            if(b.every(integer => (integer % consideredInt === 0))) {
                output++
            }
        }
    }
    
    return output
}

getTotalX([ 2, 4 ],[ 16, 32, 96 ])
getTotalX([3, 4], [24, 48]);

