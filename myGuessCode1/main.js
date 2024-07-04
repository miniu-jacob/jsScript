let resetButton = document.getElementById('reset-button');
let userInput = document.getElementById('user-input');
let playButton = document.getElementById('play-button');

let randomNum = 0;

resetButton.addEventListener('click', reset);
playButton.addEventListener('click', play);

// Starting Point
chooseRandomNum();

function chooseRandomNum() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`생성된 번호: ${randomNum}`);
}

function play() {
    let userValue = userInput.value;
    console.log(`생성된 번호: ${randomNum} , 유저가 입력한 번호: ${userValue}`);
}

function reset() {
    chooseRandomNum();
}
