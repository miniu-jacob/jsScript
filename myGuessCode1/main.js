let resetButton = document.getElementById('reset-button');
let userInput = document.getElementById('user-input');
let playButton = document.getElementById('play-button');
let resultValue = document.getElementById('result-value');
let upAndDown = document.getElementById('up-and-down');

let randomNum = 0;
let gameLife = 5;
let history = [];

resetButton.addEventListener('click', reset);
playButton.addEventListener('click', play);
userInput.addEventListener('focus', () => (userInput.value = ''));

// Starting Point
chooseRandomNum();

function chooseRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`생성된 번호: ${randomNum}`);
}

function play() {
    console.log(history);
    let userValue = userInput.value;
    console.log(`\t생성된 번호:\t\t ${randomNum} 
    유저가 입력한 번호:\t ${userValue} 
    남은 횟수:\t\t\t ${gameLife}
        `);

    // 1-100 안의 범위에 숫자를 입력해야 함
    if (isNaN(userValue) || userValue < 1 || userValue > 100) {
        upAndDown.textContent = '';
        resultValue.textContent = `1-100 사이의 숫자를 입력해야 합니다. `;
        return;
    }

    // history check
    if (history.includes(userValue)) {
        resultValue.textContent = '이미 입력한 숫자입니다. ';
        upAndDown.textContent = '';
        return;
    }
    history.push(userInput.value);

    resultValue.textContent = `${gameLife - 1}번의 기회가 남았습니다. `;
    if (userValue < randomNum) {
        upAndDown.textContent = 'UP!!';
    } else if (userValue > randomNum) {
        upAndDown.textContent = 'DOWN!!';
    } else {
        upAndDown.textContent = '정답입니다.';
        resultValue.textContent = '';
        playButton.disabled = true;
    }
    gameLife--;

    // 5 time over
    if (gameLife === 0) {
        playButton.disabled = true;
        upAndDown.textContent = `실패했습니다. 정답은 ${randomNum} 입니다.`;
        resultValue.textContent = '';
    }
}

function reset() {
    chooseRandomNum();
    resultValue.textContent = '게임을 시작합니다. ';
    gameLife = 5;
    playButton.disabled = false;
    history = [];
}
