---
title: Jumping on the Clouds
Problem: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
---

## [Jumping on the Clouds](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

### **Answer:**

```js
function jumpingOnClouds(c) {
 let jumps = 0
 let i = 0
 while (i < c.length) {
  if (i + 2 < c.length && c[i + 2] === 0) {
   i += 2
  } else {
   i++
  }
  console.log(i)
  jumps++
 }
 return jumps
}
```

<!-- ### **Explanation** -->
