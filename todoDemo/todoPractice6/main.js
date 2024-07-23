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

    // taskList 배열의 isComplete 상태를 체크해서
    // 체크가 클릭된 (isComplete === true) 인 요소들에
    // 취소선을 그린다.
    // 어디에? 각 항목마다, 그러니까 ForEach 안에
    taskList.forEach((item) => {
        if (item.isComplete === true) {
            resultHTML += `<div class="task-tabs">
                            <div class="task-box-done">
                                <div class="task-content">${item.textContent}</div>
                            </div>
                            <div>
                                <button onclick="taskCheck('${item.id}')">Check</button>
                                <button>Delete</button>
                            </div>
                        </div>`;
        } else {
            resultHTML += `<div class="task-tabs">
                            <div>
                                <div>${item.textContent}</div>
                            </div>
                            <div>
                                <button onclick="taskCheck('${item.id}')">Check</button>
                                <button>Delete</button>
                            </div>
                        </div>`;
        }
    });
    document.querySelector('.task-area').innerHTML = resultHTML;
}

function taskCheck(id) {
    // 해당 id를 가진 항목의 인덱스를 찾음
    // 리턴되는 값은 true 또는 -1 이므로 변수에 넣고 체크함
    const index = taskList.findIndex((item) => item.id === id);
    if (index !== -1) {
        taskList[index].isComplete = !taskList[index].isComplete;
    }
    // console.log(`id: ${id} 체크됨 `);
    console.table(taskList);
    render();
}
