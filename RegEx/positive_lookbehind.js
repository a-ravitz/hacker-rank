const regex = '/(?<=[13579])\d/g'

const arr = '123Go!'.match(regex)
console.log(arr.length)