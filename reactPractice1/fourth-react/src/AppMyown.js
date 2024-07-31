import React from 'react'
import { useState, useEffect } from 'react';
import { API_KEY } from './apikey.js';
import './App.css';
import './fonts/Font.css';

let lat;
let lon;

function App() {
  const [cityName, setCityName] = useState(null);
  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    getCurrentLocation();
    // 배열에 아무것도 주지 않으면 componentDidMount 처럼 발동한다.  

  }, []);

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
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(baseUrl);
  const url = new URL(baseUrl);
  const response = await fetch(url);
  const data = await response.json();
  const valNum = calTemp(data.main.temp);

  setCityName(data.name);
  setWeather(data.weather[0]);
  setTemp(valNum)


  console.log('전체데이터', data)
  console.log('data: ', data.name)
  console.log('날씨정보', data.weather[0])
  console.log('시간: ', data.timezone)
  console.log('온도: ', valNum)
}
    

const calTemp = (tempCal) => {
  return  tempCal - 273.15;
   
 }

  return (
    <div className='container'>
        <div className='location-box'>
          <div className='location-area'>{cityName }</div>
          <div className='temperature-area'>
            <div className='temperature'>{temp.toFixed(2)} &#8451; </div>
            <span> / </span>
            <div className='temperature'>{temp.toFixed(2)} &deg;F </div>
          </div>
          {/* <div>날씨: { weather.main }</div> */}
          <div className='weather-des'>{ weather.description }</div>
        </div>
      <div className='city-area'>
        <button>Current Location</button>
        <button>Hanoi</button>
        <button>HCM</button>
        <button>Nha Trang</button>
        <button>Dalat</button>
        <button>Seoul</button>
        </div>
    </div>
  )
  }

export default App
