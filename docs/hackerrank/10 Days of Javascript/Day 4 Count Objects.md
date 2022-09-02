---
title: 10 Days of Javascript - Day 4 Count Objects
Problem: https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true
---

### **Answer:**

```js
function getCount(objects) {
	let count = 0
	for (const iterator of objects) {
		if (iterator.x === iterator.y) {
			count++
		}
	}
	return count
}

const arr = [
	{
		x: 1,
		y: 1,
	},
	{
		x: 2,
		y: 3,
	},
	{
		x: 3,
		y: 3,
	},
	{
		x: 2,
		y: 4,
	},
	{
		x: 4,
		y: 5,
	},
]

getCount(arr) // 2
```

**Solutions 2**

```javascript
function getCount(objects) {
	return objects.filter(({ x, y }) => x === y).length
}

const arr = [
	{
		x: 1,
		y: 1,
	},
	{
		x: 2,
		y: 3,
	},
	{
		x: 3,
		y: 3,
	},
	{
		x: 2,
		y: 4,
	},
	{
		x: 4,
		y: 5,
	},
]

getCount(arr) // 2
```

### **Explanation**
