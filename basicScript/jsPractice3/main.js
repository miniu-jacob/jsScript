// ### Step 1: 접속한 영문 사이트 이름과 아이디를 보고 어디서 왔는지 한글 도메인과 아이디를 출력한다.

const naverLogin = (id) => {
    // 복잡한 코드
    return '네이버';
};

const kakaoLogin = (id) => {
    // 복잡한 코드
    return '카카오';
};

const facebookLogin = (id) => {
    // 복잡한 코드
    return '페이스북';
};

const googleLogin = (id) => {
    // 복잡한 코드
    return '구글';
};

// const socialLogin = (where, id) => {
//     let domain = '';
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

//  switch case 문으로 바꿔보자
// 어디서부터 어디까지? switch(where) 부분부터 return 전까지만 함수로 별도로 분리가 가능?
// 함수를 하나 만들어 보자
// domain 부분을 없애고 return naverLogin(id); 으로 바꿀 수 있다.
// 그러면 break 가 필요하지 않는다.

// 함수에서 return만 남아있는 상태라면 객체로 바꿔 쓸 수 있다.

const objectSocialMap = {
    naver: naverLogin,
    kakao: kakaoLogin,
    facebook: facebookLogin,
    google: googleLogin,
};

const executeLogin = (where, id) => {
    switch (where) {
        case 'naver':
            return naverLogin(id);
        case 'kakao':
            return kakaoLogin(id);
        case 'facebook':
            return facebookLogin(id);
        case 'google':
            return googleLogin(id);
    }
};

const socialLogin = (where, id) => {
    const domain = objectSocialMap[where](id);
    // 위와 같이 object_name[where에 대해서 ID를 넘겨준다.](ID)
    // 위와 같이 도메인을 없애면 도메인에 executeLogin 으로 바꿔 쓸 수 있다.
    // let domain;
    // switch (where) {
    //     case 'naver':
    //         domain = naverLogin(id);
    //         break;
    //     case 'kakao':
    //         domain = kakaoLogin(id);
    //         break;
    //     case 'facebook':
    //         domain = facebookLogin(id);
    //         break;
    //     case 'google':
    //         domain = googleLogin(id);
    //         break;
    // }
    return `${domain} ${id}`;
};

console.log(socialLogin('naver', 'jacob'));
console.log(socialLogin('kakao', 'jacob'));
