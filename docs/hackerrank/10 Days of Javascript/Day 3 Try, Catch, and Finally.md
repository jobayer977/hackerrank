---
title: 10 Days of Javascript - Day 3 Try, Catch, and Finally
Problem: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true
---

**Solution:**

```js
function reverseString(s) {
	try {
		console.log(s.split('').reverse().join(''))
	} catch (e) {
		console.log(e.message)
		console.log(s)
	}
}
```
