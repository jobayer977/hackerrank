---
title: 30 Days of Code - Day 18 Queues and Stacks
Problem: https://www.hackerrank.com/challenges/30-queues-stacks/problem?isFullScreen=true
---

**Solution:**

```js
function Solution() {
	this.stack = []
	this.queue = []
}

Solution.prototype.pushCharacter = function pushCharacter(char) {
	this.stack.push(char)
}

Solution.prototype.enqueueCharacter = function enqueueCharacter(char) {
	this.queue.push(char)
}

Solution.prototype.popCharacter = function popCharacter() {
	return this.stack.pop()
}

Solution.prototype.dequeueCharacter = function dequeueCharacter() {
	return this.queue.shift()
}
```
