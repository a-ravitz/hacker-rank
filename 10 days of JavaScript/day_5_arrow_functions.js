let nums = [1,2,3,4,5]

function modifyArray(nums) {

    const newArr = nums.map(s => (s % 2 === 0) ? s * 2 : s * 3)

    return newArr


}

modifyArray(nums)