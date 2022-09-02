---
title: 10 Days of Javascript - Day 4 Classes
Problem: https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true
---

### **Solution:**

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
