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

function addTask() {
    //    console.log(taskInput.value);
    // let taskContent = taskInput.value;
    // Step 7-1
    // 기존에는 taskContent = taskInput.value와 같이 값 하나를 추가했지만
    // task라는 객체를 따로 만들어 그 안에 값을 넣어줄 수 있다.
    // 객체의 마지막은 ; 로 끝나지 않고 , 로 끝난다.
    // 그리고 taskList 에 push 로 넣어줄 때 객체를 넣어준다.

    let task = {
        taskContent: taskInput.value,
        isComplete: false,
    };
    // ### Step 7-2: 실제 테스트를 해 보면 console.log에서 객체가 찍히는 것을 확인할 수 있다.
    // 따라서 객체에 접근해서 값을 가져와야 한다.
    // ### Step 7-4-2: taskList.push 에 task.taskContent를 입력하는 것이 아니라 isComplete까지 모두 push 해야 한다.
    taskList.push(task);
    console.log(taskList);
    render();
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
                            <button>Check</button>
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
