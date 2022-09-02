---
title: 30 Days of Code - Day 3 Intro to Conditional Statements
Problem: https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true
---

**Solution:**

```js
function main() {
	const N = parseInt(readLine().trim(), 10)
	const isEven = N % 2 === 0
	if (!isEven) {
		console.log('Weird')
	} else if (isEven && N <= 5 && N >= 2) {
		console.log('Not Weird')
	} else if (isEven && N <= 20 && N >= 6) {
		console.log('Weird')
	} else if (isEven && N > 20) {
		console.log('Not Weird')
	}
}
```

<!-- **Explanation** -->
