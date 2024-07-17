// 배열과 같이 사용할 수 있는 함수들

// fruits = ['apple', 'banana', 'orange', 'mango'];

/* 01
    // ### 01. pop() => 배열의 마지막 요소를 제거하고 그 요소를 반환함
    // 여기서는 fruits 요소 중의 마지막 요소인 mango를 삭제하고 반환
    // 따라서 popItem 변수에 mango가 들어가게 됨
    // 기존 fruits 배열에는 초기 4개에서 이제 3개만 남게 됨
    const popItem = fruits.pop();
    console.log(popItem);
    console.log(fruits);
*/

/* 02
    // ### 02. 배열의 개수 확인 => length
    const index = fruits.length;
    console.log('fruits 배열의 개수: ', index, '개');
*/

/* 03
    // ### 03. 요소(스트링)의 인덱스 번호를 알아낸다.
    const indexNum = fruits.indexOf('orange');
    console.log('fruits의 배열 요소: ', fruits);
    console.log('orange의 인덱스 번호 ', indexNum);
*/

/* 04
// ### 04. 배열에 요소 추가
const addItem = fruits.push('watermelon');
const itemList = fruits.push('pineapple', 'durian');
console.log(addItem);
console.log(itemList);
console.log(fruits);
// 배열을 합치는 경우에도 사용할 수 있다.
const vegetables = ['양배추', '피망'];
const moreVegs = ['오이', '당근'];
vegetables.push(...moreVegs);
console.log(vegetables);

// 또는 concat() 함수도 이용할 수 있다.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

/* 
사용법
push()
push(element1)
push(element1, element2)
push(element1, element2, /* …,  elementN)
*/
