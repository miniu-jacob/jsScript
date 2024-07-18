// 1. 유저가 값을 입력한다 .
// + 버튼을 누르면 할일이 추가된다.
// 할일을 추가 시키려면 우선
// a. 빈 배열을 만들고
// b. input 에 들어온 텍스트 (텍스트가 들어온 상자의 ID)
// 즉 inputBox 의 값을 (inputBox.value) =>> 미리 선언했지? (document.getEle.... )
// 변수에 넣어주던지 아니면 직접 배열에 push 하면 된다.
// taskList라는 배열을 선언했으니 거기다가 넣어준다.
// taskList.push(inputBox.value), 또는 taskList.push(taskContent)

// 다음으로는 들어온 값들을 그려주면 된다. 그려주는 함수를 하나 만든다. render.. .

// delete 버튼을 누르면 할일이 삭제 된다.
// delete를 하기 위해서는 아이디를 알아야 한다.
// 아이디는 deleteTask 라는 함수를 만들 때 매개변수로 넘겨 준다.

// 체크 버턴을 누르면 할일에 취소선이 생긴다.
// 체크하려는 아이템이 상태를 들고 있어야 한다.
// inputBox.value 와 같은 텍스트 안의 값을 확인하는 방법으로는 해결할 수 없다.
// 추가 정보를 넣어주려면 객체가 필요하다.
// 언제? 아이템을 추가할때 (작업을 추가할때)

// 진행 중 끝남 탭을 누르면, 바가 이동한다.
// 끝남 탭은, 끝난 아이템만, 진행 중인 탭은 진행 중인 아이템만
// 객체를 만들었으면 push 할 때 배열이 아닌 객체를 넣어준다.

// 체크 버튼을 누르면 (addEventListner 도 있지만 onclick 이벤트도 줄 수 있다. HTML 안에다가 )
// 이벤트를 주는데 누군 줄 알고? 어느 부분인줄 알고?
// 따라서 객체를 만들 때 ID를 넣어주어야 한다.
let inputBox = document.getElementById('input-box');
let addButton = document.getElementById('add-button');
let tasks = document.getElementById('tasks');

let taskList = [];

addButton.addEventListener('click', addTask);

function addTask() {
    // let taskContent =
    let task = {
        id: randomIDGenerate(),
        taskContent: inputBox.value,
        isComplete: false,
    };
    taskList.push(task);
    // taskList.push(taskContent);
    console.log('clicked', taskList);
    render();
}

function render() {
    let resultHTML = '';
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == true) {
            resultHTML += `<div id="tasks" class="task">
                            <div class="task-done">${taskList[i].taskContent}</div>
                            <div>
                                <button onclick="toogleComplete('${taskList[i].id}')">Check</button>
                                <button>Delete</button>
                            </div>
                        </div>`;
        } else {
            resultHTML += `<div id="tasks" class="task">
                            <div>${taskList[i].taskContent}</div>
                            <div>
                                <button onclick="toogleComplete('${taskList[i].id}')">Check</button>
                                <button>Delete</button>
                            </div>
                        </div>`;
        }
        // console.log('aaa');
        // resultHTML += `<div id="tasks" class="task">
        //                     <div>${taskList[i].taskContent}</div>
        //                     <div>
        //                         <button onclick="toogleComplete('${taskList[i].id}')">Check</button>
        //                         <button>Delete</button>
        //                     </div>
        //                 </div>`;
    }
    document.getElementById('task-board').innerHTML = resultHTML;
}

// 체크 버튼이 클릭 되면 toogleComplete 함수가 실행되는데 이때, taskList[i]객체의 아이디 값을 넣어준다.
function toogleComplete(id) {
    console.log('check 되었다.', id);
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}
// function deleteTask(id) {}
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
