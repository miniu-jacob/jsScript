// ### 메뉴 언더바 가져오기

// 엔터키를 입력하면 아무것도 입력하지 않았습니다. 메시지 출력하기
// user-input-button 옆에 보여주기

// 엔터키를 입력하려면 user-input을 가져오자
const userInput = document.querySelector('.user-input');
const inputButton = document.querySelector('.user-input-button');
let emptyInput = document.querySelector('.empty-input');

inputButton.addEventListener('click', () => {
    if (userInput.value === '') {
        focus();
        console.log('아무것도 입력하지 않음', userInput.value);
        emptyInput.style.display = 'inline';
    } else {
        addTask();
    }
});
// console.log(userValue);

emptyInput.style.display = 'none';
// emptyInput.style.display = 'inline';

// 입력값 체크
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (userInput.value === '') {
            focus();
            console.log('아무것도 입력하지 않음', userInput.value);
            emptyInput.style.display = 'inline';
        } else {
            addTask();
        }
    }
});

function focus() {
    emptyInput.style.display = 'none';
    userInput.value = '';
}
// if (!userValue) {
//     emptyInput.style.display = 'inline';

//     // console.log('아무것도 입력하지 않았습니다.');
// }

function addTask() {
    console.log('등록됨', userInput.value);

    focus();
}
//

// 메뉴, 언더바

let underBar = document.getElementById('under-bar');
let menus = document.querySelectorAll('.progress-bar div');

menus.forEach((menu) =>
    menu.addEventListener('click', (e) => menuIndicator(e))
);

function menuIndicator(e) {
    // 아이템의 왼쪽 시작점부터, 아이템의 너비만큼
    underBar.style.left = e.currentTarget.offsetLeft + 'px';
    underBar.style.width = e.currentTarget.offsetWidth + 'px';
    underBar.style.top =
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
}
