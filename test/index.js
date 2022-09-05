/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	const sorted = [...nums].sort((a, b) => a - b)
	return nums.map((n) => sorted.indexOf(n))
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
