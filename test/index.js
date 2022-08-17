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
