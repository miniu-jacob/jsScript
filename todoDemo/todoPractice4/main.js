// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// 체크 버튼을 누르면 할일이 끝나면서 취소선이 생긴다.
// 삭제 버튼을 누르면 할일이 삭제된다.
// 진행중 끝남 탭을 누르면 언더바가 이동한다.
// 끝남 탭은, 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

// (1): user Input 값 가져오기
let userInput = document.getElementById('user-input');
// (2): 버튼 아이디 가져오기 > 왜? > 이벤트 리스너를 발생시키기 위해서
// 이벤트 리스너를 발동시킨 다는 뜻은 + 버튼을 클릭했을 때 할일을 등록하기 위해서
let addTaskButton = document.getElementById('add-task-button');

// (2-1): 버튼 클릭 시 이벤트 리스너 동작
addTaskButton.addEventListener('click', addTask);

// (3): 할일 리스트 배열을 만든다.
let taskList = [];
let filterList = [];
let taskTab = 'all';

// (2-2): addTask 함수를 만든다.
function addTask() {
    // let userValue = userInput.value;
    // (4) 유저가 아무것도 입력하지 않으면 콘솔 경고
    // 공백을 제거한다.
    let userValue = userInput.value.trim();
    if (!userValue) {
        console.log('아무것도 입력하지 않았습니다.');
        return;
    }

    // (5-1): task 라는 객체를 만들고 id, textContent, 체크 상태값을 설정한다. textContent의 값은 뭘로 해야 하지? userInput.value?  아니면 userValue? 지난 소스에서는 userInput.value로 사용
    let task = {
        id: randomIDGenerate(),
        textContent: userInput.value,
        isFinished: false,
    };
    // (3-1): 할일을 배열에 밀어 넣어준다. (push)
    taskList.push(task);
    console.log('1. 버튼 클릭됨, 입력값 : ', userValue);
    console.log('2. 결과 - 입력된 값들: ', task.textContent);
    console.log('3. task 객체 안에 있는 값: ', taskList);
    render();
    focus();
    // html 을 넣어줄 배열을 만들고
    // div 테그들을 넣어준 후에
    // 부모인 div 아이디를 찾아서 resultHTML 결과를 넣어준다.
    // 콘솔로 확인
}

// render
function render() {
    let resultHTML = [];
    let list = [];

    // (9): taskTab을 찍어 본다.
    // console.log('넘어온 탭 이름: ', taskTab);
    // (9-1): 탭에 따라 배열을 다르게 설정한다.

    // (8-3): UI를 그리는 함수에서 div class가 all 인 경우
    // div class 가 processing인 경우
    // 현재 taskList 배열에서 all, processing, done 항목에 따라 서로 다른 리스트를 보여준다.
    // 조건문을 만들어 all 이면 render();를 그대로 호출하고 아닌 경우 다른 상태
    if (taskTab === 'all') {
        list = taskList;
    } else if (taskTab === 'processing' || taskTab === 'done') {
        list = filterList;
    }
    console.log('리스트 내용: ', list);

    list.forEach((item) => {
        // (6-1): 할일의 끝남 여부 상태값을 체크하여 서로 다른 UI를 그려준다.
        if (item.isFinished === true) {
            resultHTML += `<div class="task-area">
                            <div class="task-finish">${item.textContent}</div>
                            <div class="task-buttons">
                                <button onclick="checkState('${item.id}')">Check</button>
                                <button onclick="deleteTask('${item.id}')">Delete</button>
                            </div>
                        </div>`;
        } else {
            // (5-2): 체크 버튼에 onclick 이벤트를 넣는다.
            // onclick="함수명('checkState')"
            resultHTML += `<div class="task-area">
                            <div>${item.textContent}</div>
                            <div class="task-buttons">
                                <button onclick="checkState('${item.id}')">Check</button>
                                <button onclick="deleteTask('${item.id}')">Delete</button>
                            </div>
                        </div>`;
        }
    });
    document.getElementById('tasks').innerHTML = resultHTML;
    focus();
}

// (5-4): onclick 이벤트에서 id 값을 전달받는다.
// id값과 list에 있는 아이디 값을 비교한다.
function checkState(id) {
    // if(taskList.id === id)
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            // ??? 뭐해야 되지?
            // 상태값을 변경해야지
            taskList[i].isFinished = !taskList[i].isFinished;
            console.log('해당 id의 ', id, '상태값', taskList[i].isFinished);
            break;
        }
    }
    render();
}
// (6): 상태 값을 변경 시켰다면 UI를 다시 그려준다.

// (7): 삭제 버튼을 누르면 할일이 삭제된다.
// render 함수 안에 있는 html 에 onclick 이벤트를 주자
// onclick="deleteTask('${item.id}')"
// (7-1): deleteTask 함수를 만들자.
// id 값은 가져왔으니 taskList 에서 해당 아이템을 삭제하자.
function deleteTask(id) {
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList.splice(i, 1);
        }
    }
    render();
    console.log('삭제합니다. ', id);
}

// (3-2): 엔터키로 입력 추가
// 엔터키를 눌렀을 때 addTask 함수를 호출하는 이벤트 리스너 추가
// 입력값에 대한 이벤트 추가(addEvent)이기 때문에 userInput 값에 작업한다. userInput.addEventListener()
// 첫번째 인자는 키가 눌렸을 때 ('keydown'),
// 두번째 인자는 콜백함수 () => {}
// userInput.addEventListener('keydown'), ()=> {};
// 두번째 인자에서 이벤트(e|event)를 주고 그 이벤트의 키가 (e|event.key === 'Enter') 엔터키인 경우 > addTask 함수를 호출하면 끝
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

// (5): 체크 버튼을 클릭했을 때 취소선을 만든다.
// 체크 버튼을 알기 위해서 ID를 만든다.
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
// (5-1): 할일이 끝났다는 상태 값을 관리해야 한다.
// (5-2): 유니크한 값, ID를 만들어야 한다.
// 따라서 스트링 배열을 객체로 만든다.

function focus() {
    userInput.value = '';
}

// 메뉴와 언더바
let underBar = document.getElementById('under-bar');
let menus = document.querySelectorAll('.progress-bar div');
// (8): 메뉴에 클릭 이벤트 주기
// console.log(menus)
// 이벤트 리스너 동작시키고 필터 함수 이동
for (i = 1; i < menus.length; i++) {
    menus[i].addEventListener('click', (e) => filter(e));
}

// (8-1): 진행중, 끝난 아이템을 골라내기 위해 이벤트 리스너를 세팅하고
// 필터 함수를 만들었다. 그다음에?
// 단순히 인자로 넘어온 event만 출력해 보면 div 테그 클릭에 대한 객체를 출력한다.
// 따라서 id를 출력하기 위해서는 event의 target 그중에서 id 값을 가져와야 한다.

function filter(event) {
    taskTab = event.target.id;
    // 필터링 된 리스트를 만들어서 ?
    // 따라서 배열을 하나 만들고
    // filterList = [];
    filterList = [];

    if (taskTab === 'all') {
        // 전체 보여주기
        // (8-4): 전체야  all인 경우 UI를 그려주는 함수를 호출하기만 하면 되지만. processing인 경우에는?
        // 필터 함수니까 필터링 된 리스트를 새로 만들어야겠지?
        render();
    } else if (taskTab === 'processing') {
        // isFinished = false 항목 보여주기
        // taskList에 있는 배열로부터 하나씩 꺼내서 isFinished를 비교
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].isFinished === false) {
                filterList.push(taskList[i]);
                // 그러면 filterList가 만들어졌다.
                // 이걸 render에 전달해야지
                // render에 전달하면 filterList 내용을 render에서 알아야 하니까 전역 변수로 만든다.
                // render는 어떤 탭을 클릭했는지 어떻게 알지?
                // 그러면 탭 정보(taskTab)도 같이 올려 주자
            }
            // else if (taskList[i].isFinished === true) {
            //     filterList.push(taskList[i]); }
        }
        render();
        console.log('processing', filterList);
    } else {
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].isFinished === true) {
                filterList.push(taskList[i]);
            }
        }
        render();
        console.log('클릭한 탭: ', taskTab);
    }
}

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
