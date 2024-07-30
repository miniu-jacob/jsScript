import React from 'react'
import Box from './component/box.js'
import { useState, useEffect } from 'react';
import './App.css';

const select = {
  scissors: {
    name: '가위',
    img: '/images/scissors.png'
  },
  rock: {
    name: '바위',
    img: '/images/rock.png'
  },
  paper: {
    name: '보',
    img: '/images/paper.png'
  }
};


// console.log('객체의 이름: ', select)



function App() {

  /*  1. 버튼(img, text, tag 등)에 onClick 이벤트 발생시키기 
      2. > onClick={playGame()}
      >> 이렇게 쓰면 함수가 바로 실행되어 버리기 때문에 
  */
  const [userChoice, setUserChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (myChoice) => {
    console.log('###################');
    console.log('1. 넘어온 값: ', myChoice);
    if (select[myChoice]) {        // select 객체에 myChoice 키가 있어? 
      console.log('2. myChoice 값: ', select[myChoice])
      setUserChoice(select[myChoice]);
    } else {
      console.error(`Invalid choice: ${myChoice}`);
    }
    // random 함수를 돌려 변수에 넣는다.
    const comRandomValue = randomNum();
    console.log('리턴되어 온 값: ', comRandomValue)
    setComChoice(comRandomValue)
    // setResult(checkWinner(select[myChoice], comChoice));
    // setResult(checkWinner(select[myChoice], comChoice));
    
    
    // setUserChoice(select[myChoice]);
    // console.log('User가 선택한 값:', userChoice)

  }

  // 실시간 확인 받기 
  useEffect(() => {
    if (userChoice && comChoice) {
      setResult(checkWinner(userChoice, comChoice));
    }
  }, [userChoice, comChoice]);

  /*
  useEffect(() => {
    console.log('User가 선택한 값: (usereffect이후): ', userChoice);
  }, [userChoice])
  */

  const randomNum = () => {
    let itemsArray = Object.keys(select);
    let randomPick = Math.floor(Math.random() * 3);
    let final = itemsArray[randomPick];
    // return final;
    return select[final];
    // console.log('final 값: ', final )

    // console.log('컴퓨터 번호: ', select[randomPick])
    // 이렇게 하면 컴퓨터 번호는 undefined 라고 나온다. 
    // select 객체의 키는 문자열이고 randomPick 의 값은 0, 1, 2 이기때문이다. 
    // select 가 배열이 아니기때문에 이렇게 사용할 수 없다.
    // select 객체에서 임의의 문자열 키를 선택해야 한다. 
  }

  // 누가 이겼는지 체크해서 표시해 주는 함수 
  const checkWinner = (user, computer) => {
    console.log('User: ', user, 'computer: ', computer)
    if (user.name === computer.name) {
      return 'TIE';
    }
    else if (user.name === '바위')
      return computer.name === '가위' ? 'WIN' : 'LOSER!';
    else if (user.name === '가위')
      return computer.name === '보' ? 'WIN' : 'LOSER!';
    else if (user.name === '보')
      return computer.name === '바위' ? 'WIN' : 'LOSER!';

    }

  
  return (
    <div>
      <div className='box-screen'>
        <Box player='You' action={userChoice} result={result} /> 
        <Box player='Computer' action={comChoice} result={result} /> 
        {/* <Box player='Computer' imgSrc='#' result='Win' /> */}

      </div>
      <div className='pick-area'>
        <img onClick={() => playGame('scissors')}  className='user-pick-img' src="/images/scissors.png" alt="" />
        <img onClick={() => playGame('rock')} className='user-pick-img' src="/images/rock.png" alt="" />
        <img onClick={() => playGame('paper')} className='user-pick-img' src="/images/paper.png" alt="" />
        <h2>who Win</h2>
      </div>
    </div>
  )
}

export default App