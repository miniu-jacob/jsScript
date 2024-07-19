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
let taskList = [];
let tabs = document.querySelectorAll('.progress-bar div');
// console.log('탭들 정보: ', tabs);

inputButton.addEventListener('click', addTask);

// 엔터키를 눌렀을 때 addTask 함수를 호출하는 이벤트 리스너 추가
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addTask();
});

// 입력 필드에 포커싱을 받으면 기존 내용을 지우는 이벤트 리스너 추가
userInput.addEventListener('focus', () => (userInput.value = ''));

// ### Step for 문으로 이벤트 리스너  추가
tabs.forEach((el) => {
    el.addEventListener('click', (event) => filter(event));
});

function addTask() {
    // let taskContent = userInput.value;
    let task = {
        id: randomIDGenerate(),
        taskContent: userInput.value,
        isComplete: false,
    };
    taskList.push(task);
    console.log('clicked', taskList);
    render();
    userInput.value = '';
    userInput.focus();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function render() {
    // taskList.forEach((item) => {
    let resultHTML = '';

    taskList.forEach((item) => {
        if (item.isComplete == true) {
            resultHTML += `<div class="task">
                        <div class='task-done'>${item.taskContent}</div>
                        <div class="task-buttons">
                            <button onclick="checkItem('${item.id}')">Check</button>
                            <button onclick="deleteItem('${item.id}')">Delete</button>
                        </div>
                    </div>`;
        } else {
            resultHTML += `<div class="task">
                        <div>${item.taskContent}</div>
                        <div class="task-buttons">
                            <button onclick="checkItem('${item.id}')">Check</button>
                            <button onclick="deleteItem('${item.id}')">Delete</button>
                        </div>
                    </div>`;
        }
    });

    document.getElementById('task-board').innerHTML = resultHTML;
}

function checkItem(id) {
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log('아이템 리스트: ', taskList);
    console.log('체크 클릭함 - ID: ', id);
}

//  아이템 삭제 함수
function deleteItem(id) {
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
    // console.log('삭제 버튼 누름', id);
}

function filter(event) {
    // console.log('클릭함', e.target);
    console.log('클릭함current: ', event.currentTarget.id);
}
