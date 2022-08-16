---
title: Day 5 Arrow Functions
Problem: https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true
---

## [Day 5 Arrow Functions](https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true)

### **Answer:**

```js
function modifyArray(nums) {
	for (const n in nums) {
		if (nums[n] % 2 === 0) {
			nums[n] = nums[n] * 2
		} else if (nums[n] % 2 === 1) {
			nums[n] = nums[n] * 3
		}
	}
	return nums
}

console.log(modifyArray([1, 2, 3, 4, 5])) //  [3, 4, 9, 8, 15]
```

### **Explanation**
