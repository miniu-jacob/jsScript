'use strict';

/** 자바스크립트는 하나씩 동기적으로 실행된다.  */
console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
// console.log('2');
console.log('3');
