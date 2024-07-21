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
let filterList = [];
let taskState = 'all'; // 내가 무슨 탭을 들었는지 확인하기 위한 전역변수 선언

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
    // 필터링된 아이템들을 출력해 주기 위한 조건문
    let list = [];
    // 필터링된 "리스트" 를 보여주기 위해 리스트라는 것을 만든다.
    // 전체 리스트는 taskList가 가지고 있다. 따라서 all 인 경우에는
    // ### (2) - 리스트(list) 에 전체 할일 리스트(taskList)를 넣어(=)준다.
    console.log('taskState 상태: ', taskState);

    if (taskState === 'all') {
        // 전체 출력
        list = taskList; // (2)
    } else if (taskState === 'processing' || taskState === 'done') {
        // 필터링된 아이템 리스트 출력
        list = filterList;
        // processing 에서는 필터링된 리스트를 리스트에 넣어준다.
        // 다만 filterList 변수는 filter() 에서만 사용중이기 때문에
        // 전역변수로 수정한다. (3)
    }
    console.log('list 내용: ', list);

    let resultHTML = '';

    list.forEach((item) => {
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
    // 진행 중 (processing)인 탭을 누르고 아이템에 체크를 하면  UI가
    // 바로 업데이트 되지 않음
    // checkItem 함수에서 isComplete 상태를 변경하게 되면
    // filter 함수를 호출하여 UI를 다시 그리도록 변경
    // 필터에 target.id 값을 전달해 준다.
    filter({ currentTarget: { id: taskState } });
    // 필터 함수에서는 이벤트를 받아 event.currentTarget.id 의 값을
    // taskState에 넣는다.
    // event의 currentTarget.id의 값을 받는 이유는 어떤 탭을 클릭했는지를 알기 위함이다.
    // 따라서 필터 함수를 호출할 때 {타겟: {아이디: taskState}}

    render();
    // console.log('아이템 리스트: ', taskList);
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
    taskState = event.currentTarget.id;
    filterList = [];
    // let filterList = []; ------ (3)
    if (taskState === 'all') {
        // 모든 아이템 출력
        // 모든 아이템을 출력한다. 지금 하고 있네. 어디서? render에서
        render();
    } else if (taskState === 'processing' || taskState === 'done') {
        // 진행 중인 아이템 출력
        // taskList.isComplete = false
        for (i = 0; i < taskList.length; i++) {
            // 진행 중인 애들을 찾는다.
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
        render();
        console.log('processing', filterList);
        // 완료된 아이템 출력
        // taskList.isComplete = true
        // console.log('클릭함', e.target);
        // console.log('클릭함current: ', event.currentTarget.id);
    }
}

/*
if 

*/
