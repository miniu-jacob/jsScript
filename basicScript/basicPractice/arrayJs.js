// ### 09 : 배열의 요소 테스트 - 적어도 하나는 통과하는지
// 주어진 함수가 true를 반환하면 true / 아니면 false

/*
// 화살표 함수
some((element) => { /* … * })
some((element, index) => { /* … * })
some((element, index, array) => { /* … * })

// 콜백 함수
some(callbackFn)
some(callbackFn, thisArg)

// 인라인 콜백 함수
some(function (element) { /* … * })
some(function (element, index) { /* … * })
some(function (element, index, array) { /* … * })
some(function (element, index, array) { /* … * }, thisArg)
*/
/*
function isBiggerThan10(element, index, array) {
    return element > 10;
}

console.log([2, 5, 8, 1, 3].some(isBiggerThan10));
const result = [12, 5, 8, 1, 4].some(isBiggerThan10);
console.log(result);

// 짧게 표현해 보기 > 화살표 함수
// 1. function을 없앤다. () => {}
// 결과가 한문장일 경우 return을 삭제하고 {}를 뺄 수 있다.
(element) => element > 10;
(x) => x > 10;

console.log(
    '화살표 함수: ',
    [2, 5, 8, 1, 4].some((x) => x > 10)
);
*/

// ### 10. map() => 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// 구문:  arr.map(callback(currentValue[, index[, array]])[, thisArg])
const array1 = [1, 4, 9, 16];
const mapping = array1.map((x) => x * 2);
console.log('기존 배열: ', array1);
console.log('매핑 후(2배 이벤트): ', mapping);
