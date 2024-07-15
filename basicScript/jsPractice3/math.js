/* 

학생의 점수가 90점 이상이면 A
91 - 100 : A
81 - 90 : B
71 - 80 : C
61 - 70 : D
60 미만 : F
*/

const Scores = ['F', 'D', 'C', 'B', 'A'];
// const ScoreMap = {
//     0: 'F',
//     1: 'D',
//     2: 'C',
//     3: 'B',
//     4: 'A',
// };

const failScore = 60;
const getStudentScore = (score) => Math.ceil(Math.max(score, failScore) / 10) - 6;
const resultScore = (score) => Scores[getStudentScore(score)];
    // const calScore = Math.ceil(score / 10);
    // const calScore = Math.ceil(Math.max(score, failScore) / 10) - 6;
    // const calScore = getStudentScore(score);
    // console.log('result: ', calScore);
    // return Scores[getStudentScore(score)];
// };
// switch (calScore) {
//     case 0:
//         return 'F';
//     case 1:
//         return 'D';
//     case 2:
//         return 'C';
//     case 3:
//         return 'B';
//     case 4:
//         return 'A';

// case 10:
//     return 'A';
// case 9:
//     return 'B';
// case 8:
//     return 'C';
// case 7:
//     return 'D';
// default:
//     return 'F';
// }

// if (score >= 91) return 'A';
// if (score >= 81) return 'B';
// if (score >= 71) return 'C';
// if (score >= 61) return 'D';
// return 'F';

console.log(resultScore(99));
console.log(resultScore(80));
console.log(resultScore(55));
console.log(resultScore(65));
console.log(resultScore(88));
