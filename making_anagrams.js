function makeAnagram(a, b) {
  let n = 0;
  let count = 0
  let counter = {}

  if (a.length > b.length) {
    n = a.length;
  } else {
    n = b.length;
}
console.log('n:', n)

  for (let i = 0; i < n; i++) {


          if(!a.includes(b[i])){
            count++
            if(!counter[a[i]]){
                counter[a[i]] = 1
            } else {
                counter[a[i]] ++
            }
        } 
    }
    console.log('counter:', Object.values(counter).reduce((a,b) => a+b))
      return count
  
}
// 
// console.log(makeAnagram("cde", "abc"));
// console.log(makeAnagram('showman', 'woman'))
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
