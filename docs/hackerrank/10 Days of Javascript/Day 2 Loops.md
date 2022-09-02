---
title: 10 Days of Javascript - Day 2 Loops
Problem: https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true
---

### **Solution:**

```js
function vowelsAndConsonants(s) {
	const vowelList = 'aeiouAEIOU'
	for (let i = 0; i < s.length; i++) {
		if (vowelList.indexOf(s[i]) !== -1) {
			console.log(s[i])
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (vowelList.indexOf(s[i]) == -1) {
			console.log(s[i])
		}
	}
}
```
