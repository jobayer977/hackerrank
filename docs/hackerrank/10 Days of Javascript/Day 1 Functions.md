---
title: 10 Days of Javascript - Day 1 Functions
Problem: https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true
---

**Solution:**

```js
function factorial(n) {
	if (n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}

factorial(5) // 120
```

**Explanation**

The function is recursive. It calls itself until it reaches the base case. In this case, n === 1, which returns 1. n _ factorial(n - 1) is the recursive call. Since n - 1 === 0, it returns 1. n _ factorial(n - 1) === n \* 1 === n.
