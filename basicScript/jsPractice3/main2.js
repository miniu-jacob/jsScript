// 날씨가
//     - 3월 ~ 5월: 봄
//     - 6월 ~8월: 여름
//     - 9월 ~11월: 가을
//     - 12월 - 2월: 겨울

// const getSeason = (num) => {
//     if (num > 2 && num < 6) {
//         return `봄`;
//     } else if (num >= 6 && num <= 8) {
//         return `여름`;
//     } else if (num >= 9 && num <= 11) {
//         return `가을`;
//     } else {
//         return `겨울`;
//     }
// };

// const getSeason = (month) => {
//     if (month >= 3 && month <= 5) return '봄';
//     if (month >= 6 && month <= 8) return '여름';
//     if (month >= 9 && month <= 11) return '가을';
//     if (month >= 12 || month <= 2) return '겨울';
// };

// switch 문으로 바꾸고 보면 case 3, 4, 5의 경우 3부터 시작하니까 불필요한 작업(안해도 될것) 으로 보일 수도 있음. 따라서 어떻게 개선할 것인가?
// 3씩을 빼 보면
// case 0, 1, 2 ... -1, -2
// month 대신에 shiftedMonth 라는 변수를 추가한다면 case 가 0 ~ 9까지는 최소한 규칙성을 가진다.
// 이 규칙성을 가지고 뭔가를 만들어 낼 수 있을 것 같다.
// 다만 -2, -1 부분이 걸리니. 전부 12를 더하면 12 부터 시작해서 0, 1로끝남.
// 따라서 12를 더하고 12로 나눈 나머지 값으로 처리할 수 있음.
// 결국  case문은 0  부터 11까지로 만들었다.
// 그리고 보면 3으로 나누었을 때 몫이 0, 1, 2, 3으로 나누어지게 된다.
// 따라서 (month + 9) % 12 ==>> 이것을 Math.floor((month + 9) % 12) / 3)
// 그리고 나면 객체로 바꾸기 용이해진다.
// 객체로 바꾸었다. 그다음에? 어따 써먹어?
// switch, case 대신에 return [객체]
// 즉 switch 위에 switch 대신 return 객체 이름 >>>>>>
// return SeasonMap[shiftedMonth]
// 근데 0, 1, 2, 3은? 배열이네?
// 따라서 const SeasonMap = {} 대신에 배열로 쓸 수 있다.
// shiftedMonth는 딱 한번만 쓰이니까. 

const Seasons = ['봄', '여름', '가을', '겨울'];

// const seasonmap = {
//     0: '봄',
//     1: '여름',
//     2: '가을',
//     3: '겨울',
// };
// const shiftedMonth = month - 3

const getSeason = (month) => {
    // const shiftedMonth = Math.floor(((month + 9) % 12) / 3);
    // return Seasons[shiftedMonth];
    return Seasons[Math.floor(((month + 9) % 12) / 3)];

    // switch (shiftedMonth) {
    //     case 0:
    //         // case 1:
    //         // case 2:
    //         return '봄';

    //     case 1:
    //         // case 4:
    //         // case 5:
    //         return '여름';

    //     case 2:
    //         // case 7:
    //         // case 8:
    //         return '가을';

    //     case 3:
    //         // case 10:
    //         // case 11:
    //         return '겨울';
    // }
};

console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));
