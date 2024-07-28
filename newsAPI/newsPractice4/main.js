import { API_KEY } from './apikey.js';
import { NewsFetcher2 } from './newsFetcher2.js';

const getNews = new NewsFetcher2(API_KEY, 'kr', 100, 3000);


// 카테고리 버튼 가져오기 
// 버튼들(여러개) 이기 때문에 forEach로 반복적으로 이벤트 리스너를 등록한다. 

document.querySelectorAll('.menus button').forEach((button) => {
  button.addEventListener('click', () => {
    getNews.fetchNews({
      category: button.textContent.toLocaleLowerCase()
    });    
  })
})

// 검색 아이콘 동작 설정
document.querySelector('.search-icon').addEventListener('click', () => {

  const searchArea = document.querySelector('.search-area');
  // 
  // MDN 에서 확인해 보면 div 테그 클래스의 css 속성값을 담을 객체를 반환하는 함수는 window.getComputedStyle() 이다. 
  const searchState = window.getComputedStyle(searchArea).display;

  // let testState = searchArea.style.display;
  // 콘솔로 결과를 찍어보면 <empty string> 으로 나오는데 이는 기본적으로 빈 문자열이다. 따라서 구해온 searchState 값을  div tag 의 display 속성에
  // 넣어줘야 한다. 
  // div tag 속성 === searchArea.style.display 
  searchArea.style.display = searchState === 'none' ? 'block' : 'none';
  // console.log(searchState )

})

// 검색어 버튼으로 검색하기 
document.querySelector('.search-button').addEventListener('click', () => {
  let userInput = document.querySelector('.user-input');
  let userValue = userInput.value;
  getNews.fetchNews({query : userValue });

})

getNews.fetchNews({})