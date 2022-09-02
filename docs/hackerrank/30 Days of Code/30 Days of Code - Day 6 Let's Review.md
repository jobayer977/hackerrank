---
title: 30 Days of Code - Day 6 Let's Review
Problem: https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true
---

### **Answer:**

**Input**

```js
processData('2\nHacker\nRank')
```

**Solution's**

```js
function processData(input) {
	const inputArray = input.split('\n')
	const inputStrings = inputArray.slice(1, inputArray.length)
	for (let i = 0; i < inputArray[0]; i++) {
		const str = inputStrings[i]
		const odd = []
		const even = []
		for (let key in str) {
			if (key % 2 == 0) {
				even.push(str[key])
			} else {
				odd.push(str[key])
			}
		}
		console.log(`${even.join('')} ${odd.join('')}`)
	}
}
```
