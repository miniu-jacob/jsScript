// ### Step 4. 유저 값 가져오기
let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList = [];
addButton.addEventListener('click', addTask);

// ### Step 7-3: 엔터키를 입력해도 아이템이 등록되도록
// 기존에는 + 버튼에 클릭 이벤트를 발생시켰지만 키 입력을 받는 곳이 HTML 에 task-input 박스이다.
// task-input  박스의 ID를 taskInput 변수에 담아 두었기 때문에 taskInput. 변수에 이벤트 리스너를 실행시킨다.
// 따라서 taskInput.addEventListener('keydown') 키를 입력 받고
// 어떤 이벤트냐? 이벤트의 키가 Enter 키 인 경우에 addTask()함수를 실행시키는 함수를 만든다.
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// ### Step 7-5: 텍스트 박스에 포커싱이 되는 경우 내용 삭제
// 어디에? addTask 한 후에, addTask 함수가 실행되고 마지막에
function addTask() {
    //    console.log(taskInput.value);
    // let taskContent = taskInput.value;
    // Step 7-1
    // 기존에는 taskContent = taskInput.value와 같이 값 하나를 추가했지만
    // task라는 객체를 따로 만들어 그 안에 값을 넣어줄 수 있다.
    // 객체의 마지막은 ; 로 끝나지 않고 , 로 끝난다.
    // 그리고 taskList 에 push 로 넣어줄 때 객체를 넣어준다.

    let task = {
        id: randomIdGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    };
    // ### Step 7-2: 실제 테스트를 해 보면 console.log에서 객체가 찍히는 것을 확인할 수 있다.
    // 따라서 객체에 접근해서 값을 가져와야 한다.
    // ### Step 7-4-2: taskList.push 에 task.taskContent를 입력하는 것이 아니라 isComplete까지 모두 push 해야 한다.
    taskList.push(task);
    console.log(taskList);
    render();
    taskInput.value = '';
    // taskContent = '';
}

// ### Step 5: 할일들은 한줄씩 여러 줄이기 때문에 array 로 만들어 준다.
// taskList = [];
// array에 한줄씩 추가하기 위해서는 VALUE.push()  를 이용한다.
// taskContent라는 변수를 만들고 taskInput의 value 즉 유저가 입력한 값들을 변수에 넣어준다.

// ### Step 6: 화면에 그리기, 어디에? 집가기 div? 아니면 다른 곳?
// 그리는 함수를 하나 만들어 준다. 왜?
// 할일 (집 가기)이 2줄 이상 된다고 가정해 보면 아래의 div 전체를 복사해서 붙여넣기 하면 된다. 즉 task div를 복사, 붙여넣기가 된다.
// 따라서 task div를 담고 있는 부모 div에 ID를 주고 가지고 온다.
/* 
<div class="task">
    <div>집 가기</div>
    <div>
        <button>Check</button>
        <button>Delete</button>
    </div>
</div>

*/

// ### Step 9: 화면에 보이도록 render에 작업을 해 준다.
// render 아래 if 문을 하나 추가
// 만약에 if, taskList[i]번째 있는 isComplete == true라면
// 밑에 있던 task List div 를 복사
// 이후에 taskList[i]번째.taskContent 글씨에 클래스 이름을 붙이고 작업
// task-done 클래스를 CSS에서 수정

function render() {
    let resultHTML = '';
    // Step 6: for 문을 사용해서 resultHTML 을 그려 넣을 수 있다. 뭘로? 입력받은 값으로
    // 따라서 0부터 taskList의 길이까지 값을 증가시켜 가며 노출
    // 뭘 노출할 꺼냐? 아까 한줄씩 나왔던 div tag (task tag) 를 붙여넣으면 된다.
    // 하지만 하나씩 노출하고 싶으면 전의 내용을 가지고 있어야 하기 때문에 a = a + 1
    // 또한 배열이기 때문에 taskList 의 [N] 번째 내용을 추가해야 한다. 따라서
    // taskList[i] 로써야 한다.

    // ### Step 7-4: taskList[i]
    // String 이었을 때는 객체니까 taskList[i] 값을 가능했지만 객체일 때는 다르게 써줘야 한다.
    // 따라서 초기에 값을 입력받을 때 taskList
    for (i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
                        <div>${taskList[i].taskContent}</div>
                        <div>
                            <button onclick="toogleComplete('${taskList[i].id}')">Check</button>
                            <button>Delete</button>
                        </div>
                    </div>`;
    }

    // document.    (HTML 문서의)
    // getElementById( task-board 아이디를 가진 요소를 불러와서)
    // .innerHTML (내부에 그려 넣는다.)
    // 뭘 붙여 넣을꺼냐? = " "
    // 이미 변수로 만들어 놓은 resultHTML을 붙여 넣을꺼다.
    document.getElementById('task-board').innerHTML = resultHTML;
}

// Step 7: 객체 만들기
//     let taskContent = taskInput.value; 스트링 타입으로는 표현이 되지 않음
//  taskInput.value 는 값만 넣어주고 있음, task가 끝났는지 아닌지에 대한 정보가 없음
// 즉 아이템의 이름, 상태에 대한 추가적인 정보를 만들어 주어야 한다.
// 따라서 객체를 쓰는 방법을 사용할 수 있다.

// Step 8: 체크 버튼
// 1. 체크 버튼을 클릭하는 순간, isComplete  를 false에서 true로 변경
// 2. isComplete 가 true인 경우 끝난 것으로 간 주하고 밑줄
// false 이면 안끝난 것으로 간주하고 그대로
// 문제는 체크 버튼이 html 이 아니라 main.js 에 있다. 이런 경우
// document.getElementById('click', ...) 가 아니라 다른 방법
// 즉 onClick 이벤트를 줄 수 있다.
// <button onclick="toogleComplete()">Check</button>

// ### Step 8-3: ID값을 전달해 주었으니 id 값을 받아올 수 있다.
// function toogleComplete() 에서 toogleComplete(id) 로
function toogleComplete(id) {
    console.log('ID: ', id, 'check 되었음');

    // ### Step 8-4: ID값을 넘겨 주었으면 아이디를 베이스로 해서 isComplete 를 true 로 변경할 수 있어야 한다.
    // 우선은 아이디 값을 베이스로 찾는 법부터 for 문을 써서 찾을 수 있다.
    // taskList[i] 배열에 있는 아이디가 매개변수로 받은 아이디와 같다면?
    // taskList[i].번째 isComplete 의 값을 true로 바꿔라
    // 작업을 완료하고 나면 바로 break로 for 문을 종료한다.
    // true인 경우라면 어떻하지?
    //
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            console.log('같은 값 있음', id);
            taskList[i].isComplete = true;
            break;
        }
    }
    console.log(taskList);
}
// ### Step 8-1: onclick이 되면 객체를 찾아서 액션을 취해야 한다.
// 객체를 어떻게 찾지? 파라미터로 받아야 하나?
// 다시 말해 선택을 뭘 했는지 어떻게 알지?
// 정보에도 ID가 필요함
// 따라서 addTask 시에 (객체를 만들 시에) ID를 부여할 수 있다.
// 구글에서 generate random id javascript 입력
// github a unique ID/name generator for JavaScript
/* 
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};
*/

// 결과적으로 randomIdGenerate() 함수를 만들고
// addTask 함수 안에 task 객체를 만들 때 id: randomIdGenerate(), 함수를 호출할 수 있다.

function randomIdGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// ### Step 8-2: ID 값을 전달해야 한다. 어디에? toogleComplete 함수에
// for 문이 돌면서 taskList[i].textContent 가 아닌 taskList[i].id 값을 전달
// 단 값을 전달할 때 '' 싱글 쿼테이션으로 묶어 준다.
// 또한 ${}변수처리를 해야 한다.
