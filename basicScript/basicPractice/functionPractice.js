// ### Step 1: for문을 이용하여 1부터 50까지를 출력한다.
// Step 2: '짝'을 출력하기 위해서는 숫자를 문자열로 변환이 필요하다. 이때 {변수}.toString(); 함수를 이용할 수 있다.
// Step 3: 값이 10인 경우 문자열로 보면 이것은 배열이다. 따라서 배열을 처리하는 for문을 만들어 준다.
// Step 4: 10 인 경우는 배열(array = [0, 1]) 이렇게 두개이기 때문에 새로운 j의 값을 써서 그 길이만큼
// - result 에 짝을 체크해서 더해준다.
// Step 5: 마지막으로 출력 시 result의 길이가 0보다 크다면 <<<< 삼항연산자 를 이용 >>>>
// - 3, 6, 9가 포함되지 않는다면 result의 값은 0이다.

for (i = 1; i < 51; i++) {
    let stringValue = i.toString();
    let result = '';

    for (j = 0; j < stringValue.length; j++) {
        if (
            stringValue[j] === '3' ||
            stringValue[j] === '6' ||
            stringValue[j] === '9'
        ) {
            result = result + '짝';
        }
    }
    console.log('result의 길이: ', result.length);
    console.log(result.length > 0 ? result : i);
}

// const array1 = [1, 3, 2, 4];
// const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// array2.forEach((element) => console.log(element));
