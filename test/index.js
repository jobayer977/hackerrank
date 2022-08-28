var arr = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
]

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
