// object shorthand assignment

let name = 'noona';
let age = 17;

// let person = {
//     name: name,
//     age: age,
// };

let person = {
    name,
    age,
};

console.log(person);
// ### ES6 : 1. object shorthand assignment
// 여기까지가 일반적인 방법
// let person 이하 name: name 이 같고 age: age가 같은 경우
// 즉 변수와 이름이 같은 경우 줄여서 쓸 수 있다.

// ### ES6 : 2. 디스트럭처팅 (Destructuring)
// 변수에서 값을 뽑아내고 싶다면
let secondPerson = {
    name: 'noona',
    age: 20,
};
