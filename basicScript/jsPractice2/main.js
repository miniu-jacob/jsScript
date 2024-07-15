// ### Step 1: 어디서 로그인을 했는지와 아이디를 가지고 함수를 만든다.

const naverLogin = () => {
    // 복잡한 과정 생략
    return '네이버';
};

const kakaoLogin = () => {
    // 복잡한 과정 생략
    return '카카오';
};

const facebookLogin = () => {
    // 복잡한 과정 생략
    return '페이스북';
};

const googleLogin = () => {
    // 복잡한 과정 생략
    return '구글';
};

// ### Step 2: if, else 문으로 함수를 만든다.

// const socialLogin = (where, id) => {
//     let domain;
//     if (where === 'naver') {
//         domain = naverLogin(id);
//     } else if (where === 'kakao') {
//         domain = kakaoLogin(id);
//     } else if (where === 'facebook') {
//         domain = facebookLogin(id);
//     } else if (where === 'google') {
//         domain = googleLogin(id);
//     }
//     return `${domain} ${id}`;
// };

// ### Step 3:  if, else 문을 바꿀 수 있는 것 중에 하나가 switch case 문이다.
// const socialLogin = (where, id) => {
//     let domain;
//     switch (where) {
//         case 'naver':
//             domain = naverLogin(id);
//             break;
//         case 'kakao':
//             domain = kakaoLogin(id);
//             break;
//         case 'facebook':
//             domain = facebookLogin(id);
//             break;
//         case 'google':
//             domain = googleLogin(id);
//             break;
//         default:
//             console.log('Wrong Access');
//     }
//     return `${domain} ${id}`;
// };

// ### Step 4: 다른 방법이 있을까?
// 1. domain 변수를 만들고
const executeLogin = (where, id) => {
    let domain;
    switch (where) {
        case 'naver':
            domain = naverLogin(id);
            break;
        case 'kakao':
            domain = kakaoLogin(id);
            break;
        case 'facebook':
            domain = facebookLogin(id);
            break;
        case 'google':
            domain = googleLogin(id);
            break;
        default:
            console.log('Wrong Access');
    }
    return `${domain} ${id}`;
};

console.log(socialLogin('naver', 'jacob'));
console.log(socialLogin('google', 'jacob'));
