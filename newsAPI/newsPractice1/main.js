import { API_KEY } from "./apikey.js";

let newsList = [];

const getLatestNews = async () => {
  // 새로운 타입으로 만들 수 있다.
  //new URL() 로 Object로 만들면 URL 객체를 출력한다.
  // URL 처리에 필요한 함수와 변수들을 제공한다.
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
  );
  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  // url 을 불러올 수 있는지를 확인
  // console.log('URL: ', url);
  // 데이터를 가져오기 (bring it to..>>> fetch(url))
  // 다만 이 값을 가져온다고 뭔가를 출력하는 것은 아니기 때문에 변수에 넣는다.
  // fetch(url);
  const response = await fetch(url);

  // 콘솔로 response의 값을 찍어 보면 Promise > "pending" 이라는 것을 확인할 수 있다.
  // 그래서 결과값이 나올 때까지 "기다려" 라는 의미로 await 을 붙여 준다.
  // await은 비동기 함수에서 사용할 수 있기때문에 arrow 또는 함수 앞에 async를 붙여 준다.
  // console.log(response);

  // 응답에 body 안을 보면 readable 이라고 되어 있는 것을 볼 수 있다.
  // JSON 으로 되어 있기 때문에 내용을 뽑아 줘야 한다.
  // response.json() >>>> fetch() 로 가져온 응답 response 를 json으로 뽑아 달라. 이를 변수에 담는다.
  console.log(response)
  const data = await response.json();
  newsList = data.articles;
  // 뉴스 리스트가 확정된 다음에 UI 를 그려 준다.
  render();
  // console.log("news: ", news);


  // async 함수로 지정한 뒤에 async () =>{}
  // fetch 를 통해 url 을 가져와서 response 에 넣었다. 이 과정에서 기다려야 하니 await 을 주고
  // const response = await fetch(url);
  // 이 response는 그대로 사용할 수 없어. body 안에 있는 내용을 json 으로 가져온다. 
  // const data = await response.json();
  // 콘솔로 찍어보면 data.articles 에 헤드라인 정보가 들어있는 것을 확인할 수 있다. 
  // 여기에 있는 news = data.articles; 에서 news는 다른 함수에서 이 뉴스를 많이 가져다 쓸 것이다. 
  // 따라서 news 를 전역 변수로 선언한다. 
};

// getLatestNews();

// UI 그려주기 
const render = () => {

  // 실제 보여줄 데이터는 news 라는 array 안에 들어 있다. 따라서 
  // news array 를 들고 온다. 
  const newsHTML = `<div class="row news">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <img src="${news.urlToImage}" class="news-img"  alt="">
              </div>
            <div class="col-lg-8 col-md-6 col-sm-12">
              <h2>${news.title}</h2>
              <p>${news.description}</p>
              <div>${news.source.name} * ${news.publishAt}</div>
            </div>
          </div>`;
  newsList.map((item) => {

    
  });

  document.querySelector('.news-board').innerHTML = newsHTML;
}
