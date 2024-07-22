const animals = [
    { name: '사자', size: '크다', isAggressive: true, weight: 200 },
    { name: '원숭이', size: '중간', isAggressive: true, weight: 30 },
    { name: '고양이', size: '약간작음', isAggressive: false, weight: 10 },
    { name: '라쿤', size: '작음', isAggressive: false, weight: 2 },
    { name: '강아지', size: '작음', isAggressive: false, weight: 5 },
];

const animal = '사자';
const food = animal === '원숭이' ? 'meat' : 'apple';
console.log(food);

// for (let i = 0; i < animals.length; i++) {
//     console.log('동물 이름: ', animals[i].name);
// }

// for (let animal of animals) {
//     console.log(animal.name, ': ', animal.size);
// }

// #####  forEach, map, filter, reduce #####
// ---------------------------------------------------------
// 1. forEach: 단순한 반복문 - 부가 기능은 없다.
// ---------------------------------------------------------
// 두번째 인자로 인덱스를 넣어줄 수 있다.
/* 사용법

    ForEach(item, index){} ----- animals.forEach(function (animal) {});
        animals.forEach(function (animal, indexNum) {
            console.log(animal.size, indexNum);
        });
*/

// ---------------------------------------------------------
// 2. map: 어떤 배열을 다른 형태의 배열로 재생산할때 사용하는 함수
// ---------------------------------------------------------
/* 사용법 
    animalsNames 라는 배열을 새로 하나 만들고 animals. 배열애
    map() 함수를 사용한다. 이 때 map 안에 인자로 함수를 사용한다. 
    또한 return 을 받을 값을 animal.name 즉 animal 배열 안에 이름을 리턴받는다. 
    animals.map(function (animal){
    리턴을 하지 않으면 배열을 반환하지만 undefined 라고 출력된다. 
    });

        const animalsNames = animals.map(function (animal) {
            animal.name;
        });
        console.log(animalsNames)
    
    ex) 예를 들어 이름은 뭐고 큽니다. 라는 문장 형태로 주기 위해서는 백틱을 이용할 수 있다. 
*/
// const animalsNames = animals.map(function (animal) {
//     return `동물의 이름은 ${animal.name}이고 크기는 ${animal.size} 입니다.`;
// });
// console.log(animalsNames);

// ---------------------------------------------------------
// 3. filter: 배열 안에서 특정 조건을 가진 아이템들만 뽑아내는 반복문
// ### 조건을 만족하는 배열을 리턴한다.
// ---------------------------------------------------------

/* 사용법
    animals라는 배열을 재생산 할 것이기 때문에 animals.[배열] 즉
    animals.filter()를 사용한다. 

// const smallAnimals = animals.filter(function (item) {
//     return item.size === '작음';
// });
// console.log(smallAnimals);

*/
// item.size 즉 animals 배열에 있는 각 요소마다 요소.사이즈='작음' 요소들을 찾아서 smallAnimals 라는 배열에 넣는다.

// ---------------------------------------------------------
// 4. reduce: 배열 안의 값들의 합
// ###
// ---------------------------------------------------------

/* 
const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce(function (item, curr) {
    console.log(item, curr);
    return item + curr;
});

console.log(total);
*/

// const totalWeight = animals.reduce(function (acc, cur) {
//     return acc + cur.weight;
// }, 0);

// console.log(totalWeight);
