 ## Table of Contents

 - ### [10 Days of Javascript](#10-days-of-javascript)
   - [Day 0 Data Types](#day-0-data-types)
   - [Day 0 Hello, World!](#day-0-hello-world)
   - [Day 1 Arithmetic Operators](#day-1-arithmetic-operators)
   - [Day 1 Functions](#day-1-functions)
   - [Day 1 Let and Const](#day-1-let-and-const)
   - [Day 2 Conditional Statements If-Else](#day-2-conditional-statements-if-else)
   - [Day 2 Conditional Statements Switch](#day-2-conditional-statements-switch)
   - [Day 2 Loops](#day-2-loops)
   - [Day 3 Arrays](#day-3-arrays)
   - [Day 3 Throw](#day-3-throw)
   - [Day 3 Try, Catch, and Finally](#day-3-try-catch-and-finally)
   - [Day 4 Classes](#day-4-classes)
   - [Day 4 Count Objects](#day-4-count-objects)
   - [Day 4 Create a Rectangle Object](#day-4-create-a-rectangle-object)
   - [Day 5 Arrow Functions](#day-5-arrow-functions)
   - [Day 5 Inheritance](#day-5-inheritance)
   - [Day 5 Template Literals](#day-5-template-literals)
   - [Day 6 JavaScript Dates](#day-6-javascript-dates)
   - [Day 7 Regular Expressions II](#day-7-regular-expressions-ii)
- ### [30 Days of Code](#30-days-of-code)
   - [Day 0 of 30 Hello World](#day-0-of-30-hello-world)
- ### [The HackerRank Interview Preparation Kit ](#the-hackerrank-interview-preparation-kit)
   - [Warm-up Challenges Sales by Match](#warm-up-challenges-sales-by-match)
  <br/><br/><br/><br/> 

 # 10 Days of Javascript
 
 ## [Day 0 Data Types](https://www.hackerrank.com/challenges/js10-data-types/problem?isFullScreen=true)

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
  
### **Explanation**

First we convert the secondInteger and secondDecimal to numbers using the Number function. Then we add them together and print the result to the console. In the next line we simply concatenate the firstString and secondString and print the result to the console.
 

   
 
## [Day 0: Hello, World!](https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true)
### **Answer:**

 ```js
    function greeting(parameterVariable) {
        console.log('Hello, World!')
        console.log(parameterVariable)
    }
  ```
  
**Explanation**

The first line of code prints 'Hello, World!' to the console. The second line of code prints the value of 'parameterVariable' to the console. The parameterVariable is a string of text.
 

   
 ## [Day 1 Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem?isFullScreen=true)
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
  
### **Explanation**

We can get the area of a rectangle by multiplying the length by the width. The getArea function takes two parameters, length and width, and returns the area of the rectangle. We can get the perimeter of a rectangle by adding the length and width together and multiplying by two. The getPerimeter function takes two parameters, length and width, and returns the perimeter of the rectangle.

 

   
 ## [Day 1 Functions](https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true)
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
  
### **Explanation**

The function is recursive. It calls itself until it reaches the base case. In this case, n === 1, which returns 1. n * factorial(n - 1) is the recursive call. Since n - 1 === 0, it returns 1. n * factorial(n - 1) === n * 1 === n. 

   
 ## [Day 1 Let and Const](https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true)
### **Answer:**

 ```js
    const PI = Math.PI
    const r = readLine() // 2.6
    var area = parseFloat(PI * r * r)
    console.log(area)

    var peri = parseFloat(2 * PI * r)
    console.log(peri)
  ```
   

   
 
## [Day 2 Conditional Statements: If-Else](https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true)

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
 

   
 ## [Day 2 Conditional Statements Switch](https://www.hackerrank.com/challenges/js10-if-else/problem?isFullScreen=true)

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
  
### **Explanation**

The first character of the string is a, so we return A.  The rest of the string is empty, so we return A.
 

   
 ## [Day 2 Loops](https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true)

### **Answer:**

 ```js
   function vowelsAndConsonants(s) {
    const vowelList = 'aeiouAEIOU';
      for(let i = 0; i < s.length; i++){
          if(vowelList.indexOf(s[i]) !== -1 ){
              console.log(s[i])
          }
      }
      for(let i = 0; i < s.length; i++){
          if(vowelList.indexOf(s[i]) == -1 ){
              console.log(s[i])
          }
      }

  }
  ```
  
 

   
 ## [Day 3 Arrays](https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true)
### **Answer:**

 ```js
   function getSecondLargest(nums) {
    let sortedNums = nums.sort((a, b) => a - b)
    const res = Array(...new Set([...sortedNums]))
    return res[res.length - 2]
  }

  console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

  ```
  
### **Explanation**

The largest number is 10, and the second largest number is 9. Therefore, return 9. First, we sort the array in ascending order, Since the array is sorted in ascending order, the second largest number is the last second element in the array. 

   
 ## [Day 3 Throw](https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true)
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
  
### **Explanation**
The if statement checks if 'a' is greater than 0. If it is, the function returns 'YES'. If 'a' is 0, the function throws an error with the message 'Zero Error'. If 'a' is less than 0, the function throws an error with the message 'Negative Error'. The else statement is not needed because the function will never reach the else statement if 'a' is 0 or greater than 0.
 

   
 ## [Day 3 Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true)

### **Answer:**

 ```js
   function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
      } catch (e) {
          console.log(e.message);
          console.log(s);
      }
  }

  ```
 

   
 
## [Day 4 Classes](https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true)

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
 

   
 ## [Day 4 Count Objects](https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true)

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
 

   
 ## [Day 4 Create a Rectangle Object](https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true)

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
  
 

   
 
## [Day 5 Arrow Functions](https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true)

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
 

   
 
## [Day 5 Inheritance](https://www.hackerrank.com/challenges/js10-inheritance/problem?isFullScreen=true)

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

   
 
## [Day 5 Template Literals](https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true)

### **Answer:**

```js
function sides(literals, ...expressions) {
 const [a, p] = expressions
 const value = Math.sqrt(p ** 2 - 16 * a)

 return [(p - value) / 4, (p + value) / 4]
}
```
 

   
 
## [Day 6 JavaScript Dates](https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true)

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
 

   
 
## [Day 7 Regular Expressions II](https://www.hackerrank.com/challenges/js10-regexp-2/problem?isFullScreen=true)

### **Answer:**

```js
function regexVar() {
	return new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/)
}
```

<!-- ### **Explanation** -->
 

# 30 Days of Code
 
 
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

<!-- ### **Explanation** -->
 

# The HackerRank Interview Preparation Kit 
 
 
## [Warm-up Challenges Sales by Match](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

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

### **Explanation**

n = 6 (number of socks) and ar = [10, 20, 20, 10, 30, 10] (socks colors) . The function must return 2 . Because there are 2 pairs of matching socks: one of each color. So first we create a hash table with the colors as keys and the values as true. Then we loop through the array and check if the color is in the hash table. If it is, we increment the number of pairs and delete the color from the hash table. If it's not, we add the color to the hash table.
 

