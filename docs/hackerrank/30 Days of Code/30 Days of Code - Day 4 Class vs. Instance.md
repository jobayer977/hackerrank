---
title: 30 Days of Code - Day 4 Class vs. Instance
Problem: https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true
---

### **Answer:**

```js
function Person(initialAge) {
	if (initialAge > 0) {
		this.age = initialAge
	} else {
		this.age = 0
		console.log('Age is not valid, setting age to 0.')
	}
	this.amIOld = function () {
		if (this.age < 13) {
			console.log('You are young.')
		} else if (this.age < 18) {
			console.log('You are a teenager.')
		} else {
			console.log('You are old.')
		}
	}
	this.yearPasses = function () {
		this.age++
	}
}
```

<!-- **Explanation** -->
