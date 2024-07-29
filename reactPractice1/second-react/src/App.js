import './App.css';
import { useState } from 'react';
import  Box from './component/box.js';
// import { useState } from 'react';

// 사진에 대한 정보를 저장하는 객체를 만들어 보자.
const choice = {
  rock: {
    name: 'Rock', 
    image: '/images/rock.png',
  },
  scissors: {
    name: 'scissors', 
    image: '/images/scissors.png'
  }, 
  paper: {
    name: 'paper',
    image: '/images/paper.png'
  }
}

function App() {

  // 내가 무엇을 낼지 선택하면 화면에 그려주기
  const [userSelect, setUserSelect] = useState(null);

  // computer 를 위한 useState도 만들어 준다. 
  const [comSelect, setComSelect] = useState(null);

  // 승패를 보여주는 결과 값
  const [result, setResult] = useState("");
  
  // user가 선택한 값을 알고 있다. 누가? playGame 에서 item 이 

  const playGame = (item) => {
    // userSelect = choice[userChoice]
    setUserSelect(choice[item]);
    // setComSelect() >> 랜덤하게 선택하기
    let comChoice = randomChoice();
    setComSelect(choice[comChoice])

    // 이겼는지 졌는지 판단하는 함수 
    whoWin(choice[item], choice[item]);
    
    // onClick 이벤트 발생 > playGame 함수 실행(그냥은 안되고 콜백으로)
    // item 값이 (가위, 바위, 보) 넘어왔으니 업데이트된 
    // userSelect > 를 넣어준다. 어디에? Box 에 
    console.log('aaa', item)
  }

  const whoWin = (user, computer) => {
      console.log('user: ', user, 'computer: ', computer)
    }

    const randomChoice = () => {
      // let number = Math.floor(Math.random()*100)%3;
      // Object.keys 는 객체의 index 번호를 배열로 리턴한다.
      let itemArray = Object.keys(choice);
      console.log('item array: ', itemArray)
      let randomItem = Math.floor(Math.random() * itemArray.length);
      console.log('random Value', randomItem)
      let final = itemArray[randomItem];
      // console.log('final', final)
      // return itemArray[randomItem];
      return final;
      
    }
  
  return (
    <div>
      <div className='box-screen'>
        {/* <div>Hello</div> */}
        <Box player='You' choose={userSelect} className='each-box' result={ result } />
        <Box player='Computer' choose={comSelect} result={result} />
      </div>
      <div className='pick-area'>
        <img onClick={()=>playGame('scissors')} className='user-pick-img' src={ choice.scissors.image } alt="" />
        <img onClick={()=>playGame('rock')} className='user-pick-img'  src={choice.rock.image} alt="" />
        <img onClick={()=>playGame('paper')} className='user-pick-img' src={choice.paper.image} alt="" />
      <div><h2>Result</h2></div>
      </div>
   </div> 
  );
}

export default App;
