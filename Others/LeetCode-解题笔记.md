---
title: LeetCode 解题笔记 ( JavaScript )
date: 2018-05-13 10:39:15
tags: [LeetCode, 算法]
---

# LeetCode 解题笔记

[TOC]

## Easy

### 7. [Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)

解题思路：从个位开始从右至左依次取一位数，当取下一位数时，上一次取值向左移一位，相当于乘 10，再加上此次取值。例如对 123 反转，首先取得个位的 3，再取百位的 2 时，3 向左移一位，相当于乘 10，等于 30，再加上 2 等于 32，再取千位的 1 时，前面的结果 32 向左移一位乘 10 等于 320，再加上 1 等于 321。321 即为最终结果。

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    while(x !== 0) {
        res = res*10 + x%10;
        x = parseInt(x/10, 10);
    }
    // 判断结果是否越界
    if(res >= (-(Math.pow(2, 31))) && res <= (Math.pow(2, 31) - 1)) {
        return res;
    } else {
        return 0;
    }
};
```

优化后的代码

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0;
    var result = 0;
    
    x = Math.abs(x);
    
    while(x) {
        var lastDigit = x%10;
        result *= 10;
        result += lastDigit;
        x = parseInt(x/10);
    }

    result = isNeg ? -result : result;
    
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};
```

###9. [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/) 

方案一（很丑）：将数字转为字符串，再将字符分割为数组，对数组反转后转为字符串，判断反转前后字符串是否相同。

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    var reversed = str.split('').reverse().join('');
    return str === reversed;
};
```

方案二（优化后）：负数肯定不是可反转数；正数一位数肯定是可反转数；将数字 x 转为字符后，分别取得字符从左至右和从右至左的第 i 个字符，只要这两个字符不同 x 就不可反转，则返回 false，若相同则继续判断下一组，直到取完最后一个字符后若还是不存在不同则返回 tue。

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xS = x.toString();
    if(xS.length == 1) {
        return true;
    }
    var i = xS.length - 1;
    var k = 0;
    while(i > k) {
         if(xS[i] != xS[k]){
            return false
        }
        i--;
        k++;
    }
    
    return true;
};
```

