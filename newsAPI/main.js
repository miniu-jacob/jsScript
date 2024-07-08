const API_KEY = `dddc6ed86f8243368ad4fdab7ca2a3c3`;

// 뉴스를 가지고 오는 함수 만들기
const getNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
    // javascript 는 개발자가 필요로 하는 많은 함수들을 제공해 준다.
    // 그중에 하나가 url 이다.
    // url 쿼리, 쿼리만 가지고 오는 작업을 이미 만들어 놓은 javascript를 사용할 수 있다.
    // 즉 url 에 필요한 함수와 변수들을 제공하는데 이때 new URL(); 와 같이 사용할 수 있다.
    // new URL() 에서 URL 과 같은 것을 인스턴스라 한다.
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    // console.log('uuu', url);
    console.log('rrr', response);
};

getNews();
// https://newsapi.org/v2/top-headlines?country=us&apiKey=dddc6ed86f8243368ad4fdab7ca2a3c3

// 자료를 가져오는 함수 = fetch()

for (let i = 0; i < 10; i++) {
    console.log('after', i);
}
