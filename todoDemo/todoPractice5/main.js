const userInput = document.querySelector('.user-input');
const inputButton = document.querySelector('.user-input-button');
let emptyInput = document.querySelector('.empty-input');
let taskList = [];

// 경고 메시지 노출 안함
emptyInput.style.display = 'none';

// 클릭 이벤트 리스터 - 버튼 >> 체크 함수 호출
inputButton.addEventListener('click', checkInputValue);
// 엔터키 입력했을 때 내용 체크 함수 호출
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkInputValue();
    }
});

function focus() {
    userInput.value = '';
}

// 랜덤 아이디 값 생성 함수
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// 입력값 체크
// 체크 후 마지막에 값이 있다면 addTask 호출
function checkInputValue() {
    const userValue = userInput.value.trim();
    if (userValue === '') {
        console.log('입력 값이 없습니다.', userValue);
        emptyInput.textContent = `아무것도 입력하지 않았습니다.`;
        emptyInput.style.color = 'red';
        emptyInput.style.display = 'inline';
    } else {
        // console.log('할일을 등록합니다.');
        addTask();
    }
}

// 할일에 입력을 하게 되면 경고 메시지가 지워진다.
userInput.addEventListener('input', () => {
    emptyInput.style.display = 'none';
});

/*
    할일 등록 함수
    할일은 스트링의 조합 즉 배열이다.
    배열에다 데이터를 밀어 넣는 작업을 해야 한다. 
    단, 끝난 할일, 진행 중인 할일을 구분하기 위해
    isFinished = true | false; 를 만들어 관리할 수 있다.
    또한, 어떤 할일의 작업 상태인지, 지우려는 할일인지를
    확인하기 위해 아이디를 만들어 관리한다. 
    따라서 배열을 객체로 만든다.

*/
function addTask() {
    const taskName = userInput.value;
    // 할일 관리를 위한 객체 생성

    task = {
        id: randomIDGenerate(),
        textContent: userInput.value,
        isFinished: false,
    };

    taskList.push(task);
    // console.log(taskList);

    // 할일 등록 메시지를 emptyInput 에 표시
    emptyInput.style.display = 'inline';
    emptyInput.textContent = `할일 '${taskName}' 이 등록되었습니다.`;
    emptyInput.style.color = 'green';
    // console.log(`할일 '${taskName}' 이 등록되었습니다. `);
    focus();
    render();
}

// 그려주는 render 함수
function render() {
    console.log('랜더함수에서 ', taskList);
    let resultHTML = '';

    taskList.forEach((item) => {
        // 할일 완료여부 체크 로직
        console.log('완료 여부  체크 중');
        if (item.isFinished === false) {
            resultHTML += `<div class="task-item">
                        <div>${item.textContent}</div>
                        <div class="task-check-button">
                            <button class="task-check-btn" onclick="clickCheck('${item.id}')">Check</button>
                            <button class="task-del-btn" onclick="deleteTask('${item.id}')">Delete</button>
                        </div>
                    </div>`;
        } else {
            resultHTML += `<div class="task-item">
                        <div class="task-processing">${item.textContent}</div>
                        <div class="task-check-button">
                            <button class="task-check-btn" onclick="clickCheck('${item.id}')">Check</button>
                            <button class="task-del-btn" onclick="deleteTask('${item.id}')">Delete</button>
                        </div>
                    </div>`;
        }
    });
    document.querySelector('.task-area').innerHTML = resultHTML;
    // console.log('그렸다.');
}

/*
체크 버튼을 클릭하면 할일에 취소선이 생긴다.
취소선을 만들어 주기 위해서 isFinished 를 체크한다.
우선은 클릭 시 어떤 task 를 선택했는지 알아야 한다.
따라서 
    1. 체크 버튼에 onclick 이벤트를 주고 
    2. 체크하는 함수를 호출한다. 
    3. 이 때 id를 전달한다. 
*/
function clickCheck(id) {
    console.log('체크한 항목의 ID: ', id);
    taskList.forEach((item) => {
        if (item.id === id) {
            item.isFinished = !item.isFinished;
        }
        console.log(
            `완료된 할일: ${item.textContent}, 완료여부: ${item.isFinished}`
        );
    });
    render();
}

/*
    삭제 버튼을 누르면 항목이 삭제된다.
    이또한 클릭 시 어떤 task를 선택했는지 알아야 한다. 
    따라서 
    1. 삭제 버튼에 onclick 이벤트를 주고
    2. 삭제하는 함수를 호출한다. 
    3. 이때, id를 전달한다. 
*/
function deleteTask(id) {
    console.log('삭제할 항목의 ID: ', id);
    taskList.forEach((deleteItem) => {
        if (deleteItem.id === id) {
            taskList.splice(deleteItem.id, 1);
        }
    });
    render();
}

// taskList에 완료 여부 체크를 확인했다면 render 함수를 호출하여 UI 를 다시 그린다.
// 이때, 완료 여부를 체크하여 UI를 다시 그린다.

// 진행 상황 탭을 누를 때 각 탭에 대한 적절한 요소를 출력한다.

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
