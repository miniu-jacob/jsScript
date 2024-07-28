import { API_KEY } from './apikey.js';

export class NewsFetcher2 {
  constructor(apiKey, country = 'kr', pageSize = 100, port = 3000) {
    this.apiKey = apiKey;
    this.country = country;
    this.pageSize = pageSize;
    this.port = port;
    this.baseUrl = `http://localhost:${port}/news`
    this.newsList = [];
    this.newsHTML = ''; 
  }

  createUrl(params) {
    const url = new URL(this.baseUrl);

    if (params.query) {
      url.searchParams.append('q', params.query);
    }
    if (params.category) {
      url.searchParams.append('category', params.category)
    }
    
    // 필수 파라미터 붙이기
    url.searchParams.append('country', this.country )
    url.searchParams.append('pageSize', this.pageSize);
    url.searchParams.append('apikey', this.apiKey);
    console.log('URL value: ', url.toString());
    return url.toString();
  }


  // 뉴스를 가져오는 메소드 
  async fetchNews(params) {
    /* 
        NewsFetcher2 라는 클래스 안에 createUrl 메소드를 정의했다. 
        main.js 에서 url을 가져오고 매겨변수를 넘겨 가져오기(fetch)를 진행할 수도 있지만 fetch에서 결과값을 받아오는 것이 좋다.
    */
    try {
      const url = this.createUrl(params);
      const response = await fetch(url);
      const data = await response.json();
      const articles = data.articles.filter((item) => item.urlToImage !== null );
      // 뉴스가 들어있는 데이터 리스트(articles)를 updateNewsList 메소드에 넣어 업데이트 한다.
      // console.log('Articles: ', articles)
      // updateNewsList 메소드의 경우 클래스의 인스턴스에 속해 있기 때문에 this 를 바인딩 해야 한다. 
      this.updateNewsList(articles);
    } catch (error) {
      console.error(`Error: ${error.message}`); // 에러 처리
    }
  }

  updateNewsList(articles) {
    console.log('newsList: ', articles)
    this.newsList = articles;
      // 뉴스 리스트를 업데이트 했으니 UI 를 그려주는 render 함수를 호출한다.
    this.render();
    }

  render() {
    /* 
      업데이트된 (updateNewList) 뉴스 리스트를 HTML 로 변환해야 한다.
      뉴스 기사에 대한 HTML 코드가 문자열로 보여져야 한다. 
      HTML 로 변환해서 보여주는 변수 == newsHTML 
      newsHTML >> 여기에 어떤 값을 넣어주냐? 
      기사는 어디에 어떻게 저장되어 있을까? 
      this.newsList 에 배열 형태로 저장되어 있다. 가져다 쓰려면?
      this.newsList.map(()=>{}) >> map함수는 콜백함수를 인자로 받는다. 
      
      각 배열의 요소들 (콜백함수 인자 = ``) 로 두고 `` 안에 HTML 테그를 넣어준다. 
    */
    this.newsHTML = this.newsList.map((news) => 
      `<div class="row align-items-center">
            <div class="col-lg-4">
              <img class="news-image1" src="${news.urlToImage}" alt="image">
            </div>
            <div class="col-lg-8">
              <h4>${news.title}</h4>
              <p>${news.description}</p>
              <p>${news.author} * ${news.publishedAt}</p>
            </div>
          </div>`
      // join 을 통해서 배열의 각 요소를 하나의 긴 문자열로 만든다.
    ).join('');
  
    document.querySelector('.news-area').innerHTML = this.newsHTML;
    
    }
  }