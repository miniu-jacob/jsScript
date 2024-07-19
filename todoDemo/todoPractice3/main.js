/* 메뉴와 언더바 들고오기

*/
let underBar = document.getElementById('under-bar');
let menus = document.querySelectorAll('.progress-bar div');

// console.log(underBar);
// console.log(menus);

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

/* ### 할일목록 ###             
    1. 할일을 등록한다. (쓴다.)
    2. + 버튼을 누르면 할일이 등록된다. 
    3. 체크를 누르면 할일에 취소선을 만든다. 
    4. 삭제(delete)를 누르면 할일이 삭제된다. 
    5. filter 기능을 만든다. (전체, 진행 중, 완료)
*/

/* ### Step 1: 할일을 등록하기 위해서는 
    a. input의 값을 가져온다. 
    b. 버튼의 아이디를 가져온다.
    c. 버튼이 클릭되면 (클릭 이벤트를 감지하여) 할일이 등록되게 만든다. 
    d. 등록은 함수를 addTask() 만들어 등록할 수 있다. 
    e. 데이터의 형식은? 문자열? 숫자형? Array? Object? 
*/
let userInput = document.getElementById('user-input');
let inputButton = document.getElementById('input-button');

inputButton.addEventListener('click', addTask);

function addTask() {
    console.log(userInput.value);
}
