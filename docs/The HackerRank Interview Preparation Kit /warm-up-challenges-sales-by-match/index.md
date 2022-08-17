---
title: Warm up Challenges Sales by Match
Problem: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
---

## [Warm up Challenges Sales by Match](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

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
