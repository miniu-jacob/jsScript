// const fruits = ['apple', 'banana', 'orange'];
// const result = fruits.join(' watermelon ');
// const result = fruits.join(' ');
// join

// console.log(result);

// ### 01: 배열을 문자열로 반환 .join() >> 구분자가 없으면 , 로 구분된다.
// ### 02: 스트링을 배열로 변환한다.
// - 배열로 반환할 때 splitter (String)으로 분리해서 배열에 넣는다.

/* ### 02 - Practice 
const fruits = '🍎, 🍌, 🍋, 🍉';
const result = fruits.split(',', 2);

console.log(result);
console.log(result[0]);
*/

// ### 03: 주어진 배열의 순서를 거꾸로 만들기
/* ### 03 - Practice 
 - array.reverse를 이용하면 배열의 순서를 바꾸지만 array 자체를 변형시킨다. 
const array = [1, 2, 3, 4, 5];
const result = array.reverse(array);

console.log(array);
console.log(array);
*/

// ### 04: 첫번째와 두번째 요소를 제외한 나머지 요소들로 새로운 array를 만들어라.
// ### splice를 쓰면 index[0]=1, index[1]=2, index[2]=3 즉
// 3부터 3개를 삭제한다. 그리고 result에는 삭제된 배열의 항목이 반환된다.
// 기존 array에는 삭제하고 남은 1,2 과 들어 있다.

// splice또한 reverse와 마찬가지로 원본 array를 변형시킨다. 따라서 새로운 array를 만들기에 적합하지 않다.
// 하지만 slice는 index[M] 부터 index[N] 까지를 복사한다.
// 따라서 array.slice(2,5) 라면 index[2] 인 3부터 index[5]인데 마지막은 제외 즉 index[4]까지 반환한다.
// array.slice() 원본 배열을 변형시키지 않는다.
/* 
const array = [1, 2, 3, 4, 5];
// const result = array.splice(2, 3);
const result = array.slice(2, 5);
console.log(result);
console.log(array);
*/

// ### 05: 학생의 score 점수가 90점인 학생을 찾기
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 실패한 다음 코드
// const result = students.find(Student.score === 90);
// find() 함수는 array에서 찾는다. 따라서 array 인 students 에서 찾아야 한다.
/*
find<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    */
// find가 정의된 내용을 보니 => 가 있네? 함수네?
// 인자는
// Value is S >>> 값이 불리언 값 (true, false)로 리턴되네
// array 안에서 첫번째로 찾아진 아이를 리턴한다. 찾지 못하면 undefine 을 반환

// const result = students.find(() => {});
// 이걸 다시 쓰면 students. 배열에서 찾아서 .find ( 함수써라 function () {} )
// 함수 (function () 안에는 Student 클래스에 있는 모든 내용을 찾으니)
// 이름은 정하기 나름 (value, item, student 등 )
// 따라서 함수 안에서 function (value 라는 이름과 인덱스(index)를 인자로 주자)
// 이때는 result를 출력하는게 아니라 value값과 index를 먼저 출력해 본다.
// const result = students.find(function (value, index) {
//     console.log(value, index);
//     return value.score === 90;
// console.log(value, index);
// });
// 결과는 object 즉 객체가 출력되므로 객체의 항목을 리턴해 준다. 왜? 함수니까
// index값은 확인용 따라서 삭제 가능
// 또한
// function () { } 이것은 >>
// () => {} 으로 변환이 가능하다.
// const result = students.find((value) => value.score === 90);
// find 함수로 객체의 요소에 값을 찾는데 그 값의 인자는 value라는 값이고
// 들아온 값이 value이든 item이든, 뭐든 value.score 즉, .score라는 값을 찾는다.
// 그리고 그 값의 결과가 90이면 해당 배열을 리턴한다.
// 없다면 다음 배열 요소, 없다면 다음.. 있으면 리턴하고 끝
// console.log(result);

// ### 06: 학생 중에 수업을 등록한 학생의 배열
// 즉 students 배열에 있는 인스턴스에 enrolled 값이 true애들
/*
 filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
 value: T <----- value가 true인 애들만 반환
 즉 filter()를 하는데 각각에 value값이 전달이 되면 value에 enrolled의 여부를 체크한다. 
*/
// const result = students.filter((value) => value.enrolled);
// console.log(result);
// console.log(value, index);

// ### 07: 학생들의 점수만 뽑아와서 배열을 만든다.
// const result = students.map((value) => value.score);
// console.log(result);

/* 예를 들면  numbers라는 배열을 만들고 두배로 만들어 주는 변수를 정의한 후에 
const numbers = [1,2,3,4,5];
const doubleNumber = numbers.map() 함수를 사용한다. 
이때, 콜백함수를 이용해서 각 배열에 있는 항목마다 * 2를 해주면 
const doubleNumber = numbers.map((value)=> value * 2);
그러면 consloe.log(doubleNumber) 를 했을 때 [2, 4, 6, 8, 10]
이 배열로 리턴된다. 
*/

// ### 08: 학생들 점수가 50점보다 작은 학생이 있는지 없는지
// 45점인 학생이 있으니 false가 리턴되면 됨
// some은 여러 개 중에 하나 every()는 모든 요소들이 조건에 충족해야지만 true
// 45점인 학생이 1명 있으니 true >>> 따라서 이걸 뒤집으면 됨.
// 뒤집는 방법은 객체의 시작 가장 앞에 !를 붙이면 된다.
// const result = !students.some((student) => student.score < 50);
// const result2 = students.every((student) => student.score < 50);

// console.log(result);
// console.log(result2);

// ### 09: 학생들의 점수의 평균을 구하라.
// 시작 value 를 0으로 시작
// recudeRight (배열의 뒤에서 시작 - 오징어 게임 456번부터 시작)
// 평균은 결과 값을 배열의 길이 (students 배열 - length 로 나눈다. )
const result = students.reduce((prev, current, index) => {
    console.log('--------------');
    console.log(prev);
    console.log(current);
    return prev + current.score;
}, 0);
console.log(result / students.length);
