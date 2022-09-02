---
title: The HackerRank Interview Preparation Kit - 04 Repeated String
Problem: https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
---

**Solution:**

```js
function repeatedString(s, n) {
	let occurances = s.split('a').length - 1
	let max = Math.floor(n / s.length)
	let totalAs = occurances * max
	totalAs += s.slice(0, n % s.length).split('a').length - 1
	return totalAs
}
```

<!-- **Explanation** -->
