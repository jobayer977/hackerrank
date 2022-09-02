 ## Table of Contents

 - ### [hackerrank](#hackerrank)
   - [10 Days of Javascript - Day 0 Data Types](#10-days-of-javascript-day-0-data-types)
   - [10 Days of Javascript - Day 0 Hello, World!](#10-days-of-javascript-day-0-hello-world)
   - [10 Days of Javascript - Day 1 Arithmetic Operators](#10-days-of-javascript-day-1-arithmetic-operators)
   - [10 Days of Javascript - Day 1 Functions](#10-days-of-javascript-day-1-functions)
   - [10 Days of Javascript - Day 1 Let and Const](#10-days-of-javascript-day-1-let-and-const)
   - [10 Days of Javascript - Day 2 Conditional Statements If-Else](#10-days-of-javascript-day-2-conditional-statements-if-else)
   - [10 Days of Javascript - Day 2 Conditional Statements Switch](#10-days-of-javascript-day-2-conditional-statements-switch)
   - [10 Days of Javascript - Day 2 Loops](#10-days-of-javascript-day-2-loops)
   - [10 Days of Javascript - Day 3 Arrays](#10-days-of-javascript-day-3-arrays)
   - [10 Days of Javascript - Day 3 Throw](#10-days-of-javascript-day-3-throw)
   - [10 Days of Javascript - Day 3 Try, Catch, and Finally](#10-days-of-javascript-day-3-try-catch-and-finally)
   - [10 Days of Javascript - Day 4 Classes](#10-days-of-javascript-day-4-classes)
   - [10 Days of Javascript - Day 4 Count Objects](#10-days-of-javascript-day-4-count-objects)
   - [10 Days of Javascript - Day 4 Create a Rectangle Object](#10-days-of-javascript-day-4-create-a-rectangle-object)
   - [10 Days of Javascript - Day 5 Arrow Functions](#10-days-of-javascript-day-5-arrow-functions)
   - [10 Days of Javascript - Day 5 Inheritance](#10-days-of-javascript-day-5-inheritance)
   - [10 Days of Javascript - Day 5 Template Literals](#10-days-of-javascript-day-5-template-literals)
   - [10 Days of Javascript - Day 6 JavaScript Dates](#10-days-of-javascript-day-6-javascript-dates)
   - [10 Days of Javascript - Day 7 Regular Expressions II](#10-days-of-javascript-day-7-regular-expressions-ii)
   - [Day 0 of 30 Hello World](#day-0-of-30-hello-world)
   - [Day 1 Data Types](#day-1-data-types)
   - [Day 11 2D Arrays](#day-11-2d-arrays)
   - [Day 12 Inheritance](#day-12-inheritance)
   - [Day 13 Abstract Classes](#day-13-abstract-classes)
   - [Day 15 Linked List](#day-15-linked-list)
   - [Day 16 Exceptions - String to Integer](#day-16-exceptions-string-to-integer)
   - [Day 2 Operators](#day-2-operators)
   - [Day 3 Intro to Conditional Statements](#day-3-intro-to-conditional-statements)
   - [Day 4 Class vs. Instance](#day-4-class-vs-instance)
   - [Day 5 Loops](#day-5-loops)
   - [Day 6 Let's Review](#day-6-lets-review)
   - [Day 7 Arrays](#day-7-arrays)
   - [Day 8 Dictionaries and Maps](#day-8-dictionaries-and-maps)
   - [Day 9 Recursion 3](#day-9-recursion-3)
   - [Warm up Challenges Counting Valleys](#warm-up-challenges-counting-valleys)
   - [Warm up Challenges Sales by Match](#warm-up-challenges-sales-by-match)
   - [Jumping on the Clouds](#jumping-on-the-clouds)
   - [Repeated String](#repeated-string)
- ### [leetcode](#leetcode)
   - [1920 Build Array from Permutation](#1920-build-array-from-permutation)
   - [1929. Concatenation of Array](#1929-concatenation-of-array)
  <br/><br/><br/><br/> 

 # hackerrank
 ## [10 Days of Javascript - Day 0 Data Types](https://www.hackerrank.com/challenges/js10-data-types/problem?isFullScreen=true)
 
### **Answer:**

```js
function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4
	const firstDecimal = 4.0
	const firstString = 'HackerRank '
	console.log(firstInteger + Number(secondInteger))
	console.log(firstDecimal + Number(secondDecimal))
	console.log(firstString + secondString)
}
performOperation(10, 5.0, 'is the best place to learn and practice coding!')
```

**Explanation**

First we convert the secondInteger and secondDecimal to numbers using the Number function. Then we add them together and print the result to the console. In the next line we simply concatenate the firstString and secondString and print the result to the console.
 

   ## [10 Days of Javascript - Day 0 Hello, World!](https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true)
 
### **Answer:**

```js
function greeting(parameterVariable) {
	console.log('Hello, World!')
	console.log(parameterVariable)
}
```

**Explanation**
The first line of code prints 'Hello, World!' to the console. The second line of code prints the value of 'parameterVariable' to the console. The parameterVariable is a string of text.
 

   ## [10 Days of Javascript - Day 1 Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem?isFullScreen=true)
 
### **Answer:**

```js
function getArea(length, width) {
	return length * width
}

function getPerimeter(length, width) {
	return 2 * (length + width)
}

getArea(2, 3) // 6
```

**Explanation**

We can get the area of a rectangle by multiplying the length by the width. The getArea function takes two parameters, length and width, and returns the area of the rectangle. We can get the perimeter of a rectangle by adding the length and width together and multiplying by two. The getPerimeter function takes two parameters, length and width, and returns the perimeter of the rectangle.
 

   ## [10 Days of Javascript - Day 1 Functions](https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true)
 
### **Answer:**

```js
function factorial(n) {
	if (n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}

factorial(5) // 120
```

**Explanation**

The function is recursive. It calls itself until it reaches the base case. In this case, n === 1, which returns 1. n _ factorial(n - 1) is the recursive call. Since n - 1 === 0, it returns 1. n _ factorial(n - 1) === n \* 1 === n.
 

   ## [10 Days of Javascript - Day 1 Let and Const](https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true)
 
### **Answer:**

```js
const PI = Math.PI
const r = readLine() // 2.6
var area = parseFloat(PI * r * r)
console.log(area)

var peri = parseFloat(2 * PI * r)
console.log(peri)
```
 

   ## [10 Days of Javascript - Day 2 Conditional Statements If-Else](https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true)
 
### **Answer:**

```js
function getGrade(score) {
	let grade
	if (25 < score && score <= 30) {
		grade = 'A'
	} else if (20 < score && score <= 25) {
		grade = 'B'
	} else if (15 < score && score <= 20) {
		grade = 'C'
	} else if (10 < score && score <= 15) {
		grade = 'D'
	} else if (5 < score && score <= 10) {
		grade = 'E'
	} else if (0 <= score && score <= 5) {
		grade = 'F'
	} else {
		grade = 'Invalid score'
	}
	return grade
}
```
 

   ## [10 Days of Javascript - Day 2 Conditional Statements Switch](https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true)
 
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
 

   ## [10 Days of Javascript - Day 2 Loops](https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true)
 
### **Answer:**

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
 

   ## [10 Days of Javascript - Day 3 Arrays](https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true)
 
### **Answer:**

```js
function getSecondLargest(nums) {
	let sortedNums = nums.sort((a, b) => a - b)
	const res = Array(...new Set([...sortedNums]))
	return res[res.length - 2]
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
```

**Explanation**

The largest number is 10, and the second largest number is 9. Therefore, return 9. First, we sort the array in ascending order, Since the array is sorted in ascending order, the second largest number is the last second element in the array.
 

   ## [10 Days of Javascript - Day 3 Throw](https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true)
 
### **Answer:**

```js
function isPositive(a) {
	if (a > 0) {
		return 'YES'
	} else if (a === 0) {
		throw new Error('Zero Error')
	} else {
		throw new Error('Negative Error')
	}
}
```

**Explanation**

The if statement checks if 'a' is greater than 0. If it is, the function returns 'YES'. If 'a' is 0, the function throws an error with the message 'Zero Error'. If 'a' is less than 0, the function throws an error with the message 'Negative Error'. The else statement is not needed because the function will never reach the else statement if 'a' is 0 or greater than 0.
 

   ## [10 Days of Javascript - Day 3 Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true)
 
### **Answer:**

```js
function reverseString(s) {
	try {
		console.log(s.split('').reverse().join(''))
	} catch (e) {
		console.log(e.message)
		console.log(s)
	}
}
```
 

   ## [10 Days of Javascript - Day 4 Classes](https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true)
 
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
 

   ## [10 Days of Javascript - Day 4 Count Objects](https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true)
 
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

**Explanation**
 

   ## [10 Days of Javascript - Day 4 Create a Rectangle Object](https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true)
 
### **Answer:**

```js
function Rectangle(a, b) {
	return {
		length: a,
		width: b,
		perimeter: 2 * (a + b),
		area: a * b,
	}
}
```
 

   ## [10 Days of Javascript - Day 5 Arrow Functions](https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true)
 
### **Answer:**

```js
function modifyArray(nums) {
	for (const n in nums) {
		if (nums[n] % 2 === 0) {
			nums[n] = nums[n] * 2
		} else if (nums[n] % 2 === 1) {
			nums[n] = nums[n] * 3
		}
	}
	return nums
}

console.log(modifyArray([1, 2, 3, 4, 5])) //  [3, 4, 9, 8, 15]
```
 

   ## [10 Days of Javascript - Day 5 Inheritance](https://www.hackerrank.com/challenges/js10-inheritance/problem?isFullScreen=true)
 
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
 

   ## [10 Days of Javascript - Day 5 Template Literals](https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true)
 
### **Answer:**

```js
function sides(literals, ...expressions) {
	const [a, p] = expressions
	const value = Math.sqrt(p ** 2 - 16 * a)

	return [(p - value) / 4, (p + value) / 4]
}
```
 

   ## [10 Days of Javascript - Day 6 JavaScript Dates](https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true)
 
### **Answer:**

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
 

   ## [10 Days of Javascript - Day 7 Regular Expressions II](https://www.hackerrank.com/challenges/js10-regexp-2/problem?isFullScreen=true)
 
### **Answer:**

```js
function regexVar() {
	return new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/)
}
```

<!-- **Explanation** -->
 

   ## [Day 0 of 30 Hello World](https://www.hackerrank.com/challenges/30-hello-world/problem?isFullScreen=true)
 
## [Day 0 of 30 Hello World](https://www.hackerrank.com/challenges/30-hello-world/problem?isFullScreen=true)

### **Answer:**

```js
function processData(inputString) {
	// This line of code prints the first line of output
	console.log('Hello, World.')

	// Write the second line of output that prints the contents of 'inputString' here.
	console.log(inputString)
}

processData('Welcome to 30 Days of Code!')
```

<!-- **Explanation** -->
 

   ## [Day 1 Data Types](https://www.hackerrank.com/challenges/30-data-types/problem?isFullScreen=true)
 
## [Day 1 Data Types](https://www.hackerrank.com/challenges/30-data-types/problem?isFullScreen=true)

### **Answer:**

```js
var i2 = 0
var d2 = 0.0
var s2 = ''

i2 = parseInt(readLine())
d2 = parseFloat(readLine())
s2 = readLine()

console.log(i + i2)

console.log((d + d2).toFixed(1))

console.log(s + s2)
```

<!-- **Explanation** -->
 

   ## [Day 11 2D Arrays](https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true)
 
## [Day 11 2D Arrays](https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true)

### **Answer:**

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
 

   ## [Day 12 Inheritance](https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true)
 
## [Day 12 Inheritance](https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true)

### **Answer:**

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
 

   ## [Day 13 Abstract Classes](https://www.hackerrank.com/challenges/30-abstract-classes/problem?isFullScreen=true)
 
## [Day 13 Abstract Classes](https://www.hackerrank.com/challenges/30-abstract-classes/problem?isFullScreen=true)

### **Answer:**

```js
'use strict'

var _input = ''
var _index = 0
process.stdin.on('data', (data) => {
	_input += data
})
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('\n'))
	main()
})
function readLine() {
	return _input[_index++]
}

/**** Ignore above this line. ****/

class Book {
	constructor(title, author) {
		if (this.constructor === Book) {
			throw new TypeError(
				'Do not attempt to directly instantiate an abstract class.'
			)
		} else {
			this.title = title
			this.author = author
		}
	}

	display() {
		console.log("Implement the 'display' method!")
	}
}

// Start
class MyBook extends Book {
	constructor(title, author, price) {
		super(title, author)
		this.price = price
	}

	display() {
		console.log(`Title: ${this.title}`)
		console.log(`Author: ${this.author}`)
		console.log(`Price: ${this.price}`)
	}
}
// End

function main() {
	let title = readLine()
	let author = readLine()
	let price = +readLine()

	let book = new MyBook(title, author, price)
	book.display()
}
```
 

   ## [Day 15 Linked List](https://www.hackerrank.com/challenges/30-linked-list/problem?isFullScreen=true&h_r=next-challenge&h_v=zen)
 
## [Day 15 Linked List](https://www.hackerrank.com/challenges/30-linked-list/problem?isFullScreen=true&h_r=next-challenge&h_v=zen)

### **Answer:**

```js
process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

process.stdin.on('data', function (data) {
	input_stdin += data
})

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n')
	main()
})
function readLine() {
	return input_stdin_array[input_currentline++]
}
function Node(data) {
	this.data = data
	this.next = null
}
function Solution() {
	this.insert = function (head, data) {
		//complete this method
		var newNode = new Node(data)

		if (head === null || typeof head === 'undefined') {
			head = newNode
		} else if (head.next === null) {
			head.next = newNode
		} else {
			var next = head.next
			while (next.next) {
				next = next.next
			}
			next.next = newNode
		}

		return head
	}
	this.display = function (head) {
		var start = head
		while (start) {
			process.stdout.write(start.data + ' ')
			start = start.next
		}
	}
}
function main() {
	var T = parseInt(readLine())
	var head = null
	var mylist = new Solution()
	for (i = 0; i < T; i++) {
		var data = parseInt(readLine())
		head = mylist.insert(head, data)
	}
	mylist.display(head)
}
```
 

   ## [Day 16 Exceptions - String to Integer](https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true)
 
## [Day 16 Exceptions - String to Integer](https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true)

### **Answer:**

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
 

   ## [Day 2 Operators](https://www.hackerrank.com/challenges/30-operators/problem?isFullScreen=true)
 
## [Day 2 Operators](https://www.hackerrank.com/challenges/30-operators/problem?isFullScreen=true)

### **Answer:**

```js
function solve(meal_cost, tip_percent, tax_percent) {
	const tip = (tip_percent / 100) * meal_cost
	const tax = (tax_percent / 100) * meal_cost
	console.log(Math.round(tip + tax + meal_cost))
}

solve(12.0, 20, 8)
```

<!-- **Explanation** -->
 

   ## [Day 3 Intro to Conditional Statements](https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true)
 
## [Day 3 Intro to Conditional Statements](https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true)

### **Answer:**

```js
function main() {
	const N = parseInt(readLine().trim(), 10)
	const isEven = N % 2 === 0
	if (!isEven) {
		console.log('Weird')
	} else if (isEven && N <= 5 && N >= 2) {
		console.log('Not Weird')
	} else if (isEven && N <= 20 && N >= 6) {
		console.log('Weird')
	} else if (isEven && N > 20) {
		console.log('Not Weird')
	}
}
```

<!-- **Explanation** -->
 

   ## [Day 4 Class vs. Instance](https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true)
 
## [Day 4 Class vs. Instance](https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true)

### **Answer:**

```js
function Person(initialAge) {
	if (initialAge > 0) {
		this.age = initialAge
	} else {
		this.age = 0
		console.log('Age is not valid, setting age to 0.')
	}
	this.amIOld = function () {
		if (this.age < 13) {
			console.log('You are young.')
		} else if (this.age < 18) {
			console.log('You are a teenager.')
		} else {
			console.log('You are old.')
		}
	}
	this.yearPasses = function () {
		this.age++
	}
}
```

<!-- **Explanation** -->
 

   ## [Day 5 Loops](https://www.hackerrank.com/challenges/30-loops/problem?isFullScreen=true)
 
## [Day 5 Loops](https://www.hackerrank.com/challenges/30-loops/problem?isFullScreen=true)

### **Answer:**

```js
function main() {
	const n = parseInt(readLine().trim(), 10)
	var i = 0
	while (i < 10) {
		i++
		console.log(`${n} x ${i} = ${n * i}`)
	}
}
```
 

   ## [Day 6 Let's Review](https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true)
 
## [Day 6 Let's Review](https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true)

### **Answer:**

**Input**

```js
processData('2\nHacker\nRank')
```

**Solution's**

```js
function processData(input) {
	const inputArray = input.split('\n')
	const inputStrings = inputArray.slice(1, inputArray.length)
	for (let i = 0; i < inputArray[0]; i++) {
		const str = inputStrings[i]
		const odd = []
		const even = []
		for (let key in str) {
			if (key % 2 == 0) {
				even.push(str[key])
			} else {
				odd.push(str[key])
			}
		}
		console.log(`${even.join('')} ${odd.join('')}`)
	}
}
```
 

   ## [Day 7 Arrays](https://www.hackerrank.com/challenges/30-arrays/problem?isFullScreen=true)
 
## [Day 7: Arrays](https://www.hackerrank.com/challenges/30-arrays/problem?isFullScreen=true)

### **Answer:**

```js
console.log(arr.reverse().join(' '))
```

<!-- **Explanation** -->
 

   ## [Day 8 Dictionaries and Maps](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true)
 
## [Day 8 Dictionaries and Maps](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true)

### **Answer:**

```js
function processData(input) {
 const phoneBook = new Map()
 const inputArray = input.split('\n')
 const numberOfPhone = inputArray.shift()
 inputArray.forEach((x, i, key) => {
  if (i < Number(numberOfPhone)) {
   const normalizedX = x.trim()?.split(' ')
   phoneBook.set(normalizedX[0], normalizedX[1])
  } else {
   if (phoneBook.has(x)) {
    console.log(`${x}=${phoneBook.get(x)}`)
   } else {
    console.log(`Not found`)
   }
  }
 })
}

```

**Input Format**

```js
processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry')

```
 

   ## [Day 9 Recursion 3](https://www.hackerrank.com/challenges/30-recursion/problem?isFullScreen=true)
 
## [Day 9 Recursion 3](https://www.hackerrank.com/challenges/30-recursion/problem?isFullScreen=true)

### **Answer:**

```js
function factorial(n) {
	if (n == 1) {
		return n
	}

	return n * factorial(n - 1)
}
```

<!-- **Explanation** -->
 

   ## [Warm up Challenges Counting Valleys](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
 
## [Warm up Challenges Counting Valleys](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
function countingValleys(steps, path) {
	let valleys = 0
	let level = 0
	for (const key in path) {
		const item = path[key]
		if (item === 'D') {
			level--
			if (level === -1) valleys++
		} else {
			level++
		}
	}
	return valleys
}
countingValleys(8, 'UDDDUDUU')
```
 

   ## [Warm up Challenges Sales by Match](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
 
## [Warm up Challenges Sales by Match](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
function sockMerchant(n, ar) {
	const obj = {}
	let paris = 0
	for (let x in ar) {
		const item = ar[x]
		obj[item] = [...(obj[item] || []), item]
	}
	Object.values(obj).forEach((x) => {
		if (x.length % 2 == 0 && x.length > 1) {
			paris += x.length / 2
		} else if (x.length > 1) {
			paris += (x.length - 1) / 2
		}
	})

	return paris
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
```

### **Example 2:**

```js
function sockMerchant(n, ar) {
	let paris = 0
	const hash = {}
	for (const key in ar) {
		const item = ar[key]
		if (hash[item]) {
			paris++
			delete hash[item]
		} else {
			hash[item] = true
		}
	}

	return paris
}
sockMerchant(6, [10, 20, 20, 10, 30, 1])
```

**Explanation**

n = 6 (number of socks) and ar = [10, 20, 20, 10, 30, 10] (socks colors) . The function must return 2 . Because there are 2 pairs of matching socks: one of each color. So first we create a hash table with the colors as keys and the values as true. Then we loop through the array and check if the color is in the hash table. If it is, we increment the number of pairs and delete the color from the hash table. If it's not, we add the color to the hash table.
 

   ## [Jumping on the Clouds](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
 
## [Jumping on the Clouds](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
function jumpingOnClouds(c) {
	let jumps = 0
	let i = 0
	while (i < c.length - 1) {
		if (i + 2 < c.length && c[i + 2] == 0) {
			i += 2
		} else {
			i++
		}
		jumps++
	}
	return jumps
}
```

<!-- **Explanation** -->
 

   ## [Repeated String](https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
 
## [Repeated String](https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
function repeatedString(s, n) {
	let occurances = s.split('a').length - 1
	let max = Math.floor(n / s.length)
	let totalAs = occurances * max
	totalAs += s.slice(0, n % s.length).split('a').length - 1
	return totalAs
}
```

<!-- **Explanation** -->
 

# leetcode
 ## [1920 Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)
 
## [1920 Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)

### **Solution:**

```js
var buildArray = function (nums) {
	let newArray = []
	for (let i = 0; i < nums.length; i++) {
		const index = nums[i]
		newArray.push(nums[index])
	}
	return newArray
}
```
 

   ## [1929. Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)
 
## [1929. Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)

### **Answer:**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	return nums.concat(nums)
}
```
 

