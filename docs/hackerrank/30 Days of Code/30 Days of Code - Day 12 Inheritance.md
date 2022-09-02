---
title: 30 Days of Code - Day 12 Inheritance
Problem: https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true
---

### **Solution:**

```js
'use strict'

var _input = ''
var _index = 0
process.stdin.on('data', (data) => {
	_input += data
})
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[ \n]+'))
	main()
})
function read() {
	return _input[_index++]
}

/**** Ignore above this line. ****/

// start
class Person {
	constructor(firstName, lastName, identification) {
		this.firstName = firstName
		this.lastName = lastName
		this.idNumber = identification
	}

	printPerson() {
		console.log(
			'Name: ' +
				this.lastName +
				', ' +
				this.firstName +
				'\nID: ' +
				this.idNumber
		)
	}
}

class Student extends Person {
	constructor(firstName, lastName, idNumber, scores) {
		super(firstName, lastName, idNumber, scores)
		this.scores = scores
	}

	calculate() {
		var sum = this.scores.reduce((acc, num) => {
			acc += num
			return acc
		})
		var avg = sum / this.scores.length

		if (avg >= 90) {
			return 'O'
		} else if (avg >= 80) {
			return 'E'
		} else if (avg >= 70) {
			return 'A'
		} else if (avg >= 55) {
			return 'P'
		} else if (avg >= 40) {
			return 'D'
		} else {
			return 'T'
		}
	}
}

// end

function main() {
	let firstName = read()
	let lastName = read()
	let id = +read()
	let numScores = +read()
	let testScores = new Array(numScores)

	for (var i = 0; i < numScores; i++) {
		testScores[i] = +read()
	}

	let s = new Student(firstName, lastName, id, testScores)
	s.printPerson()
	s.calculate()
	console.log('Grade: ' + s.calculate())
}
```
