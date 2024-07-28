/* 
  newsFetcher 클래스를 만든다. 
  1. API key, 국가, 페이지 크기를 매개변수로 받아 인스턴스를 생성한다. 
  2. createNewsUrl 메소드는 뉴스 API URL을 생성한다. 
  3. fetchNews 메소드는 url 에서 데이터를 가져온다. 
  4. updateNewsList 메소드는 뉴스 데이터를 가져와서 랜더링한다. 
  5. render 메소드는 뉴스를 HTML 로 랜더링한다. 
*/
/*
  createNewsUrl 메서드
if (params.query):

역할: params 객체에 query 속성이 존재하면 URL에 query 매개변수를 추가합니다.
이유: 사용자가 입력한 검색어를 뉴스 API에 전달하여 해당 검색어와 관련된 뉴스를 검색합니다.
인자 설명: params 객체는 검색어(query), 카테고리(category) 등의 매개변수를 포함할 수 있습니다. query는 사용자가 입력한 검색어를 나타냅니다.
url.searchParams:

역할: URL 객체에서 검색 매개변수를 설정하거나 가져오는 데 사용되는 인터페이스입니다.
출처: URL 객체의 searchParams 속성으로부터 제공됩니다.
이유: URL에 매개변수를 편리하게 추가할 수 있습니다.
append 메서드:

역할: 주어진 매개변수 이름과 값을 URL의 검색 매개변수 목록에 추가합니다.
예시: url.searchParams.append('q', params.query)는 URL에 q=검색어 형식의 매개변수를 추가합니다.

*/

// ### 1. 클래스를 정의하고 내보내기 
export class NewsFetcher {
  // 생성자 함수: 인스턴스가 생성될 때 호출된다. 
  constructor(apiKey, country = 'kr', pageSize = 100, port = 3000) {
    this.apiKey = apiKey;
    this.country = country;
    this.pageSize = pageSize;
    this.newsList = [];           // 뉴스 기사를 저장할 배열 초기화
    this.newsHTML = '';           // 랜더링할 HTML 문자열 초기화
    this.port = port;
    this.baseUrl = `http://localhost:${this.port}/news`;
  }

  // ### 2. news API URL을 생성한다.
  // params 를 매개변수로 받는다. 
  createNewsUrl(params) {
    const url = new URL(this.baseUrl);    // 기본 URL로 URL 객체 생성
    
    /* params 객체에 query 속성이 있으면 URL에 q 매개변수를 추가 
    query는 newsFetcher() 인스턴스를 불러올 때 { query: userValue } 형태로 전달한다.
    인스턴스 형태로 query: 가 전달되므로 params 객체에 query 속성이 있게 된다.
    newsFetcher.fetchAndRenderNews({ query: userValue }); // 검색어를 포함한 뉴스 가져오기
    중괄호로 묶는 이유는 여러 개의 매개변수를 하나의 객체로 묶어 관리할 수 있다.
    */

    if (params.query) {
      /*  URL.searchParams 인터페이스는 URL 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메소드
       1. URL.searchParams.append() : 주어진 키/값 쌍을 새로운 검색 매개변수로 추가한다.
       2. URL.searchParams.delete() : 주어진 검색 매개변수와 그 값을 모두 삭제한다. 
       ### 사용법: url.searchParams.append('key', value);

      */
      url.searchParams.append('q', params.query);     // 검색어를 baseURL에 추가
    }
    
    if (params.category) {
      url.searchParams.append('category', params.category);   // 카테고리 추가 
    }

    // 기타 매개변수 추가 
    url.searchParams.append('pageSize', this.pageSize);
    url.searchParams.append('country', this.country);
    url.searchParams.append('apiKey', this.apiKey);
    // 최종 URL 문자열 반환
    // return url.toString(); 
    
    // url 에서 toString()을 삭제해 보니 url 객체 자체를 반환. 가져올때는 url에 접속해서 가져와야 하니 toString을 쓰는 것이 맞음
    // return url;
  }

  // ### 3. 뉴스를 가져오는 fetchNews 메소드
  // 예전) const response = async fetch(url); 
  async fetchAndRenderNews(params) {

  }

} // 클래스의 끝 