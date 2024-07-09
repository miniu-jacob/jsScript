import './App.css';
import { useState } from 'react';
// import Box from './component/Box';

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
        console.log('counter: ', counter, 'counter2는: ', counter2);
    };

    const decrease = () => {
        setCounter2(counter2 - 1);
        console.log('counter: ', counter, 'counter2는: ', counter2);
    };

    return (
        <div>
            <div>{counter}</div>
            <div>state:{counter2}</div>
            <button onClick={increase}>클릭1</button>
            <button onClick={decrease}>감소</button>
        </div>
    );
}

export default App;
