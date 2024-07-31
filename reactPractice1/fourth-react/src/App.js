import React from 'react'
import { useState, useEffect } from 'react';
import { API_KEY } from './apikey.js';
import './App.css';
import './fonts/Font.css';
import WeatherBox from './component/WeatherBox.js'; 
import WeatherButton from './component/WeatherButton.js';
import 'bootstrap/dist/css/bootstrap.min.css';

let lat;
let lon;

function App() {
  const [cityName, setCityName] = useState(null);
  // const [weather, setWeather] = useState({});
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(0);


  /* ###  도시 정보를 WeatherButton 에서 관리하게 되면 날씨를 출력하는
    역할인 WeatherBox 로 정보를 전달하기가 어렵다.
    따라서 상태를 변경하거나, 함수 등은 부모인 App이 모두 관리하고
    필요한 정보를 보내주는 방식으로 할 수 있다. 
    setCity 정보는 컴포넌트를 통해서 전달한다. 
    <WeatherButton setCity={setCity} /> 
  */
  const [city, setCity] = useState('');

  // 도시에 대한 array 를 만든다. 
  const cities = ['Hanoi', 'Ho Chi Minh', 'Nha Trang', 'Dalat', 'Seoul'];
  // 도시 배열을 컴포넌트에 전달한다. 
  

  useEffect(() => {
    getCurrentLocation();
    // 배열에 아무것도 주지 않으면 componentDidMount 처럼 발동한다.  

  }, []);

  useEffect(() => {
    getWeatherByCity();
    console.log('city? ',city )
   }, [city]);


  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data)
     
   }

  const getCurrentLocation = () => {
    console.log('함수 실행됨')
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log('현재 위치: ', lat, lon)
      sendRequest(lat, lon);
    });
  }




const sendRequest = async (lat, lon) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}`;
  // 섭씨로 요청하려면 unit=matric 을 추가한다. 
  console.log('URL: ', baseUrl);
  const url = new URL(baseUrl);
  const response = await fetch(url);
  const data = await response.json();
  console.log('날씨 데이터 값: ', data)


  // weather 의 값을 업데이트한다. 
  setWeather(data);

  // const valNum = calTemp(data.main.temp);

  // setCityName(data.name);
  // setWeather(data.weather[0]);
  // setTemp(valNum)


  // console.log('전체데이터', data)
  // console.log('data: ', data.name)
  // console.log('날씨정보', data.weather[0])
  // console.log('시간: ', data.timezone)
  // console.log('온도: ', valNum)
}
    

// const calTemp = (tempCal) => {
//   return  tempCal - 273.15;
//    
//  }

  return (
    <div>
      <div className='container'>
        {weather ? <WeatherBox weather={weather} /> : <p>Loading...</p>}
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  )
}

export default App
