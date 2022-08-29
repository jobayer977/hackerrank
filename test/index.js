class Person {
	constructor(firstName, lastName, id, scores) {}

	char() {
		console.log({ firstName, lastName, id, scores })
	}
}

class Student extends Person {
	constructor() {
		super()
	}
}
