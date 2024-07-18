function greet(name) {
    // return name;
    return console.log(`안녕, 내 이름은 ${name} 이야!`);
}

greet('Jacob');
// console.log(`안녕, 내 이름은 ${greet} 이야!`);

function meetAt(year, month, day) {
    if (day) return `${year}/${month}/${day}`;
    if (month) return `${year}년 ${month}월 `;
    if (year) return `${year}년`;
}

console.log(meetAt(2024, 05, 31));

//  가장 작은 값 찾기
function findSmallestElement(arr) {
    let result = arr[0];
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

console.log(findSmallestElement([51, 23, 13, 4, 5, 6, 7]));
console.log(findSmallestElement([]));
