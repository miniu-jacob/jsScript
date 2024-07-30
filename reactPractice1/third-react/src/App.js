import React from 'react'
import { useState, useEffect } from 'react';
import { API_KEY } from './apikey.js';
import './App.css';

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
    <div>
        <div className='location-box'>
          <div>현재위치: {cityName }</div>
          <div>날씨: { weather.main }</div>
          <div>상세날씨: { weather.description }</div>
        <div>온도: {temp.toFixed(2)} doC </div>

        test
        </div>
    </div>
  )
  }

export default App
