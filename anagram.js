
  function anagram(s){
    const len = s.length
    let sub1 = s.substring(0,len/2)
    let sub2 = s.substring(len/2,len)
    let count = 0
    let blank = ''
    if(len % 2 == 1) 
      {return -1} 

      for (let i = 0; i < sub1.length; i++) {
        if (sub2.split('').includes(sub1[i])) {
          sub1.replace(i, '') 
        } else {
          count ++
        }
        console.log(sub1)
      }
    // sub2.split('').filter(function(x) {
    //  sub1.includes(x) ? (sub1 = sub1.replace(x,'')) : count++
    //  console.log('sub2', sub2)
    //  console.log('sub1',  sub1)
    // });
      

    return count    
}
// console.log(anagram('hhpddlnnsjfoyxpciioigvjqzfbpllssuj'))
console.log(anagram('xaxbbbxx')) 