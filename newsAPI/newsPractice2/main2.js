// 클라이언트에서 네이버 API 로 요청

document.addEventListener('DOMContentLoaded', () => {
  // DOM 이 완전히 로드된 후 실행되는 이벤트 리스너 추가
  const checkButton = document.getElementById('checkButton');
  // 체크 버튼 요소를 가져와서 
  const categoryInput = document.getElementById('categoryInput');
  // 입력된 카테고리 요소를 가져와서 

  checkButton.addEventListener('click', () => {
    const category = categoryInput.value;
    // 체크 버튼에 클릭 이벤트 리스너 추가 
    getNews(category);    // 버튼이 클릭되면 getNews() 함수를 호출한다. 
  })
})

  // ### 네이버 뉴스 데이터를 가져오는 비동기 함수를 정의
const getNews = async (category = '테슬라') => {
  const url = `http://localhost:3000/news?category=${encodeURIComponent(category)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();   // 응답을 JSON 형식으로 파싱
    console.log('Naver News Data: ', data.items)
    const news = data.items;
    renderNews(news);
  } catch (error) {
    console.error('Error fetching news: ', error);
  }
}

const renderNews = (newsItems) => {
  // 뉴스를 담을 컨테이너를 생성 
  const newsContainer = document.createElement('div');
  newsItems.forEach(news => {
    const newsDiv = document.createElement('div'); // 각 뉴스를 담을 div를 생성
    newsDiv.innerHTML = `
      <h2>${news.title}</h2>  
      <p>${news.description}</p>
      <img src="${news.thumbnail || 'default_image.jpg' }" alt="news image" />
      <p>출처: ${news.originallink}</p>
      <p>날짜: ${new Date(news.pubDate).toLocaleDateString()}</p>
    `;
    newsContainer.appendChild(newsDiv); // 각 뉴스를 컨테이너에 추가
  });
  document.body.appendChild(newsContainer);
}