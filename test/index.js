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
