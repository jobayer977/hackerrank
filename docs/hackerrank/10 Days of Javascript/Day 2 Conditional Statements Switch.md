---
title: 10 Days of Javascript - Day 2 Conditional Statements Switch
Problem: https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true
---

### **Answer:**

```js
function getLetter(s) {
	switch (s.charAt(0)) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return 'A'
		case 'b':
		case 'c':
		case 'd':
		case 'f':
		case 'g':
			return 'B'
		case 'h':
		case 'j':
		case 'k':
		case 'l':
		case 'm':
			return 'C'
		case 'n':
		case 'p':
		case 'q':
		case 'r':
		case 's':
		case 't':
		case 'v':
		case 'w':
		case 'x':
		case 'y':
		case 'z':
			return 'D'
	}
}

console.log(getLetter('a')) // A
```

**Explanation**

The first character of the string is a, so we return A. The rest of the string is empty, so we return A.
