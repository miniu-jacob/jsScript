import './App.css';
import { useState } from 'react';
import Box from './component/Box';
import rockImage from './images/rock.png';
import paperImage from './images/paper.png';
import scissorsImage from './images/scissors.png';

// 1. 박스 2개 그리기
//  - title
//  - image
//  - result
// 2. button (가위바위보)
// 3. 버튼을 클릭하면 게임이 진행이 된다.
/* ### Step 3.1: 버튼을 클릭하게 되면 가위를 클릭했을 때 가위 사진이. 다른 버튼은 다른 사진을 불러온다. 
      따라서 사진과 이름을 객체로 저장해 주는 것이 유용하다. 
*/
const choice = {
    rock: {
        name: 'Rock',
        img: rockImage,
    },
    paper: {
        name: 'Paper',
        img: paperImage,
    },
    scissors: {
        name: 'Scissors',
        img: scissorsImage,
    },
};

// ### Step 3.2: 버튼을 클릭하는 이벤트 ? >> onClick (HTML 에서는 onclick)
// 어디에? 버튼 테그에 >> 버튼 테그는 어디에 속해 있지? App() 안에
// <button onClick={play}>가위</button>
// 따라서 App() 함수 안에 onClick={play} 즉 play라고 하는 함수를 만들어 준다.
// 가위 바위 보 중 어떤 것을 선택했는지 어떻게 알지?

// ### Step 3.3: 내가 어떤 것을 선택했는지 알려주기 위해서 매개변수를 넣어 준다.
// 어디에? play() 함수의 ()에.
// 텍스트니까 play('rock'). 그다음에는 매개변수를 받는 부분 즉 play() 함수 안에
// 임의의 이름으로 매개변수를 받는다.
// 해보니까 선택하지도 않았는데 이미 선택되었다고 print가 되어 있다. 왜?
// react가 실행될 때 UI를 처음에 그려 줘야 한다.
// 그런데 함수가 onClick에 이미 들어가 있기 때문에 자동으로 실행된다.
// 따라서 콜백함수로 ()=> 형태로 넣어줘야 한다.
// 결론적으로
// <button onClick={play('rock')}> 바위</button> 에서
// <button onClick={()=>play('rock')}> 바위 </button> 과 같이 사용한다.

// ### Step 3.4: 가위를 선택하면 이미지가 가위 이미지로 교체 되어야 한다. 어떻게?
// userChoice가 있는 play 함수 안에서 작업한다.
// if 문? for문? map? 객체 안의 값과 비교해서 다른 아이템 선택하기
// UI의 값이 바뀌게 하는 것은? State, 따라서 useState 를 가지고 온다. (import)
// 그리고 App() 함수 안에서 정의한다.

// 4. 컴퓨터의 값은 random하게 선택이 된다.
// ### Step 4.1 : 값을 보여주려면? UI 를 업데이트 해야 한다.
// UI 업데이트는? state를 만든다.

// 5. 이기면 초록색, 지면 빨간색으로 변한다. 비기면-검정색
// 6. 이기면 Win, 지면 Looser,

const randomChoice = () => {
    // ### Step 4.2: 객체를 배열화 시킨다.
    // Object.keys 가 의미하는 것 객체의 이름
    // 객체의 키 값만 뽑아서 array 로 만들어 주는 함수다.
    // array에는 index 번호가 있다.
    let itemArray = Object.keys(choice);
    console.log('item array', itemArray);

    // Math.floor(Math.random());
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    console.log('random value: ', final);
    return choice[final];
};

function App() {
    // ### 3.4: setState 정의
    // const [변수, set변수] = useState(0); (어떤 값인지 모를때는 null)

    // ### 3.5: useSelect 의 값을 내가 선택한 값으로 바꿔 준다. 3.4에서와 동일
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('');

    const play = (userChoice) => {
        // userSelect = 하고 값을 어디서 가지고 오냐? choice에서
        // userSelect 의 값을 >> userSelect =
        // choice에서 유저가 선택한 값을
        // userSelect = choice[userChoice] 을 들고 온다.
        // userSelect = choice[userChoice]; 이러면 에러가 난다. 왜? useState는 set으로 값을 변경할 수 있다.
        // 따라서 set함수를 쓸 때는 setUserSelect() >> setUserSelect(choice변수안에 있는 이름)
        // 이때 user가 선택한 버튼이 userChoice, 매개변수로 넘겨주었기 때문에
        // choice[userchoice] 라고 쓸 수 있다. 객체에 접근할 때는 name[parameter] 와 같이 쓸 수 있다.
        // setUserSelect(choice[])
        setUserSelect(choice[userChoice]);
        let comChoice = randomChoice();
        setComSelect(comChoice);
        setResult(whoWin(choice[userChoice], comChoice));
        console.log('result: ', result);
        // setComSelect(choice)
        // console.log('선택한 값: ', userSelect);
        // console.log('선택됨', userChoice);
    };

    const whoWin = (user, computer) => {
        // user == computer tie
        // user == rock, computer == scissors user win
        // user == scissors, computer == paper user win
        if (user.name === computer.name) {
            return 'TIE';
            // console.log('Result: TIE');
        } else if (user.name === 'Rock')
            return computer.name === 'Scissors' ? 'WIN!!' : 'Loose!';
        else if (user.name === 'Scissors')
            return computer.name === 'Paper' ? 'WIN!!' : 'Loose!';
        else if (user.name === 'Paper')
            return computer === 'Rock' ? 'WIN!!' : 'Loose!';
        //         return 'WIN!';
        //     } else {
        //         return 'Lose!';
        //     }
        // }

        console.log('user', user, 'Computer', computer);
    };
    return (
        <div>
            <div className='container'>
                <Box player='You' action={userSelect} result={result} />
                {/* <Box player='You' action='scissors' /> */}
                <Box player='Computer' action={comSelect} result={result} />
            </div>
            <div className='button-list'>
                <button onClick={() => play('scissors')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    );
}

export default App;
