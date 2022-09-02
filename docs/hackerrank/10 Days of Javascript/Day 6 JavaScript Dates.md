---
title: 10 Days of Javascript - Day 6 JavaScript Dates
Problem: https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true
---

### **Solution:**

```js
function getDayName(dateString) {
	let dayName
	let date = new Date(dateString)
	switch (date.getDay()) {
		case 0:
			dayName = 'Sunday'
			break
		case 1:
			dayName = 'Monday'
			break
		case 2:
			dayName = 'Tuesday'
			break
		case 3:
			dayName = 'Wednesday'
			break
		case 4:
			dayName = 'Thursday'
			break
		case 5:
			dayName = 'Friday'
			break
		case 6:
			dayName = 'Saturday'
			break
	}

	return dayName
}

console.log(getDayName('10/11/2009')) // Sunday
```
