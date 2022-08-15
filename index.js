/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
	if (a > 0) {
		return 'YES'
	} else if (a === 0) {
		throw new Error('Zero Error')
	} else {
		throw new Error('Negative Error')
	}
}

// Explanation
// The if statement checks if 'a' is greater than 0. If it is, the function returns 'YES'. If 'a' is 0, the function throws an error with the message 'Zero Error'. If 'a' is less than 0, the function throws an error with the message 'Negative Error'. The else statement is not needed because the function will never reach the else statement if 'a' is 0 or greater than 0.

/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
	console.log('Hello, World!')
	console.log(parameterVariable)
}

// Explanation
// The first line of code prints 'Hello, World!' to the console. The second line of code prints the value of 'parameterVariable' to the console. The parameterVariable is a string of text.
