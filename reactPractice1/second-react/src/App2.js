import './App.css';
import { useState } from 'react';
// import Box from './component/box';

function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log('counter: ', counter)
    console.log('counter2: ', counter2)
  }


  return (
    <div>
      {/* <Box name='리사' num={1 }  />
      <Box name='제니' num={2} />
      <Box name='지수' num ={3} /> */}
      
      <div>counter: {counter }</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    
    {/* 1. 유저가 버튼을 클릭한다. 
        2. counter + 1해서 1이 됨
        3. setState 함수 호출 
        4. console.log 실행됨 */}
      
    
  </div>
  );
}

export default App;
