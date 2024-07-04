// 랜덤번호 지정
// 유저가 번호를 입력한다.
// GO 버튼 클릭
// 만일 random 번호를 맞추면 알림
// 랜덤 번호가 유저 번호보다 작다 > Down
// 랜덤 번호가 유저 번호보다 크다 > Up
// Reset 버튼을 누르면 게임이 reset 됨
// 5번의 기회를 제공한다.
// 5번의 기회를 다 쓰면 게임이 끝난다. (더 이상 추측 불가, 버튼이 disable)
// 1부터 100까지 범위 밖의 숫자를 입력하면 알림 (기회를 깍지 않는다. )
// 유저가 이미 입력한 숫자를 입력하면 알림 (기회를 깍지 않는다. )

// ### STEP 1: 랜덤번호 지정
let randomNumber = 0;

function pickRandomNum() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('정답', randomNumber);
    // random 함수는 0-1까지의 소수점을 반환한다.
    // Math.random();  === 0-1까지의 소수점 반환
    // Math.random() * 100 (100을 곱한다. 여전히 소수점 반환)
    // Math.floor(Math.random() * 100) === 소수점 이하 버림
}

// ### Step 3: index.html에서 생성한 아이디값을 가져온다.
let playButton = document.getElementById('play-button');
// 아이디값을 가져왔으면 할당된 변수에 addEventListener를 더해준다.
playButton.addEventListener('click', play);
// playButton.addEventListener("click",[클릭을 했으면 무슨 함수를 실행 시킬 꺼니?] )
// >>>>> play라는 함수를 실행시켜 준다.

// play라는 함수를 만들어 준다.
// 함수를 매개변수로 넘긴다. 변수처럼 넘길때는 ()를 뺀다. ()를 하는 순간 함수가 실행된다.

// ### Step 4: User가 입력한 값을 가져와야 한다. 따라서 input tag도 아이디를 만들어 준다. (class라든가...)
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let retryChance = document.getElementById('retry-chance');
let correctAnswer = document.getElementById('correct-answer');
let chances = 5;
// Step 10-1 user history 를 배열로 선언
let history = [];

// ### Step 8-4
let gameOver = false;

// ### Step 11-1
userInput.addEventListener('focus', function () {
    userInput.value = '';
});

function play() {
    // console.log("게임 시작!");
    // 남은 횟수 체크
    console.log('남은 횟수: ', chances);
    console.log(history);
    let userValue = userInput.value;
    console.log('User Input Value: ', userValue);

    // ### Step 9-1: userValue 값을 가져왔으니 비교하기 전에 작업을 한다.
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = `1과 100 사이의 숫자를 입력해 주세요.`;
        return;
    }

    // Step 10-2 이미 이 값이 있다면 그냥 리턴을 해버린다. history 에 값이 있다면?  [VALUE.include]
    if (history.includes(userValue)) {
        resultArea.textContent = `이미 있는 숫자를 입력하였습니다. 다른 숫자를 입력해주세요.`;
        return;
    }
    // userInput은 변수이고 document.getElementById는 tag이다. 따라서 그 값을 (Value) 들고 와야 한다.
    // userInput.value
    // ### Step 5: random 번호가 결정되었고 userInput 정보도 알고 있기 때문에 비교하면 된다.

    // ### Step 8-2
    // Play버튼을 누를 때마다 chances의 값이 1씩 감소한다.
    chances--;
    // ### Step 8-5
    // 남은 횟수를 html 에 표시한다.
    retryChance.textContent = chances + ' 번의 기회가 남았습니다.';
    // 또는 백틱을 이용해서 표시할 수 있다.
    // retryChance.textContent = `${chances} 번의 기회가 남았습니다.`;

    console.log('chances: ', chances);
    if (userValue < randomNumber) {
        resultArea.textContent = 'UP!!!';
        // console.log("Up!!")
    } else if (userValue > randomNumber) {
        resultArea.textContent = 'DOWN!!';
        // console.log("DOWN!!!")
    } else {
        retryChance.textContent = '';
        resultArea.textContent = '정답입니다.!!';
        playButton.disabled = true;
        return;
        // console.log("정답입니다.")
    }

    // Step 10-2
    // history 에다가 값을 넣어 준다. 이 때 push를 사용한다
    history.push(userValue);

    // ### Step 8-3
    // chances 횟수를 다 사용하면 gameOver의 변수를 true로 바꾸고 플레이버튼을 비활성화한다.
    if (chances < 1) {
        gameOver = true;
    }
    if (gameOver == true) {
        correctAnswer.textContent = `정답은 ${randomNumber} 입니다.`;
        playButton.disabled = true;
    }
}

// ### Step 6 : console.log로는 결과를 찍어볼 수 있지만 이를 다시 index.html에서 보여 주는 작업이 필요하다.
// 따라서 index.html 에서 이미 결과가 나온다는 부분을 만들어 놓았기 때문에 그곳에 아이디를 만들어 값을 넘겨준다.
// let resultArea = document.getElementById("result-area")
// resultArea 를 언제 보여줄꺼냐? 값이 작거나, 클때
// resultArea 의 값 = "결과 맞추기" 텍스트의 ID값
// 따라서 resultArea 테그의 textContent 로 값을 입력해 줄 수 있다.
// resultArea.textContent = "UP!!"
// 값이 크거나, 작거나, 같을 때 모두 변경해 준 후에 기존에 있던 console.log는 모두 주석처리한다.

// ### Step 7: Reset 버튼 만들기
// Reset button의 아이디를 가져온다.
// let resetButton = document.getElementById("reset-button")
// Reset 버튼이 눌리면 (이벤트가 발생하면) pickRandomNum 함수를 불러온다.
resetButton.addEventListener('click', reset);

function reset() {
    // User input 창이 깨끗하게 정리되고
    userInput.value = '';
    // 새로운 번호가 생성되고
    // 결과값의 멘트를 수정 "맞췄습니다. => 결과가 표시됩니다."
    // 문장에 동적인 값을 넎어주고 싶을 때에는 "" 가 아니라 다른 문법을 써 주어야 한다.
    resultArea.textContent = '결과가 표시됩니다.';
    retryChance.textContent = `5번의 기회가 제공됩니다.`;
    chances = 5;
    correctAnswer.textContent = ``;
    playButton.disabled = false;
    gameOver = false;
    history.value = '';
    pickRandomNum();
}

// ### Step 8: 5번의 기회를 제공한다.
// let chances = document.getElementById("retry-chance")
// 언제 기회를 감소시킬 수 있을까? 플레이 중에, 따라서 플레이 함수 안에 chances를 1씩 감소시킨다.
pickRandomNum();

// ### Step 9: 1-100 사이의 값을 입력하면 알려준다.
// user가 입력한 값을 play  함수 내에서 가지고 왔다.
// 값을 비교하기 전에 유효성 검사 진행

// ### Step 10: 유저가 어떤 숫자를 입력을 해 왔었는지 알아야 한다.
//  따라서 history 를 array 로 만들어 준다.

// ## Step 11: userInput 의 값을 지워줘야 하니 불편하다.
// 따라서 userInput box에 포커싱이 되면 userInput 의 value를 없애주겠다.
// Step 11 에서 사용한 함수는 익명의 함수이다.
// userInput.addEventListener("focus", function() {userInput.value = ""})
// 따라서 다음과 같이 고쳐 쓸 수 있다.
// userInput.addEventListener("focus", ()=> userInput.value = "")
