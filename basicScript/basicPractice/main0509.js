/* 05 
    // 05. shift()
    // 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환
    // const array1 = ['apple', 'banana', 'mango', 'watermelon', 'pineapple'];
    const firstElement = array1.shift();
    console.log(firstElement);
    console.log(array1);

    // 반복문 안에서 하나씩 제거할 때도 사용한다.
    // 빈 배열의 경우 undefined를 반환한다.
    const array2 = ['포도'];
    console.log('array2의 배열 요소: ', array2);
    console.log('array2의 배열 개수', array2.length);
    array2.shift();
    console.log(array2.shift());

    while ((i = array1.shift()) !== undefined) {
        console.log(i);
    }
*/
/* 06
// 06. include() 배열에 특정 값이 포함되어 있는지를 판단하여 true / false를 반환
// includes(searchElement)
// includes(searchElement, fromIndex)
const fruits = ['apple', 'banana', 'mango', 'watermelon', 'pineapple'];

console.log(fruits);
console.log('바나나가 있다? ', fruits.includes('banana'));
console.log('사과가 있다? ', fruits.includes('apple'));
console.log('복숭아가 있다? ', fruits.includes('peach'));

console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log(['1', '2', '3'].includes(3)); // false >> 이유는 숫자 3을 문자열 1,2,3 사이에서 찾으려 했기 때문이다.
*/

/* 07
// ### 07. slice() => 배열의 [시작] 부터 [지정한 만큼] (지정한 마지막은 포함되지 않음) 에 대한 복사본을 새로운 배열 객체로 반환함. 원본 배열은 변경되지 않는다.

const animals = ['사자', '호랑이', '인도코끼리', '원숭이', '닭', '두꺼비'];
console.log('전체 생물: ', animals);
console.log('모두 몇 종류? ', animals.length, '종류');
console.log('닭은 몇번?: ', animals.indexOf('닭'));
console.log('호랑이 몇번?: ', animals.indexOf('호랑이'));

console.log('두꺼비가 있나? ', animals.includes('두꺼비'));
console.log('원숭이 몇번?: ', animals.indexOf('원숭이'));
console.log('1번부터 3번까지 슬라이스: ', animals.slice(1, 3));
// 사자[0], 호랑이[1], 인도코끼리[2], 원숭이[3]
// 1번인 호랑이 앞에서부터 (사자와 호랑이 사이)  3번인 원숭이 (인도코끼리와 원숭이 사이)
//  까지를 슬라이스 했으니 호랑이와 인도코끼리만 남고 그 복사본이 배열로 반환된다.
console.log('1번만 슬라이스: ', animals.slice(1));
// 호랑이 앞에서 칼을 댔으니 사자만 뺀 나머지가 배열로 반환되었다.
console.log(animals);
*/

/* 08
// ### 08. splice() => 배열의 기존 요소를 삭제(delete), 교체(replace), 또는 새 요소를 추가(insert) 하여 배열의 내용을 변경한다.
const raceHorses = ['0번마', '1번마', '2번마', '3번마', '4번마'];
console.log('말번호: ', raceHorses);
raceHorses.splice(4, 0, '5번마');
console.log(
    `5번마가 게임에 참가합니다. 레인은 ${raceHorses.indexOf('5번마')}번입니다. `
);
console.log('말번호: ', raceHorses);
console.log(`5번말이 ${raceHorses.indexOf('5번마')}번 레인에 들어갔네요.`);
console.log(`5번마를 ${raceHorses.indexOf('5번마')}번 레인에서 빼겠습니다. `);
raceHorses.splice(4, 1);
console.log('말번호: ', raceHorses);

console.log(
    `5번마가 게임에 참가합니다. 레인은 ${
        raceHorses.indexOf('4번마') + 1
    }번입니다. `
);
raceHorses.splice(5, 0, '5번마');

console.log('말번호: ', raceHorses);
console.log(`${raceHorses.splice(0, 1, '7번마')}`);
console.log(
    `0번마가 7번마로 교체됩니다. 레인은 ${raceHorses.indexOf('7번마')}번입니다.`
);
console.log('말번호: ', raceHorses);
*/ 