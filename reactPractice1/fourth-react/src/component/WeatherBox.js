import React from 'react'

const WeatherBox = ({weather }) => {
  console.log('weather?', weather)

  // 캘빈 온도를 변환
  // 섭씨로 변환: 캘빈 - 273.15
  console.log('calbin temp: ', weather.main.temp)
  const celsius = weather.main.temp - 273.15;

  // 화씨로 변환: (캘빈 - 9/5) - 459.67
  const fahrenheit = (weather.main.temp * 9 / 5) - 459.67;
  const weatherDec = weather.weather[0].description;

  /*
  weather 가 비동기 적으로 전달되는 값이다 보니
  null 인 경우 에러가 발생한다. 

  ### 에러 
  ERROR
    Cannot read properties of null (reading 'name')
    TypeError: Cannot read properties of null (reading 'name')


    1. {weather && weather.name} 
    >>> weather 가 있는 경우 weather.name 의 내용을 div 에 넣는다. 
    
    2. { weather?.name }
    >>> 같은 내용이지만 짧게 쓸 수 있다.
    
    3. App.js 에서 컴포넌트 <WeatherBox /> 를 호출할 때 조건을 설정
    기존:  <WeatherBox weather={weather} /> 
    변경:  {weather ? <WeatherBox /> : <p>Loading...</p>}
  */

  return (
    <div className='weather-box'>
      <div>{ weather.name }</div>
      <h2>{celsius.toFixed(2)} &#8451; / {fahrenheit.toFixed(2)} &#8457;
      </h2>
      <h3>{weatherDec}</h3>
      
    </div>
  )
}

export default WeatherBox
