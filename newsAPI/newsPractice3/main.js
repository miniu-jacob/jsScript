import { API_KEY } from './apikey.js';

let newsList = [];
let newsHTML = '';
let pageSize = 100;

const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', () => {
  const searchArea = document.querySelector('.search-area');

  const searchState = window.getComputedStyle(searchArea).display;
  if (searchState === 'none') {
    searchArea.style.display = 'block';
  } else {
    searchArea.style.display = 'none';
  }
  
});

  document.querySelector('.search-button').addEventListener('click', () => {
    let userInput = document.querySelector('.user-input');
    let userValue = userInput.value;
    searchNews(userValue);
  })

const searchNews = async (userValue) => {
  try {
    const url = new URL(`https://newsapi.org/v2/top-headlines?q=${userValue}&pageSize=${pageSize}&country=kr&apiKey=${API_KEY}`)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.articles)
    // newsList = data.articles.filter((item) => item.urlToImage !== null);
    newsList = data.articles;
    render();
    
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }

  console.log(newsList)
};

// 데이터 가져오기
const getNews = async () => {
  
  try {
    const url = new URL(`https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&country=kr&apiKey=${API_KEY}`);
    const response = await fetch(url);

    // 응답 상태 코드 확인
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // urlToImage 가 null 아닌 항목만 필터링
    // newsList = data.articles;
    newsList = data.articles.filter((item) => item.urlToImage !== null);

    // 그려주기 
    render();
    
  } catch (error) {
    console.error(`에러는: ${error.message}`)
  }
  console.log(newsList)
}

// 카테고리별 검색
/*
  ### 1. 메뉴에 버튼들 가져오기 
  document.querySelectorAll('.menus button').forEach(() => {});
  ### 2. 버튼에 addEventListener 주기 >>>> 이벤트리스너는 콜백함수를 받는다.
  forEach((item)=>{
    item.addEventListener('click', ()=>{})
    })
  ### 3. 콜백함수에 버튼(요소)의 이름 (콘솔로 찍어보면 textContent가 될 수 있다.) 을 서치 함수를 호출할 때 넣어준다.
*/

document.querySelectorAll('.menus button').forEach((button) => {
  button.addEventListener('click', () => {
    categorySearch(button.textContent.toLocaleLowerCase())
   });

});

// 틀린 코드 !!! 
// document.querySelectorAll('.menus').forEach((button) => {
  // menus 만 가져오면 안되고 하위에 button을 가져와야 함!!!!!!! 
  // button.addEventListener('click', categorySearch(button));
// });

const categorySearch = async (categoryValue) => {
  // console.log('clicked', category)
  // throw new Error(`Stopped`)

  const url = new URL(`https://newsapi.org/v2/top-headlines?category=${categoryValue}&pageSize=${pageSize}&country=kr&apiKey=${API_KEY}`);
  
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles.filter((item) => item.urlToImage !== null);
  
  console.log(newsList)
  render();
}

const render = () => {
  newsHTML = ``;
  
  newsList.forEach((news) => {
    newsHTML += `<div class="row align-items-center news">
            <div class="col-lg-4">
              <img class="news-image1" src="${news.urlToImage}" alt="image">
            </div>
            <div class="col-lg-8">
              <h4>${news.title}</h4>
              <p>${news.description}</p>
              <p>${news.author} x ${news.publishedAt}</p>
            </div>
          </div>`;
  })
  document.querySelector('.news-area').innerHTML = newsHTML;
}

// getNews();  

