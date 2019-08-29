function getSecondLargest(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let smallerThanMax = []

  for (let i = 0; i < nums.length; i++) {
      if(sorted[i] < sorted[sorted.length-1]) {
          smallerThanMax.push(sorted[i])
      }
  }
  return Math.max(...smallerThanMax)
}

console.log(getSecondLargest([1, 3, 2, 4, 6, 5]))
