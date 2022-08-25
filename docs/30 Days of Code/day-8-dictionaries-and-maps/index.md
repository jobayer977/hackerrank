---
title: Day 8 Dictionaries and Maps
Problem: https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true
---

## [Day 8 Dictionaries and Maps](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true)

### **Answer:**

```js
function processData(input) {
 const phoneBook = new Map()
 const inputArray = input.split('\n')
 const numberOfPhone = inputArray.shift()
 inputArray.forEach((x, i, key) => {
  if (i < Number(numberOfPhone)) {
   const normalizedX = x.trim()?.split(' ')
   phoneBook.set(normalizedX[0], normalizedX[1])
  } else {
   if (phoneBook.has(x)) {
    console.log(`${x}=${phoneBook.get(x)}`)
   } else {
    console.log(`Not found`)
   }
  }
 })
}

```

**Input Format**

```js
processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry')

```
