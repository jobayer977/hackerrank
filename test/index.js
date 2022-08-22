function main() {
	const n = parseInt(readLine().trim(), 10)
	var i = 0
	while (i < 10) {
		i++
		console.log(`${n} x ${i} = ${n * i}`)
	}
}
