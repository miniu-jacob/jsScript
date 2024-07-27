// 모듈 사용 이유
/* 
  ### 1. express: 웹 서버 프레임워크 node.js 에서 가장 많이 사용되는 웹 프레임워크
    간단하고 유연한 웹 서버와 API 서버를 구축할 수 있도록 도와줌
    - 라우팅: 
              클라이언트의 요청 URL에 따라 다른 동작을 수행하는 라우팅 기능 제공
    - 미들웨어:
              요청과 응답 사이에서 필요한 작업(예: 본문 파싱, 인증, 로그 기록 등)
              을 수행하는 미들웨어를 쉽게 설정할 수 있음 
    - 서버 설정: 
              간단하게 서버를 설정하고 실행할 수 있음 

  ### 2. node-fetch 모듈
        HTTP 요청: 서버 사이드에서 HTTP 요청을 보내기 위한 라이브러리, 
        브라우저에서 사용하는 fetch API 와 유사한 기능을 제공
    - API 호출: 
              서버에서 다른 API에 요청을 보내고 데이터를 가져오기 위해 사용
    - 비동기 처리:
              비동기적으로 HTTP 요청을 보내고 응답을 처리할 수 있음
  
  ### 3. cors 모듈: (Cross-Origin Resource Sharing) 다른 출처(도메인)에서
        오는 요청을 허용할 수 있도록 설정하는 미들웨어
    - 교차 출처 리소스 공유 허용:
      기본적으로 브라우저는 동일 출처 정책(Same-Origin Policy)을 따르기 때문에
      다른 도메인에서 오는 요청을 차단한다. cors 모듈을 사용하여 서버에서 오는
      요청을 허용하도록 설정하면 클라이언트가 다른 출처에서 요청을 보낼 수 있음 

*/

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 
import { NAVER_CLIENT_ID, N_CLIENT_SECRET } from './apikeys.js';
// const express = require('express'); // express 모듈을 가져옴
// const fetch = require('node-fetch'); // node-fetch 모듈을 가져옴
// const cors = require('cors'); // cors 모듈을 가져옴
// const { NAVER_CLIENT_ID, N_CLIENT_SECRET} = require('./apikeys');
// naver API 키를 가져옴

const app = express(); // express 어플리케이션을 실행 
const port = 3000; 

app.use(cors());      // 모든 도메인에서의 요청을 허용하는 CORS 미들웨어 사용

// /news 엔드포인트에 대한 GET 요청 핸들러 정의 
app.get('/news', async (req, res) => {
  // const keyword = '뉴스';     // 기본 검색어 설정 > 서버에서만 
  const keyword = req.query.category || '뉴스';     // 기본 검색어 설정 > 클라이언트에서 전달된 값 사용
  const url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(keyword)}&display=20&start=1&sort=sim`; // 네이버 뉴스 API URL을 생성합니다.

  try {
    const response = await fetch(url, {       // fetch 함수로 네이버 뉴스 API 호출
      method: 'GET',          // HTTP GET 메소드 사용
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': N_CLIENT_SECRET
      }
    });

    const data = await response.json();     // 응답을 JSON형식으로 파싱
    res.json(data);             // 클라이언트에 JSON 형식의 데이터를 응답 
  } catch (error) {
    // // 에러 발생 시 상태 코드 500과 에러 메시지를 응답  
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(port, () => {        // 서버를 설정한 포트에서 실행 
  console.log(`Server running at http://localhost:${port}`)
})