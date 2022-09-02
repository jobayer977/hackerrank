---
title: 30 Days of Code - Day 11 2D Arrays
Problem: https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true
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
	let arr = Array(6)
	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10))
	}
	const sumArray = []
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const topEl1 = arr[i][j]
			const topEl2 = arr[i][j + 1]
			const topEl3 = arr[i][j + 2]

			const midEl1 = arr[i + 1][j + 1]

			const botEl1 = arr[i + 2][j]
			const botEl2 = arr[i + 2][j + 1]
			const botEl3 = arr[i + 2][j + 2]
			const sum = topEl1 + topEl2 + topEl3 + midEl1 + botEl1 + botEl2 + botEl3
			sumArray.push(sum)
		}
	}
	console.log(sumArray.sort((a, b) => b - a)[0])
}
```
