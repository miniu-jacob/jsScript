import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {

  console.log('시티정보: ', cities)
  
  
  // HTML 에서 JS 를 쓰고 싶다면 { } 를 쓴다.

  /* 버튼을 onClick 을 하면 콜백함수(바로 실행안됨, 클릭하면 실행됨)
    - 그러니까 onClick을 했을 때 props 로 넘어온 setCity 함수를 냅다 쓴다. 
    - 그리고 버튼의 요소 그 자신을 setCity(item) 의 값으로 넣는다.
    - 즉, WeatherButton 에서는 state값을 바꾸지 않고 함수에 요소를 담아서
      App 에 전달한다.
    - 이를 확인하기 위해 App.js 에서 useEffect 를 하나 더 만들고 확인한다.
    useEffect(()=>{}, []);
  */  


  return (
    <div>
      <Button variant="outline-warning">Current Location</Button>

      {
        cities.map((item, index) => (
          <Button variant="outline-warning "
                  key={index}
                  onClick={()=>setCity(item)}
          >{item}</Button>
        ))
      }
    </div>
  );
};

export default WeatherButton
