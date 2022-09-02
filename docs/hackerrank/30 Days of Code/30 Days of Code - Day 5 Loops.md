---
title: 30 Days of Code - Day 5 Loops
Problem: https://www.hackerrank.com/challenges/30-loops/problem?isFullScreen=true
---

### **Solution:**

```js
function main() {
	const n = parseInt(readLine().trim(), 10)
	var i = 0
	while (i < 10) {
		i++
		console.log(`${n} x ${i} = ${n * i}`)
	}
}
```
