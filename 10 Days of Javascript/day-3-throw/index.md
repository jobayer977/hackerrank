---
title:  Day 3 Throw
Problem: https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true
---
## [Day 3 Throw](https://www.hackerrank.com/challenges/js10-throw/problem?isFullScreen=true)

 ```js
   function isPositive(a) {
    if (a > 0) {
      return 'YES'
    } else if (a === 0) {
      throw new Error('Zero Error')
    } else {
      throw new Error('Negative Error')
    }
  }
  ```
  
### **Explanation**
The if statement checks if 'a' is greater than 0. If it is, the function returns 'YES'. If 'a' is 0, the function throws an error with the message 'Zero Error'. If 'a' is less than 0, the function throws an error with the message 'Negative Error'. The else statement is not needed because the function will never reach the else statement if 'a' is 0 or greater than 0.
