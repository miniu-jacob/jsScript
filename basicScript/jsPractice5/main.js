let names = [
    'Steven Paul Jobs',
    'Bill Gates',
    'Mark Elliot Zuckerberg',
    'Elon Mask',
    'Jeff Bezos',
    'Warren Eward Buffett',
    'Larry Page',
    'Larry Ellison',
    'Tiom Cook',
    'Lloyd BlankFein',
];

// function printName(item) {
//     console.log(item);
// }

// names.forEach((item, index) => console.log(item, index));

let data = names.map((item, index) => {
    return item;
});

console.log(data);

let ceoList = [
    { name: 'Larry Page', age: 23, ceo: true },
    { name: 'Tim Cook', age: 40, ceo: true },
    { name: 'Elon Mask', age: 55, ceo: false },
];

// 나는 name 모아서 프린트 하고 싶다.
let data1 = ceoList.map((item) => {
    return item.name;
});
let data2 = ceoList.map((el, index) => el.age);

console.log(data1);
console.log(data2);

let data3 = ceoList.filter((element) => {
    return element.age === 23;
});
console.log(data3);
