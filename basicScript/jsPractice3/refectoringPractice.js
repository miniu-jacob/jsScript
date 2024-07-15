/*
구간별 날씨
0 미만: 몹시 추워요. 
0 이상 10 미만: 추워요
10 이상 20미만: 선선해요
20 이상 30미만: 조금 더워요
30 이상 40미만: 더워요
40 이상 50미만: 몹시 더워요
*/

// 0보다 작은 경우 즉 몹시 추워요 부분을 -1이 나오게 하고
// 40보다 높은 경우 4가 나오게 한다면? 가능할 것 같다.
// Math.max() 함수를 이용하면 가장 큰 값 즉 음수에서는 어떤 값이 나와도 -1이 나오게 할 수 있다.
// Math.max(-100, -1)
// 또한 40을 넘는 경우에는 Math.min  으로 전체 값을 4와 비교하면 된다.

// ### 결론: 0 미만은 모두 -1로 수렴하도록 강제 : `Math.max(val, -1)`
// 4이상은 모두 4로 수렴하도록 강제: `Math.min(val, 4)`
// 둘을 합치면: `Math.min(Math.max(val,0-1), 4)`
// 규칙성이 생겼으니 객체로 바꿔보자
// switch 문은 없애고 switch 문이 리턴하던 문장을 객체가 리턴하도록 만들자.
// return 'TEXT' 였는데 return {객체}[value]; 될 것이고
// 따라서 return {객체이름: TemperatureMap}[값은 temperature로 받아와서 calTemp에 넣어 줬으니]
// return TemperatureMap[calTemp]가 된다.
// 다만 실행해 보면 에러가 발생하는데 -1의 '-' 가 들어가서 에러가 난다. 어떻게 처리해야 할까?
// 1. 문자열로 강제 지정
// 2. -1이 뜨지 않도록 수정 (1씩 늘려준다. 어디서? )
// Math.floor로 버리는 것 말고 Math.ceil 로 올림처리해 준다. 다만 올림처리를 하게 되면 시작이 0이니까 -1과 비교하는 것이 아니라 0과 비교해야 하고 4가 아니라 5와 비교하도록 바꿀 수 있다.
// 해 놓고 보면 0, 1, 2, 3, 4 . 즉 배열이다.  따라서 ...

// 마지막으로 변수가 길어서 별로니까 함수로 뽑아보자.
// 뽑고 나면 원래 있던 calTemp 변수에 함수 이름을 주면 된다.

const Temperatures = [
    '몹시 추워요',
    '추워요',
    '선선해요',
    '조금 더워요',
    '더워요',
    '몹시 더워요',
];

const getTemp = (temperature) =>
    Math.min(Math.max(Math.ceil(temperature / 10), 0), 5);
// const TemperatureMap = {
//     0: '몹시 추워요',
//     1: '추워요',
//     2: '선선해요',
//     3: '조금 더워요',
//     4: '더워요',
//     5: '몹시 더워요',
// };

const showWeather = (temperature) => Temperatures[getTemp(temperature)];
// const calTemp = getTemp(temperature)
// const calTemp = Math.max(Math.floor(temperature / 10), -1);
// let calTemp = Math.floor(temperature / 10);

// switch (calTemp) {
//     case -1:
//         return '몹시 추워요';
//     case 0:
//         return '추워요';
//     case 1:
//         return '선선해요';
//     case 2:
//         return '조금 더워요';
//     case 3:
//         return '더워요';
//     case 4:
//         return '몹시 더워요';
// }
//     if (temperature < 0) return '몹시 추워요';
// if (calTemp < 1) return '추워요';
// if (calTemp < 2) return '선선해요';
// if (calTemp < 3) return '조금 더워요';
// if (temperature < 40) return '더워요';
// return '몸시 더워요';
// };

// 위와 같은 if, else문의 경우 계절처럼 1 - 12까지 딱 떨어지는 것이 아니다.
// 규칙성을 찾아보자. <0, 과 <40을 제외하면 10씩 늘어난다.
// 그래서 10으로 나눠서 나머지를 버린다고 생각하면?
// temperature 온도 파라미터를 연산한 뒤 저장할 변수 하나에 담아 준다.
// 우선은 0 40은 놔두고 나머지를 처리한다.
// switch 문으로 했을 때 0에 대해서는 처리가 가능할 것 같다.

console.log(showWeather(-15));
console.log(showWeather(9));
console.log(showWeather(49));
console.log(showWeather(35));
console.log(showWeather(22));
