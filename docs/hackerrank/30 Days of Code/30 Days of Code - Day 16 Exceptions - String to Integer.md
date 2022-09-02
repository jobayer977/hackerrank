---
title: 30 Days of Code - Day 16 Exceptions - String to Integer
Problem: https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true
---

### **Solution:**

```js
'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin
})

process.stdin.on('end', function () {
	inputString = inputString.split('\n')

	main()
})

function readLine() {
	return inputString[currentLine++]
}

// Ignore above this line

function main() {
	try {
		const S = readLine()
		!isNaN(parseInt(S)) ? console.log(parseInt(S)) : x
	} catch (e) {
		console.log('Bad String')
	}
}
```
