---
title: 10 Days of Javascript - Day 3 Arrays
Problem: https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true
---

### **Answer:**

```js
function getSecondLargest(nums) {
	let sortedNums = nums.sort((a, b) => a - b)
	const res = Array(...new Set([...sortedNums]))
	return res[res.length - 2]
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
```

**Explanation**

The largest number is 10, and the second largest number is 9. Therefore, return 9. First, we sort the array in ascending order, Since the array is sorted in ascending order, the second largest number is the last second element in the array.
