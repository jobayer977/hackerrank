---
title: 30 Days of Code - Day 9 Recursion 3
Problem: https://www.hackerrank.com/challenges/30-recursion/problem?isFullScreen=true
---

### **Answer:**

```js
function factorial(n) {
	if (n == 1) {
		return n
	}

	return n * factorial(n - 1)
}
```

<!-- **Explanation** -->
