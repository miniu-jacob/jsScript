import config from '../apikey.js'
const API_KEY = config.NEWS_API_KEY1;
// const API_KEY = process.env.NEWS_API_KEY1;
let news = [];

// 뉴스를 가지고 오는 함수 만들기
const getNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
    // javascript 는 개발자가 필요로 하는 많은 함수들을 제공해 준다.
    // 그중에 하나가 url 이다.
    // url 쿼리, 쿼리만 가지고 오는 작업을 이미 만들어 놓은 javascript를 사용할 수 있다.
    // 즉 url 에 필요한 함수와 변수들을 제공하는데 이때 new URL(); 와 같이 사용할 수 있다.
    // new URL() 에서 URL 과 같은 것을 인스턴스라 한다.

    // async: 비동기 처리를 하겠다.
    // const url = new URL(
    //     `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    // );
    console.log('API_KEY: ', API_KEY);
    const response = await fetch(url);
    // console.log('uuu', url);
    const data = await response.json();
    news = data.articles;
    //  data의 내용을 개발자 모드에서 확인해 보면
    // articles, status, totalResults 가 있는 것을 확인할 수 있다. 따라서 articles를 보고 싶다면
    // data.articles 로 쓸 수 있다.
    // 따라서 article 부분을 news에 저장해서 뽑아 볼 수 있다.
    console.log('rrr', news);
};

getNews();
// https://newsapi.org/v2/top-headlines?country=us&apiKey=dddc6ed86f8243368ad4fdab7ca2a3c3

// 자료를 가져오는 함수 = fetch()
// 보고 싶은 데이터는 body 안의 데이터인데 json의 형태로 뽑아 달라 라고 요청할 수 있다.
// 즉 response의 데이터를 response.json() 제이슨의 형태로 뽑아 달라
// const data = response.json();
// 파일 형태의 확장자. 객체 - 텍스트 타입

for (let i = 0; i < 10; i++) {
    console.log('after', i);
}
