// 랜덤번호 지정
// 유저가 번호를 입력한다.
// Go 라는 버튼을 입력하면 랜덤번호와 비교한다.
// 버튼 아이디를 가져와서 변수에 넣는다.
// 유저가 입력한 값을 들고 와야 한다.
// user가 입력한 값은 우선 user-input (ID)값을 변수에 넣어주고
// 그 변수의 값 userInput.value 을 처리해 준다.
// 비교한 결과를 UP, DOWN 으로 표시해 준다.
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다. (버튼 disable)
// 유저가 100범위를 벗어난 숫자를 입력하면 알려준다. (기회 그대로)

let computerNum = 0;
let chance = 5;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);

// console.log('플레이버튼', playButton);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log(`정답은: ${computerNum}`);
    // return computerNum;
}

function play() {
    let userValue = userInput.value;
    console.log(`유저가 입력한 값: ${userValue} `);
    console.log(`정답은: ${computerNum}`);
    if (userValue < computerNum) {
        // resultArea.innerHTML = 'UP!!';
        resultArea.textContent = 'UP!!';
        // console.log('UP!!');
    } else if (userValue > computerNum) {
        resultArea.textContent = 'DOWN!!';
        // console.log('DOWN!!');
    } else {
        resultArea.textContent = '정답입니다.!!!';
        // console.log('정답입니다.!!');
    }
    chance--;
    // pickRandomNum();
    console.log(chance);
}

function reset() {
    resultArea.textContent = '게임을 다시 시작합니다.!!';
    userInput.value = '';
    pickRandomNum();
}

console.log('게임 시작!!!');
pickRandomNum();
