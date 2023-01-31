# Problem Solving 64

# hackerrank

<details>
<summary>10 Days of Javascript - Day 0 Data Types</summary>

```js
function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4;
	const firstDecimal = 4.0;
	const firstString = 'HackerRank ';
	console.log(firstInteger + Number(secondInteger));
	console.log(firstDecimal + Number(secondDecimal));
	console.log(firstString + secondString);
}
performOperation(10, 5.0, 'is the best place to learn and practice coding!');
```

**Explanation**

First we convert the secondInteger and secondDecimal to numbers using the Number function. Then we add them together and print the result to the console. In the next line we simply concatenate the firstString and secondString and print the result to the console.

</details>

<details>
<summary>10 Days of Javascript - Day 0 Hello, World!</summary>

```js
function greeting(parameterVariable) {
	console.log('Hello, World!');
	console.log(parameterVariable);
}
```

**Explanation**
The first line of code prints 'Hello, World!' to the console. The second line of code prints the value of 'parameterVariable' to the console. The parameterVariable is a string of text.

</details>

<details>
<summary>10 Days of Javascript - Day 1 Arithmetic Operators</summary>

```js
function getArea(length, width) {
	return length * width;
}

function getPerimeter(length, width) {
	return 2 * (length + width);
}

getArea(2, 3); // 6
```

**Explanation**

We can get the area of a rectangle by multiplying the length by the width. The getArea function takes two parameters, length and width, and returns the area of the rectangle. We can get the perimeter of a rectangle by adding the length and width together and multiplying by two. The getPerimeter function takes two parameters, length and width, and returns the perimeter of the rectangle.

</details>

<details>
<summary>10 Days of Javascript - Day 1 Functions</summary>

```js
function factorial(n) {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

factorial(5); // 120
```

**Explanation**

The function is recursive. It calls itself until it reaches the base case. In this case, n === 1, which returns 1. n _ factorial(n - 1) is the recursive call. Since n - 1 === 0, it returns 1. n _ factorial(n - 1) === n \* 1 === n.

</details>

<details>
<summary>10 Days of Javascript - Day 1 Let and Const</summary>

```js
const PI = Math.PI;
const r = readLine(); // 2.6
var area = parseFloat(PI * r * r);
console.log(area);

var peri = parseFloat(2 * PI * r);
console.log(peri);
```

</details>

<details>
<summary>10 Days of Javascript - Day 2 Conditional Statements If-Else</summary>

```js
function getGrade(score) {
	let grade;
	if (25 < score && score <= 30) {
		grade = 'A';
	} else if (20 < score && score <= 25) {
		grade = 'B';
	} else if (15 < score && score <= 20) {
		grade = 'C';
	} else if (10 < score && score <= 15) {
		grade = 'D';
	} else if (5 < score && score <= 10) {
		grade = 'E';
	} else if (0 <= score && score <= 5) {
		grade = 'F';
	} else {
		grade = 'Invalid score';
	}
	return grade;
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 2 Conditional Statements Switch</summary>

```js
function getLetter(s) {
	switch (s.charAt(0)) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return 'A';
		case 'b':
		case 'c':
		case 'd':
		case 'f':
		case 'g':
			return 'B';
		case 'h':
		case 'j':
		case 'k':
		case 'l':
		case 'm':
			return 'C';
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
			return 'D';
	}
}

console.log(getLetter('a')); // A
```

**Explanation**

The first character of the string is a, so we return A. The rest of the string is empty, so we return A.

</details>

<details>
<summary>10 Days of Javascript - Day 2 Loops</summary>

```js
function vowelsAndConsonants(s) {
	const vowelList = 'aeiouAEIOU';
	for (let i = 0; i < s.length; i++) {
		if (vowelList.indexOf(s[i]) !== -1) {
			console.log(s[i]);
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (vowelList.indexOf(s[i]) == -1) {
			console.log(s[i]);
		}
	}
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 3 Arrays</summary>

```js
function getSecondLargest(nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	const res = Array(...new Set([...sortedNums]));
	return res[res.length - 2];
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```

**Explanation**

The largest number is 10, and the second largest number is 9. Therefore, return 9. First, we sort the array in ascending order, Since the array is sorted in ascending order, the second largest number is the last second element in the array.

</details>

<details>
<summary>10 Days of Javascript - Day 3 Throw</summary>

```js
function isPositive(a) {
	if (a > 0) {
		return 'YES';
	} else if (a === 0) {
		throw new Error('Zero Error');
	} else {
		throw new Error('Negative Error');
	}
}
```

**Explanation**

The if statement checks if 'a' is greater than 0. If it is, the function returns 'YES'. If 'a' is 0, the function throws an error with the message 'Zero Error'. If 'a' is less than 0, the function throws an error with the message 'Negative Error'. The else statement is not needed because the function will never reach the else statement if 'a' is 0 or greater than 0.

</details>

<details>
<summary>10 Days of Javascript - Day 3 Try, Catch, and Finally</summary>

```js
function reverseString(s) {
	try {
		console.log(s.split('').reverse().join(''));
	} catch (e) {
		console.log(e.message);
		console.log(s);
	}
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 4 Classes</summary>

```js
class Polygon {
	constructor(sides) {
		this.sides = sides;
	}

	getPerimeter() {
		return this.sides.reduce((a, b) => a + b);
	}
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 4 Count Objects</summary>

```js
function getCount(objects) {
	let count = 0;
	for (const iterator of objects) {
		if (iterator.x === iterator.y) {
			count++;
		}
	}
	return count;
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
];

getCount(arr); // 2
```

**Solutions 2**

```javascript
function getCount(objects) {
	return objects.filter(({ x, y }) => x === y).length;
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
];

getCount(arr); // 2
```

**Explanation**

</details>

<details>
<summary>10 Days of Javascript - Day 4 Create a Rectangle Object</summary>

```js
function Rectangle(a, b) {
	return {
		length: a,
		width: b,
		perimeter: 2 * (a + b),
		area: a * b,
	};
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 5 Arrow Functions</summary>

```js
function modifyArray(nums) {
	for (const n in nums) {
		if (nums[n] % 2 === 0) {
			nums[n] = nums[n] * 2;
		} else if (nums[n] % 2 === 1) {
			nums[n] = nums[n] * 3;
		}
	}
	return nums;
}

console.log(modifyArray([1, 2, 3, 4, 5])); //  [3, 4, 9, 8, 15]
```

</details>

<details>
<summary>10 Days of Javascript - Day 5 Inheritance</summary>

```js
class Rectangle {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
}

const methods = {
	area: function () {
		return this.w * this.h;
	},
};

Object.assign(Rectangle.prototype, methods);

class Square extends Rectangle {
	constructor(w) {
		super(w, w);
	}
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 5 Template Literals</summary>

```js
function sides(literals, ...expressions) {
	const [a, p] = expressions;
	const value = Math.sqrt(p ** 2 - 16 * a);

	return [(p - value) / 4, (p + value) / 4];
}
```

</details>

<details>
<summary>10 Days of Javascript - Day 6 JavaScript Dates</summary>

```js
function getDayName(dateString) {
	let dayName;
	let date = new Date(dateString);
	switch (date.getDay()) {
		case 0:
			dayName = 'Sunday';
			break;
		case 1:
			dayName = 'Monday';
			break;
		case 2:
			dayName = 'Tuesday';
			break;
		case 3:
			dayName = 'Wednesday';
			break;
		case 4:
			dayName = 'Thursday';
			break;
		case 5:
			dayName = 'Friday';
			break;
		case 6:
			dayName = 'Saturday';
			break;
	}

	return dayName;
}

console.log(getDayName('10/11/2009')); // Sunday
```

</details>

<details>
<summary>10 Days of Javascript - Day 7 Regular Expressions II</summary>

```js
function regexVar() {
	return new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/);
}
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 1 Data Types</summary>

```js
var i2 = 0;
var d2 = 0.0;
var s2 = '';

i2 = parseInt(readLine());
d2 = parseFloat(readLine());
s2 = readLine();

console.log(i + i2);

console.log((d + d2).toFixed(1));

console.log(s + s2);
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 1 Hello World</summary>

```js
function processData(inputString) {
	// This line of code prints the first line of output
	console.log('Hello, World.');

	// Write the second line of output that prints the contents of 'inputString' here.
	console.log(inputString);
}

processData('Welcome to 30 Days of Code!');
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 11 2D Arrays</summary>

```js
'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});
process.stdin.on('end', function () {
	inputString = inputString.split('\n');
	main();
});
function readLine() {
	return inputString[currentLine++];
}

// Ignore above this line
function main() {
	let arr = Array(6);
	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}
	const sumArray = [];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const topEl1 = arr[i][j];
			const topEl2 = arr[i][j + 1];
			const topEl3 = arr[i][j + 2];

			const midEl1 = arr[i + 1][j + 1];

			const botEl1 = arr[i + 2][j];
			const botEl2 = arr[i + 2][j + 1];
			const botEl3 = arr[i + 2][j + 2];
			const sum = topEl1 + topEl2 + topEl3 + midEl1 + botEl1 + botEl2 + botEl3;
			sumArray.push(sum);
		}
	}
	console.log(sumArray.sort((a, b) => b - a)[0]);
}
```

</details>

<details>
<summary>30 Days of Code - Day 12 Inheritance</summary>

```js
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => {
	_input += data;
});
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[ \n]+'));
	main();
});
function read() {
	return _input[_index++];
}

/**** Ignore above this line. ****/

// start
class Person {
	constructor(firstName, lastName, identification) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.idNumber = identification;
	}

	printPerson() {
		console.log(
			'Name: ' +
				this.lastName +
				', ' +
				this.firstName +
				'\nID: ' +
				this.idNumber
		);
	}
}

class Student extends Person {
	constructor(firstName, lastName, idNumber, scores) {
		super(firstName, lastName, idNumber, scores);
		this.scores = scores;
	}

	calculate() {
		var sum = this.scores.reduce((acc, num) => {
			acc += num;
			return acc;
		});
		var avg = sum / this.scores.length;

		if (avg >= 90) {
			return 'O';
		} else if (avg >= 80) {
			return 'E';
		} else if (avg >= 70) {
			return 'A';
		} else if (avg >= 55) {
			return 'P';
		} else if (avg >= 40) {
			return 'D';
		} else {
			return 'T';
		}
	}
}

// end

function main() {
	let firstName = read();
	let lastName = read();
	let id = +read();
	let numScores = +read();
	let testScores = new Array(numScores);

	for (var i = 0; i < numScores; i++) {
		testScores[i] = +read();
	}

	let s = new Student(firstName, lastName, id, testScores);
	s.printPerson();
	s.calculate();
	console.log('Grade: ' + s.calculate());
}
```

</details>

<details>
<summary>30 Days of Code - Day 13 Abstract Classes</summary>

```js
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => {
	_input += data;
});
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('\n'));
	main();
});
function readLine() {
	return _input[_index++];
}

/**** Ignore above this line. ****/

class Book {
	constructor(title, author) {
		if (this.constructor === Book) {
			throw new TypeError(
				'Do not attempt to directly instantiate an abstract class.'
			);
		} else {
			this.title = title;
			this.author = author;
		}
	}

	display() {
		console.log("Implement the 'display' method!");
	}
}

// Start
class MyBook extends Book {
	constructor(title, author, price) {
		super(title, author);
		this.price = price;
	}

	display() {
		console.log(`Title: ${this.title}`);
		console.log(`Author: ${this.author}`);
		console.log(`Price: ${this.price}`);
	}
}
// End

function main() {
	let title = readLine();
	let author = readLine();
	let price = +readLine();

	let book = new MyBook(title, author, price);
	book.display();
}
```

</details>

<details>
<summary>30 Days of Code - Day 15 Linked List</summary>

```js
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n');
	main();
});
function readLine() {
	return input_stdin_array[input_currentline++];
}
function Node(data) {
	this.data = data;
	this.next = null;
}
function Solution() {
	this.insert = function (head, data) {
		//complete this method
		var newNode = new Node(data);

		if (head === null || typeof head === 'undefined') {
			head = newNode;
		} else if (head.next === null) {
			head.next = newNode;
		} else {
			var next = head.next;
			while (next.next) {
				next = next.next;
			}
			next.next = newNode;
		}

		return head;
	};
	this.display = function (head) {
		var start = head;
		while (start) {
			process.stdout.write(start.data + ' ');
			start = start.next;
		}
	};
}
function main() {
	var T = parseInt(readLine());
	var head = null;
	var mylist = new Solution();
	for (i = 0; i < T; i++) {
		var data = parseInt(readLine());
		head = mylist.insert(head, data);
	}
	mylist.display(head);
}
```

</details>

<details>
<summary>30 Days of Code - Day 16 Exceptions - String to Integer</summary>

```js
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Ignore above this line

function main() {
	try {
		const S = readLine();
		!isNaN(parseInt(S)) ? console.log(parseInt(S)) : x;
	} catch (e) {
		console.log('Bad String');
	}
}
```

</details>

<details>
<summary>30 Days of Code - Day 17 More Exceptions</summary>

```js
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n');
	main();
});
function readLine() {
	return input_stdin_array[input_currentline++];
}

//Write your code here
class Calculator {
	power(n, p) {
		if (n < 0 || p < 0) {
			throw 'n and p should be non-negative';
		} else {
			return Math.pow(n, p);
		}
	}
}

function main() {
	var myCalculator = new Calculator();
	var T = parseInt(readLine());
	while (T-- > 0) {
		var num = readLine().split(' ');
		try {
			var n = parseInt(num[0]);
			var p = parseInt(num[1]);
			var ans = myCalculator.power(n, p);
			console.log(ans);
		} catch (e) {
			console.log(e);
		}
	}
}
```

</details>

<details>
<summary>30 Days of Code - Day 18 Queues and Stacks</summary>

```js
function Solution() {
	this.stack = [];
	this.queue = [];
}

Solution.prototype.pushCharacter = function pushCharacter(char) {
	this.stack.push(char);
};

Solution.prototype.enqueueCharacter = function enqueueCharacter(char) {
	this.queue.push(char);
};

Solution.prototype.popCharacter = function popCharacter() {
	return this.stack.pop();
};

Solution.prototype.dequeueCharacter = function dequeueCharacter() {
	return this.queue.shift();
};
```

</details>

<details>
<summary>30 Days of Code - Day 2 Operators</summary>

```js
function solve(meal_cost, tip_percent, tax_percent) {
	const tip = (tip_percent / 100) * meal_cost;
	const tax = (tax_percent / 100) * meal_cost;
	console.log(Math.round(tip + tax + meal_cost));
}

solve(12.0, 20, 8);
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 3 Intro to Conditional Statements</summary>

```js
function main() {
	const N = parseInt(readLine().trim(), 10);
	const isEven = N % 2 === 0;
	if (!isEven) {
		console.log('Weird');
	} else if (isEven && N <= 5 && N >= 2) {
		console.log('Not Weird');
	} else if (isEven && N <= 20 && N >= 6) {
		console.log('Weird');
	} else if (isEven && N > 20) {
		console.log('Not Weird');
	}
}
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 4 Class vs. Instance</summary>

```js
function Person(initialAge) {
	if (initialAge > 0) {
		this.age = initialAge;
	} else {
		this.age = 0;
		console.log('Age is not valid, setting age to 0.');
	}
	this.amIOld = function () {
		if (this.age < 13) {
			console.log('You are young.');
		} else if (this.age < 18) {
			console.log('You are a teenager.');
		} else {
			console.log('You are old.');
		}
	};
	this.yearPasses = function () {
		this.age++;
	};
}
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 5 Loops</summary>

```js
function main() {
	const n = parseInt(readLine().trim(), 10);
	var i = 0;
	while (i < 10) {
		i++;
		console.log(`${n} x ${i} = ${n * i}`);
	}
}
```

</details>

<details>
<summary>30 Days of Code - Day 6 Let's Review</summary>

**Input**

```js
processData('2\nHacker\nRank');
```

**Solution's**

```js
function processData(input) {
	const inputArray = input.split('\n');
	const inputStrings = inputArray.slice(1, inputArray.length);
	for (let i = 0; i < inputArray[0]; i++) {
		const str = inputStrings[i];
		const odd = [];
		const even = [];
		for (let key in str) {
			if (key % 2 == 0) {
				even.push(str[key]);
			} else {
				odd.push(str[key]);
			}
		}
		console.log(`${even.join('')} ${odd.join('')}`);
	}
}
```

</details>

<details>
<summary>30 Days of Code - Day 7 Arrays</summary>

```js
console.log(arr.reverse().join(' '));
```

<!-- **Explanation** -->

</details>

<details>
<summary>30 Days of Code - Day 8 Dictionaries and Maps</summary>

## [Day 8 Dictionaries and Maps](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true)

```js
function processData(input) {
	const phoneBook = new Map();
	const inputArray = input.split('\n');
	const numberOfPhone = inputArray.shift();
	inputArray.forEach((x, i, key) => {
		if (i < Number(numberOfPhone)) {
			const normalizedX = x.trim()?.split(' ');
			phoneBook.set(normalizedX[0], normalizedX[1]);
		} else {
			if (phoneBook.has(x)) {
				console.log(`${x}=${phoneBook.get(x)}`);
			} else {
				console.log(`Not found`);
			}
		}
	});
}
```

**Input Format**

```js
processData(
	'3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'
);
```

</details>

<details>
<summary>30 Days of Code - Day 9 Recursion 3</summary>

```js
function factorial(n) {
	if (n == 1) {
		return n;
	}

	return n * factorial(n - 1);
}
```

<!-- **Explanation** -->

</details>

<details>
<summary>The HackerRank Interview Preparation Kit - 01 Warm up Challenges Counting Valleys</summary>

```js
function countingValleys(steps, path) {
	let valleys = 0;
	let level = 0;
	for (const key in path) {
		const item = path[key];
		if (item === 'D') {
			level--;
			if (level === -1) valleys++;
		} else {
			level++;
		}
	}
	return valleys;
}
countingValleys(8, 'UDDDUDUU');
```

</details>

<details>
<summary>The HackerRank Interview Preparation Kit - 02 Warm up Challenges Sales by Match</summary>

```js
function sockMerchant(n, ar) {
	const obj = {};
	let paris = 0;
	for (let x in ar) {
		const item = ar[x];
		obj[item] = [...(obj[item] || []), item];
	}
	Object.values(obj).forEach((x) => {
		if (x.length % 2 == 0 && x.length > 1) {
			paris += x.length / 2;
		} else if (x.length > 1) {
			paris += (x.length - 1) / 2;
		}
	});

	return paris;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
```

### **Example 2:**

```js
function sockMerchant(n, ar) {
	let paris = 0;
	const hash = {};
	for (const key in ar) {
		const item = ar[key];
		if (hash[item]) {
			paris++;
			delete hash[item];
		} else {
			hash[item] = true;
		}
	}

	return paris;
}
sockMerchant(6, [10, 20, 20, 10, 30, 1]);
```

**Explanation**

n = 6 (number of socks) and ar = [10, 20, 20, 10, 30, 10] (socks colors) . The function must return 2 . Because there are 2 pairs of matching socks: one of each color. So first we create a hash table with the colors as keys and the values as true. Then we loop through the array and check if the color is in the hash table. If it is, we increment the number of pairs and delete the color from the hash table. If it's not, we add the color to the hash table.

</details>

<details>
<summary>The HackerRank Interview Preparation Kit - 03 Jumping on the Clouds</summary>

```js
function jumpingOnClouds(c) {
	let jumps = 0;
	let i = 0;
	while (i < c.length - 1) {
		if (i + 2 < c.length && c[i + 2] == 0) {
			i += 2;
		} else {
			i++;
		}
		jumps++;
	}
	return jumps;
}
```

<!-- **Explanation** -->

</details>

<details>
<summary>The HackerRank Interview Preparation Kit - 04 Repeated String</summary>

```js
function repeatedString(s, n) {
	let occurances = s.split('a').length - 1;
	let max = Math.floor(n / s.length);
	let totalAs = occurances * max;
	totalAs += s.slice(0, n % s.length).split('a').length - 1;
	return totalAs;
}
```

<!-- **Explanation** -->

</details>

# leetcode

<details>
<summary>1025. Divisor Game</summary>

```js
var divisorGame = function (n) {
	return n % 2 === 0;
};
```

</details>

<details>
<summary>Strings - 1108. Defanging an IP Address</summary>

```js
var defangIPaddr = function (address) {
	return address.replace(/\./g, '[.]');
};
```

</details>

<details>
<summary>1221 Split a String in Balanced Strings</summary>

```js
var balancedStringSplit = function (s) {
	let count = 0;
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'L') {
			count++;
		} else {
			count--;
		}
		if (count === 0) {
			result++;
		}

		console.log({ count });
	}
	return result;
};
```

</details>

<details>
<summary>Array - 1365. How Many Numbers Are Smaller Than the Current Number</summary>

```js
var smallerNumbersThanCurrent = function (nums) {
	const sorted = [...nums].sort((a, b) => a - b);
	return nums.map((n) => sorted.indexOf(n));
};
```

**Explanation:**

1. Sort the array in ascending order [9, 8, 7, 6, 5, 4, 3, 2, 1] to [1, 2, 3, 4, 5, 6, 7, 8, 9];
2. And then use `indexOf` to find the index of each element in the sorted array

</details>

<details>
<summary>Array - 1431. Kids With the Greatest Number of Candies</summary>

```js
var kidsWithCandies = function (candies, extraCandies) {
	let max = Math.max(...candies);
	return candies.map((candy) => candy + extraCandies >= max);
};
```

**Explanation:**

- Find the maximum number of candies
- Then, for each kid, check if the kid has the maximum number of candies or not

</details>

<details>
<summary>Array - 1470. Shuffle the Array</summary>

```js
var shuffle = function (nums, n) {
	const arr1 = nums.slice(0, n);
	const arr2 = nums.slice(n, nums.length);
	return arr1
		.map((x, i) => {
			return [x, arr2[i]];
		})
		.flat(1);
};
```

</details>

<details>
<summary>Array - 1480 Running Sum of 1d Array</summary>

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	const arr = [];
	for (let i = 0; i < nums.length; i++) {
		arr.push(nums.slice(0, i + 1).reduce((acc, curr) => acc + curr, 0));
	}
	return arr;
};
```

</details>

<details>
<summary>Array - 1512. Number of Good Pairs</summary>

```js
var numIdenticalPairs = function (nums) {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		const iElement = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const jElement = nums[j];
			if (iElement === jElement) {
				counter++;
			}
		}
	}
	return counter;
};
```

</details>

<details>
<summary>1656. Design an Ordered Stream</summary>

```js
var OrderedStream = function (n) {
	this.size = 0;
	this.table = new Array(n);
};

OrderedStream.prototype.insert = function (idKey, value) {
	this.table[idKey - 1] = value;

	let result = [];
	while (this.table[this.size] !== undefined) {
		result.push(this.table[this.size]);
		this.size++;
	}
	return result;
};
```

</details>

<details>
<summary>Array - 1672. Richest Customer Wealth</summary>

```js
var maximumWealth = function (accounts) {
	const r = accounts.map((usr) => usr.reduce((acc, curr) => acc + curr, 0));
	return Math.max(...r);
};
```

</details>

<details>
<summary>Strings - 1678. Goal Parser Interpretation</summary>

```js
var interpret = function (command) {
	command.split('').map((x) => {
		command = command.replace('()', 'o');
		command = command.replace('(al)', 'al');
	});
	return command;
};
```

</details>

<details>
<summary>1832. Check if the Sentence Is Pangram</summary>

```js
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < alphabet.length; i++) {
		if (!sentence.includes(alphabet[i])) {
			return false;
		}
	}
	return true;
};
```

</details>

<details>
<summary>1859 Sorting the Sentence</summary>

```js
var sortSentence = function (s) {
	return s
		.split(' ')
		.sort((a, b) => a[a.length - 1] - b[b.length - 1])
		.map((w) => w.slice(0, -1))
		.join(' ');
};
```

</details>

<details>
<summary>Array - 1920 Build Array from Permutation</summary>

```js
var buildArray = function (nums) {
	let newArray = [];
	for (let i = 0; i < nums.length; i++) {
		const index = nums[i];
		newArray.push(nums[index]);
	}
	return newArray;
};
```

</details>

<details>
<summary>Array - 1929 Concatenation of Array</summary>

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	return nums.concat(nums);
};
```

</details>

<details>
<summary>Array - 2011. Final Value of Variable After Performing Operations</summary>

```js
var finalValueAfterOperations = function (operations) {
	let x = 0;
	for (let i = 0; i < operations.length; i++) {
		const element = operations[i];
		if (element.includes('--')) {
			x--;
		} else if (element.includes('++')) {
			x++;
		}
	}
	return x;
};
```

</details>

<details>
<summary>Array - 2114. Maximum Number of Words Found in Sentences</summary>

```js
var mostWordsFound = function (sentences) {
	return Math.max(
		...sentences.map((x) => {
			return x.split(' ').length;
		})
	);
};
```

</details>

<details>
<summary>2160. Minimum Sum of Four Digit Number After Splitting Digits</summary>

```js
var minimumSum = function (num) {
	let array = String(num).split('');
	let sortedarray = array.sort();
	return (
		Number(sortedarray[0] + sortedarray[3]) +
		Number(sortedarray[1] + sortedarray[2])
	);
};
```

</details>

<details>
<summary>2325. Decode the Message</summary>

```js
var decodeMessage = function (key, message) {
	const alphabt = 'abcdefghijklmnopqrstuvwxyz';
	const map = new Map();
	key = [...new Set(key.split(''))].join('');
	key = key.replace(/ /g, '');

	for (let i = 0; i < alphabt.length; i++) {
		map.set(key[i], alphabt[i]);
	}

	let result = '';
	for (let i = 0; i < message.length; i++) {
		const key = message[i];
		const value = map.get(key);
		if (!value) {
			result += ' ';
		} else {
			result += value;
		}
	}
	return result;
};
```

</details>

<details>
<summary>2418 Sort the People</summary>

```js
var sortPeople = function (names, heights) {
	const normalize = names.map((x, i) => ({ name: x, height: heights[i] }));
	return normalize.sort((a, b) => b.height - a.height).map((x) => x.name);
};
```

</details>

<details>
<summary>2529 Maximum Count of Positive Integer and Negative Integer</summary>

```js
var maximumCount = function (nums) {
	let nagitive = 0;
	let positive = 0;

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		if (element > 0) {
			positive++;
		} else if (element < 0) {
			nagitive++;
		}
	}

	if (nagitive > positive) return nagitive;

	return positive;
};
```

</details>

<details>
<summary>509. Fibonacci Number</summary>

```js
var fib = function (n) {
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
};
```

</details>

<details>
<summary>Strings - 771. Jewels and Stones</summary>

```js
var numJewelsInStones = function (jewels, stones) {
	let count = 0;
	stones.split('').map((x) => jewels.includes(x) && count++);
	return count;
};
```

</details>

<details>
<summary>9 Palindrome Number</summary>

```js
var isPalindrome = function (x) {
	return String(x).split('').reverse().join('') === String(x);
};
```

</details>
