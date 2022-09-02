---
title: 10 Days of Javascript - Day 0 Data Types
Problem: https://www.hackerrank.com/challenges/js10-data-types/problem?isFullScreen=true
---

### **Answer:**

```js
function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4
	const firstDecimal = 4.0
	const firstString = 'HackerRank '
	console.log(firstInteger + Number(secondInteger))
	console.log(firstDecimal + Number(secondDecimal))
	console.log(firstString + secondString)
}
performOperation(10, 5.0, 'is the best place to learn and practice coding!')
```

**Explanation**

First we convert the secondInteger and secondDecimal to numbers using the Number function. Then we add them together and print the result to the console. In the next line we simply concatenate the firstString and secondString and print the result to the console.
