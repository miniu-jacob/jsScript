// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// 체크 버튼을 누르면 할일이 끝나면서 취소선이 생긴다.
// 삭제 버튼을 누르면 할일이 삭제된다.
// 진행중 끝남 탭을 누르면 언더바가 이동한다.
// 끝남 탭은, 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

// user-input 값 가져오기
let userInput = document.querySelector('.user-input-box');
const inputBtn = document.querySelector('.user-input-btn');
let warningMsg = document.querySelector('.warning-msg');
let taskList = [];
let list = [];
let filterList = [];
let taskState = 'all';

warningMsg.style.display = 'none';
// 클릭 이벤트 리스너 발생
inputBtn.addEventListener('click', (e) => checkTaskValue(e));
userInput.addEventListener('focus', focus);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') checkTaskValue(event);
});
userInput.addEventListener('input', () => {
    // 경고 메시지 삭제
    warningMsg.style.display = 'none';
    // console.log('aaa');
});

function checkTaskValue(reqFrom) {
    let userValue = userInput.value.trim();
    // console.log(`1. ${reqFrom.type} 으로 등록 요청 `);

    if (!userValue) {
        // console.log('아무 것도 입력하지 않음');
        warningMsg.textContent = '아무 것도 입력하지 않음';
        warningMsg.style.display = 'inline';
        warningMsg.style.color = 'red';
        return;
    }
    addTask();
}

function addTask() {
    let task = {
        id: randomIDGenerate(),
        textContent: userInput.value,
        isComplete: false,
    };

    taskList.push(task);

    // console.log(`${userInput.value} 등록함.`);
    console.log(taskList);
    render();
    focus();
}

function focus() {
    userInput.value = '';
}

// 랜덤 아이디 값 생성 함수
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function render() {
    let resultHTML = '';

    if (taskState.includes('all')) {
        list = taskList;
    } else if (taskState.includes('processing') || taskState.includes('done')) {
        list = filterList;
    }
    // taskList 배열의 isComplete 상태를 체크해서
    // 체크가 클릭된 (isComplete === true) 인 요소들에
    // 취소선을 그린다.
    // 어디에? 각 항목마다, 그러니까 ForEach 안에
    list.forEach((item) => {
        if (item.isComplete === true) {
            resultHTML += `<div class="task-tabs">
                            <div class="task-box-done">
                                <div class="task-content">${item.textContent}</div>
                            </div>
                            <div>
                                <button class="check-btn" data-id="${item.id}">Check</button>
                                <button class="delete-btn" data-id="${item.id}">Delete</button>
                            </div>
                        </div>`;
        } else {
            resultHTML += `<div class="task-tabs">
                            <div>
                                <div>${item.textContent}</div>
                            </div>
                            <div>
                                <button class="check-btn" data-id="${item.id}">Check</button>
                                <button class="delete-btn" data-id="${item.id}">Delete</button>
                            </div>
                        </div>`;
        }
    });
    document.querySelector('.task-area').innerHTML = resultHTML;

    /* 
        ### onclick ="" 으로 처리하지 말고 이벤트 리스너로 처리해 보자. 
        변경 전:  <button onclick="taskCheck('${item.id}')">Check</button> 
        변경 후:  <button" class="check-btn" data-id="${item.id}">Check</button> 
        이벤트리스너로 처리하기 위해 class를 하나씩 주고 data-id를 설정해 주었다. 
        이제 이벤트 리스너를 만든다. 만들때 querySelectorAll() 로 만든다. 
    */
    document.querySelectorAll('.check-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            taskCheck(e.target.dataset.id);
        });
    });

    document.querySelectorAll('.delete-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            deleteTask(e.target.dataset.id);
        });
    });
}

function taskCheck(id) {
    const index = taskList.findIndex((item) => item.id === id);
    console.log(id);
    if (index !== -1) taskList[index].isComplete = !taskList[index].isComplete;

    if (taskState.includes('processing')) {
        filterList = taskList.filter((item) => !item.isComplete);
    } else {
        filterList = taskList.filter((item) => item.isComplete);
    }
    render();
    // console.table(taskList);
}

function deleteTask(id) {
    const index = taskList.findIndex((item) => item.id === id);
    if (index !== -1) taskList.splice(index, 1);
    if (taskState.includes('done')) {
        filterList = taskList.filter((item) => item.isComplete);
    } else {
        filterList = taskList.filter((item) => !item.isComplete);
    }
    render();
}

// 할일 완료 목록 탭에 대한 이벤트 리스너
document.querySelectorAll('.menus').forEach((tabs) => {
    tabs.addEventListener('click', (item) => {
        filterTab(item.target.className);
        // console.log(item.target.className);
    });
});

function filterTab(divTab) {
    // 탭 이름에 따라 다르게 보여준다.
    // 상태를 정의할 변수를 하나 만들어준다.
    console.log(`div 테그 이름: ${divTab}`);

    if (divTab.includes('all')) {
        // console.log('실행됨', divTab);
    } else if (divTab.includes('processing')) {
        filterList = taskList.filter((item) => {
            return item.isComplete === false;
        });
        console.log('filterList: ', filterList);
    } else if (divTab.includes('done')) {
        filterList = taskList.filter((item) => {
            return item.isComplete === true;
        });
    }
    taskState = divTab;
    console.log(`taskState: ${taskState}`);
    render();
    // console.log('실행안됨', divTab);
}
