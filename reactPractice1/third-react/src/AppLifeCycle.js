import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0);


  // increase 를 클래스 컴포넌트로 만들기
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log('counter는 ', counter, 'counter2 state는 ', counter2);
  }


  // useEffect 사용하기 
  // useEffect는 매개변수를 두개를 받는다. 
  // 1. 콜백함수 
  // 2. 배열 (Array)
  // useEffect(()=>{}, [])

  useEffect(() => {
    console.log('useEffect1 fired')
   }, []);

  useEffect(() => {
    console.log('useEffect 2 fired', counter2)
  }, [counter2]);
  //
  return (
    <div className="App">
      {console.log('render') }
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
