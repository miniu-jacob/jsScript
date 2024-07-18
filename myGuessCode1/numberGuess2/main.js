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
let chanceLeft = document.getElementById('chance-left');
let history = [];

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', () => (userInput.value = ''));

// console.log('플레이버튼', playButton);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log(`정답은: ${computerNum}`);
    // return computerNum;
}

function play() {
    // userInput.textContent = '';
    let userValue = parseInt(userInput.value);
    if (isNaN(userValue) || userValue < 1 || userValue > 100) {
        resultArea.textContent = '1부터 100까지의 숫자를 입력하세요.';
        return;
    }

    if (history.includes(userInput.value)) {
        resultArea.textContent = '이미 입력한 숫자입니다. ';
        userInput.value = '';
        return;
    }
    history.push(userInput.value);

    chance--;
    chanceLeft.textContent = `남은 기회: ${chance}회`;
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
        chanceLeft.textContent = `${5 - chance} 번 만에 맞추셨습니다.`;
        playButton.disabled = true;
        // console.log('정답입니다.!!');
    }
    if (chance <= 0) {
        resultArea.textContent = `게임 종료! 정답은 ${computerNum} 입니다.`;
        playButton.disabled = true;
    }
    // pickRandomNum();
}

function reset() {
    chance = 5;
    resultArea.textContent = '게임을 다시 시작합니다.!!';
    userInput.value = '';
    chanceLeft.textContent = `남은 기회: ${chance}`;
    playButton.disabled = false;
    pickRandomNum();
}

console.log('게임 시작!!!');
pickRandomNum();
