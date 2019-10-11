function countSort(arr) {
        let output = ""

        for (let i = 0; i <= 100; i ++) {
            for (let j = 0; j < arr.length; j++) {
                if (parseInt(arr[j][0]) === i) {
                    if (j < arr.length/2) {
                        output += ('-' + " ")
                    } else {
                    output += (arr[j][1] + " ")
                    }
                }
            }
        }
        
        console.log(output)
}



countSort([ [ '0', 'ab' ],
  [ '6', 'cd' ],
  [ '0', 'ef' ],
  [ '6', 'gh' ],
  [ '4', 'ij' ],
  [ '0', 'ab' ],
  [ '6', 'cd' ],
  [ '0', 'ef' ],
  [ '6', 'gh' ],
  [ '0', 'ij' ],
  [ '4', 'that' ],
  [ '3', 'be' ],
  [ '0', 'to' ],
  [ '1', 'be' ],
  [ '5', 'question' ],
  [ '1', 'or' ],
  [ '2', 'not' ],
  [ '4', 'is' ],
  [ '2', 'to' ],
  [ '4', 'the' ] ])