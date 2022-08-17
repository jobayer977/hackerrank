---
title: Day 4 Classes
Problem: https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true
---

## [Day 4 Classes](https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true)

### **Answer:**

```js
class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	getPerimeter() {
		return this.sides.reduce((a, b) => a + b)
	}
}
```
