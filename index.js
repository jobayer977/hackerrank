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
