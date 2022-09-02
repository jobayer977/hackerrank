---
title: 10 Days of Javascript - Day 2 Conditional Statements If-Else
Problem: https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true
---

## [Day 2 Conditional Statements: If-Else](https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true)

### **Answer:**

```js
function getGrade(score) {
	let grade
	if (25 < score && score <= 30) {
		grade = 'A'
	} else if (20 < score && score <= 25) {
		grade = 'B'
	} else if (15 < score && score <= 20) {
		grade = 'C'
	} else if (10 < score && score <= 15) {
		grade = 'D'
	} else if (5 < score && score <= 10) {
		grade = 'E'
	} else if (0 <= score && score <= 5) {
		grade = 'F'
	} else {
		grade = 'Invalid score'
	}
	return grade
}
```
