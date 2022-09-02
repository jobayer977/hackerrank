---
title: 10 Days of Javascript - Day 5 Inheritance
Problem: https://www.hackerrank.com/challenges/js10-inheritance/problem?isFullScreen=true
---

### **Answer:**

```js
class Rectangle {
	constructor(w, h) {
		this.w = w
		this.h = h
	}
}

const methods = {
	area: function () {
		return this.w * this.h
	},
}

Object.assign(Rectangle.prototype, methods)

class Square extends Rectangle {
	constructor(w) {
		super(w, w)
	}
}
```
