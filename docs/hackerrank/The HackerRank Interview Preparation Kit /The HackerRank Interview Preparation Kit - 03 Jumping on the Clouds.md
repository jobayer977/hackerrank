---
title: The HackerRank Interview Preparation Kit - 03 Jumping on the Clouds
Problem: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
---

### **Solution:**

```js
function jumpingOnClouds(c) {
	let jumps = 0
	let i = 0
	while (i < c.length - 1) {
		if (i + 2 < c.length && c[i + 2] == 0) {
			i += 2
		} else {
			i++
		}
		jumps++
	}
	return jumps
}
```

<!-- **Explanation** -->
