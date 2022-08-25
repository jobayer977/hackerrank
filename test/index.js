function processData(input) {
	const phoneBook = new Map()
	const inputes = []
	const inputStr = input.split('\n')
	const inputOptions = input.split('\n').slice(1, inputStr.length)
	inputOptions.forEach((x) => {
		const _x = x.trim().split(' ')
		console.log(_x)
		if (_x.length === 1) {
			inputes.push(_x[0])
		}
		if (_x.length === 2) {
			phoneBook.set(_x[0], _x[1])
		}
	})

	phoneBook.forEach((x, key) => {
		if (inputes.includes(key)) console.log(`${key}=${x}`)
		if (!inputes.includes(key)) console.log(`Not found`)
	})
}
processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry')
