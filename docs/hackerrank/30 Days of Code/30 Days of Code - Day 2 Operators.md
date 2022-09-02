---
title: 30 Days of Code - Day 2 Operators
Problem: https://www.hackerrank.com/challenges/30-operators/problem?isFullScreen=true
---

**Solution:**

```js
function solve(meal_cost, tip_percent, tax_percent) {
	const tip = (tip_percent / 100) * meal_cost
	const tax = (tax_percent / 100) * meal_cost
	console.log(Math.round(tip + tax + meal_cost))
}

solve(12.0, 20, 8)
```

<!-- **Explanation** -->
