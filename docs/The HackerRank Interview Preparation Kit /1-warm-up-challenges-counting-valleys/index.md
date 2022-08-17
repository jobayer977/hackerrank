---
title: Warm up Challenges Counting Valleys
Problem: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
---

## [Warm up Challenges Sales by Match](https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
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
```
